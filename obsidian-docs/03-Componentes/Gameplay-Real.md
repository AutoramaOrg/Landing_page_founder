# Gameplay real na landing de fundador

## Direção e implementação

Tese visual: uma janela ampla para a corrida real, usando a tipografia inclinada e o contraste preto/vermelho já existentes.

Plano de conteúdo: hero existente → destaques → gameplay → escolha do pacote → FAQ. A seção dá contexto sobre o jogo antes da compra.

Interação: âncora para a seção, destaque discreto no botão ao passar o mouse e reprodução iniciada somente pelo visitante. Sem reprodução automática ao carregar a página e sem animação ornamental nova; respeita movimento reduzido.

Fonte: componente `Gameplay` em `src/App.jsx`; regras `.gameplay-*` em `src/index.css`. O JavaScript compilado é gerado pelo build. Sem novas dependências de runtime, iframe externo ou mudança na CSP.

## Origem e edição

Quatro gravações fornecidas pelo usuário em `C:/Users/USER/Videos/`. Os originais permanecem intactos e fora do Git.

| Ordem | Original | Intervalo |
|---|---|---|
| 1 | 2026-09-09 14-25-44.mp4 | 48–56 s |
| 2 | 2026-09-07 09-33-33.mp4 | 6–14 s |
| 3 | 2026-09-09 14-17-19.mp4 | 23–31 s |
| 4 | 2026-09-07 13-27-53.mp4 | 46–54 s |

Cortes diretos, velocidade original e enquadramento completo, sem placar ou resultado fictício inserido. Áudio removido; sem fala ou informação sonora a legendar. A descrição acessível informa quatro carros em circuito urbano, duração e ausência de áudio. O pôster é o quadro do segundo 2 da montagem.

Ferramenta: FFmpeg 7.1, obtido pelo pacote PyPI imageio-ffmpeg 0.6.0, instalado apenas em diretório temporário para edição. Não acrescentado ao projeto.

Encoding: H.264 High Level 3.1, 1280×720, 30 fps, yuv420p, CRF 25, preset medium, faixa sem áudio, metadados originais removidos, faststart e timescale 30000. WebP de capa em qualidade 82.

## Arquivos

- `public/assets/gameplay/autorama-gameplay-20260917.mp4`: 32 segundos; SHA-256 `ADA3E0740C10D30B6E5E9963B5E6F7E544A89C8E753BED02B2E54B75E25B813A`.
- `public/assets/gameplay/autorama-gameplay-20260917.webp`: 1280×720; 86.818 bytes; SHA-256 `37252FFFABEC933AB68D9587C074106AC6C552568440AB7BB6C7211591F9D862`.

Os caminhos incluem a data para distinguir esta edição. Ao substituir o vídeo, publicar com novo nome, gerar nova capa e atualizar referências, duração e hashes.

## Validação local observada

Build Vite concluído; dois testes existentes de configuração do checkout aprovados. Preview em `http://127.0.0.1:4176/`.

Em desktop 1920 px e viewport mobile de 390 px, a seção manteve proporção, conteúdo legível e ausência de overflow horizontal. Antes de clicar, o DOM não continha elemento video. No desktop, após clique, foram observados readyState 4, duração 32, tempo avançando, paused false e error null. No mobile, o player chegou ao final dos 32 segundos sem erro e manteve o foco de teclado. O modal Bronze abriu e fechou com Escape, sem envio de formulário. A publicação é registrada na nota de release.

Não houve teste do jogo/Unity, transação real ou alteração no backend.
