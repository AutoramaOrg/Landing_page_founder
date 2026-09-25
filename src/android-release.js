// A build Android fica fora da imagem: o VPS serve o APK e este manifesto em /downloads/,
// atualizados por scripts/publish-android.mjs sem novo deploy da landing.
export const ANDROID_MANIFEST_URL = '/downloads/android.json'

const FILE_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]*\.apk$/
const SHA256_PATTERN = /^[0-9a-f]{64}$/

// Aceita só o formato gravado pelo script de publicação; qualquer outro valor vira null.
export function parseAndroidRelease(data) {
  if (!data || typeof data !== 'object') return null
  const { version, file, bytes, sha256, minAndroid } = data
  if (typeof version !== 'string' || !version.trim() || version.length > 40) return null
  if (typeof file !== 'string' || !FILE_PATTERN.test(file)) return null
  if (!Number.isSafeInteger(bytes) || bytes <= 0) return null
  if (typeof sha256 !== 'string' || !SHA256_PATTERN.test(sha256)) return null
  if (typeof minAndroid !== 'string' || !minAndroid.trim() || minAndroid.length > 40) return null

  return {
    version: version.trim(),
    url: `/downloads/${file}`,
    file,
    size: `${Math.round(bytes / 1e6)} MB`,
    sha256,
    minAndroid: minAndroid.trim(),
  }
}

export async function fetchAndroidRelease(fetchImpl = fetch) {
  const response = await fetchImpl(ANDROID_MANIFEST_URL, { cache: 'no-cache' })
  if (!response.ok) throw new Error(`manifest ${response.status}`)
  const release = parseAndroidRelease(await response.json())
  if (!release) throw new Error('manifest inválido')
  return release
}
