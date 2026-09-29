// Generated from EstabelecimentosApp.jsx by scripts/compile-jsx.mjs.
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WHATSAPP_NUMBER = '5521980468888';
const TOTAL_SHARES = 800000;
const IMG = '/assets/estabelecimentos';
const PLACES = [{
  id: 'pista',
  name: 'Pista / Arena',
  short: 'Pista',
  phase: 'Early Access',
  icon: 'checkered',
  tone: 'red',
  image: `${IMG}/pista.jpg`,
  text: 'Gera receita com as taxas de inscrição nas corridas multiplayer. A taxa de 5% de cada inscrição entra na economia da Pista.',
  items: ['O criador da corrida multiplayer define a inscrição', 'O vencedor leva o total, menos a taxa de 5%', 'A taxa entra na economia dos estabelecimentos']
}, {
  id: 'paint',
  name: 'Paint Shop',
  short: 'Paint Shop',
  phase: 'Early Access',
  icon: 'spray',
  tone: 'pink',
  image: `${IMG}/paint.jpg`,
  text: 'Vende pinturas e peças estéticas para os carros, além de cobrar taxa para aplicação e troca de itens.',
  items: ['Venda de pinturas', 'Venda de peças estéticas e bodykits', 'Taxa para aplicar ou trocar itens, inclusive pinturas de patrocinadores']
}, {
  id: 'mecanica',
  name: 'Mecânica',
  short: 'Mecânica',
  phase: 'Pré-Alfa',
  icon: 'tools',
  tone: 'green',
  image: `${IMG}/mecanica.jpg`,
  text: 'Consertos, rodas, pneus e melhorias de performance. A atividade dos jogadores mantém a demanda sempre ativa.',
  items: ['Conserto de carros danificados', 'Venda de rodas e pneus', 'Melhorias de desempenho, algumas em AutoCash']
}, {
  id: 'posto',
  name: 'Posto de Gasolina',
  short: 'Posto',
  phase: 'Pré-Alfa',
  icon: 'fuel',
  tone: 'yellow',
  image: `${IMG}/posto.jpg`,
  text: 'Vende combustível, lubrificantes e itens de manutenção essenciais para continuar correndo.',
  items: ['Combustível', 'Lubrificantes, óleos e aditivos', 'Outros itens de manutenção']
}];
const fmt = value => Math.round(value).toLocaleString('pt-BR');
const contactUrl = place => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero entrar na pré-venda das ações dos estabelecimentos do Autorama Racing${place ? `. Tenho interesse na ${place.short}` : ''}.`)}`;
function useInView(threshold = 0.3) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function CountUp({
  value,
  duration = 1400
}) {
  const [ref, inView] = useInView();
  const [shown, setShown] = React.useState(0);
  const from = React.useRef(0);
  React.useEffect(() => {
    if (!inView) return;
    if (reducedMotion()) {
      setShown(value);
      from.current = value;
      return;
    }
    const start = performance.now();
    const origin = from.current;
    let frame;
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      setShown(origin + (value - origin) * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);else from.current = value;
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      from.current = value;
    };
  }, [value, inView]);
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
    play: React.createElement("path", {
      d: "M8 5v14l11-7Z",
      fill: "currentColor"
    }),
    check: React.createElement("path", {
      d: "m5 12 4 4L19 6"
    }),
    close: React.createElement("path", {
      d: "M6 6l12 12M18 6 6 18"
    }),
    plus: React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }),
    chart: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 20V14m5 6V10m5 10V12m5 8V6"
    }), React.createElement("path", {
      d: "m4 9 5-4 5 3 6-5m0 0h-4m4 0v4"
    })),
    people: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "3"
    }), React.createElement("circle", {
      cx: "5",
      cy: "9",
      r: "2.2"
    }), React.createElement("circle", {
      cx: "19",
      cy: "9",
      r: "2.2"
    }), React.createElement("path", {
      d: "M6.5 20v-2a5.5 5.5 0 0 1 11 0v2M1.5 19v-1a3.5 3.5 0 0 1 4-3.4m17 4.4v-1a3.5 3.5 0 0 0-4-3.4"
    })),
    cube: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "m12 2 9 5v10l-9 5-9-5V7Z"
    }), React.createElement("path", {
      d: "m3 7 9 5 9-5M12 12v10"
    })),
    gamepad: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M6 8h12a4 4 0 0 1 4 4l-.6 4a3 3 0 0 1-5.4 1.4L14.5 16h-5L8 17.4A3 3 0 0 1 2.6 16L2 12a4 4 0 0 1 4-4Z"
    }), React.createElement("path", {
      d: "M7 11v3M5.5 12.5h3M16 11.5h.01M18 13.5h.01"
    })),
    checkered: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 5h18v14H3Z"
    }), React.createElement("path", {
      d: "M3 9.7h18M3 14.3h18M7.5 5v14M12 5v14M16.5 5v14"
    }), React.createElement("path", {
      d: "M3 5h4.5v4.7H3ZM12 5h4.5v4.7H12ZM7.5 9.7H12v4.6H7.5ZM16.5 9.7H21v4.6h-4.5ZM3 14.3h4.5V19H3ZM12 14.3h4.5V19H12Z",
      fill: "currentColor"
    })),
    spray: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M9 10h6v11H9ZM10 10V7h4v3M12 7V4h3"
    }), React.createElement("path", {
      d: "M18 3h.01M20 5h.01M18 7h.01M21 2h.01"
    })),
    tools: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4Z"
    })),
    fuel: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M7 8h5"
    }), React.createElement("path", {
      d: "M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"
    })),
    store: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3 9 5 3h14l2 6M3 9h18v12H3ZM9 21v-6h6v6"
    }), React.createElement("path", {
      d: "M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"
    })),
    pie: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 3a9 9 0 1 0 9 9h-9Z"
    }), React.createElement("path", {
      d: "M15 2.5A8 8 0 0 1 21.5 9H15Z",
      fill: "currentColor"
    })),
    coins: React.createElement(React.Fragment, null, React.createElement("ellipse", {
      cx: "9",
      cy: "6",
      rx: "6",
      ry: "2.5"
    }), React.createElement("path", {
      d: "M3 6v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6M3 10v4c0 1.4 2.7 2.5 6 2.5M15 12.5c3.3 0 6 1.1 6 2.5s-2.7 2.5-6 2.5-6-1.1-6-2.5 2.7-2.5 6-2.5ZM9 15v3.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V15"
    })),
    coin: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5.5"
    })),
    diamond: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M6 3h12l4 6-10 12L2 9Z"
    }), React.createElement("path", {
      d: "M2 9h20M9 3 7.5 9 12 21l4.5-12L15 3"
    }))
  };
  return React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, props), paths[name] || paths.store);
}
function Cta({
  place,
  children = 'Quero minhas ações',
  className = 'ex-btn ex-btn-red'
}) {
  return React.createElement("a", {
    className: className,
    href: contactUrl(place),
    target: "_blank",
    rel: "noopener noreferrer"
  }, children, React.createElement(Icon, {
    name: "arrow"
  }));
}
function Modal({
  open,
  onClose,
  label,
  children
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  return React.createElement("dialog", {
    ref: ref,
    className: "ex-modal",
    "aria-label": label,
    onClose: onClose,
    onClick: event => {
      if (event.target === ref.current) onClose();
    }
  }, React.createElement("div", {
    className: "ex-modal-body"
  }, React.createElement("button", {
    type: "button",
    className: "ex-modal-close",
    onClick: onClose,
    "aria-label": "Fechar"
  }, React.createElement(Icon, {
    name: "close"
  })), open && children));
}
function PistaDemo() {
  return React.createElement("div", {
    className: "ex-demo"
  }, React.createElement("p", {
    className: "ex-demo-title"
  }, "Corrida com 10 pilotos \xB7 inscri\xE7\xE3o de 1.000 AG"), React.createElement("div", {
    className: "ex-chips",
    "aria-hidden": "true"
  }, Array.from({
    length: 10
  }, (_, i) => React.createElement("span", {
    key: i,
    style: {
      '--i': i
    }
  }, "1.000"))), React.createElement("div", {
    className: "ex-split",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "is-prize"
  }, "9.500 AG \xB7 pr\xEAmio do vencedor"), React.createElement("span", {
    className: "is-fee"
  }, "5%")), React.createElement("p", {
    className: "ex-demo-result"
  }, React.createElement("strong", null, "500 AG"), " de taxa entram na economia dos estabelecimentos."));
}
function PaintDemo() {
  return React.createElement("div", {
    className: "ex-demo"
  }, React.createElement("p", {
    className: "ex-demo-title"
  }, "Troca de pintura de patrocinador \xB7 200 AG"), React.createElement("p", {
    className: "ex-demo-equation"
  }, "20.000 pilotos \xD7 2 servi\xE7os \xD7 200 AG ="), React.createElement("p", {
    className: "ex-demo-result"
  }, React.createElement("strong", null, React.createElement(CountUp, {
    value: 8000000
  }), " AG"), " de movimenta\xE7\xE3o, al\xE9m da venda das pinturas."));
}
const WEAR = ['Correr', 'Desgaste', 'Mecânica', 'Nova corrida'];
function MecanicaDemo() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (reducedMotion()) return;
    const timer = setInterval(() => setStep(value => (value + 1) % WEAR.length), 1100);
    return () => clearInterval(timer);
  }, []);
  const condition = [90, 35, 35, 100][step];
  return React.createElement("div", {
    className: "ex-demo"
  }, React.createElement("p", {
    className: "ex-demo-title"
  }, "O ciclo de manuten\xE7\xE3o"), React.createElement("ol", {
    className: "ex-wear"
  }, WEAR.map((label, i) => React.createElement("li", {
    key: label,
    className: i === step ? 'is-active' : ''
  }, label))), React.createElement("div", {
    className: "ex-meter",
    "aria-hidden": "true"
  }, React.createElement("span", null, "Condi\xE7\xE3o do carro"), React.createElement("div", null, React.createElement("i", {
    style: {
      width: `${condition}%`
    },
    className: condition < 50 ? 'is-low' : ''
  }))), React.createElement("p", {
    className: "ex-demo-result"
  }, "Quanto mais os carros correm, ", React.createElement("strong", null, "maior a demanda"), " pela Mec\xE2nica."));
}
function PostoDemo() {
  const [lap, setLap] = React.useState(0);
  React.useEffect(() => {
    if (reducedMotion()) return;
    const timer = setInterval(() => setLap(value => value >= 24 ? 0 : value + 1), 180);
    return () => clearInterval(timer);
  }, []);
  const refuel = lap > 20;
  const fuel = refuel ? 100 : 100 - lap * 5;
  return React.createElement("div", {
    className: "ex-demo"
  }, React.createElement("p", {
    className: "ex-demo-title"
  }, "Combust\xEDvel \xB7 200 AG para cerca de 20 corridas"), React.createElement("div", {
    className: "ex-fuel",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "ex-fuel-bar"
  }, React.createElement("i", {
    style: {
      height: `${fuel}%`
    },
    className: fuel < 25 ? 'is-low' : ''
  })), React.createElement("div", null, React.createElement("span", null, "Corrida"), React.createElement("strong", null, refuel ? 20 : lap, React.createElement("small", null, "/20")), React.createElement("em", {
    className: refuel ? 'is-on' : ''
  }, "Abastecer \xB7 200 AG"))), React.createElement("p", {
    className: "ex-demo-result"
  }, "Mais corridas, ", React.createElement("strong", null, "mais abastecimentos"), " no Posto."));
}
const DEMOS = {
  pista: PistaDemo,
  paint: PaintDemo,
  mecanica: MecanicaDemo,
  posto: PostoDemo
};
function PlaceDetail({
  place
}) {
  const Demo = DEMOS[place.id];
  return React.createElement("div", {
    className: `ex-detail tone-${place.tone}`
  }, React.createElement("figure", null, React.createElement("img", {
    src: place.image,
    alt: ""
  }), React.createElement("span", {
    className: "ex-phase"
  }, place.phase === 'Early Access' ? 'Previsto no Early Access' : 'Previsto na Pré-Alfa')), React.createElement("div", {
    className: "ex-detail-copy"
  }, React.createElement("h3", null, React.createElement(Icon, {
    name: place.icon
  }), place.name), React.createElement("p", {
    className: "ex-detail-lead"
  }, "De onde vem a atividade:"), React.createElement("ul", null, place.items.map(item => React.createElement("li", {
    key: item
  }, React.createElement(Icon, {
    name: "check"
  }), item))), React.createElement(Demo, null), React.createElement("p", {
    className: "ex-fine"
  }, "Valores de exemplo dos documentos de design do jogo. Podem mudar at\xE9 o lan\xE7amento."), React.createElement(Cta, {
    place: place
  }, "Quero a\xE7\xF5es da ", place.short)));
}
function Simulator() {
  const [mine, setMine] = React.useState(1000);
  const [total, setTotal] = React.useState(100000);
  const [pool, setPool] = React.useState(500000);
  const share = mine / total;
  const result = pool * share;
  return React.createElement("div", {
    className: "ex-sim"
  }, React.createElement("p", {
    className: "ex-kicker"
  }, "Simulador"), React.createElement("h3", {
    className: "ex-h3"
  }, "Sua parte \xE9 proporcional"), React.createElement("div", {
    className: "ex-sim-grid"
  }, React.createElement("div", {
    className: "ex-sim-controls"
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
  })), React.createElement("label", null, React.createElement("span", null, "AutoGold do pool no m\xEAs ", React.createElement("b", null, fmt(pool), " AG")), React.createElement("input", {
    type: "range",
    min: "100000",
    max: "10000000",
    step: "100000",
    value: pool,
    onChange: event => setPool(Number(event.target.value))
  })), React.createElement("p", {
    className: "ex-sim-formula"
  }, fmt(pool), " AG \xD7 (", fmt(mine), " \xF7 ", fmt(total), ") = ", React.createElement("strong", null, fmt(result), " AG"))), React.createElement("div", {
    className: "ex-sim-out"
  }, React.createElement("div", {
    className: "ex-donut",
    style: {
      '--angle': `${Math.max(share * 360, 1.5)}deg`
    },
    "aria-hidden": "true"
  }, React.createElement("div", null, React.createElement("strong", null, (share * 100).toLocaleString('pt-BR', {
    maximumFractionDigits: 2
  }), "%"), React.createElement("span", null, "das a\xE7\xF5es"))), React.createElement("p", null, React.createElement("span", null, "Sua parte no m\xEAs"), React.createElement("strong", null, React.createElement(CountUp, {
    value: result,
    duration: 500
  }), " AG")))), React.createElement("p", {
    className: "ex-fine"
  }, "N\xFAmeros hipot\xE9ticos. O valor muda todo m\xEAs e pode ser zero. O percentual destinado aos detentores ser\xE1 publicado antes da pr\xE9-venda."));
}
const NAV = [['O jogo', '/'], ['Como funciona', '#como-funciona'], ['Estabelecimentos', '#estabelecimentos'], ['Dividendos', '#dividendos'], ['FAQ', '#faq']];
function Header() {
  const menu = React.useRef(null);
  return React.createElement("header", {
    className: "ex-header"
  }, React.createElement("div", {
    className: "ex-shell ex-header-inner"
  }, React.createElement("a", {
    href: "/",
    className: "ex-brand",
    "aria-label": "Autorama Racing \u2014 p\xE1gina inicial"
  }, React.createElement("img", {
    src: "/assets/logos/autorama-racing-logo.svg",
    alt: ""
  })), React.createElement("nav", {
    className: "ex-nav",
    "aria-label": "Principal"
  }, NAV.map(([label, href]) => React.createElement("a", {
    key: href,
    href: href
  }, label))), React.createElement(Cta, {
    className: "ex-btn ex-btn-red ex-btn-sm ex-header-cta"
  }), React.createElement("details", {
    ref: menu,
    className: "ex-menu"
  }, React.createElement("summary", {
    "aria-label": "Menu"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement("nav", {
    "aria-label": "Menu mobile"
  }, NAV.map(([label, href]) => React.createElement("a", {
    key: href,
    href: href,
    onClick: () => {
      menu.current.open = false;
    }
  }, label))))));
}
const HERO_FEATURES = [['chart', 'Receba', 'dividendos mensais'], ['people', 'Participe de um ecossistema', 'em crescimento'], ['cube', 'Itens virtuais', 'comerciáveis no marketplace'], ['gamepad', 'Faça parte do futuro', 'dos games']];
function Hero() {
  return React.createElement("section", {
    className: "ex-hero"
  }, React.createElement("div", {
    className: "ex-hero-bg",
    "aria-hidden": "true"
  }, React.createElement("img", {
    src: `${IMG}/hero.jpg`,
    alt: "",
    fetchPriority: "high"
  }), React.createElement("span", {
    className: "ex-hero-shade"
  }), React.createElement("span", {
    className: "ex-speed"
  })), React.createElement("div", {
    className: "ex-shell ex-hero-content"
  }, React.createElement("h1", {
    className: "ex-hero-title"
  }, React.createElement("span", null, "Seja"), React.createElement("span", {
    className: "is-big"
  }, "Dono"), React.createElement("span", null, "do mundo"), React.createElement("span", null, "do ", React.createElement("em", null, "Autorama"))), React.createElement("p", {
    className: "ex-hero-lead"
  }, "Tenha a\xE7\xF5es dos estabelecimentos comerciais do jogo e receba dividendos em AutoGold gerados pela atividade real dos jogadores."), React.createElement("div", {
    className: "ex-hero-actions"
  }, React.createElement(Cta, null), React.createElement("a", {
    className: "ex-btn ex-btn-ghost",
    href: "#como-funciona"
  }, "Como funciona", React.createElement(Icon, {
    name: "play"
  })))), React.createElement("ul", {
    className: "ex-shell ex-hero-features"
  }, HERO_FEATURES.map(([icon, a, b], i) => React.createElement("li", {
    key: a,
    style: {
      '--i': i
    }
  }, React.createElement(Icon, {
    name: icon
  }), React.createElement("span", null, a, React.createElement("b", null, b))))));
}
const PINS = [['Pista', 'red', '23%', '30%'], ['Paint Shop', 'pink', '46%', '9%'], ['Mecânica', 'green', '82%', '24%'], ['Posto', 'yellow', '57%', '55%']];
function Ecosystem() {
  return React.createElement("section", {
    id: "como-funciona",
    className: "ex-eco"
  }, React.createElement("figure", {
    className: "ex-eco-media",
    "aria-hidden": "true"
  }, React.createElement("img", {
    src: `${IMG}/aerial.jpg`,
    alt: "",
    loading: "lazy"
  }), React.createElement("span", null), PINS.map(([label, tone, x, y], i) => React.createElement("b", {
    key: label,
    className: `ex-pin tone-${tone}`,
    style: {
      left: x,
      top: y,
      '--i': i
    }
  }, label))), React.createElement("div", {
    className: "ex-shell ex-eco-copy",
    "data-reveal": true
  }, React.createElement("p", {
    className: "ex-kicker"
  }, "Economia real dentro do jogo"), React.createElement("h2", {
    className: "ex-h2"
  }, "Quatro estabelecimentos", React.createElement("br", null), "um s\xF3 ecossistema"), React.createElement("p", {
    className: "ex-text"
  }, "Cada corrida, cada personaliza\xE7\xE3o, cada reparo e cada abastecimento movimenta a economia do Autorama Racing. Parte dessa receita \xE9 distribu\xEDda aos detentores de a\xE7\xF5es de forma proporcional."), React.createElement("a", {
    className: "ex-btn ex-btn-outline",
    href: "#estabelecimentos"
  }, "Conhe\xE7a os estabelecimentos")));
}
function Places({
  onOpen
}) {
  return React.createElement("section", {
    id: "estabelecimentos",
    className: "ex-section ex-places"
  }, React.createElement("div", {
    className: "ex-shell ex-card-grid",
    "data-reveal": true
  }, PLACES.map((place, i) => React.createElement("article", {
    key: place.id,
    className: `ex-place tone-${place.tone}`,
    style: {
      '--i': i
    }
  }, React.createElement("div", {
    className: "ex-place-media"
  }, React.createElement("img", {
    src: place.image,
    alt: `Ilustração: ${place.name}`,
    loading: "lazy",
    width: "600",
    height: "450"
  }), React.createElement("span", {
    className: "ex-phase"
  }, place.phase)), React.createElement("div", {
    className: "ex-place-body"
  }, React.createElement("h3", null, React.createElement(Icon, {
    name: place.icon
  }), place.name), React.createElement("p", null, place.text), React.createElement("button", {
    type: "button",
    className: "ex-btn ex-btn-card",
    onClick: () => onOpen(place)
  }, "Saiba mais"))))));
}
const FLOW = [['people', 'Jogadores', 'gastam AutoGold'], ['store', 'Estabelecimentos', 'geram receita'], ['pie', 'Parte é destinada', 'aos detentores'], ['coins', 'Dividendos mensais', 'em AutoGold']];
function Dividends({
  onSim
}) {
  return React.createElement("section", {
    id: "dividendos",
    className: "ex-section"
  }, React.createElement("div", {
    className: "ex-shell ex-split-row",
    "data-reveal": true
  }, React.createElement("div", {
    className: "ex-split-copy"
  }, React.createElement("h2", {
    className: "ex-h2"
  }, "Como funcionam", React.createElement("br", null), "os dividendos"), React.createElement("p", {
    className: "ex-text"
  }, "Os detentores recebem uma parte da receita gerada pelos quatro estabelecimentos comerciais, de forma proporcional \xE0 quantidade de a\xE7\xF5es que possuem."), React.createElement("button", {
    type: "button",
    className: "ex-btn ex-btn-outline",
    onClick: onSim
  }, "Ver exemplo detalhado")), React.createElement("ol", {
    className: "ex-flow"
  }, React.createElement("span", {
    className: "ex-flow-coin",
    "aria-hidden": "true"
  }), FLOW.map(([icon, a, b], i) => React.createElement("li", {
    key: a,
    style: {
      '--i': i
    },
    className: i === FLOW.length - 1 ? 'is-gold' : ''
  }, React.createElement(Icon, {
    name: icon
  }), React.createElement("span", null, a, React.createElement("br", null), b), i < FLOW.length - 1 && React.createElement(Icon, {
    name: "arrow",
    className: "ex-flow-arrow"
  }))))));
}
const WHY = [['chart', 'green', 'Dividendos em AutoGold', 'Baseados na atividade real dos jogadores'], ['diamond', 'blue', 'Item digital escasso', 'Com oferta limitada e negociável no marketplace'], ['people', 'blue', 'Ecossistema em crescimento', 'Quanto mais jogadores, maior a atividade econômica'], ['gamepad', 'blue', 'Dois benefícios em um', 'Dividendos em AutoGold e negociação futura no marketplace']];
function Why() {
  return React.createElement("section", {
    className: "ex-section ex-why"
  }, React.createElement("div", {
    className: "ex-shell",
    "data-reveal": true
  }, React.createElement("h2", {
    className: "ex-h2"
  }, "Por que participar"), React.createElement("ul", {
    className: "ex-why-grid"
  }, WHY.map(([icon, tone, title, text], i) => React.createElement("li", {
    key: title,
    className: `tone-${tone}`,
    style: {
      '--i': i
    }
  }, React.createElement(Icon, {
    name: icon
  }), React.createElement("strong", null, title), React.createElement("span", null, text))))));
}
function Example({
  onSim
}) {
  const steps = [{
    icon: 'checkered',
    value: 10000,
    suffix: '',
    label: 'Corridas no mês'
  }, {
    icon: 'coin',
    value: 1000,
    suffix: ' AG',
    label: 'Inscrição média',
    tone: 'gold'
  }, {
    icon: 'pie',
    value: 500000,
    suffix: ' AG',
    label: 'Taxa (5%) para o pool'
  }, {
    icon: 'coins',
    value: 5000,
    suffix: ' AG',
    label: 'Sua parte',
    note: '(com 1.000 ações)',
    tone: 'gold',
    final: true
  }];
  return React.createElement("section", {
    className: "ex-section ex-example"
  }, React.createElement("div", {
    className: "ex-shell ex-split-row",
    "data-reveal": true
  }, React.createElement("div", {
    className: "ex-split-copy"
  }, React.createElement("h2", {
    className: "ex-h2"
  }, "Exemplo pr\xE1tico"), React.createElement("p", {
    className: "ex-text"
  }, "Veja como a atividade dos jogadores gera dividendos em AutoGold."), React.createElement("button", {
    type: "button",
    className: "ex-btn ex-btn-outline",
    onClick: onSim
  }, "Ver mais cen\xE1rios")), React.createElement("div", null, React.createElement("ol", {
    className: "ex-steps"
  }, steps.map((step, i) => React.createElement("li", {
    key: step.label,
    className: step.final ? 'is-final' : '',
    style: {
      '--i': i
    }
  }, React.createElement(Icon, {
    name: step.icon,
    className: step.tone === 'gold' ? 'is-gold' : ''
  }), step.final && React.createElement("small", null, step.label), React.createElement("strong", null, React.createElement(CountUp, {
    value: step.value
  }), step.suffix), step.final ? React.createElement("em", null, step.note) : React.createElement("small", null, step.label), i < steps.length - 1 && React.createElement(Icon, {
    name: "arrow",
    className: "ex-steps-arrow"
  })))), React.createElement("p", {
    className: "ex-fine"
  }, "Ilustrativo: sup\xF5e 100.000 a\xE7\xF5es da Pista e toda a taxa destinada ao pool. As regras oficiais ser\xE3o publicadas antes da pr\xE9-venda."))));
}
const STATS = [['coins', React.createElement(React.Fragment, null, React.createElement(CountUp, {
  value: TOTAL_SHARES
})), 'Ações no total'], ['people', '4', 'Estabelecimentos'], ['pie', null, 'Dividendos mensais'], ['chart', null, 'Negociação no marketplace']];
function Market() {
  return React.createElement("section", {
    className: "ex-market"
  }, React.createElement("div", {
    className: "ex-market-bg",
    "aria-hidden": "true"
  }, React.createElement("img", {
    src: `${IMG}/banner.jpg`,
    alt: "",
    loading: "lazy"
  }), React.createElement("span", null)), React.createElement("div", {
    className: "ex-shell ex-market-copy",
    "data-reveal": true
  }, React.createElement("span", {
    className: "ex-tag"
  }, "A\xE7\xF5es limitadas"), React.createElement("h2", {
    className: "ex-h2 is-xl"
  }, "Fa\xE7a parte", React.createElement("br", null), "desse mercado"), React.createElement("p", {
    className: "ex-text"
  }, "S\xE3o 800.000 a\xE7\xF5es no total. Entre na pr\xE9-venda e comece a receber dividendos em AutoGold conforme o jogo cresce."), React.createElement(Cta, null)), React.createElement("ul", {
    className: "ex-shell ex-stats"
  }, STATS.map(([icon, big, label]) => React.createElement("li", {
    key: label
  }, React.createElement(Icon, {
    name: icon
  }), big ? React.createElement("span", null, React.createElement("strong", null, big), label) : React.createElement("span", {
    className: "is-plain"
  }, label.split(' ').slice(0, 1), React.createElement("br", null), label.split(' ').slice(1).join(' '))))));
}
const FAQ = [['O que são as ações dos estabelecimentos?', 'São itens virtuais colecionáveis ligados a um estabelecimento do jogo: Pista, Paint Shop, Mecânica ou Posto. Quem tem ações recebe uma parte proporcional do AutoGold destinado aos detentores daquele estabelecimento.'], ['Posso vender minhas ações?', 'O marketplace de ações está previsto para a Pré-Alfa. Quando lançado, o preço será combinado entre jogadores, com taxa de 5%. Não há garantia de comprador nem de preço.'], ['Como são calculados os dividendos?', 'Todo mês, a parte da receita do estabelecimento destinada aos detentores forma um pool. Cada detentor recebe na proporção das ações que possui: suas ações divididas pelo total do estabelecimento.'], ['Quantas ações existem?', `${fmt(TOTAL_SHARES)} no total, somando os quatro estabelecimentos. A quantidade de cada um e o preço de lançamento serão publicados antes da pré-venda.`], ['As ações são um investimento real?', 'Não. São itens virtuais do jogo, não valores mobiliários nem participação na Horse Power Studio. Os dividendos são pagos em AutoGold, podem subir, cair ou ser zero, e não há garantia de valorização.'], ['Quando recebo os dividendos?', 'A distribuição é mensal, em AutoGold, na conta do jogo. A data e o percentual destinado aos detentores serão publicados antes da abertura da pré-venda.'], ['Posso sacar os dividendos?', 'Não. AutoGold é a moeda do jogo. Ele serve para itens, serviços e produtos de parceiros e não pode ser sacado nem convertido em dinheiro.'], ['Quais estabelecimentos chegam primeiro?', 'O roadmap do Early Access inclui a Pista e o Paint Shop. Mecânica, Posto e marketplace de ações estão previstos para a Pré-Alfa.'], ['De onde vem o AutoGold dos dividendos?', 'Da atividade dos jogadores nos estabelecimentos: inscrições, serviços, peças e combustível. É AutoGold que já circula no jogo, redistribuído de forma proporcional.'], ['Como entro na pré-venda?', 'Fale com o time pelo WhatsApp e entre na lista. Quem estiver na lista recebe primeiro as condições de lançamento.']];
function Faq() {
  const [all, setAll] = React.useState(false);
  const items = all ? FAQ : FAQ.slice(0, 6);
  return React.createElement("section", {
    id: "faq",
    className: "ex-section ex-faq"
  }, React.createElement("div", {
    className: "ex-shell",
    "data-reveal": true
  }, React.createElement("div", {
    className: "ex-faq-head"
  }, React.createElement("div", null, React.createElement("p", {
    className: "ex-kicker is-muted"
  }, "D\xFAvidas?"), React.createElement("h2", {
    className: "ex-h2 is-plain"
  }, "Perguntas Frequentes"), React.createElement("p", {
    className: "ex-text is-small"
  }, "Tire suas d\xFAvidas sobre o sistema de a\xE7\xF5es.")), React.createElement("button", {
    type: "button",
    className: "ex-btn ex-btn-outline",
    onClick: () => setAll(value => !value),
    "aria-expanded": all
  }, all ? 'Ver menos' : 'Ver FAQ completo')), React.createElement("div", {
    className: "ex-faq-grid"
  }, items.map(([question, answer]) => React.createElement("details", {
    key: question
  }, React.createElement("summary", null, question, React.createElement(Icon, {
    name: "plus"
  })), React.createElement("p", null, answer))))));
}
function Closing() {
  return React.createElement("section", {
    className: "ex-closing"
  }, React.createElement("div", {
    className: "ex-closing-bg",
    "aria-hidden": "true"
  }, React.createElement("img", {
    src: `${IMG}/closing.jpg`,
    alt: "",
    loading: "lazy"
  }), React.createElement("img", {
    className: "ex-closing-logo",
    src: "/assets/logos/autorama-racing-logo.svg",
    alt: ""
  }), React.createElement("span", null)), React.createElement("div", {
    className: "ex-shell ex-closing-copy",
    "data-reveal": true
  }, React.createElement("h2", {
    className: "ex-h2"
  }, "Fa\xE7a parte do futuro", React.createElement("br", null), "do Autorama Racing"), React.createElement("p", {
    className: "ex-text"
  }, "Entre para o ecossistema econ\xF4mico do jogo e receba dividendos em AutoGold gerados pela paix\xE3o dos jogadores."), React.createElement(Cta, null, "Quero minhas a\xE7\xF5es agora")));
}
function EstabelecimentosApp() {
  const [place, setPlace] = React.useState(null);
  const [sim, setSim] = React.useState(false);
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
      threshold: 0.12
    });
    page.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return React.createElement("div", {
    ref: root,
    className: "ex-page"
  }, React.createElement(Header, null), React.createElement("main", null, React.createElement(Hero, null), React.createElement(Ecosystem, null), React.createElement(Places, {
    onOpen: setPlace
  }), React.createElement(Dividends, {
    onSim: () => setSim(true)
  }), React.createElement(Why, null), React.createElement(Example, {
    onSim: () => setSim(true)
  }), React.createElement(Market, null), React.createElement(Faq, null), React.createElement(Closing, null)), React.createElement("footer", {
    className: "ex-footer"
  }, React.createElement("div", {
    className: "ex-shell ex-footer-inner"
  }, React.createElement("img", {
    src: "/assets/logos/autorama-racing-logo.svg",
    alt: "Autorama Racing"
  }), React.createElement("p", null, "A\xE7\xF5es s\xE3o itens virtuais do jogo. N\xE3o s\xE3o valores mobili\xE1rios nem participa\xE7\xE3o na Horse Power Studio. Dividendos s\xE3o pagos em AutoGold, que n\xE3o pode ser sacado nem convertido em dinheiro."), React.createElement("a", {
    href: "/"
  }, "Pacotes de fundador \u2197"))), React.createElement("div", {
    className: "ex-sticky"
  }, React.createElement("span", null, React.createElement("strong", null, "Pr\xE9-venda das a\xE7\xF5es"), "800.000 no total"), React.createElement(Cta, {
    className: "ex-btn ex-btn-red ex-btn-sm"
  }, "Quero a\xE7\xF5es")), React.createElement(Modal, {
    open: !!place,
    onClose: () => setPlace(null),
    label: place ? place.name : 'Estabelecimento'
  }, place && React.createElement(PlaceDetail, {
    place: place
  })), React.createElement(Modal, {
    open: sim,
    onClose: () => setSim(false),
    label: "Simulador de dividendos"
  }, React.createElement(Simulator, null)));
}
export default EstabelecimentosApp;
