import assert from 'node:assert/strict'
import test from 'node:test'
import { fetchAndroidRelease, parseAndroidRelease } from '../src/android-release.js'

const manifest = {
  version: '1.0.8 preview 2',
  file: 'AutoramaRacing-1.0.8-preview2.apk',
  bytes: 338137851,
  sha256: 'bb579e32638559cbae311d889c69d7ffdcc0ebffb85b8e2609ddde8717d03c5a',
  minAndroid: 'Android 7.1',
}

test('manifesto válido vira link local com tamanho legível', () => {
  assert.deepEqual(parseAndroidRelease(manifest), {
    version: '1.0.8 preview 2',
    url: '/downloads/AutoramaRacing-1.0.8-preview2.apk',
    file: 'AutoramaRacing-1.0.8-preview2.apk',
    size: '338 MB',
    sha256: manifest.sha256,
    minAndroid: 'Android 7.1',
  })
})

test('manifesto não pode apontar para fora de /downloads/ nem trazer campos inválidos', () => {
  for (const file of ['../index.html', 'https://evil.example/x.apk', '.hidden.apk', 'a/b.apk', 'x.exe']) {
    assert.equal(parseAndroidRelease({ ...manifest, file }), null, file)
  }
  assert.equal(parseAndroidRelease({ ...manifest, sha256: 'BB57' }), null)
  assert.equal(parseAndroidRelease({ ...manifest, bytes: '338' }), null)
  assert.equal(parseAndroidRelease({ ...manifest, version: '' }), null)
  assert.equal(parseAndroidRelease(null), null)
})

test('falha de rede ou manifesto inválido rejeita', async () => {
  await assert.rejects(fetchAndroidRelease(async () => ({ ok: false, status: 404 })))
  await assert.rejects(fetchAndroidRelease(async () => ({ ok: true, json: async () => ({}) })))
  const release = await fetchAndroidRelease(async (url, init) => {
    assert.equal(url, '/downloads/android.json')
    assert.equal(init.cache, 'no-cache')
    return { ok: true, json: async () => manifest }
  })
  assert.equal(release.version, '1.0.8 preview 2')
})
