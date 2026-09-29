const WHATSAPP_NUMBER = '5521980468888'
const TOTAL_SHARES = 800000

// Estabelecimentos e exemplos conforme GDD, documentos dos estabelecimentos e roadmap.
// Quantidade por estabelecimento, preço de lançamento e percentual distribuído ainda não foram definidos.
const PLACES = [
  { id: 'pista', name: 'Pista', phase: 'Early Access', icon: 'flag', image: '/assets/gameplay/autorama-gameplay-20260917.webp', tagline: 'Onde as corridas acontecem.', items: ['O criador da corrida multiplayer define a inscrição', 'O vencedor leva o total, menos a taxa de 5%', 'A taxa entra na economia dos estabelecimentos'] },
  { id: 'paint', name: 'Paint Shop', phase: 'Early Access', icon: 'paint', image: '/universo-montando-carro.jpg', tagline: 'Onde os carros ganham identidade.', items: ['Venda de pinturas', 'Venda de peças estéticas e bodykits', 'Taxa para aplicar ou trocar itens, inclusive pinturas de patrocinadores'] },
  { id: 'mecanica', name: 'Mecânica', phase: 'Pré-Alfa', icon: 'wrench', image: '/universo-mecanica.jpg', tagline: 'Onde os carros voltam para a pista.', items: ['Conserto de carros danificados', 'Venda de rodas e pneus', 'Melhorias de desempenho, algumas em AutoCash'] },
  { id: 'posto', name: 'Posto', phase: 'Pré-Alfa', icon: 'fuel', image: '/universo-posto.jpg', tagline: 'Onde cada corrida começa.', items: ['Combustível', 'Lubrificantes, óleos e aditivos', 'Outros itens de manutenção'] },
]

const fmt = value => Math.round(value).toLocaleString('pt-BR')
const contactUrl = place => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero entrar na lista da pré-venda das ações dos estabelecimentos do Autorama Racing${place ? `. Tenho interesse na ${place.name}` : ''}.`)}`

const Motion = React.createContext(false)
const usePaused = () => React.useContext(Motion)

function useInView(options = { threshold: 0.3 }) {
  const ref = React.useRef(null)
  const [inView, setInView] = React.useState(false)
  React.useEffect(() => {
    if (!('IntersectionObserver' in window)) { setInView(true); return }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, inView]
}

function CountUp({ value, duration = 1400 }) {
  const paused = usePaused()
  const [ref, inView] = useInView()
  const [shown, setShown] = React.useState(paused ? value : 0)
  const from = React.useRef(0)
  React.useEffect(() => {
    if (!inView) return
    if (paused) { setShown(value); from.current = value; return }
    const start = performance.now()
    const origin = from.current
    let frame
    const tick = now => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setShown(origin + (value - origin) * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
      else from.current = value
    }
    frame = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(frame); from.current = value }
  }, [value, inView, paused])
  return <span ref={ref}>{fmt(shown)}</span>
}

function Icon({ name, ...props }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    x: <path d="M6 6l12 12M18 6 6 18" />,
    paint: <path d="m14 3 7 7-9 9-7-7zM5 12 3 14v7h7l2-2M14 7l3 3" />,
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4Z" />,
    fuel: <><path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M7 8h5" /><path d="M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3" /></>,
    flag: <path d="M5 21V3m0 1c5-4 9 4 14 0v10c-5 4-9-4-14 0" />,
    people: <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" /></>,
    coin: <><circle cx="12" cy="12" r="9" /><path d="M9 15l3-7 3 7m-5-2h4" /></>,
    pool: <><path d="M3 12h18M5 12v7h14v-7M8 12V8a4 4 0 0 1 8 0v4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    store: <path d="M3 9 5 3h14l2 6M3 9h18v12H3ZM9 21v-6h6v6" />,
    swap: <path d="M4 8h14l-4-4m6 12H6l4 4" />,
    chat: <path d="M21 11a9 9 0 0 1-9 9H4l-2 2v-11a9 9 0 0 1 19 0Z" />,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.flag}</svg>
}

