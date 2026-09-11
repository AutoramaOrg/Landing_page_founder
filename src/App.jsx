import {
  checkoutEnabled,
  createCheckout,
  getPaymentStatus,
  readPaymentResult,
} from './checkout.js'

const GAME_SITE_URL = 'https://www.autoramaracing.com/'

const navItems = [
  { label: 'O jogo', href: GAME_SITE_URL, external: true },
  { label: 'Pacotes', href: '#pacotes', section: 'pacotes' },
  { label: 'Dúvidas', href: '#duvidas', section: 'duvidas' },
]

const highlights = [
  { icon: 'car', label: 'Carros colecionáveis' },
  { icon: 'star', label: 'Itens de fundador' },
  { icon: 'bars', label: 'Apoie o desenvolvimento' },
]

const packages = [
  {
    id: 'bronze',
    name: 'Bronze',
    tone: 'bronze',
    price: 'R$ 49',
    includedCars: ['Premium'],
    cars: [
      {
        image: '/assets/packages/package-bronze-car.webp',
        alt: 'Carro Premium com pintura vermelha, preta e branca',
        slot: 'bronze',
      },
    ],
    features: [
      { icon: 'car', text: '1 carro: Premium' },
      { icon: 'brush', text: '1 bodykit + 1 pintura especial' },
      { icon: 'star', text: 'Itens de fundador' },
    ],
    button: 'Escolher Bronze',
  },
  {
    id: 'prata',
    name: 'Prata',
    tone: 'silver',
    price: 'R$ 89',
    includedCars: ['Premium', 'Raro'],
    cars: [
      {
        image: '/assets/packages/package-silver-car.webp',
        alt: 'Carro Raro preto com detalhes azuis e aerofólio',
        slot: 'silver',
      },
    ],
    features: [
      { icon: 'car', text: '2 carros: Premium + Raro' },
      { icon: 'brush', text: '2 bodykits + 2 pinturas especiais' },
      { icon: 'star', text: 'Itens de fundador' },
    ],
    button: 'Escolher Prata',
  },
  {
    id: 'ouro',
    name: 'Ouro',
    tone: 'gold',
    price: 'R$ 149',
    includedCars: ['Premium', 'Raro', 'Épico'],
    cars: [
      {
        image: '/assets/packages/package-gold-cars.webp',
        alt: 'Três carros dos níveis Raro, Premium e Épico',
        slot: 'gold',
      },
    ],
    features: [
      { icon: 'car', text: '3 carros: Premium + Raro + Épico' },
      { icon: 'brush', text: '3 bodykits + 3 pinturas especiais' },
      { icon: 'star', text: 'Itens de fundador' },
      { icon: 'people', text: 'Nome no mural dos pioneiros' },
    ],
    button: 'Escolher Ouro',
  },
]

const faq = [
  {
    question: 'Quando recebo os itens do pacote?',
    answer:
      'Os itens são creditados na sua conta em até 2 dias úteis após a confirmação do pagamento.',
  },
  {
    question: 'Preciso ter uma conta para comprar?',
    answer:
      'Não. A compra é identificada pelo e-mail informado no checkout, e os itens entram na conta criada com esse mesmo e-mail.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'O pagamento é processado pelo checkout seguro da InfinitePay. Nenhum dado de cartão passa por este site.',
  },
  {
    question: 'O jogo já está disponível?',
    answer:
      'O Autorama Racing está em desenvolvimento. Os pacotes de fundador garantem acesso antecipado e itens exclusivos de fundador.',
  },
]

