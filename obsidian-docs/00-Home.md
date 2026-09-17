# Autorama Racing Landing Page - Documentacao

Vault operacional do projeto **Autorama Racing - Landing Page**.

Esta documentacao registra como a landing funciona, onde ficam os arquivos centrais, como rodar/buildar, como validar mudancas visuais e quais pontos ainda precisam de confirmacao antes de publicacao externa.

---

## Estado atual

- Landing React + Vite publicada em https://autorama.horsepower-studio.com/.
- Gameplay real carregado sob demanda, antes dos pacotes de fundador.
- Checkout da UI habilitado; backend no repositório irmão `../autorama-supabase`.
- Ambiente, SHA e histórico de validações: `../PROJECT_PROFILE.md`.
- Evidências desta publicação: `../deploy/2026-09-17-founder-gameplay-release.md`.


---

## Navegacao

### Visao geral

- [[01-Visao-Geral/O-que-e-Autorama-Racing-Landing|O que é a landing Autorama Racing]]
- [[01-Visao-Geral/Glossario|Glossário]]

### Como funciona

- [[02-Como-Funciona/Arquitetura-da-Landing|Arquitetura da landing]]
- [[02-Como-Funciona/Fluxo-da-Pagina|Fluxo da página]]

### Componentes

- [[03-Componentes/Frontend-React-Vite-Tailwind|Frontend React, Vite e Tailwind]]
- [[03-Componentes/Assets-e-Branding|Assets e branding]]
- [[03-Componentes/Gameplay-Real|Gameplay real na landing]]

### Banco de dados

- [[04-Banco-de-Dados/Sem-Banco-de-Dados|Sem banco de dados confirmado]]

### Integracoes

- [[05-Integracoes/Sem-Integracoes-Confirmadas|Sem integrações confirmadas]]
- [[05-Integracoes/Checkout-InfinitePay|Checkout InfinitePay]]

### Operacao

- [[06-Operacao/Como-Rodar-e-Buildar|Como rodar e buildar]]
- [[06-Operacao/Checklist-de-Validacao-Visual|Checklist de validação visual]]
- [[06-Operacao/Codex-Leitura-e-Atualizacao-Obrigatoria-da-Documentacao|Codex - leitura e atualização obrigatória da documentação]]
- [[06-Operacao/Atualizacao-2026-04-30-Assets-Logo-e-Hero-Full-Bleed|Atualização 2026-04-30 - assets, logo e hero full-bleed]]
- [[06-Operacao/Atualizacao-2026-09-08-Correcao-Checkout-InfinitePay|Atualização 2026-09-08 - correção do checkout InfinitePay]]
- [[06-Operacao/Preparacao-2026-09-09-VPS-Checkout-Producao|Preparação 2026-09-09 - VPS e checkout de Produção]]

### Roadmap

- [[07-Roadmap/Pendencias-e-Proximos-Passos|Pendências e próximos passos]]

### Templates

- [[09-Templates/Template-Atualizacao-Frontend|Template - atualização frontend]]
- [[09-Templates/Template-Componente-Frontend|Template - componente frontend]]

---

## Regra de manutencao

Qualquer alteração relevante de layout, copy, assets públicos, build, dependências ou fluxo de conversão deve atualizar este vault em `obsidian-docs/`.

Quando uma informação não for confirmada por arquivo, comando ou ambiente real, documentar como:

- `Hipótese (não confirmada)`
- `A confirmar`
- `Fallback`

#home #indice #autorama #landing
