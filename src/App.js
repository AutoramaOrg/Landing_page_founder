// Generated from App.jsx by scripts/compile-jsx.mjs.
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { checkoutEnabled, createCheckout, getPaymentStatus, readPaymentResult } from './checkout.js';
const GAME_SITE_URL = 'https://www.autoramaracing.com/';
const navItems = [{
  label: 'O jogo',
  href: GAME_SITE_URL,
  external: true
}, {
  label: 'Pacotes',
  href: '#pacotes',
  section: 'pacotes'
}, {
  label: 'Dúvidas',
  href: '#duvidas',
  section: 'duvidas'
}];
const highlights = [{
  icon: 'car',
  label: 'Carros colecionáveis'
}, {
  icon: 'star',
  label: 'Itens de fundador'
}, {
  icon: 'bars',
  label: 'Apoie o desenvolvimento'
}];
const packages = [{
  id: 'bronze',
  name: 'Bronze',
  tone: 'bronze',
  price: 'R$ 49',
  includedCars: ['Premium'],
  cars: [{
    image: '/founder-premium.png',
    alt: 'Carro Premium com pintura vermelha, preta e branca',
    slot: 'solo'
  }],
  features: [{
    icon: 'car',
    text: '1 carro: Premium'
  }, {
    icon: 'star',
    text: 'Itens de fundador'
  }, {
    icon: 'badge',
    text: 'Badge Bronze'
  }],
  button: 'Escolher Bronze'
}, {
  id: 'prata',
  name: 'Prata',
  tone: 'silver',
  price: 'R$ 89',
  includedCars: ['Premium', 'Raro'],
  cars: [{
    image: '/founder-raro.png',
    alt: 'Carro Raro preto com detalhes azuis e aerofólio',
    slot: 'solo'
  }],
  features: [{
    icon: 'car',
    text: '2 carros: Premium + Raro'
  }, {
    icon: 'star',
    text: 'Itens de fundador'
  }, {
    icon: 'brush',
    text: 'Skin neon exclusiva'
  }],
  button: 'Escolher Prata'
}, {
  id: 'ouro',
  name: 'Ouro',
  tone: 'gold',
  badge: 'Coleção completa',
  price: 'R$ 149',
  includedCars: ['Premium', 'Raro', 'Épico'],
  cars: [{
    image: '/founder-raro.png',
    alt: 'Carro Raro preto com detalhes azuis',
    slot: 'left'
  }, {
    image: '/founder-premium.png',
    alt: 'Carro Premium vermelho, preto e branco',
    slot: 'right'
  }, {
    image: '/founder-epico.png',
    alt: 'Carro Épico esportivo rosa com aerofólio',
    slot: 'center'
  }],
  features: [{
    icon: 'car',
    text: '3 carros: Premium + Raro + Épico'
  }, {
    icon: 'star',
    text: 'Itens de fundador'
  }, {
    icon: 'brush',
    text: 'Skin neon exclusiva'
  }, {
    icon: 'people',
    text: 'Nome no mural dos pioneiros'
  }],
  button: 'Escolher Ouro'
}];
const faq = [{
  question: 'Quando recebo os itens do pacote?',
  answer: 'Os itens são creditados na sua conta em até 2 dias úteis após a confirmação do pagamento.'
}, {
  question: 'Preciso ter uma conta para comprar?',
  answer: 'Não. A compra é identificada pelo e-mail informado no checkout, e os itens entram na conta criada com esse mesmo e-mail.'
}, {
  question: 'Como funciona o pagamento?',
  answer: 'O pagamento é processado pelo checkout seguro da InfinitePay. Nenhum dado de cartão passa por este site.'
}, {
  question: 'O jogo já está disponível?',
  answer: 'O Autorama Racing está em desenvolvimento. Os pacotes de fundador garantem acesso antecipado e itens exclusivos de fundador.'
}];
function Icon({
  name,
  className = ''
}) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  const icons = {
    car: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M3.6 15.4v-2.1l1.7-4a2 2 0 0 1 1.9-1.2h9.6a2 2 0 0 1 1.9 1.2l1.7 4v2.1"
    }), React.createElement("path", {
      d: "M3.6 13.3h16.8"
    }), React.createElement("circle", {
      cx: "7.6",
      cy: "16.4",
      r: "1.8"
    }), React.createElement("circle", {
      cx: "16.4",
      cy: "16.4",
      r: "1.8"
    })),
    star: React.createElement("path", {
      d: "m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8L12 3.6Z"
    }),
    bars: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M5 19v-5.2"
    }), React.createElement("path", {
      d: "M12 19V9.4"
    }), React.createElement("path", {
      d: "M19 19V5.6"
    })),
    badge: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M12 3.6 19 6v5.4c0 4.2-2.8 7.2-7 8.9-4.2-1.7-7-4.7-7-8.9V6l7-2.4Z"
    }), React.createElement("path", {
      d: "m9.2 11.8 2 2 3.6-3.7"
    })),
    brush: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M14.9 4.6 19.4 9.1 10.2 18.3H5.7v-4.5z"
    }), React.createElement("path", {
      d: "m12.9 6.6 4.5 4.5"
    }), React.createElement("path", {
      d: "M5.7 13.8 10.2 18.3"
    })),
    people: React.createElement(React.Fragment, null, React.createElement("circle", {
      cx: "9.2",
      cy: "8.6",
      r: "2.7"
    }), React.createElement("path", {
      d: "M3.9 18.4c.6-3.1 2.4-4.7 5.3-4.7s4.7 1.6 5.3 4.7"
    }), React.createElement("path", {
      d: "M15.4 6.3a2.7 2.7 0 0 1 0 5.1"
    }), React.createElement("path", {
      d: "M16.6 13.9c2 .4 3.2 1.9 3.7 4.5"
    })),
    menu: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M4 7h16"
    }), React.createElement("path", {
      d: "M4 12h16"
    }), React.createElement("path", {
      d: "M4 17h16"
    })),
    close: React.createElement(React.Fragment, null, React.createElement("path", {
      d: "M6 6l12 12"
    }), React.createElement("path", {
      d: "M18 6 6 18"
    }))
  };
  return React.createElement("svg", _extends({
    className: className,
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, common), icons[name]);
}
function NavLink({
  item,
  active,
  onNavigate
}) {
  const external = item.external;
  return React.createElement("a", {
    href: item.href,
    className: `nav-link${active ? ' is-active' : ''}`,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer' : undefined,
    onClick: () => onNavigate(item)
  }, item.label);
}
function Header({
  activeSection,
  onNavigate
}) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = event => {
      if (event.key === 'Escape') setOpen(false);
    };
    const query = window.matchMedia('(min-width: 900px)');
    const onDesktop = () => {
      if (query.matches) setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    query.addEventListener('change', onDesktop);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      query.removeEventListener('change', onDesktop);
    };
  }, [open]);
  const handleNavigate = item => {
    setOpen(false);
    onNavigate(item);
  };
  return React.createElement("header", {
    className: `site-header${open ? ' is-open' : ''}`
  }, React.createElement("div", {
    className: "header-inner"
  }, React.createElement("a", {
    href: "#top",
    className: "brand",
    "aria-label": "Autorama Racing"
  }, React.createElement("img", {
    src: "/autorama_white.png",
    alt: ""
  })), React.createElement("nav", {
    className: "header-nav",
    "aria-label": "Principal"
  }, navItems.map(item => React.createElement(NavLink, {
    key: item.label,
    item: item,
    active: item.section === activeSection,
    onNavigate: handleNavigate
  }))), React.createElement("a", {
    href: "#pacotes",
    className: "btn btn-primary btn-sm header-cta"
  }, "Ver pacotes", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A\u203A")), React.createElement("button", {
    type: "button",
    className: "menu-toggle",
    "aria-expanded": open,
    "aria-controls": "menu-mobile",
    "aria-label": open ? 'Fechar menu' : 'Abrir menu',
    onClick: () => setOpen(value => !value)
  }, React.createElement(Icon, {
    name: open ? 'close' : 'menu',
    className: "menu-icon"
  }))), React.createElement("div", {
    id: "menu-mobile",
    className: "mobile-menu",
    hidden: !open
  }, React.createElement("nav", {
    "aria-label": "Menu"
  }, navItems.map(item => React.createElement(NavLink, {
    key: item.label,
    item: item,
    active: item.section === activeSection,
    onNavigate: handleNavigate
  }))), React.createElement("a", {
    href: "#pacotes",
    className: "btn btn-primary",
    onClick: () => setOpen(false)
  }, "Ver pacotes", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A\u203A"))));
}
function HeroStage() {
  return React.createElement("div", {
    className: "hero-stage",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "stage-car stage-car-raro"
  }, React.createElement("img", {
    src: "/founder-raro.png",
    alt: ""
  })), React.createElement("span", {
    className: "stage-car stage-car-premium"
  }, React.createElement("img", {
    src: "/founder-premium.png",
    alt: ""
  })), React.createElement("span", {
    className: "stage-car stage-car-epico"
  }, React.createElement("img", {
    src: "/founder-epico.png",
    alt: ""
  })));
}
function Hero() {
  return React.createElement("section", {
    className: "hero"
  }, React.createElement("div", {
    className: "hero-room",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "room-lamp"
  }), React.createElement("span", {
    className: "room-neon room-neon-a"
  }), React.createElement("span", {
    className: "room-neon room-neon-b"
  }), React.createElement("span", {
    className: "room-number"
  }, "01"), React.createElement("span", {
    className: "room-floor"
  })), React.createElement("div", {
    className: "hero-shell"
  }, React.createElement("div", {
    className: "hero-copy"
  }, React.createElement("p", {
    className: "kicker"
  }, "Pacotes de fundador"), React.createElement("h1", {
    className: "hero-title"
  }, React.createElement("span", {
    className: "line"
  }, "Seu lugar"), React.createElement("span", {
    className: "line"
  }, "no primeiro"), React.createElement("span", {
    className: "line accent"
  }, "Grid.")), React.createElement(HeroStage, null), React.createElement("p", {
    className: "hero-lead"
  }, "Apoie o Autorama Racing e comece sua cole\xE7\xE3o com itens de fundador."), React.createElement("p", {
    className: "hero-price"
  }, "A partir de R$ 49"), React.createElement("div", {
    className: "hero-actions"
  }, React.createElement("a", {
    href: "#pacotes",
    className: "btn btn-primary btn-cta"
  }, "Escolher meu pacote", React.createElement("span", {
    "aria-hidden": "true"
  }, "\xBB")), React.createElement("a", {
    href: GAME_SITE_URL,
    target: "_blank",
    rel: "noreferrer",
    className: "text-link"
  }, "Conhe\xE7a o jogo", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A")))), React.createElement("p", {
    className: "hero-words",
    "aria-hidden": "true"
  }, React.createElement("span", null, "Drive"), React.createElement("span", null, "Colecione"), React.createElement("span", null, "Evolua")), React.createElement("p", {
    className: "hero-collection",
    "aria-hidden": "true"
  }, "Cole\xE7\xE3o fundador")));
}
function Highlights() {
  return React.createElement("section", {
    className: "highlights"
  }, React.createElement("ul", {
    className: "highlights-inner"
  }, highlights.map(item => React.createElement("li", {
    key: item.label,
    className: "highlight"
  }, React.createElement(Icon, {
    name: item.icon,
    className: "highlight-icon"
  }), item.label))));
}
function PackageCard({
  pack,
  onChoose
}) {
  return React.createElement("article", {
    className: `pack pack-${pack.tone}`
  }, React.createElement("div", {
    className: "pack-head"
  }, React.createElement("h3", null, pack.name), pack.badge && React.createElement("span", {
    className: "pack-badge"
  }, pack.badge)), React.createElement("div", {
    className: `pack-cars${pack.cars.length > 1 ? ' is-trio' : ''}`
  }, pack.cars.map(car => React.createElement("img", {
    key: `${pack.id}-${car.slot}`,
    className: `pack-car slot-${car.slot}`,
    src: car.image,
    alt: car.alt,
    loading: "lazy",
    decoding: "async"
  }))), React.createElement("p", {
    className: "pack-price"
  }, pack.price), React.createElement("ul", {
    className: "pack-features"
  }, pack.features.map(feature => React.createElement("li", {
    key: feature.text
  }, React.createElement(Icon, {
    name: feature.icon,
    className: "feature-icon"
  }), React.createElement("span", null, feature.text)))), React.createElement("button", {
    type: "button",
    onClick: () => onChoose(pack),
    disabled: !checkoutEnabled,
    className: `btn pack-button ${pack.tone === 'gold' ? 'btn-primary' : 'btn-outline'}`
  }, checkoutEnabled ? pack.button : 'Disponível em breve', React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A")));
}
function Packages({
  onChoose
}) {
  return React.createElement("section", {
    id: "pacotes",
    className: "section packages"
  }, React.createElement("div", {
    className: "section-inner"
  }, React.createElement("div", {
    className: "section-head"
  }, React.createElement("p", {
    className: "kicker"
  }, "Monte sua garagem"), React.createElement("h2", {
    className: "title"
  }, "Escolha seu pacote."), React.createElement("p", {
    className: "section-sub"
  }, "Compare os carros e benef\xEDcios de cada op\xE7\xE3o.")), React.createElement("div", {
    className: "packs"
  }, packages.map(pack => React.createElement(PackageCard, {
    key: pack.id,
    pack: pack,
    onChoose: onChoose
  }))), React.createElement("p", {
    className: "packs-note"
  }, "Todos os pacotes incluem acesso antecipado e itens de fundador.")));
}
function Closing({
  faqOpen,
  onToggleFaq
}) {
  return React.createElement("section", {
    id: "duvidas",
    className: "closing"
  }, React.createElement("div", {
    className: "closing-flag left",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "closing-flag right",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "closing-inner"
  }, React.createElement("div", {
    className: "closing-copy"
  }, React.createElement("h2", {
    className: "title"
  }, "Fa\xE7a parte dessa largada."), React.createElement("p", {
    className: "section-sub"
  }, "Conhe\xE7a o jogo e acompanhe o desenvolvimento.")), React.createElement("div", {
    className: "faq"
  }, React.createElement("button", {
    type: "button",
    className: "faq-toggle",
    "aria-expanded": faqOpen,
    "aria-controls": "faq-panel",
    onClick: onToggleFaq
  }, "D\xFAvidas frequentes", React.createElement("span", {
    className: "faq-sign",
    "aria-hidden": "true"
  }, faqOpen ? '−' : '+')), React.createElement("div", {
    id: "faq-panel",
    className: "faq-panel",
    hidden: !faqOpen
  }, faq.map(item => React.createElement("div", {
    key: item.question,
    className: "faq-item"
  }, React.createElement("h3", null, item.question), React.createElement("p", null, item.answer)))))));
}
function Footer() {
  return React.createElement("footer", {
    className: "site-footer"
  }, React.createElement("div", {
    className: "footer-inner"
  }, React.createElement("a", {
    href: "#top",
    "aria-label": "Autorama Racing"
  }, React.createElement("img", {
    src: "/autorama_white.png",
    alt: ""
  })), React.createElement("p", {
    className: "footer-note"
  }, "Jogo em desenvolvimento.")));
}
function PurchaseModal({
  pack,
  onClose
}) {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState('');
  const emailRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const errorRef = React.useRef(null);
  const statusRef = React.useRef(status);
  statusRef.current = status;
  React.useEffect(() => {
    const trigger = document.activeElement;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbarWidth}px`;
    body.style.overflow = 'hidden';
    emailRef.current?.focus({
      preventScroll: true
    });
    const focusableElements = () => [...dialogRef.current.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled)')].filter(element => element.getClientRects().length);
    const onKeyDown = event => {
      if (event.key === 'Escape' && statusRef.current !== 'loading') onClose();
      if (event.key !== 'Tab') return;
      const elements = focusableElements();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first) {
        event.preventDefault();
        dialogRef.current.focus({
          preventScroll: true
        });
      } else if (!elements.includes(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const containFocus = event => {
      if (!dialogRef.current.contains(event.target)) {
        ;
        (focusableElements()[0] || dialogRef.current).focus({
          preventScroll: true
        });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('focusin', containFocus);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', containFocus);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      if (trigger?.isConnected) trigger.focus({
        preventScroll: true
      });
    };
  }, [onClose]);
  React.useEffect(() => {
    if (status === 'loading') dialogRef.current?.focus({
      preventScroll: true
    });else if (error) errorRef.current?.focus();
  }, [status, error]);
  const handleSubmit = async event => {
    event.preventDefault();
    setError('');
    setStatus('loading');
    try {
      const url = await createCheckout(pack.id, {
        email: email.trim()
      });
      onClose();
      window.location.assign(url);
    } catch (requestError) {
      setStatus('idle');
      setError(requestError.message || 'Não foi possível abrir o pagamento. Tente novamente.');
    }
  };
  return React.createElement("div", {
    className: "purchase-modal-backdrop",
    role: "presentation",
    onMouseDown: event => {
      if (event.target === event.currentTarget && status !== 'loading') onClose();
    }
  }, React.createElement("section", {
    ref: dialogRef,
    tabIndex: -1,
    className: "purchase-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "purchase-modal-title",
    "aria-describedby": "purchase-modal-description",
    "aria-busy": status === 'loading'
  }, React.createElement("div", {
    className: "purchase-modal-header"
  }, React.createElement("p", {
    className: "purchase-modal-kicker"
  }, "Pacote ", pack.name), React.createElement("button", {
    type: "button",
    className: "purchase-modal-close",
    onClick: onClose,
    disabled: status === 'loading',
    "aria-label": "Fechar"
  }, "\xD7")), React.createElement("div", {
    className: "purchase-modal-content"
  }, React.createElement("h2", {
    id: "purchase-modal-title"
  }, "Qual \xE9 o seu e-mail?"), React.createElement("p", {
    id: "purchase-modal-description"
  }, "Usaremos este e-mail para identificar sua compra e creditar os itens na sua conta. Voc\xEA pode comprar mesmo sem ter uma conta cadastrada."), React.createElement("form", {
    onSubmit: handleSubmit
  }, React.createElement("label", null, "Seu e-mail", React.createElement("input", {
    ref: emailRef,
    type: "email",
    value: email,
    onChange: event => setEmail(event.target.value),
    autoComplete: "email",
    maxLength: 254,
    required: true,
    disabled: status === 'loading'
  })), error && React.createElement("p", {
    ref: errorRef,
    tabIndex: -1,
    className: "purchase-modal-error",
    role: "alert"
  }, error), React.createElement("button", {
    type: "submit",
    className: "btn btn-primary purchase-modal-submit",
    disabled: status === 'loading'
  }, status === 'loading' ? 'Preparando pagamento…' : 'Continuar para pagamento', React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A"))), React.createElement("small", null, "Guarde seu comprovante. Os itens ser\xE3o adicionados \xE0 sua conta em at\xE9 2 dias \xFAteis ap\xF3s a confirma\xE7\xE3o do pagamento."))));
}
function PaymentConfirmation({
  result
}) {
  const [status, setStatus] = React.useState('checking');
  const [details, setDetails] = React.useState(null);
  const retryRef = React.useRef(0);
  const timerRef = React.useRef(null);
  const verifyPayment = React.useCallback(async () => {
    setStatus('checking');
    try {
      const payment = await getPaymentStatus(result);
      if (payment.status === 'paid') {
        setDetails(payment);
        setStatus('paid');
        return;
      }
      if (payment.status === 'pending' && retryRef.current < 15) {
        retryRef.current += 1;
        timerRef.current = window.setTimeout(verifyPayment, 2000);
        return;
      }
      setStatus(payment.status === 'pending' ? 'waiting' : 'error');
    } catch {
      setStatus('waiting');
    }
  }, [result]);
  React.useEffect(() => {
    verifyPayment();
    return () => window.clearTimeout(timerRef.current);
  }, [verifyPayment]);
  const closeConfirmation = () => {
    window.close();
    window.setTimeout(() => {
      if (!window.closed) window.location.assign(window.location.pathname);
    }, 150);
  };
  const pack = details ? packages.find(item => item.id === details.package_id) : null;
  const items = pack ? [...pack.includedCars.map(car => `Carro ${car}`), ...pack.features.filter(feature => feature.icon !== 'car').map(feature => feature.text)] : [];
  return React.createElement("main", {
    className: "payment-confirmation-shell"
  }, React.createElement("section", {
    className: "payment-confirmation-panel",
    "aria-live": "polite"
  }, React.createElement("img", {
    src: "/autorama_white.png",
    alt: "Autorama Racing",
    className: "payment-confirmation-logo"
  }), status === 'checking' && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "confirmation-spinner",
    "aria-hidden": "true"
  }), React.createElement("p", {
    className: "payment-confirmation-kicker"
  }, "Confirmando pagamento"), React.createElement("h1", null, "Estamos validando sua compra."), React.createElement("p", null, "Isso pode levar alguns segundos. Mantenha esta janela aberta.")), status === 'paid' && React.createElement(React.Fragment, null, React.createElement("span", {
    className: "confirmation-check",
    "aria-hidden": "true"
  }, "\u2713"), React.createElement("p", {
    className: "payment-confirmation-kicker success"
  }, "Compra confirmada"), React.createElement("h1", null, "Voc\xEA entrou para o grid de fundadores."), React.createElement("p", null, "O pacote ", React.createElement("strong", null, pack?.name), " foi confirmado para o e-mail", ' ', React.createElement("strong", null, details.email), ". Guarde seu comprovante."), React.createElement("ul", {
    className: "payment-confirmation-items"
  }, items.map(item => React.createElement("li", {
    key: item
  }, item))), React.createElement("p", {
    className: "payment-confirmation-next"
  }, "Os benef\xEDcios ser\xE3o adicionados \xE0 sua conta em at\xE9 ", React.createElement("strong", null, "2 dias \xFAteis"), "."), React.createElement("div", {
    className: "payment-confirmation-actions"
  }, details.receipt_url && React.createElement("a", {
    href: details.receipt_url,
    target: "_blank",
    rel: "noreferrer",
    className: "btn btn-outline"
  }, "Ver comprovante"), React.createElement("button", {
    type: "button",
    onClick: closeConfirmation,
    className: "btn btn-primary"
  }, "Fechar janela ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A")))), status === 'waiting' && React.createElement(React.Fragment, null, React.createElement("p", {
    className: "payment-confirmation-kicker"
  }, "Pagamento em processamento"), React.createElement("h1", null, "Estamos concluindo a confirma\xE7\xE3o."), React.createElement("p", null, "Se o pagamento foi aprovado, aguarde alguns minutos e consulte seu e-mail."), React.createElement("button", {
    type: "button",
    onClick: () => {
      retryRef.current = 0;
      verifyPayment();
    },
    className: "btn btn-outline confirmation-retry"
  }, "Verificar novamente ", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A"))), status === 'error' && React.createElement(React.Fragment, null, React.createElement("p", {
    className: "payment-confirmation-kicker"
  }, "N\xE3o confirmado"), React.createElement("h1", null, "N\xE3o conseguimos confirmar este pagamento."), React.createElement("p", null, "Se voc\xEA concluiu o pagamento, aguarde alguns minutos ou entre em contato com o suporte."), React.createElement("button", {
    type: "button",
    onClick: closeConfirmation,
    className: "btn btn-outline confirmation-retry"
  }, "Fechar janela"))));
}
function App() {
  const [paymentResult] = React.useState(readPaymentResult);
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('pacotes');
  const [faqOpen, setFaqOpen] = React.useState(false);
  const closePurchase = React.useCallback(() => setSelectedPackage(null), []);
  React.useEffect(() => {
    if (paymentResult || typeof IntersectionObserver === 'undefined') return undefined;
    const closing = document.getElementById('duvidas');
    if (!closing) return undefined;
    const observer = new IntersectionObserver(([entry]) => setActiveSection(entry.isIntersecting ? 'duvidas' : 'pacotes'), {
      rootMargin: '-35% 0px -20% 0px'
    });
    observer.observe(closing);
    return () => observer.disconnect();
  }, [paymentResult]);
  const handleNavigate = React.useCallback(item => {
    if (item.section === 'duvidas') setFaqOpen(true);
  }, []);
  if (paymentResult) return React.createElement(PaymentConfirmation, {
    result: paymentResult
  });
  return React.createElement("div", {
    id: "top",
    className: "page"
  }, React.createElement("div", {
    inert: selectedPackage ? '' : undefined
  }, React.createElement(Header, {
    activeSection: activeSection,
    onNavigate: handleNavigate
  }), React.createElement("main", null, React.createElement(Hero, null), React.createElement(Highlights, null), React.createElement(Packages, {
    onChoose: setSelectedPackage
  }), React.createElement(Closing, {
    faqOpen: faqOpen,
    onToggleFaq: () => setFaqOpen(value => !value)
  })), React.createElement(Footer, null)), selectedPackage && React.createElement(PurchaseModal, {
    pack: selectedPackage,
    onClose: closePurchase
  }));
}
export default App;
