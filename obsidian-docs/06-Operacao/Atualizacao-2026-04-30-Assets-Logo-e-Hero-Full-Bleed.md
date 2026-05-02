# Atualização 2026-04-30 - assets, logo e hero full-bleed

> **Status:** aplicado localmente  
> **Escopo:** header, footer, hero, assets públicos e build  
> **Validação:** `npm run build` executado com sucesso em `2026-04-30`

## Contexto

O projeto recebeu dois ajustes visuais principais:

1. substituir os logos do site pelo arquivo enviado pelo usuário;
2. trocar a imagem do banner do topo e fazer essa imagem ocupar o hero inteiro, inclusive atrás dos textos.

## Arquivos adicionados

- `public/autorama_white.png`
- `public/hero-celebration.png`

## Arquivos alterados

- `src/App.jsx`
- `src/App.js`
- `src/index.css`

## Mudança no logo

Antes:

- o logo era construído com marcação e texto no próprio componente.

Depois:

- header e footer usam imagem pública:

```text
/autorama_white.png
```

## Mudança no hero

Antes:

- a imagem/cena ficava em um quadro visual separado dentro do hero.

Depois:

- `public/hero-celebration.png` foi aplicada como background em `.hero-backdrop`;
- a imagem ocupa o banner inteiro de ponta a ponta;
- o texto do hero fica por cima da imagem;
- overlays escuros foram mantidos para preservar legibilidade.

## Validação executada

Build:

```bash
npm run build
```

Resultado:

- build concluída com sucesso;
- `dist/index.html` gerado;
- `dist/autorama_white.png` gerado;
- `dist/hero-celebration.png` gerado.

Validação de assets no preview:

```bash
curl -I http://127.0.0.1:4173/autorama_white.png
curl -I http://127.0.0.1:4173/hero-celebration.png
```

Resultado observado:

- status `200`;
- `content-type: image/png`.

## Rollback

Rollback visual simples:

1. reverter `src/App.jsx`, `src/App.js` e `src/index.css` para o estado anterior;
2. remover os assets novos se não forem mais usados:
   - `public/autorama_white.png`
   - `public/hero-celebration.png`
3. rodar `npm run build`.

## Risco residual

- `A confirmar`: validação visual em mobile no navegador real após a última alteração full-bleed.
- `A confirmar`: destino final dos CTAs de compra.

## Referencias

- [[03-Componentes/Assets-e-Branding|Assets e branding]]
- [[06-Operacao/Checklist-de-Validacao-Visual|Checklist de validação visual]]

#atualizacao #assets #hero #logo
