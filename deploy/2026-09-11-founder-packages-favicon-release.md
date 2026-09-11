# Release de pacotes e favicon — 2026-09-11

## Estado implantado

- Alvo: `https://autorama.horsepower-studio.com/` no VPS `212.85.15.133`.
- Horário observado após o deploy: `2026-09-11T16:57:47Z`.
- Commit da aplicação: `9839991ba4c601c8f232b7685531eddb22911b30`, enviado para
  `origin/feat/landing-redesign-mockup`.
- Artefato SHA-256: `527c39b125b599447a61483f12925b979ea4ffc855046dccbc0c9c5b62325638`.
- Imagem ativa: `autorama-founder:9839991ba4c601c8f232b7685531eddb22911b30`.
- Image ID: `sha256:e7335b47792f1d791f4c464b8568975728fe3a4115f6edfc0cd8d30e79720af3`.
- Container: `autorama-founder-landing-1`, saudável, sem porta publicada no host.

O badge “Coleção completa” e a afirmação equivalente no texto alternativo foram removidos. Bronze,
Prata e Ouro agora comunicam respectivamente um, dois e três carros, cada qual com um bodykit e uma
pintura especial. O favicon oficial foi publicado em `/favicon.ico`. Preços, ids dos pacotes,
checkout, Supabase, Caddy, banco e demais containers não foram alterados.

## Validação observada

- `npm run build` com `VITE_CHECKOUT_ENABLED=true`: concluído com Vite 7.3.2.
- `node --test scripts/checkout-config.test.mjs`: 2 testes aprovados.
- Imagem candidata isolada: health, HTML e favicon retornaram `200`; `/.env` e `POST /` retornaram
  `403`; container sem root, read-only, sem capabilities e sem porta publicada.
- Borda pública: landing, `/healthz`, favicon e asset Ouro retornaram `200`; favicon com 3314 bytes;
  site principal permaneceu `200`; porta 8080 continuou inacessível externamente.
- Smoke visual em Chrome nas larguras 1440 e 390 confirmou os três cards, as novas descrições e a
  ausência do badge. O único ajuste entre o smoke visual e a release final foi o texto alternativo
  do Ouro, também confirmado no bundle público.

## Backup e rollback

O backup pré-deploy final, com Caddy, compose, estado do container e hashes, está em:

`/home/yandias/autorama-founder/backups/20260911T165611Z-pre-9839991ba4c601c8f232b7685531eddb22911b30`

Rollback imediato: reimplantar somente o serviço `landing` com a imagem preservada
`autorama-founder:590c083669f9884d25f93438bed1194eeedb34b7` e a rede
`horsepower-studio_default`, sem tocar em Caddy, volumes ou backend.

## Alias www pendente

`www.autorama.horsepower-studio.com` ainda retornava NXDOMAIN. Como o painel da Hostinger não estava
acessível nesta execução, o registro DNS não foi criado e o hostname não foi adicionado ao Caddy.
Próxima ação: criar A `www.autorama` → `212.85.15.133`; após propagação, adicionar o hostname ao
bloco existente, validar a configuração, recarregar o Caddy e confirmar HTTPS.
