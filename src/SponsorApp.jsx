const WHATSAPP_NUMBER = '5521980468888'
const WHATSAPP_MESSAGE = 'Olá! Conheci a página de patrocinadores do Autorama Racing e gostaria de entender a participação da minha empresa no jogo. Quero compartilhar nosso logo para avaliação.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

function SponsorHeader() {
  const menuRef = React.useRef(null)
  const closeMenu = () => { if (menuRef.current) menuRef.current.open = false }
  return <header className="site-header sponsor-header"><div className="header-inner">
    <a href="/" className="brand" aria-label="Autorama Racing — página inicial"><img src="/assets/logos/autorama-racing-logo.svg" alt="" /></a>
    <nav className="header-nav sponsor-header-nav" aria-label="Principal">
      <a className="nav-link" href="/">O jogo</a><a className="nav-link is-active" href="/patrocinadores/" aria-current="page">Patrocinadores</a><a className="nav-link" href="#beneficios">Benefícios</a><a className="nav-link" href="#como-funciona">Na prática</a><a className="nav-link" href="#preparar-logo">Envio do logo</a>
    </nav>
    <details ref={menuRef} className="sponsor-mobile-menu"><summary>Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Menu mobile"><a href="/" onClick={closeMenu}>O jogo</a><a href="#beneficios" onClick={closeMenu}>Benefícios</a><a href="#como-funciona" onClick={closeMenu}>Na prática</a><a href="#preparar-logo" onClick={closeMenu}>Envio do logo</a></nav></details>
  </div></header>
}

// Diagrams remain understandable without motion; visible captions carry their meaning.
function Flow({ d, delay = 0 }) {
  return <g><path className="diagram-track" d={d} /><path className="diagram-flow" d={d} pathLength="100" style={{ animationDelay: `${delay}s` }} /></g>
}

function Symbol({ kind, x, y }) {
  const shapes = {
    brand: <><path d="M0 -19 18 -9 18 10 0 20 -18 10 -18 -9Z" /><path d="m-8 0 6 6 11-12" /></>,
    play: <><rect x="-22" y="-15" width="44" height="30" rx="10" /><path d="M-14 0h12m-6-6v12M10-3h1m4 7h1" /></>,
    people: <><circle cx="0" cy="-9" r="7" /><path d="M-14 18v-3a14 14 0 0 1 28 0v3M-22-4a6 6 0 0 1 0 12m0 4a10 10 0 0 0-7 8M22-4a6 6 0 0 0 0 12m0 4a10 10 0 0 1 7 8" /></>,
    eye: <><path d="M-25 0Q0-29 25 0 0 29-25 0Z" /><circle r="7" /></>,
    store: <><path d="M-19-7v26h38V-7M-24-7l6-14h36l6 14ZM-6 19V4H6v15" /><path d="M-24-7q6 9 12 0 6 9 12 0 6 9 12 0 6 9 12 0" /></>,
    flag: <path d="M-12 23v-44m0 1C0-30 6-10 21-19V3C6 12 0-8-12 2" />,
    trophy: <path d="M-13-20h26v14a13 13 0 0 1-26 0ZM0 7v13m-12 2h24M-13-15h-10v8q0 11 13 11m23-19h10v8q0 11-13 11" />,
    repeat: <path d="M-20-2a20 20 0 0 1 34-14l6 6M20-23v13H7M20 2a20 20 0 0 1-34 14l-6-6m0 13V10h13" />,
  }
  return <g className="diagram-symbol" transform={`translate(${x} ${y})`}>{shapes[kind] || shapes.brand}</g>
}

function Node({ x, y, kind, label, accent = false, delay = 0 }) {
  return <g className={`diagram-node${accent ? ' diagram-node-accent' : ''}`} style={{ '--node-delay': `${delay}s` }}>
    <circle className="node-halo" cx={x} cy={y} r="44" /><circle className="node-disc" cx={x} cy={y} r="38" /><Symbol kind={kind} x={x} y={y} /><text x={x} y={y + 68} className="diagram-label" textAnchor="middle">{label}</text>
  </g>
}

