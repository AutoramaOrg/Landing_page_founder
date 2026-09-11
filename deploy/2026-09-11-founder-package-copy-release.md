# Release de conteúdo dos pacotes — 2026-09-11

## Estado implantado

- Alvo: `https://autorama.horsepower-studio.com/` no VPS `212.85.15.133`.
- Horário observado após o deploy: `2026-09-11T17:27:17Z`.
- Commit da aplicação: `bcd6fe4f807aef07e297117ed2e6c8a6713247f4`, enviado para
  `origin/feat/landing-redesign-mockup`.
- Artefato SHA-256: `88dbb2ec907c60a62982a45491cc4490c393bdad0d2c51b462c2a0fe376ab712`.
- Imagem ativa: `autorama-founder:bcd6fe4f807aef07e297117ed2e6c8a6713247f4`.
- Image ID: `sha256:903f29305ebfda791b282ba293914c436595871f4544cfb535a3b6c495d15c41`.
- Container: `autorama-founder-landing-1`, saudável, sem porta publicada no host.

Nos cards, cada carro passou a ocupar uma linha: Sedan Premium no Bronze; Sedan Premium e Muscle
Raro no Prata; Sedan Premium, Muscle Raro e Esportivo Épico no Ouro. Bodykits ficaram em linha
própria e “Itens de fundador” foi substituído por Pintura Especial Fundador Bronze, Prata ou Ouro.
A nota inferior agora comunica apenas o acesso antecipado ao jogo. Preços, ids dos pacotes,
checkout, imagens, CSS, Caddy, Supabase e demais containers não foram alterados.

## Validação observada

- `npm run build` com `VITE_CHECKOUT_ENABLED=true`: concluído com Vite 7.3.2.
- `node --test scripts/checkout-config.test.mjs`: 2 testes aprovados.
- Preview local em 1440px e 390px: novas linhas renderizadas e botões alinhados; nenhum ajuste de
  CSS foi necessário. O atraso dos assets com `loading="lazy"` no screenshot headless foi separado
  da validação HTTP; todos os quatro assets consultados responderam `200` como `image/webp`.
- Imagem candidata isolada: health, HTML e asset Ouro retornaram `200`; `/.env` e `POST /`
  retornaram `403`; container sem root, read-only, sem capabilities e sem porta publicada.
- Borda pública: landing, health, site principal e bundle retornaram `200`; a nova copy foi
  confirmada integralmente no bundle ativo, a copy antiga não estava presente e a porta 8080
  permaneceu inacessível externamente.

## Backup e rollback

O backup pré-deploy, com Caddy, compose, estado do container e hashes, está em:

`/home/yandias/autorama-founder/backups/20260911T172543Z-pre-bcd6fe4f807aef07e297117ed2e6c8a6713247f4`

Rollback imediato: reimplantar somente o serviço `landing` com a imagem preservada
`autorama-founder:9839991ba4c601c8f232b7685531eddb22911b30` e a rede
`horsepower-studio_default`, sem tocar em Caddy, volumes ou backend.
