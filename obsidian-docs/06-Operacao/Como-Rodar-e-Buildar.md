# Como rodar e buildar

## Estado

- **Status:** ativo.
- **Fonte confirmada:** `package.json`, execução local de build em `2026-04-30`.

## Pré-requisitos

- Node.js instalado.
- NPM instalado.
- Dependências instaladas com lockfile.

## Instalar dependências

Usar:

```bash
npm ci
```

Motivo:

- respeita `package-lock.json`;
- reduz variação entre ambientes;
- é o comando recomendado para build reproduzível.

## Rodar em desenvolvimento

```bash
npm run dev
```

URL esperada:

```text
http://127.0.0.1:5173/
```

## Gerar build

```bash
npm run build
```

Saída esperada:

```text
dist/
```

O build executa automaticamente:

```bash
npm run compile:jsx
```

antes de chamar Vite.

## Visualizar build final

```bash
npm run preview -- --port 4173
```

URL usada na validação local:

```text
http://127.0.0.1:4173/
```

## Validações mínimas

Após `npm run build`, confirmar:

```bash
ls -lh dist/index.html
ls -lh dist/autorama_white.png
ls -lh dist/hero-celebration.png
```

Com preview rodando:

```bash
curl -I http://127.0.0.1:4173/autorama_white.png
curl -I http://127.0.0.1:4173/hero-celebration.png
```

Resultado esperado:

- status `200`;
- `content-type: image/png`.

## Troubleshooting

### Erro `Cannot find package '@babel/core'`

Causa provável:

- dependências não instaladas.

Correção:

```bash
npm ci
npm run build
```

### Mudança em `src/App.jsx` não apareceu

Causa provável:

- `src/App.js` ainda não foi regenerado.

Correção:

```bash
npm run compile:jsx
```

ou:

```bash
npm run build
```

## Deploy

`A confirmar`: não há documentação ou configuração de deploy externo neste repositório.

Até existir artefato real de deploy, tratar `dist/` como a saída de build local.

#operacao #build #vite