function OverviewDiagram() {
  return <figure className="sponsor-overview">
    <div className="diagram-eyebrow"><span className="diagram-live-dot" /> Uma conexão, várias experiências</div>
    <svg className="motion-graphic overview-svg" viewBox="0 0 560 390" role="img" aria-labelledby="overview-title overview-desc">
      <title id="overview-title">Da marca à experiência do jogador</title><desc id="overview-desc">A identidade da empresa se conecta às pinturas, aos desafios e à competição do jogo. Esses encontros aproximam a marca do público.</desc>
      <circle className="overview-orbit" cx="280" cy="170" r="142" /><circle className="overview-orbit" cx="280" cy="170" r="98" />
      <Flow d="M117 170H226" /><Flow d="M316 170H345Q370 170 370 80H425" delay={-1} /><Flow d="M316 170H425" delay={-2} /><Flow d="M316 170H345Q370 170 370 260H425" delay={-3} />
      <Node x={78} y={170} kind="brand" label="Sua marca" accent /><Node x={278} y={170} kind="play" label="Dentro do jogo" delay={1} />
      <g className="overview-endpoint"><circle cx="458" cy="80" r="32" /><Symbol kind="eye" x={458} y={80} /><text x="458" y="132" textAnchor="middle">Ser reconhecida</text></g>
      <g className="overview-endpoint"><circle cx="458" cy="170" r="32" /><Symbol kind="flag" x={458} y={170} /><text x="458" y="222" textAnchor="middle">Gerar participação</text></g>
      <g className="overview-endpoint"><circle cx="458" cy="260" r="32" /><Symbol kind="people" x={458} y={260} /><text x="458" y="312" textAnchor="middle">Criar vínculos</text></g>
      <text className="diagram-bottom-label" x="280" y="373" textAnchor="middle">IDENTIDADE → EXPERIÊNCIA → RELACIONAMENTO</text>
    </svg>
    <figcaption>O logo é o ponto de partida. A experiência dá contexto à marca.</figcaption>
  </figure>
}

function SponsorHero({ paused, onToggleMotion }) {
  return <section className="sponsor-hero" aria-labelledby="sponsor-title"><div className="sponsor-container sponsor-hero-grid">
    <div className="sponsor-hero-copy"><p className="kicker">Guia de patrocínio · Autorama Racing</p><h1 id="sponsor-title">Sua marca.<br />Parte da<br /><em>experiência.</em></h1><p className="sponsor-hero-lead">Como a presença dentro de um jogo pode aproximar sua empresa das pessoas que jogam.</p><a href="#beneficios" className="text-link">Explore os benefícios <span aria-hidden="true">↓</span></a></div>
    <OverviewDiagram />
  </div><div className="sponsor-container sponsor-hero-baseline"><p>Marca + jogo + comunidade</p><button className="motion-toggle" type="button" onClick={onToggleMotion} aria-pressed={paused}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {paused ? 'Retomar animações' : 'Pausar animações'}</button></div></section>
}

const BENEFITS = [
  { id: 'marca', number: '01', title: 'Fortalecimento da marca', short: 'Da presença ao reconhecimento.', headline: 'Reconhecer começa por encontrar.', body: 'Ao encontrar a mesma identidade em momentos diferentes do jogo, o jogador pode se familiarizar com a marca e associá-la a uma experiência de que gosta.', example: 'O logo e as cores aparecem na pintura patrocinada. Ao usar essa pintura nas corridas, o jogador reencontra a identidade da empresa.', caption: 'Identidade consistente + encontros recorrentes → oportunidade de ser lembrada.' },
  { id: 'vendas', number: '02', title: 'Mais um canal de vendas', short: 'Da descoberta ao próximo contato.', headline: 'Uma nova porta de entrada.', body: 'O jogo pode ser o primeiro encontro de alguém com sua empresa. Esse interesse pode continuar em um canal próprio da marca, como sua loja, site ou atendimento.', example: 'Na definição da parceria, podemos avaliar como conectar a presença no jogo aos canais da empresa. Links, ofertas e ações externas precisam ser combinados com a equipe.', caption: 'Descoberta → interesse → canal da empresa. Uma jornada possível, sem promessa de conversão.' },
  { id: 'engajamento', number: '03', title: 'Engajamento com seu público', short: 'De observar a participar.', headline: 'Uma marca que faz parte da ação.', body: 'Um objetivo dá ao jogador um motivo para participar. Quando a marca está associada a um desafio, ela ganha um papel na experiência e na conquista.', example: 'O sistema de patrocínios permite definir requisitos, metas e recompensas. Um contrato pode pedir o uso da pintura da marca durante a atividade.', caption: 'Desafio → participação → conquista → um novo motivo para jogar.' },
  { id: 'comunidade', number: '04', title: 'Presença na comunidade', short: 'Da experiência individual à disputa.', headline: 'Uma identidade em comum.', body: 'A competição cria pontos de encontro entre jogadores. A marca pode acompanhar essa dinâmica e participar de um contexto com interesses compartilhados.', example: 'Uma pintura patrocinada equipada pode levar a marca ao contexto da Volta do Dia, aproximando sua identidade da disputa por tempos entre jogadores.', caption: 'Jogadores conectados pela competição. A marca participa desse contexto.' },
]

