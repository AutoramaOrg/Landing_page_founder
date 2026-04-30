const navItems = [
  { label: 'O Jogo', href: '#universo' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Entrar Agora', href: '#entrar' },
]

const benefits = [
  {
    title: 'Acesso antecipado',
    text: 'Jogue antes do lançamento oficial e sinta a pista na primeira largada.',
    icon: 'clock',
  },
  {
    title: 'Itens únicos',
    text: 'Garanta visuais, efeitos e bônus criados para fundadores.',
    icon: 'star',
  },
  {
    title: 'Conteúdo exclusivo',
    text: 'Eventos, desafios e recompensas reservados para a comunidade inicial.',
    icon: 'lock',
  },
  {
    title: 'Status fundador',
    text: 'Mostre seu nome entre os pilotos que aceleraram desde o dia 1.',
    icon: 'crown',
  },
]

const packages = [
  {
    name: 'Bronze',
    tone: 'bronze',
    price: 'R$ 49',
    tagline: 'Entrada oficial no grid fundador.',
    perks: [
      'Acesso antecipado ao jogo',
      'Itens únicos de fundador',
      'Badge fundador Bronze',
      '1 carro Founder Premium',
    ],
    button: 'Escolher Bronze',
  },
  {
    name: 'Prata',
    tone: 'silver',
    price: 'R$ 89',
    tagline: 'Mais estilo, mais garagem, mais vantagem.',
    perks: [
      'Tudo do pacote Bronze',
      '1 carro raro adicional',
      'Skin neon exclusiva',
      'Créditos extras de largada',
    ],
    button: 'Escolher Prata',
  },
  {
    name: 'Ouro',
    tone: 'gold',
    price: 'R$ 149',
    tagline: 'A experiência máxima para fundadores.',
    popular: true,
    perks: [
      'Tudo do pacote Prata',
      '1 carro épico fundador',
      'Efeito de largada dourado',
      'Nome no mural dos pioneiros',
    ],
    button: 'Escolher Ouro',
  },
]

const universe = [
  {
    title: 'Corridas',
    text: 'Pistas velozes, atalhos arriscados e disputas decididas no reflexo.',
    icon: 'flag',
    gradient: 'from-sky-500/25 via-transparent to-red-500/15',
  },
  {
    title: 'Bastidores',
    text: 'Boxes, eventos, contratos e reputação dentro de uma cena viva.',
    icon: 'helmet',
    gradient: 'from-fuchsia-500/20 via-transparent to-sky-500/15',
  },
  {
    title: 'Mecânica',
    text: 'Monte, pinte e evolua carros com personalidade de competição.',
    icon: 'gear',
    gradient: 'from-lime-400/20 via-transparent to-trophy/15',
  },
  {
    title: 'Eventos',
    text: 'Temporadas limitadas com recompensas raras para quem chega cedo.',
    icon: 'spark',
    gradient: 'from-red-500/25 via-transparent to-trophy/20',
  },
  {
    title: 'Economia viva',
    text: 'Mercado dinâmico, trocas e metas que movimentam o paddock.',
    icon: 'market',
    gradient: 'from-voltage/20 via-transparent to-emerald-400/15',
  },
]

const reasons = [
  {
    title: 'Você faz parte da história',
    text: 'Fundadores moldam o futuro do jogo com feedback e presença.',
    icon: 'crew',
  },
  {
    title: 'Vantagem desde o início',
    text: 'Comece com itens exclusivos e progressão acelerada.',
    icon: 'rocket',
  },
  {
    title: 'Recompensas duradouras',
    text: 'Itens de fundador são limitados e não voltam para a loja comum.',
    icon: 'trophy',
  },
  {
    title: 'Investimento que vale a pena',
    text: 'Apoie o projeto e receba benefícios de alto valor no lançamento.',
    icon: 'shield',
  },
]

function Icon({ name, className = '' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5v5l3.4 2" />
      </>
    ),
    star: <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3Z" />,
    lock: (
      <>
        <rect x="5.2" y="10" width="13.6" height="10" rx="1.8" />
        <path d="M8.2 10V7.7a3.8 3.8 0 0 1 7.6 0V10" />
      </>
    ),
    crown: <path d="M4 8.5 8.4 13 12 6l3.6 7L20 8.5V18H4V8.5Z" />,
    flag: (
      <>
        <path d="M5 20V5" />
        <path d="M5 5c3-1.8 5.4 1.5 8.4-.3 1.6-1 3-.9 5.6.3v8.2c-2.6-1.2-4-1.3-5.6-.3-3 1.8-5.4-1.5-8.4.3" />
      </>
    ),
    helmet: (
      <>
        <path d="M4 13.2A8 8 0 0 1 19.5 10H12l-2 3.2H4Z" />
        <path d="M4.5 13.2c.7 4.1 3.8 6.1 7.6 6.1 2 0 4.1-.5 6.4-1.6" />
        <path d="M12 10h8" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.8v3M12 18.2v3M4 6.3l2.2 2M17.8 15.7l2.2 2M2.8 12h3M18.2 12h3M4 17.7l2.2-2M17.8 8.3l2.2-2" />
      </>
    ),
    spark: <path d="M12 2.7 14.2 9l6.1 3-6.1 3-2.2 6.3L9.8 15l-6.1-3 6.1-3L12 2.7Z" />,
    market: (
      <>
        <path d="M4 17.5 9 12l3 3 7-8" />
        <path d="M16 7h3v3" />
        <path d="M4 20h16" />
      </>
    ),
    crew: (
      <>
        <circle cx="8" cy="8.3" r="2.7" />
        <circle cx="16" cy="8.3" r="2.7" />
        <path d="M3.5 18.5c.6-3 2.2-4.6 4.5-4.6s3.9 1.6 4.5 4.6" />
        <path d="M11.5 18.5c.6-3 2.2-4.6 4.5-4.6s3.9 1.6 4.5 4.6" />
      </>
    ),
    rocket: (
      <>
        <path d="M13.5 4.2c2.9-.9 5.2-.7 6.3.4 1.1 1.1 1.3 3.4.4 6.3l-5.9 5.9-4.9-4.9 4.1-7.7Z" />
        <path d="M9.4 11.9 5.3 13 7 17.7l4.2-4.2" />
        <path d="M14.3 16.8 13.2 21l-4.7-1.7 3-3" />
        <circle cx="16.7" cy="7.7" r="1.4" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v4.5c0 3-1.7 5.3-4 5.3S8 11.5 8 8.5V4Z" />
        <path d="M8 6H4.8c0 3 .9 4.8 3.7 5.4M16 6h3.2c0 3-.9 4.8-3.7 5.4" />
        <path d="M12 14v4M8.5 20h7" />
      </>
    ),
    shield: <path d="M12 3.5 19 6v5.5c0 4.3-2.8 7.4-7 9-4.2-1.6-7-4.7-7-9V6l7-2.5Z" />,
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...common}>
      {icons[name]}
    </svg>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-asphalt/82 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Autorama Racing">
          <span className="relative flex h-9 w-12 items-center justify-center overflow-hidden border border-white/20 bg-white/5">
            <span className="absolute inset-0 bg-[linear-gradient(120deg,#ff263d_0_28%,transparent_28%_41%,#1ca7ff_41%_58%,transparent_58%_68%,#ffffff_68%)] opacity-80" />
            <span className="relative h-3 w-8 bg-asphalt shadow-[7px_0_0_#05070d,-7px_0_0_#05070d]" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-black uppercase tracking-[.08em] text-white sm:text-2xl">
              Autorama
            </span>
            <span className="block text-right font-display text-[11px] font-bold uppercase tracking-[.34em] text-chrome/80">
              Racing
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#pacotes" className="glow-button small">
          Quero ser fundador
          <span aria-hidden="true">››</span>
        </a>
      </div>
    </header>
  )
}

