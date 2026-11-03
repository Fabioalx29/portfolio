// Respeita quem prefere menos movimento na tela
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ==================== TRADUÇÕES ====================
const translations = {
  'nav.home': { pt: 'Início', en: 'Home', ja: 'ホーム' },
  'nav.projects': { pt: 'Projetos', en: 'Projects', ja: 'プロジェクト' },
  'nav.tech': { pt: 'Tecnologias', en: 'Technologies', ja: '技術' },
  'nav.education': { pt: 'Formação', en: 'Education', ja: '学歴' },
  'nav.languages': { pt: 'Idiomas', en: 'Languages', ja: '言語' },
  'nav.about': { pt: 'Sobre mim', en: 'About me', ja: '自己紹介' },
  'nav.contact': { pt: 'Contato', en: 'Contact', ja: 'お問い合わせ' },

  'hero.eyebrow': { pt: 'Desenvolvedor Front-end', en: 'Front-end Developer', ja: 'フロントエンド開発者' },
  'hero.role': { pt: 'construção de interfaces web', en: 'building web interfaces', ja: 'Webインターフェースの開発' },
  'hero.lede': {
    pt: 'Construo interfaces modernas, responsivas e experiências digitais focadas no usuário.',
    en: 'I build modern, responsive interfaces and digital experiences focused on the user.',
    ja: 'モダンでレスポンシブなインターフェースと、ユーザーを第一に考えたデジタル体験を作っています。',
  },
  'hero.btnProjects': { pt: 'Ver projetos', en: 'View projects', ja: 'プロジェクトを見る' },
  'hero.btnResume': { pt: 'Baixar currículo', en: 'Download résumé', ja: '履歴書をダウンロード' },
  'a11y.skip': { pt: 'Pular para o conteúdo', en: 'Skip to content', ja: 'コンテンツへスキップ' },
  'a11y.backToTop': { pt: 'Voltar ao topo', en: 'Back to top', ja: 'ページ上部へ戻る' },
  'a11y.menuOpen': { pt: 'Abrir menu', en: 'Open menu', ja: 'メニューを開く' },
  'a11y.menuClose': { pt: 'Fechar menu', en: 'Close menu', ja: 'メニューを閉じる' },
  'a11y.theme': { pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark theme', ja: 'ライト/ダークテーマを切り替え' },
  'hero.location': { pt: 'Montes Claros, MG, Brasil', en: 'Montes Claros, MG, Brazil', ja: 'ブラジル、ミナスジェライス州モンテスクラロス' },

  'projects.heading': { pt: 'Projetos', en: 'Projects', ja: 'プロジェクト' },
  'projects.subtitle': {
    pt: 'Uma seleção dos projetos front-end que venho desenvolvendo, com código no GitHub e demo publicada.',
    en: 'A selection of the front-end projects I have been building, with code on GitHub and a live demo.',
    ja: '開発してきたフロントエンドプロジェクトの一部です。コードはGitHubに、デモは公開されています。',
  },

  'project.viewProject': { pt: 'Ver projeto', en: 'View project', ja: 'プロジェクトを見る' },

  'p1.whatLabel': { pt: 'O QUE É', en: 'WHAT IT IS', ja: '概要' },
  'p1.what': {
    pt: 'O Atlas é uma plataforma de descoberta de destinos que permite explorar lugares, visualizar localizações em mapas interativos, consultar informações meteorológicas e planejar viagens.',
    en: 'Atlas is a destination discovery platform that lets you explore places, view locations on interactive maps, check weather information and plan trips.',
    ja: 'Atlasは、目的地を探したり、インタラクティブな地図で場所を確認したり、天気情報を調べたり、旅行を計画したりできる旅行先発見プラットフォームです。',
  },
  'p1.howLabel': { pt: 'COMO FIZ', en: 'HOW I BUILT IT', ja: '制作方法' },
  'p1.how': {
    pt: 'Desenvolvi o projeto utilizando React e TypeScript, com Tailwind CSS para a interface, React Leaflet para os mapas e integração com a API Open-Meteo para informações meteorológicas. Também utilizei React Router para a navegação entre páginas.',
    en: 'I built the project with React and TypeScript, using Tailwind CSS for the interface, React Leaflet for the maps and the Open-Meteo API for weather information. I also used React Router to navigate between pages.',
    ja: 'ReactとTypeScriptでプロジェクトを開発し、インターフェースにTailwind CSS、地図にReact Leaflet、天気情報にOpen-Meteo APIを使用しました。ページ間の移動にはReact Routerも利用しています。',
  },
  'p1.roleLabel': { pt: 'MINHA PARTICIPAÇÃO', en: 'MY ROLE', ja: '担当' },
  'p1.role': {
    pt: 'Projeto individual, desenvolvido por mim desde a estruturação até a implementação. Fui responsável pela criação das interfaces, funcionalidades, integração com APIs, responsividade e publicação do projeto.',
    en: 'Solo project, developed by me from planning through implementation. I was responsible for creating the interfaces, features, API integration, responsiveness and publishing the project.',
    ja: '個人プロジェクトで、構成の設計から実装まで私が一人で開発しました。インターフェース、機能、API連携、レスポンシブ対応、公開までを担当しました。',
  },

  'p2.whatLabel': { pt: 'O QUE É', en: 'WHAT IT IS', ja: '概要' },
  'p2.what': {
    pt: 'Landing page de hamburgueria com cardápio interativo, carrinho de compras e finalização de pedido pelo WhatsApp.',
    en: 'A burger restaurant landing page with an interactive menu, shopping cart and checkout through WhatsApp.',
    ja: 'インタラクティブなメニュー、ショッピングカート、WhatsAppでの注文確定を備えたハンバーガー店のランディングページです。',
  },
  'p2.howLabel': { pt: 'COMO FIZ', en: 'HOW I BUILT IT', ja: '制作方法' },
  'p2.how': {
    pt: 'Usei React com estado local para controlar o carrinho, Tailwind para o layout do cardápio, e montei a URL de checkout dinamicamente para abrir o WhatsApp já com o pedido preenchido.',
    en: 'I used React with local state to manage the cart, Tailwind for the menu layout, and built the checkout URL dynamically to open WhatsApp with the order pre-filled.',
    ja: 'カート管理にReactのローカルステートを使い、メニューのレイアウトにはTailwindを使用。チェックアウトURLを動的に生成し、注文内容が入力済みの状態でWhatsAppを開きます。',
  },
  'p2.roleLabel': { pt: 'MINHA PARTICIPAÇÃO', en: 'MY ROLE', ja: '担当' },
  'p2.role': {
    pt: 'Projeto individual — do design do cardápio à lógica do carrinho e integração com WhatsApp.',
    en: 'Solo project — from the menu design to the cart logic and WhatsApp integration.',
    ja: '個人プロジェクト。メニューのデザインからカートのロジック、WhatsApp連携まで担当しました。',
  },

  // Projeto 3 (Weatherly) — textos alinhados com o HTML
  'p3.whatLabel': { pt: 'O QUE É', en: 'WHAT IT IS', ja: '概要' },
  'p3.what': {
    pt: 'Dashboard de previsão do tempo em que é possível pesquisar qualquer cidade e ver o clima atual, a previsão por hora e para os próximos 7 dias, com gráfico de temperatura.',
    en: 'A weather forecast dashboard where you can search any city and see current conditions, the hourly forecast and the next 7 days, with a temperature chart.',
    ja: '任意の都市を検索して、現在の天気、1時間ごとの予報、今後7日間の予報を気温グラフ付きで確認できる天気予報ダッシュボードです。',
  },
  'p3.howLabel': { pt: 'COMO FIZ', en: 'HOW I BUILT IT', ja: '制作方法' },
  'p3.how': {
    pt: 'Construí em React + TypeScript com Vite, consumindo a API real Open-Meteo com respostas tipadas, Recharts para o gráfico de temperatura, pesquisas recentes salvas no localStorage e tratamento de erros (cidade não encontrada, falha da API, sem conexão).',
    en: 'Built with React + TypeScript and Vite, consuming the real Open-Meteo API with typed responses, Recharts for the temperature chart, recent searches saved in localStorage and error handling (city not found, API failure, no connection).',
    ja: 'React + TypeScript と Vite で構築。型付けされたレスポンスで実際のOpen-Meteo APIを利用し、気温グラフにRecharts、最近の検索をlocalStorageに保存、エラー処理（都市が見つからない、API障害、接続なし）も実装しました。',
  },
  'p3.roleLabel': { pt: 'MINHA PARTICIPAÇÃO', en: 'MY ROLE', ja: '担当' },
  'p3.role': {
    pt: 'Projeto individual, do layout responsivo com tema claro e escuro à integração com a API e ao deploy no GitHub Pages.',
    en: 'Solo project, from the responsive layout with light and dark themes to the API integration and deployment to GitHub Pages.',
    ja: '個人プロジェクト。ライト/ダークテーマ対応のレスポンシブレイアウトから、API連携、GitHub Pagesへのデプロイまで担当しました。',
  },

  'tech.heading': { pt: 'Tecnologias', en: 'Technologies', ja: '技術' },
  'tech.devTitle': { pt: 'Desenvolvimento', en: 'Development', ja: '開発' },
  'tech.devDesc': {
    pt: 'Interfaces web responsivas, componentes reutilizáveis, apps mobile e consumo de APIs.',
    en: 'Responsive web interfaces, reusable components, mobile apps and API consumption.',
    ja: 'レスポンシブなWebインターフェース、再利用可能なコンポーネント、モバイルアプリ、API連携。',
  },
  'tech.devCount': { pt: '10 tecnologias', en: '10 technologies', ja: '10の技術' },
  'tech.toolsTitle': { pt: 'Ferramentas e Deploy', en: 'Tools & Deploy', ja: 'ツールとデプロイ' },
  'tech.toolsDesc': {
    pt: 'Controle de versão, ambiente de desenvolvimento e publicação dos projetos online.',
    en: 'Version control, development environment and publishing projects online.',
    ja: 'バージョン管理、開発環境、プロジェクトのオンライン公開。',
  },
  'tech.toolsFootL': { pt: 'Versionamento', en: 'Versioning', ja: 'バージョン管理' },

  'edu.heading': { pt: 'Formação', en: 'Education', ja: '学歴' },
  'edu.tag': { pt: 'Educação', en: 'Education', ja: '教育' },
  'edu.statusBadge': { pt: 'FORMAÇÃO TÉCNICA EM ANDAMENTO', en: 'TECHNICAL PROGRAM IN PROGRESS', ja: '専門課程 在学中' },
  'edu.course': { pt: 'Técnico em Desenvolvimento de Sistemas', en: 'Technical Program in Systems Development', ja: 'システム開発テクニカルコース' },
  'edu.status': { pt: 'Previsão de conclusão: dezembro de 2026', en: 'Expected completion: December 2026', ja: '修了予定：2026年12月' },
  'edu.skillsLabel': { pt: 'O QUE APRENDI NO CURSO', en: 'WHAT I LEARNED IN THE PROGRAM', ja: 'コースで学んだこと' },
  'edu.item1': {
    pt: 'Interfaces web com HTML, CSS, JavaScript e React, consumindo APIs.',
    en: 'Web interfaces with HTML, CSS, JavaScript and React, consuming APIs.',
    ja: 'HTML、CSS、JavaScript、Reactによるウェブインターフェースの開発とAPI連携。',
  },
  'edu.item2': { pt: 'Aplicativos mobile com React Native.', en: 'Mobile apps with React Native.', ja: 'React Nativeによるモバイルアプリ。' },
  'edu.item3': { pt: 'Programação com Python.', en: 'Programming with Python.', ja: 'Pythonによるプログラミング。' },
  'edu.projectLabel': { pt: 'PROJETO ACADÊMICO', en: 'ACADEMIC PROJECT', ja: '学内プロジェクト' },
  'edu.projectText': {
    pt: 'Aplicativo mobile desenvolvido durante o curso utilizando React Native e Expo, simulando uma plataforma de pet shop. O projeto conta com catálogo de acessórios, busca, carrinho de compras, adoção responsável e formulário de doações.',
    en: 'Mobile app built during the program using React Native and Expo, simulating a pet shop platform. It features an accessories catalog, search, a shopping cart, responsible adoption and a donations form.',
    ja: 'コース中にReact NativeとExpoで開発したモバイルアプリで、ペットショップのプラットフォームを模しています。アクセサリーのカタログ、検索、ショッピングカート、責任ある里親制度、寄付フォームを備えています。',
  },
  'edu.techLabel': { pt: 'Tecnologias utilizadas', en: 'Technologies used', ja: '使用技術' },
  'edu.featuresLabel': { pt: 'Principais funcionalidades', en: 'Main features', ja: '主な機能' },
  'feat.catalog': { pt: 'Catálogo', en: 'Catalog', ja: 'カタログ' },
  'feat.search': { pt: 'Busca', en: 'Search', ja: '検索' },
  'feat.cart': { pt: 'Carrinho', en: 'Cart', ja: 'カート' },
  'feat.adoption': { pt: 'Adoção', en: 'Adoption', ja: '里親' },
  'feat.donations': { pt: 'Doações', en: 'Donations', ja: '寄付' },
  'edu.videoCaption': {
    pt: 'Demonstração do app (interface em português)',
    en: 'App demo (interface in Portuguese)',
    ja: 'アプリのデモ（インターフェースはポルトガル語）',
  },

  'lang.heading': { pt: 'Idiomas', en: 'Languages', ja: '言語' },
  'lang.pt': { pt: 'PORTUGUÊS', en: 'PORTUGUESE', ja: 'ポルトガル語' },
  'lang.ptLevel': { pt: 'Nativo', en: 'Native', ja: 'ネイティブ' },
  'lang.en': { pt: 'INGLÊS', en: 'ENGLISH', ja: '英語' },
  'lang.enLevel': { pt: 'Intermediário', en: 'Intermediate', ja: '中級' },

  'about.heading': {
    pt: 'Construo a interface inteira: do layout ao deploy.',
    en: 'I build the whole interface: from layout to deploy.',
    ja: 'インターフェース全体を作ります：レイアウトからデプロイまで。',
  },
  'about.tag': { pt: 'SOBRE', en: 'ABOUT', ja: '自己紹介' },
  'about.p1': {
    pt: 'Sou desenvolvedor Front-end e gosto de transformar ideias em interfaces que funcionam bem de verdade. Tenho atenção aos detalhes de layout, performance e, principalmente, à experiência de quem vai usar.',
    en: "I'm a Front-end developer and I like turning ideas into interfaces that truly work well. I pay close attention to layout details, performance and, most of all, the experience of whoever is using it.",
    ja: '私はフロントエンド開発者で、アイデアを本当に使いやすいインターフェースに変えることが好きです。レイアウトの細部、パフォーマンス、そして何より使う人の体験に気を配っています。',
  },
  'about.p2': {
    pt: 'Estou construindo minha base de projetos e usando este portfólio para documentar minha evolução, compartilhar o que venho aprendendo e colocar meus conhecimentos em prática.',
    en: "I'm building my base of projects and using this portfolio to document my progress, share what I've been learning and put my knowledge into practice.",
    ja: 'プロジェクトの土台を築きながら、このポートフォリオで自分の成長を記録し、学んでいることを共有し、知識を実践に活かしています。',
  },
  'about.p3': {
    pt: 'Meu objetivo é evoluir como desenvolvedor front-end, trabalhando com times que valorizam código organizado e boas experiências de usuário.',
    en: 'My goal is to grow as a front-end developer, working with teams that value organized code and good user experiences.',
    ja: '整理されたコードと良いユーザー体験を大切にするチームで働きながら、フロントエンド開発者として成長することが目標です。',
  },
  'about.focusLabel': { pt: 'Foco', en: 'Focus', ja: '注力分野' },
  'about.availLabel': { pt: 'Disponibilidade', en: 'Availability', ja: '稼働状況' },
  'about.availValue': { pt: 'Aberto a oportunidades', en: 'Open to opportunities', ja: '新しい機会を募集中' },
  'about.locationLabel': { pt: 'Localização', en: 'Location', ja: '所在地' },
  'about.locationValue': { pt: 'Montes Claros, MG, Brasil', en: 'Montes Claros, MG, Brazil', ja: 'ブラジル、ミナスジェライス州モンテスクラロス' },

  'contact.heading': { pt: 'Vamos criar algo juntos?', en: "Let's build something together?", ja: '一緒に何か作りませんか？' },
  'contact.tag': { pt: 'Contato', en: 'Contact', ja: 'お問い合わせ' },
  'contact.lede': {
    pt: 'Se você quiser conversar sobre uma vaga, um projeto ou só trocar uma ideia sobre front-end, os canais abaixo estão abertos.',
    en: "If you'd like to talk about a job opening, a project, or just swap ideas about front-end, the channels below are open.",
    ja: '求人、プロジェクト、あるいはフロントエンドの雑談など、お気軽に下記のチャンネルからご連絡ください。',
  },
  'contact.copy': { pt: 'copiar', en: 'copy', ja: 'コピー' },
  'contact.copied': { pt: 'copiado!', en: 'copied!', ja: 'コピーしました！' },
  'contact.copyError': { pt: 'erro ao copiar', en: 'copy failed', ja: 'コピーに失敗' },
  'contact.formName': { pt: 'Nome', en: 'Name', ja: '名前' },
  'contact.formMessage': { pt: 'Mensagem', en: 'Message', ja: 'メッセージ' },
  'contact.placeholderName': { pt: 'Como você se chama', en: 'Your name', ja: 'お名前' },
  'contact.placeholderMessage': {
    pt: 'Conte um pouco sobre o motivo do contato',
    en: "Tell me a bit about why you're reaching out",
    ja: 'ご連絡の内容を簡単にお書きください',
  },
  'contact.cardTitle': { pt: 'Me chame no WhatsApp', en: 'Message me on WhatsApp', ja: 'WhatsAppでメッセージ' },
  'contact.cardSub': { pt: 'Respondo assim que possível', en: 'I reply as soon as I can', ja: 'できるだけ早く返信します' },
  'contact.formTopic': { pt: 'Assunto', en: 'Subject', ja: '件名' },
  'contact.topicJob': { pt: 'Vaga', en: 'Job opening', ja: '求人' },
  'contact.topicProject': { pt: 'Projeto', en: 'Project', ja: 'プロジェクト' },
  'contact.topicChat': { pt: 'Conversa', en: 'Just chatting', ja: '雑談' },
  'contact.submitBtn': { pt: 'Enviar pelo WhatsApp', en: 'Send via WhatsApp', ja: 'WhatsAppで送信' },
  'contact.waGreeting': {
    pt: 'Olá, Fábio! Vim pelo seu portfólio.',
    en: "Hi, Fábio! I found you through your portfolio.",
    ja: 'こんにちは、Fábioさん！ポートフォリオを見て連絡しました。',
  },
  'contact.waName': { pt: 'Nome', en: 'Name', ja: '名前' },

  'footer.tagline': {
    pt: 'Feito com HTML, Tailwind e JavaScript',
    en: 'Built with HTML, Tailwind and JavaScript',
    ja: 'HTML、Tailwind、JavaScriptで制作',
  },
};

const SUPPORTED_LANGS = ['pt', 'en', 'ja'];
const HTML_LANG = { pt: 'pt-BR', en: 'en', ja: 'ja' };

// Busca a tradução; se faltar no idioma escolhido, cai para inglês e depois português
function tr(entry, lang) {
  return entry[lang] || entry.en || entry.pt;
}

let currentLang = 'pt';

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = translations[el.getAttribute('data-i18n')];
    if (entry) el.textContent = tr(entry, lang);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const entry = translations[el.getAttribute('data-i18n-aria-label')];
    if (entry) el.setAttribute('aria-label', tr(entry, lang));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const entry = translations[el.getAttribute('data-i18n-placeholder')];
    if (entry) el.setAttribute('placeholder', tr(entry, lang));
  });
  document.documentElement.setAttribute('lang', HTML_LANG[lang] || 'en');
}

