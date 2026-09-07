# Checkout InfinitePay

## Estado atual

- **Status:** inativo para vendas reais.
- **Código:** `src/App.jsx` chama `src/checkout.js` ao escolher um pacote.
- **Ambiente configurado no código:** Autorama Desenvolvimento (`wqzcimuetknagejrkuqh`).
- **Produção:** não configurada nesta versão.

O cliente envia somente `package_id`. O endpoint de desenvolvimento atualmente exige dados adicionais,
portanto o botão pode exibir a mensagem de erro de checkout. Esta cópia foi preservada como referência
visual e não deve ser usada para iniciar pagamentos até que o contrato do frontend e da Edge Function
sejam alinhados.

## Segurança

Não há credenciais da InfinitePay no repositório. Chaves, InfiniteTag e URLs de retorno pertencem aos
segredos das Edge Functions do Supabase e não ao navegador.

## Validação

- `npm run build` executado com sucesso em 2026-09-07.
- Nenhum pagamento ou chamada de checkout foi executado durante a recuperação desta versão.

#integracoes #infinitepay #checkout
