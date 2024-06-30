# Audiophile

<!-- ![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/audiophile.png?raw=true)
 -->

![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/audiophile.gif?raw=true)

## Innehållsförteckning

- [Live Demo](#live-demo)
- [Introduktion](#introduktion)
- [Förutsättningar](#förutsättningar)
- [Installation](#installation)
- [Användning](#användning)
- [Scripts](#scripts)
- [Projektstruktur](#projektstruktur)
- [Teknologier](#teknologier)
- [Bidrag](#bidrag)
- [Licens](#licens)
- [Översikt](#översikt)
- [Min Process](#min-process)
- [Vad jag lärde mig](#vad-jag-lärde-mig)
- [Fortsatt utveckling](#fortsatt-utveckling)
- [Användbara resurser](#användbara-resurser)
- [Författare](#författare)

## Live Demo

- Solution URL: [Netlify](https://audiophile-andrea.netlify.app/)

## Introduktion

Audiophile är en e-handelswebbplats för ljudprodukter. Projektet använder React, Redux och TypeScript och är byggt med Vite.

![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/mobile-mockup.png?raw=true)

## Förutsättningar

För att köra detta projekt lokalt behöver du:

- Node.js
- npm eller yarn

## Installation

1. Klona repot:
   ```bash
   git clone https://github.com/ditt-repo-url.git
   ```
2. Navigera till projektmappen:

   ```bash
   cd audiophile
   ```

3. Installera projektet

   ```bash

   npm install

   ```

## Användning

```
    npm run dev

```

## Scripts

    -dev: Startar utvecklingsservern.
    -build: Bygger projektet för produktion.
    -lint: Kör ESLint för att kontrollera kodstandarder.
    -preview: Förhandsgranskar den byggda applikationen.

## Projektstruktur

```bash

audiophile/
├── public/
├── src/
│ ├── app/
│ │ └── store.ts
│ ├── components/
│ │ ├── About.tsx
│ │ ├── Button.tsx
│ │ ├── CartItem.tsx
│ │ ├── Categories.tsx
│ │ ├── Footer.tsx
│ │ ├── HamburgerDropdown.tsx
│ │ ├── Layout.tsx
│ │ ├── Navbar.tsx
│ │ ├── ProductArticle.tsx
│ │ ├── ProductFeatures.tsx
│ │ ├── ProductImageGrid.tsx
│ │ ├── ScrollToTop.tsx
│ │ └── Summary.tsx
│ ├── features/
│ │ ├── buttons/
│ │ │ └── clickedStateSlice.ts
│ │ ├── cart/
│ │ │ └── cartSlice.ts
│ │ └── counter/
│ │ └── counterSlice.ts
│ ├── pages/
│ │ ├── Category.tsx
│ │ ├── Checkout.tsx
│ │ ├── Home.tsx
│ │ └── ProductDetail.tsx
│ ├── utils/
│ │ ├── interfaces.ts
│ │ └── ScrollToTop.tsx
│ ├── data.json
│ ├── App.tsx
│ └── index.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json

```

## Teknologier

    -React
    -Redux Toolkit
    -TypeScript
    -Vite
    -Tailwind CSS
    -Framer Motion

## Översikt

Audiophile är en modern och responsiv webbapplikation för att köpa högkvalitativa ljudprodukter. Projektet är uppbyggt med fokus på prestanda och användarupplevelse.

## Min Process

Under utvecklingen av detta projekt har jag använt moderna verktyg och teknologier för att säkerställa en högkvalitativ och skalbar kodbas.

## Vad jag lärde mig

Genom detta projekt har jag fördjupat mina kunskaper inom:

    -React och dess ekosystem
    -State management med Redux Toolkit
    -Typning med TypeScript
    -Byggverktyg som Vite
    -Styling med Tailwind CSS
    -Animeringar med Framer Motion

## Fortsatt utveckling

-React Documentation
-Redux Toolkit Documentation
-TypeScript Documentation
-Vite Documentation
-Tailwind CSS Documentation

## Författare

- GitHub - [Andrea Axelsson](https://github.com/Andrea-Axelsson)
- LinkedIn - [Andrea Axelsson](https://www.linkedin.com/in/axelsson-andrea/)