function Contact({ place, children = 'Entrar na pré-venda', className = 'btn btn-primary btn-cta' }) {
  return <a className={className} href={contactUrl(place)} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true">»</span></a>
}

function Heading({ kicker, title, children }) {
  return <div className="est-heading"><div><p className="kicker">{kicker}</p><h2>{title}</h2></div>{children && <p>{children}</p>}</div>
}

const NAV = [['Como funciona', '#como-funciona'], ['Estabelecimentos', '#estabelecimentos'], ['Ciclo', '#ciclo'], ['Dividendos', '#dividendos'], ['Marketplace', '#marketplace'], ['Dúvidas', '#duvidas']]
function Header() {
  const menu = React.useRef(null)
  return <header className="site-header est-header"><div className="header-inner">
    <a href="/" className="brand" aria-label="Autorama Racing — página inicial"><img src="/assets/logos/autorama-racing-logo.svg" alt="" /></a>
    <nav className="est-nav" aria-label="Principal">{NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <Contact className="btn btn-primary btn-sm est-header-cta" />
    <details ref={menu} className="est-menu"><summary>Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Menu mobile">{NAV.map(([label, href]) => <a key={href} href={href} onClick={() => { menu.current.open = false }}>{label}</a>)}<a href="/">Pacotes de fundador</a></nav></details>
  </div></header>
}

/* ---------- hero: AutoGold fluindo dos estabelecimentos para o pool ---------- */

const NODES = [
  { id: 'pista', label: 'Pista', icon: 'flag', x: 260, y: 72 },
  { id: 'paint', label: 'Paint Shop', icon: 'paint', x: 448, y: 260 },
  { id: 'mecanica', label: 'Mecânica', icon: 'wrench', x: 260, y: 448 },
  { id: 'posto', label: 'Posto', icon: 'fuel', x: 72, y: 260 },
]
function EconomyOrbit() {
  const paused = usePaused()
  const svg = React.useRef(null)
  React.useEffect(() => {
    const node = svg.current
    if (!node || !node.pauseAnimations) return
    if (paused) node.pauseAnimations()
    else node.unpauseAnimations()
  }, [paused])
  const toCenter = node => `M${node.x} ${node.y}L260 260`
  return <figure className="est-orbit" aria-label="Ilustração: o AutoGold gasto na Pista, no Paint Shop, na Mecânica e no Posto forma um pool dividido entre os detentores de ações">
    <svg ref={svg} viewBox="0 0 520 540" role="presentation">
      <defs>
        <radialGradient id="est-coin" cx="35%" cy="35%" r="70%"><stop offset="0" stopColor="#fff6c9" /><stop offset=".45" stopColor="#efc04d" /><stop offset="1" stopColor="#9a6a12" /></radialGradient>
        <radialGradient id="est-pool" cx="50%" cy="50%" r="60%"><stop offset="0" stopColor="rgba(239,192,77,.45)" /><stop offset="1" stopColor="rgba(239,192,77,0)" /></radialGradient>
      </defs>
      <g className="est-orbit-ring"><circle cx="260" cy="260" r="188" /></g>
      <circle className="est-orbit-ring-soft" cx="260" cy="260" r="140" />
      {NODES.map(node => <path key={node.id} className="est-orbit-link" d={toCenter(node)} />)}
      <path className="est-orbit-link is-out" d="M260 260L430 470" />
      <circle cx="260" cy="260" r="92" fill="url(#est-pool)" className="est-orbit-glow" />
      {NODES.map((node, i) => [0, 1].map(k => <circle key={`${node.id}-${k}`} r="8" fill="url(#est-coin)" className="est-coin">
        <animateMotion dur="2.4s" begin={`-${i * 0.6 + k * 1.2}s`} repeatCount="indefinite" path={toCenter(node)} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
      </circle>))}
      {[0, 1, 2].map(k => <circle key={`out-${k}`} r="9" fill="url(#est-coin)" className="est-coin">
        <animateMotion dur="2.1s" begin={`-${k * 0.7}s`} repeatCount="indefinite" path="M260 260L430 470" />
      </circle>)}
      <g className="est-orbit-pool">
        <circle cx="260" cy="260" r="58" />
        <text x="260" y="252" textAnchor="middle" className="est-orbit-pool-title">POOL</text>
        <text x="260" y="272" textAnchor="middle" className="est-orbit-pool-sub">dos detentores</text>
      </g>
      {NODES.map((node, i) => <g key={node.id} className="est-orbit-node" style={{ animationDelay: `${i * 0.6}s` }}>
        <circle cx={node.x} cy={node.y} r="42" />
        <svg x={node.x - 13} y={node.y - 22} width="26" height="26" viewBox="0 0 24 24"><Icon name={node.icon} /></svg>
        <text x={node.x} y={node.y + 22} textAnchor="middle">{node.label}</text>
      </g>)}
      <g className="est-orbit-you">
        <rect x="378" y="468" width="124" height="48" rx="8" />
        <text x="440" y="489" textAnchor="middle" className="est-orbit-you-title">VOCÊ</text>
        <text x="440" y="506" textAnchor="middle" className="est-orbit-you-sub">recebe em AutoGold</text>
      </g>
    </svg>
  </figure>
}

function Hero({ paused, toggle }) {
  return <section className="est-hero">
    <div className="est-hero-bg" aria-hidden="true"><span className="est-hero-grid-lines" /></div>
    <div className="est-shell est-hero-layout">
      <div className="est-hero-copy">
        <p className="kicker">Ações dos estabelecimentos · Pré-venda</p>
        <h1 className="est-hero-title"><span>Seja dono</span><span>da economia</span><span className="accent">da pista.</span></h1>
        <p className="est-hero-lead">Ações são itens virtuais ligados aos estabelecimentos do Autorama. Quando os pilotos correm, abastecem, consertam e customizam, parte do AutoGold movimentado é dividida entre quem tem ações daquele estabelecimento.</p>
        <div className="est-hero-actions"><Contact /><a href="#como-funciona" className="text-link">Entenda em 1 minuto <span aria-hidden="true">›</span></a></div>
      </div>
      <EconomyOrbit />
    </div>
    <div className="est-shell est-hero-bottom">
      <ul className="est-strip" aria-label="Destaques">
        <li><strong><CountUp value={TOTAL_SHARES} /></strong><span>ações no total, oferta limitada</span></li>
        <li><strong>4</strong><span>estabelecimentos no jogo</span></li>
        <li><strong>AG</strong><span>dividendos pagos em AutoGold</span></li>
      </ul>
      <button type="button" className="est-motion-toggle" aria-pressed={paused} onClick={toggle}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>{paused ? 'Retomar animações' : 'Pausar animações'}</button>
    </div>
  </section>
}

/* ---------- como funciona ---------- */

const FLOW = [
  ['people', 'Os pilotos jogam', 'Correm, abastecem, consertam e customizam seus carros.'],
  ['store', 'O estabelecimento movimenta', 'Inscrições, serviços e vendas geram AutoGold em cada casa.'],
  ['pool', 'Uma parte forma o pool', 'A parcela destinada aos detentores é separada todo mês.'],
  ['coin', 'Você recebe a sua parte', 'Proporcional às ações que você tem, em AutoGold.'],
]
function Flow() {
  return <section id="como-funciona" className="est-section"><div className="est-shell" data-reveal>
    <Heading kicker="01 / Como funciona" title={<>O AutoGold vem<br /><em>de quem joga.</em></>}>Não é a Horse Power pagando rendimento.<br />É o AutoGold que já circula no jogo, redistribuído.</Heading>
    <ol className="est-flow">
      <span className="est-flow-track" aria-hidden="true"><i /></span>
      {FLOW.map(([icon, title, text], i) => <li key={title} style={{ '--i': i }}><span className="est-flow-icon"><Icon name={icon} /><b>0{i + 1}</b></span><h3>{title}</h3><p>{text}</p></li>)}
    </ol>
  </div></section>
}

/* ---------- estabelecimentos com exemplos animados ---------- */

function PistaDemo() {
  return <div className="est-demo est-demo-pista">
    <p className="est-demo-title">Corrida com 10 pilotos · inscrição de 1.000 AG</p>
    <div className="est-chips" aria-hidden="true">{Array.from({ length: 10 }, (_, i) => <span key={i} style={{ '--i': i }}>1.000</span>)}</div>
    <div className="est-split" aria-hidden="true"><span className="is-prize">9.500 AG · prêmio do vencedor</span><span className="is-fee">5%</span></div>
    <p className="est-demo-result"><strong>500 AG</strong> de taxa entram na economia dos estabelecimentos.</p>
  </div>
}

function PaintDemo() {
  return <div className="est-demo est-demo-paint">
    <p className="est-demo-title">Troca de pintura de patrocinador · 200 AG</p>
    <div className="est-paint-car" aria-hidden="true"><img src="/assets/hero/hero-car-red.webp" alt="" loading="lazy" /><span className="est-paint-sweep" /></div>
    <p className="est-demo-equation">20.000 pilotos × 2 serviços × 200 AG =</p>
    <p className="est-demo-result"><strong><CountUp value={8000000} /> AG</strong> de movimentação, além da venda das pinturas.</p>
  </div>
}

const WEAR = ['Correr', 'Desgaste', 'Mecânica', 'Nova corrida']
function MecanicaDemo() {
  const paused = usePaused()
  const [step, setStep] = React.useState(0)
  React.useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setStep(value => (value + 1) % WEAR.length), 1100)
    return () => clearInterval(timer)
  }, [paused])
  const condition = [90, 35, 35, 100][step]
  return <div className="est-demo est-demo-mecanica">
    <p className="est-demo-title">O ciclo de manutenção</p>
    <ol className="est-wear-steps">{WEAR.map((label, i) => <li key={label} className={i === step ? 'is-active' : ''}>{label}</li>)}</ol>
    <div className="est-meter" aria-hidden="true"><span>Condição do carro</span><div><i style={{ width: `${condition}%` }} className={condition < 50 ? 'is-low' : ''} /></div></div>
    <p className="est-demo-result">Quanto mais os carros correm, <strong>maior a demanda</strong> pela Mecânica.</p>
  </div>
}

