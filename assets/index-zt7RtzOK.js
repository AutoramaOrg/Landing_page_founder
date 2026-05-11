true              &&(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
}());

// Generated from App.jsx by scripts/compile-jsx.mjs.
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const assets = {
  logo: 'assets/autorama_logo_reduzido.png',
  kartParts: 'assets/Kart_partes%20(1).png',
  packageArt: 'assets/infografico_carro_vermelho.png',
  mechanics: 'assets/Pecas_Mecanica.png',
  mechanicsTwo: 'assets/Pecas_Mecanica2.png',
  pier: 'assets/PIER_ESTACIONAMENTO.png',
  wallpaper: 'assets/Wallpaper_Fuel%20(1).png',
  gameplay: 'assets/autorama-gameplay-future.png'
};
const navItems = [{
  label: 'O jogo',
  href: '#universo'
}, {
  label: 'Beneficios',
  href: '#beneficios'
}, {
  label: 'Pacotes',
  href: '#pacotes'
}, {
  label: 'Fundadores',
  href: '#entrar'
}];
const benefits = [{
  title: 'Acesso antecipado',
  text: 'Entre antes do lancamento oficial e comece a evoluir sua garagem desde a primeira largada.',
  icon: 'clock'
}, {
  title: 'Itens unicos',
  text: 'Receba visuais, pecas e cosmeticos criados apenas para pilotos fundadores.',
  icon: 'star'
}, {
  title: 'Conteudo exclusivo',
  text: 'Participe de desafios, eventos e recompensas liberadas primeiro para a comunidade inicial.',
  icon: 'lock'
}, {
  title: 'Status especial',
  text: 'Mostre no perfil que voce estava no grid desde o dia 1 de Autorama Racing.',
  icon: 'crown'
}];
const founderPacks = [{
  name: 'Bronze',
  tone: 'bronze',
  eyebrow: 'Largada inicial',
  price: 'R$ 49',
  text: 'O passe essencial para garantir sua entrada no grid fundador.',
  perks: ['Acesso antecipado ao jogo', 'Itens unicos de fundador', 'Badge Bronze no perfil', '1 conjunto Founder Kart'],
  cta: 'Escolher Bronze'
}, {
  name: 'Prata',
  tone: 'silver',
  eyebrow: 'Garage boost',
  price: 'R$ 89',
  text: 'Mais vantagem, mais personalizacao e uma garagem pronta para evoluir.',
  perks: ['Tudo do pacote Bronze', '1 carro raro de fundador', 'Pintura neon exclusiva', 'Creditos extras de largada'],
  cta: 'Escolher Prata'
}, {
  name: 'Ouro',
  tone: 'gold',
  eyebrow: 'Founder elite',
  price: 'R$ 149',
  text: 'A experiencia mais completa para quem quer chegar com presenca maxima.',
  popular: true,
  perks: ['Tudo do pacote Prata', '1 carro epico Founder Premium', 'Efeito de largada dourado', 'Nome no mural dos pioneiros'],
  cta: 'Escolher Ouro'
}];
const universeCards = [{
  title: 'Corridas',
  label: 'Pistas neon',
  text: 'Disputas intensas em circuitos de alta voltagem, com ultrapassagens no limite e clima de arena.',
  image: assets.gameplay,
  icon: 'flag',
  tone: 'blue'
}, {
  title: 'Bastidores',
  label: 'Equipe viva',
  text: 'Da oficina ao paddock, cada detalhe ajuda sua reputacao a crescer antes da temporada abrir.',
  image: assets.wallpaper,
  icon: 'crew',
  tone: 'red'
}, {
  title: 'Mecanica',
  label: 'Setup fino',
  text: 'Ajuste pecas, upgrades e componentes visuais para transformar seu kart em assinatura de pista.',
  image: assets.mechanics,
  icon: 'gear',
  tone: 'gold'
}, {
  title: 'Oficina',
  label: 'Pecas raras',
  text: 'Descubra partes especiais, kits de performance e combinacoes que deixam sua garagem unica.',
  image: assets.mechanicsTwo,
  icon: 'wrench',
  tone: 'cyan'
}, {
  title: 'Colecao',
  label: 'Salao e pier',
  text: 'Explore carros, encontros, hubs sociais e oportunidades para exibir conquistas de fundador.',
  image: assets.kartParts,
  altImage: assets.pier,
  icon: 'map',
  tone: 'white'
}];
const reasons = [{
  title: 'Voce entra na historia',
  text: 'Fundadores ajudam a moldar o equilibrio, a economia e a identidade da primeira temporada.',
  icon: 'crew'
}, {
  title: 'Vantagem desde o inicio',
  text: 'Comece com itens limitados, progressao acelerada e mais liberdade para testar builds.',
  icon: 'rocket'
}, {
  title: 'Recompensas duradouras',
  text: 'Itens de fundador sao limitados e permanecem como marca de origem dentro do jogo.',
  icon: 'trophy'
}, {
  title: 'Valor real no lancamento',
  text: 'Entre com beneficios que acompanham sua conta quando o grid abrir para todos.',
  icon: 'shield'
}];
const stats = [{
  value: '04',
  label: 'beneficios principais'
}, {
  value: '03',
  label: 'pacotes fundadores'
}, {
  value: '01',
  label: 'temporada de largada'
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
      d: "M12 7.2v5l3.5 2.1"
    })),
    star: React.createElement("path", {
      d: "m12 3 2.7 5.5 6 .9-4.4 4.2 1.1 5.9-5.4-2.8-5.4 2.8 1.1-5.9-4.4-4.2 6-.9L12 3Z"
    }),
    lock: React.createElement(React.Fragment, null, React.createElement("rect", {
      x: "5",
      y: "10",
      width: "14",
      height: "10",
      rx: "2"
    }), React.createElement("path", {
      d: "M8.4 10V7.8a3.6 3.6 0 0 1 7.2 0V10"
    })),
    crown: React.createElement("path", {
      d: "m4 8.5 4.2 4.2L12 5.8l3.8 6.9L20 8.5V18H4V8.5Z"
    }),
    flag: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 21V4.5"
    }), React.createElement("path", {
      d: "M5 5c3.2-1.7 5.3 1.4 8.5-.2 1.6-.8 3.2-.7 5.5.3v8.2c-2.3-1-3.9-1.1-5.5-.3-3.2 1.6-5.3-1.5-8.5.2"
    })),
    crew: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "8",
      cy: "8",
      r: "2.7"
    }), React.createElement("circle", {
      cx: "16",
      cy: "8",
      r: "2.7"
    }), React.createElement("path", {
      d: "M3.5 19c.6-3.1 2.2-4.7 4.5-4.7s3.9 1.6 4.5 4.7"
    }), React.createElement("path", {
      d: "M11.5 19c.6-3.1 2.2-4.7 4.5-4.7s3.9 1.6 4.5 4.7"
    })),
    gear: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3.1"
    }), React.createElement("path", {
      d: "M12 2.8v3M12 18.2v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M2.8 12h3M18.2 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1"
    })),
    wrench: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M14.7 5.3a4.1 4.1 0 0 0 4.8 5.5l-8.7 8.7a2.8 2.8 0 0 1-4-4l8.7-8.7a4.1 4.1 0 0 0-.8-1.5Z"
    }), React.createElement("path", {
      d: "M7.5 17.2h.1"
    })),
    map: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z"
    }), React.createElement("path", {
      d: "M9 4v14M15 6v14"
    })),
    rocket: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M13.4 4.1c2.9-.9 5.2-.7 6.2.4s1.3 3.3.4 6.2l-5.8 5.8-4.9-4.9 4.1-7.5Z"
    }), React.createElement("path", {
      d: "m9.3 11.6-4 1.2 1.8 4.8 4.1-4.2"
    }), React.createElement("path", {
      d: "m14.2 16.5-1.1 4 4.7-1.7-3-3"
    }), React.createElement("circle", {
      cx: "16.6",
      cy: "7.6",
      r: "1.4"
    })),
    trophy: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M8 4h8v4.5c0 3.2-1.7 5.4-4 5.4s-4-2.2-4-5.4V4Z"
    }), React.createElement("path", {
      d: "M8 6H4.8c0 3 .9 4.8 3.7 5.3M16 6h3.2c0 3-.9 4.8-3.7 5.3"
    }), React.createElement("path", {
      d: "M12 14v4M8.5 20h7"
    })),
    shield: React.createElement("path", {
      d: "M12 3.5 19 6v5.5c0 4.3-2.8 7.4-7 9-4.2-1.6-7-4.7-7-9V6l7-2.5Z"
    }),
    bolt: React.createElement("path", {
      d: "M13 2 4.8 13.2h6.1L10 22l9-12.4h-6.2L13 2Z"
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
    className: "site-header"
  }, React.createElement("div", {
    className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
  }, React.createElement("a", {
    href: "#top",
    className: "brand-lockup",
    "aria-label": "Autorama Racing"
  }, React.createElement("img", {
    src: assets.logo,
    alt: "",
    className: "brand-mark"
  }), React.createElement("span", null, React.createElement("strong", null, "Autorama"), React.createElement("small", null, "Racing"))), React.createElement("nav", {
    className: "hidden items-center gap-8 lg:flex",
    "aria-label": "Navegacao principal"
  }, navItems.map(item => React.createElement("a", {
    key: item.href,
    href: item.href,
    className: "nav-link"
  }, item.label))), React.createElement("a", {
    href: "#pacotes",
    className: "glow-button glow-button--small"
  }, "Quero ser fundador", React.createElement("span", {
    "aria-hidden": "true"
  }, "++"))));
}
function SectionTitle({
  eyebrow,
  title,
  text
}) {
  return React.createElement("div", {
    className: "section-title"
  }, React.createElement("div", {
    className: "title-line"
  }, React.createElement("span", {
    className: "signal-bars"
  }), eyebrow && React.createElement("p", null, eyebrow), React.createElement("span", {
    className: "signal-bars signal-bars--right"
  })), React.createElement("h2", null, title), text && React.createElement("span", null, text));
}
function HeroVisual() {
  return React.createElement("div", {
    className: "hero-visual",
    "aria-label": "Cena de corrida Autorama Racing"
  }, React.createElement("img", {
    src: assets.gameplay,
    alt: "",
    className: "hero-image"
  }), React.createElement("div", {
    className: "hero-hud"
  }, React.createElement("span", null, "Founder Grid"), React.createElement("strong", null, "01")), React.createElement("div", {
    className: "speed-lines"
  }, Array.from({
    length: 10
  }).map((_, index) => React.createElement("i", {
    key: index,
    style: {
      '--delay': `${index * 0.12}s`
    }
  }))), React.createElement("div", {
    className: "track-panel"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)));
}
function BenefitCard({
  item
}) {
  return React.createElement("article", {
    className: "benefit-card"
  }, React.createElement("div", {
    className: "icon-frame"
  }, React.createElement(Icon, {
    name: item.icon,
    className: "h-10 w-10"
  })), React.createElement("div", null, React.createElement("h3", null, item.title), React.createElement("p", null, item.text)));
}
function FounderCard({
  pack
}) {
  return React.createElement("article", {
    className: `founder-card ${pack.tone}`
  }, pack.popular && React.createElement("span", {
    className: "popular-ribbon"
  }, "Mais Popular"), React.createElement("div", {
    className: "founder-card__header"
  }, React.createElement("span", null, pack.eyebrow), React.createElement("h3", null, pack.name), React.createElement("p", null, pack.text)), React.createElement("div", {
    className: "package-art",
    "data-tone": pack.tone
  }, React.createElement("img", {
    src: assets.packageArt,
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), React.createElement("div", {
    className: "price-row"
  }, React.createElement("strong", null, pack.price), React.createElement("small", null, "pagamento unico")), React.createElement("ul", {
    className: "perk-list"
  }, pack.perks.map(perk => React.createElement("li", {
    key: perk
  }, React.createElement("span", {
    "aria-hidden": "true"
  }, "+"), perk))), React.createElement("a", {
    href: "#entrar",
    className: "package-button"
  }, pack.cta));
}
function UniverseCard({
  card
}) {
  return React.createElement("article", {
    className: `universe-card ${card.tone}`
  }, React.createElement("img", {
    src: card.image,
    alt: "",
    loading: "lazy",
    decoding: "async",
    className: "universe-image"
  }), card.altImage && React.createElement("img", {
    src: card.altImage,
    alt: "",
    loading: "lazy",
    decoding: "async",
    className: "universe-alt-image"
  }), React.createElement("div", {
    className: "universe-overlay"
  }), React.createElement("div", {
    className: "universe-content"
  }, React.createElement("div", {
    className: "universe-icon"
  }, React.createElement(Icon, {
    name: card.icon,
    className: "h-9 w-9"
  })), React.createElement("span", null, card.label), React.createElement("h3", null, card.title), React.createElement("p", null, card.text)));
}
function ReasonCard({
  item
}) {
  return React.createElement("article", {
    className: "reason-card"
  }, React.createElement(Icon, {
    name: item.icon,
    className: "h-10 w-10"
  }), React.createElement("div", null, React.createElement("h3", null, item.title), React.createElement("p", null, item.text)));
}
function FooterColumn({
  title,
  links
}) {
  return React.createElement("div", {
    className: "footer-column"
  }, React.createElement("h3", null, title), React.createElement("ul", null, links.map(link => React.createElement("li", {
    key: link
  }, React.createElement("a", {
    href: "#top"
  }, link)))));
}
function App() {
  return React.createElement("div", {
    id: "top",
    className: "min-h-screen overflow-hidden bg-asphalt text-white",
    style: {
      '--wallpaper-image': `url("${assets.gameplay}")`,
      '--formula-image': `url("${assets.gameplay}")`
    }
  }, React.createElement(Header, null), React.createElement("main", null, React.createElement("section", {
    className: "hero-section"
  }, React.createElement("div", {
    className: "hero-cinema"
  }), React.createElement("div", {
    className: "mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:pb-16 lg:pt-32"
  }, React.createElement("div", {
    className: "hero-copy"
  }, React.createElement("div", {
    className: "eyebrow"
  }, React.createElement("span", null), "Acesse. Corra. Lidere."), React.createElement("h1", null, "Pacotes de Fundador"), React.createElement("p", null, "Entre antes de todos, receba itens exclusivos e acelere sua historia no", ' ', React.createElement("strong", null, "Autorama Racing"), "."), React.createElement("div", {
    className: "hero-actions"
  }, React.createElement("a", {
    href: "#pacotes",
    className: "glow-button"
  }, "Quero ser fundador", React.createElement("span", {
    "aria-hidden": "true"
  }, "++")), React.createElement("a", {
    href: "#beneficios",
    className: "ghost-button"
  }, "Ver beneficios", React.createElement("span", {
    "aria-hidden": "true"
  }, "+"))), React.createElement("div", {
    className: "stat-grid",
    "aria-label": "Resumo dos pacotes"
  }, stats.map(stat => React.createElement("div", {
    key: stat.label
  }, React.createElement("strong", null, stat.value), React.createElement("span", null, stat.label))))), React.createElement(HeroVisual, null))), React.createElement("section", {
    id: "beneficios",
    className: "benefits-section"
  }, React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, React.createElement("div", {
    className: "benefits-grid"
  }, benefits.map(item => React.createElement(BenefitCard, {
    key: item.title,
    item: item
  }))))), React.createElement("section", {
    id: "pacotes",
    className: "page-section package-section"
  }, React.createElement(SectionTitle, {
    eyebrow: "Escolha seu grid",
    title: "Escolha seu pacote de fundador",
    text: "Tres niveis de entrada para quem quer acelerar antes do lancamento."
  }), React.createElement("div", {
    className: "mx-auto mt-10 grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8"
  }, founderPacks.map(pack => React.createElement(FounderCard, {
    key: pack.name,
    pack: pack
  })))), React.createElement("section", {
    id: "universo",
    className: "page-section universe-section"
  }, React.createElement(SectionTitle, {
    eyebrow: "Mundo Autorama",
    title: "Um universo feito para corredores",
    text: "Corridas, bastidores, oficina e colecao em uma experiencia gamer de alta energia."
  }), React.createElement("div", {
    className: "universe-grid mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
  }, universeCards.map(card => React.createElement(UniverseCard, {
    key: card.title,
    card: card
  })))), React.createElement("section", {
    className: "page-section reasons-section"
  }, React.createElement(SectionTitle, {
    eyebrow: "Hora da largada",
    title: "Por que entrar agora?"
  }), React.createElement("div", {
    className: "mx-auto mt-10 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
  }, reasons.map(item => React.createElement(ReasonCard, {
    key: item.title,
    item: item
  })))), React.createElement("section", {
    id: "entrar",
    className: "final-cta"
  }, React.createElement("div", {
    className: "final-cta__image"
  }), React.createElement("div", {
    className: "relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
  }, React.createElement("div", null, React.createElement("p", null, "Fundador desde a primeira volta"), React.createElement("h2", null, "Garanta seu lugar ", React.createElement("span", null, "entre os fundadores")), React.createElement("small", null, "Os melhores chegam antes. Nao fique de fora da primeira temporada de Autorama Racing.")), React.createElement("a", {
    href: "#pacotes",
    className: "glow-button glow-button--cta"
  }, "Quero ser fundador", React.createElement("span", {
    "aria-hidden": "true"
  }, "++"))))), React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8"
  }, React.createElement("div", null, React.createElement("a", {
    href: "#top",
    className: "brand-lockup footer-brand",
    "aria-label": "Autorama Racing"
  }, React.createElement("img", {
    src: assets.logo,
    alt: "",
    className: "brand-mark"
  }), React.createElement("span", null, React.createElement("strong", null, "Autorama"), React.createElement("small", null, "Racing"))), React.createElement("p", {
    className: "mt-5 max-w-sm text-sm leading-6 text-slate-400"
  }, "Corrida, colecao e competicao em uma experiencia neon feita para quem gosta de largar na frente.")), React.createElement(FooterColumn, {
    title: "Jogo",
    links: ['Visao geral', 'Recursos', 'Carros', 'Pistas']
  }), React.createElement(FooterColumn, {
    title: "Comunidade",
    links: ['Noticias', 'Eventos', 'Midia', 'Discord']
  }), React.createElement(FooterColumn, {
    title: "Suporte",
    links: ['FAQ', 'Contato', 'Privacidade', 'Termos de uso']
  })), React.createElement("div", {
    className: "footer-bottom"
  }, React.createElement("span", null, "\xA9 2026 Autorama Racing. Todos os direitos reservados."))));
}

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App)),
);
