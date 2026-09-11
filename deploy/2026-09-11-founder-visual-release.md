# Release visual da landing — 2026-09-11

## Estado implantado

- Alvo: `https://autorama.horsepower-studio.com/` no VPS `212.85.15.133`.
- Horário observado após o deploy: `2026-09-11T13:10:28Z`.
- Commit: `586511f43bba102fd4be85f010757a9fb91daa33`, enviado para
  `origin/feat/landing-redesign-mockup`.
- Artefato SHA-256: `e945d298d1b1ce209e21030869a2e9089140084338be119690097d2916e511f1`.
- Imagem ativa: `autorama-founder:586511f43bba102fd4be85f010757a9fb91daa33`.
- Image ID: `sha256:f8ff2282c5ae5248721c8576f36d0630d7c44923848b03edabe57b156338338d`.
- Container: `autorama-founder-landing-1`, saudável, sem porta publicada no host.

O escopo foi exclusivamente a landing estática: novo logo, Hero, imagens e acabamento dos cards de
pacotes. Caddy, Supabase, checkout, banco, valores e demais containers não foram alterados. O build
público foi gerado explicitamente com `VITE_CHECKOUT_ENABLED=true` e destino de Produção definido
pelo gate existente.

## Validação observada

- `npm run build`: concluído com Vite 7.3.2.
- `node --test scripts/checkout-config.test.mjs`: 2 testes aprovados.
- Imagem candidata isolada: health, HTML, Hero e asset Ouro retornaram `200`; `/.env` e `POST /`
  retornaram `403`; headers CSP, `X-Frame-Options` e `X-Content-Type-Options` permaneceram ativos.
- Borda pública: landing, `/healthz`, Hero e asset Ouro retornaram `200`; o site principal também
  permaneceu `200`; a porta 8080 continuou inacessível externamente.
- Smoke em navegador: 1440px e 390px sem overflow ou imagens quebradas; três pacotes presentes,
  botões habilitados, hover ativo, modal de compra abrindo/fechando e menu mobile funcional; nenhuma
  exceção JavaScript observada.

## Backup e rollback

O backup pré-deploy, com Caddy, compose, estado do container e hashes, está em:

`/home/yandias/autorama-founder/backups/20260911T130533Z-pre-586511f43bba102fd4be85f010757a9fb91daa33`

Rollback imediato avaliado: no diretório da release
`f8251973772f8ca2826860a8005452bfd4f5257f`, reimplantar somente o serviço `landing` com
`FOUNDER_IMAGE=autorama-founder:f8251973772f8ca2826860a8005452bfd4f5257f` e
`CADDY_NETWORK=horsepower-studio_default`, usando `docker compose up -d --no-deps landing`. A imagem
anterior permanece no host com ID
`sha256:1fce2b711bb1b7928237f4d5606cfe7628d045e30a1df20742a6776ad4a70483`.
