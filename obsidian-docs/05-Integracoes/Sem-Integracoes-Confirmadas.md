# Sem integrações confirmadas

## Estado

- **Status:** superado em `2026-07-12` — ver [[05-Integracoes/Checkout-InfinitePay|Checkout InfinitePay]].
- **Fonte confirmada:** inspeção de `src/`, `package.json`, `index.html` e configurações (estado anterior a `2026-07-12`).

## Conclusão

Não há integrações externas configuradas no estado atual do projeto.

Não foram encontrados:

- gateway de pagamento;
- formulário conectado a backend;
- API de leads;
- analytics;
- pixels de mídia;
- Discord real;
- WhatsApp;
- CRM;
- endpoint externo.

## CTAs atuais

Os botões e links atuais usam âncoras internas:

- `#pacotes`
- `#beneficios`
- `#entrar`
- `#top`

Eles não executam compra, cadastro ou envio de dados.

## Quando integrar

Antes de adicionar uma integração, documentar:

- objetivo da integração;
- endpoint ou SDK usado;
- credenciais necessárias;
- variáveis de ambiente;
- payload enviado;
- payload recebido;
- tratamento de erro;
- fallback;
- validação executada;
- rollback.

Usar [[09-Templates/Template-Atualizacao-Frontend|Template - atualização frontend]] para registrar a mudança.

#integracoes #estado-atual #ctas
