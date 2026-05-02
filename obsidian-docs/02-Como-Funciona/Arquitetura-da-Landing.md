# Arquitetura da landing

## Estado

- **Status:** ativo.
- **Fonte confirmada:** inspeção de `package.json`, `vite.config.js`, `src/App.jsx`, `src/main.js`, `src/index.css` e `index.html`.

## Visão geral técnica

O projeto é uma landing page React servida por Vite. O HTML base carrega React e ReactDOM por arquivos públicos em `public/vendor/`, enquanto o código da aplicação é carregado por `src/main.js`.

O projeto desativa o transform padrão do Vite para JSX e usa um script próprio:

```bash
npm run compile:jsx
```

Esse script transforma `src/App.jsx` em `src/App.js` usando Babel antes de `dev` e `build`.

## Fluxo de build

1. `npm run build`
2. `prebuild` executa `npm run compile:jsx`
3. `scripts/compile-jsx.mjs` lê `src/App.jsx`
4. Babel gera `src/App.js`
5. Vite gera a build em `dist/`
6. Arquivos de `public/` são copiados para `dist/`

## Arquitetura de arquivos

- `index.html`
  - define idioma `pt-BR`;
  - define meta description;
  - carrega `/vendor/react.production.min.js`;
  - carrega `/vendor/react-dom.production.min.js`;
  - carrega `/src/main.js`.

- `src/main.js`
  - importa `App` de `src/App.js`;
  - importa `src/index.css`;
  - renderiza `App` em `#root`.

- `src/App.jsx`
  - fonte editável principal;
  - contém dados de navegação, benefícios, pacotes, universo e razões;
  - contém componentes de header, cards, footer e página.

- `src/App.js`
  - gerado automaticamente;
  - deve ser atualizado via `npm run compile:jsx` ou `npm run build`;
  - não deve ser editado manualmente quando a mudança puder ser feita em `src/App.jsx`.

- `src/index.css`
  - define base visual e componentes via `@layer components`;
  - controla hero, botões, cards, grids, responsividade e footer.

- `public/`
  - contém assets públicos servidos por URL absoluta;
  - contém vendors React/ReactDOM usados pelo HTML.

## Observação importante

Como `src/App.js` é gerado e também importado pela aplicação, toda mudança em `src/App.jsx` precisa ser seguida por:

```bash
npm run compile:jsx
```

ou:

```bash
npm run build
```

Sem isso, o preview pode continuar usando uma versão antiga do componente.

## Referencias

- [[03-Componentes/Frontend-React-Vite-Tailwind|Frontend React, Vite e Tailwind]]
- [[06-Operacao/Como-Rodar-e-Buildar|Como rodar e buildar]]

#arquitetura #frontend #vite #react