function PostoDemo() {
  const paused = usePaused()
  const [lap, setLap] = React.useState(0)
  React.useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setLap(value => (value >= 24 ? 0 : value + 1)), 180)
    return () => clearInterval(timer)
  }, [paused])
  const refuel = lap > 20
  const fuel = refuel ? 100 : 100 - lap * 5
  return <div className="est-demo est-demo-posto">
    <p className="est-demo-title">Combustível · 200 AG para cerca de 20 corridas</p>
    <div className="est-fuel" aria-hidden="true"><div className="est-fuel-bar"><i style={{ height: `${fuel}%` }} className={fuel < 25 ? 'is-low' : ''} /></div><div className="est-fuel-read"><span>Corrida</span><strong>{refuel ? 20 : lap}<small>/20</small></strong><em className={refuel ? 'is-on' : ''}>Abastecer · 200 AG</em></div></div>
    <p className="est-demo-result">Mais corridas, <strong>mais abastecimentos</strong> no Posto.</p>
  </div>
}

const DEMOS = { pista: PistaDemo, paint: PaintDemo, mecanica: MecanicaDemo, posto: PostoDemo }
function Places({ place, onPlace }) {
  const Demo = DEMOS[place.id]
  return <section id="estabelecimentos" className="est-section est-places-section"><div className="est-shell" data-reveal>
    <Heading kicker="02 / Os estabelecimentos" title={<>Quatro negócios.<br /><em>Uma economia.</em></>}>Cada casa gera atividade de um jeito.<br />Escolha uma para ver o exemplo.</Heading>
    <div className="est-tabs" role="tablist" aria-label="Estabelecimentos">{PLACES.map(item => <button type="button" role="tab" key={item.id} id={`tab-${item.id}`} aria-selected={place.id === item.id} aria-controls="est-place-panel" className={place.id === item.id ? 'is-active' : ''} onClick={() => onPlace(item)}><Icon name={item.icon} /><span>{item.name}</span><small>{item.phase}</small></button>)}</div>
    <div id="est-place-panel" className="est-place-panel" role="tabpanel" aria-labelledby={`tab-${place.id}`} key={place.id}>
      <figure className="est-place-media"><img src={place.image} alt={`Cena do universo Autorama Racing: ${place.name}`} loading="lazy" width="800" height="450" /><figcaption><span className={`est-phase ${place.phase === 'Early Access' ? 'is-now' : ''}`}>{place.phase === 'Early Access' ? 'Previsto no Early Access' : 'Previsto na Pré-Alfa'}</span><strong>{place.name}</strong><em>{place.tagline}</em></figcaption></figure>
      <div className="est-place-info">
        <h3>De onde vem a atividade</h3>
        <ul>{place.items.map(text => <li key={text}><Icon name="check" />{text}</li>)}</ul>
        <Demo />
        <p className="est-note">Valores de exemplo dos documentos de design do jogo. Podem mudar até o lançamento.</p>
      </div>
    </div>
  </div></section>
}

