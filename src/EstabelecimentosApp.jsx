const WHATSAPP_NUMBER = '5521980468888'
const TOTAL_SHARES = 800000
const IMG = '/assets/estabelecimentos'

// Estabelecimentos e exemplos conforme GDD, documentos dos estabelecimentos e roadmap.
// Quantidade por estabelecimento, preço de lançamento e percentual distribuído ainda não foram definidos.
const PLACES = [
  { id: 'pista', name: 'Pista / Arena', short: 'Pista', phase: 'Early Access', icon: 'checkered', tone: 'red', image: `${IMG}/pista.jpg`, text: 'Gera receita com as taxas de inscrição nas corridas multiplayer. A taxa de 5% de cada inscrição entra na economia da Pista.', items: ['O criador da corrida multiplayer define a inscrição', 'O vencedor leva o total, menos a taxa de 5%', 'A taxa entra na economia dos estabelecimentos'] },
  { id: 'paint', name: 'Paint Shop', short: 'Paint Shop', phase: 'Early Access', icon: 'spray', tone: 'pink', image: `${IMG}/paint.jpg`, text: 'Vende pinturas e peças estéticas para os carros, além de cobrar taxa para aplicação e troca de itens.', items: ['Venda de pinturas', 'Venda de peças estéticas e bodykits', 'Taxa para aplicar ou trocar itens, inclusive pinturas de patrocinadores'] },
  { id: 'mecanica', name: 'Mecânica', short: 'Mecânica', phase: 'Pré-Alfa', icon: 'tools', tone: 'green', image: `${IMG}/mecanica.jpg`, text: 'Consertos, rodas, pneus e melhorias de performance. A atividade dos jogadores mantém a demanda sempre ativa.', items: ['Conserto de carros danificados', 'Venda de rodas e pneus', 'Melhorias de desempenho, algumas em AutoCash'] },
  { id: 'posto', name: 'Posto de Gasolina', short: 'Posto', phase: 'Pré-Alfa', icon: 'fuel', tone: 'yellow', image: `${IMG}/posto.jpg`, text: 'Vende combustível, lubrificantes e itens de manutenção essenciais para continuar correndo.', items: ['Combustível', 'Lubrificantes, óleos e aditivos', 'Outros itens de manutenção'] },
]

const fmt = value => Math.round(value).toLocaleString('pt-BR')
const contactUrl = place => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero entrar na pré-venda das ações dos estabelecimentos do Autorama Racing${place ? `. Tenho interesse na ${place.short}` : ''}.`)}`

