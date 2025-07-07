<h1 align="center">🍲 ZOZA</h1>
<p align="center">
  Discover, search, and explore a world of recipes.<br />
  Built with <strong>Next.js 15</strong>, <strong>Tailwind CSS</strong>, <strong>ShadCN UI</strong>, and powered by <strong>TheMealDB API</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat-square" />
  <img src="https://img.shields.io/badge/ShadCN-UI-EE6352?style=flat-square" />
  <img src="https://img.shields.io/badge/API-TheMealDB-yellowgreen?style=flat-square" />
</p>

---

## 🧾 About

**ZOZA** is a recipe web application that allows users to discover, search, and view delicious meals from around the world. Whether you're craving Egyptian food or looking for a specific dish by name, Wasfa makes it easy to explore.

Built using the latest frontend technologies and styled with a clean, modern UI, the app provides a smooth user experience with real-time searching and beautiful layouts.

---

## ✨ Features

- 🔍 **Search Recipes by Name**
- 🍽️ **Browse by Category**
- 🇪🇬 **Egyptian Dishes Section**
- 📋 **View Full Recipe Details**
- 🌙 **Light & Dark Mode**
- ⚡ **Fast & Cached Data with React Query**

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 15](https://nextjs.org/) | React framework for server/client rendering |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS styling |
| [ShadCN UI](https://ui.shadcn.dev/) | UI component system built on Radix + Tailwind |
| [React Query](https://tanstack.com/query/v5) | Data fetching and caching |
| [Axios](https://axios-http.com/) | HTTP client |
| [Lucide Icons](https://lucide.dev/) | Icon library |
| [TheMealDB API](https://www.themealdb.com/) | Public API for meal data |

---

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/wasfa.git
cd wasfa
npm install
npm run dev

---

Zoza/
├── app/
│   └── recipes/
│       └── loading.jsx
├── components/
│   ├── ui/
│   │   └── LoadingPage.jsx
│   └── layout/
├── lib/
│   └── api.js
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── tailwind.config.js
└── next.config.js

---

API Integration

All data comes from TheMealDB.
We use these endpoints:

    GET /search.php?s=... → search by name

    GET /lookup.php?i=... → get full recipe by ID

    GET /categories.php → all categories

    GET /filter.php?c=... → recipes by category

    GET /filter.php?a=Egyptian → Egyptian meals

    API functions are stored inside lib/api.js

---

Author
Mohamed Kamal El-Dein
Frontend Developer – Egypt
LinkedIn | GitHub

---
