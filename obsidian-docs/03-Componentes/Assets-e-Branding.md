# Assets e branding

## Estado

- **Status:** ativo.
- **Fonte confirmada:** `public/`, `src/App.jsx`, `src/index.css`.

## Assets públicos ativos

### Logo

- Arquivo: `public/autorama_white.png`
- Uso confirmado:
  - Header
  - Footer
- URL pública esperada:
  - `/autorama_white.png`

### Imagem do hero

- Arquivo: `public/hero-celebration.png`
- Uso confirmado:
  - background do hero em `.hero-backdrop`
- URL pública esperada:
  - `/hero-celebration.png`

## Assets na raiz do projeto

Existem imagens na raiz:

- `Kart.png`
- `Kart_partes (1).png`
- `Wallpaper_Fuel (1).png`
- `formula2.png`
- `infografico_carro_vermelho.png`
- `vista_aerea.png`

Estado atual:

- `A confirmar`: se ainda fazem parte do design final.
- Não foram identificadas referências diretas a esses arquivos no código atual.

## Vendors públicos

Arquivos em `public/vendor/`:

- `react.production.min.js`
- `react-dom.production.min.js`

Eles são carregados diretamente em `index.html`.

## Padrão para novos assets

1. Colocar assets usados pela aplicação em `public/`.
2. Referenciar por caminho absoluto a partir da raiz pública:

```html
/nome-do-arquivo.png
```

3. Rodar:

```bash
npm run build
```

4. Confirmar que o arquivo foi copiado para `dist/`.

5. Validar `content-type` quando houver preview:

```bash
curl -I http://127.0.0.1:4173/nome-do-arquivo.png
```

Resultado esperado:

- status `200`;
- `content-type: image/png` quando for PNG;
- corpo não deve ser `index.html`.

## Risco conhecido

Assets mantidos fora de `public/` ou não versionados podem funcionar localmente por acaso, mas falhar em build/deploy limpo.

Regra operacional:

- todo asset usado pela landing precisa estar em `public/` e versionado no repositório.

## Referencias

- [[06-Operacao/Atualizacao-2026-04-30-Assets-Logo-e-Hero-Full-Bleed|Atualização 2026-04-30 - assets, logo e hero full-bleed]]
- [[06-Operacao/Checklist-de-Validacao-Visual|Checklist de validação visual]]

#assets #branding #logo #hero