/* ---------- o ciclo: autorama com as quatro paradas ---------- */

const TRACK = 'M320 50A250 140 0 0 1 570 190A250 140 0 0 1 320 330A250 140 0 0 1 70 190A250 140 0 0 1 320 50'
const STOPS = [
  { name: 'Pista', text: 'Corre e disputa inscrições.', x: 320, y: 50, lx: 320, ly: 18 },
  { name: 'Posto', text: 'Abastece para a próxima corrida.', x: 570, y: 190, lx: 612, ly: 150 },
  { name: 'Mecânica', text: 'Conserta o desgaste do carro.', x: 320, y: 330, lx: 320, ly: 374 },
  { name: 'Paint Shop', text: 'Instala a pintura do patrocinador.', x: 70, y: 190, lx: 28, ly: 150 },
]
function Cycle() {
  const paused = usePaused()
  const path = React.useRef(null)
  const car = React.useRef(null)
  const progress = React.useRef(0)
  const [stop, setStop] = React.useState(0)
  const [laps, setLaps] = React.useState(0)
  React.useEffect(() => {
    const track = path.current
    const length = track.getTotalLength()
    const place = t => {
      const a = track.getPointAtLength(t * length)
      const b = track.getPointAtLength(((t + 0.002) % 1) * length)
      const angle = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI
      car.current.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${angle})`)
      setStop(Math.floor(((t + 0.06) % 1) * 4))
    }
    place(progress.current)
    if (paused) return
    let frame
    let last = performance.now()
    const tick = now => {
      const next = progress.current + (now - last) / 9000
      if (next >= 1) setLaps(value => value + 1)
      progress.current = next % 1
      last = now
      place(progress.current)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [paused])
  return <section id="ciclo" className="est-section est-cycle-section"><div className="est-shell" data-reveal>
    <Heading kicker="03 / O ciclo" title={<>Uma volta no autorama<br /><em>movimenta todos.</em></>}>Os estabelecimentos estão ligados ao gameplay.<br />Cada corrida puxa a próxima parada.</Heading>
    <div className="est-cycle">
      <figure className="est-track" aria-label="Ilustração: um carro percorre a pista passando por Pista, Posto, Mecânica e Paint Shop">
        <svg viewBox="0 0 640 400">
          <path d={TRACK} className="est-track-road" />
          <path d={TRACK} className="est-track-curb" />
          <path d="M320 64A236 126 0 0 1 556 190A236 126 0 0 1 320 316A236 126 0 0 1 84 190A236 126 0 0 1 320 64" className="est-track-slot" />
          <path d="M320 36A264 154 0 0 1 584 190A264 154 0 0 1 320 344A264 154 0 0 1 56 190A264 154 0 0 1 320 36" className="est-track-slot" />
          <path ref={path} d={TRACK} fill="none" stroke="none" />
          {STOPS.map((item, i) => <g key={item.name} className={`est-stop ${stop === i ? 'is-active' : ''}`}>
            <circle cx={item.x} cy={item.y} r="15" />
            <text x={item.lx} y={item.ly} textAnchor="middle">{item.name}</text>
          </g>)}
          <g ref={car} className="est-track-car"><rect x="-17" y="-9" width="34" height="18" rx="6" /><rect x="-2" y="-7" width="9" height="14" rx="2" className="est-track-glass" /><rect x="-17" y="-2" width="34" height="4" className="est-track-stripe" /></g>
          <text x="320" y="178" textAnchor="middle" className="est-track-center-kicker">PARADA ATUAL</text>
          <text x="320" y="210" textAnchor="middle" className="est-track-center-title">{STOPS[stop].name}</text>
          <text x="320" y="236" textAnchor="middle" className="est-track-center-sub">{`Voltas: ${laps}`}</text>
        </svg>
      </figure>
      <ol className="est-cycle-list">{STOPS.map((item, i) => <li key={item.name} className={stop === i ? 'is-active' : ''}><span>0{i + 1}</span><div><strong>{item.name}</strong><p>{item.text}</p></div></li>)}</ol>
    </div>
    <p className="est-sponsor-note"><Icon name="paint" />Patrocínio acelera o ciclo: o piloto recebe a pintura da marca, instala no Paint Shop e corre para cumprir a missão.</p>
  </div></section>
}

/* ---------- dividendos: simulador da regra de proporção ---------- */

function Simulator() {
  const [mine, setMine] = React.useState(1000)
  const [total, setTotal] = React.useState(200000)
  const [pool, setPool] = React.useState(1000000)
  const share = mine / total
  const result = pool * share
  const angle = Math.max(share * 360, 1.5)
  return <section id="dividendos" className="est-section est-sim-section"><div className="est-shell" data-reveal>
    <Heading kicker="04 / Dividendos" title={<>Sua parte é<br /><em>proporcional.</em></>}>Mova os controles e veja a regra funcionando.<br />Todos os números são hipotéticos.</Heading>
    <div className="est-sim">
      <div className="est-sim-controls">
        <label><span>Suas ações <b>{fmt(mine)}</b></span><input type="range" min="100" max="20000" step="100" value={mine} onChange={event => setMine(Number(event.target.value))} /></label>
        <label><span>Ações do estabelecimento <b>{fmt(total)}</b></span><input type="range" min="50000" max="400000" step="10000" value={total} onChange={event => setTotal(Math.max(Number(event.target.value), mine))} /></label>
        <label><span>AutoGold para os detentores no mês <b>{fmt(pool)} AG</b></span><input type="range" min="100000" max="10000000" step="100000" value={pool} onChange={event => setPool(Number(event.target.value))} /></label>
        <p className="est-sim-formula">{fmt(pool)} AG × ({fmt(mine)} ÷ {fmt(total)}) = <strong>{fmt(result)} AG</strong></p>
      </div>
      <div className="est-sim-out">
        <div className="est-donut" style={{ '--angle': `${angle}deg` }} aria-hidden="true"><div><strong>{(share * 100).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%</strong><span>das ações</span></div></div>
        <p className="est-sim-result"><span>Sua parte no mês</span><strong><CountUp value={result} duration={600} /> AG</strong></p>
      </div>
    </div>
    <ul className="est-sim-notes">
      <li>A distribuição é mensal e proporcional às ações de cada estabelecimento.</li>
      <li>O valor muda todo mês: sobe quando a atividade cresce e cai quando ela diminui. Pode ser zero.</li>
      <li>O percentual destinado aos detentores será publicado antes da abertura da pré-venda.</li>
    </ul>
  </div></section>
}

/* ---------- marketplace ---------- */

function Marketplace() {
  return <section id="marketplace" className="est-section est-market-section"><div className="est-shell" data-reveal>
    <Heading kicker="05 / Marketplace" title={<>Sua ação pode<br /><em>trocar de garagem.</em></>}>Previsto para a Pré-Alfa: jogadores negociam<br />ações entre si, sem recompra da Horse Power.</Heading>
    <div className="est-market">
      <div className="est-market-lane" aria-hidden="true">
        <span className="est-market-line" />
        <span className="est-market-token"><Icon name="store" />AÇÃO · PAINT SHOP</span>
        <span className="est-market-fee">taxa de 5%</span>
      </div>
      <ol className="est-market-nodes">
        <li><span><Icon name="store" /></span><strong>Venda inicial</strong><p>A Horse Power vende a ação no lançamento.</p></li>
        <li><span><Icon name="user" /></span><strong>Jogador A</strong><p>Recebe os dividendos enquanto tiver a ação.</p></li>
        <li><span><Icon name="user" /></span><strong>Jogador B</strong><p>Compra no marketplace e passa a receber os próximos.</p></li>
      </ol>
      <div className="est-market-prices" aria-hidden="true"><span>700 AG</span><span>1.000 AG</span><span>1.500 AG</span><span>2.000 AG</span></div>
      <p className="est-market-caption"><Icon name="swap" />O preço é definido entre os jogadores. Não há garantia de valorização nem de comprador.</p>
    </div>
  </div></section>
}

/* ---------- roadmap ---------- */

const PHASES = [
  { name: 'Early Access', tag: 'Primeira fase', items: ['Pista', 'Paint Shop', 'Venda das ações dos estabelecimentos'] },
  { name: 'Pré-Alfa', tag: 'Fase seguinte', items: ['Mecânica', 'Posto', 'Marketplace de ações'] },
]
function Roadmap() {
  return <section className="est-section est-roadmap-section"><div className="est-shell" data-reveal>
    <Heading kicker="06 / Roadmap" title={<>O que vem<br /><em>em cada fase.</em></>}>O ecossistema completo chega por etapas.</Heading>
    <ol className="est-roadmap">{PHASES.map((phase, i) => <li key={phase.name} className={i === 0 ? 'is-first' : ''}><span className="est-roadmap-dot" aria-hidden="true" /><small>{phase.tag}</small><h3>{phase.name}</h3><ul>{phase.items.map(item => <li key={item}><Icon name="check" />{item}</li>)}</ul></li>)}</ol>
  </div></section>
}

function Clarity() {
  return <section className="est-section est-clarity"><div className="est-shell" data-reveal>
    <Heading kicker="07 / Sem letra miúda" title="O que é uma ação no Autorama.">Transparência antes da largada.</Heading>
    <div className="est-clarity-grid">
      <div className="is-yes"><h3>É</h3><ul><li><Icon name="check" />Um item virtual colecionável ligado a um estabelecimento do jogo</li><li><Icon name="check" />Uma parte proporcional do AutoGold destinado aos detentores</li><li><Icon name="check" />Negociável entre jogadores quando o marketplace for lançado</li></ul></div>
      <div className="is-no"><h3>Não é</h3><ul><li><Icon name="x" />Ação ou participação na Horse Power Studio</li><li><Icon name="x" />Dinheiro: AutoGold não pode ser sacado nem convertido em reais</li><li><Icon name="x" />Garantia de dividendos, de valorização ou de comprador</li></ul></div>
    </div>
  </div></section>
}

const FAQ = [
  ['O que é uma ação no Autorama?', 'Um item virtual colecionável ligado a um estabelecimento do jogo. Não é ação da Horse Power Studio nem participação em empresa.'],
  ['De onde vem o AutoGold dos dividendos?', 'Da atividade dos jogadores nos estabelecimentos: inscrições, serviços, peças e combustível. É AutoGold que já circula no jogo, redistribuído de forma proporcional. Não é dinheiro colocado pela Horse Power.'],
  ['Quanto vou receber?', 'Depende da atividade do estabelecimento no mês e de quantas ações você tem. O valor pode subir, cair ou ser zero. O percentual destinado aos detentores será publicado antes da pré-venda.'],
  ['Posso sacar os dividendos?', 'Não. AutoGold é a moeda do jogo. Ele serve para itens, serviços e produtos de parceiros, e não pode ser sacado nem convertido em dinheiro.'],
  ['Posso vender minhas ações?', 'O marketplace de ações está previsto para a Pré-Alfa. Quando lançado, o preço será combinado entre jogadores, com taxa de 5%. Não há garantia de comprador nem de preço.'],
  ['Quantas ações existem?', `${fmt(TOTAL_SHARES)} no total, somando todos os estabelecimentos. A quantidade de cada um e o preço de lançamento serão publicados antes da pré-venda.`],
  ['Quais estabelecimentos chegam primeiro?', 'O roadmap do Early Access inclui a Pista e o Paint Shop. Mecânica, Posto e marketplace de ações estão previstos para a Pré-Alfa.'],
  ['Como entro na pré-venda?', 'Fale com o time pelo WhatsApp e entre na lista. Quem estiver na lista recebe primeiro as condições de lançamento.'],
]
function Faq() {
  return <section id="duvidas" className="est-section est-faq"><div className="est-shell" data-reveal>
    <div className="est-heading"><div><p className="kicker">08 / Antes da largada</p><h2>Perguntas frequentes.</h2></div><a className="text-link" href={contactUrl()} target="_blank" rel="noopener noreferrer">Tire suas dúvidas com o time <span aria-hidden="true">›</span></a></div>
    <div className="est-faq-grid">{FAQ.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
  </div></section>
}

function Closing({ place }) {
  return <section className="est-closing"><div className="est-shell est-closing-inner" data-reveal>
    <div><p className="kicker">Pré-venda</p><h2>Garanta seu lugar<br /><em>na primeira emissão.</em></h2><p>Antes da abertura, publicamos a quantidade de ações por estabelecimento, o preço de lançamento, o percentual distribuído e as regras do marketplace.</p></div>
    <div className="est-closing-action"><Contact place={place}>Entrar na lista · {place.name}</Contact><span>A conversa começa pelo WhatsApp.</span></div>
  </div></section>
}

function StickyBar({ place }) {
  return <div className="est-sticky" role="region" aria-label="Pré-venda"><div><strong>Pré-venda das ações</strong><span>{fmt(TOTAL_SHARES)} no total · {place.name}</span></div><Contact place={place} className="btn btn-primary btn-sm">Entrar na lista</Contact></div>
}

function EstabelecimentosApp() {
  const [paused, setPaused] = React.useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [place, setPlace] = React.useState(PLACES[0])
  const root = React.useRef(null)
  React.useEffect(() => {
    const page = root.current
    if (!('IntersectionObserver' in window)) {
      page.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } })
    }, { threshold: 0.08 })
    page.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  return <Motion.Provider value={paused}><div ref={root} className="page est-page" data-motion={paused ? 'paused' : 'playing'}>
    <Header />
    <main>
      <Hero paused={paused} toggle={() => setPaused(value => !value)} />
      <Flow />
      <Places place={place} onPlace={setPlace} />
      <Cycle />
      <Simulator />
      <Marketplace />
      <Roadmap />
      <Clarity />
      <Faq />
      <Closing place={place} />
    </main>
    <footer className="site-footer"><div className="footer-inner"><a href="/" aria-label="Autorama Racing — página inicial"><img src="/assets/logos/autorama-racing-logo.svg" alt="" /></a><a href="/">Conheça os pacotes de fundador <span aria-hidden="true">↗</span></a><p className="footer-note">Autorama Racing · Jogo em desenvolvimento</p></div></footer>
    <StickyBar place={place} />
  </div></Motion.Provider>
}

export default EstabelecimentosApp
