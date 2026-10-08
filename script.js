// Respeita quem prefere menos movimento na tela
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ==================== TRADUÇÕES ====================
const translations = {
  'nav.home': { pt: 'Início', en: 'Home' },
  'nav.projects': { pt: 'Projetos', en: 'Projects' },
  'nav.tech': { pt: 'Tecnologias', en: 'Technologies' },
  'nav.education': { pt: 'Formação', en: 'Education' },
  'nav.languages': { pt: 'Idiomas', en: 'Languages' },
  'nav.about': { pt: 'Sobre mim', en: 'About me' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },

  'hero.eyebrow': { pt: 'Desenvolvedor Front-end', en: 'Front-end Developer' },
  'hero.role': { pt: 'construção de interfaces web', en: 'building web interfaces' },
  'hero.lede': {
    pt: 'Construo interfaces modernas, responsivas e experiências digitais focadas no usuário.',
    en: 'I build modern, responsive interfaces and digital experiences focused on the user.',
  },
  'hero.btnProjects': { pt: 'Ver projetos', en: 'View projects' },
  'hero.btnResume': { pt: 'Baixar currículo', en: 'Download résumé' },
  'a11y.skip': { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  'a11y.backToTop': { pt: 'Voltar ao topo', en: 'Back to top' },
  'a11y.menuOpen': { pt: 'Abrir menu', en: 'Open menu' },
  'a11y.menuClose': { pt: 'Fechar menu', en: 'Close menu' },
  'a11y.theme': { pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark theme' },
  'hero.location': { pt: 'Montes Claros, MG, Brasil', en: 'Montes Claros, MG, Brazil' },

  'projects.heading': { pt: 'Projetos', en: 'Projects' },
  'projects.subtitle': {
    pt: 'Uma seleção dos projetos front-end que venho desenvolvendo, com código no GitHub e demo publicada.',
    en: 'A selection of the front-end projects I have been building, with code on GitHub and a live demo.',
  },

  'project.viewProject': { pt: 'Ver projeto', en: 'View project' },

  'p1.whatLabel': { pt: 'O QUE É', en: 'WHAT IT IS' },
  'p1.what': {
    pt: 'Página de apresentação de produto inspirada no estilo da Apple, destacando especificações e recursos do aparelho de forma visual.',
    en: "A product showcase page inspired by Apple's style, visually highlighting the device's specs and features.",
  },
  'p1.howLabel': { pt: 'COMO FIZ', en: 'HOW I BUILT IT' },
  'p1.how': {
    pt: 'Estruturei os componentes em React, separando cada seção do produto (hero, especificações, galeria) em componentes reutilizáveis, e usei Tailwind para o layout responsivo e as transições entre seções.',
    en: 'I structured the components in React, splitting each product section (hero, specs, gallery) into reusable components, and used Tailwind for the responsive layout and section transitions.',
  },
  'p1.roleLabel': { pt: 'MINHA PARTICIPAÇÃO', en: 'MY ROLE' },
  'p1.role': {
    pt: 'Projeto individual, feito do zero: estrutura, estilo e conteúdo.',
    en: 'Solo project, built from scratch — structure, styling and content.',
  },

  'p2.whatLabel': { pt: 'O QUE É', en: 'WHAT IT IS' },
  'p2.what': {
    pt: 'Landing page de hamburgueria com cardápio interativo, carrinho de compras e finalização de pedido pelo WhatsApp.',
    en: 'A burger restaurant landing page with an interactive menu, shopping cart and checkout through WhatsApp.',
  },
  'p2.howLabel': { pt: 'COMO FIZ', en: 'HOW I BUILT IT' },
  'p2.how': {
    pt: 'Usei React com estado local para controlar o carrinho, Tailwind para o layout do cardápio, e montei a URL de checkout dinamicamente para abrir o WhatsApp já com o pedido preenchido.',
    en: 'I used React with local state to manage the cart, Tailwind for the menu layout, and built the checkout URL dynamically to open WhatsApp with the order pre-filled.',
  },
  'p2.roleLabel': { pt: 'MINHA PARTICIPAÇÃO', en: 'MY ROLE' },
  'p2.role': {
    pt: 'Projeto individual — do design do cardápio à lógica do carrinho e integração com WhatsApp.',
    en: 'Solo project — from the menu design to the cart logic and WhatsApp integration.',
  },

  // Projeto 3 (Weatherly) — textos alinhados com o HTML
  'p3.whatLabel': { pt: 'O QUE É', en: 'WHAT IT IS' },
  'p3.what': {
    pt: 'Dashboard de previsão do tempo em que é possível pesquisar qualquer cidade e ver o clima atual, a previsão por hora e para os próximos 7 dias, com gráfico de temperatura.',
    en: 'A weather forecast dashboard where you can search any city and see current conditions, the hourly forecast and the next 7 days, with a temperature chart.',
  },
  'p3.howLabel': { pt: 'COMO FIZ', en: 'HOW I BUILT IT' },
  'p3.how': {
    pt: 'Construí em React + TypeScript com Vite, consumindo a API real Open-Meteo com respostas tipadas, Recharts para o gráfico de temperatura, pesquisas recentes salvas no localStorage e tratamento de erros (cidade não encontrada, falha da API, sem conexão).',
    en: 'Built with React + TypeScript and Vite, consuming the real Open-Meteo API with typed responses, Recharts for the temperature chart, recent searches saved in localStorage and error handling (city not found, API failure, no connection).',
  },
  'p3.roleLabel': { pt: 'MINHA PARTICIPAÇÃO', en: 'MY ROLE' },
  'p3.role': {
    pt: 'Projeto individual, do layout responsivo com tema claro e escuro à integração com a API e ao deploy no GitHub Pages.',
    en: 'Solo project, from the responsive layout with light and dark themes to the API integration and deployment to GitHub Pages.',
  },

  'tech.heading': { pt: 'Tecnologias', en: 'Technologies' },
  'tech.devTitle': { pt: 'Desenvolvimento', en: 'Development' },
  'tech.devDesc': {
    pt: 'Interfaces web responsivas, componentes reutilizáveis, apps mobile e consumo de APIs.',
    en: 'Responsive web interfaces, reusable components, mobile apps and API consumption.',
  },
  'tech.devCount': { pt: '10 tecnologias', en: '10 technologies' },
  'tech.toolsTitle': { pt: 'Ferramentas e Deploy', en: 'Tools & Deploy' },
  'tech.toolsDesc': {
    pt: 'Controle de versão, ambiente de desenvolvimento e publicação dos projetos online.',
    en: 'Version control, development environment and publishing projects online.',
  },
  'tech.toolsFootL': { pt: 'Versionamento', en: 'Versioning' },

  'edu.heading': { pt: 'Formação', en: 'Education' },
  'edu.tag': { pt: 'Educação', en: 'Education' },
  'edu.statusBadge': { pt: 'FORMAÇÃO TÉCNICA EM ANDAMENTO', en: 'TECHNICAL PROGRAM IN PROGRESS' },
  'edu.course': { pt: 'Técnico em Desenvolvimento de Sistemas', en: 'Technical Program in Systems Development' },
  'edu.status': { pt: 'Previsão de conclusão: dezembro de 2026', en: 'Expected completion: December 2026' },
  'edu.skillsLabel': { pt: 'O QUE APRENDI NO CURSO', en: 'WHAT I LEARNED IN THE PROGRAM' },
  'edu.item1': { pt: 'Interfaces web com HTML, CSS, JavaScript e React, consumindo APIs.', en: 'Web interfaces with HTML, CSS, JavaScript and React, consuming APIs.' },
  'edu.item2': { pt: 'Aplicativos mobile com React Native.', en: 'Mobile apps with React Native.' },
  'edu.item3': { pt: 'Programação com Python.', en: 'Programming with Python.' },
  'edu.projectLabel': { pt: 'PROJETO ACADÊMICO', en: 'ACADEMIC PROJECT' },
  'edu.projectText': {
    pt: 'Aplicativo mobile desenvolvido durante o curso utilizando React Native e Expo, simulando uma plataforma de pet shop. O projeto conta com catálogo de acessórios, busca, carrinho de compras, adoção responsável e formulário de doações.',
    en: 'Mobile app built during the program using React Native and Expo, simulating a pet shop platform. It features an accessories catalog, search, a shopping cart, responsible adoption and a donations form.',
  },
  'edu.techLabel': { pt: 'Tecnologias utilizadas', en: 'Technologies used' },
  'edu.featuresLabel': { pt: 'Principais funcionalidades', en: 'Main features' },
  'feat.catalog': { pt: 'Catálogo', en: 'Catalog' },
  'feat.search': { pt: 'Busca', en: 'Search' },
  'feat.cart': { pt: 'Carrinho', en: 'Cart' },
  'feat.adoption': { pt: 'Adoção', en: 'Adoption' },
  'feat.donations': { pt: 'Doações', en: 'Donations' },
  'edu.videoCaption': {
    pt: 'Demonstração do app (interface em português)',
    en: 'App demo (interface in Portuguese)',
  },

  'lang.heading': { pt: 'Idiomas', en: 'Languages' },
  'lang.pt': { pt: 'PORTUGUÊS', en: 'PORTUGUESE' },
  'lang.ptLevel': { pt: 'Nativo', en: 'Native' },
  'lang.en': { pt: 'INGLÊS', en: 'ENGLISH' },
  'lang.enLevel': { pt: 'Intermediário', en: 'Intermediate' },

  'about.heading': { pt: 'Construo a interface inteira: do layout ao deploy.', en: 'I build the whole interface: from layout to deploy.' },
  'about.tag': { pt: 'SOBRE', en: 'ABOUT' },
  'about.p1': {
    pt: 'Sou desenvolvedor Front-end e gosto de transformar ideias em interfaces que funcionam bem de verdade. Tenho atenção aos detalhes de layout, performance e, principalmente, à experiência de quem vai usar.',
    en: "I'm a Front-end developer and I like turning ideas into interfaces that truly work well. I pay close attention to layout details, performance and, most of all, the experience of whoever is using it.",
  },
  'about.p2': {
    pt: 'Estou construindo minha base de projetos e usando este portfólio para documentar minha evolução, compartilhar o que venho aprendendo e colocar meus conhecimentos em prática.',
    en: "I'm building my base of projects and using this portfolio to document my progress, share what I've been learning and put my knowledge into practice.",
  },
  'about.p3': {
    pt: 'Meu objetivo é evoluir como desenvolvedor front-end, trabalhando com times que valorizam código organizado e boas experiências de usuário.',
    en: 'My goal is to grow as a front-end developer, working with teams that value organized code and good user experiences.',
  },
  'about.focusLabel': { pt: 'Foco', en: 'Focus' },
  'about.availLabel': { pt: 'Disponibilidade', en: 'Availability' },
  'about.availValue': { pt: 'Aberto a oportunidades', en: 'Open to opportunities' },
  'about.locationLabel': { pt: 'Localização', en: 'Location' },
  'about.locationValue': { pt: 'Montes Claros, MG, Brasil', en: 'Montes Claros, MG, Brazil' },

  'contact.heading': { pt: 'Vamos criar algo juntos?', en: "Let's build something together?" },
  'contact.tag': { pt: 'Contato', en: 'Contact' },
  'contact.lede': {
    pt: 'Se você quiser conversar sobre uma vaga, um projeto ou só trocar uma ideia sobre front-end, os canais abaixo estão abertos.',
    en: "If you'd like to talk about a job opening, a project, or just swap ideas about front-end, the channels below are open.",
  },
  'contact.copy': { pt: 'copiar', en: 'copy' },
  'contact.copied': { pt: 'copiado!', en: 'copied!' },
  'contact.copyError': { pt: 'erro ao copiar', en: 'copy failed' },
  'contact.formName': { pt: 'Nome', en: 'Name' },
  'contact.formMessage': { pt: 'Mensagem', en: 'Message' },
  'contact.placeholderName': { pt: 'Como você se chama', en: 'Your name' },
  'contact.placeholderMessage': { pt: 'Conte um pouco sobre o motivo do contato', en: "Tell me a bit about why you're reaching out" },
  'contact.cardTitle': { pt: 'Me chame no WhatsApp', en: 'Message me on WhatsApp' },
  'contact.cardSub': { pt: 'Respondo assim que possível', en: 'I reply as soon as I can' },
  'contact.formTopic': { pt: 'Assunto', en: 'Subject' },
  'contact.topicJob': { pt: 'Vaga', en: 'Job opening' },
  'contact.topicProject': { pt: 'Projeto', en: 'Project' },
  'contact.topicChat': { pt: 'Conversa', en: 'Just chatting' },
  'contact.submitBtn': { pt: 'Enviar pelo WhatsApp', en: 'Send via WhatsApp' },
  'contact.waGreeting': { pt: 'Olá, Fábio! Vim pelo seu portfólio.', en: "Hi, Fábio! I found you through your portfolio." },
  'contact.waName': { pt: 'Nome', en: 'Name' },

  'footer.tagline': { pt: 'Feito com HTML, Tailwind e JavaScript', en: 'Built with HTML, Tailwind and JavaScript' },
};

let currentLang = 'pt';

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = translations[el.getAttribute('data-i18n')];
    if (entry) el.textContent = entry[lang];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const entry = translations[el.getAttribute('data-i18n-aria-label')];
    if (entry) el.setAttribute('aria-label', entry[lang]);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const entry = translations[el.getAttribute('data-i18n-placeholder')];
    if (entry) el.setAttribute('placeholder', entry[lang]);
  });
  document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
}

function setLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyTranslations(lang);
  updateMenuLabel();
  langPtBtn.classList.toggle('active-lang', lang === 'pt');
  langEnBtn.classList.toggle('active-lang', lang === 'en');
  restartTypewriter();
}

const langPtBtn = document.getElementById('lang-pt');
const langEnBtn = document.getElementById('lang-en');
if (langPtBtn && langEnBtn) {
  langPtBtn.addEventListener('click', () => setLanguage('pt'));
  langEnBtn.addEventListener('click', () => setLanguage('en'));
}

// ---------- Barra de progresso de scroll ----------
const scrollBar = document.getElementById('scroll-bar');
function updateScrollBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollBar) scrollBar.style.width = pct + '%';
}
window.addEventListener('scroll', updateScrollBar, { passive: true });
updateScrollBar();

// ---------- Menu mobile ----------
const menuToggle = document.getElementById('menu-toggle');
const mobilePanel = document.getElementById('mobile-panel');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

function updateMenuLabel() {
  if (!menuToggle) return;
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-label', translations[isOpen ? 'a11y.menuClose' : 'a11y.menuOpen'][currentLang]);
}

function closeMobileMenu() {
  mobilePanel.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
  updateMenuLabel();
}

function toggleMobileMenu() {
  const isOpen = mobilePanel.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  iconOpen.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
  updateMenuLabel();
}

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener('click', toggleMobileMenu);
  document.querySelectorAll('[data-mobile]').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobilePanel.classList.contains('open')) {
      closeMobileMenu();
      menuToggle.focus();
    }
  });
}

