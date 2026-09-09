# Atualização 2026-09-08 - Correção do checkout InfinitePay

## Escopo

O botão dos Pacotes de Fundador falhava porque a landing enviava somente `package_id`, enquanto a
Edge Function ativa exigia dados de identificação adicionais. A correção alinhou o front-end e o
backend de Desenvolvimento no contrato `{ package_id, email }`.

## Mudanças

- `src/App.jsx`: modal acessível para captura do e-mail, estados de envio e confirmação de pagamento.
- `src/checkout.js`: contrato com as Edge Functions, allowlist de hosts HTTPS da InfinitePay e consulta
  autoritativa de status.
- `src/index.css`: estilos responsivos do modal e da confirmação.
- `src/App.js`: recompilado a partir de `src/App.jsx`.
- Backend `../autorama-supabase`: publicadas somente `infinitepay-create-checkout`,
  `infinitepay-webhook` e `founder-payment-status` no projeto de Desenvolvimento. Nenhuma migration foi
  executada.

## Validação observada

- `npm run build`: aprovado.
- `node --test scripts/founder-checkout.test.mjs`: 4/4 testes aprovados no backend.
- `deno check` nas três Edge Functions: aprovado.
- Smoke remoto do pacote Bronze com e-mail sintético: HTTP 200, origem local autorizada e link no host
  `checkout.infinitepay.io`.
- E2E no navegador: botão Bronze → modal → envio de e-mail sintético → checkout InfinitePay carregado.
  Nenhum pagamento foi efetuado.

## Estado operacional

O fluxo está ativo somente em Desenvolvimento/homologação. O catálogo do backend cobra R$ 1,00 no
Bronze de Desenvolvimento, embora a landing exiba o preço de Produção. Não usar esta configuração como
prova de que Produção está pronta. `RESEND_API_KEY` ainda não está configurada no Desenvolvimento, então
as notificações por e-mail permanecem pendentes.

## Rollback

Republique as versões anteriores das três Edge Functions pelo histórico do projeto Supabase e reverta
os quatro arquivos da landing alterados nesta atualização. Não há rollback de schema porque nenhuma
migration ou alteração de dados foi executada.

#operacao #checkout #infinitepay #supabase
