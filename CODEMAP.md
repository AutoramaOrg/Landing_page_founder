# Mapa do projeto

- [PROJECT_PROFILE.md](PROJECT_PROFILE.md): ambientes confirmados, gates e estado operacional.
- [src/App.jsx](src/App.jsx): página, preços de exibição, modal de e-mail e resultado do pagamento.
- [src/App.js](src/App.js): gerado por `scripts/compile-jsx.mjs`; não editar diretamente.
- [src/checkout-config.js](src/checkout-config.js): seleção explícita do ambiente e gate público.
- [src/checkout.js](src/checkout.js): adaptador HTTP, validação dos destinos e consulta de pagamento.
- [scripts/checkout-config.test.mjs](scripts/checkout-config.test.mjs): isolamento dos ambientes.
- [Dockerfile](Dockerfile), [deploy/compose.yaml](deploy/compose.yaml), [deploy/nginx.conf](deploy/nginx.conf): runtime estático preparado, ainda não implantado.
- [deploy/RUNBOOK.md](deploy/RUNBOOK.md): publicação gradual e rollback.
- [obsidian-docs/05-Integracoes/Checkout-InfinitePay.md](obsidian-docs/05-Integracoes/Checkout-InfinitePay.md): contrato de checkout.
- Backend irmão `../autorama-supabase/supabase/functions/`: `infinitepay-create-checkout`,
  `founder-payment-status`, `infinitepay-webhook` e `_shared/founder-purchases.ts`.

Fluxo: pacote + e-mail → create-checkout → catálogo do servidor → InfinitePay → pedido pending;
retorno/webhook → payment_check autoritativo → valor exato → pedido paid → outbox de notificações.