function BenefitDiagram({ benefit }) {
  return <svg className={`motion-graphic benefit-svg diagram-${benefit.id}`} viewBox="0 0 560 310" role="img" aria-labelledby={`diagram-${benefit.id}-title diagram-${benefit.id}-desc`}>
    <title id={`diagram-${benefit.id}-title`}>{benefit.title}</title><desc id={`diagram-${benefit.id}-desc`}>{benefit.caption}</desc>
    {benefit.id === 'marca' && <><Flow d="M124 138H238M316 138H438" /><Flow d="M476 95V47H86V95" delay={-2} /><text x="280" y="35" textAnchor="middle" className="diagram-note">A CADA NOVO ENCONTRO</text><Node x={86} y={138} kind="brand" label="Identidade" accent /><Node x={278} y={138} kind="repeat" label="Repetição" delay={1} /><Node x={476} y={138} kind="eye" label="Reconhecimento" delay={2} /><text className="diagram-bottom-label" x="280" y="276" textAnchor="middle">VER · REENCONTRAR · LEMBRAR</text></>}
    {benefit.id === 'vendas' && <><Flow d="M124 130H238M316 130H438" /><Node x={86} y={130} kind="play" label="Descoberta" accent /><Node x={278} y={130} kind="eye" label="Interesse" delay={1} /><Node x={476} y={130} kind="store" label="Seu canal" delay={2} /><path className="diagram-bracket" d="M34 225v12h294v-12M385 225v12h142v-12" /><text x="181" y="267" textAnchor="middle" className="diagram-note">DENTRO DO JOGO</text><text x="456" y="267" textAnchor="middle" className="diagram-note">PRÓXIMO CONTATO</text></>}
    {benefit.id === 'engajamento' && <><Flow d="M124 126H238M316 126H438" /><Flow d="M476 196V243H86V172" delay={-2} /><Node x={86} y={126} kind="flag" label="Desafio" accent /><Node x={278} y={126} kind="play" label="Participação" delay={1} /><Node x={476} y={126} kind="trophy" label="Conquista" delay={2} /><text x="280" y="278" textAnchor="middle" className="diagram-note">O CICLO PODE RECOMEÇAR</text></>}
    {benefit.id === 'comunidade' && <><Flow d="M133 88 241 143M427 88 319 143M133 241 241 171M427 241 319 171" /><circle className="community-ring" cx="280" cy="155" r="96" /><Node x={280} y={155} kind="brand" label="Marca na competição" accent />{[[102,70],[458,70],[102,251],[458,251]].map(([x,y],i) => <g key={i} className="community-player" style={{ '--node-delay': `${i}s` }}><circle className="node-disc" cx={x} cy={y} r="30" /><Symbol kind="people" x={x} y={y} /></g>)}<text x="280" y="33" textAnchor="middle" className="diagram-note">INTERESSES COMPARTILHADOS</text></>}
  </svg>
}

function Benefits() {
  const [selected, setSelected] = React.useState(0)
  const benefit = BENEFITS[selected]
  return <section className="sponsor-section sponsor-benefits" id="beneficios" aria-labelledby="benefits-title"><div className="sponsor-container">
    <div className="sponsor-section-heading"><p className="kicker">01 / Por que estar no jogo?</p><h2 id="benefits-title">Quatro formas<br />de criar conexão.</h2><p>Selecione um benefício para acompanhar a dinâmica.</p></div>
    <div className="benefits-layout"><div className="benefit-selector" role="group" aria-label="Escolha um benefício">{BENEFITS.map((item,index) => <button type="button" key={item.id} aria-pressed={selected === index} aria-controls="benefit-explanation" onClick={() => setSelected(index)}><span className="benefit-number">{item.number}</span><span><strong>{item.title}</strong><small>{item.short}</small></span><span className="benefit-arrow" aria-hidden="true">↗</span></button>)}</div>
    <div className="benefit-explanation" id="benefit-explanation" role="region" aria-label="Benefício selecionado" aria-live="polite" aria-atomic="true"><div key={benefit.id} className="benefit-content"><figure><div className="diagram-eyebrow">{benefit.number} / {benefit.title}</div><BenefitDiagram benefit={benefit} /><figcaption>{benefit.caption}</figcaption></figure><h3>{benefit.headline}</h3><p>{benefit.body}</p><div className="benefit-example"><span>No Autorama Racing</span><p>{benefit.example}</p></div></div></div></div>
  </div></section>
}

