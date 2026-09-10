# Autorama Founder — ambientes e operação

## Alvos confirmados

- Landing local: este repositório; `npm run dev` usa Desenvolvimento.
- Backend: `../autorama-supabase`; publicar somente as três funções de fundador e suas dependências.
- Supabase Desenvolvimento: `wqzcimuetknagejrkuqh`.
- Supabase Produção: `nmenoqjgjtrpvowguvlg` (Autorama Producao).
- VPS autorizado pelo usuário: `212.85.15.133`, atualmente atende Horsepower Studio.
- Conta InfinitePay confirmada pelo usuário: `$power-horse-p86` (handle da API sem `$`).
- Landing pública: `https://autorama.horsepower-studio.com/`.
- Domínio de envio verificado: `send.autorama.horsepower-studio.com`.

## Estado observado — 2026-09-09

SSH por chave para `yandias` está ativo. O Caddy existente responde pelo site principal e também
pela landing, na rede Docker `horsepower-studio_default`; não houve reinício de VPS, Docker ou
outros containers. O DNS A `autorama` aponta para `212.85.15.133` e foi observado em 1.1.1.1 e
8.8.8.8. A configuração anterior do Caddy foi preservada no VPS como
`Caddyfile.bak-20260909-050500-autorama`.

Produção Supabase tem as tabelas `founder_orders` e `founder_order_notifications`, ambas com RLS
ativo, e a migration `20260909090000` registrada. As funções públicas exclusivas da landing estão
ativas: `infinitepay-create-checkout`, `founder-payment-status` e `infinitepay-webhook`.
`handle-events` não foi alterada. Foram configurados handle, origem e retorno. Em 2026-09-10 o
Resend foi configurado com chave limitada a envio e ao domínio verificado; os segredos
`RESEND_API_KEY` e `RESEND_FROM` estão no projeto de Produção. Um envio real de
`compras@send.autorama.horsepower-studio.com` para `contact@autoramaracing.com` foi observado
como `delivered` no painel. As chaves efêmeras usadas no smoke foram revogadas.

Landing ativa: release `f8251973772f8ca2826860a8005452bfd4f5257f`, imagem
`sha256:1fce2b711bb1b7928237f4d5606cfe7628d045e30a1df20742a6776ad4a70483` e container
`autorama-founder-landing-1`. O artefato publicado teve SHA-256
`4dbff1f13dd367939470df0b5d2fa4443de6998b1687cbb2dc778f364559e91f`. Bronze 4900, Prata 8900
e Ouro 14900 centavos. A UI pública está habilitada desde 2026-09-10. A release anterior
`50875763a9d0a07331c4166e8e3d02f8fc96233c` foi preservada como rollback imediato; a imagem
`65ea292d59974c7b18b745c312f9d7efb464ee60`, com compras desativadas, também permanece como
fallback operacional.

## Segurança e gates

Build público escolhe exclusivamente Supabase Produção. A primeira release começou com compras desativadas.
`VITE_CHECKOUT_ENABLED=true` é um gate de interface, não autenticação nem bloqueio do endpoint.
Só habilitá-lo após validação remota e definição do acompanhamento operacional dos pedidos.
Valores `VITE_*` são públicos e nunca devem conter credenciais.

Runtime ativo: Nginx sem root, imagem-base fixada por digest, filesystem somente leitura,
sem capabilities, limites de recursos, porta 8080 apenas na rede Docker; HTTPS no Caddy existente.
O Docker Engine local está indisponível; build e validação real foram executados no VPS. A porta 8080
não é acessível externamente; TLS e headers foram verificados pela borda pública.

## Runbook

Seguir [deploy/RUNBOOK.md](deploy/RUNBOOK.md). Ele é um plano de preparação, não evidência de deploy;
preencher os parâmetros com inspeção real antes de executar escritas. Não executar `supabase db push`
ou publicar `handle-events`: o backend contém mudanças alheias a esta landing.

## Validação local

- `node --test scripts/checkout-config.test.mjs`
- `npm run build`
- `npm run preview -- --port 4175 --strictPort`
- Backend: `node --test scripts/founder-checkout.test.mjs scripts/founder-payment-security.test.mjs`
- Backend: `npx -y deno check supabase/functions/infinitepay-create-checkout/index.ts supabase/functions/founder-payment-status/index.ts supabase/functions/infinitepay-webhook/index.ts`

Comandos locais não substituem smoke pelo domínio HTTPS nem confirmação real de pagamento.
