# Fluxo da página

## Estado

- **Status:** ativo.
- **Fonte confirmada:** `src/App.jsx`.

## Sequência atual

1. Header fixo
2. Hero responsivo com mídia full-bleed
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

Mídia:

- desktop: vídeo `public/hero-carro.mp4`, com `public/hero-celebration.png` como fallback;
- mobile até 640 px: imagem estática `public/universo-rio-de-janeiro.jpg`, com enquadramento vertical e contraste reforçado;
- o H1 usa quebra controlada em duas linhas no mobile para evitar cortes laterais;
- com preferência de movimento reduzido, o vídeo também é ocultado.

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

Com o checkout habilitado, cada botão de pacote abre um modal de identificação por e-mail. Após validação do campo, a
landing envia `package_id` e `email` para a Edge Function do ambiente explícito, valida o host HTTPS
retornado e navega para o checkout InfinitePay na mesma aba. O retorno de pagamento é confirmado pela
Edge Function `founder-payment-status` antes de mostrar sucesso.

Build público aponta exclusivamente para Produção e começa com os três botões desativados,
exibindo "Disponível em breve". Ativação depende de `VITE_CHECKOUT_ENABLED=true` e homologação
conforme `deploy/RUNBOOK.md`; Desenvolvimento local preserva seu endpoint de homologação.

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

- configuração e publicação do checkout em Produção;
- URLs reais de comunidade, Discord, suporte, termos e privacidade;
- configuração do Resend para notificações por e-mail.

#fluxo #ux #landing