const langPtBtn = document.getElementById('lang-pt');
const langEnBtn = document.getElementById('lang-en');
let langJaBtn = document.getElementById('lang-ja');

// Se o HTML ainda não tem o botão de japonês, cria um copiando o botão de inglês
if (!langJaBtn && langEnBtn) {
  langJaBtn = langEnBtn.cloneNode(true);
  langJaBtn.id = 'lang-ja';
  langJaBtn.textContent = '日本語';
  langJaBtn.classList.remove('active-lang');
  langJaBtn.removeAttribute('data-i18n');
  langJaBtn.setAttribute('lang', 'ja');
  langJaBtn.setAttribute('aria-label', '日本語');
  langJaBtn.setAttribute('title', '日本語');
  langEnBtn.insertAdjacentElement('afterend', langJaBtn);
}

function updateLangButtons(lang) {
  if (langPtBtn) langPtBtn.classList.toggle('active-lang', lang === 'pt');
  if (langEnBtn) langEnBtn.classList.toggle('active-lang', lang === 'en');
  if (langJaBtn) langJaBtn.classList.toggle('active-lang', lang === 'ja');
}

function setLanguage(lang) {
  if (lang === currentLang || !SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyTranslations(lang);
  updateMenuLabel();
  updateLangButtons(lang);
  restartTypewriter();
}

if (langPtBtn) langPtBtn.addEventListener('click', () => setLanguage('pt'));
if (langEnBtn) langEnBtn.addEventListener('click', () => setLanguage('en'));
if (langJaBtn) langJaBtn.addEventListener('click', () => setLanguage('ja'));

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
  menuToggle.setAttribute('aria-label', tr(translations[isOpen ? 'a11y.menuClose' : 'a11y.menuOpen'], currentLang));
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
  if ((saved === 'en' || saved === 'ja') && SUPPORTED_LANGS.includes(saved)) {
    currentLang = saved;
    applyTranslations(saved);
    updateLangButtons(saved);
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

// ---------- Efeito de digitação no terminal (PT/EN/JA) ----------
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
  ja: [
    { id: 'tw-0', text: '// about.js', className: 'text-faint' },
    { id: 'tw-1', html: '<span class="text-[#8FB8E8]">const</span> dev = {' },
    { id: 'tw-2', html: '&nbsp;&nbsp;名前: <span class="text-[#9FCB9A]">"Fábio Alexsander"</span>,' },
    { id: 'tw-3', html: '&nbsp;&nbsp;専門: <span class="text-[#9FCB9A]">"フロントエンド"</span>,' },
    { id: 'tw-4', html: '&nbsp;&nbsp;状況: <span class="text-[#9FCB9A]">"新しいプロジェクトに対応可能"</span>' },
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
      copyBtn.textContent = tr(translations['contact.copied'], currentLang);
    } catch (e) {
      copyBtn.textContent = tr(translations['contact.copyError'], currentLang);
    }
    setTimeout(() => {
      copyBtn.textContent = tr(translations['contact.copy'], currentLang);
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

    const t = (key) => tr(translations[key], currentLang);
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