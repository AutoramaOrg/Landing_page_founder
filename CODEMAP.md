# Mapa do projeto

- [PROJECT_PROFILE.md](PROJECT_PROFILE.md): ambientes confirmados, gates e estado operacional.
- [src/App.jsx](src/App.jsx): página, preços de exibição, modal de e-mail e resultado do pagamento.
- [src/App.js](src/App.js): gerado por `scripts/compile-jsx.mjs`; não editar diretamente.
- [src/index.css](src/index.css): design tokens, layout responsivo e componentes visuais da página.
- [public/fonts/](public/fonts/): Inter e Archivo em woff2 auto-hospedados (OFL 1.1), sem CDN.
- [src/checkout-config.js](src/checkout-config.js): seleção explícita do ambiente e gate público.
- [src/checkout.js](src/checkout.js): adaptador HTTP, validação dos destinos e consulta de pagamento.
- [scripts/checkout-config.test.mjs](scripts/checkout-config.test.mjs): isolamento dos ambientes.
- [Dockerfile](Dockerfile), [deploy/compose.yaml](deploy/compose.yaml), [deploy/nginx.conf](deploy/nginx.conf): runtime estático ativo no VPS, sem porta publicada no host.
- [deploy/RUNBOOK.md](deploy/RUNBOOK.md): publicação gradual e rollback (inclui rollback do design).
- [deploy/2026-09-11-founder-visual-release.md](deploy/2026-09-11-founder-visual-release.md): registro
  da primeira release visual e seu rollback.
- [deploy/2026-09-11-founder-packages-favicon-release.md](deploy/2026-09-11-founder-packages-favicon-release.md):
  release que removeu o selo, publicou o favicon e registrou a pendência do alias `www`.
- [deploy/2026-09-11-founder-package-copy-release.md](deploy/2026-09-11-founder-package-copy-release.md):
  release ativa com carros separados por linha e pinturas Fundador por pacote.
- [obsidian-docs/05-Integracoes/Checkout-InfinitePay.md](obsidian-docs/05-Integracoes/Checkout-InfinitePay.md): contrato de checkout.
- Backend irmão `../autorama-supabase/supabase/functions/`: `infinitepay-create-checkout`,
  `founder-payment-status`, `infinitepay-webhook` e `_shared/founder-purchases.ts`.

Fluxo: pacote + e-mail → create-checkout → catálogo do servidor → InfinitePay → pedido pending;
retorno/webhook → payment_check autoritativo → valor exato → pedido paid → outbox de notificações.

Estrutura da página após o redesign de 2026-09-10: header → hero → faixa de destaques → gameplay real → pacotes →
faixa final com FAQ → rodapé enxuto. O visual anterior fica na tag `design/pre-redesign-20260910`.

- [Gameplay real](obsidian-docs/03-Componentes/Gameplay-Real.md): origem, cortes, assets e player sob demanda em `#gameplay`.
