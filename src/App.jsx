const assets = {
  logo: 'assets/autorama_logo_reduzido.png',
  kart: 'assets/Kart.png',
  kartParts: 'assets/Kart_partes%20(1).png',
  mechanics: 'assets/Pecas_Mecanica.png',
  mechanicsTwo: 'assets/Pecas_Mecanica2.png',
  pier: 'assets/PIER_ESTACIONAMENTO.png',
  wallpaper: 'assets/Wallpaper_Fuel%20(1).png',
}

const navItems = [
  { label: 'O jogo', href: '#universo' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'Fundadores', href: '#entrar' },
]

const benefits = [
  {
    title: 'Acesso antecipado',
    text: 'Entre antes do lancamento oficial e comece a evoluir sua garagem desde a primeira largada.',
    icon: 'clock',
  },
  {
    title: 'Itens unicos',
    text: 'Receba visuais, pecas e cosmeticos criados apenas para pilotos fundadores.',
    icon: 'star',
  },
  {
    title: 'Conteudo exclusivo',
    text: 'Participe de desafios, eventos e recompensas liberadas primeiro para a comunidade inicial.',
    icon: 'lock',
  },
  {
    title: 'Status especial',
    text: 'Mostre no perfil que voce estava no grid desde o dia 1 de Autorama Racing.',
    icon: 'crown',
  },
]

const founderPacks = [
  {
    name: 'Bronze',
    tone: 'bronze',
    eyebrow: 'Largada inicial',
    price: 'R$ 49',
    text: 'O passe essencial para garantir sua entrada no grid fundador.',
    perks: ['Acesso antecipado ao jogo', 'Itens unicos de fundador', 'Badge Bronze no perfil', '1 conjunto Founder Kart'],
    cta: 'Escolher Bronze',
  },
  {
    name: 'Prata',
    tone: 'silver',
    eyebrow: 'Garage boost',
    price: 'R$ 89',
    text: 'Mais vantagem, mais personalizacao e uma garagem pronta para evoluir.',
    perks: ['Tudo do pacote Bronze', '1 carro raro de fundador', 'Pintura neon exclusiva', 'Creditos extras de largada'],
    cta: 'Escolher Prata',
  },
  {
    name: 'Ouro',
    tone: 'gold',
    eyebrow: 'Founder elite',
    price: 'R$ 149',
    text: 'A experiencia mais completa para quem quer chegar com presenca maxima.',
    popular: true,
    perks: ['Tudo do pacote Prata', '1 carro epico Founder Premium', 'Efeito de largada dourado', 'Nome no mural dos pioneiros'],
    cta: 'Escolher Ouro',
  },
]

const universeCards = [
  {
    title: 'Corridas',
    label: 'Pistas neon',
    text: 'Disputas intensas em circuitos de alta voltagem, com ultrapassagens no limite e clima de arena.',
    image: assets.kart,
    icon: 'flag',
    tone: 'blue',
  },
  {
    title: 'Bastidores',
    label: 'Equipe viva',
    text: 'Da oficina ao paddock, cada detalhe ajuda sua reputacao a crescer antes da temporada abrir.',
    image: assets.wallpaper,
    icon: 'crew',
    tone: 'red',
  },
  {
    title: 'Mecanica',
    label: 'Setup fino',
    text: 'Ajuste pecas, upgrades e componentes visuais para transformar seu kart em assinatura de pista.',
    image: assets.mechanics,
    icon: 'gear',
    tone: 'gold',
  },
  {
    title: 'Oficina',
    label: 'Pecas raras',
    text: 'Descubra partes especiais, kits de performance e combinacoes que deixam sua garagem unica.',
    image: assets.mechanicsTwo,
    icon: 'wrench',
    tone: 'cyan',
  },
  {
    title: 'Colecao',
    label: 'Salao e pier',
    text: 'Explore carros, encontros, hubs sociais e oportunidades para exibir conquistas de fundador.',
    image: assets.kartParts,
    altImage: assets.pier,
    icon: 'map',
    tone: 'white',
  },
]

const reasons = [
  {
    title: 'Voce entra na historia',
    text: 'Fundadores ajudam a moldar o equilibrio, a economia e a identidade da primeira temporada.',
    icon: 'crew',
  },
  {
    title: 'Vantagem desde o inicio',
    text: 'Comece com itens limitados, progressao acelerada e mais liberdade para testar builds.',
    icon: 'rocket',
  },
  {
    title: 'Recompensas duradouras',
    text: 'Itens de fundador sao limitados e permanecem como marca de origem dentro do jogo.',
    icon: 'trophy',
  },
  {
    title: 'Valor real no lancamento',
    text: 'Entre com beneficios que acompanham sua conta quando o grid abrir para todos.',
    icon: 'shield',
  },
]