function useInView(threshold = 0.3) {
  const ref = React.useRef(null)
  const [inView, setInView] = React.useState(false)
  React.useEffect(() => {
    if (!('IntersectionObserver' in window)) { setInView(true); return }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function CountUp({ value, duration = 1400 }) {
  const [ref, inView] = useInView()
  const [shown, setShown] = React.useState(0)
  const from = React.useRef(0)
  React.useEffect(() => {
    if (!inView) return
    if (reducedMotion()) { setShown(value); from.current = value; return }
    const start = performance.now()
    const origin = from.current
    let frame
    const tick = now => {
      const t = Math.min(1, (now - start) / duration)
      setShown(origin + (value - origin) * (1 - Math.pow(1 - t, 3)))
      if (t < 1) frame = requestAnimationFrame(tick)
      else from.current = value
    }
    frame = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(frame); from.current = value }
  }, [value, inView])
  return <span ref={ref}>{fmt(shown)}</span>
}

function Icon({ name, ...props }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    play: <path d="M8 5v14l11-7Z" fill="currentColor" />,
    check: <path d="m5 12 4 4L19 6" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    plus: <path d="M12 5v14M5 12h14" />,
    chart: <><path d="M4 20V14m5 6V10m5 10V12m5 8V6" /><path d="m4 9 5-4 5 3 6-5m0 0h-4m4 0v4" /></>,
    people: <><circle cx="12" cy="7" r="3" /><circle cx="5" cy="9" r="2.2" /><circle cx="19" cy="9" r="2.2" /><path d="M6.5 20v-2a5.5 5.5 0 0 1 11 0v2M1.5 19v-1a3.5 3.5 0 0 1 4-3.4m17 4.4v-1a3.5 3.5 0 0 0-4-3.4" /></>,
    cube: <><path d="m12 2 9 5v10l-9 5-9-5V7Z" /><path d="m3 7 9 5 9-5M12 12v10" /></>,
    gamepad: <><path d="M6 8h12a4 4 0 0 1 4 4l-.6 4a3 3 0 0 1-5.4 1.4L14.5 16h-5L8 17.4A3 3 0 0 1 2.6 16L2 12a4 4 0 0 1 4-4Z" /><path d="M7 11v3M5.5 12.5h3M16 11.5h.01M18 13.5h.01" /></>,
    checkered: <><path d="M3 5h18v14H3Z" /><path d="M3 9.7h18M3 14.3h18M7.5 5v14M12 5v14M16.5 5v14" /><path d="M3 5h4.5v4.7H3ZM12 5h4.5v4.7H12ZM7.5 9.7H12v4.6H7.5ZM16.5 9.7H21v4.6h-4.5ZM3 14.3h4.5V19H3ZM12 14.3h4.5V19H12Z" fill="currentColor" /></>,
    spray: <><path d="M9 10h6v11H9ZM10 10V7h4v3M12 7V4h3" /><path d="M18 3h.01M20 5h.01M18 7h.01M21 2h.01" /></>,
    tools: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4Z" /></>,
    fuel: <><path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M7 8h5" /><path d="M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3" /></>,
    store: <><path d="M3 9 5 3h14l2 6M3 9h18v12H3ZM9 21v-6h6v6" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></>,
    pie: <><path d="M12 3a9 9 0 1 0 9 9h-9Z" /><path d="M15 2.5A8 8 0 0 1 21.5 9H15Z" fill="currentColor" /></>,
    coins: <><ellipse cx="9" cy="6" rx="6" ry="2.5" /><path d="M3 6v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6M3 10v4c0 1.4 2.7 2.5 6 2.5M15 12.5c3.3 0 6 1.1 6 2.5s-2.7 2.5-6 2.5-6-1.1-6-2.5 2.7-2.5 6-2.5ZM9 15v3.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V15" /></>,
    coin: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /></>,
    diamond: <><path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M2 9h20M9 3 7.5 9 12 21l4.5-12L15 3" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.store}</svg>
}

function Cta({ place, children = 'Quero minhas ações', className = 'ex-btn ex-btn-red' }) {
  return <a className={className} href={contactUrl(place)} target="_blank" rel="noopener noreferrer">{children}<Icon name="arrow" /></a>
}

/* ---------- janelas de detalhe ---------- */

function Modal({ open, onClose, label, children }) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    const dialog = ref.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])
  return <dialog ref={ref} className="ex-modal" aria-label={label} onClose={onClose} onClick={event => { if (event.target === ref.current) onClose() }}>
    <div className="ex-modal-body">
      <button type="button" className="ex-modal-close" onClick={onClose} aria-label="Fechar"><Icon name="close" /></button>
      {open && children}
    </div>
  </dialog>
}

function PistaDemo() {
  return <div className="ex-demo">
    <p className="ex-demo-title">Corrida com 10 pilotos · inscrição de 1.000 AG</p>
    <div className="ex-chips" aria-hidden="true">{Array.from({ length: 10 }, (_, i) => <span key={i} style={{ '--i': i }}>1.000</span>)}</div>
    <div className="ex-split" aria-hidden="true"><span className="is-prize">9.500 AG · prêmio do vencedor</span><span className="is-fee">5%</span></div>
    <p className="ex-demo-result"><strong>500 AG</strong> de taxa entram na economia dos estabelecimentos.</p>
  </div>
}

