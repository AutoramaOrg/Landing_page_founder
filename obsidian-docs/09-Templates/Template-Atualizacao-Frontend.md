# Template - atualização frontend

Copiar este template para `06-Operacao/Atualizacao-AAAA-MM-DD-Nome-da-Mudanca.md`.

```markdown
# Atualização AAAA-MM-DD - Nome da mudança

> **Status:** aplicado | em validação | rollback | a confirmar  
> **Escopo:** componente/seção/asset afetado  
> **Validação:** comando ou evidência real

## Contexto

Descrever em 2-5 linhas o motivo da mudança.

## O que mudou

- item 1
- item 2
- item 3

## Arquivos alterados

- `src/...`
- `public/...`
- `obsidian-docs/...`

## Como validar

```bash
npm run build
```

Se houver preview:

```bash
npm run preview -- --port 4173
```

Validar visualmente:

- [ ] desktop
- [ ] mobile
- [ ] links/CTAs
- [ ] assets carregando

## Resultado da validação

- `A confirmar` ou evidência real.

## Rollback/fallback

Descrever como reverter ou qual fallback operacional usar.

## Riscos e pendências

- `A confirmar`: ...

## Referências

- [[00-Home|Home]]
```

#template #frontend #atualizacao