const stats = [
  { value: '04', label: 'beneficios principais' },
  { value: '03', label: 'pacotes fundadores' },
  { value: '01', label: 'temporada de largada' },
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
        <path d="M12 7.2v5l3.5 2.1" />
      </>
    ),
    star: <path d="m12 3 2.7 5.5 6 .9-4.4 4.2 1.1 5.9-5.4-2.8-5.4 2.8 1.1-5.9-4.4-4.2 6-.9L12 3Z" />,
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8.4 10V7.8a3.6 3.6 0 0 1 7.2 0V10" />
      </>
    ),
    crown: <path d="m4 8.5 4.2 4.2L12 5.8l3.8 6.9L20 8.5V18H4V8.5Z" />,
    flag: (
      <>
        <path d="M5 21V4.5" />
        <path d="M5 5c3.2-1.7 5.3 1.4 8.5-.2 1.6-.8 3.2-.7 5.5.3v8.2c-2.3-1-3.9-1.1-5.5-.3-3.2 1.6-5.3-1.5-8.5.2" />
      </>
    ),
    crew: (
      <>
        <circle cx="8" cy="8" r="2.7" />
        <circle cx="16" cy="8" r="2.7" />
        <path d="M3.5 19c.6-3.1 2.2-4.7 4.5-4.7s3.9 1.6 4.5 4.7" />
        <path d="M11.5 19c.6-3.1 2.2-4.7 4.5-4.7s3.9 1.6 4.5 4.7" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3.1" />
        <path d="M12 2.8v3M12 18.2v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M2.8 12h3M18.2 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1" />
      </>
    ),
    wrench: (
      <>
        <path d="M14.7 5.3a4.1 4.1 0 0 0 4.8 5.5l-8.7 8.7a2.8 2.8 0 0 1-4-4l8.7-8.7a4.1 4.1 0 0 0-.8-1.5Z" />
        <path d="M7.5 17.2h.1" />
      </>
    ),
    map: (
      <>
        <path d="m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z" />
        <path d="M9 4v14M15 6v14" />
      </>
    ),
    rocket: (
      <>
        <path d="M13.4 4.1c2.9-.9 5.2-.7 6.2.4s1.3 3.3.4 6.2l-5.8 5.8-4.9-4.9 4.1-7.5Z" />
        <path d="m9.3 11.6-4 1.2 1.8 4.8 4.1-4.2" />
        <path d="m14.2 16.5-1.1 4 4.7-1.7-3-3" />
        <circle cx="16.6" cy="7.6" r="1.4" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 4h8v4.5c0 3.2-1.7 5.4-4 5.4s-4-2.2-4-5.4V4Z" />
        <path d="M8 6H4.8c0 3 .9 4.8 3.7 5.3M16 6h3.2c0 3-.9 4.8-3.7 5.3" />
        <path d="M12 14v4M8.5 20h7" />
      </>
    ),
    shield: <path d="M12 3.5 19 6v5.5c0 4.3-2.8 7.4-7 9-4.2-1.6-7-4.7-7-9V6l7-2.5Z" />,
    bolt: <path d="M13 2 4.8 13.2h6.1L10 22l9-12.4h-6.2L13 2Z" />,
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...common}>
      {icons[name]}
    </svg>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="brand-lockup" aria-label="Autorama Racing">
          <img src={assets.logo} alt="" className="brand-mark" />
          <span>
            <strong>Autorama</strong>
            <small>Racing</small>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#pacotes" className="glow-button glow-button--small">
          Quero ser fundador
          <span aria-hidden="true">++</span>
        </a>
      </div>
    </header>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <div className="title-line">
        <span className="signal-bars" />
        {eyebrow && <p>{eyebrow}</p>}
        <span className="signal-bars signal-bars--right" />
      </div>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Cena de corrida Autorama Racing">
      <img src={assets.kart} alt="" className="hero-image" />
      <div className="hero-hud">
        <span>Founder Grid</span>
        <strong>01</strong>
      </div>
      <div className="speed-lines">
        {Array.from({ length: 10 }).map((_, index) => (
          <i key={index} style={{ '--delay': `${index * 0.12}s` }} />
        ))}
      </div>
      <div className="track-panel">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function BenefitCard({ item }) {
  return (
    <article className="benefit-card">
      <div className="icon-frame">
        <Icon name={item.icon} className="h-10 w-10" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  )
}