function PaintDemo() {
  return <div className="ex-demo">
    <p className="ex-demo-title">Troca de pintura de patrocinador · 200 AG</p>
    <p className="ex-demo-equation">20.000 pilotos × 2 serviços × 200 AG =</p>
    <p className="ex-demo-result"><strong><CountUp value={8000000} /> AG</strong> de movimentação, além da venda das pinturas.</p>
  </div>
}

const WEAR = ['Correr', 'Desgaste', 'Mecânica', 'Nova corrida']
function MecanicaDemo() {
  const [step, setStep] = React.useState(0)
  React.useEffect(() => {
    if (reducedMotion()) return
    const timer = setInterval(() => setStep(value => (value + 1) % WEAR.length), 1100)
    return () => clearInterval(timer)
  }, [])
  const condition = [90, 35, 35, 100][step]
  return <div className="ex-demo">
    <p className="ex-demo-title">O ciclo de manutenção</p>
    <ol className="ex-wear">{WEAR.map((label, i) => <li key={label} className={i === step ? 'is-active' : ''}>{label}</li>)}</ol>
    <div className="ex-meter" aria-hidden="true"><span>Condição do carro</span><div><i style={{ width: `${condition}%` }} className={condition < 50 ? 'is-low' : ''} /></div></div>
    <p className="ex-demo-result">Quanto mais os carros correm, <strong>maior a demanda</strong> pela Mecânica.</p>
  </div>
}

function PostoDemo() {
  const [lap, setLap] = React.useState(0)
  React.useEffect(() => {
    if (reducedMotion()) return
    const timer = setInterval(() => setLap(value => (value >= 24 ? 0 : value + 1)), 180)
    return () => clearInterval(timer)
  }, [])
  const refuel = lap > 20
  const fuel = refuel ? 100 : 100 - lap * 5
  return <div className="ex-demo">
    <p className="ex-demo-title">Combustível · 200 AG para cerca de 20 corridas</p>
    <div className="ex-fuel" aria-hidden="true"><div className="ex-fuel-bar"><i style={{ height: `${fuel}%` }} className={fuel < 25 ? 'is-low' : ''} /></div><div><span>Corrida</span><strong>{refuel ? 20 : lap}<small>/20</small></strong><em className={refuel ? 'is-on' : ''}>Abastecer · 200 AG</em></div></div>
    <p className="ex-demo-result">Mais corridas, <strong>mais abastecimentos</strong> no Posto.</p>
  </div>
}

const DEMOS = { pista: PistaDemo, paint: PaintDemo, mecanica: MecanicaDemo, posto: PostoDemo }
function PlaceDetail({ place }) {
  const Demo = DEMOS[place.id]
  return <div className={`ex-detail tone-${place.tone}`}>
    <figure><img src={place.image} alt="" /><span className="ex-phase">{place.phase === 'Early Access' ? 'Previsto no Early Access' : 'Previsto na Pré-Alfa'}</span></figure>
    <div className="ex-detail-copy">
      <h3><Icon name={place.icon} />{place.name}</h3>
      <p className="ex-detail-lead">De onde vem a atividade:</p>
      <ul>{place.items.map(item => <li key={item}><Icon name="check" />{item}</li>)}</ul>
      <Demo />
      <p className="ex-fine">Valores de exemplo dos documentos de design do jogo. Podem mudar até o lançamento.</p>
      <Cta place={place}>Quero ações da {place.short}</Cta>
    </div>
  </div>
}

