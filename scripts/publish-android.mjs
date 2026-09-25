// Publica uma build Android no VPS e aponta o manifesto /downloads/android.json para ela.
// Uso: npm run publish:android -- --apk <arquivo.apk> --version "1.0.8 preview 2"
// Opcionais: --min-android "Android 7.1" --file <nome.apk> --host --key --dir --site
import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { createReadStream, statSync } from 'node:fs'
import { homedir } from 'node:os'
import { basename, dirname, join, resolve } from 'node:path'
import { parseArgs } from 'node:util'
import { parseAndroidRelease } from '../src/android-release.js'

const { values: args } = parseArgs({
  options: {
    apk: { type: 'string' },
    version: { type: 'string' },
    'min-android': { type: 'string', default: 'Android 7.1' },
    file: { type: 'string' },
    host: { type: 'string', default: 'yandias@212.85.15.133' },
    key: { type: 'string', default: join(homedir(), '.ssh', 'id_ed25519_autorama_deploy') },
    dir: { type: 'string', default: '/home/yandias/autorama-founder/downloads' },
    site: { type: 'string', default: 'https://autorama.horsepower-studio.com' },
  },
})

// Sem process.exit: no Windows ele aborta o Node com fetch/ssh ainda fechando.
function fail(message) {
  throw new Error(message)
}

async function main() {
  if (!args.apk || !args.version) fail('informe --apk e --version')
  if (!/^\/[A-Za-z0-9._/-]+$/.test(args.dir)) fail(`--dir inválido: ${args.dir}`)

  const apkPath = resolve(args.apk)
  const version = args.version.trim()
  const file = args.file ?? `AutoramaRacing-${version.replace(/\s+/g, '-')}.apk`
  const bytes = statSync(apkPath).size
  const sha256 = await new Promise((done, reject) => {
    const hash = createHash('sha256')
    createReadStream(apkPath)
      .on('data', (chunk) => hash.update(chunk))
      .on('end', () => done(hash.digest('hex')))
      .on('error', reject)
  })

  const manifest = {
    version,
    file,
    bytes,
    sha256,
    minAndroid: args['min-android'],
    publishedAt: new Date().toISOString(),
  }
  // O mesmo validador do site: um manifesto que a página rejeitaria nunca é enviado.
  if (!parseAndroidRelease(manifest)) fail(`manifesto inválido: ${JSON.stringify(manifest)}`)

  const sshOptions = ['-i', args.key, '-o', 'BatchMode=yes', '-o', 'StrictHostKeyChecking=yes']

  function ssh(script, input) {
    const result = spawnSync('ssh', [...sshOptions, args.host, script], {
      input,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'inherit'],
    })
    if (result.status !== 0) fail(`ssh terminou com código ${result.status}`)
    return result.stdout.trim()
  }

  const dir = args.dir
  const incoming = `.incoming-${file}`
  console.log(`APK ${file}: ${bytes} bytes, SHA-256 ${sha256}`)

  // Um nome já publicado nunca é substituído por conteúdo diferente.
  const existing = ssh(
    `mkdir -p '${dir}' && chmod 755 '${dir}' && cd '${dir}' && ` +
      `if [ -e '${file}' ]; then sha256sum -- '${file}' | cut -d' ' -f1; fi`,
  )
  if (existing && existing !== sha256) fail(`${file} já existe no VPS com outro conteúdo; use outra --version`)

  if (existing) {
    console.log('APK idêntico já está no VPS; envio ignorado.')
  } else {
    console.log('Enviando APK...')
    // Caminho relativo: o scp trataria "A:\..." como host remoto.
    const upload = spawnSync('scp', [...sshOptions, basename(apkPath), `${args.host}:${dir}/${incoming}`], {
      cwd: dirname(apkPath),
      stdio: 'inherit',
    })
    if (upload.status !== 0) fail(`scp terminou com código ${upload.status}`)

    const remoteHash = ssh(`cd '${dir}' && sha256sum -- '${incoming}' | cut -d' ' -f1`)
    if (remoteHash !== sha256) fail(`hash no VPS difere (${remoteHash}); arquivo .incoming mantido para análise`)
    ssh(`cd '${dir}' && chmod 644 '${incoming}' && mv -n -- '${incoming}' '${file}' && [ ! -e '${incoming}' ]`)
  }

  // Troca atômica do manifesto; o anterior fica em .android.json.prev para reverter.
  ssh(
    `cd '${dir}' && cat > .android.json.tmp && chmod 644 .android.json.tmp && ` +
      `{ [ ! -e android.json ] || cp -p android.json .android.json.prev; } && mv -f .android.json.tmp android.json`,
    `${JSON.stringify(manifest, null, 2)}\n`,
  )
  console.log(`Manifesto atualizado para ${version}.`)

  const published = await fetch(`${args.site}/downloads/android.json`, { cache: 'no-store' })
  const live = published.ok ? parseAndroidRelease(await published.json().catch(() => null)) : null
  const head = await fetch(`${args.site}/downloads/${file}`, { method: 'HEAD' })
  const liveBytes = Number(head.headers.get('content-length'))
  if (live?.sha256 !== sha256 || !head.ok || liveBytes !== bytes) {
    fail(
      `verificação pública falhou (manifesto ${published.status}, APK ${head.status}, ${liveBytes} bytes). ` +
        'A landing publicada precisa montar a pasta de downloads.',
    )
  }
  console.log(`Publicado: ${args.site}/downloads/${file}`)
}

main().catch((error) => {
  console.error(`erro: ${error.message}`)
  process.exitCode = 1
})
