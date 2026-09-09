# Preparação VPS e checkout — 2026-09-09

## Escopo

Usuário autorizou container separado no VPS existente com cautela e preços reais; confirmou
recebimento na conta InfinitePay `$power-horse-p86`. Apenas alterações locais nesta etapa.

## Evidências

- Build da landing: aprovado; teste de configuração: 2/2.
- Backend: 9/9 testes offline; checagem Deno das três Edge Functions aprovada.
- Browser em `http://127.0.0.1:4175/#pacotes`: Bronze R$ 49, Prata R$ 89, Ouro R$ 149;
  três botões "Disponível em breve" desativados; nenhum erro/warning capturado no console.
- Não foi feito pedido ou pagamento externo nesta etapa. Backend novo foi exercitado com mocks;
  o fluxo de compra pago, concorrência real e entrega ainda não foram homologados.
- SSH com chave de host verificada continua recusando a chave de deploy para `yandias`.
- Docker Engine local indisponível: imagem/runtime/CSP não foram testados em container.

## Alterações

Separação explícita de ambientes e gate público, URLs de checkout/recibo restritas, timeouts,
runtime não-root com recursos limitados, configuração do proxy como fragmento aditivo, catálogo
real no backend e confirmação de pagamento que rejeita valor ausente/divergente ou booleans
inválidos. Plano de deploy/rollback: `deploy/RUNBOOK.md` na raiz.

## Estado final

Não publicado, sem SHA de release, sem backup remoto executado e sem alterações em produção.
As alterações locais não foram enviadas ao Git. Desenvolvimento remoto mantém a versão anterior.
Próximo passo: usuário instalar a chave pública via sessão própria, sem fornecer senha ao agente;
depois preencher inventário e completar todos os gates do runbook antes de ativar vendas.
