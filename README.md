# Fábio Alexsander — Portfólio

Portfólio pessoal de **Fábio Alexsander**, desenvolvedor front-end júnior em Montes Claros, MG. O site apresenta meus projetos, tecnologias, formação e formas de contato.

🔗 **Site:** [fabioalx29.github.io/portfolio](https://fabioalx29.github.io/portfolio/)

---

## Funcionalidades

- **Bilíngue (PT/EN):** troca de idioma na hora, e a escolha fica salva no navegador.
- **Tema claro e escuro:** alternância pelo menu, também salva no navegador.
- **Responsivo:** layout pensado para celular, tablet e desktop, com menu mobile.
- **Contato pelo WhatsApp:** o formulário monta a mensagem (nome, assunto e texto) e abre a conversa já preenchida.
- **Currículo em PDF:** botão de download no topo e na seção de contato.
- **Animações discretas:** terminal com efeito de digitação, barra de progresso de rolagem, destaque do menu conforme a seção e botão de voltar ao topo.
- **Acessibilidade:** link "Pular para o conteúdo", navegação por teclado, rótulos para leitores de tela e respeito à preferência de reduzir movimento.
- **SEO e compartilhamento:** meta tags, Open Graph e dados estruturados (JSON-LD).

## Tecnologias

| Área | O que usei |
|---|---|
| Estrutura | HTML5 |
| Estilo | [Tailwind CSS](https://tailwindcss.com/) (via CDN) e CSS com variáveis para os temas |
| Lógica | JavaScript puro (sem frameworks) |
| Fontes | Fraunces, IBM Plex Sans e IBM Plex Mono (Google Fonts) |
| Hospedagem | GitHub Pages |

## Projetos em destaque

| Projeto | Tecnologias | Demo | Código |
|---|---|---|---|
| iPhone 17 Pro — Landing Page | React, Tailwind | [Ver](https://fabioalx29.github.io/Projeto-React-Tailwind/) | [GitHub](https://github.com/Fabioalx29/Projeto-React-Tailwind) |
| Hamburgueria do Dev | React, Tailwind, JavaScript | [Ver](https://fabioalx29.github.io/Projeto-Hamburgueria/) | [GitHub](https://github.com/Fabioalx29/Projeto-Hamburgueria) |
| Weatherly — Previsão do Tempo | React, TypeScript, Tailwind, Recharts | [Ver](https://fabioalx29.github.io/Projeto-Clima-/) | [GitHub](https://github.com/Fabioalx29/Projeto-Clima-) |

## Estrutura do projeto

```
.
├── index.html     # estrutura, estilos e conteúdo da página
├── script.js      # traduções, tema, menu, animações e formulário
├── README.md
└── public/        # imagens, vídeo e currículo
    ├── Curriculo-Fabio-Alexsander.pdf
    ├── foto-perfil.jpg.jpeg
    ├── foto projeto iph.png
    ├── foto bgrr.jpg
    ├── img pj.png
    └── video pet.mp4
```

## Como rodar localmente

Não precisa instalar nada. Baixe ou clone o repositório e abra o `index.html` no navegador.

```bash
git clone https://github.com/Fabioalx29/portfolio.git
cd portfolio
```

Para testar com um servidor local (recomendado, porque alguns recursos, como copiar o e-mail, exigem HTTPS ou `localhost`):

```bash
# com Python
python -m http.server 8000

# ou com Node
npx serve
```

Depois acesse `http://localhost:8000`.

> O Tailwind e as fontes são carregados pela internet, então é preciso estar online para ver o visual completo.

## Como personalizar

- **Textos:** ficam no objeto `translations` do `script.js`, em português e inglês. O HTML aponta para eles com o atributo `data-i18n`.
- **Cores e temas:** são variáveis CSS (`--c-bg`, `--c-accent` etc.) no início do `<style>` do `index.html`.
- **Número do WhatsApp:** constante `WHATSAPP_NUMBER` no `script.js` (código do país + DDD + número, só dígitos).
- **Currículo:** substitua o PDF em `public/` mantendo o nome `Curriculo-Fabio-Alexsander.pdf`.

## Contato

- **LinkedIn:** [linkedin.com/in/fabio-alexsander](https://www.linkedin.com/in/fabio-alexsander-811b90358)
- **GitHub:** [github.com/Fabioalx29](https://github.com/Fabioalx29)
- **E-mail:** fabioalexsander290990@gmail.com

---

© 2026 Fábio Alexsander
