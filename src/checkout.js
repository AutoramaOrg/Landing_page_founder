// Integração com o checkout InfinitePay via Edge Function do Supabase.
// A função cria o link de pagamento server-side (a API da InfinitePay não
// permite chamadas diretas do navegador) e registra o pedido para conciliação
// posterior pelo webhook.

// Fase de testes: Autorama Desenvolvimento. Na virada para produção, trocar
// pelo projeto nmenoqjgjtrpvowguvlg.
const CHECKOUT_ENDPOINT =
  'https://wqzcimuetknagejrkuqh.supabase.co/functions/v1/infinitepay-create-checkout'

export async function createCheckout(packageId) {
  const response = await fetch(CHECKOUT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ package_id: packageId }),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok || !data?.url) {
    throw new Error(data?.error || 'Falha ao criar o link de pagamento')
  }
  return data.url
}

// A InfinitePay redireciona de volta para a landing com os dados da transação
// na query string (order_nsu, transaction_nsu, slug, capture_method, receipt_url).
export function readPaymentResult() {
  const params = new URLSearchParams(window.location.search)
  if (!params.get('order_nsu') || !params.get('transaction_nsu')) {
    return null
  }
  return {
    orderNsu: params.get('order_nsu'),
    captureMethod: params.get('capture_method'),
    receiptUrl: params.get('receipt_url'),
  }
}
