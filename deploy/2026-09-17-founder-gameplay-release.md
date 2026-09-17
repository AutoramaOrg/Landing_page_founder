# Gameplay real — release de 17/09/2026

## Resultado

Publicado em https://autorama.horsepower-studio.com/#gameplay. Estado saudável confirmado em 2026-09-17T15:46:43Z.

- Aplicação: `32f821229ecb80834bbbe299b3111dd56609769b`, enviada para `origin/codex/founder-gameplay` antes do deploy.
- Imagem: `autorama-founder:32f821229ecb80834bbbe299b3111dd56609769b`.
- Image ID: `sha256:42aac57266e25039860f0640fbbf972ffcbab5f688d810299e1db88fc3841e63`.
- Artefato: `release.tar`, SHA-256 `b731e3bc551e2a18500c2baa4c569b49483a43fd2cc6c6be42bd8a94709b86a5`.
- Diretório: `/home/yandias/autorama-founder/releases/32f821229ecb80834bbbe299b3111dd56609769b`.
- Serviço: `landing`, container `autorama-founder-landing-1`, rede `horsepower-studio_default`.

A nova seção aparece antes dos pacotes e mantém o design existente. Montagem de 32 segundos a partir dos quatro vídeos fornecidos, 720p/30 fps, sem áudio, 9.416.732 bytes; pôster WebP de 86.818 bytes. Vídeo montado e carregado somente após clique, com controles nativos. Novo link Gameplay na navegação e Assista ao gameplay no hero.

Checkout, valores, benefícios, backend, Caddy, DNS e demais serviços não foram alterados. A afirmação comercial existente sobre acesso antecipado não foi revisada nesta entrega; a questão discutida sobre a relação dos pacotes com Steam Playtest continua separada da inclusão de gameplay.

## Validação observada

- Build Vite concluído; repetido a partir do commit com worktree limpo para empacotamento. Hashes JS/CSS iguais aos do preview validado.
- Dois testes existentes de configuração de checkout aprovados; `git diff --check` sem erro. O repositório não contém workflow CI versionado em `.github`.
- Preview local: desktop 1920 px e mobile 390 px sem overflow horizontal; antes do clique, nenhum elemento video no DOM. Reprodução observada em ambos; mobile completou 32 segundos sem erro. Modal Bronze abriu e fechou com Escape sem envio de formulário.
- Container candidato isolado e depois ativo: UID 101, somente leitura, nenhuma porta publicada, health saudável. Candidato retornou 403 para `/.env` e POST em `/`.
- Borda pública: landing, healthz e site principal HTTP 200. Poster image/webp; vídeo video/mp4; Range bytes=0-1023 respondeu 206 e 1.024 bytes.
- Hashes dos dois arquivos baixados por HTTPS iguais aos locais; vídeo `ada3e0740c10d30b6e5e9963b5e6f7e544a89c8e753bed02b2e54b75e25b813a`, pôster `37252fffabec933ab68d9587c074106ac6c552568440ab7bb6c7211591f9d862`.
- Navegador no domínio público: reprodução chegou a 32 segundos, readyState 4 e error null.
- Logs recentes do Nginx com respostas 200/206/304 para as superfícies usadas. Hash do Caddy permaneceu `5283e95e7e52193d31e83f58d11e233c52225a40ab03c5f2445c58106a12e812`.
- Container candidato temporário removido após a verificação. Nenhum teste do jogo, build Unity, pedido real ou pagamento foi realizado.

Limites: mobile verificado por viewport no Chrome desktop, não por aparelho físico. Os logs do navegador continham mensagens de extensões instaladas, separadas das evidências do player. Áudio foi removido da montagem; o usuário pode solicitar uma edição sonora posterior.

## Backup e rollback

Backup pré-deploy: `/home/yandias/autorama-founder/backups/20260917-gameplay-pre-32f821229ecb80834bbbe299b3111dd56609769b`; contém Caddy, compose e metadados de imagem/rede/mounts. Imagem anterior `bcd6fe4f807aef07e297117ed2e6c8a6713247f4` preservada e seu ID confirmado antes da mudança: `sha256:903f29305ebfda791b282ba293914c436595871f4544cfb535a3b6c495d15c41`.

Rollback avaliado, não executado, pois o deploy passou:

```sh
cd /home/yandias/autorama-founder/releases/bcd6fe4f807aef07e297117ed2e6c8a6713247f4
sudo -n env FOUNDER_IMAGE=autorama-founder:bcd6fe4f807aef07e297117ed2e6c8a6713247f4 CADDY_NETWORK=horsepower-studio_default docker compose -f deploy/compose.yaml up -d --no-deps landing
```

Validar healthz e domínio após reversão. Não reiniciar a VPS, Docker ou Caddy; não remover volumes nem alterar Supabase. Não houve migração, portanto o rollback é apenas do frontend.

## Referências

- [Gameplay: cortes e implementação](../obsidian-docs/03-Componentes/Gameplay-Real.md).
- [Perfil operacional](../PROJECT_PROFILE.md).
- [Runbook](RUNBOOK.md).
