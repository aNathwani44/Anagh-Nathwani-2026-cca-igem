# 🌿 Blight Busters — iGEM 2026

A fully responsive React web application for the Blight Busters iGEM 2026 project. Built with Vite + React and CSS Modules.

## Project Overview

Blight Busters tackles Fire Blight — a devastating disease affecting apple and pear trees caused by *Erwinia amylovora*. The project proposes engineering *Pantoea agglomerans* to produce the antibiotic compound darobactin, delivered directly into the plant vascular system.

## Tech Stack

- **React 18** — Component-based UI
- **Vite 5** — Lightning-fast dev server and bundler
- **CSS Modules** — Scoped styles per component
- **Google Fonts** — Playfair Display + DM Sans

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Navigate into the project
cd igem-software-app-2026

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
igem-software-app-2026/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # Global styles & CSS variables
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── Problem.jsx / .module.css
        ├── Solution.jsx / .module.css
        ├── Science.jsx / .module.css
        ├── Gallery.jsx / .module.css
        ├── Treatments.jsx / .module.css
        └── Footer.jsx / .module.css
```

## Sections

| Section      | Description |
|--------------|-------------|
| **Hero**     | Full-screen intro with animated DNA graphic and key stats |
| **Problem**  | Fire blight overview with infection pathway steps |
| **Solution** | Three-pillar approach + darobactin mechanism flow |
| **Science**  | Animated plasmid diagram + darA–E gene list + biosafety |
| **Gallery**  | 5-image hover-reveal grid of affected Rosaceae species |
| **Treatments** | Side-by-side comparison: Streptomycin vs Copper vs Blight Busters |
| **Footer**   | Links, team info, iGEM badge |

## Design

- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Palette**: Deep forest greens (`#1b4332`, `#40916c`, `#74c69d`) with amber accents (`#e76f51`)
- **Theme**: Organic/natural — earthy, science-forward, premium
- **Responsive**: Desktop-first, collapses gracefully to mobile at 900px and 540px breakpoints

## iGEM Requirements Checklist

- ✅ Navigation bar with clickable links (smooth scroll)
- ✅ Unique fonts (Playfair Display + DM Sans)
- ✅ 5 pieces of media (images in Gallery section)
- ✅ 3+ heading types (h1 hero, h2 section, h3 card, h4 label)
- ✅ Favicon (SVG leaf icon)
- ✅ Footer with links and iGEM badge
- ✅ Mobile responsive (desktop-first design)
