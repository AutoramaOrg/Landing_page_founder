# Pendências e próximos passos

## Status

Este documento lista lacunas reais identificadas por inspeção do projeto.

## Conversão e produto

- [x] Confirmar destino dos botões em Desenvolvimento: checkout InfinitePay.
- [x] Implementar identificação por e-mail antes do checkout em Desenvolvimento.
- [ ] Configurar e homologar o checkout no ambiente de Produção.
- [ ] Configurar Resend para as notificações da compra.
- [ ] Criar links reais para Discord/comunidade, suporte, termos e privacidade.
- [x] Preparar preços reais no catálogo local: R$ 49 / R$ 89 / R$ 149; falta publicar backend.
- [ ] Confirmar se os benefícios dos pacotes são definitivos.

## Técnica

- [x] Preparar estratégia de container separado no VPS existente; execução bloqueada por SSH.
- [ ] Documentar domínio final.
- [ ] Criar DNS A `www.autorama` → `212.85.15.133` e, após propagação, adicionar o alias ao Caddy e validar TLS.
- [ ] Documentar pipeline de publicação quando existir.
- [ ] Avaliar se `src/App.js` gerado deve continuar versionado.
- [ ] Remover CSS legado não usado, se for confirmado que não há retorno ao hero antigo.
- [ ] Revisar assets soltos na raiz e decidir manter, mover para `public/` ou remover.

## Qualidade visual

- [ ] Validar hero full-bleed no desktop real.
- [ ] Validar hero full-bleed no mobile real.
- [ ] Ajustar enquadramento da imagem se o texto cobrir ponto importante.
- [ ] Verificar contraste do hero em telas menores.

## SEO e analytics

- [ ] Revisar title e meta description finais.
- [ ] Adicionar Open Graph/Twitter Cards se houver publicação pública.
- [x] Definir e publicar favicon.
- [ ] Definir analytics/eventos de CTA, se necessário.

## Operação

- [x] Criar plano de deploy em `deploy/RUNBOOK.md`; preencher inventário real e validar antes de executar.
- [ ] Criar checklist de QA antes de publicação.
- [ ] Registrar cada atualização relevante em `obsidian-docs/06-Operacao/`.

#roadmap #pendencias