// ---------- Lembrar o idioma escolhido ----------
// (fica depois do menu mobile porque usa menuToggle; roda antes do efeito de digitação)
(function restoreLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (saved === 'en' && langPtBtn && langEnBtn) {
    currentLang = 'en';
    applyTranslations('en');
    langPtBtn.classList.remove('active-lang');
    langEnBtn.classList.add('active-lang');
  }
  updateMenuLabel();
})();

// ---------- Scroll spy ----------
// O hero não tem id (o id "top" é do <main>, que sempre está na tela), então ele entra à parte.
const heroSection = document.querySelector('#top > section');
const sections = [
  heroSection,
  ...['sobre', 'projetos', 'tecnologias', 'formacao', 'idiomas', 'contato'].map((id) => document.getElementById(id)),
].filter(Boolean);

const navLinks = Array.from(document.querySelectorAll('[data-nav]'));

function setActiveLink(id) {
  navLinks.forEach((link) => {
    const target = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', target === id);
  });
}

if ('IntersectionObserver' in window && sections.length) {
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id || 'top');
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((section) => spyObserver.observe(section));
}

// ---------- Fade-in das seções ----------
const fadeEls = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window && fadeEls.length && !prefersReducedMotion) {
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  fadeEls.forEach((el) => fadeObserver.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add('is-visible'));
}

