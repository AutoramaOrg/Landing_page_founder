# Checkout InfinitePay

## Estado atual

- **Status:** ativo no ambiente de Desenvolvimento para homologação.
- **Código da landing:** `src/App.jsx` coleta o e-mail e `src/checkout.js` chama as Edge Functions.
- **Backend:** repositório irmão `../autorama-supabase`.
- **Desenvolvimento local:** Autorama Desenvolvimento (`wqzcimuetknagejrkuqh`).
- **Build público:** exclusivo para Autorama Producao (`nmenoqjgjtrpvowguvlg`), compras desativadas por padrão.
- **Produção remota:** checkout ainda não instalado; ver `PROJECT_PROFILE.md` e `deploy/RUNBOOK.md` na raiz.
- **Recebedor aprovado:** `$power-horse-p86`; configuração remota de Produção ainda pendente.
- **Catálogo local:** Bronze R$ 49, Prata R$ 89, Ouro R$ 149. Desenvolvimento remoto ainda usa Bronze R$ 1 até novo deploy.

Ao escolher Bronze, Prata ou Ouro, a página abre um modal e solicita um e-mail válido. O cliente envia
`{ package_id, email }`; preço, catálogo, credenciais e criação do pedido ficam no backend. A resposta
só é aceita quando contém uma URL HTTPS de um host exato da InfinitePay.

Depois do pagamento, os parâmetros de retorno não são tratados como prova. A landing chama
`founder-payment-status`, que consulta a InfinitePay antes de exibir a confirmação.

O código local exige booleanos literais de sucesso/pagamento e valor inteiro exato do pedido na
resposta autoritativa; ausência de valor é rejeitada. Esse endurecimento ainda não foi publicado.
Contrato conferido na [documentação oficial](https://www.infinitepay.io/checkout-documentacao).

`VITE_CHECKOUT_ENABLED=true` libera a UI após homologação; não é controle de acesso do backend.
Não enviar valores ou credenciais em `VITE_*`. O modal não promete notificação por e-mail enquanto
Resend não foi validado; entrega manual ainda exige rotina operacional antes de abrir vendas.

## Segurança

Não há credenciais da InfinitePay na landing. Chaves, InfiniteTag e URLs de retorno pertencem aos
secrets das Edge Functions do Supabase e não ao navegador. As origens permitidas são controladas por
`FOUNDER_ALLOWED_ORIGINS`.

O envio de e-mails via Resend permanece desabilitado no Desenvolvimento enquanto `RESEND_API_KEY` não
for configurada. A ausência dessa integração não reverte um pagamento já confirmado; a tentativa fica
registrada para tratamento operacional.

## Validação

- `npm run build` executado com sucesso em `2026-09-08`.
- `node --test scripts/founder-checkout.test.mjs` no backend: 4 testes aprovados.
- `deno check` nas três Edge Functions: aprovado.
- Funções publicadas no projeto de Desenvolvimento em `2026-09-08`: `infinitepay-create-checkout`,
  `infinitepay-webhook` e `founder-payment-status`.
- Smoke remoto: pacote Bronze com e-mail sintético retornou HTTP 200, CORS correto e host
  `checkout.infinitepay.io`.
- E2E no navegador: botão Bronze → modal → e-mail sintético → checkout InfinitePay carregado. Nenhum
  pagamento foi efetuado.

#integracoes #infinitepay #checkout
