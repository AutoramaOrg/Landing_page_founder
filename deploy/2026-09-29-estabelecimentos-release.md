# Ações dos estabelecimentos — release de 29/09/2026

Publicado em https://autorama.horsepower-studio.com/estabelecimentos/, a pedido do usuário.

## Alteração

Nova página `/estabelecimentos/` sobre a release de produção `a9a9dc2` (sem a página de patrocinadores,
que segue fora do ar). Layout do modelo aprovado em 29/09: hero, vista aérea com selos animados, cards
dos quatro estabelecimentos com janelas de detalhe, fluxo de dividendos, exemplo prático, banner de
ações limitadas, FAQ e fechamento com o logo oficial sobre a fachada. Títulos em Michroma (OFL,
auto-hospedada). Imagens provisórias geradas na Higgsfield (Z-Image), a substituir pelo conjunto final.
CTA leva à pré-venda pelo WhatsApp; não há preço nem checkout de ações.

Nginx: `location = /estabelecimentos` responde 308 para `/estabelecimentos/`, e `absolute_redirect off`
mantém o redirecionamento relativo atrás do Caddy (a primeira imagem desta data, `9acf220`, gerava
`http://…:8080/estabelecimentos/` e foi substituída minutos depois).

- Fonte: `9b17a30da0bc99e027bab893d9969378ac4bcd07` (`origin/release/estabelecimentos`).
- Diretório VPS: `/home/yandias/autorama-founder/releases/9b17a30da0bc99e027bab893d9969378ac4bcd07`.
- Imagem: `autorama-founder:9b17a30da0bc99e027bab893d9969378ac4bcd07`, ID `sha256:d1319aadb2146f3e8cb49804dc345e166165fab422e990c5fcd7838e01f31aa7`.
- Artefato `release.tar`: SHA-256 `277d7e1cb5baefb69f43f09492853959d1ec2fdb3d40b31f297cf172ef30946b`.
- Build limpo de `git archive` (`core.autocrlf=false`), `npm ci` e `npm run build` com
  `VITE_CHECKOUT_ENABLED=true` e `VITE_SUPABASE_PROJECT_REF=nmenoqjgjtrpvowguvlg`; 5 testes aprovados.

## Evidências

- Candidata isolada (somente leitura, sem capacidades): health ok; `/`, `/estabelecimentos/`, imagens,
  fonte e `/downloads/android.json` 200; `/.env` e POST 403.
- Ativo: `healthy`, zero reinicializações, nenhuma porta publicada no host.
- Borda pública: `/`, `/estabelecimentos/`, `/healthz`, manifesto 200; `/estabelecimentos` 308 para
  `https://autorama.horsepower-studio.com/estabelecimentos/`; POST e `/.env` 403; site principal 200.
- Navegador no domínio público: página sem erros de console, Michroma carregada, nenhuma imagem
  quebrada; na home, Bronze, Prata e Ouro habilitados.

## Backup e rollback

Backup: `/home/yandias/autorama-founder/backups/20260929-estabelecimentos` (inspect e ID da imagem anterior).
Rollback para a release de 27/09 (compras habilitadas, downloads preservados, sem a página nova):

```sh
cd /home/yandias/autorama-founder/releases/a9a9dc2bf82c9b5f40f2b0192037a8f1a7880210-checkout-20260927
sudo -n env FOUNDER_IMAGE=sha256:7110b8b00e5d73a3ab5c3ab43bcb87665486bf365fac5d058416705c74c27d50 CADDY_NETWORK=horsepower-studio_default DOWNLOADS_DIR=/home/yandias/autorama-founder/downloads docker compose -f deploy/compose.yaml up -d --no-deps --wait landing
```

## Pendências

- Termos de Uso, seções 10 e 11, ainda negam dividendos; a página os explica em AutoGold.
- Tokenomics v1 (quantidade por estabelecimento, preço, percentual distribuído) não publicada.
- Imagens finais a substituir; ao trocar, basta nova release com os arquivos em `public/assets/estabelecimentos/`.
