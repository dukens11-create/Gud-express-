# GUD Express LLC — Owner-Operator Website

[![Build](https://github.com/dukens11-create/Gud-express-/actions/workflows/build.yml/badge.svg)](https://github.com/dukens11-create/Gud-express-/actions/workflows/build.yml)

A professional React + Vite website for **GUD Express LLC** — helping box truck owner-operators
work under MC authority with dispatch service, factoring support, and payment coordination.

---

## Features

- Professional homepage with company info, pricing, and service details
- Box truck owner-operator program details (MC / DOT numbers)
- Dispatch, factoring, and payment support sections
- Online driver application form with loading state and success screen
- Document upload checklist
- Mobile-responsive design with hamburger navigation
- SEO-ready: Open Graph + Twitter Card meta tags
- SVG favicon

---

## Company Info

| Field | Value |
|-------|-------|
| Company | GUD Express LLC |
| MC | 1528475 |
| DOT | 4039907 |
| Phone | (775) 389-1414 |
| Email | gudexpress@gudxp.com |

---

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

---

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173** (Vite's default port).

---

## Build for Production

```bash
npm run build
```

Production-ready files are output to the `dist/` folder.

## Preview the Production Build

```bash
npm run preview
```

---

## Deploy

You can deploy the `dist/` folder to any static hosting service:

| Platform | How to deploy |
|---|---|
| **Netlify** | Drag and drop the `dist/` folder at [netlify.com/drop](https://app.netlify.com/drop), or connect your GitHub repo |
| **Vercel** | Run `npx vercel` in the project root, or connect your GitHub repo at [vercel.com](https://vercel.com) |
| **GitHub Pages** | Use the [gh-pages](https://www.npmjs.com/package/gh-pages) npm package or a GitHub Actions deploy workflow |
| **Cloudflare Pages** | Connect your GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com) — build command: `npm run build`, output dir: `dist` |

---

## Project Structure

```
Gud-express-/
├── public/
│   └── favicon.svg         # Browser tab icon — replace with your own
├── index.html              # HTML entry point (SEO meta tags live here)
├── vite.config.js          # Vite + React plugin configuration
├── package.json            # Project dependencies and scripts
├── .github/
│   └── workflows/
│       └── build.yml       # CI: runs npm build on every push/PR
└── src/
    ├── main.jsx            # React app — all page sections in one file
    ├── styles.css          # Global CSS styles
    └── assets/
        ├── gud-logo.png    # BRANDING: Replace with your actual logo
        ├── truck.png       # IMAGES:   Replace with a real truck photo
        └── team.png        # IMAGES:   Replace with a real team/ops photo
```

---

## Customization Guide

| What to change | Where |
|---|---|
| Company name, MC, DOT, phone, email | `src/main.jsx` → `COMPANY` constant |
| Services offered | `src/main.jsx` → `services` array |
| Application requirements checklist | `src/main.jsx` → `requirements` array |
| Logo image | Replace `src/assets/gud-logo.png` |
| Hero truck photo | Replace `src/assets/truck.png` |
| Team / operations photo | Replace `src/assets/team.png` |
| Tab favicon | Replace `public/favicon.svg` |
| SEO / Open Graph meta tags | `index.html` — update `og:url` and `og:image` |
| Brand colors | `src/styles.css` — search for `#2563eb` (blue) and `#f59e0b` (amber) |

---

## Visit Notification Webhook

The site sends a **POST request to a webhook URL** every time the homepage loads, so you can be
notified of each visit via email, SMS, Slack, Discord, and more.

### How to Set It Up

1. Open `src/main.jsx` and search for `WEBHOOK_URL`.
2. Replace the placeholder value with your real webhook URL:

   ```js
   const WEBHOOK_URL = 'https://your-webhook-url-here.com/notify' // ← replace this
   ```

3. Rebuild and redeploy the site (`npm run build`).

### Recommended Free Webhook Services

| Service | What it does | URL format |
|---|---|---|
| **IFTTT Webhooks** | Sends you an email / push notification | `https://maker.ifttt.com/trigger/YOUR_EVENT/with/key/YOUR_KEY` |
| **Zapier Webhooks** | Routes the event to 5,000+ apps (email, Slack, sheets…) | Get URL from your Zap's "Catch Hook" step |
| **Make (Integromat)** | Powerful automation, free tier available | Get URL from your scenario's Webhook module |
| **Discord Webhook** | Posts a message to a Discord channel | Create via channel Settings → Integrations → Webhooks |
| **Slack Incoming Webhook** | Posts a message to a Slack channel | Create via api.slack.com/apps → Incoming Webhooks |

### Customizing the Payload

By default the request body contains:

```json
{
  "event": "page_visit",
  "page": "homepage",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

You can add extra fields (e.g. `referrer: document.referrer`) in the `body` object inside
the `useEffect` hook in `src/main.jsx`.

### Privacy Considerations

- **Do not send personally identifiable information (PII)** — e.g. IP addresses, user-agent strings,
  or any data that could identify a specific individual — without a clear privacy policy and user
  consent, as required by GDPR, CCPA, and similar laws.
- For high-traffic sites, a webhook ping on every single visit may become noisy. Consider switching
  to an analytics platform (Google Analytics, Plausible, Fathom) or adding rate-limiting logic.
- If the webhook endpoint is unreachable, the site continues to work normally — errors are silently
  ignored so visitors are never affected.

---

## Important Note — Form Backend

The application form is **front-end only**. To receive real driver applications,
connect the form to a backend service. See the `TODO` comment in the `Application`
component in `src/main.jsx` for the exact integration point.

Recommended options:

| Service | Notes |
|---|---|
| [Formspree](https://formspree.io) | No backend needed — just swap the `fetch` URL |
| [Supabase](https://supabase.com) | Full database, free tier available |
| [Firebase](https://firebase.google.com) | Google cloud, good for real-time data |
| [Airtable](https://airtable.com) | Spreadsheet-style database with an API |
