# Fluxo da página

Fonte: `src/App.jsx` e `src/index.css`. Estado ativo em 17/09/2026; evidências da publicação em `deploy/2026-09-17-founder-gameplay-release.md`.

## Sequência

Header fixo → hero → faixa de destaques → gameplay real → pacotes → encerramento com FAQ → rodapé.

## Navegação

O header usa o logo SVG oficial, link externo O jogo, âncoras Gameplay (`#gameplay`), Pacotes (`#pacotes`) e Dúvidas (`#duvidas`) e CTA Ver pacotes. No celular, as âncoras ficam no menu expansível; Escape fecha o menu. O item ativo acompanha a seção visível.

## Hero e gameplay

A composição do hero mantém cenário e três carros, tipografia Archivo/Inter, preto e vermelho, título Seu lugar no primeiro grid e CTA Escolher meu pacote. O link secundário Assista ao gameplay aponta para a nova seção; mantém a visibilidade original do link secundário a partir de 640 px.

Gameplay mostra quatro trechos reais fornecidos pelo usuário, em uma edição de 32 segundos sem áudio. Antes do clique há somente um pôster WebP e um botão acessível. O elemento de vídeo e sua URL são montados após a interação; os controles nativos permitem pausa, busca e tela cheia. O foco é transferido para o player. A moldura preserva 16:9 no desktop e no celular. Se a mídia falhar, há mensagem e link direto para o arquivo.

A legenda identifica PC Windows e informa que o jogo está em desenvolvimento. Fontes, cortes, formato e hashes estão em [[03-Componentes/Gameplay-Real|Gameplay real]].

## Pacotes e pagamento

Bronze R$ 49, Prata R$ 89 e Ouro R$ 149. A seleção abre o modal de e-mail. O checkout usa o catálogo do servidor e valida o destino InfinitePay; a confirmação de pagamento continua autoritativa no backend. A inclusão do gameplay não muda preços, benefícios, entrega, funções de pagamento ou textos comerciais existentes.

## Encerramento

Faixa Faça parte dessa largada, FAQ expansível e rodapé. Clicar em Dúvidas abre o FAQ. A seção não é uma promessa de data de lançamento.
