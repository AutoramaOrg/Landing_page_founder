# Frontend React, Vite e Tailwind

## Estado

- **Status:** ativo.
- **Fonte confirmada:** `package.json`, `vite.config.js`, `tailwind.config.js`, `src/main.js`, `src/App.jsx`, `src/index.css`.

## Stack

- React `^18.2.0`
- ReactDOM `^18.2.0`
- Vite `^7.0.0`
- Tailwind CSS `^3.4.17`
- PostCSS + Autoprefixer
- Babel para transformar JSX em JS clássico

## Scripts NPM

- `npm run compile:jsx`
  - gera `src/App.js` a partir de `src/App.jsx`.

- `npm run dev`
  - roda Vite em `127.0.0.1`;
  - executa `predev`, que compila JSX antes.

- `npm run build`
  - gera build em `dist/`;
  - executa `prebuild`, que compila JSX antes.

- `npm run preview`
  - serve a build final localmente.

## Configuração Vite

Estado atual de `vite.config.js`:

- `esbuild: false`
- `keepProcessEnv: true`
- `build.minify: false`
- `optimizeDeps.noDiscovery: true`
- `resolve.preserveSymlinks: true`

## Padrão de alteração

Para alterar conteúdo ou componentes:

1. editar `src/App.jsx`;
2. rodar `npm run build`;
3. validar o resultado em `dist/` ou no preview.

Para alterar visual:

1. editar `src/index.css`;
2. manter classes e tokens coerentes com `tailwind.config.js`;
3. testar responsividade desktop e mobile;
4. rodar `npm run build`.

## Componentes React principais

- `Header`
- `BenefitCard`
- `PackageCard`
- `UniverseCard`
- `ReasonCard`
- `FooterList`
- `Icon`
- `App`

## Dados renderizados

Os dados de navegação e conteúdo ficam no topo de `src/App.jsx`:

- `navItems`
- `benefits`
- `packages`
- `universe`
- `reasons`

## Risco operacional

`src/App.js` é gerado. Se alguém editar apenas `src/App.js`, a mudança pode ser perdida na próxima execução de `npm run compile:jsx`.

Regra:

- editar `src/App.jsx` como fonte principal;
- deixar `src/App.js` ser regenerado.

## Referencias

- [[02-Como-Funciona/Arquitetura-da-Landing|Arquitetura da landing]]
- [[06-Operacao/Como-Rodar-e-Buildar|Como rodar e buildar]]

#frontend #react #vite #tailwind
