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

### Vídeo do hero

- Arquivo: `public/hero-carro.mp4`
- Uso confirmado:
  - plano de fundo do hero em `src/App.jsx`.
  - reprodução automática, muda, contínua e sem controles.
- URL pública esperada:
  - `/hero-carro.mp4`

`public/hero-celebration.png` é o pôster exibido enquanto o vídeo ainda está carregando. A camada
`.hero-backdrop` preserva o contraste do texto e dos botões sobre o vídeo.

### Carros dos pacotes de fundador

- `public/founder-premium.png`: carro principal exibido no pacote Bronze.
- `public/founder-raro.png`: carro principal exibido no pacote Prata.
- `public/founder-epico.png`: carro principal exibido no pacote Ouro.

O componente `PackageCard` apresenta somente uma imagem principal por nível, acompanhada do nome e
da raridade. A garagem cumulativa continua indicada em texto, sem repetir as imagens dos níveis
anteriores. As imagens usam carregamento adiado (`loading="lazy"`) e texto alternativo.

As raridades válidas exibidas nos cards são `Premium`, `Raro` e `Épico`; não existem classificações
por cor.

### Galeria "Um universo feito para corredores"

- `public/universo-rio-de-janeiro.jpg`: cena principal de pistas e exploração.
- `public/universo-pier-estacionamento.jpg`: mundo vivo e variedade de veículos.
- `public/universo-mecanica.jpg`: oficina e preparação dos carros.
- `public/universo-montando-carro.jpg`: montagem e personalização.
- `public/universo-comemoracao.jpg`: comunidade e celebração no paddock.

As cinco imagens são carregadas de forma adiada (`loading="lazy"`) em `src/App.jsx` e exibidas como
miniaturas responsivas na seção `#universo`. A copy identifica as artes como possibilidades futuras,
sem confirmar que seus cenários ou detalhes visuais já existem no jogo. Os originais PNG são
exportados para JPEG otimizado antes de entrar no bundle.

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
