# Checklist de validação visual

Use este checklist antes de considerar uma alteração visual concluída.

## Build

- [ ] Rodar `npm ci` quando dependências não estiverem instaladas.
- [ ] Rodar `npm run build`.
- [ ] Confirmar que `dist/` foi gerado.
- [ ] Confirmar que assets públicos usados aparecem em `dist/`.

## Hero

- [ ] Imagem do topo ocupa largura total do banner.
- [ ] Imagem fica atrás dos textos do hero.
- [ ] Texto do hero permanece legível no desktop.
- [ ] Texto do hero permanece legível no mobile.
- [ ] Header fixo não cobre conteúdo essencial.
- [ ] CTAs permanecem clicáveis.

## Logo

- [ ] Logo carrega no header.
- [ ] Logo carrega no footer.
- [ ] Logo não distorce.
- [ ] Logo não quebra layout mobile.

## Responsividade

Validar pelo menos:

- [ ] desktop largo;
- [ ] notebook;
- [ ] tablet;
- [ ] mobile.

Itens a observar:

- [ ] texto não sobrepõe botões;
- [ ] cards não quebram altura de forma incoerente;
- [ ] grids reduzem corretamente;
- [ ] footer permanece legível.

## Links e CTAs

- [ ] Header navega para as âncoras corretas.
- [ ] CTA primário leva para `#pacotes`.
- [ ] CTA secundário leva para `#beneficios`.
- [ ] CTA final leva para `#pacotes`.

## Assets

- [ ] `curl -I` retorna `content-type` correto para imagens públicas.
- [ ] Nenhum asset ativo depende da pasta `Downloads`.
- [ ] Nenhum asset ativo depende de caminho absoluto local.

## Documentação

- [ ] Atualizar `obsidian-docs/` quando houver mudança relevante.
- [ ] Registrar data, arquivos alterados, validação e rollback/fallback.
- [ ] Marcar itens não confirmados como `A confirmar`.

#checklist #validacao #visual
