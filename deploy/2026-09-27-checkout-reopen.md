# Reabertura das vendas — 27/09/2026

Publicado em `https://autorama.horsepower-studio.com/` em 2026-09-27T10:10:41Z, a pedido do usuário.

## Alteração

A release de Download estava saudável, mas os três botões exibiam “Disponível em breve”.
Rebuild da fonte imutável já publicada no Git, com `VITE_CHECKOUT_ENABLED=true` e
`VITE_SUPABASE_PROJECT_REF=nmenoqjgjtrpvowguvlg`. Nenhuma alteração de código, backend, preços,
DNS ou Caddy. Downloads preservados.

- Fonte: `a9a9dc2bf82c9b5f40f2b0192037a8f1a7880210` (origin/codex/android-download).
- Diretório VPS: `/home/yandias/autorama-founder/releases/a9a9dc2bf82c9b5f40f2b0192037a8f1a7880210-checkout-20260927`.
- Tag: `autorama-founder:a9a9dc2-checkout-20260927`.
- Imagem implantada pelo ID: `sha256:7110b8b00e5d73a3ab5c3ab43bcb87665486bf365fac5d058416705c74c27d50`.
- Artefato SHA-256: `d0552c343d01febcbe1e8d769adb18b08d23e9be3c30894d37a73e60bffae25c`.
- Build limpo de `git archive`, `npm ci` e `npm run build`; 5 testes aprovados. Não há workflow `.github` versionado nessa fonte; consulta de Actions via gh indisponível por falta de autenticação.

## Evidências

- Produção: checkout Bronze, Prata e Ouro retornou 200; páginas InfinitePay mostraram recebedor Horse Power Tech / `$power-horse-p86` e R$ 49, R$ 89 e R$ 149.
- Pacote/e-mail inválido: 400. Origem indevida: 403. Retorno forjado: 400 com status invalid.
- Dados sintéticos identificados por `teste-reabertura-20260927@example.com`; quatro links de teste criados (três pela API e um pelo fluxo público). Nenhum pagamento efetuado ou confirmação de entrega alegada.
- Navegador após deploy: três botões habilitados; Bronze → modal → e-mail sintético → InfinitePay exibiu R$ 49. Verificação terminou no formulário de contato; etapa posterior de pagamento não executada.
- Container healthy, zero reinicializações, nenhuma porta no host; mount dos downloads somente leitura.
- HTTPS: landing, JS/CSS, health, manifesto e HEAD do APK 200; APK com 338137851 bytes. `/.env`, listagem de downloads e POST à landing retornaram 403.
- Site principal 200 antes/depois. Caddyfile inalterado: `5283e95e7e52193d31e83f58d11e233c52225a40ab03c5f2445c58106a12e812`.
- Logs sem falha de inicialização; erros observados correspondem aos três testes deliberados de acesso negado.

## Backup e rollback

Backup: `/home/yandias/autorama-founder/backups/20260927-checkout-reopen` (inspect, compose e Caddyfile).
Imagem anterior preservada. Rollback avaliado, não executado; restaura downloads com compras desabilitadas:

```sh
cd /home/yandias/autorama-founder/releases/07e35a039e4dea8c097351bfd31e361bb25aaa4d
sudo -n env FOUNDER_IMAGE=sha256:5553f4f25f09f77dfae19f6bd4757edb3e333fee5b44feec0af774ee876e3d6c CADDY_NETWORK=horsepower-studio_default DOWNLOADS_DIR=/home/yandias/autorama-founder/downloads docker compose -f deploy/compose.yaml up -d --no-deps --wait landing
```

O gate é apenas da interface. Pedidos já emitidos continuam sujeitos ao fluxo normal do backend.
