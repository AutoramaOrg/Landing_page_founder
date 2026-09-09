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

O site principal responde por Caddy. SSH verifica a chave de host conhecida, mas recusa a chave
local de deploy para `yandias`; não houve alteração no VPS. DNS do subdomínio não existe; NS do
domínio usa `dns-parking.com`. Arquivos de deploy antigos encontrados em outro repositório são
referência histórica, não prova dos caminhos, containers ou redes ativos.

Produção Supabase tem `handle-events`, mas não as três funções de fundador. As tabelas
`founder_orders` e `founder_order_notifications` não existem. Metadados de secrets não incluem
InfinitePay, retorno, CORS ou Resend. Não houve escrita em Produção nesta preparação.

Código local preparado: Bronze 4900, Prata 8900 e Ouro 14900 centavos no backend. Desenvolvimento
remoto ainda usa a versão anterior (Bronze de homologação a 100 centavos). A alteração de preço
não foi publicada em nenhum ambiente.

## Segurança e gates

Build público escolhe exclusivamente Supabase Produção e começa com compras desativadas.
`VITE_CHECKOUT_ENABLED=true` é um gate de interface, não autenticação nem bloqueio do endpoint.
Só habilitá-lo após validação remota e definição do acompanhamento operacional dos pedidos.
Valores `VITE_*` são públicos e nunca devem conter credenciais.

Runtime planejado: Nginx sem root, imagem-base fixada por digest, filesystem somente leitura,
sem capabilities, limites de recursos, porta 8080 apenas na rede Docker; HTTPS no Caddy existente.
O Docker Engine local está indisponível; build da imagem e validação real dos headers ainda pendentes.

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
