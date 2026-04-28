# GUD Express Home + Application Website

A React + Vite website for GUD Express LLC — helping box truck owner-operators work under MC authority with dispatch, factoring support, and payment coordination.

## Features

- Professional homepage with company info
- Box truck owner-operator program details (MC/DOT)
- Dispatch, factoring, and payment support sections
- Online driver application form (front-end demo)
- Document upload checklist
- Responsive mobile-friendly design

## Company Info

GUD Express LLC  
MC: 1528475  
DOT: 4039907  
Phone: (775) 389-1414  
Email: gudexpress@gudxp.com

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173** (Vite's default port).

## Build for Production

```bash
npm run build
```

The production-ready files will be output to the `dist/` folder.

## Preview the Production Build Locally

```bash
npm run preview
```

## Deploy

You can deploy the `dist/` folder to any static hosting service:

| Platform | How to deploy |
|---|---|
| **GitHub Pages** | Push `dist/` contents to a `gh-pages` branch, or use the [gh-pages](https://www.npmjs.com/package/gh-pages) npm package |
| **Netlify** | Drag and drop the `dist/` folder at [netlify.com/drop](https://app.netlify.com/drop), or connect your GitHub repo |
| **Vercel** | Run `npx vercel` in the project root, or connect your GitHub repo at [vercel.com](https://vercel.com) |
| **Cloudflare Pages** | Connect your GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com) and set build command to `npm run build` and output directory to `dist` |

## Project Structure

```
Gud-express-/
├── index.html          # HTML entry point
├── vite.config.js      # Vite + React plugin configuration
├── package.json        # Project dependencies and scripts
├── src/
│   ├── main.jsx        # React app entry point (all components)
│   ├── styles.css      # Global CSS styles
│   └── assets/         # Images (logo, truck, team)
```

## Important Note

The application form is **front-end only** (demo). To receive real driver applications, connect the form to a backend service such as [Formspree](https://formspree.io), [Supabase](https://supabase.com), [Firebase](https://firebase.google.com), [Airtable](https://airtable.com), or your own API.
