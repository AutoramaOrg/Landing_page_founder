import {
  checkoutEnabled,
  createCheckout,
  getPaymentStatus,
  readPaymentResult,
} from './checkout.js'

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
    id: 'bronze',
    name: 'Bronze',
    tone: 'bronze',
    price: 'R$ 49',
    tagline: 'Sua entrada oficial no grid fundador.',
    featuredCar: {
      name: 'Premium',
      rarity: 'Premium',
      image: '/founder-premium.png',
      imageAlt: 'Carro Founder Premium com pintura vermelha, preta e branca',
    },
    includedCars: ['Premium'],
    perks: [
      'Acesso antecipado ao jogo',
      'Itens únicos de fundador',
      'Badge fundador Bronze',
    ],
    button: 'Escolher Bronze',
  },
  {
    id: 'prata',
    name: 'Prata',
    tone: 'silver',
    price: 'R$ 89',
    tagline: 'Mais exclusividade para ampliar sua coleção.',
    featuredCar: {
      name: 'Raro',
      rarity: 'Raro',
      image: '/founder-raro.png',
      imageAlt: 'Carro raro preto com detalhes azuis e aerofólio',
    },
    includedCars: ['Premium', 'Raro'],
    perks: [
      'Acesso antecipado ao jogo',
      'Itens únicos de fundador',
      'Skin neon exclusiva',
    ],
    button: 'Escolher Prata',
  },
  {
    id: 'ouro',
    name: 'Ouro',
    tone: 'gold',
    price: 'R$ 149',
    tagline: 'A coleção completa dos carros de fundador.',
    popular: true,
    featuredCar: {
      name: 'Épico',
      rarity: 'Épico',
      image: '/founder-epico.png',
      imageAlt: 'Carro épico esportivo rosa com aerofólio',
    },
    includedCars: ['Premium', 'Raro', 'Épico'],
    perks: [
      'Acesso antecipado ao jogo',
      'Itens únicos de fundador',
      'Skin neon exclusiva',
      'Nome no mural dos pioneiros',
    ],
    button: 'Escolher Ouro',
  },
]

const universe = [
  {
    title: 'Novos cenários',
    text: 'Ambientes variados para explorar e competir.',
    image: '/universo-rio-de-janeiro.jpg',
    imageAlt: 'Carros esportivos em uma estrada no Rio de Janeiro ao pôr do sol',
    position: 'center center',
  },
  {
    title: 'Mundo em movimento',
    text: 'Veículos e ambientes com novas possibilidades.',
    image: '/universo-pier-estacionamento.jpg',
    imageAlt: 'Diversos carros e veículos reunidos em uma movimentada área portuária',
    position: 'center 62%',
  },
  {
    title: 'Evolução dos carros',
    text: 'Recursos para cuidar e melhorar sua máquina.',
    image: '/universo-mecanica.jpg',
    imageAlt: 'Oficina completa com carros, motos, ferramentas e mecânicos',
    position: 'center center',
  },
  {
    title: 'Mais personalização',
    text: 'Peças e escolhas para criar carros únicos.',
    image: '/universo-montando-carro.jpg',
    imageAlt: 'Carro esportivo sendo montado e personalizado peça por peça',
    position: 'center center',
  },
  {
    title: 'Eventos e comunidade',
    text: 'Momentos para competir, encontrar e celebrar.',
    image: '/universo-comemoracao.jpg',
    imageAlt: 'Pilotos celebrando juntos no paddock após uma corrida',
    position: 'center center',
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
        <a href="#top" className="group flex shrink-0 items-center" aria-label="Autorama Racing">
          <img
            src="/autorama_white.png"
            alt=""
            className="h-8 w-auto transition duration-300 group-hover:opacity-90 sm:h-10"
          />
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

function PackageCard({ pack, onChoose }) {
  return (
    <article
      className={`founder-card ${pack.tone === 'gold' ? 'gold-card' : ''}`}
      data-tone={pack.tone}
    >
      <div className="package-top">
        <div className="package-tier">
          <span className={`tier-mark ${pack.tone}`} />
          <h3>{pack.name}</h3>
        </div>
        {pack.popular && <span className="popular-ribbon">Mais escolhido</span>}
        <p>{pack.tagline}</p>
      </div>

      <figure className="featured-car">
        <div className="featured-car-media">
          <img
            src={pack.featuredCar.image}
            alt={pack.featuredCar.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>
          <span>Carro em destaque</span>
          <strong>{pack.featuredCar.name}</strong>
          <small>{pack.featuredCar.rarity}</small>
        </figcaption>
      </figure>

      <div className="included-cars">
        <span>Este pacote inclui</span>
        <strong>{pack.includedCars.join(' · ')}</strong>
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

      <button
        type="button"
        onClick={() => onChoose(pack)}
        disabled={!checkoutEnabled}
        className={`package-button ${pack.tone}`}
      >
        {checkoutEnabled ? pack.button : 'Disponível em breve'}
      </button>
    </article>
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
              className="glow-button purchase-modal-submit"
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
  const items = pack ? [...pack.includedCars.map((car) => `Carro ${car}`), ...pack.perks] : []

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
                <a href={details.receipt_url} target="_blank" rel="noreferrer" className="confirmation-receipt">
                  Ver comprovante
                </a>
              )}
              <button type="button" onClick={closeConfirmation} className="glow-button confirmation-close">
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
              className="ghost-button confirmation-retry"
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
            <button type="button" onClick={closeConfirmation} className="ghost-button confirmation-retry">
              Fechar janela
            </button>
          </>
        )}
      </section>
    </main>
  )
}

function UniverseThumbnail({ item }) {
  return (
    <figure className="universe-thumbnail">
      <div className="universe-thumbnail-media">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: item.position }}
        />
      </div>
      <figcaption>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </figcaption>
    </figure>
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
  const [paymentResult] = React.useState(readPaymentResult)
  const [selectedPackage, setSelectedPackage] = React.useState(null)
  const closePurchase = React.useCallback(() => setSelectedPackage(null), [])

  if (paymentResult) return <PaymentConfirmation result={paymentResult} />

  return (
    <div id="top" className="min-h-screen bg-asphalt text-white">
      <div className="overflow-hidden" inert={selectedPackage ? '' : undefined}>
        <Header />

        <main>
        <section className="hero-section">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/hero-celebration.png"
            aria-hidden="true"
          >
            <source src="/hero-carro.mp4" type="video/mp4" />
          </video>
          <div className="hero-backdrop" />
          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
            <div className="max-w-2xl">
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
          </div>

          <div id="beneficios" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <p className="packages-intro">
            Quanto maior o pacote, maior a garagem: Prata inclui Premium + Raro e Ouro reúne os três carros.
          </p>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {packages.map((pack) => (
              <PackageCard key={pack.name} pack={pack} onChoose={setSelectedPackage} />
            ))}
          </div>
        </section>

        <section id="universo" className="section-shell pt-20">
          <div className="section-heading">
            <span className="signal-bars" />
            <h2>Um universo feito para corredores</h2>
            <span className="signal-bars right" />
          </div>

          <div className="universe-gallery">
            {universe.map((item) => (
              <UniverseThumbnail key={item.title} item={item} />
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
            <a href="#top" className="inline-flex items-center" aria-label="Autorama Racing">
              <img
                src="/autorama_white.png"
                alt=""
                className="h-9 w-auto sm:h-11"
              />
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
      {selectedPackage && <PurchaseModal pack={selectedPackage} onClose={closePurchase} />}
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