function Simulator() {
  const [mine, setMine] = React.useState(1000)
  const [total, setTotal] = React.useState(100000)
  const [pool, setPool] = React.useState(500000)
  const share = mine / total
  const result = pool * share
  return <div className="ex-sim">
    <p className="ex-kicker">Simulador</p>
    <h3 className="ex-h3">Sua parte é proporcional</h3>
    <div className="ex-sim-grid">
      <div className="ex-sim-controls">
        <label><span>Suas ações <b>{fmt(mine)}</b></span><input type="range" min="100" max="20000" step="100" value={mine} onChange={event => setMine(Number(event.target.value))} /></label>
        <label><span>Ações do estabelecimento <b>{fmt(total)}</b></span><input type="range" min="50000" max="400000" step="10000" value={total} onChange={event => setTotal(Math.max(Number(event.target.value), mine))} /></label>
        <label><span>AutoGold do pool no mês <b>{fmt(pool)} AG</b></span><input type="range" min="100000" max="10000000" step="100000" value={pool} onChange={event => setPool(Number(event.target.value))} /></label>
        <p className="ex-sim-formula">{fmt(pool)} AG × ({fmt(mine)} ÷ {fmt(total)}) = <strong>{fmt(result)} AG</strong></p>
      </div>
      <div className="ex-sim-out">
        <div className="ex-donut" style={{ '--angle': `${Math.max(share * 360, 1.5)}deg` }} aria-hidden="true"><div><strong>{(share * 100).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%</strong><span>das ações</span></div></div>
        <p><span>Sua parte no mês</span><strong><CountUp value={result} duration={500} /> AG</strong></p>
      </div>
    </div>
    <p className="ex-fine">Números hipotéticos. O valor muda todo mês e pode ser zero. O percentual destinado aos detentores será publicado antes da pré-venda.</p>
  </div>
}

/* ---------- página ---------- */

const NAV = [['O jogo', '/'], ['Como funciona', '#como-funciona'], ['Estabelecimentos', '#estabelecimentos'], ['Dividendos', '#dividendos'], ['FAQ', '#faq']]
function Header() {
  const menu = React.useRef(null)
  return <header className="ex-header"><div className="ex-shell ex-header-inner">
    <a href="/" className="ex-brand" aria-label="Autorama Racing — página inicial"><img src="/assets/logos/autorama-racing-logo.svg" alt="" /></a>
    <nav className="ex-nav" aria-label="Principal">{NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <Cta className="ex-btn ex-btn-red ex-btn-sm ex-header-cta" />
    <details ref={menu} className="ex-menu"><summary aria-label="Menu"><span /><span /><span /></summary><nav aria-label="Menu mobile">{NAV.map(([label, href]) => <a key={href} href={href} onClick={() => { menu.current.open = false }}>{label}</a>)}</nav></details>
  </div></header>
}

const HERO_FEATURES = [['chart', 'Receba', 'dividendos mensais'], ['people', 'Participe de um ecossistema', 'em crescimento'], ['cube', 'Itens virtuais', 'comerciáveis no marketplace'], ['gamepad', 'Faça parte do futuro', 'dos games']]
function Hero() {
  return <section className="ex-hero">
    <div className="ex-hero-bg" aria-hidden="true"><img src={`${IMG}/hero.jpg`} alt="" fetchPriority="high" /><span className="ex-hero-shade" /><span className="ex-speed" /></div>
    <div className="ex-shell ex-hero-content">
      <h1 className="ex-hero-title"><span>Seja</span><span className="is-big">Dono</span><span>do mundo</span><span>do <em>Autorama</em></span></h1>
      <p className="ex-hero-lead">Tenha ações dos estabelecimentos comerciais do jogo e receba dividendos em AutoGold gerados pela atividade real dos jogadores.</p>
      <div className="ex-hero-actions"><Cta /><a className="ex-btn ex-btn-ghost" href="#como-funciona">Como funciona<Icon name="play" /></a></div>
    </div>
    <ul className="ex-shell ex-hero-features">{HERO_FEATURES.map(([icon, a, b], i) => <li key={a} style={{ '--i': i }}><Icon name={icon} /><span>{a}<b>{b}</b></span></li>)}</ul>
  </section>
}

const PINS = [['Pista', 'red', '23%', '30%'], ['Paint Shop', 'pink', '46%', '9%'], ['Mecânica', 'green', '82%', '24%'], ['Posto', 'yellow', '57%', '55%']]
function Ecosystem() {
  return <section id="como-funciona" className="ex-eco">
    <figure className="ex-eco-media" aria-hidden="true"><img src={`${IMG}/aerial.jpg`} alt="" loading="lazy" /><span />{PINS.map(([label, tone, x, y], i) => <b key={label} className={`ex-pin tone-${tone}`} style={{ left: x, top: y, '--i': i }}>{label}</b>)}</figure>
    <div className="ex-shell ex-eco-copy" data-reveal>
      <p className="ex-kicker">Economia real dentro do jogo</p>
      <h2 className="ex-h2">Quatro estabelecimentos<br />um só ecossistema</h2>
      <p className="ex-text">Cada corrida, cada personalização, cada reparo e cada abastecimento movimenta a economia do Autorama Racing. Parte dessa receita é distribuída aos detentores de ações de forma proporcional.</p>
      <a className="ex-btn ex-btn-outline" href="#estabelecimentos">Conheça os estabelecimentos</a>
    </div>
  </section>
}

function Places({ onOpen }) {
  return <section id="estabelecimentos" className="ex-section ex-places"><div className="ex-shell ex-card-grid" data-reveal>
    {PLACES.map((place, i) => <article key={place.id} className={`ex-place tone-${place.tone}`} style={{ '--i': i }}>
      <div className="ex-place-media"><img src={place.image} alt={`Ilustração: ${place.name}`} loading="lazy" width="600" height="450" /><span className="ex-phase">{place.phase}</span></div>
      <div className="ex-place-body">
        <h3><Icon name={place.icon} />{place.name}</h3>
        <p>{place.text}</p>
        <button type="button" className="ex-btn ex-btn-card" onClick={() => onOpen(place)}>Saiba mais</button>
      </div>
    </article>)}
  </div></section>
}

const FLOW = [['people', 'Jogadores', 'gastam AutoGold'], ['store', 'Estabelecimentos', 'geram receita'], ['pie', 'Parte é destinada', 'aos detentores'], ['coins', 'Dividendos mensais', 'em AutoGold']]
function Dividends({ onSim }) {
  return <section id="dividendos" className="ex-section"><div className="ex-shell ex-split-row" data-reveal>
    <div className="ex-split-copy">
      <h2 className="ex-h2">Como funcionam<br />os dividendos</h2>
      <p className="ex-text">Os detentores recebem uma parte da receita gerada pelos quatro estabelecimentos comerciais, de forma proporcional à quantidade de ações que possuem.</p>
      <button type="button" className="ex-btn ex-btn-outline" onClick={onSim}>Ver exemplo detalhado</button>
    </div>
    <ol className="ex-flow">
      <span className="ex-flow-coin" aria-hidden="true" />
      {FLOW.map(([icon, a, b], i) => <li key={a} style={{ '--i': i }} className={i === FLOW.length - 1 ? 'is-gold' : ''}><Icon name={icon} /><span>{a}<br />{b}</span>{i < FLOW.length - 1 && <Icon name="arrow" className="ex-flow-arrow" />}</li>)}
    </ol>
  </div></section>
}

const WHY = [['chart', 'green', 'Dividendos em AutoGold', 'Baseados na atividade real dos jogadores'], ['diamond', 'blue', 'Item digital escasso', 'Com oferta limitada e negociável no marketplace'], ['people', 'blue', 'Ecossistema em crescimento', 'Quanto mais jogadores, maior a atividade econômica'], ['gamepad', 'blue', 'Dois benefícios em um', 'Dividendos em AutoGold e negociação futura no marketplace']]
function Why() {
  return <section className="ex-section ex-why"><div className="ex-shell" data-reveal>
    <h2 className="ex-h2">Por que participar</h2>
    <ul className="ex-why-grid">{WHY.map(([icon, tone, title, text], i) => <li key={title} className={`tone-${tone}`} style={{ '--i': i }}><Icon name={icon} /><strong>{title}</strong><span>{text}</span></li>)}</ul>
  </div></section>
}

function Example({ onSim }) {
  const steps = [
    { icon: 'checkered', value: 10000, suffix: '', label: 'Corridas no mês' },
    { icon: 'coin', value: 1000, suffix: ' AG', label: 'Inscrição média', tone: 'gold' },
    { icon: 'pie', value: 500000, suffix: ' AG', label: 'Taxa (5%) para o pool' },
    { icon: 'coins', value: 5000, suffix: ' AG', label: 'Sua parte', note: '(com 1.000 ações)', tone: 'gold', final: true },
  ]
  return <section className="ex-section ex-example"><div className="ex-shell ex-split-row" data-reveal>
    <div className="ex-split-copy">
      <h2 className="ex-h2">Exemplo prático</h2>
      <p className="ex-text">Veja como a atividade dos jogadores gera dividendos em AutoGold.</p>
      <button type="button" className="ex-btn ex-btn-outline" onClick={onSim}>Ver mais cenários</button>
    </div>
    <div>
      <ol className="ex-steps">{steps.map((step, i) => <li key={step.label} className={step.final ? 'is-final' : ''} style={{ '--i': i }}>
        <Icon name={step.icon} className={step.tone === 'gold' ? 'is-gold' : ''} />
        {step.final && <small>{step.label}</small>}
        <strong><CountUp value={step.value} />{step.suffix}</strong>
        {step.final ? <em>{step.note}</em> : <small>{step.label}</small>}
        {i < steps.length - 1 && <Icon name="arrow" className="ex-steps-arrow" />}
      </li>)}</ol>
      <p className="ex-fine">Ilustrativo: supõe 100.000 ações da Pista e toda a taxa destinada ao pool. As regras oficiais serão publicadas antes da pré-venda.</p>
    </div>
  </div></section>
}

const STATS = [['coins', <><CountUp value={TOTAL_SHARES} /></>, 'Ações no total'], ['people', '4', 'Estabelecimentos'], ['pie', null, 'Dividendos mensais'], ['chart', null, 'Negociação no marketplace']]
function Market() {
  return <section className="ex-market">
    <div className="ex-market-bg" aria-hidden="true"><img src={`${IMG}/banner.jpg`} alt="" loading="lazy" /><span /></div>
    <div className="ex-shell ex-market-copy" data-reveal>
      <span className="ex-tag">Ações limitadas</span>
      <h2 className="ex-h2 is-xl">Faça parte<br />desse mercado</h2>
      <p className="ex-text">São 800.000 ações no total. Entre na pré-venda e comece a receber dividendos em AutoGold conforme o jogo cresce.</p>
      <Cta />
    </div>
    <ul className="ex-shell ex-stats">{STATS.map(([icon, big, label]) => <li key={label}><Icon name={icon} />{big ? <span><strong>{big}</strong>{label}</span> : <span className="is-plain">{label.split(' ').slice(0, 1)}<br />{label.split(' ').slice(1).join(' ')}</span>}</li>)}</ul>
  </section>
}

const FAQ = [
  ['O que são as ações dos estabelecimentos?', 'São itens virtuais colecionáveis ligados a um estabelecimento do jogo: Pista, Paint Shop, Mecânica ou Posto. Quem tem ações recebe uma parte proporcional do AutoGold destinado aos detentores daquele estabelecimento.'],
  ['Posso vender minhas ações?', 'O marketplace de ações está previsto para a Pré-Alfa. Quando lançado, o preço será combinado entre jogadores, com taxa de 5%. Não há garantia de comprador nem de preço.'],
  ['Como são calculados os dividendos?', 'Todo mês, a parte da receita do estabelecimento destinada aos detentores forma um pool. Cada detentor recebe na proporção das ações que possui: suas ações divididas pelo total do estabelecimento.'],
  ['Quantas ações existem?', `${fmt(TOTAL_SHARES)} no total, somando os quatro estabelecimentos. A quantidade de cada um e o preço de lançamento serão publicados antes da pré-venda.`],
  ['As ações são um investimento real?', 'Não. São itens virtuais do jogo, não valores mobiliários nem participação na Horse Power Studio. Os dividendos são pagos em AutoGold, podem subir, cair ou ser zero, e não há garantia de valorização.'],
  ['Quando recebo os dividendos?', 'A distribuição é mensal, em AutoGold, na conta do jogo. A data e o percentual destinado aos detentores serão publicados antes da abertura da pré-venda.'],
  ['Posso sacar os dividendos?', 'Não. AutoGold é a moeda do jogo. Ele serve para itens, serviços e produtos de parceiros e não pode ser sacado nem convertido em dinheiro.'],
  ['Quais estabelecimentos chegam primeiro?', 'O roadmap do Early Access inclui a Pista e o Paint Shop. Mecânica, Posto e marketplace de ações estão previstos para a Pré-Alfa.'],
  ['De onde vem o AutoGold dos dividendos?', 'Da atividade dos jogadores nos estabelecimentos: inscrições, serviços, peças e combustível. É AutoGold que já circula no jogo, redistribuído de forma proporcional.'],
  ['Como entro na pré-venda?', 'Fale com o time pelo WhatsApp e entre na lista. Quem estiver na lista recebe primeiro as condições de lançamento.'],
]
function Faq() {
  const [all, setAll] = React.useState(false)
  const items = all ? FAQ : FAQ.slice(0, 6)
  return <section id="faq" className="ex-section ex-faq"><div className="ex-shell" data-reveal>
    <div className="ex-faq-head"><div><p className="ex-kicker is-muted">Dúvidas?</p><h2 className="ex-h2 is-plain">Perguntas Frequentes</h2><p className="ex-text is-small">Tire suas dúvidas sobre o sistema de ações.</p></div><button type="button" className="ex-btn ex-btn-outline" onClick={() => setAll(value => !value)} aria-expanded={all}>{all ? 'Ver menos' : 'Ver FAQ completo'}</button></div>
    <div className="ex-faq-grid">{items.map(([question, answer]) => <details key={question}><summary>{question}<Icon name="plus" /></summary><p>{answer}</p></details>)}</div>
  </div></section>
}

function Closing() {
  return <section className="ex-closing">
    <div className="ex-closing-bg" aria-hidden="true"><img src={`${IMG}/closing.jpg`} alt="" loading="lazy" /><img className="ex-closing-logo" src="/assets/logos/autorama-racing-logo.svg" alt="" /><span /></div>
    <div className="ex-shell ex-closing-copy" data-reveal>
      <h2 className="ex-h2">Faça parte do futuro<br />do Autorama Racing</h2>
      <p className="ex-text">Entre para o ecossistema econômico do jogo e receba dividendos em AutoGold gerados pela paixão dos jogadores.</p>
      <Cta>Quero minhas ações agora</Cta>
    </div>
  </section>
}

function EstabelecimentosApp() {
  const [place, setPlace] = React.useState(null)
  const [sim, setSim] = React.useState(false)
  const root = React.useRef(null)
  React.useEffect(() => {
    const page = root.current
    if (!('IntersectionObserver' in window)) {
      page.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.12 })
    page.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return <div ref={root} className="ex-page">
    <Header />
    <main>
      <Hero />
      <Ecosystem />
      <Places onOpen={setPlace} />
      <Dividends onSim={() => setSim(true)} />
      <Why />
      <Example onSim={() => setSim(true)} />
      <Market />
      <Faq />
      <Closing />
    </main>
    <footer className="ex-footer"><div className="ex-shell ex-footer-inner"><img src="/assets/logos/autorama-racing-logo.svg" alt="Autorama Racing" /><p>Ações são itens virtuais do jogo. Não são valores mobiliários nem participação na Horse Power Studio. Dividendos são pagos em AutoGold, que não pode ser sacado nem convertido em dinheiro.</p><a href="/">Pacotes de fundador ↗</a></div></footer>
    <div className="ex-sticky"><span><strong>Pré-venda das ações</strong>800.000 no total</span><Cta className="ex-btn ex-btn-red ex-btn-sm">Quero ações</Cta></div>
    <Modal open={!!place} onClose={() => setPlace(null)} label={place ? place.name : 'Estabelecimento'}>{place && <PlaceDetail place={place} />}</Modal>
    <Modal open={sim} onClose={() => setSim(false)} label="Simulador de dividendos"><Simulator /></Modal>
  </div>
}

export default EstabelecimentosApp
