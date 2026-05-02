# Sem banco de dados confirmado

## Estado

- **Status:** ausência confirmada no repositório atual.
- **Fonte confirmada:** inspeção de estrutura de arquivos, `package.json`, `src/` e configurações do projeto.

## Conclusão

Não há banco de dados configurado neste projeto no estado atual.

Não foram encontrados:

- migrations;
- client Supabase;
- Prisma;
- ORM;
- schemas SQL;
- variáveis de ambiente de banco;
- chamadas HTTP para API de persistência.

## Impacto

A landing funciona como frontend estático/client-side.

Os dados exibidos são definidos diretamente no código em `src/App.jsx`, principalmente nos arrays:

- `benefits`;
- `packages`;
- `universe`;
- `reasons`.

## Pontos a confirmar antes de evoluir

Se houver necessidade de capturar leads, processar compras ou registrar interesse, será necessário definir:

- backend ou BaaS;
- modelo de dados;
- endpoint de envio;
- política de privacidade;
- validação de formulário;
- estratégia anti-spam;
- logging e monitoramento.

Até existir artefato real, qualquer referência a banco deve ser marcada como `A confirmar`.

#banco-de-dados #estado-atual