function GameDynamics() {
  return <section className="sponsor-section sponsor-dynamics" id="como-funciona" aria-labelledby="dynamics-title"><div className="sponsor-container">
    <div className="sponsor-section-heading"><p className="kicker">02 / Na prática</p><h2 id="dynamics-title">Como isso entra<br />na rotina do jogador.</h2><p>Um exemplo de dinâmica que pode ser configurada com o sistema de patrocínios do Autorama Racing.</p></div>
    <ol className="sponsor-journey">
      <li><div className="journey-visual"><span className="journey-brand">SUA<br />MARCA</span><span className="journey-caption">Identidade visual</span></div><span className="sponsor-index">01 / IDENTIFICAÇÃO</span><h3>Conhece a marca</h3><p>A identidade da empresa ganha uma aplicação na pintura patrocinada.</p></li>
      <li><div className="journey-visual"><div className="journey-contract"><span>DESAFIO DA MARCA</span><i /><i /><span className="contract-status">Participação</span></div></div><span className="sponsor-index">02 / PARTICIPAÇÃO</span><h3>Aceita um desafio</h3><p>O jogador adere ao contrato e acompanha os requisitos e as metas.</p></li>
      <li><div className="journey-visual"><div className="journey-progress"><span>PROGRESSO DA MISSÃO</span><div className="progress-track"><i /></div><div className="progress-marks"><span>Início</span><span>Meta</span></div></div></div><span className="sponsor-index">03 / EXPERIÊNCIA</span><h3>Joga com um objetivo</h3><p>A atividade nas pistas faz avançar a missão, que pode exigir a pintura equipada.</p></li>
      <li><div className="journey-visual"><svg className="journey-trophy" viewBox="0 0 100 100" aria-hidden="true"><circle className="trophy-ring" cx="50" cy="50" r="37" /><Symbol kind="trophy" x={50} y={50} /></svg><span className="journey-caption">Objetivo concluído</span></div><span className="sponsor-index">04 / CONQUISTA</span><h3>Conclui e recebe</h3><p>Ao cumprir as condições, recebe a recompensa definida para aquele contrato.</p></li>
    </ol><p className="sponsor-diagram-note">Representação ilustrativa do fluxo. Requisitos, aplicações da marca e recompensas são definidos para cada parceria.</p>
  </div></section>
}

function LogoGuide() {
  return <section className="sponsor-section sponsor-logo-guide" id="preparar-logo" aria-labelledby="logo-title"><div className="sponsor-container sponsor-guide-grid">
    <div><p className="kicker">03 / Como participar</p><h2 id="logo-title">Da identidade<br />à textura.</h2><p>Empresas de qualquer segmento podem iniciar uma conversa. A equipe avalia como a identidade e o contexto da marca se encaixam no jogo.</p><p>Por enquanto, o logo é enviado diretamente pelo WhatsApp.</p></div>
    <ol className="sponsor-guide-details"><li><span>01</span><div><h3>Apresente sua empresa</h3><p>Conte o que ela faz e com qual público gostaria de se conectar.</p></div></li><li><span>02</span><div><h3>Compartilhe o logo</h3><p>Envie um PNG em alta resolução, com fundo transparente, e as cores da marca. Se precisarmos de um arquivo vetorial, combinaremos depois.</p></div></li><li><span>03</span><div><h3>Converse sobre a aplicação</h3><p>A equipe analisa o material para definir a proposta de pintura, a dinâmica e as condições da parceria.</p></div></li></ol>
  </div></section>
}

function SponsorClosing() {
  return <section className="sponsor-closing" id="contato" aria-labelledby="closing-title"><div className="sponsor-container sponsor-closing-inner"><div><p className="kicker">Fale com a equipe</p><h2 id="closing-title">Dúvidas ou logo em mãos?</h2><p>A conversa começa pelo WhatsApp. Você pode tirar dúvidas e anexar o logo como arquivo na própria conversa.</p><small>O envio é para avaliação. A criação e a publicação dependem de acordo e aprovação da equipe.</small></div><a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Conversar e enviar logo <span aria-hidden="true">↗</span></a></div></section>
}

function SponsorApp() {
  const [paused, setPaused] = React.useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  React.useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (event) => setPaused(event.matches)
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])
  return <div className="page sponsor-page" data-motion={paused ? 'paused' : 'playing'}><SponsorHeader /><main><SponsorHero paused={paused} onToggleMotion={() => setPaused(value => !value)} /><Benefits /><GameDynamics /><LogoGuide /><SponsorClosing /></main><footer className="site-footer"><div className="footer-inner"><a href="/" aria-label="Autorama Racing — página inicial"><img src="/autorama_white.png" alt="" /></a><p className="footer-note">Autorama Racing · Jogo em desenvolvimento</p></div></footer></div>
}

export default SponsorApp
