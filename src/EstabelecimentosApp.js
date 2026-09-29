// Generated from EstabelecimentosApp.jsx by scripts/compile-jsx.mjs.
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WHATSAPP_NUMBER = '5521980468888';
const TOTAL_SHARES = 800000;
const PLACES = [{
  id: 'pista',
  name: 'Pista',
  phase: 'Early Access',
  icon: 'flag',
  image: '/assets/gameplay/autorama-gameplay-20260917.webp',
  tagline: 'Onde as corridas acontecem.',
  items: ['O criador da corrida multiplayer define a inscrição', 'O vencedor leva o total, menos a taxa de 5%', 'A taxa entra na economia dos estabelecimentos']
}, {
  id: 'paint',
  name: 'Paint Shop',
  phase: 'Early Access',
  icon: 'paint',
  image: '/universo-montando-carro.jpg',
  tagline: 'Onde os carros ganham identidade.',
  items: ['Venda de pinturas', 'Venda de peças estéticas e bodykits', 'Taxa para aplicar ou trocar itens, inclusive pinturas de patrocinadores']
}, {
  id: 'mecanica',
  name: 'Mecânica',
  phase: 'Pré-Alfa',
  icon: 'wrench',
  image: '/universo-mecanica.jpg',
  tagline: 'Onde os carros voltam para a pista.',
  items: ['Conserto de carros danificados', 'Venda de rodas e pneus', 'Melhorias de desempenho, algumas em AutoCash']
}, {
  id: 'posto',
  name: 'Posto',
  phase: 'Pré-Alfa',
  icon: 'fuel',
  image: '/universo-posto.jpg',
  tagline: 'Onde cada corrida começa.',
  items: ['Combustível', 'Lubrificantes, óleos e aditivos', 'Outros itens de manutenção']
}];
const fmt = value => Math.round(value).toLocaleString('pt-BR');
const contactUrl = place => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero entrar na lista da pré-venda das ações dos estabelecimentos do Autorama Racing${place ? `. Tenho interesse na ${place.name}` : ''}.`)}`;
const Motion = React.createContext(false);
const usePaused = () => React.useContext(Motion);
function useInView(options = {
  threshold: 0.3
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}
function CountUp({
  value,
  duration = 1400
}) {
  const paused = usePaused();
  const [ref, inView] = useInView();
  const [shown, setShown] = React.useState(paused ? value : 0);
  const from = React.useRef(0);
  React.useEffect(() => {
    if (!inView) return;
    if (paused) {
      setShown(value);
      from.current = value;
      return;
    }
    const start = performance.now();
    const origin = from.current;
    let frame;
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(origin + (value - origin) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);else from.current = value;
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      from.current = value;
    };
  }, [value, inView, paused]);
  return React.createElement("span", {
    ref: ref
  }, fmt(shown));
}
function Icon({
  name,
  ...props
}) {
  const paths = {
    arrow: React.createElement("path", {
      d: "M5 12h14m-6-6 6 6-6 6"
    }),
    check: React.createElement("path", {
      d: "m5 12 4 4L19 6"
    }),
    x: React.createElement("path", {
      d: "M6 6l12 12M18 6 6 18"
    }),
    paint: React.createElement("path", {
      d: "m14 3 7 7-9 9-7-7zM5 12 3 14v7h7l2-2M14 7l3 3"
    }),
    wrench: React.createElement("path", {
      d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4Z"
    }),
    fuel: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M7 8h5"
    }), React.createElement("path", {
      d: "M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"
    })),
    flag: React.createElement("path", {
      d: "M5 21V3m0 1c5-4 9 4 14 0v10c-5 4-9-4-14 0"
    }),
    people: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "3"
    }), React.createElement("path", {
      d: "M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"
    })),
    coin: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), React.createElement("path", {
      d: "M9 15l3-7 3 7m-5-2h4"
    })),
    pool: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 12h18M5 12v7h14v-7M8 12V8a4 4 0 0 1 8 0v4"
    })),
    user: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), React.createElement("path", {
      d: "M4 21a8 8 0 0 1 16 0"
    })),
    store: React.createElement("path", {
      d: "M3 9 5 3h14l2 6M3 9h18v12H3ZM9 21v-6h6v6"
    }),
    swap: React.createElement("path", {
      d: "M4 8h14l-4-4m6 12H6l4 4"
    }),
    chat: React.createElement("path", {
      d: "M21 11a9 9 0 0 1-9 9H4l-2 2v-11a9 9 0 0 1 19 0Z"
    })
  };
  return React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, props), paths[name] || paths.flag);
}
function Contact({
  place,
  children = 'Entrar na pré-venda',
  className = 'btn btn-primary btn-cta'
}) {
  return React.createElement("a", {
    className: className,
    href: contactUrl(place),
    target: "_blank",
    rel: "noopener noreferrer"
  }, children, React.createElement("span", {
    "aria-hidden": "true"
  }, "\xBB"));
}
function Heading({
  kicker,
  title,
  children
}) {
  return React.createElement("div", {
    className: "est-heading"
  }, React.createElement("div", null, React.createElement("p", {
    className: "kicker"
  }, kicker), React.createElement("h2", null, title)), children && React.createElement("p", null, children));
}
const NAV = [['Como funciona', '#como-funciona'], ['Estabelecimentos', '#estabelecimentos'], ['Ciclo', '#ciclo'], ['Dividendos', '#dividendos'], ['Marketplace', '#marketplace'], ['Dúvidas', '#duvidas']];
function Header() {
  const menu = React.useRef(null);
  return React.createElement("header", {
    className: "site-header est-header"
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
    className: "est-nav",
    "aria-label": "Principal"
  }, NAV.map(([label, href]) => React.createElement("a", {
    key: href,
    href: href
  }, label))), React.createElement(Contact, {
    className: "btn btn-primary btn-sm est-header-cta"
  }), React.createElement("details", {
    ref: menu,
    className: "est-menu"
  }, React.createElement("summary", null, "Menu ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2630")), React.createElement("nav", {
    "aria-label": "Menu mobile"
  }, NAV.map(([label, href]) => React.createElement("a", {
    key: href,
    href: href,
    onClick: () => {
      menu.current.open = false;
    }
  }, label)), React.createElement("a", {
    href: "/"
  }, "Pacotes de fundador")))));
}
const NODES = [{
  id: 'pista',
  label: 'Pista',
  icon: 'flag',
  x: 260,
  y: 72
}, {
  id: 'paint',
  label: 'Paint Shop',
  icon: 'paint',
  x: 448,
  y: 260
}, {
  id: 'mecanica',
  label: 'Mecânica',
  icon: 'wrench',
  x: 260,
  y: 448
}, {
  id: 'posto',
  label: 'Posto',
  icon: 'fuel',
  x: 72,
  y: 260
}];
function EconomyOrbit() {
  const paused = usePaused();
  const svg = React.useRef(null);
  React.useEffect(() => {
    const node = svg.current;
    if (!node || !node.pauseAnimations) return;
    if (paused) node.pauseAnimations();else node.unpauseAnimations();
  }, [paused]);
  const toCenter = node => `M${node.x} ${node.y}L260 260`;
  return React.createElement("figure", {
    className: "est-orbit",
    "aria-label": "Ilustra\xE7\xE3o: o AutoGold gasto na Pista, no Paint Shop, na Mec\xE2nica e no Posto forma um pool dividido entre os detentores de a\xE7\xF5es"
  }, React.createElement("svg", {
    ref: svg,
    viewBox: "0 0 520 540",
    role: "presentation"
  }, React.createElement("defs", null, React.createElement("radialGradient", {
    id: "est-coin",
    cx: "35%",
    cy: "35%",
    r: "70%"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#fff6c9"
  }), React.createElement("stop", {
    offset: ".45",
    stopColor: "#efc04d"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#9a6a12"
  })), React.createElement("radialGradient", {
    id: "est-pool",
    cx: "50%",
    cy: "50%",
    r: "60%"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "rgba(239,192,77,.45)"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "rgba(239,192,77,0)"
  }))), React.createElement("g", {
    className: "est-orbit-ring"
  }, React.createElement("circle", {
    cx: "260",
    cy: "260",
    r: "188"
  })), React.createElement("circle", {
    className: "est-orbit-ring-soft",
    cx: "260",
    cy: "260",
    r: "140"
  }), NODES.map(node => React.createElement("path", {
    key: node.id,
    className: "est-orbit-link",
    d: toCenter(node)
  })), React.createElement("path", {
    className: "est-orbit-link is-out",
    d: "M260 260L430 470"
  }), React.createElement("circle", {
    cx: "260",
    cy: "260",
    r: "92",
    fill: "url(#est-pool)",
    className: "est-orbit-glow"
  }), NODES.map((node, i) => [0, 1].map(k => React.createElement("circle", {
    key: `${node.id}-${k}`,
    r: "8",
    fill: "url(#est-coin)",
    className: "est-coin"
  }, React.createElement("animateMotion", {
    dur: "2.4s",
    begin: `-${i * 0.6 + k * 1.2}s`,
    repeatCount: "indefinite",
    path: toCenter(node),
    keyPoints: "0;1",
    keyTimes: "0;1",
    calcMode: "linear"
  })))), [0, 1, 2].map(k => React.createElement("circle", {
    key: `out-${k}`,
    r: "9",
    fill: "url(#est-coin)",
    className: "est-coin"
  }, React.createElement("animateMotion", {
    dur: "2.1s",
    begin: `-${k * 0.7}s`,
    repeatCount: "indefinite",
    path: "M260 260L430 470"
  }))), React.createElement("g", {
    className: "est-orbit-pool"
  }, React.createElement("circle", {
    cx: "260",
    cy: "260",
    r: "58"
  }), React.createElement("text", {
    x: "260",
    y: "252",
    textAnchor: "middle",
    className: "est-orbit-pool-title"
  }, "POOL"), React.createElement("text", {
    x: "260",
    y: "272",
    textAnchor: "middle",
    className: "est-orbit-pool-sub"
  }, "dos detentores")), NODES.map((node, i) => React.createElement("g", {
    key: node.id,
    className: "est-orbit-node",
    style: {
      animationDelay: `${i * 0.6}s`
    }
  }, React.createElement("circle", {
    cx: node.x,
    cy: node.y,
    r: "42"
  }), React.createElement("svg", {
    x: node.x - 13,
    y: node.y - 22,
    width: "26",
    height: "26",
    viewBox: "0 0 24 24"
  }, React.createElement(Icon, {
    name: node.icon
  })), React.createElement("text", {
    x: node.x,
    y: node.y + 22,
    textAnchor: "middle"
  }, node.label))), React.createElement("g", {
    className: "est-orbit-you"
  }, React.createElement("rect", {
    x: "378",
    y: "468",
    width: "124",
    height: "48",
    rx: "8"
  }), React.createElement("text", {
    x: "440",
    y: "489",
    textAnchor: "middle",
    className: "est-orbit-you-title"
  }, "VOC\xCA"), React.createElement("text", {
    x: "440",
    y: "506",
    textAnchor: "middle",
    className: "est-orbit-you-sub"
  }, "recebe em AutoGold"))));
}
function Hero({
  paused,
  toggle
}) {
  return React.createElement("section", {
    className: "est-hero"
  }, React.createElement("div", {
    className: "est-hero-bg",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "est-hero-grid-lines"
  })), React.createElement("div", {
    className: "est-shell est-hero-layout"
  }, React.createElement("div", {
    className: "est-hero-copy"
  }, React.createElement("p", {
    className: "kicker"
  }, "A\xE7\xF5es dos estabelecimentos \xB7 Pr\xE9-venda"), React.createElement("h1", {
    className: "est-hero-title"
  }, React.createElement("span", null, "Seja dono"), React.createElement("span", null, "da economia"), React.createElement("span", {
    className: "accent"
  }, "da pista.")), React.createElement("p", {
    className: "est-hero-lead"
  }, "A\xE7\xF5es s\xE3o itens virtuais ligados aos estabelecimentos do Autorama. Quando os pilotos correm, abastecem, consertam e customizam, parte do AutoGold movimentado \xE9 dividida entre quem tem a\xE7\xF5es daquele estabelecimento."), React.createElement("div", {
    className: "est-hero-actions"
  }, React.createElement(Contact, null), React.createElement("a", {
    href: "#como-funciona",
    className: "text-link"
  }, "Entenda em 1 minuto ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A")))), React.createElement(EconomyOrbit, null)), React.createElement("div", {
    className: "est-shell est-hero-bottom"
  }, React.createElement("ul", {
    className: "est-strip",
    "aria-label": "Destaques"
  }, React.createElement("li", null, React.createElement("strong", null, React.createElement(CountUp, {
    value: TOTAL_SHARES
  })), React.createElement("span", null, "a\xE7\xF5es no total, oferta limitada")), React.createElement("li", null, React.createElement("strong", null, "4"), React.createElement("span", null, "estabelecimentos no jogo")), React.createElement("li", null, React.createElement("strong", null, "AG"), React.createElement("span", null, "dividendos pagos em AutoGold"))), React.createElement("button", {
    type: "button",
    className: "est-motion-toggle",
    "aria-pressed": paused,
    onClick: toggle
  }, React.createElement("span", {
    "aria-hidden": "true"
  }, paused ? '▷' : 'Ⅱ'), paused ? 'Retomar animações' : 'Pausar animações')));
}
const FLOW = [['people', 'Os pilotos jogam', 'Correm, abastecem, consertam e customizam seus carros.'], ['store', 'O estabelecimento movimenta', 'Inscrições, serviços e vendas geram AutoGold em cada casa.'], ['pool', 'Uma parte forma o pool', 'A parcela destinada aos detentores é separada todo mês.'], ['coin', 'Você recebe a sua parte', 'Proporcional às ações que você tem, em AutoGold.']];
function Flow() {
  return React.createElement("section", {
    id: "como-funciona",
    className: "est-section"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement(Heading, {
    kicker: "01 / Como funciona",
    title: React.createElement(React.Fragment, null, "O AutoGold vem", React.createElement("br", null), React.createElement("em", null, "de quem joga."))
  }, "N\xE3o \xE9 a Horse Power pagando rendimento.", React.createElement("br", null), "\xC9 o AutoGold que j\xE1 circula no jogo, redistribu\xEDdo."), React.createElement("ol", {
    className: "est-flow"
  }, React.createElement("span", {
    className: "est-flow-track",
    "aria-hidden": "true"
  }, React.createElement("i", null)), FLOW.map(([icon, title, text], i) => React.createElement("li", {
    key: title,
    style: {
      '--i': i
    }
  }, React.createElement("span", {
    className: "est-flow-icon"
  }, React.createElement(Icon, {
    name: icon
  }), React.createElement("b", null, "0", i + 1)), React.createElement("h3", null, title), React.createElement("p", null, text))))));
}
function PistaDemo() {
  return React.createElement("div", {
    className: "est-demo est-demo-pista"
  }, React.createElement("p", {
    className: "est-demo-title"
  }, "Corrida com 10 pilotos \xB7 inscri\xE7\xE3o de 1.000 AG"), React.createElement("div", {
    className: "est-chips",
    "aria-hidden": "true"
  }, Array.from({
    length: 10
  }, (_, i) => React.createElement("span", {
    key: i,
    style: {
      '--i': i
    }
  }, "1.000"))), React.createElement("div", {
    className: "est-split",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "is-prize"
  }, "9.500 AG \xB7 pr\xEAmio do vencedor"), React.createElement("span", {
    className: "is-fee"
  }, "5%")), React.createElement("p", {
    className: "est-demo-result"
  }, React.createElement("strong", null, "500 AG"), " de taxa entram na economia dos estabelecimentos."));
}
function PaintDemo() {
  return React.createElement("div", {
    className: "est-demo est-demo-paint"
  }, React.createElement("p", {
    className: "est-demo-title"
  }, "Troca de pintura de patrocinador \xB7 200 AG"), React.createElement("div", {
    className: "est-paint-car",
    "aria-hidden": "true"
  }, React.createElement("img", {
    src: "/assets/hero/hero-car-red.webp",
    alt: "",
    loading: "lazy"
  }), React.createElement("span", {
    className: "est-paint-sweep"
  })), React.createElement("p", {
    className: "est-demo-equation"
  }, "20.000 pilotos \xD7 2 servi\xE7os \xD7 200 AG ="), React.createElement("p", {
    className: "est-demo-result"
  }, React.createElement("strong", null, React.createElement(CountUp, {
    value: 8000000
  }), " AG"), " de movimenta\xE7\xE3o, al\xE9m da venda das pinturas."));
}
const WEAR = ['Correr', 'Desgaste', 'Mecânica', 'Nova corrida'];
function MecanicaDemo() {
  const paused = usePaused();
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setStep(value => (value + 1) % WEAR.length), 1100);
    return () => clearInterval(timer);
  }, [paused]);
  const condition = [90, 35, 35, 100][step];
  return React.createElement("div", {
    className: "est-demo est-demo-mecanica"
  }, React.createElement("p", {
    className: "est-demo-title"
  }, "O ciclo de manuten\xE7\xE3o"), React.createElement("ol", {
    className: "est-wear-steps"
  }, WEAR.map((label, i) => React.createElement("li", {
    key: label,
    className: i === step ? 'is-active' : ''
  }, label))), React.createElement("div", {
    className: "est-meter",
    "aria-hidden": "true"
  }, React.createElement("span", null, "Condi\xE7\xE3o do carro"), React.createElement("div", null, React.createElement("i", {
    style: {
      width: `${condition}%`
    },
    className: condition < 50 ? 'is-low' : ''
  }))), React.createElement("p", {
    className: "est-demo-result"
  }, "Quanto mais os carros correm, ", React.createElement("strong", null, "maior a demanda"), " pela Mec\xE2nica."));
}
function PostoDemo() {
  const paused = usePaused();
  const [lap, setLap] = React.useState(0);
  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setLap(value => value >= 24 ? 0 : value + 1), 180);
    return () => clearInterval(timer);
  }, [paused]);
  const refuel = lap > 20;
  const fuel = refuel ? 100 : 100 - lap * 5;
  return React.createElement("div", {
    className: "est-demo est-demo-posto"
  }, React.createElement("p", {
    className: "est-demo-title"
  }, "Combust\xEDvel \xB7 200 AG para cerca de 20 corridas"), React.createElement("div", {
    className: "est-fuel",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "est-fuel-bar"
  }, React.createElement("i", {
    style: {
      height: `${fuel}%`
    },
    className: fuel < 25 ? 'is-low' : ''
  })), React.createElement("div", {
    className: "est-fuel-read"
  }, React.createElement("span", null, "Corrida"), React.createElement("strong", null, refuel ? 20 : lap, React.createElement("small", null, "/20")), React.createElement("em", {
    className: refuel ? 'is-on' : ''
  }, "Abastecer \xB7 200 AG"))), React.createElement("p", {
    className: "est-demo-result"
  }, "Mais corridas, ", React.createElement("strong", null, "mais abastecimentos"), " no Posto."));
}
const DEMOS = {
  pista: PistaDemo,
  paint: PaintDemo,
  mecanica: MecanicaDemo,
  posto: PostoDemo
};
function Places({
  place,
  onPlace
}) {
  const Demo = DEMOS[place.id];
  return React.createElement("section", {
    id: "estabelecimentos",
    className: "est-section est-places-section"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement(Heading, {
    kicker: "02 / Os estabelecimentos",
    title: React.createElement(React.Fragment, null, "Quatro neg\xF3cios.", React.createElement("br", null), React.createElement("em", null, "Uma economia."))
  }, "Cada casa gera atividade de um jeito.", React.createElement("br", null), "Escolha uma para ver o exemplo."), React.createElement("div", {
    className: "est-tabs",
    role: "tablist",
    "aria-label": "Estabelecimentos"
  }, PLACES.map(item => React.createElement("button", {
    type: "button",
    role: "tab",
    key: item.id,
    id: `tab-${item.id}`,
    "aria-selected": place.id === item.id,
    "aria-controls": "est-place-panel",
    className: place.id === item.id ? 'is-active' : '',
    onClick: () => onPlace(item)
  }, React.createElement(Icon, {
    name: item.icon
  }), React.createElement("span", null, item.name), React.createElement("small", null, item.phase)))), React.createElement("div", {
    id: "est-place-panel",
    className: "est-place-panel",
    role: "tabpanel",
    "aria-labelledby": `tab-${place.id}`,
    key: place.id
  }, React.createElement("figure", {
    className: "est-place-media"
  }, React.createElement("img", {
    src: place.image,
    alt: `Cena do universo Autorama Racing: ${place.name}`,
    loading: "lazy",
    width: "800",
    height: "450"
  }), React.createElement("figcaption", null, React.createElement("span", {
    className: `est-phase ${place.phase === 'Early Access' ? 'is-now' : ''}`
  }, place.phase === 'Early Access' ? 'Previsto no Early Access' : 'Previsto na Pré-Alfa'), React.createElement("strong", null, place.name), React.createElement("em", null, place.tagline))), React.createElement("div", {
    className: "est-place-info"
  }, React.createElement("h3", null, "De onde vem a atividade"), React.createElement("ul", null, place.items.map(text => React.createElement("li", {
    key: text
  }, React.createElement(Icon, {
    name: "check"
  }), text))), React.createElement(Demo, null), React.createElement("p", {
    className: "est-note"
  }, "Valores de exemplo dos documentos de design do jogo. Podem mudar at\xE9 o lan\xE7amento.")))));
}
const TRACK = 'M320 50A250 140 0 0 1 570 190A250 140 0 0 1 320 330A250 140 0 0 1 70 190A250 140 0 0 1 320 50';
const STOPS = [{
  name: 'Pista',
  text: 'Corre e disputa inscrições.',
  x: 320,
  y: 50,
  lx: 320,
  ly: 18
}, {
  name: 'Posto',
  text: 'Abastece para a próxima corrida.',
  x: 570,
  y: 190,
  lx: 612,
  ly: 150
}, {
  name: 'Mecânica',
  text: 'Conserta o desgaste do carro.',
  x: 320,
  y: 330,
  lx: 320,
  ly: 374
}, {
  name: 'Paint Shop',
  text: 'Instala a pintura do patrocinador.',
  x: 70,
  y: 190,
  lx: 28,
  ly: 150
}];
function Cycle() {
  const paused = usePaused();
  const path = React.useRef(null);
  const car = React.useRef(null);
  const progress = React.useRef(0);
  const [stop, setStop] = React.useState(0);
  const [laps, setLaps] = React.useState(0);
  React.useEffect(() => {
    const track = path.current;
    const length = track.getTotalLength();
    const place = t => {
      const a = track.getPointAtLength(t * length);
      const b = track.getPointAtLength((t + 0.002) % 1 * length);
      const angle = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
      car.current.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${angle})`);
      setStop(Math.floor((t + 0.06) % 1 * 4));
    };
    place(progress.current);
    if (paused) return;
    let frame;
    let last = performance.now();
    const tick = now => {
      const next = progress.current + (now - last) / 9000;
      if (next >= 1) setLaps(value => value + 1);
      progress.current = next % 1;
      last = now;
      place(progress.current);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);
  return React.createElement("section", {
    id: "ciclo",
    className: "est-section est-cycle-section"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement(Heading, {
    kicker: "03 / O ciclo",
    title: React.createElement(React.Fragment, null, "Uma volta no autorama", React.createElement("br", null), React.createElement("em", null, "movimenta todos."))
  }, "Os estabelecimentos est\xE3o ligados ao gameplay.", React.createElement("br", null), "Cada corrida puxa a pr\xF3xima parada."), React.createElement("div", {
    className: "est-cycle"
  }, React.createElement("figure", {
    className: "est-track",
    "aria-label": "Ilustra\xE7\xE3o: um carro percorre a pista passando por Pista, Posto, Mec\xE2nica e Paint Shop"
  }, React.createElement("svg", {
    viewBox: "0 0 640 400"
  }, React.createElement("path", {
    d: TRACK,
    className: "est-track-road"
  }), React.createElement("path", {
    d: TRACK,
    className: "est-track-curb"
  }), React.createElement("path", {
    d: "M320 64A236 126 0 0 1 556 190A236 126 0 0 1 320 316A236 126 0 0 1 84 190A236 126 0 0 1 320 64",
    className: "est-track-slot"
  }), React.createElement("path", {
    d: "M320 36A264 154 0 0 1 584 190A264 154 0 0 1 320 344A264 154 0 0 1 56 190A264 154 0 0 1 320 36",
    className: "est-track-slot"
  }), React.createElement("path", {
    ref: path,
    d: TRACK,
    fill: "none",
    stroke: "none"
  }), STOPS.map((item, i) => React.createElement("g", {
    key: item.name,
    className: `est-stop ${stop === i ? 'is-active' : ''}`
  }, React.createElement("circle", {
    cx: item.x,
    cy: item.y,
    r: "15"
  }), React.createElement("text", {
    x: item.lx,
    y: item.ly,
    textAnchor: "middle"
  }, item.name))), React.createElement("g", {
    ref: car,
    className: "est-track-car"
  }, React.createElement("rect", {
    x: "-17",
    y: "-9",
    width: "34",
    height: "18",
    rx: "6"
  }), React.createElement("rect", {
    x: "-2",
    y: "-7",
    width: "9",
    height: "14",
    rx: "2",
    className: "est-track-glass"
  }), React.createElement("rect", {
    x: "-17",
    y: "-2",
    width: "34",
    height: "4",
    className: "est-track-stripe"
  })), React.createElement("text", {
    x: "320",
    y: "178",
    textAnchor: "middle",
    className: "est-track-center-kicker"
  }, "PARADA ATUAL"), React.createElement("text", {
    x: "320",
    y: "210",
    textAnchor: "middle",
    className: "est-track-center-title"
  }, STOPS[stop].name), React.createElement("text", {
    x: "320",
    y: "236",
    textAnchor: "middle",
    className: "est-track-center-sub"
  }, `Voltas: ${laps}`))), React.createElement("ol", {
    className: "est-cycle-list"
  }, STOPS.map((item, i) => React.createElement("li", {
    key: item.name,
    className: stop === i ? 'is-active' : ''
  }, React.createElement("span", null, "0", i + 1), React.createElement("div", null, React.createElement("strong", null, item.name), React.createElement("p", null, item.text)))))), React.createElement("p", {
    className: "est-sponsor-note"
  }, React.createElement(Icon, {
    name: "paint"
  }), "Patroc\xEDnio acelera o ciclo: o piloto recebe a pintura da marca, instala no Paint Shop e corre para cumprir a miss\xE3o.")));
}
function Simulator() {
  const [mine, setMine] = React.useState(1000);
  const [total, setTotal] = React.useState(200000);
  const [pool, setPool] = React.useState(1000000);
  const share = mine / total;
  const result = pool * share;
  const angle = Math.max(share * 360, 1.5);
  return React.createElement("section", {
    id: "dividendos",
    className: "est-section est-sim-section"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement(Heading, {
    kicker: "04 / Dividendos",
    title: React.createElement(React.Fragment, null, "Sua parte \xE9", React.createElement("br", null), React.createElement("em", null, "proporcional."))
  }, "Mova os controles e veja a regra funcionando.", React.createElement("br", null), "Todos os n\xFAmeros s\xE3o hipot\xE9ticos."), React.createElement("div", {
    className: "est-sim"
  }, React.createElement("div", {
    className: "est-sim-controls"
  }, React.createElement("label", null, React.createElement("span", null, "Suas a\xE7\xF5es ", React.createElement("b", null, fmt(mine))), React.createElement("input", {
    type: "range",
    min: "100",
    max: "20000",
    step: "100",
    value: mine,
    onChange: event => setMine(Number(event.target.value))
  })), React.createElement("label", null, React.createElement("span", null, "A\xE7\xF5es do estabelecimento ", React.createElement("b", null, fmt(total))), React.createElement("input", {
    type: "range",
    min: "50000",
    max: "400000",
    step: "10000",
    value: total,
    onChange: event => setTotal(Math.max(Number(event.target.value), mine))
  })), React.createElement("label", null, React.createElement("span", null, "AutoGold para os detentores no m\xEAs ", React.createElement("b", null, fmt(pool), " AG")), React.createElement("input", {
    type: "range",
    min: "100000",
    max: "10000000",
    step: "100000",
    value: pool,
    onChange: event => setPool(Number(event.target.value))
  })), React.createElement("p", {
    className: "est-sim-formula"
  }, fmt(pool), " AG \xD7 (", fmt(mine), " \xF7 ", fmt(total), ") = ", React.createElement("strong", null, fmt(result), " AG"))), React.createElement("div", {
    className: "est-sim-out"
  }, React.createElement("div", {
    className: "est-donut",
    style: {
      '--angle': `${angle}deg`
    },
    "aria-hidden": "true"
  }, React.createElement("div", null, React.createElement("strong", null, (share * 100).toLocaleString('pt-BR', {
    maximumFractionDigits: 2
  }), "%"), React.createElement("span", null, "das a\xE7\xF5es"))), React.createElement("p", {
    className: "est-sim-result"
  }, React.createElement("span", null, "Sua parte no m\xEAs"), React.createElement("strong", null, React.createElement(CountUp, {
    value: result,
    duration: 600
  }), " AG")))), React.createElement("ul", {
    className: "est-sim-notes"
  }, React.createElement("li", null, "A distribui\xE7\xE3o \xE9 mensal e proporcional \xE0s a\xE7\xF5es de cada estabelecimento."), React.createElement("li", null, "O valor muda todo m\xEAs: sobe quando a atividade cresce e cai quando ela diminui. Pode ser zero."), React.createElement("li", null, "O percentual destinado aos detentores ser\xE1 publicado antes da abertura da pr\xE9-venda."))));
}
function Marketplace() {
  return React.createElement("section", {
    id: "marketplace",
    className: "est-section est-market-section"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement(Heading, {
    kicker: "05 / Marketplace",
    title: React.createElement(React.Fragment, null, "Sua a\xE7\xE3o pode", React.createElement("br", null), React.createElement("em", null, "trocar de garagem."))
  }, "Previsto para a Pr\xE9-Alfa: jogadores negociam", React.createElement("br", null), "a\xE7\xF5es entre si, sem recompra da Horse Power."), React.createElement("div", {
    className: "est-market"
  }, React.createElement("div", {
    className: "est-market-lane",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "est-market-line"
  }), React.createElement("span", {
    className: "est-market-token"
  }, React.createElement(Icon, {
    name: "store"
  }), "A\xC7\xC3O \xB7 PAINT SHOP"), React.createElement("span", {
    className: "est-market-fee"
  }, "taxa de 5%")), React.createElement("ol", {
    className: "est-market-nodes"
  }, React.createElement("li", null, React.createElement("span", null, React.createElement(Icon, {
    name: "store"
  })), React.createElement("strong", null, "Venda inicial"), React.createElement("p", null, "A Horse Power vende a a\xE7\xE3o no lan\xE7amento.")), React.createElement("li", null, React.createElement("span", null, React.createElement(Icon, {
    name: "user"
  })), React.createElement("strong", null, "Jogador A"), React.createElement("p", null, "Recebe os dividendos enquanto tiver a a\xE7\xE3o.")), React.createElement("li", null, React.createElement("span", null, React.createElement(Icon, {
    name: "user"
  })), React.createElement("strong", null, "Jogador B"), React.createElement("p", null, "Compra no marketplace e passa a receber os pr\xF3ximos."))), React.createElement("div", {
    className: "est-market-prices",
    "aria-hidden": "true"
  }, React.createElement("span", null, "700 AG"), React.createElement("span", null, "1.000 AG"), React.createElement("span", null, "1.500 AG"), React.createElement("span", null, "2.000 AG")), React.createElement("p", {
    className: "est-market-caption"
  }, React.createElement(Icon, {
    name: "swap"
  }), "O pre\xE7o \xE9 definido entre os jogadores. N\xE3o h\xE1 garantia de valoriza\xE7\xE3o nem de comprador."))));
}
const PHASES = [{
  name: 'Early Access',
  tag: 'Primeira fase',
  items: ['Pista', 'Paint Shop', 'Venda das ações dos estabelecimentos']
}, {
  name: 'Pré-Alfa',
  tag: 'Fase seguinte',
  items: ['Mecânica', 'Posto', 'Marketplace de ações']
}];
function Roadmap() {
  return React.createElement("section", {
    className: "est-section est-roadmap-section"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement(Heading, {
    kicker: "06 / Roadmap",
    title: React.createElement(React.Fragment, null, "O que vem", React.createElement("br", null), React.createElement("em", null, "em cada fase."))
  }, "O ecossistema completo chega por etapas."), React.createElement("ol", {
    className: "est-roadmap"
  }, PHASES.map((phase, i) => React.createElement("li", {
    key: phase.name,
    className: i === 0 ? 'is-first' : ''
  }, React.createElement("span", {
    className: "est-roadmap-dot",
    "aria-hidden": "true"
  }), React.createElement("small", null, phase.tag), React.createElement("h3", null, phase.name), React.createElement("ul", null, phase.items.map(item => React.createElement("li", {
    key: item
  }, React.createElement(Icon, {
    name: "check"
  }), item))))))));
}
function Clarity() {
  return React.createElement("section", {
    className: "est-section est-clarity"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement(Heading, {
    kicker: "07 / Sem letra mi\xFAda",
    title: "O que \xE9 uma a\xE7\xE3o no Autorama."
  }, "Transpar\xEAncia antes da largada."), React.createElement("div", {
    className: "est-clarity-grid"
  }, React.createElement("div", {
    className: "is-yes"
  }, React.createElement("h3", null, "\xC9"), React.createElement("ul", null, React.createElement("li", null, React.createElement(Icon, {
    name: "check"
  }), "Um item virtual colecion\xE1vel ligado a um estabelecimento do jogo"), React.createElement("li", null, React.createElement(Icon, {
    name: "check"
  }), "Uma parte proporcional do AutoGold destinado aos detentores"), React.createElement("li", null, React.createElement(Icon, {
    name: "check"
  }), "Negoci\xE1vel entre jogadores quando o marketplace for lan\xE7ado"))), React.createElement("div", {
    className: "is-no"
  }, React.createElement("h3", null, "N\xE3o \xE9"), React.createElement("ul", null, React.createElement("li", null, React.createElement(Icon, {
    name: "x"
  }), "A\xE7\xE3o ou participa\xE7\xE3o na Horse Power Studio"), React.createElement("li", null, React.createElement(Icon, {
    name: "x"
  }), "Dinheiro: AutoGold n\xE3o pode ser sacado nem convertido em reais"), React.createElement("li", null, React.createElement(Icon, {
    name: "x"
  }), "Garantia de dividendos, de valoriza\xE7\xE3o ou de comprador"))))));
}
const FAQ = [['O que é uma ação no Autorama?', 'Um item virtual colecionável ligado a um estabelecimento do jogo. Não é ação da Horse Power Studio nem participação em empresa.'], ['De onde vem o AutoGold dos dividendos?', 'Da atividade dos jogadores nos estabelecimentos: inscrições, serviços, peças e combustível. É AutoGold que já circula no jogo, redistribuído de forma proporcional. Não é dinheiro colocado pela Horse Power.'], ['Quanto vou receber?', 'Depende da atividade do estabelecimento no mês e de quantas ações você tem. O valor pode subir, cair ou ser zero. O percentual destinado aos detentores será publicado antes da pré-venda.'], ['Posso sacar os dividendos?', 'Não. AutoGold é a moeda do jogo. Ele serve para itens, serviços e produtos de parceiros, e não pode ser sacado nem convertido em dinheiro.'], ['Posso vender minhas ações?', 'O marketplace de ações está previsto para a Pré-Alfa. Quando lançado, o preço será combinado entre jogadores, com taxa de 5%. Não há garantia de comprador nem de preço.'], ['Quantas ações existem?', `${fmt(TOTAL_SHARES)} no total, somando todos os estabelecimentos. A quantidade de cada um e o preço de lançamento serão publicados antes da pré-venda.`], ['Quais estabelecimentos chegam primeiro?', 'O roadmap do Early Access inclui a Pista e o Paint Shop. Mecânica, Posto e marketplace de ações estão previstos para a Pré-Alfa.'], ['Como entro na pré-venda?', 'Fale com o time pelo WhatsApp e entre na lista. Quem estiver na lista recebe primeiro as condições de lançamento.']];
function Faq() {
  return React.createElement("section", {
    id: "duvidas",
    className: "est-section est-faq"
  }, React.createElement("div", {
    className: "est-shell",
    "data-reveal": true
  }, React.createElement("div", {
    className: "est-heading"
  }, React.createElement("div", null, React.createElement("p", {
    className: "kicker"
  }, "08 / Antes da largada"), React.createElement("h2", null, "Perguntas frequentes.")), React.createElement("a", {
    className: "text-link",
    href: contactUrl(),
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Tire suas d\xFAvidas com o time ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A"))), React.createElement("div", {
    className: "est-faq-grid"
  }, FAQ.map(([question, answer]) => React.createElement("details", {
    key: question
  }, React.createElement("summary", null, question, React.createElement("span", {
    "aria-hidden": "true"
  }, "+")), React.createElement("p", null, answer))))));
}
function Closing({
  place
}) {
  return React.createElement("section", {
    className: "est-closing"
  }, React.createElement("div", {
    className: "est-shell est-closing-inner",
    "data-reveal": true
  }, React.createElement("div", null, React.createElement("p", {
    className: "kicker"
  }, "Pr\xE9-venda"), React.createElement("h2", null, "Garanta seu lugar", React.createElement("br", null), React.createElement("em", null, "na primeira emiss\xE3o.")), React.createElement("p", null, "Antes da abertura, publicamos a quantidade de a\xE7\xF5es por estabelecimento, o pre\xE7o de lan\xE7amento, o percentual distribu\xEDdo e as regras do marketplace.")), React.createElement("div", {
    className: "est-closing-action"
  }, React.createElement(Contact, {
    place: place
  }, "Entrar na lista \xB7 ", place.name), React.createElement("span", null, "A conversa come\xE7a pelo WhatsApp."))));
}
function StickyBar({
  place
}) {
  return React.createElement("div", {
    className: "est-sticky",
    role: "region",
    "aria-label": "Pr\xE9-venda"
  }, React.createElement("div", null, React.createElement("strong", null, "Pr\xE9-venda das a\xE7\xF5es"), React.createElement("span", null, fmt(TOTAL_SHARES), " no total \xB7 ", place.name)), React.createElement(Contact, {
    place: place,
    className: "btn btn-primary btn-sm"
  }, "Entrar na lista"));
}
function EstabelecimentosApp() {
  const [paused, setPaused] = React.useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [place, setPlace] = React.useState(PLACES[0]);
  const root = React.useRef(null);
  React.useEffect(() => {
    const page = root.current;
    if (!('IntersectionObserver' in window)) {
      page.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08
    });
    page.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return React.createElement(Motion.Provider, {
    value: paused
  }, React.createElement("div", {
    ref: root,
    className: "page est-page",
    "data-motion": paused ? 'paused' : 'playing'
  }, React.createElement(Header, null), React.createElement("main", null, React.createElement(Hero, {
    paused: paused,
    toggle: () => setPaused(value => !value)
  }), React.createElement(Flow, null), React.createElement(Places, {
    place: place,
    onPlace: setPlace
  }), React.createElement(Cycle, null), React.createElement(Simulator, null), React.createElement(Marketplace, null), React.createElement(Roadmap, null), React.createElement(Clarity, null), React.createElement(Faq, null), React.createElement(Closing, {
    place: place
  })), React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "footer-inner"
  }, React.createElement("a", {
    href: "/",
    "aria-label": "Autorama Racing \u2014 p\xE1gina inicial"
  }, React.createElement("img", {
    src: "/assets/logos/autorama-racing-logo.svg",
    alt: ""
  })), React.createElement("a", {
    href: "/"
  }, "Conhe\xE7a os pacotes de fundador ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197")), React.createElement("p", {
    className: "footer-note"
  }, "Autorama Racing \xB7 Jogo em desenvolvimento"))), React.createElement(StickyBar, {
    place: place
  })));
}
export default EstabelecimentosApp;
