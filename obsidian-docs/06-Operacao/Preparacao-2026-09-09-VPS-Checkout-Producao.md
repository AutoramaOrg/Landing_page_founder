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

## Ativação comercial — 2026-09-10

- Release ativa: `50875763a9d0a07331c4166e8e3d02f8fc96233c`.
- Pacote enviado: SHA-256 `e776409e453f9d09bd063c70ca5f54788db302b931abe1f591f683136c1eb542`.
- Imagem ativa: `sha256:99ac84a2edb57fb45fb60bd271acb78924ab84dea54cda21f1881cb39494003a`.
- Container observado como saudável, usuário `101:101`, filesystem somente leitura e mesma rede
  privada do Caddy. A imagem anterior com compras fechadas foi mantida para rollback.
- Landing e site principal responderam HTTP 200 após a troca; CSP e HSTS permaneceram presentes.
- Os botões públicos abriram o checkout `checkout.infinitepay.io` da conta `$power-horse-p86`.
  Valores observados: Bronze R$ 49,00, Prata R$ 89,00 e Ouro R$ 149,00. Foram criados somente
  pedidos pendentes identificados como smoke; nenhum pagamento foi executado.
- Navegação pública retornou à landing sem erros de console.

## Estado final

Publicação estática concluída com a release indicada; o site principal continuou disponível. As
alterações foram enviadas às branches `codex/founder-production-release` dos dois repositórios.
Compras estão habilitadas. A confirmação paga e os e-mails transacionais completos dependem do
primeiro pagamento real do titular; acompanhar `founder_orders`, a outbox e o painel do Resend.
