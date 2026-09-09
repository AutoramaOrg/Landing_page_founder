# Autorama Founder — ambientes e operação

## Alvos confirmados

- Landing local: este repositório; `npm run dev` usa Desenvolvimento.
- Backend: `../autorama-supabase`; publicar somente as três funções de fundador e suas dependências.
- Supabase Desenvolvimento: `wqzcimuetknagejrkuqh`.
- Supabase Produção: `nmenoqjgjtrpvowguvlg` (Autorama Producao).
- VPS autorizado pelo usuário: `212.85.15.133`, atualmente atende Horsepower Studio.
- Conta InfinitePay confirmada pelo usuário: `$power-horse-p86` (handle da API sem `$`).
- Subdomínio proposto: `autorama.horsepower-studio.com`; ainda não publicado.

## Estado observado — 2026-09-09

SSH por chave para `yandias` está ativo. O Caddy existente responde pelo site principal e também
pela landing, na rede Docker `horsepower-studio_default`; não houve reinício de VPS, Docker ou
outros containers. O DNS A `autorama` aponta para `212.85.15.133` e foi observado em 1.1.1.1 e
8.8.8.8. A configuração anterior do Caddy foi preservada no VPS como
`Caddyfile.bak-20260909-050500-autorama`.

Produção Supabase tem as tabelas `founder_orders` e `founder_order_notifications`, ambas com RLS
ativo, e a migration `20260909090000` registrada. As funções públicas exclusivas da landing estão
ativas: `infinitepay-create-checkout`, `founder-payment-status` e `infinitepay-webhook`.
`handle-events` não foi alterada. Foram configurados handle, origem e retorno; Resend permanece
ausente, portanto alertas/recibos por e-mail não estão disponíveis.

Landing implantada: release `65ea292d59974c7b18b745c312f9d7efb464ee60`, imagem
`sha256:57e5eee98695be70bbf583abd8e49bccd5e42046df34cf0f3a417d3eee0bbe21` e container
`autorama-founder-landing-1`. Bronze 4900, Prata 8900 e Ouro 14900 centavos. A UI pública está
deliberadamente bloqueada até haver decisão operacional sobre os pedidos.

## Segurança e gates

Build público escolhe exclusivamente Supabase Produção e começa com compras desativadas.
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
