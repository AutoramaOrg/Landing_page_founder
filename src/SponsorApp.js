// Generated from SponsorApp.jsx by scripts/compile-jsx.mjs.
const WHATSAPP_NUMBER = '5521980468888';
const WHATSAPP_MESSAGE = 'Olá! Conheci a página de patrocinadores do Autorama Racing e gostaria de entender a participação da minha empresa no jogo. Quero compartilhar nosso logo para avaliação.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
function SponsorHeader() {
  const menuRef = React.useRef(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };
  return React.createElement("header", {
    className: "site-header sponsor-header"
  }, React.createElement("div", {
    className: "header-inner"
  }, React.createElement("a", {
    href: "/",
    className: "brand",
    "aria-label": "Autorama Racing \u2014 p\xE1gina inicial"
  }, React.createElement("img", {
    src: "/assets/logos/autorama-racing-logo.svg",
    alt: ""
  })), React.createElement("nav", {
    className: "header-nav sponsor-header-nav",
    "aria-label": "Principal"
  }, React.createElement("a", {
    className: "nav-link",
    href: "/"
  }, "O jogo"), React.createElement("a", {
    className: "nav-link is-active",
    href: "/patrocinadores/",
    "aria-current": "page"
  }, "Patrocinadores"), React.createElement("a", {
    className: "nav-link",
    href: "#beneficios"
  }, "Benef\xEDcios"), React.createElement("a", {
    className: "nav-link",
    href: "#como-funciona"
  }, "Na pr\xE1tica"), React.createElement("a", {
    className: "nav-link",
    href: "#preparar-logo"
  }, "Envio do logo")), React.createElement("details", {
    ref: menuRef,
    className: "sponsor-mobile-menu"
  }, React.createElement("summary", null, "Menu ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2630")), React.createElement("nav", {
    "aria-label": "Menu mobile"
  }, React.createElement("a", {
    href: "/",
    onClick: closeMenu
  }, "O jogo"), React.createElement("a", {
    href: "#beneficios",
    onClick: closeMenu
  }, "Benef\xEDcios"), React.createElement("a", {
    href: "#como-funciona",
    onClick: closeMenu
  }, "Na pr\xE1tica"), React.createElement("a", {
    href: "#preparar-logo",
    onClick: closeMenu
  }, "Envio do logo")))));
}
function Flow({
  d,
  delay = 0
}) {
  return React.createElement("g", null, React.createElement("path", {
    className: "diagram-track",
    d: d
  }), React.createElement("path", {
    className: "diagram-flow",
    d: d,
    pathLength: "100",
    style: {
      animationDelay: `${delay}s`
    }
  }));
}
function Symbol({
  kind,
  x,
  y
}) {
  const shapes = {
    brand: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M0 -19 18 -9 18 10 0 20 -18 10 -18 -9Z"
    }), React.createElement("path", {
      d: "m-8 0 6 6 11-12"
    })),
    play: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "-22",
      y: "-15",
      width: "44",
      height: "30",
      rx: "10"
    }), React.createElement("path", {
      d: "M-14 0h12m-6-6v12M10-3h1m4 7h1"
    })),
    people: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "0",
      cy: "-9",
      r: "7"
    }), React.createElement("path", {
      d: "M-14 18v-3a14 14 0 0 1 28 0v3M-22-4a6 6 0 0 1 0 12m0 4a10 10 0 0 0-7 8M22-4a6 6 0 0 0 0 12m0 4a10 10 0 0 1 7 8"
    })),
    eye: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M-25 0Q0-29 25 0 0 29-25 0Z"
    }), React.createElement("circle", {
      r: "7"
    })),
    store: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M-19-7v26h38V-7M-24-7l6-14h36l6 14ZM-6 19V4H6v15"
    }), React.createElement("path", {
      d: "M-24-7q6 9 12 0 6 9 12 0 6 9 12 0 6 9 12 0"
    })),
    flag: React.createElement("path", {
      d: "M-12 23v-44m0 1C0-30 6-10 21-19V3C6 12 0-8-12 2"
    }),
    trophy: React.createElement("path", {
      d: "M-13-20h26v14a13 13 0 0 1-26 0ZM0 7v13m-12 2h24M-13-15h-10v8q0 11 13 11m23-19h10v8q0 11-13 11"
    }),
    repeat: React.createElement("path", {
      d: "M-20-2a20 20 0 0 1 34-14l6 6M20-23v13H7M20 2a20 20 0 0 1-34 14l-6-6m0 13V10h13"
    })
  };
  return React.createElement("g", {
    className: "diagram-symbol",
    transform: `translate(${x} ${y})`
  }, shapes[kind] || shapes.brand);
}
function Node({
  x,
  y,
  kind,
  label,
  accent = false,
  delay = 0
}) {
  return React.createElement("g", {
    className: `diagram-node${accent ? ' diagram-node-accent' : ''}`,
    style: {
      '--node-delay': `${delay}s`
    }
  }, React.createElement("circle", {
    className: "node-halo",
    cx: x,
    cy: y,
    r: "44"
  }), React.createElement("circle", {
    className: "node-disc",
    cx: x,
    cy: y,
    r: "38"
  }), React.createElement(Symbol, {
    kind: kind,
    x: x,
    y: y
  }), React.createElement("text", {
    x: x,
    y: y + 68,
    className: "diagram-label",
    textAnchor: "middle"
  }, label));
}
function OverviewDiagram() {
  return React.createElement("figure", {
    className: "sponsor-overview"
  }, React.createElement("div", {
    className: "diagram-eyebrow"
  }, React.createElement("span", {
    className: "diagram-live-dot"
  }), " Uma conex\xE3o, v\xE1rias experi\xEAncias"), React.createElement("svg", {
    className: "motion-graphic overview-svg",
    viewBox: "0 0 560 390",
    role: "img",
    "aria-labelledby": "overview-title overview-desc"
  }, React.createElement("title", {
    id: "overview-title"
  }, "Da marca \xE0 experi\xEAncia do jogador"), React.createElement("desc", {
    id: "overview-desc"
  }, "A identidade da empresa se conecta \xE0s pinturas, aos desafios e \xE0 competi\xE7\xE3o do jogo. Esses encontros aproximam a marca do p\xFAblico."), React.createElement("circle", {
    className: "overview-orbit",
    cx: "280",
    cy: "170",
    r: "142"
  }), React.createElement("circle", {
    className: "overview-orbit",
    cx: "280",
    cy: "170",
    r: "98"
  }), React.createElement(Flow, {
    d: "M117 170H226"
  }), React.createElement(Flow, {
    d: "M316 170H345Q370 170 370 80H425",
    delay: -1
  }), React.createElement(Flow, {
    d: "M316 170H425",
    delay: -2
  }), React.createElement(Flow, {
    d: "M316 170H345Q370 170 370 260H425",
    delay: -3
  }), React.createElement(Node, {
    x: 78,
    y: 170,
    kind: "brand",
    label: "Sua marca",
    accent: true
  }), React.createElement(Node, {
    x: 278,
    y: 170,
    kind: "play",
    label: "Dentro do jogo",
    delay: 1
  }), React.createElement("g", {
    className: "overview-endpoint"
  }, React.createElement("circle", {
    cx: "458",
    cy: "80",
    r: "32"
  }), React.createElement(Symbol, {
    kind: "eye",
    x: 458,
    y: 80
  }), React.createElement("text", {
    x: "458",
    y: "132",
    textAnchor: "middle"
  }, "Ser reconhecida")), React.createElement("g", {
    className: "overview-endpoint"
  }, React.createElement("circle", {
    cx: "458",
    cy: "170",
    r: "32"
  }), React.createElement(Symbol, {
    kind: "flag",
    x: 458,
    y: 170
  }), React.createElement("text", {
    x: "458",
    y: "222",
    textAnchor: "middle"
  }, "Gerar participa\xE7\xE3o")), React.createElement("g", {
    className: "overview-endpoint"
  }, React.createElement("circle", {
    cx: "458",
    cy: "260",
    r: "32"
  }), React.createElement(Symbol, {
    kind: "people",
    x: 458,
    y: 260
  }), React.createElement("text", {
    x: "458",
    y: "312",
    textAnchor: "middle"
  }, "Criar v\xEDnculos")), React.createElement("text", {
    className: "diagram-bottom-label",
    x: "280",
    y: "373",
    textAnchor: "middle"
  }, "IDENTIDADE \u2192 EXPERI\xCANCIA \u2192 RELACIONAMENTO")), React.createElement("figcaption", null, "O logo \xE9 o ponto de partida. A experi\xEAncia d\xE1 contexto \xE0 marca."));
}
function SponsorHero({
  paused,
  onToggleMotion
}) {
  return React.createElement("section", {
    className: "sponsor-hero",
    "aria-labelledby": "sponsor-title"
  }, React.createElement("div", {
    className: "sponsor-container sponsor-hero-grid"
  }, React.createElement("div", {
    className: "sponsor-hero-copy"
  }, React.createElement("p", {
    className: "kicker"
  }, "Guia de patroc\xEDnio \xB7 Autorama Racing"), React.createElement("h1", {
    id: "sponsor-title"
  }, "Sua marca.", React.createElement("br", null), "Parte da", React.createElement("br", null), React.createElement("em", null, "experi\xEAncia.")), React.createElement("p", {
    className: "sponsor-hero-lead"
  }, "Como a presen\xE7a dentro de um jogo pode aproximar sua empresa das pessoas que jogam."), React.createElement("a", {
    href: "#beneficios",
    className: "text-link"
  }, "Explore os benef\xEDcios ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2193"))), React.createElement(OverviewDiagram, null)), React.createElement("div", {
    className: "sponsor-container sponsor-hero-baseline"
  }, React.createElement("p", null, "Marca + jogo + comunidade"), React.createElement("button", {
    className: "motion-toggle",
    type: "button",
    onClick: onToggleMotion,
    "aria-pressed": paused
  }, React.createElement("span", {
    "aria-hidden": "true"
  }, paused ? '▷' : 'Ⅱ'), " ", paused ? 'Retomar animações' : 'Pausar animações')));
}
const BENEFITS = [{
  id: 'marca',
  number: '01',
  title: 'Fortalecimento da marca',
  short: 'Da presença ao reconhecimento.',
  headline: 'Reconhecer começa por encontrar.',
  body: 'Ao encontrar a mesma identidade em momentos diferentes do jogo, o jogador pode se familiarizar com a marca e associá-la a uma experiência de que gosta.',
  example: 'O logo e as cores aparecem na pintura patrocinada. Ao usar essa pintura nas corridas, o jogador reencontra a identidade da empresa.',
  caption: 'Identidade consistente + encontros recorrentes → oportunidade de ser lembrada.'
}, {
  id: 'vendas',
  number: '02',
  title: 'Mais um canal de vendas',
  short: 'Da descoberta ao próximo contato.',
  headline: 'Uma nova porta de entrada.',
  body: 'O jogo pode ser o primeiro encontro de alguém com sua empresa. Esse interesse pode continuar em um canal próprio da marca, como sua loja, site ou atendimento.',
  example: 'Na definição da parceria, podemos avaliar como conectar a presença no jogo aos canais da empresa. Links, ofertas e ações externas precisam ser combinados com a equipe.',
  caption: 'Descoberta → interesse → canal da empresa. Uma jornada possível, sem promessa de conversão.'
}, {
  id: 'engajamento',
  number: '03',
  title: 'Engajamento com seu público',
  short: 'De observar a participar.',
  headline: 'Uma marca que faz parte da ação.',
  body: 'Um objetivo dá ao jogador um motivo para participar. Quando a marca está associada a um desafio, ela ganha um papel na experiência e na conquista.',
  example: 'O sistema de patrocínios permite definir requisitos, metas e recompensas. Um contrato pode pedir o uso da pintura da marca durante a atividade.',
  caption: 'Desafio → participação → conquista → um novo motivo para jogar.'
}, {
  id: 'comunidade',
  number: '04',
  title: 'Presença na comunidade',
  short: 'Da experiência individual à disputa.',
  headline: 'Uma identidade em comum.',
  body: 'A competição cria pontos de encontro entre jogadores. A marca pode acompanhar essa dinâmica e participar de um contexto com interesses compartilhados.',
  example: 'Uma pintura patrocinada equipada pode levar a marca ao contexto da Volta do Dia, aproximando sua identidade da disputa por tempos entre jogadores.',
  caption: 'Jogadores conectados pela competição. A marca participa desse contexto.'
}];
function BenefitDiagram({
  benefit
}) {
  return React.createElement("svg", {
    className: `motion-graphic benefit-svg diagram-${benefit.id}`,
    viewBox: "0 0 560 310",
    role: "img",
    "aria-labelledby": `diagram-${benefit.id}-title diagram-${benefit.id}-desc`
  }, React.createElement("title", {
    id: `diagram-${benefit.id}-title`
  }, benefit.title), React.createElement("desc", {
    id: `diagram-${benefit.id}-desc`
  }, benefit.caption), benefit.id === 'marca' && React.createElement(React.Fragment, null, React.createElement(Flow, {
    d: "M124 138H238M316 138H438"
  }), React.createElement(Flow, {
    d: "M476 95V47H86V95",
    delay: -2
  }), React.createElement("text", {
    x: "280",
    y: "35",
    textAnchor: "middle",
    className: "diagram-note"
  }, "A CADA NOVO ENCONTRO"), React.createElement(Node, {
    x: 86,
    y: 138,
    kind: "brand",
    label: "Identidade",
    accent: true
  }), React.createElement(Node, {
    x: 278,
    y: 138,
    kind: "repeat",
    label: "Repeti\xE7\xE3o",
    delay: 1
  }), React.createElement(Node, {
    x: 476,
    y: 138,
    kind: "eye",
    label: "Reconhecimento",
    delay: 2
  }), React.createElement("text", {
    className: "diagram-bottom-label",
    x: "280",
    y: "276",
    textAnchor: "middle"
  }, "VER \xB7 REENCONTRAR \xB7 LEMBRAR")), benefit.id === 'vendas' && React.createElement(React.Fragment, null, React.createElement(Flow, {
    d: "M124 130H238M316 130H438"
  }), React.createElement(Node, {
    x: 86,
    y: 130,
    kind: "play",
    label: "Descoberta",
    accent: true
  }), React.createElement(Node, {
    x: 278,
    y: 130,
    kind: "eye",
    label: "Interesse",
    delay: 1
  }), React.createElement(Node, {
    x: 476,
    y: 130,
    kind: "store",
    label: "Seu canal",
    delay: 2
  }), React.createElement("path", {
    className: "diagram-bracket",
    d: "M34 225v12h294v-12M385 225v12h142v-12"
  }), React.createElement("text", {
    x: "181",
    y: "267",
    textAnchor: "middle",
    className: "diagram-note"
  }, "DENTRO DO JOGO"), React.createElement("text", {
    x: "456",
    y: "267",
    textAnchor: "middle",
    className: "diagram-note"
  }, "PR\xD3XIMO CONTATO")), benefit.id === 'engajamento' && React.createElement(React.Fragment, null, React.createElement(Flow, {
    d: "M124 126H238M316 126H438"
  }), React.createElement(Flow, {
    d: "M476 196V243H86V172",
    delay: -2
  }), React.createElement(Node, {
    x: 86,
    y: 126,
    kind: "flag",
    label: "Desafio",
    accent: true
  }), React.createElement(Node, {
    x: 278,
    y: 126,
    kind: "play",
    label: "Participa\xE7\xE3o",
    delay: 1
  }), React.createElement(Node, {
    x: 476,
    y: 126,
    kind: "trophy",
    label: "Conquista",
    delay: 2
  }), React.createElement("text", {
    x: "280",
    y: "278",
    textAnchor: "middle",
    className: "diagram-note"
  }, "O CICLO PODE RECOME\xC7AR")), benefit.id === 'comunidade' && React.createElement(React.Fragment, null, React.createElement(Flow, {
    d: "M133 88 241 143M427 88 319 143M133 241 241 171M427 241 319 171"
  }), React.createElement("circle", {
    className: "community-ring",
    cx: "280",
    cy: "155",
    r: "96"
  }), React.createElement(Node, {
    x: 280,
    y: 155,
    kind: "brand",
    label: "Marca na competi\xE7\xE3o",
    accent: true
  }), [[102, 70], [458, 70], [102, 251], [458, 251]].map(([x, y], i) => React.createElement("g", {
    key: i,
    className: "community-player",
    style: {
      '--node-delay': `${i}s`
    }
  }, React.createElement("circle", {
    className: "node-disc",
    cx: x,
    cy: y,
    r: "30"
  }), React.createElement(Symbol, {
    kind: "people",
    x: x,
    y: y
  }))), React.createElement("text", {
    x: "280",
    y: "33",
    textAnchor: "middle",
    className: "diagram-note"
  }, "INTERESSES COMPARTILHADOS")));
}
function Benefits() {
  const [selected, setSelected] = React.useState(0);
  const benefit = BENEFITS[selected];
  return React.createElement("section", {
    className: "sponsor-section sponsor-benefits",
    id: "beneficios",
    "aria-labelledby": "benefits-title"
  }, React.createElement("div", {
    className: "sponsor-container"
  }, React.createElement("div", {
    className: "sponsor-section-heading"
  }, React.createElement("p", {
    className: "kicker"
  }, "01 / Por que estar no jogo?"), React.createElement("h2", {
    id: "benefits-title"
  }, "Quatro formas", React.createElement("br", null), "de criar conex\xE3o."), React.createElement("p", null, "Selecione um benef\xEDcio para acompanhar a din\xE2mica.")), React.createElement("div", {
    className: "benefits-layout"
  }, React.createElement("div", {
    className: "benefit-selector",
    role: "group",
    "aria-label": "Escolha um benef\xEDcio"
  }, BENEFITS.map((item, index) => React.createElement("button", {
    type: "button",
    key: item.id,
    "aria-pressed": selected === index,
    "aria-controls": "benefit-explanation",
    onClick: () => setSelected(index)
  }, React.createElement("span", {
    className: "benefit-number"
  }, item.number), React.createElement("span", null, React.createElement("strong", null, item.title), React.createElement("small", null, item.short)), React.createElement("span", {
    className: "benefit-arrow",
    "aria-hidden": "true"
  }, "\u2197")))), React.createElement("div", {
    className: "benefit-explanation",
    id: "benefit-explanation",
    role: "region",
    "aria-label": "Benef\xEDcio selecionado",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, React.createElement("div", {
    key: benefit.id,
    className: "benefit-content"
  }, React.createElement("figure", null, React.createElement("div", {
    className: "diagram-eyebrow"
  }, benefit.number, " / ", benefit.title), React.createElement(BenefitDiagram, {
    benefit: benefit
  }), React.createElement("figcaption", null, benefit.caption)), React.createElement("h3", null, benefit.headline), React.createElement("p", null, benefit.body), React.createElement("div", {
    className: "benefit-example"
  }, React.createElement("span", null, "No Autorama Racing"), React.createElement("p", null, benefit.example)))))));
}
function GameDynamics() {
  return React.createElement("section", {
    className: "sponsor-section sponsor-dynamics",
    id: "como-funciona",
    "aria-labelledby": "dynamics-title"
  }, React.createElement("div", {
    className: "sponsor-container"
  }, React.createElement("div", {
    className: "sponsor-section-heading"
  }, React.createElement("p", {
    className: "kicker"
  }, "02 / Na pr\xE1tica"), React.createElement("h2", {
    id: "dynamics-title"
  }, "Como isso entra", React.createElement("br", null), "na rotina do jogador."), React.createElement("p", null, "Um exemplo de din\xE2mica que pode ser configurada com o sistema de patroc\xEDnios do Autorama Racing.")), React.createElement("ol", {
    className: "sponsor-journey"
  }, React.createElement("li", null, React.createElement("div", {
    className: "journey-visual"
  }, React.createElement("span", {
    className: "journey-brand"
  }, "SUA", React.createElement("br", null), "MARCA"), React.createElement("span", {
    className: "journey-caption"
  }, "Identidade visual")), React.createElement("span", {
    className: "sponsor-index"
  }, "01 / IDENTIFICA\xC7\xC3O"), React.createElement("h3", null, "Conhece a marca"), React.createElement("p", null, "A identidade da empresa ganha uma aplica\xE7\xE3o na pintura patrocinada.")), React.createElement("li", null, React.createElement("div", {
    className: "journey-visual"
  }, React.createElement("div", {
    className: "journey-contract"
  }, React.createElement("span", null, "DESAFIO DA MARCA"), React.createElement("i", null), React.createElement("i", null), React.createElement("span", {
    className: "contract-status"
  }, "Participa\xE7\xE3o"))), React.createElement("span", {
    className: "sponsor-index"
  }, "02 / PARTICIPA\xC7\xC3O"), React.createElement("h3", null, "Aceita um desafio"), React.createElement("p", null, "O jogador adere ao contrato e acompanha os requisitos e as metas.")), React.createElement("li", null, React.createElement("div", {
    className: "journey-visual"
  }, React.createElement("div", {
    className: "journey-progress"
  }, React.createElement("span", null, "PROGRESSO DA MISS\xC3O"), React.createElement("div", {
    className: "progress-track"
  }, React.createElement("i", null)), React.createElement("div", {
    className: "progress-marks"
  }, React.createElement("span", null, "In\xEDcio"), React.createElement("span", null, "Meta")))), React.createElement("span", {
    className: "sponsor-index"
  }, "03 / EXPERI\xCANCIA"), React.createElement("h3", null, "Joga com um objetivo"), React.createElement("p", null, "A atividade nas pistas faz avan\xE7ar a miss\xE3o, que pode exigir a pintura equipada.")), React.createElement("li", null, React.createElement("div", {
    className: "journey-visual"
  }, React.createElement("svg", {
    className: "journey-trophy",
    viewBox: "0 0 100 100",
    "aria-hidden": "true"
  }, React.createElement("circle", {
    className: "trophy-ring",
    cx: "50",
    cy: "50",
    r: "37"
  }), React.createElement(Symbol, {
    kind: "trophy",
    x: 50,
    y: 50
  })), React.createElement("span", {
    className: "journey-caption"
  }, "Objetivo conclu\xEDdo")), React.createElement("span", {
    className: "sponsor-index"
  }, "04 / CONQUISTA"), React.createElement("h3", null, "Conclui e recebe"), React.createElement("p", null, "Ao cumprir as condi\xE7\xF5es, recebe a recompensa definida para aquele contrato."))), React.createElement("p", {
    className: "sponsor-diagram-note"
  }, "Representa\xE7\xE3o ilustrativa do fluxo. Requisitos, aplica\xE7\xF5es da marca e recompensas s\xE3o definidos para cada parceria.")));
}
function LogoGuide() {
  return React.createElement("section", {
    className: "sponsor-section sponsor-logo-guide",
    id: "preparar-logo",
    "aria-labelledby": "logo-title"
  }, React.createElement("div", {
    className: "sponsor-container sponsor-guide-grid"
  }, React.createElement("div", null, React.createElement("p", {
    className: "kicker"
  }, "03 / Como participar"), React.createElement("h2", {
    id: "logo-title"
  }, "Da identidade", React.createElement("br", null), "\xE0 textura."), React.createElement("p", null, "Empresas de qualquer segmento podem iniciar uma conversa. A equipe avalia como a identidade e o contexto da marca se encaixam no jogo."), React.createElement("p", null, "Por enquanto, o logo \xE9 enviado diretamente pelo WhatsApp.")), React.createElement("ol", {
    className: "sponsor-guide-details"
  }, React.createElement("li", null, React.createElement("span", null, "01"), React.createElement("div", null, React.createElement("h3", null, "Apresente sua empresa"), React.createElement("p", null, "Conte o que ela faz e com qual p\xFAblico gostaria de se conectar."))), React.createElement("li", null, React.createElement("span", null, "02"), React.createElement("div", null, React.createElement("h3", null, "Compartilhe o logo"), React.createElement("p", null, "Envie um PNG em alta resolu\xE7\xE3o, com fundo transparente, e as cores da marca. Se precisarmos de um arquivo vetorial, combinaremos depois."))), React.createElement("li", null, React.createElement("span", null, "03"), React.createElement("div", null, React.createElement("h3", null, "Converse sobre a aplica\xE7\xE3o"), React.createElement("p", null, "A equipe analisa o material para definir a proposta de pintura, a din\xE2mica e as condi\xE7\xF5es da parceria."))))));
}
function SponsorClosing() {
  return React.createElement("section", {
    className: "sponsor-closing",
    id: "contato",
    "aria-labelledby": "closing-title"
  }, React.createElement("div", {
    className: "sponsor-container sponsor-closing-inner"
  }, React.createElement("div", null, React.createElement("p", {
    className: "kicker"
  }, "Fale com a equipe"), React.createElement("h2", {
    id: "closing-title"
  }, "D\xFAvidas ou logo em m\xE3os?"), React.createElement("p", null, "A conversa come\xE7a pelo WhatsApp. Voc\xEA pode tirar d\xFAvidas e anexar o logo como arquivo na pr\xF3pria conversa."), React.createElement("small", null, "O envio \xE9 para avalia\xE7\xE3o. A cria\xE7\xE3o e a publica\xE7\xE3o dependem de acordo e aprova\xE7\xE3o da equipe.")), React.createElement("a", {
    className: "btn btn-primary",
    href: WHATSAPP_URL,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Conversar e enviar logo ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197"))));
}
function SponsorApp() {
  const [paused, setPaused] = React.useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  React.useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = event => setPaused(event.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  return React.createElement("div", {
    className: "page sponsor-page",
    "data-motion": paused ? 'paused' : 'playing'
  }, React.createElement(SponsorHeader, null), React.createElement("main", null, React.createElement(SponsorHero, {
    paused: paused,
    onToggleMotion: () => setPaused(value => !value)
  }), React.createElement(Benefits, null), React.createElement(GameDynamics, null), React.createElement(LogoGuide, null), React.createElement(SponsorClosing, null)), React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "footer-inner"
  }, React.createElement("a", {
    href: "/",
    "aria-label": "Autorama Racing \u2014 p\xE1gina inicial"
  }, React.createElement("img", {
    src: "/autorama_white.png",
    alt: ""
  })), React.createElement("p", {
    className: "footer-note"
  }, "Autorama Racing \xB7 Jogo em desenvolvimento"))));
}
export default SponsorApp;