// ---------- Efeito de digitação no terminal (PT/EN) ----------
const terminalLinesData = {
  pt: [
    { id: 'tw-0', text: '// sobre.js', className: 'text-faint' },
    { id: 'tw-1', html: '<span class="text-[#8FB8E8]">const</span> dev = {' },
    { id: 'tw-2', html: '&nbsp;&nbsp;nome: <span class="text-[#9FCB9A]">"Fábio Alexsander"</span>,' },
    { id: 'tw-3', html: '&nbsp;&nbsp;foco: <span class="text-[#9FCB9A]">"front-end"</span>,' },
    { id: 'tw-4', html: '&nbsp;&nbsp;status: <span class="text-[#9FCB9A]">"disponível para novos projetos"</span>' },
    { id: 'tw-5', text: '};' },
  ],
  en: [
    { id: 'tw-0', text: '// about.js', className: 'text-faint' },
    { id: 'tw-1', html: '<span class="text-[#8FB8E8]">const</span> dev = {' },
    { id: 'tw-2', html: '&nbsp;&nbsp;name: <span class="text-[#9FCB9A]">"Fábio Alexsander"</span>,' },
    { id: 'tw-3', html: '&nbsp;&nbsp;focus: <span class="text-[#9FCB9A]">"front-end"</span>,' },
    { id: 'tw-4', html: '&nbsp;&nbsp;status: <span class="text-[#9FCB9A]">"available for new projects"</span>' },
    { id: 'tw-5', text: '};' },
  ],
};

