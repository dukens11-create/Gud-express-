# GUD Express LLC — Owner-Operator Website

[![Build](https://github.com/dukens11-create/Gud-express-/actions/workflows/build.yml/badge.svg)](https://github.com/dukens11-create/Gud-express-/actions/workflows/build.yml)

![Homepage screenshot with modern layout, branding, and navigation](public/homepage-preview.png)

A professional React + Vite website for **GUD Express LLC** — helping box truck owner-operators
work under MC authority with dispatch service, factoring support, and payment coordination.

---

## Features

- Professional homepage with company info, pricing, and service details
- Semi truck and box truck owner-operator program details (MC / DOT numbers)
- Prominent "We accept semi trucks" announcement on the application page
- Dispatch, factoring, and payment support sections
- Google Form-powered driver application with secure file upload support
- Truck type selector in application form (Semi, Box Truck, Hotshot, and more)
- Mobile-responsive design with hamburger navigation
- SEO-ready: Open Graph + Twitter Card meta tags
- SVG favicon

---

## Insurance, W-9, and Truck Registration Policy

> **All drivers must use Gud Express-provided Insurance, W-9, and Truck Registration.**

Applicants are **not** asked to provide their own insurance, W-9, or truck registration documents.
Gud Express handles all three on behalf of every driver:

| Document | Policy |
|---|---|
| **Insurance** | All drivers work under Gud Express insurance. Do not provide your own. |
| **W-9** | All drivers use the Gud Express W-9. Do not provide your own W-9. |
| **Truck Registration** | All trucks must be registered under Gud Express. Do not provide your own registration. |

This policy is reflected in the application form (no upload fields for these documents) and in the
requirements checklist shown on the website.

---

## Company Info

| Field | Value |
|-------|-------|
| Company | GUD Express LLC |
| MC | 1528475 |
| DOT | 4039907 |
| Phone | (775) 389-1414 |
| Email | gudexpressllc@gmail.com |

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
| Google Form link / embed | `src/main.jsx` → `GOOGLE_FORM_URL` and `GOOGLE_FORM_EMBED_URL` constants |
| Logo image | Replace `src/assets/gud-logo.png` (see **Logo Asset** section below) |
| Hero truck photo / application image | Replace `src/assets/truck.png` with image2 (Gud Express branded semi truck) |
| Team / operations photo | Replace `src/assets/team.png` |
| Tab favicon | Replace `public/favicon.svg` |
| SEO / Open Graph meta tags | `index.html` — update `og:url` and `og:image` |
| Brand colors | `src/styles.css` — search for `#2563eb` (blue) and `#f59e0b` (amber) |

---

## Logo Asset

The Gud Express logo is displayed in the sticky header at the top of every page.

**Asset location:** `src/assets/gud-logo.png`

**How to update the logo:**

1. Prepare a high-resolution PNG or SVG of your logo (recommended minimum: **400 × 200 px**,
   transparent background preferred).
2. Replace `src/assets/gud-logo.png` with your new file (keep the same filename, or update the
   import at the top of `src/main.jsx`).
3. The header CSS (`src/styles.css` → `.brand img`) uses `object-fit: contain` and `width: auto`
   so the full logo is always shown without cropping or letter cutoff, regardless of aspect ratio.
   The logo scales to a maximum height of **54 px** on desktop; on small screens it is capped at
   **48 px**.
4. Run `npm run build` and verify the logo looks crisp in both desktop and mobile views.

> **Alt text** — The logo `<img>` element includes a descriptive `alt` attribute
> (`"Gud Express LLC — Box Truck & Semi Truck Owner-Operator Dispatch"`) for accessibility and SEO.
> Update this text in `src/main.jsx` → `Header()` if your branding changes.

---



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

## Google Form Integration

The application form uses **Google Forms** to collect driver applications and securely receive
document uploads (driver license, voided check, etc.) directly in Google Drive.

### Why Google Forms instead of Formspree

Formspree's free plan does not support file uploads. Drivers need to submit documents such as
their driver license. Google Forms supports secure file uploads at no cost and delivers all
responses and files to your Google Drive automatically.

### How to activate the form (owner instructions)

1. Go to [forms.new](https://forms.new) and build your application form.
   - Add short-answer fields for: **Full Name**, **Phone**, **Email**, **City/State**
   - Add a **dropdown or multiple-choice** field for **Truck Type** (options: Semi, Box Truck
     16 ft, 20 ft, 22 ft, 24 ft, 26 ft, Hotshot, Other)
   - Add a **Short answer** field for **Years of Experience**
   - Add a **Dropdown** for **Ready to Start** (Immediately / This week / This month / Later)
   - Add a **File upload** field for **Driver License** ← this is how docs reach you
   - Add a **File upload** field for **Voided Check / Direct Deposit Info**
   - Add a **Paragraph** field for any additional message / notes
2. Click **Send** → **link icon (🔗)** → copy the URL.
   Open `src/main.jsx`, search for `GOOGLE_FORM_URL`, and replace the placeholder:
   ```js
   const GOOGLE_FORM_URL = 'https://forms.gle/YOUR_FORM_ID_HERE'
   ```
3. For the in-page embed: click **Send** → **Embed (< >)** → copy the `src="…"` URL.
   In `src/main.jsx`, search for `GOOGLE_FORM_EMBED_URL` and replace the placeholder:
   ```js
   const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/YOUR_LONG_ID/viewform?embedded=true'
   ```
4. Rebuild and redeploy: `npm run build`

### Best practices for document collection

- **Verify Google Drive storage:** File uploads go to the Google account that owns the form.
  Make sure that account has sufficient Google Drive space.
- **Set response notifications:** In Google Forms → Responses → ⋮ → Get email notifications
  so you receive an email each time a new application is submitted.
- **Restrict file types (optional):** In the file upload field settings, you can limit accepted
  types (e.g. PDF, JPEG, PNG) to avoid receiving unexpected file formats.
- **Keep the form link private:** Share the form only on your own website. Do not post it
  publicly in places where spam submissions are likely.
- **Regularly review Drive:** Periodically check the linked Google Drive folder to ensure
  uploads are arriving and to remove any spam or test submissions.

### What applicants see

Until `GOOGLE_FORM_URL` is updated, the site shows a placeholder with your phone and email
so applicants can still reach you. Once the URL is set and the embed URL is filled in, the
live Google Form appears directly on the page. Applicants can also open it in a new tab via
the "Open Form in New Tab" link.

---

## Box Truck Application

The site includes a **dedicated Box Truck Application section** (below the unified application)
specifically for box truck owner-operators. This restores the original box truck application
experience and is kept clearly separate from the semi truck / unified application.

### Box truck form fields (recommended)

When building the Box Truck Google Form, include these fields:

- **Full Name** (short answer)
- **Phone** (short answer)
- **Email** (short answer)
- **City / State** (short answer)
- **Box Truck Size** (dropdown: 16 ft / 20 ft / 22 ft / 24 ft / 26 ft)
- **Years of Driving Experience** (short answer)
- **Ready to Start** (dropdown: Immediately / This week / This month / Later)
- **File upload: Driver License**
- **File upload: Voided Check / Direct Deposit Info**
- **Message / notes** (paragraph)

### How to activate the box truck form

1. Go to [forms.new](https://forms.new) and build a box-truck-specific application form using
   the fields listed above.
2. Click **Send** → **link icon (🔗)** → copy the URL.
   Open `src/main.jsx`, find `BOX_TRUCK_FORM_URL`, and replace the placeholder:
   ```js
   const BOX_TRUCK_FORM_URL = 'https://forms.gle/YOUR_BOX_TRUCK_FORM_ID'
   ```
3. For the in-page embed: click **Send** → **Embed (< >)** → copy the `src="…"` URL.
   In `src/main.jsx`, find `BOX_TRUCK_FORM_EMBED_URL` and replace the placeholder:
   ```js
   const BOX_TRUCK_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/YOUR_LONG_ID/viewform?embedded=true'
   ```
4. Rebuild and redeploy: `npm run build`

### How to disable the box truck application section

Set `BOX_TRUCK_FORM_URL` to an empty string in `src/main.jsx`:

```js
const BOX_TRUCK_FORM_URL = ''
```

The section will remain visible but will display a contact-us placeholder instead of a live
form, so box truck applicants can still reach you by phone or email. If you want to hide the
section entirely, remove `<BoxTruckApplication />` from the `App` function in `src/main.jsx`.

### How to re-enable the box truck application section

Paste your real Box Truck Google Form URL back into `BOX_TRUCK_FORM_URL` and `BOX_TRUCK_FORM_EMBED_URL`
in `src/main.jsx`, then rebuild: `npm run build`

---

## Important Note — Document Collection

Driver license and direct deposit documents are collected securely via the Google Form's
built-in file upload fields. All uploaded files are stored in the Google Drive account that
owns the form and are accessible only to GUD Express management.

See the **"Google Form Integration"** section above for setup steps.

---

## Truck &amp; Team Images

Key image files in `src/assets/`:

| File | Replace with |
|---|---|
| `src/assets/semi-truck.png` | **Semi truck application image** — featured in the unified application section. Replace with any high-quality landscape PNG of your semi truck. |
| `src/assets/truck.png` | **Box truck application image** — featured in the Box Truck Application section and the hero. Replace with a high-quality photo of your box truck. |
| `src/assets/team.png` | Real team or operations photo |
| `src/assets/team-ops1.jpg` | Dispatcher coordinating routes at a workstation |
| `src/assets/team-ops2.jpg` | Team collaborating in an operations center |
| `src/assets/team-ops3.jpg` | Driver support representative assisting an owner-operator |

To swap in your own photos, replace the files listed above and rebuild:
`npm run build`