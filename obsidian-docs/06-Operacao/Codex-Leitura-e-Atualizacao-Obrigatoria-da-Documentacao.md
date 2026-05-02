# Codex - leitura e atualização obrigatória da documentação

## Regra

Antes de mexer no projeto, ler:

1. [[00-Home|Home]]
2. [[02-Como-Funciona/Arquitetura-da-Landing|Arquitetura da landing]]
3. [[06-Operacao/Como-Rodar-e-Buildar|Como rodar e buildar]]
4. [[03-Componentes/Assets-e-Branding|Assets e branding]] quando a mudança envolver imagens, logo ou arquivos públicos.

## Ao alterar código

Atualizar a documentação quando a mudança afetar:

- arquitetura;
- fluxo da página;
- componentes principais;
- copy pública;
- assets;
- scripts de build;
- dependências;
- deploy;
- validação operacional.

## Como documentar

Usar os templates:

- [[09-Templates/Template-Atualizacao-Frontend|Template - atualização frontend]]
- [[09-Templates/Template-Componente-Frontend|Template - componente frontend]]

## Padrão de escrita

- Direto e operacional.
- Dizer o que mudou, onde mudou e como validar.
- Registrar rollback ou fallback quando houver risco.
- Marcar hipóteses e lacunas como `A confirmar`.

## Checklist mínimo após mudança

- [ ] Documentei o que mudou.
- [ ] Listei arquivos afetados.
- [ ] Registrei comandos de validação.
- [ ] Registrei resultado da validação.
- [ ] Registrei rollback/fallback quando aplicável.
- [ ] Atualizei índices se criei documento novo.

#codex #governanca #documentacao
