# Preparação VPS e checkout — 2026-09-09

## Escopo

Usuário autorizou container separado no VPS existente com cautela e preços reais; confirmou
recebimento na conta InfinitePay `$power-horse-p86`. Implantação concluída com UI de compra fechada.

## Evidências

- Build da landing aprovado; teste de configuração 2/2. Backend: 9/9 testes offline e checagem
  Deno das três funções aprovados.
- DNS A `autorama` criado no painel Hostinger, apontando a `212.85.15.133`; propagação conferida
  em 1.1.1.1 e 8.8.8.8.
- Migration de Produção `20260909090000` aplicada e marcada; as duas tabelas possuem RLS. Somente
  as três funções de fundador foram publicadas, com CORS autorizado e não autorizado testados.
- Imagem imutável construída no VPS a partir da release `65ea292d`; container sem root/read-only
  saudável, conectado apenas à rede Docker. O Caddy foi validado e recarregado; backup datado criado.
- `https://autorama.horsepower-studio.com/#pacotes` respondeu 200/TLS válido, CSP/HSTS e demais
  headers presentes, preços R$ 49/R$ 89/R$ 149 e zero erros no console. Porta 8080 externa recusada.
- Não foi executado pagamento. Fluxo pago completo depende de ação do titular. Em 2026-09-10 o
  domínio `send.autorama.horsepower-studio.com` foi verificado no Resend; a chave permanente ficou
  restrita a envio e ao domínio, e os segredos foram gravados no Supabase de Produção. Um e-mail
  real para `contact@autoramaracing.com` foi observado como `delivered`. As duas chaves efêmeras
  do smoke foram revogadas; nenhuma permanece ativa.

## Alterações

Separação explícita de ambientes e gate público, URLs de checkout/recibo restritas, timeouts,
runtime não-root com recursos limitados, catálogo real no backend e confirmação de pagamento que
rejeita valor ausente/divergente ou booleans inválidos. Plano de deploy/rollback:
`deploy/RUNBOOK.md` na raiz.

## Estado final

Publicação estática concluída com a release indicada; o site principal continuou disponível. As
alterações foram enviadas às branches `codex/founder-production-release` dos dois repositórios.
Próximo passo: validar a criação de links reais sem efetuar pagamento, gerar uma release imutável
com `VITE_CHECKOUT_ENABLED=true`, implantar pelo compose existente e repetir o smoke público.
