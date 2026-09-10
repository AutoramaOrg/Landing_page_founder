# Publicação no VPS Horsepower Studio

Status: implantação concluída em 2026-09-09; compras habilitadas e validadas em 2026-09-10.
Alvos e autorização: [PROJECT_PROFILE.md](../PROJECT_PROFILE.md).

## 1. Acesso e inventário (somente leitura)

O usuário autoriza a chave pública `id_ed25519_autorama_deploy.pub` na conta `yandias` por uma
sessão SSH própria. Nunca colocar senha/chave privada no chat, Git ou scripts. Manter
`StrictHostKeyChecking=yes`; qualquer divergência exige verificação independente no painel.

Após acesso, identificar usuário/grupos, capacidade de Docker, compose ativo, mounts do Caddy,
rede Docker real, listeners, RAM livre, espaço e backup/snapshot existente. Inspecionar apenas
metadados necessários, não despejar variáveis de ambiente de outros containers. Não reiniciar o
VPS, o Docker ou o site principal. Não acrescentar o usuário ao grupo Docker automaticamente.

Preencher antes de escritas: diretório novo da landing, compose/mount real do Caddy, rede
compartilhada e localização do backup. A proposta histórica `/home/yandias/horsepower-studio`
não está confirmada em execução.

## 2. Proveniência e backup

Revisar diff dos dois repositórios, preservar trabalho não relacionado e criar releases com
commits imutáveis enviados ao remoto, testes e CI aplicável aprovados. Construir em checkout
limpo. Registrar SHA da landing e backend, hash do build e digest da imagem resultante. Nunca
enviar `.env`, `.ssh`, logs ou o repositório completo como contexto: `.dockerignore` só admite
`dist` e configuração Nginx.

Antes de qualquer mudança, copiar a configuração real do Caddy e compose com permissões e hash;
registrar image IDs e mounts. Confirmar snapshot/backup do banco e recuperação. Não prosseguir
sem caminho de reversão avaliado. Não alterar arquivos montados por substituição de inode sem
verificar o conteúdo visível dentro do Caddy.

## 3. Backend isolado

Reinspecionar Produção explicitamente por project-ref. Rever apenas as migrations
`20260712000000_create_founder_orders.sql` e `20260814000000_add_founder_purchase_fulfillment.sql`;
avaliar dependências, RLS, grants e compatibilidade de PostgreSQL antes de aplicar um plano
aditivo transacional registrado no histórico. Não executar as demais migrations pendentes.

Publicar exclusivamente as três funções de fundador a partir da release limpa. Elas são rotas
públicas com validação própria; nunca mudar o JWT de `handle-events`. Configurar somente os
parâmetros novos: handle `power-horse-p86`, retorno HTTPS final e allowlist exata da landing.
Não copiar secrets de Desenvolvimento ou substituir secrets existentes do jogo.

A documentação oficial da InfinitePay descreve confirmação por `payment_check`; não fornece
assinatura de webhook nesse contrato. Por isso o payload do webhook não comprova pagamento:
exigir resposta autoritativa com `success === true`, `paid === true` e `amount` inteiro igual ao
pedido. Conferir pedido e transação, transição condicional e unicidade da outbox.

Pendências antes de vendas: acompanhar abuso/rate limit do endpoint público (CORS não autentica),
limites de corpo, falha parcial/concorrência e entrega. O Resend de Produção foi configurado em
2026-09-10 com domínio verificado, chave de envio limitada e smoke `delivered` para o contato
operacional; manter idempotência e observar a outbox após a abertura.

## 4. Container e borda

Primeira release com `VITE_CHECKOUT_ENABLED=false`; a release de ativação usa `true` somente após
os gates documentados. Testar cada imagem em Docker antes de publicar:
Nginx inicia como UID 101 com read-only/tmpfs, health responde, página e assets carregam, arquivos
ocultos retornam erro, POST é negado, headers de segurança aparecem inclusive nos assets.

Definir `FOUNDER_IMAGE` pela imagem imutável validada e `CADDY_NETWORK` pela rede inspecionada.
Validar `docker compose config`; criar somente o serviço novo com limites do compose. Não
publicar portas no host. Observar saúde/logs sanitizados e consumo antes de alterar a borda.

Adicionar o bloco de `Caddyfile.fragment` ao arquivo real preservando todos os sites existentes.
Validar a configuração com o Caddy ativo antes do reload. Não substituir a configuração inteira
pelo fragmento. Criar apenas DNS A `autorama` → `212.85.15.133`, sem mudar registros raiz/www/MX/NS.
Verificar propagação e emissão de TLS; não desativar verificação de certificado para contornar erros.

## 5. Smoke e ativação

Conferir HTTP/HTTPS do domínio principal antes e depois; validar HTTPS do subdomínio, health,
headers, assets, navegação desktop/mobile e ausência de porta 8080 acessível externamente.
Testar CORS não autorizado, pacote/e-mail inválidos e retorno de pagamento forjado sem mutação.
Criar pedidos identificados como teste e verificar 4900/8900/14900 centavos e destinatário correto,
sem executar pagamento pelo usuário. Validar a página externa até exibir opções e valor; spinner
ou título de aba isolado não confirma que o checkout está utilizável.

Pagamento real depende de execução pelo titular; documentar o que foi simulado e o que foi
observado. Só então gerar nova release com compras habilitadas e repetir smoke na borda.

## Rollback avaliado (ainda não ensaiado no VPS)

Se a landing falhar, manter/reimplantar a release com compras desativadas e remover somente o
novo bloco Caddy, validando antes de recarregar. Parar exclusivamente o container novo. Preservar
site principal, volumes, imagens anteriores e backups. Não usar `down -v`, prune ou reinício global.

Se o checkout falhar, impedir criação de novos links no backend por gate validado de configuração
e desabilitar botões; preservar confirmação de pedidos já emitidos. Não apagar funções de retorno,
pedidos, pagamentos ou outbox. Reverter código apenas para release compatível; não derrubar tabelas.

Após cada etapa, registrar horário, SHA/digest, alvo, checks reais e drift, sem dados sensíveis.