function FounderCard({ pack }) {
  return (
    <article className={`founder-card ${pack.tone}`}>
      {pack.popular && <span className="popular-ribbon">Mais Popular</span>}

      <div className="founder-card__header">
        <span>{pack.eyebrow}</span>
        <h3>{pack.name}</h3>
        <p>{pack.text}</p>
      </div>

      <div className="package-art" data-tone={pack.tone}>
        <img src={assets.kartParts} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="price-row">
        <strong>{pack.price}</strong>
        <small>pagamento unico</small>
      </div>

      <ul className="perk-list">
        {pack.perks.map((perk) => (
          <li key={perk}>
            <span aria-hidden="true">+</span>
            {perk}
          </li>
        ))}
      </ul>

      <a href="#entrar" className="package-button">
        {pack.cta}
      </a>
    </article>
  )
}

function UniverseCard({ card }) {
  return (
    <article className={`universe-card ${card.tone}`}>
      <img src={card.image} alt="" loading="lazy" decoding="async" className="universe-image" />
      {card.altImage && <img src={card.altImage} alt="" loading="lazy" decoding="async" className="universe-alt-image" />}
      <div className="universe-overlay" />
      <div className="universe-content">
        <div className="universe-icon">
          <Icon name={card.icon} className="h-9 w-9" />
        </div>
        <span>{card.label}</span>
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </div>
    </article>
  )
}

function ReasonCard({ item }) {
  return (
    <article className="reason-card">
      <Icon name={item.icon} className="h-10 w-10" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#top">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-hidden bg-asphalt text-white"
      style={{ '--wallpaper-image': `url("${assets.wallpaper}")`, '--formula-image': `url("${assets.kart}")` }}
    >
      <Header />

      <main>
        <section className="hero-section">
          <div className="hero-cinema" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:pb-16 lg:pt-32">
            <div className="hero-copy">
              <div className="eyebrow">
                <span />
                Acesse. Corra. Lidere.
              </div>
              <h1>Pacotes de Fundador</h1>
              <p>
                Entre antes de todos, receba itens exclusivos e acelere sua historia no{' '}
                <strong>Autorama Racing</strong>.
              </p>

              <div className="hero-actions">
                <a href="#pacotes" className="glow-button">
                  Quero ser fundador
                  <span aria-hidden="true">++</span>
                </a>
                <a href="#beneficios" className="ghost-button">
                  Ver beneficios
                  <span aria-hidden="true">+</span>
                </a>
              </div>

              <div className="stat-grid" aria-label="Resumo dos pacotes">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section id="beneficios" className="benefits-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="benefits-grid">
              {benefits.map((item) => (
                <BenefitCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="pacotes" className="page-section package-section">
          <SectionTitle
            eyebrow="Escolha seu grid"
            title="Escolha seu pacote de fundador"
            text="Tres niveis de entrada para quem quer acelerar antes do lancamento."
          />

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {founderPacks.map((pack) => (
              <FounderCard key={pack.name} pack={pack} />
            ))}
          </div>
        </section>

        <section id="universo" className="page-section universe-section">
          <SectionTitle
            eyebrow="Mundo Autorama"
            title="Um universo feito para corredores"
            text="Corridas, bastidores, oficina e colecao em uma experiencia gamer de alta energia."
          />

          <div className="universe-grid mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
            {universeCards.map((card) => (
              <UniverseCard key={card.title} card={card} />
            ))}
          </div>
        </section>

        <section className="page-section reasons-section">
          <SectionTitle eyebrow="Hora da largada" title="Por que entrar agora?" />

          <div className="mx-auto mt-10 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {reasons.map((item) => (
              <ReasonCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="entrar" className="final-cta">
          <div className="final-cta__image" />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p>Fundador desde a primeira volta</p>
              <h2>
                Garanta seu lugar <span>entre os fundadores</span>
              </h2>
              <small>Os melhores chegam antes. Nao fique de fora da primeira temporada de Autorama Racing.</small>
            </div>
            <a href="#pacotes" className="glow-button glow-button--cta">
              Quero ser fundador
              <span aria-hidden="true">++</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <a href="#top" className="brand-lockup footer-brand" aria-label="Autorama Racing">
              <img src={assets.logo} alt="" className="brand-mark" />
              <span>
                <strong>Autorama</strong>
                <small>Racing</small>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Corrida, colecao e competicao em uma experiencia neon feita para quem gosta de largar na frente.
            </p>
          </div>

          <FooterColumn title="Jogo" links={['Visao geral', 'Recursos', 'Carros', 'Pistas']} />
          <FooterColumn title="Comunidade" links={['Noticias', 'Eventos', 'Midia', 'Discord']} />
          <FooterColumn title="Suporte" links={['FAQ', 'Contato', 'Privacidade', 'Termos de uso']} />
        </div>
        <div className="footer-bottom">
          <span>© 2026 Autorama Racing. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
