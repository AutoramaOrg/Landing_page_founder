// Integração com o checkout InfinitePay via Edge Functions do Supabase.
// O navegador envia apenas os dados de identificação da compra; preços,
// credenciais e confirmação do pagamento permanecem no servidor.

import { resolveCheckoutConfig } from './checkout-config.js'

const config = resolveCheckoutConfig({
  development: import.meta.env.DEV,
  projectRef: import.meta.env.VITE_SUPABASE_PROJECT_REF,
  enabled: import.meta.env.VITE_CHECKOUT_ENABLED,
})
export const checkoutEnabled = config.enabled
const CHECKOUT_ENDPOINT = `${config.baseUrl}/infinitepay-create-checkout`
const PAYMENT_STATUS_ENDPOINT = `${config.baseUrl}/founder-payment-status`

const CHECKOUT_HOSTS = new Set([
  'checkout.infinitepay.com.br',
  'checkout.infinitepay.io',
])

function validateCheckoutUrl(value) {
  let url
  try {
    url = new URL(value)
  } catch {
    throw new Error('A resposta do checkout contém uma URL inválida')
  }

  if (url.protocol !== 'https:' || !CHECKOUT_HOSTS.has(url.hostname) || url.username || url.password || url.port) {
    throw new Error('A resposta do checkout contém um destino não autorizado')
  }

  return url.toString()
}

export async function createCheckout(packageId, buyer) {
  if (!checkoutEnabled) throw new Error('As compras estarão disponíveis em breve.')
  const email = typeof buyer?.email === 'string' ? buyer.email.trim().toLowerCase() : ''
  if (!['bronze', 'prata', 'ouro'].includes(packageId) || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Confira o pacote e informe um e-mail válido.')
  }
  const response = await fetch(CHECKOUT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      package_id: packageId,
      email,
    }),
    signal: AbortSignal.timeout(15000),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok || !data?.url) {
    throw new Error(data?.error || 'Falha ao criar o link de pagamento')
  }
  return validateCheckoutUrl(data.url)
}

// A InfinitePay redireciona de volta para a landing com os identificadores
// usados pelo servidor para confirmar o pagamento de forma autoritativa.
export function readPaymentResult() {
  const params = new URLSearchParams(window.location.search)
  if (!params.get('order_nsu') || !params.get('transaction_nsu') || !params.get('slug')) {
    return null
  }
  return {
    orderNsu: params.get('order_nsu'),
    transactionNsu: params.get('transaction_nsu'),
    invoiceSlug: params.get('slug'),
    captureMethod: params.get('capture_method'),
    receiptUrl: params.get('receipt_url'),
  }
}

export async function getPaymentStatus(result) {
  const response = await fetch(PAYMENT_STATUS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      order_nsu: result.orderNsu,
      transaction_nsu: result.transactionNsu,
      slug: result.invoiceSlug,
      capture_method: result.captureMethod,
      receipt_url: result.receiptUrl,
    }),
    signal: AbortSignal.timeout(15000),
  })
  const data = await response.json().catch(() => null)
  if (!['paid', 'pending', 'invalid'].includes(data?.status) || (!response.ok && data.status !== 'invalid')) {
    throw new Error(data?.error || 'Não foi possível verificar o pagamento')
  }
  if (data.receipt_url) {
    try { data.receipt_url = validateCheckoutUrl(data.receipt_url) } catch { data.receipt_url = null }
  }
  return data
}
