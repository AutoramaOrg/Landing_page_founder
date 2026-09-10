# Ajuste do hero mobile — 2026-09-10

## Escopo

Ajuste visual isolado no hero da landing, sem alteração no checkout, valores ou integrações.

## Mudanças

- título "Pacotes de Fundador" com quebra controlada em duas linhas no mobile;
- vídeo de fundo preservado no desktop;
- no mobile até 640 px, substituição do vídeo pela imagem estática do Rio de Janeiro;
- overlays reforçados para manter o texto legível sobre a imagem;
- vídeo ocultado quando o navegador solicita movimento reduzido.

## Evidência local

- 390 × 844: título completo, vídeo oculto e sem overflow horizontal;
- 360 × 800: título completo, vídeo oculto e sem overflow horizontal;
- 1440 × 900: vídeo ativo e composição desktop preservada;
- testes de configuração do checkout: 2 aprovados;
- build de produção: concluído.

## Ativação em Produção

- release: `f8251973772f8ca2826860a8005452bfd4f5257f`;
- imagem: `sha256:1fce2b711bb1b7928237f4d5606cfe7628d045e30a1df20742a6776ad4a70483`;
- SHA-256 do artefato: `4dbff1f13dd367939470df0b5d2fa4443de6998b1687cbb2dc778f364559e91f`;
- smoke isolado: health saudável, UID `101:101`, filesystem somente leitura, capabilities removidas;
- domínio público: HTTP 200, assets e regras mobile confirmados;
- inspeção pública em 390 × 844: título completo em duas linhas, imagem estática aplicada, vídeo oculto e sem overflow horizontal;
- site principal: HTTP 200 após seguir o redirecionamento canônico;
- rollback imediato: release `50875763a9d0a07331c4166e8e3d02f8fc96233c` preservada no VPS.
