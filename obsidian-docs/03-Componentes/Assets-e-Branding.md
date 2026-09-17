# Assets e branding

## Estado

- **Status:** ativo.
- **Fonte confirmada:** `public/`, `src/App.jsx`, `src/index.css`.

## Assets públicos ativos

### Logo

- Arquivo ativo: `public/assets/logos/autorama-racing-logo.svg`
- Uso confirmado:
  - Header
  - Footer
- URL pública esperada:
  - `/assets/logos/autorama-racing-logo.svg`

### Favicon

- Arquivo: `public/favicon.ico`
- Referência: `<link rel="icon" href="/favicon.ico" sizes="any">` em `index.html`.
- URL pública confirmada: `/favicon.ico`.

### Hero

- `public/assets/hero/hero-environment.webp`: ambiente de garagem.
- `public/assets/hero/hero-car-blue.webp`: carro azul.
- `public/assets/hero/hero-car-pink.webp`: carro rosa com reflexo integrado.
- `public/assets/hero/hero-car-red.webp`: carro vermelho.

As camadas são posicionadas de forma responsiva em `src/index.css`; não dependem do vídeo legado.

### Carros dos pacotes de fundador

- `public/assets/packages/package-bronze-car.webp`: composição do Bronze.
- `public/assets/packages/package-silver-car.webp`: composição do Prata.
- `public/assets/packages/package-gold-cars.webp`: composição de três carros do Ouro.

O componente `PackageCard` sobrepõe título e preço ao visual e dilui a base da imagem no corpo do
card. As imagens usam carregamento adiado (`loading="lazy"`) e texto alternativo. Os carros são
identificados como Sedan Premium, Muscle Raro e Esportivo Épico; os cards separam carros e bodykits
por linha e nomeiam a pintura especial conforme o pacote. Não existe selo de “Coleção completa”.

As raridades válidas exibidas nos cards são `Premium`, `Raro` e `Épico`; não existem classificações
por cor.

### Assets legados preservados

Os arquivos antigos `public/autorama_white.png`, `public/hero-carro.mp4`,
`public/hero-celebration.png`, `public/founder-premium.png`, `public/founder-raro.png`,
`public/founder-epico.png` e `public/universo-*.jpg` continuam versionados, mas não são importados
pela composição ativa da landing. Não removê-los sem uma etapa específica de limpeza e revisão.

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

## Gameplay da versão de 17/09/2026

O player da seção `#gameplay` usa `public/assets/gameplay/autorama-gameplay-20260917.mp4` e capa WebP de mesmo nome. Origem e cortes: [[Gameplay-Real|Gameplay real]]. O hero atual usa os assets em `public/assets/hero/`; os arquivos antigos `hero-carro.mp4` e `hero-celebration.png` são legados e não compõem o hero desta versão.
