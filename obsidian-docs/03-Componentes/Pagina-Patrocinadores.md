# Página de patrocinadores

## Estado implementado no repositório

- Rota: `/patrocinadores/`, construída como segunda entrada HTML pelo Vite.
- Entrada no menu da landing de fundador: `src/App.jsx`.
- Conteúdo e comportamento: `src/SponsorApp.jsx`; estilos: `src/sponsors.css`.
- CTA: abre o WhatsApp oficial da Horse Power Studio com uma mensagem inicial. O visitante anexa o arquivo manualmente no WhatsApp.
- A página não recebe, examina nem armazena arquivos. Não há serviço de upload ou ClamAV nesta entrega.

## Apresentação explicativa

- A página usa diagramas SVG e animação CSS, sem fotografias ou imagens de carros no conteúdo.
- A abertura conecta marca → jogo → reconhecimento, participação e relacionamento.
- O visitante seleciona quatro benefícios: fortalecimento da marca, mais um canal de vendas, engajamento com seu público e presença na comunidade. Cada seleção troca o diagrama e sua explicação; não há rotação automática.
- A jornada ilustrada explica identidade → contrato → progresso → conquista. Não representa dados de jogadores nem métricas de campanha.
- Os caminhos para loja, site ou atendimento são possibilidades a combinar, e não uma integração de comércio já implementada.
- O controle de animação pausa todos os movimentos. A preferência `prefers-reduced-motion` inicia os gráficos pausados e acompanha mudanças do sistema; o visitante pode retomar manualmente. Texto, títulos e legendas continuam disponíveis sem animação.
- Não há chamada comercial na abertura. O único link para WhatsApp fica ao final, depois dos benefícios, do fluxo e das orientações para o logo.

## Fluxo de participação comunicado

Empresa conhece possibilidades de presença no jogo → conversa com a equipe → envia identidade visual pelo WhatsApp → equipe avalia material, formato e condições → proposta de pintura pode ser preparada. O envio não garante contrato ou publicação no jogo.

## Verificação local da reformulação — 2026-09-29

- Build web do Vite concluído com as entradas principal e patrocinadores.
- Inspeção no navegador em desktop (1280 × 900) e celular (390 × 844).
- Verificada a troca entre os quatro benefícios e respectivos diagramas/textos.
- Verificado o botão de pausa: `data-motion=paused` e `animation-play-state: paused` nas linhas animadas; retomada pela interface.
- Menu mobile fecha após navegar para a seção escolhida. Sem imagens de carros no conteúdo ou rolagem horizontal na largura inspecionada.
- Esta verificação não inclui o jogo nem publicação em Produção.

## Operação

- Contato WhatsApp usado no código: `+55 21 98046-8888`, encontrado no botão do site oficial `https://horsepower-studio.com/` em 2026-09-29. Confirmar com a equipe antes de publicar se esse ainda é o canal de parcerias.
- A página pede PNG transparente em alta resolução. Material vetorial pode ser solicitado pela equipe depois da primeira análise.
- Antes de abrir, importar ou converter qualquer anexo recebido, a equipe deve verificar o arquivo com o antivírus do equipamento de trabalho. Não abrir anexos inesperados no servidor de Produção. O WhatsApp não substitui essa verificação operacional.
- Para trocar o número ou a mensagem inicial, editar `WHATSAPP_NUMBER` / `WHATSAPP_MESSAGE` em `src/SponsorApp.jsx`, reconstruir e publicar a landing.
- Verificar localmente `/`, `/patrocinadores/`, menu mobile, links âncora e abertura do link `wa.me` antes de qualquer publicação. A validação dentro do jogo fica com o usuário.
