// Generated from App.jsx by scripts/compile-jsx.mjs.
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const navItems = [{
  label: 'O Jogo',
  href: '#universo'
}, {
  label: 'Benefícios',
  href: '#beneficios'
}, {
  label: 'Pacotes',
  href: '#pacotes'
}, {
  label: 'Entrar Agora',
  href: '#entrar'
}];
const benefits = [{
  title: 'Acesso antecipado',
  text: 'Jogue antes do lançamento oficial e sinta a pista na primeira largada.',
  icon: 'clock'
}, {
  title: 'Itens únicos',
  text: 'Garanta visuais, efeitos e bônus criados para fundadores.',
  icon: 'star'
}, {
  title: 'Conteúdo exclusivo',
  text: 'Eventos, desafios e recompensas reservados para a comunidade inicial.',
  icon: 'lock'
}, {
  title: 'Status fundador',
  text: 'Mostre seu nome entre os pilotos que aceleraram desde o dia 1.',
  icon: 'crown'
}];
const packages = [{
  name: 'Bronze',
  tone: 'bronze',
  price: 'R$ 49',
  tagline: 'Entrada oficial no grid fundador.',
  perks: ['Acesso antecipado ao jogo', 'Itens únicos de fundador', 'Badge fundador Bronze', '1 carro Founder Premium'],
  button: 'Escolher Bronze'
}, {
  name: 'Prata',
  tone: 'silver',
  price: 'R$ 89',
  tagline: 'Mais estilo, mais garagem, mais vantagem.',
  perks: ['Tudo do pacote Bronze', '1 carro raro adicional', 'Skin neon exclusiva', 'Créditos extras de largada'],
  button: 'Escolher Prata'
}, {
  name: 'Ouro',
  tone: 'gold',
  price: 'R$ 149',
  tagline: 'A experiência máxima para fundadores.',
  popular: true,
  perks: ['Tudo do pacote Prata', '1 carro épico fundador', 'Efeito de largada dourado', 'Nome no mural dos pioneiros'],
  button: 'Escolher Ouro'
}];
const universe = [{
  title: 'Corridas',
  text: 'Pistas velozes, atalhos arriscados e disputas decididas no reflexo.',
  icon: 'flag',
  gradient: 'from-sky-500/25 via-transparent to-red-500/15'
}, {
  title: 'Bastidores',
  text: 'Boxes, eventos, contratos e reputação dentro de uma cena viva.',
  icon: 'helmet',
  gradient: 'from-fuchsia-500/20 via-transparent to-sky-500/15'
}, {
  title: 'Mecânica',
  text: 'Monte, pinte e evolua carros com personalidade de competição.',
  icon: 'gear',
  gradient: 'from-lime-400/20 via-transparent to-trophy/15'
}, {
  title: 'Eventos',
  text: 'Temporadas limitadas com recompensas raras para quem chega cedo.',
  icon: 'spark',
  gradient: 'from-red-500/25 via-transparent to-trophy/20'
}, {
  title: 'Economia viva',
  text: 'Mercado dinâmico, trocas e metas que movimentam o paddock.',
  icon: 'market',
  gradient: 'from-voltage/20 via-transparent to-emerald-400/15'
}];
const reasons = [{
  title: 'Você faz parte da história',
  text: 'Fundadores moldam o futuro do jogo com feedback e presença.',
  icon: 'crew'
}, {
  title: 'Vantagem desde o início',
  text: 'Comece com itens exclusivos e progressão acelerada.',
  icon: 'rocket'
}, {
  title: 'Recompensas duradouras',
  text: 'Itens de fundador são limitados e não voltam para a loja comum.',
  icon: 'trophy'
}, {
  title: 'Investimento que vale a pena',
  text: 'Apoie o projeto e receba benefícios de alto valor no lançamento.',
  icon: 'shield'
}];
function Icon({
  name,
  className = ''
}) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const icons = {
    clock: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8.5"
    }), React.createElement("path", {
      d: "M12 7.5v5l3.4 2"
    })),
    star: React.createElement("path", {
      d: "m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3Z"
    }),
    lock: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "5.2",
      y: "10",
      width: "13.6",
      height: "10",
      rx: "1.8"
    }), React.createElement("path", {
      d: "M8.2 10V7.7a3.8 3.8 0 0 1 7.6 0V10"
    })),
    crown: React.createElement("path", {
      d: "M4 8.5 8.4 13 12 6l3.6 7L20 8.5V18H4V8.5Z"
    }),
    flag: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 20V5"
    }), React.createElement("path", {
      d: "M5 5c3-1.8 5.4 1.5 8.4-.3 1.6-1 3-.9 5.6.3v8.2c-2.6-1.2-4-1.3-5.6-.3-3 1.8-5.4-1.5-8.4.3"
    })),
    helmet: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 13.2A8 8 0 0 1 19.5 10H12l-2 3.2H4Z"
    }), React.createElement("path", {
      d: "M4.5 13.2c.7 4.1 3.8 6.1 7.6 6.1 2 0 4.1-.5 6.4-1.6"
    }), React.createElement("path", {
      d: "M12 10h8"
    })),
    gear: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3.2"
    }), React.createElement("path", {
      d: "M12 2.8v3M12 18.2v3M4 6.3l2.2 2M17.8 15.7l2.2 2M2.8 12h3M18.2 12h3M4 17.7l2.2-2M17.8 8.3l2.2-2"
    })),
    spark: React.createElement("path", {
      d: "M12 2.7 14.2 9l6.1 3-6.1 3-2.2 6.3L9.8 15l-6.1-3 6.1-3L12 2.7Z"
    }),
    market: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 17.5 9 12l3 3 7-8"
    }), React.createElement("path", {
      d: "M16 7h3v3"
    }), React.createElement("path", {
      d: "M4 20h16"
    })),
    crew: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "8",
      cy: "8.3",
      r: "2.7"
    }), React.createElement("circle", {
      cx: "16",
      cy: "8.3",
      r: "2.7"
    }), React.createElement("path", {
      d: "M3.5 18.5c.6-3 2.2-4.6 4.5-4.6s3.9 1.6 4.5 4.6"
    }), React.createElement("path", {
      d: "M11.5 18.5c.6-3 2.2-4.6 4.5-4.6s3.9 1.6 4.5 4.6"
    })),
    rocket: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M13.5 4.2c2.9-.9 5.2-.7 6.3.4 1.1 1.1 1.3 3.4.4 6.3l-5.9 5.9-4.9-4.9 4.1-7.7Z"
    }), React.createElement("path", {
      d: "M9.4 11.9 5.3 13 7 17.7l4.2-4.2"
    }), React.createElement("path", {
      d: "M14.3 16.8 13.2 21l-4.7-1.7 3-3"
    }), React.createElement("circle", {
      cx: "16.7",
      cy: "7.7",
      r: "1.4"
    })),
    trophy: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M8 4h8v4.5c0 3-1.7 5.3-4 5.3S8 11.5 8 8.5V4Z"
    }), React.createElement("path", {
      d: "M8 6H4.8c0 3 .9 4.8 3.7 5.4M16 6h3.2c0 3-.9 4.8-3.7 5.4"
    }), React.createElement("path", {
      d: "M12 14v4M8.5 20h7"
    })),
    shield: React.createElement("path", {
      d: "M12 3.5 19 6v5.5c0 4.3-2.8 7.4-7 9-4.2-1.6-7-4.7-7-9V6l7-2.5Z"
    })
  };
  return React.createElement("svg", _extends({
    className: className,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, common), icons[name]);
}
function Header() {
  return React.createElement("header", {
    className: "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-asphalt/82 backdrop-blur-xl"
  }, React.createElement("div", {
    className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
  }, React.createElement("a", {
    href: "#top",
    className: "group flex shrink-0 items-center",
    "aria-label": "Autorama Racing"
  }, React.createElement("img", {
    src: "/autorama_white.png",
    alt: "",
    className: "h-8 w-auto transition duration-300 group-hover:opacity-90 sm:h-10"
  })), React.createElement("nav", {
    className: "hidden items-center gap-8 lg:flex"
  }, navItems.map(item => React.createElement("a", {
    key: item.href,
    href: item.href,
    className: "nav-link"
  }, item.label))), React.createElement("a", {
    href: "#pacotes",
    className: "glow-button small"
  }, "Quero ser fundador", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A\u203A"))));
}
function BenefitCard({
  benefit
}) {
  return React.createElement("article", {
    className: "benefit-card group"
  }, React.createElement(Icon, {
    name: benefit.icon,
    className: "h-11 w-11 text-voltage transition duration-300 group-hover:text-white"
  }), React.createElement("div", null, React.createElement("h3", null, benefit.title), React.createElement("p", null, benefit.text)));
}
function PackageCard({
  pack
}) {
  return React.createElement("article", {
    className: `founder-card ${pack.tone === 'gold' ? 'gold-card' : ''}`
  }, pack.popular && React.createElement("span", {
    className: "popular-ribbon"
  }, "Mais Popular"), React.createElement("div", {
    className: "package-top"
  }, React.createElement("span", {
    className: `tier-mark ${pack.tone}`
  }), React.createElement("h3", null, pack.name), React.createElement("p", null, pack.tagline)), React.createElement("div", {
    className: "car-preview",
    "data-tone": pack.tone
  }, React.createElement("span", {
    className: "car-shadow"
  }), React.createElement("span", {
    className: "mini-car"
  }, React.createElement("span", null))), React.createElement("div", {
    className: "price-row"
  }, React.createElement("span", null, pack.price), React.createElement("small", null, "pagamento \xFAnico")), React.createElement("ul", {
    className: "perk-list"
  }, pack.perks.map(perk => React.createElement("li", {
    key: perk
  }, React.createElement("span", null, "\u2713"), perk))), React.createElement("a", {
    href: "#entrar",
    className: `package-button ${pack.tone}`
  }, pack.button));
}
function UniverseCard({
  item
}) {
  return React.createElement("article", {
    className: `universe-card bg-gradient-to-br ${item.gradient}`
  }, React.createElement("div", {
    className: "universe-art"
  }, React.createElement(Icon, {
    name: item.icon,
    className: "h-11 w-11"
  })), React.createElement("h3", null, item.title), React.createElement("p", null, item.text));
}
function ReasonCard({
  reason
}) {
  return React.createElement("article", {
    className: "reason-card"
  }, React.createElement(Icon, {
    name: reason.icon,
    className: "h-10 w-10 text-ember"
  }), React.createElement("div", null, React.createElement("h3", null, reason.title), React.createElement("p", null, reason.text)));
}
function App() {
  return React.createElement("div", {
    id: "top",
    className: "min-h-screen overflow-hidden bg-asphalt text-white"
  }, React.createElement(Header, null), React.createElement("main", null, React.createElement("section", {
    className: "hero-section"
  }, React.createElement("div", {
    className: "hero-backdrop"
  }), React.createElement("div", {
    className: "relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
  }, React.createElement("div", {
    className: "max-w-2xl"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", null), "Acesse. Corra. Lidere."), React.createElement("h1", {
    className: "hero-title"
  }, "Pacotes de Fundador"), React.createElement("p", {
    className: "mt-5 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl"
  }, "Entre antes de todos, receba itens \xFAnicos e acelere sua hist\xF3ria no", ' ', React.createElement("strong", {
    className: "text-voltage"
  }, "Autorama Racing"), "."), React.createElement("div", {
    className: "mt-9 flex flex-col gap-4 sm:flex-row"
  }, React.createElement("a", {
    href: "#pacotes",
    className: "glow-button"
  }, "Quero ser fundador", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A\u203A")), React.createElement("a", {
    href: "#beneficios",
    className: "ghost-button"
  }, "Ver pacotes", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A"))))), React.createElement("div", {
    id: "beneficios",
    className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, React.createElement("div", {
    className: "benefits-grid"
  }, benefits.map(benefit => React.createElement(BenefitCard, {
    key: benefit.title,
    benefit: benefit
  }))))), React.createElement("section", {
    id: "pacotes",
    className: "section-shell pt-20"
  }, React.createElement("div", {
    className: "section-heading"
  }, React.createElement("span", {
    className: "signal-bars"
  }), React.createElement("h2", null, "Escolha seu pacote de fundador"), React.createElement("span", {
    className: "signal-bars right"
  })), React.createElement("div", {
    className: "mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8"
  }, packages.map(pack => React.createElement(PackageCard, {
    key: pack.name,
    pack: pack
  })))), React.createElement("section", {
    id: "universo",
    className: "section-shell pt-20"
  }, React.createElement("div", {
    className: "section-heading"
  }, React.createElement("span", {
    className: "signal-bars"
  }), React.createElement("h2", null, "Um universo feito para corredores"), React.createElement("span", {
    className: "signal-bars right"
  })), React.createElement("div", {
    className: "universe-grid mx-auto mt-9 max-w-7xl px-4 sm:px-6 lg:px-8"
  }, universe.map(item => React.createElement(UniverseCard, {
    key: item.title,
    item: item
  })))), React.createElement("section", {
    className: "section-shell py-20"
  }, React.createElement("div", {
    className: "section-heading"
  }, React.createElement("span", {
    className: "signal-bars"
  }), React.createElement("h2", null, "Por que entrar agora?"), React.createElement("span", {
    className: "signal-bars right"
  })), React.createElement("div", {
    className: "mx-auto mt-9 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
  }, reasons.map(reason => React.createElement(ReasonCard, {
    key: reason.title,
    reason: reason
  })))), React.createElement("section", {
    id: "entrar",
    className: "final-cta"
  }, React.createElement("div", {
    className: "race-blur"
  }), React.createElement("div", {
    className: "relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8"
  }, React.createElement("div", null, React.createElement("p", {
    className: "font-display text-sm font-bold uppercase tracking-[.35em] text-trophy"
  }, "A largada est\xE1 aberta"), React.createElement("h2", {
    className: "mt-3 max-w-3xl font-display text-4xl font-black uppercase leading-[.95] tracking-wide sm:text-5xl lg:text-6xl"
  }, "Garanta seu lugar ", React.createElement("span", null, "entre os fundadores")), React.createElement("p", {
    className: "mt-4 max-w-2xl text-base text-slate-300 sm:text-lg"
  }, "Os melhores chegam antes. N\xE3o fique de fora da primeira temporada de Autorama Racing.")), React.createElement("a", {
    href: "#pacotes",
    className: "glow-button cta"
  }, "Quero ser fundador", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A\u203A"))))), React.createElement("footer", {
    className: "footer"
  }, React.createElement("div", {
    className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8"
  }, React.createElement("div", null, React.createElement("a", {
    href: "#top",
    className: "inline-flex items-center",
    "aria-label": "Autorama Racing"
  }, React.createElement("img", {
    src: "/autorama_white.png",
    alt: "",
    className: "h-9 w-auto sm:h-11"
  })), React.createElement("p", {
    className: "mt-5 max-w-sm text-sm leading-6 text-slate-400"
  }, "Corrida, cole\xE7\xE3o e competi\xE7\xE3o em uma experi\xEAncia neon feita para quem gosta de largar na frente.")), React.createElement(FooterList, {
    title: "Jogo",
    links: ['Visão Geral', 'Recursos', 'Carros', 'Pistas']
  }), React.createElement(FooterList, {
    title: "Comunidade",
    links: ['Notícias', 'Eventos', 'Mídia', 'Discord']
  }), React.createElement(FooterList, {
    title: "Suporte",
    links: ['FAQ', 'Contato', 'Privacidade', 'Termos de Uso']
  })), React.createElement("div", {
    className: "border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500"
  }, "\xA9 2026 Autorama Racing. Todos os direitos reservados.")));
}
function FooterList({
  title,
  links
}) {
  return React.createElement("div", null, React.createElement("h3", {
    className: "font-display text-sm font-black uppercase tracking-[.18em] text-white"
  }, title), React.createElement("ul", {
    className: "mt-4 space-y-2 text-sm text-slate-400"
  }, links.map(link => React.createElement("li", {
    key: link
  }, React.createElement("a", {
    href: "#top",
    className: "transition hover:text-white"
  }, link)))));
}
export default App;
