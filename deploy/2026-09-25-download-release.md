# Download (Steam + APK) — release de 25/09/2026

## Resultado

Publicado em https://autorama.horsepower-studio.com/#download. Estado saudável confirmado em 2026-09-25T21:10Z.

- Aplicação: `07e35a039e4dea8c097351bfd31e361bb25aaa4d`, enviada para `origin/codex/android-download` antes do deploy.
- Imagem: `autorama-founder:07e35a039e4dea8c097351bfd31e361bb25aaa4d`, ID `sha256:5553f4f25f09f77dfae19f6bd4757edb3e333fee5b44feec0af774ee876e3d6c`.
- Artefato: `release.tar`, SHA-256 `7a3c1cd5fa7fab611148f93612cb3d0bde40ad3e34d70fe6ca4a6003f4db2a80`, gerado de `git archive` com `core.autocrlf=false` (o checkout no Windows convertia para CRLF).
- Serviço: `landing`, container `autorama-founder-landing-1`, rede `horsepower-studio_default`.

A seção Gameplay continua igual. A nova seção Download (menu "Download") tem dois cards:

- **PC · Steam**: link para https://store.steampowered.com/app/4176520/Autorama_Racing/.
- **Android · APK**: lê `/downloads/android.json` no navegador e exibe versão, tamanho, requisito e SHA-256. Sem manifesto válido, o botão fica desativado com "Download indisponível no momento".

Os APKs ficam fora da imagem, em `/home/yandias/autorama-founder/downloads` no host, montado somente leitura em `/usr/share/nginx/downloads` (`DOWNLOADS_DIR` no compose). O Nginx serve `/downloads/` sem listagem; arquivos ocultos (`.incoming-*`, `.android.json.prev`) continuam negados pela regra geral de dotfiles. Nova build não exige deploy da landing: ver [RUNBOOK](RUNBOOK.md#publicar-nova-build-android).

Build publicada: `1.0.8-mobilepreview.2` (versionCode 10), gerada em 2026-09-25 17:23 BRT na worktree mobile, com as correções de teclado/senha, iluminação da corrida e HUD. Arquivo `AutoramaRacing-1.0.8-preview-2.apk`, 338.137.851 bytes, SHA-256 `bb579e32638559cbae311d889c69d7ffdcc0ebffb85b8e2609ddde8717d03c5a`.

Checkout, valores, backend, Caddy e DNS não foram alterados.

## Validação observada

- 5 testes locais (checkout e manifesto) aprovados; build do artefato com CSS idêntico ao preview local e `App.js` idêntico ao commit.
- Candidato isolado com o mount: UID 101, somente leitura, health ok; manifesto 200; APK 200 com `application/vnd.android.package-archive` e `Content-Length` completo; Range 206; `/downloads/`, dotfiles, `/.env` e POST 403.
- Ativo: health `healthy`, mount `rw=false`, nenhuma porta publicada. Hash do Caddyfile inalterado: `5283e95e7e52193d31e83f58d11e233c52225a40ab03c5f2445c58106a12e812`.
- Borda pública: landing, healthz, manifesto e site principal 200; `/downloads/` 403. APK baixado inteiro por HTTPS em ~29 s com SHA-256 igual ao local.
- Navegador no domínio público: links da Steam e do APK corretos, com versão e hash vindos do manifesto.
- `npm run publish:android` reexecutado contra produção: detectou APK idêntico, regravou o manifesto e passou na verificação pública.

Limites: instalação do APK não testada em aparelho nesta entrega; layout mobile verificado por viewport.

## Backup e rollback

Backup pré-deploy: `/home/yandias/autorama-founder/backups/20260925T210324Z-pre-07e35a039e4dea8c097351bfd31e361bb25aaa4d` (inspect do container, ID da imagem anterior, compose anterior e hash do Caddyfile). Imagem anterior `32f821229ecb80834bbbe299b3111dd56609769b` preservada (`sha256:42aac572…1e63`).

Rollback da landing (a release anterior não monta downloads; a seção some junto):

```sh
cd /home/yandias/autorama-founder/releases/32f821229ecb80834bbbe299b3111dd56609769b
sudo -n env FOUNDER_IMAGE=autorama-founder:32f821229ecb80834bbbe299b3111dd56609769b CADDY_NETWORK=horsepower-studio_default docker compose -f deploy/compose.yaml up -d --no-deps landing
```

Rollback só do APK: `cp -p .android.json.prev android.json` dentro da pasta de downloads.
