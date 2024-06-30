# Audiophile

![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/audiophile.gif?raw=true)

## Innehållsförteckning

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Live Demo](#live-demo)
  - [The Challenge](#the-challenge)
  - [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Future Development](#future-development)
  - [Author](#author)

## Overview

### Introduction

This is a solution to the [Frontend Mentor - Audiophile app](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Live Demo

- Solution URL: [Audiophile](https://audiophile-andrea.netlify.app/)

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary

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

![Project full size](https://github.com/Andrea-Axelsson/audiophile/blob/main/public/assets/shared/desktop-mockup.png?raw=true)

### Built with

    -React
    -Redux Toolkit
    -TypeScript
    -Vite
    -Tailwind CSS
    -Framer Motion

### What I Learned

This project was a significant milestone in my development journey, providing me with deep insights into Redux, Tailwind CSS, and React Router. Here are some key learnings:

Redux for Global State Management: Working extensively with Redux gave me a better understanding of managing global states efficiently. I realized how powerful and beneficial it is to have a single source of truth for state management in a complex application. Using Redux Toolkit streamlined the process of creating slices and actions, making the code more maintainable and easier to understand.

First Project Using Tailwind CSS: This project marked my first experience with Tailwind CSS. I discovered the benefits of utility-first CSS, such as faster styling processes and more consistent designs. Tailwind's approach to styling allowed me to focus on building responsive and aesthetically pleasing interfaces without writing extensive custom CSS.

React Router for SPA: Implementing React Router provided me with a solid understanding of creating Single Page Applications (SPA). I learned how to set up dynamic routing, manage navigation, and ensure good performance across the site. React Router enabled a seamless user experience, with efficient page transitions and a clean URL structure.

Overall, this project enhanced my skills in modern web development practices, making me more proficient in creating scalable and maintainable applications.

### Future Development

In future iterations of this project, I aim to implement several enhancements to improve functionality and user experience:

Form Validations: I plan to add comprehensive form validations during the checkout process. This will ensure that users receive immediate feedback if any fields are missed or incorrectly filled out, enhancing the overall user experience and reducing the likelihood of errors during checkout.

Fullstack Integration with Database: I intend to transition from using a global Redux state for cart management to a fullstack approach that integrates with a database. By doing this, I can maintain the state of the cart even after the browser is refreshed, providing a more robust and persistent shopping experience for users. This change will also allow for better data management and tracking across user sessions.

### Author

- GitHub - [Andrea Axelsson](https://github.com/Andrea-Axelsson)
- LinkedIn - [Andrea Axelsson](https://www.linkedin.com/in/axelsson-andrea/)