function TrackScene() {
  return (
    <div className="hero-visual" aria-label="Cena futurista de corrida Autorama Racing">
      <div className="screen-wall">
        <span>SYNCOIL</span>
      </div>
      <div className="crowd-row">
        {Array.from({ length: 28 }).map((_, index) => (
          <i key={index} style={{ '--delay': `${index * 0.08}s` }} />
        ))}
      </div>
      <div className="track-lanes">
        <span />
        <span />
        <span />
      </div>
      <div className="slot-car">
        <div className="car-body">
          <span className="window" />
          <span className="stripe" />
          <span className="headlight left" />
          <span className="headlight right" />
        </div>
        <span className="wheel front" />
        <span className="wheel rear" />
      </div>
      <div className="driver-stand" />
      <div className="blue-beam" />
      <div className="red-beam" />
    </div>
  )
}

function BenefitCard({ benefit }) {
  return (
    <article className="benefit-card group">
      <Icon name={benefit.icon} className="h-11 w-11 text-voltage transition duration-300 group-hover:text-white" />
      <div>
        <h3>{benefit.title}</h3>
        <p>{benefit.text}</p>
      </div>
    </article>
  )
}

function PackageCard({ pack }) {
  return (
    <article className={`founder-card ${pack.tone === 'gold' ? 'gold-card' : ''}`}>
      {pack.popular && <span className="popular-ribbon">Mais Popular</span>}
      <div className="package-top">
        <span className={`tier-mark ${pack.tone}`} />
        <h3>{pack.name}</h3>
        <p>{pack.tagline}</p>
      </div>

      <div className="car-preview" data-tone={pack.tone}>
        <span className="car-shadow" />
        <span className="mini-car">
          <span />
        </span>
      </div>

      <div className="price-row">
        <span>{pack.price}</span>
        <small>pagamento único</small>
      </div>

      <ul className="perk-list">
        {pack.perks.map((perk) => (
          <li key={perk}>
            <span>✓</span>
            {perk}
          </li>
        ))}
      </ul>

      <a href="#entrar" className={`package-button ${pack.tone}`}>
        {pack.button}
      </a>
    </article>
  )
}

