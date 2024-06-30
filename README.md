# Audiophile

<!-- ![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/audiophile.png?raw=true)
 -->

![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/audiophile.gif?raw=true)

## Innehållsförteckning

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Live Demo](#live-demo)
  - [The Challenge](#the-challenge)
  - [Project Structure](#project-structure)
  - [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
- [My Process](#my-process)
  - [What I learned](#what-i-learned)
  - [Future Development](#future-development)
  - [Author](#author)

## Overview

### Introduction

Audiophile is an e-commerce website for audio products. The project uses React, Redux, and TypeScript and is built with Vite.

### Live Demo

- Solution URL: [Audiophile](https://audiophile-andrea.netlify.app/)

### The Challenge

Visitors should be able to:

- Navigate through the portfolio with ease, experiencing smooth transitions and animations.
- View projects through a horizontally scrolling carousel, enhanced by the integration of Framer Motion.
- Observe elements fading in and out of view dynamically as they scroll, thanks to the IntersectionObserver API combined with CSS animations.

![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/mobile-mockup.png?raw=true)

### Project Structure

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

### Technologies

    -React
    -Redux Toolkit
    -TypeScript
    -Vite
    -Tailwind CSS
    -Framer Motion

## Getting Started

### Prerequisites

To run this project locally, you need:

- Node.js
- npm eller yarn

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/ditt-repo-url.git
   ```
2. Navigate to the project directory:

   ```bash
   cd audiophile
   ```

3. Install the project dependencies:

   ```bash

   npm install

   ```

### Usage

```
    npm run dev

```

### Scripts

    -dev: Starts the development server.
    -build: Builds the project for production.
    -lint: Runs ESLint to check code standards.
    -preview: Previews the built application.

## My Process

### What I Learned

Through this project, I deepened my knowledge in:

    -React and its ecosystem
    -State management with Redux Toolkit
    -Typing with TypeScript
    -Build tools like Vite
    -Styling with Tailwind CSS
    -Animations with Framer Motion

### Future Development

-React Documentation
-Redux Toolkit Documentation
-TypeScript Documentation
-Vite Documentation
-Tailwind CSS Documentation

### Author

- GitHub - [Andrea Axelsson](https://github.com/Andrea-Axelsson)
- LinkedIn - [Andrea Axelsson](https://www.linkedin.com/in/axelsson-andrea/)