function Icon({ name, className = '' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    car: (
      <>
        <path d="M3.6 15.4v-2.1l1.7-4a2 2 0 0 1 1.9-1.2h9.6a2 2 0 0 1 1.9 1.2l1.7 4v2.1" />
        <path d="M3.6 13.3h16.8" />
        <circle cx="7.6" cy="16.4" r="1.8" />
        <circle cx="16.4" cy="16.4" r="1.8" />
      </>
    ),
    star: <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8L12 3.6Z" />,
    bars: (
      <>
        <path d="M5 19v-5.2" />
        <path d="M12 19V9.4" />
        <path d="M19 19V5.6" />
      </>
    ),
    badge: (
      <>
        <path d="M12 3.6 19 6v5.4c0 4.2-2.8 7.2-7 8.9-4.2-1.7-7-4.7-7-8.9V6l7-2.4Z" />
        <path d="m9.2 11.8 2 2 3.6-3.7" />
      </>
    ),
    brush: (
      <>
        <path d="M14.9 4.6 19.4 9.1 10.2 18.3H5.7v-4.5z" />
        <path d="m12.9 6.6 4.5 4.5" />
        <path d="M5.7 13.8 10.2 18.3" />
      </>
    ),
    people: (
      <>
        <circle cx="9.2" cy="8.6" r="2.7" />
        <path d="M3.9 18.4c.6-3.1 2.4-4.7 5.3-4.7s4.7 1.6 5.3 4.7" />
        <path d="M15.4 6.3a2.7 2.7 0 0 1 0 5.1" />
        <path d="M16.6 13.9c2 .4 3.2 1.9 3.7 4.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...common}>
      {icons[name]}
    </svg>
  )
}

function NavLink({ item, active, onNavigate }) {
  const external = item.external
  return (
    <a
      href={item.href}
      className={`nav-link${active ? ' is-active' : ''}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={() => onNavigate(item)}
    >
      {item.label}
    </a>
  )
}

function Header({ activeSection, onNavigate }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const query = window.matchMedia('(min-width: 900px)')
    const onDesktop = () => {
      if (query.matches) setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    query.addEventListener('change', onDesktop)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      query.removeEventListener('change', onDesktop)
    }
  }, [open])

  const handleNavigate = (item) => {
    setOpen(false)
    onNavigate(item)
  }

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="Autorama Racing">
          <img src="/assets/logos/autorama-racing-logo.svg" alt="" />
        </a>

        <nav className="header-nav" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              active={item.section === activeSection}
              onNavigate={handleNavigate}
            />
          ))}
        </nav>

        <a href="#pacotes" className="btn btn-primary btn-sm header-cta">
          Ver pacotes
          <span aria-hidden="true">››</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} className="menu-icon" />
        </button>
      </div>

      <div id="menu-mobile" className="mobile-menu" hidden={!open}>
        <nav aria-label="Menu">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              active={item.section === activeSection}
              onNavigate={handleNavigate}
            />
          ))}
        </nav>
        <a href="#pacotes" className="btn btn-primary" onClick={() => setOpen(false)}>
          Ver pacotes
          <span aria-hidden="true">››</span>
        </a>
      </div>
    </header>
  )
}

function HeroStage() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <span className="stage-car stage-car-blue">
        <span className="car-floor-glow" />
        <img src="/assets/hero/hero-car-blue.webp" alt="" decoding="async" />
      </span>
      <span className="stage-car stage-car-red">
        <span className="car-floor-glow" />
        <img src="/assets/hero/hero-car-red.webp" alt="" decoding="async" />
      </span>
      <span className="stage-car stage-car-pink">
        <span className="car-floor-glow" />
        <img src="/assets/hero/hero-car-pink.webp" alt="" decoding="async" fetchPriority="high" />
      </span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-room" aria-hidden="true">
        <span className="hero-environment" />
        <span className="hero-environment-overlay" />
        <span className="room-number">01</span>
      </div>

      <div className="hero-shell">
        <div className="hero-copy">
          <p className="kicker">Pacotes de fundador</p>

          <h1 className="hero-title">
            <span className="line">Seu lugar</span>
            <span className="line">no primeiro</span>
            <span className="line accent">Grid.</span>
          </h1>

          <HeroStage />

          <p className="hero-lead">
            Apoie o Autorama Racing e comece sua coleção com itens de fundador.
          </p>

          <p className="hero-price">A partir de R$ 49</p>

          <div className="hero-actions">
            <a href="#pacotes" className="btn btn-primary btn-cta">
              Escolher meu pacote
              <span aria-hidden="true">»</span>
            </a>
            <a href={GAME_SITE_URL} target="_blank" rel="noreferrer" className="text-link">
              Conheça o jogo
              <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>

        <p className="hero-words" aria-hidden="true">
          <span>Drive</span>
          <span>Colecione</span>
          <span>Evolua</span>
        </p>

        <p className="hero-collection" aria-hidden="true">
          Coleção fundador
        </p>
      </div>
    </section>
  )
}

function Highlights() {
  return (
    <section className="highlights">
      <ul className="highlights-inner">
        {highlights.map((item) => (
          <li key={item.label} className="highlight">
            <Icon name={item.icon} className="highlight-icon" />
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  )
}

function PackageCard({ pack, onChoose }) {
  return (
    <article className={`pack pack-${pack.tone}`}>
      <div className="pack-visual">
        <div className={`pack-cars pack-cars-${pack.tone}`}>
          {pack.cars.map((car) => (
            <img
              key={`${pack.id}-${car.slot}`}
              className={`pack-car slot-${car.slot}`}
              src={car.image}
              alt={car.alt}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        <div className="pack-head">
          <h3>{pack.name}</h3>
        </div>

        <p className="pack-price">{pack.price}</p>
      </div>

      <ul className="pack-features">
        {pack.features.map((feature) => (
          <li key={feature.text}>
            <Icon name={feature.icon} className="feature-icon" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onChoose(pack)}
        disabled={!checkoutEnabled}
        className={`btn pack-button ${pack.tone === 'gold' ? 'btn-primary' : 'btn-outline'}`}
      >
        {checkoutEnabled ? pack.button : 'Disponível em breve'}
        <span aria-hidden="true">›</span>
      </button>
    </article>
  )
}

function Packages({ onChoose }) {
  return (
    <section id="pacotes" className="section packages">
      <div className="section-inner">
        <div className="section-head">
          <p className="kicker">Monte sua garagem</p>
          <h2 className="title">Escolha seu pacote.</h2>
          <p className="section-sub">Compare os carros e benefícios de cada opção.</p>
        </div>

        <div className="packs">
          {packages.map((pack) => (
            <PackageCard key={pack.id} pack={pack} onChoose={onChoose} />
          ))}
        </div>

        <p className="packs-note">
          Todos os pacotes incluem acesso antecipado e itens de fundador.
        </p>
      </div>
    </section>
  )
}

function Closing({ faqOpen, onToggleFaq }) {
  return (
    <section id="duvidas" className="closing">
      <div className="closing-flag left" aria-hidden="true" />
      <div className="closing-flag right" aria-hidden="true" />

      <div className="closing-inner">
        <div className="closing-copy">
          <h2 className="title">Faça parte dessa largada.</h2>
          <p className="section-sub">Conheça o jogo e acompanhe o desenvolvimento.</p>
        </div>

        <div className="faq">
          <button
            type="button"
            className="faq-toggle"
            aria-expanded={faqOpen}
            aria-controls="faq-panel"
            onClick={onToggleFaq}
          >
            Dúvidas frequentes
            <span className="faq-sign" aria-hidden="true">
              {faqOpen ? '−' : '+'}
            </span>
          </button>

          <div id="faq-panel" className="faq-panel" hidden={!faqOpen}>
            {faq.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#top" aria-label="Autorama Racing">
          <img src="/autorama_white.png" alt="" />
        </a>
        <p className="footer-note">Jogo em desenvolvimento.</p>
      </div>
    </footer>
  )
}

function PurchaseModal({ pack, onClose }) {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState('')
  const emailRef = React.useRef(null)
  const dialogRef = React.useRef(null)
  const errorRef = React.useRef(null)
  const statusRef = React.useRef(status)
  statusRef.current = status

  React.useEffect(() => {
    const trigger = document.activeElement
    const body = document.body
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbarWidth}px`
    body.style.overflow = 'hidden'
    emailRef.current?.focus({ preventScroll: true })

    const focusableElements = () => [
      ...dialogRef.current.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled)'),
    ].filter((element) => element.getClientRects().length)
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && statusRef.current !== 'loading') onClose()
      if (event.key !== 'Tab') return
      const elements = focusableElements()
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (!first) {
        event.preventDefault()
        dialogRef.current.focus({ preventScroll: true })
      } else if (!elements.includes(document.activeElement)) {
        event.preventDefault()
        ;(event.shiftKey ? last : first).focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    const containFocus = (event) => {
      if (!dialogRef.current.contains(event.target)) {
        ;(focusableElements()[0] || dialogRef.current).focus({ preventScroll: true })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('focusin', containFocus)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('focusin', containFocus)
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [onClose])

  React.useEffect(() => {
    if (status === 'loading') dialogRef.current?.focus({ preventScroll: true })
    else if (error) errorRef.current?.focus()
  }, [status, error])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setStatus('loading')

    try {
      const url = await createCheckout(pack.id, { email: email.trim() })
      onClose()
      window.location.assign(url)
    } catch (requestError) {
      setStatus('idle')
      setError(requestError.message || 'Não foi possível abrir o pagamento. Tente novamente.')
    }
  }

  return (
    <div
      className="purchase-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && status !== 'loading') onClose()
      }}
    >
      <section
        ref={dialogRef}
        tabIndex={-1}
        className="purchase-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="purchase-modal-title"
        aria-describedby="purchase-modal-description"
        aria-busy={status === 'loading'}
      >
        <div className="purchase-modal-header">
          <p className="purchase-modal-kicker">Pacote {pack.name}</p>
          <button
            type="button"
            className="purchase-modal-close"
            onClick={onClose}
            disabled={status === 'loading'}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
        <div className="purchase-modal-content">
          <h2 id="purchase-modal-title">Qual é o seu e-mail?</h2>
          <p id="purchase-modal-description">
            Usaremos este e-mail para identificar sua compra e creditar os itens na sua conta. Você
            pode comprar mesmo sem ter uma conta cadastrada.
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Seu e-mail
              <input
                ref={emailRef}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
                maxLength={254}
                required
                disabled={status === 'loading'}
              />
            </label>
            {error && (
              <p ref={errorRef} tabIndex={-1} className="purchase-modal-error" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary purchase-modal-submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Preparando pagamento…' : 'Continuar para pagamento'}
              <span aria-hidden="true">›</span>
            </button>
          </form>
          <small>
            Guarde seu comprovante. Os itens serão adicionados à sua conta em até 2 dias úteis após
            a confirmação do pagamento.
          </small>
        </div>
      </section>
    </div>
  )
}

function PaymentConfirmation({ result }) {
  const [status, setStatus] = React.useState('checking')
  const [details, setDetails] = React.useState(null)
  const retryRef = React.useRef(0)
  const timerRef = React.useRef(null)

  const verifyPayment = React.useCallback(async () => {
    setStatus('checking')
    try {
      const payment = await getPaymentStatus(result)
      if (payment.status === 'paid') {
        setDetails(payment)
        setStatus('paid')
        return
      }
      if (payment.status === 'pending' && retryRef.current < 15) {
        retryRef.current += 1
        timerRef.current = window.setTimeout(verifyPayment, 2000)
        return
      }
      setStatus(payment.status === 'pending' ? 'waiting' : 'error')
    } catch {
      setStatus('waiting')
    }
  }, [result])

  React.useEffect(() => {
    verifyPayment()
    return () => window.clearTimeout(timerRef.current)
  }, [verifyPayment])

  const closeConfirmation = () => {
    window.close()
    window.setTimeout(() => {
      if (!window.closed) window.location.assign(window.location.pathname)
    }, 150)
  }

  const pack = details ? packages.find((item) => item.id === details.package_id) : null
  const items = pack
    ? [
        ...pack.includedCars.map((car) => `Carro ${car}`),
        ...pack.features.filter((feature) => feature.icon !== 'car').map((feature) => feature.text),
      ]
    : []

  return (
    <main className="payment-confirmation-shell">
      <section className="payment-confirmation-panel" aria-live="polite">
        <img src="/autorama_white.png" alt="Autorama Racing" className="payment-confirmation-logo" />
        {status === 'checking' && (
          <>
            <span className="confirmation-spinner" aria-hidden="true" />
            <p className="payment-confirmation-kicker">Confirmando pagamento</p>
            <h1>Estamos validando sua compra.</h1>
            <p>Isso pode levar alguns segundos. Mantenha esta janela aberta.</p>
          </>
        )}
        {status === 'paid' && (
          <>
            <span className="confirmation-check" aria-hidden="true">✓</span>
            <p className="payment-confirmation-kicker success">Compra confirmada</p>
            <h1>Você entrou para o grid de fundadores.</h1>
            <p>
              O pacote <strong>{pack?.name}</strong> foi confirmado para o e-mail{' '}
              <strong>{details.email}</strong>. Guarde seu comprovante.
            </p>
            <ul className="payment-confirmation-items">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="payment-confirmation-next">
              Os benefícios serão adicionados à sua conta em até <strong>2 dias úteis</strong>.
            </p>
            <div className="payment-confirmation-actions">
              {details.receipt_url && (
                <a href={details.receipt_url} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Ver comprovante
                </a>
              )}
              <button type="button" onClick={closeConfirmation} className="btn btn-primary">
                Fechar janela <span aria-hidden="true">›</span>
              </button>
            </div>
          </>
        )}
        {status === 'waiting' && (
          <>
            <p className="payment-confirmation-kicker">Pagamento em processamento</p>
            <h1>Estamos concluindo a confirmação.</h1>
            <p>Se o pagamento foi aprovado, aguarde alguns minutos e consulte seu e-mail.</p>
            <button
              type="button"
              onClick={() => { retryRef.current = 0; verifyPayment() }}
              className="btn btn-outline confirmation-retry"
            >
              Verificar novamente <span aria-hidden="true">›</span>
            </button>
          </>
        )}
        {status === 'error' && (
          <>
            <p className="payment-confirmation-kicker">Não confirmado</p>
            <h1>Não conseguimos confirmar este pagamento.</h1>
            <p>Se você concluiu o pagamento, aguarde alguns minutos ou entre em contato com o suporte.</p>
            <button type="button" onClick={closeConfirmation} className="btn btn-outline confirmation-retry">
              Fechar janela
            </button>
          </>
        )}
      </section>
    </main>
  )
}

function App() {
  const [paymentResult] = React.useState(readPaymentResult)
  const [selectedPackage, setSelectedPackage] = React.useState(null)
  const [activeSection, setActiveSection] = React.useState('pacotes')
  const [faqOpen, setFaqOpen] = React.useState(false)
  const closePurchase = React.useCallback(() => setSelectedPackage(null), [])

  React.useEffect(() => {
    if (paymentResult || typeof IntersectionObserver === 'undefined') return undefined
    const closing = document.getElementById('duvidas')
    if (!closing) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setActiveSection(entry.isIntersecting ? 'duvidas' : 'pacotes'),
      { rootMargin: '-35% 0px -20% 0px' },
    )
    observer.observe(closing)
    return () => observer.disconnect()
  }, [paymentResult])

  const handleNavigate = React.useCallback((item) => {
    if (item.section === 'duvidas') setFaqOpen(true)
  }, [])

  if (paymentResult) return <PaymentConfirmation result={paymentResult} />

  return (
    <div id="top" className="page">
      <div inert={selectedPackage ? '' : undefined}>
        <Header activeSection={activeSection} onNavigate={handleNavigate} />

        <main>
          <Hero />
          <Highlights />
          <Packages onChoose={setSelectedPackage} />
          <Closing faqOpen={faqOpen} onToggleFaq={() => setFaqOpen((value) => !value)} />
        </main>

        <Footer />
      </div>
      {selectedPackage && <PurchaseModal pack={selectedPackage} onClose={closePurchase} />}
    </div>
  )
}

export default App