function UniverseCard({ item }) {
  return (
    <article className={`universe-card bg-gradient-to-br ${item.gradient}`}>
      <div className="universe-art">
        <Icon name={item.icon} className="h-11 w-11" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  )
}

function ReasonCard({ reason }) {
  return (
    <article className="reason-card">
      <Icon name={reason.icon} className="h-10 w-10 text-ember" />
      <div>
        <h3>{reason.title}</h3>
        <p>{reason.text}</p>
      </div>
    </article>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-asphalt text-white">
      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-backdrop" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-32 sm:px-6 lg:grid-cols-[.88fr_1.12fr] lg:px-8 lg:pb-20 lg:pt-36">
            <div className="relative z-10 max-w-2xl">
              <div className="eyebrow">
                <span />
                Acesse. Corra. Lidere.
              </div>
              <h1 className="hero-title">Pacotes de Fundador</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Entre antes de todos, receba itens únicos e acelere sua história no{' '}
                <strong className="text-voltage">Autorama Racing</strong>.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#pacotes" className="glow-button">
                  Quero ser fundador
                  <span aria-hidden="true">››</span>
                </a>
                <a href="#beneficios" className="ghost-button">
                  Ver pacotes
                  <span aria-hidden="true">›</span>
                </a>
              </div>
            </div>

            <TrackScene />
          </div>

          <div id="beneficios" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <BenefitCard key={benefit.title} benefit={benefit} />
              ))}
            </div>
          </div>
        </section>

        <section id="pacotes" className="section-shell pt-20">
          <div className="section-heading">
            <span className="signal-bars" />
            <h2>Escolha seu pacote de fundador</h2>
            <span className="signal-bars right" />
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {packages.map((pack) => (
              <PackageCard key={pack.name} pack={pack} />
            ))}
          </div>
        </section>

        <section id="universo" className="section-shell pt-20">
          <div className="section-heading">
            <span className="signal-bars" />
            <h2>Um universo feito para corredores</h2>
            <span className="signal-bars right" />
          </div>

          <div className="universe-grid mx-auto mt-9 max-w-7xl px-4 sm:px-6 lg:px-8">
            {universe.map((item) => (
              <UniverseCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section className="section-shell py-20">
          <div className="section-heading">
            <span className="signal-bars" />
            <h2>Por que entrar agora?</h2>
            <span className="signal-bars right" />
          </div>

          <div className="mx-auto mt-9 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {reasons.map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </section>

        <section id="entrar" className="final-cta">
          <div className="race-blur" />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[.35em] text-trophy">
                A largada está aberta
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-black uppercase leading-[.95] tracking-wide sm:text-5xl lg:text-6xl">
                Garanta seu lugar <span>entre os fundadores</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
                Os melhores chegam antes. Não fique de fora da primeira temporada de Autorama Racing.
              </p>
            </div>

            <a href="#pacotes" className="glow-button cta">
              Quero ser fundador
              <span aria-hidden="true">››</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <a href="#top" className="inline-flex items-center gap-3" aria-label="Autorama Racing">
              <span className="relative flex h-8 w-11 items-center justify-center overflow-hidden border border-white/20 bg-white/5">
                <span className="absolute inset-0 bg-[linear-gradient(120deg,#ff263d_0_28%,transparent_28%_41%,#1ca7ff_41%_58%,transparent_58%_68%,#ffffff_68%)] opacity-80" />
                <span className="relative h-2.5 w-7 bg-asphalt shadow-[6px_0_0_#05070d,-6px_0_0_#05070d]" />
              </span>
              <span className="font-display text-xl font-black uppercase tracking-[.08em] text-white">
                Autorama Racing
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Corrida, coleção e competição em uma experiência neon feita para quem gosta de largar na frente.
            </p>
          </div>

          <FooterList title="Jogo" links={['Visão Geral', 'Recursos', 'Carros', 'Pistas']} />
          <FooterList title="Comunidade" links={['Notícias', 'Eventos', 'Mídia', 'Discord']} />
          <FooterList title="Suporte" links={['FAQ', 'Contato', 'Privacidade', 'Termos de Uso']} />
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
          © 2026 Autorama Racing. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}

function FooterList({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-sm font-black uppercase tracking-[.18em] text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link}>
            <a href="#top" className="transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