let typewriterRunId = 0;

async function typeLine(el, text, runId) {
  for (let i = 0; i <= text.length; i++) {
    if (runId !== typewriterRunId) return;
    el.textContent = text.slice(0, i);
    await new Promise((r) => setTimeout(r, 14));
  }
}

async function runTypewriter() {
  const runId = ++typewriterRunId;
  const lines = terminalLinesData[currentLang];
  for (const line of lines) {
    const el = document.getElementById(line.id);
    if (!el) continue;
    el.innerHTML = '';
    if (runId !== typewriterRunId) return;
    if (line.html) {
      el.innerHTML = line.html;
      await new Promise((r) => setTimeout(r, 220));
    } else {
      await typeLine(el, line.text, runId);
    }
  }
}

function restartTypewriter() {
  if (prefersReducedMotion) {
    terminalLinesData[currentLang].forEach((line) => {
      const el = document.getElementById(line.id);
      if (el) el.innerHTML = line.html || line.text;
    });
    return;
  }
  runTypewriter();
}

if (prefersReducedMotion) {
  terminalLinesData[currentLang].forEach((line) => {
    const el = document.getElementById(line.id);
    if (el) el.innerHTML = line.html || line.text;
  });
} else {
  window.addEventListener('load', () => setTimeout(runTypewriter, 700));
}

// ---------- Copiar e-mail ----------
const copyBtn = document.getElementById('copy-email');
const emailLink = document.getElementById('email-link');

if (copyBtn && emailLink) {
  copyBtn.addEventListener('click', async () => {
    const email = emailLink.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = translations['contact.copied'][currentLang];
    } catch (e) {
      copyBtn.textContent = translations['contact.copyError'][currentLang];
    }
    setTimeout(() => {
      copyBtn.textContent = translations['contact.copy'][currentLang];
    }, 1800);
  });
}

// ---------- Formulário de contato (abre o WhatsApp) ----------
// Número com código do país (55) + DDD + número, só dígitos.
const WHATSAPP_NUMBER = '5538999621449';

const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const t = (key) => translations[key][currentLang];
    const name = document.getElementById('name').value.trim();
    const msg = document.getElementById('msg').value.trim();
    const topicInput = form.querySelector('input[name="topic"]:checked');
    const topicKey = topicInput ? 'contact.topic' + topicInput.value.charAt(0).toUpperCase() + topicInput.value.slice(1) : null;

    const text =
      t('contact.waGreeting') + '\n\n' +
      t('contact.waName') + ': ' + name + '\n' +
      (topicKey ? t('contact.formTopic') + ': ' + t(topicKey) + '\n' : '') +
      '\n' + msg;

    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);

    // Abre em nova aba; se o navegador bloquear, abre na mesma aba.
    // (Não usar 'noopener' no 3º argumento: nesse caso window.open sempre devolve null.)
    const win = window.open(url, '_blank');
    if (win) {
      win.opener = null;
    } else {
      window.location.href = url;
    }

    form.reset();
  });
}

// ---------- Tema claro/escuro ----------
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

// ---------- Voltar ao topo ----------
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  const toggleBackToTop = () => backToTop.classList.toggle('is-shown', window.scrollY > 600);
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}