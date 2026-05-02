# Fluxo da página

## Estado

- **Status:** ativo.
- **Fonte confirmada:** `src/App.jsx`.

## Sequência atual

1. Header fixo
2. Hero com imagem full-bleed
3. Grade de benefícios
4. Pacotes de fundador
5. Universo do jogo
6. Razões para entrar agora
7. CTA final
8. Footer

## Header

O header fica fixo no topo e contém:

- logo `public/autorama_white.png`;
- links de navegação internos;
- CTA "Quero ser fundador".

Links atuais:

- `#universo`
- `#beneficios`
- `#pacotes`
- `#entrar`

## Hero

Objetivo: estabelecer contexto e conduzir para os pacotes.

Conteúdo atual:

- eyebrow: "Acesse. Corra. Lidere."
- H1: "Pacotes de Fundador"
- texto de apoio com destaque para Autorama Racing;
- CTA primário para `#pacotes`;
- CTA secundário para `#beneficios`.

Imagem:

- arquivo: `public/hero-celebration.png`;
- aplicada como background em `.hero-backdrop`;
- ocupa o banner inteiro de ponta a ponta;
- fica atrás dos textos.

## Benefícios

Cards renderizados a partir do array `benefits`:

- Acesso antecipado
- Itens únicos
- Conteúdo exclusivo
- Status fundador

## Pacotes

Cards renderizados a partir do array `packages`:

- Bronze: `R$ 49`
- Prata: `R$ 89`
- Ouro: `R$ 149`

O pacote Ouro está marcado como popular no código (`popular: true`).

## Universo

Cards renderizados a partir do array `universe`:

- Corridas
- Bastidores
- Mecânica
- Eventos
- Economia viva

## Razões

Cards renderizados a partir do array `reasons`:

- Você faz parte da história
- Vantagem desde o início
- Recompensas duradouras
- Investimento que vale a pena

## CTA final

Reforça a entrada nos pacotes e aponta novamente para `#pacotes`.

## Footer

Contém:

- logo;
- descrição curta;
- colunas Jogo, Comunidade e Suporte.

Observação: os links do footer apontam para `#top` no estado atual. Se forem usados como navegação real, precisam receber destinos específicos.

## Pontos a confirmar

- destino real dos CTAs de compra;
- URLs reais de comunidade, Discord, suporte, termos e privacidade;
- se haverá integração com pagamento ou formulário.

#fluxo #ux #landing
