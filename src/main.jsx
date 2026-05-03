/**
 * GUD Express LLC — Main React Application
 *
 * All page sections are defined in this single file for simplicity.
 * To customize branding, search for the COMPANY constant below and
 * update the values. Image assets are in src/assets/ — replace
 * gud-logo.png, truck.png, and team.png with your own images.
 */

import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ShieldCheck, ClipboardList, DollarSign, Phone, Mail,
  CheckCircle, FileText, ArrowRight,
  Menu, X, ExternalLink, Truck
} from 'lucide-react'
import './styles.css'

// ---------------------------------------------------------------------------
// BRANDING: Replace with your own logo image in src/assets/
// ---------------------------------------------------------------------------
import gudLogo from './assets/gud-logo.png'

// ---------------------------------------------------------------------------
// IMAGES: Replace truck.png and team.png in src/assets/ with your own photos.
// For the application section semi truck visual, semi-truck.png is used.
// ---------------------------------------------------------------------------
import truckImg from './assets/truck.png'
import semiTruckImg from './assets/semi-truck.png'
import teamImg from './assets/team.png'

// ---------------------------------------------------------------------------
// TEAM & TECHNOLOGY IMAGES
// Replace these three images with your own professional photos.
// Recommended: dispatcher at work, team in operations center, driver support rep.
// Place replacement .jpg files in src/assets/ and update the import paths below.
// To add a new image: import it here and add an entry to the photos array in TeamTech().
// To remove an image: delete its import and remove its entry from the photos array.
// ---------------------------------------------------------------------------
import teamOps1Img from './assets/team-ops1.jpg'
import teamOps2Img from './assets/team-ops2.jpg'
import teamOps3Img from './assets/team-ops3.jpg'

const CURRENT_YEAR = new Date().getFullYear()

// ---------------------------------------------------------------------------
// COMPANY INFO: Update these values to match your actual company details
// ---------------------------------------------------------------------------
const COMPANY = {
  name: 'GUD Express LLC',
  dot: '4039907',
  mc: '1528475',
  phone: '(775) 389-1414',
  phoneRaw: '7753891414',
  email: 'gudexpressllc@gmail.com',
}

// Services offered — update text or add/remove entries as needed
const services = [
  ['Work Under Our MC', 'Semi trucks and box truck owner-operators can work under GUD Express MC authority.', ShieldCheck],
  ['Dispatch Service', 'We help find, negotiate, and book loads for qualified owner-operators.', ClipboardList],
  ['Factoring Support', 'We help coordinate factoring paperwork and faster payment support.', DollarSign],
  ['Payment Support', 'We assist with rate confirmations, paperwork, invoices, and weekly settlements.', FileText],
]

// Requirements checklist — edit items as needed
// Note: Insurance, W-9, and Truck Registration are handled by Gud Express.
// Do NOT ask applicants to provide their own versions of those documents.
const requirements = [
  'Valid driver license',
  'Truck information (Semi, Box Truck 16–26 ft, or other qualified vehicle)',
  'Direct deposit or voided check',
  'Driving experience information',
]

// ============================================================
// Root App — arranges all page sections in order
// ============================================================
function App() {
  // ---------------------------------------------------------------------------
  // VISIT NOTIFICATION WEBHOOK
  // This effect fires a POST request to your webhook URL each time the
  // homepage loads, so you are notified of every visit.
  //
  // HOW TO CUSTOMIZE:
  //   1. Replace the URL below with your own webhook endpoint.
  //   2. Popular free options:
  //        • IFTTT Webhooks → https://ifttt.com/maker_webhooks
  //          URL format: https://maker.ifttt.com/trigger/YOUR_EVENT/with/key/YOUR_KEY
  //        • Zapier Webhooks → https://zapier.com/apps/webhook/integrations
  //        • Make (Integromat) → https://www.make.com/en/integrations/webhook
  //        • Discord / Slack webhook URLs
  //   3. You can add extra data (e.g. timestamp or referrer) to the body object.
  //
  // PRIVACY NOTE:
  //   Notifying yourself on every page view may be subject to privacy laws
  //   (GDPR, CCPA, etc.) depending on the data you collect. Avoid sending
  //   personally identifiable information without user consent. For high-
  //   traffic sites, consider throttling this call or switching to an
  //   analytics platform instead.
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const WEBHOOK_URL = 'https://your-webhook-url-here.com/notify' // ← Replace with your actual webhook URL

    // Only fire once per browser session (guards against React 18 StrictMode
    // double-invocation in development and accidental component remounts).
    if (sessionStorage.getItem('visit_notified')) return
    sessionStorage.setItem('visit_notified', '1')

    // Skip the request if the URL is still the placeholder
    if (!WEBHOOK_URL || WEBHOOK_URL.includes('your-webhook-url-here')) return

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'page_visit',
        page: 'homepage',
        timestamp: new Date().toISOString(),
      }),
    }).catch(() => {
      // Silently ignore errors so a failed webhook never disrupts the site
    })
  }, []) // Empty dependency array = runs once on mount (i.e., on every page load)

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <TeamSection />
      <TeamTech />
      <Pricing />
      <Requirements />
      <Application />
      <Contact />
      <Footer />
    </div>
  )
}

// ============================================================
// Header — sticky top navigation bar with mobile menu toggle
// ============================================================
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container nav">
        {/* BRANDING: Logo and company name — update img in src/assets/gud-logo.png */}
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={gudLogo} alt="Gud Express LLC — Box Truck & Semi Truck Owner-Operator Dispatch" />
          <span>
            <strong>GUD Express</strong>
            <small>MC {COMPANY.mc} | DOT {COMPANY.dot}</small>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="desktopNav">
          <a href="#services">Services</a>
          <a href="#apply">Apply</a>
          <a href={`tel:${COMPANY.phoneRaw}`} className="callBtn">Call Now</a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="mobileMenu">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#apply" onClick={() => setMenuOpen(false)}>Apply Now</a>
          <a href={`tel:${COMPANY.phoneRaw}`} className="callBtn" onClick={() => setMenuOpen(false)}>
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}

// ============================================================
// Hero — above-the-fold section with CTA buttons
// ============================================================
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container heroGrid">
        <div>
          <p className="badge">Semi Truck &amp; Box Truck Owner-Operators Wanted</p>
          <h1>Drive Under <span>GUD Express</span> MC Authority</h1>
          <p className="lead">
            GUD Express accepts semi trucks and box truck owner-operators to work under our MC
            authority with dispatch service, factoring support, and payment coordination.
          </p>

          <div className="heroActions">
            <a href="#apply" className="primary">Start Application <ArrowRight size={18} /></a>
            <a href={`tel:${COMPANY.phoneRaw}`} className="secondary">Call {COMPANY.phone}</a>
          </div>

          <p className="trust">
            <CheckCircle size={18} /> Verified company: MC {COMPANY.mc} | DOT {COMPANY.dot}
          </p>
        </div>

        {/* IMAGES: Replace src/assets/truck.png with image2 (a Gud Express branded semi truck photo) */}
        <div className="heroImage">
          <img src={truckImg} alt="GUD Express branded semi truck" />
          <div className="priceCard">
            <strong>8% – 15%</strong>
            <span>weekly revenue fee</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// Services — 4-up service cards
// ============================================================
function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="sectionHead">
          <h2>What We Provide</h2>
          <p>Simple support for serious semi truck and box truck owner-operators.</p>
        </div>

        <div className="cards">
          {services.map(([title, text, Icon]) => (
            <div className="card" key={title}>
              <Icon size={34} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// Team — photo + mission statement
// ============================================================
function TeamSection() {
  return (
    <section className="section team">
      <div className="container">
        {/* IMAGES: Replace src/assets/team.png with a real team or operations photo */}
        <img src={teamImg} alt="GUD Express driver support team" />
        <div className="teamText">
          <p className="badge">All Qualified Drivers Welcome</p>
          <h2>One Team. One Mission. Helping Drivers Grow.</h2>
          <p>
            GUD Express welcomes qualified box truck owner-operators from all backgrounds. Our focus
            is dispatch support, business organization, and helping drivers stay moving.
          </p>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// TeamTech — "Our Team & Technology" photo gallery
// IMAGES: The following .jpg files are imported and displayed in this gallery.
// To add an image: drop a .jpg into src/assets/, import it at the top of
//   this file, and add a new entry to the photos array below.
// To remove an image: delete its import and remove its entry from photos[].
//   team-ops1.jpg → dispatcher coordinating routes at a workstation
//   team-ops2.jpg → team collaborating in an operations center
//   team-ops3.jpg → driver support representative assisting an owner-operator
// ============================================================
function TeamTech() {
  const photos = [
    {
      src: teamOps1Img,
      alt: 'Professional GUD Express dispatcher coordinating logistics using advanced route-mapping technology',
      caption: 'Expert Dispatch Coordination',
      desc: 'Our dispatchers use cutting-edge tools to find, negotiate, and book the best loads for every owner-operator.',
    },
    {
      src: teamOps2Img,
      alt: 'GUD Express operations team collaborating in a modern logistics control center',
      caption: 'Teamwork at Every Level',
      desc: 'A dedicated team works together around the clock to keep drivers moving and freight flowing.',
    },
    {
      src: teamOps3Img,
      alt: 'GUD Express driver support representative providing top-tier assistance to an owner-operator',
      caption: 'Dedicated Driver Support',
      desc: 'Our support staff is always ready to help with paperwork, settlements, and anything drivers need on the road.',
    },
  ]

  return (
    <section className="section teamTech">
      <div className="container">
        <div className="sectionHead">
          <p className="badge">Our Team &amp; Technology</p>
          <h2>People and Tools Behind Your Success</h2>
          <p>GUD Express combines experienced professionals with modern logistics technology to keep owner-operators earning.</p>
        </div>

        <div className="teamTechGrid">
          {photos.map(({ src, alt, caption, desc }) => (
            <figure className="teamTechCard" key={caption}>
              {/* IMAGES: Replace the imported .jpg with your own photo — see comments above the import */}
              <img src={src} alt={alt} loading="lazy" />
              <figcaption>
                <strong>{caption}</strong>
                <p>{desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================
// Pricing — fee highlight
// ============================================================
function Pricing() {
  return (
    <section className="section dark">
      <div className="container pricing">
        <h2>Simple Weekly Fee</h2>
        <div className="big">8% – 15%</div>
        <p>
          Owner-operators pay 8% to 15% of weekly gross revenue for dispatch, factoring
          coordination, payment support, and business assistance.
        </p>
      </div>
    </section>
  )
}

// ============================================================
// Requirements — checklist of documents drivers need
// ============================================================
function Requirements() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="badge">Application Requirements</p>
          <h2>What Drivers Need to Apply</h2>
          <p className="leadSmall">
            GUD Express reviews each applicant to make sure they are ready to work professionally
            under our MC authority.
          </p>
        </div>

        <div className="requireBox">
          {requirements.map(item => (
            <div className="check" key={item}>
              <CheckCircle size={20} />
              <span>{item}</span>
            </div>
          ))}

          {/* Policy notice — Gud Express handles these three items on behalf of all drivers */}
          <div className="gudProvidedNotice">
            <ShieldCheck size={22} />
            <div>
              <strong>Provided by Gud Express — Do not bring your own:</strong>
              <ul>
                <li><strong>Insurance</strong> — You must use Gud Express insurance.</li>
                <li><strong>W-9</strong> — You must use the Gud Express W-9.</li>
                <li><strong>Truck Registration</strong> — You must be registered under Gud Express.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// Application — Google Form section
//
// WHY GOOGLE FORMS INSTEAD OF FORMSPREE:
//   Formspree's free plan does not support file uploads. Drivers need to
//   securely submit documents such as their driver license. Google Forms
//   handles file uploads natively and stores them in Google Drive at no cost.
//   All form responses (text + uploaded files) are accessible in one place.
//
// HOW TO UPDATE THE GOOGLE FORM LINK (owner/manager instructions):
//   1. Go to https://forms.new and build your application form. Include:
//        • Full Name, Phone, Email, City/State
//        • Truck Type: Semi, Box Truck 16 ft, 20 ft, 22 ft, 24 ft, 26 ft, Hotshot, Other
//        • Years of experience
//        • Ready to start (Immediately / This week / This month / Later)
//        • File upload: Driver License  ← enables secure document collection
//        • File upload: Voided Check / Direct Deposit Info
//        • Message / notes field
//   2. Click "Send" → link icon (🔗) → copy the URL.
//      Paste it as the value of GOOGLE_FORM_URL below.
//   3. For the in-page embed: click "Send" → Embed (< >) → copy the src= URL.
//      Paste it as GOOGLE_FORM_EMBED_URL below.
//   4. Save src/main.jsx, then rebuild and redeploy: npm run build
//   See README → "Google Form Integration" for full details and best practices.
// ============================================================

// ---------------------------------------------------------------------------
// GOOGLE FORM LINK
// Replace the placeholder with the share URL from your Google Form.
// How to get it: open your Google Form → Send → link (🔗) → Copy link
// Example: 'https://forms.gle/YOUR_FORM_ID_HERE'
// ---------------------------------------------------------------------------
const GOOGLE_FORM_URL = 'https://forms.gle/REPLACE_WITH_YOUR_FORM_ID'

// ---------------------------------------------------------------------------
// GOOGLE FORM EMBED URL (for the in-page iframe)
// Replace with the src= URL from your Google Form's embed dialog.
// How to get it: open your Google Form → Send → Embed (< >) → copy src="…"
// Example: 'https://docs.google.com/forms/d/e/YOUR_LONG_ID/viewform?embedded=true'
// ---------------------------------------------------------------------------
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true'

function Application() {
  // Show a helpful placeholder UI until the owner fills in the real form URL
  const formReady = !GOOGLE_FORM_URL.includes('REPLACE_WITH_YOUR_FORM_ID')

  return (
    <section id="apply" className="section dark">

      {/* ── Semi truck acceptance banner ── */}
      {/* Update text below if the MC Authority Number or policy changes */}
      <div className="semiTruckBanner">
        <Truck size={28} aria-hidden="true" />
        <p>
          <strong>Semi Trucks Welcome!</strong>{' '}
          We accept semi trucks to work under Gud Express MC Authority Number {COMPANY.mc}.
          Apply with any qualified truck type.
        </p>
      </div>

      <div className="container appGrid">

        {/* Left column: info + truck image */}
        <div>
          <p className="badge">Apply Online</p>
          <h2>Owner-Operator Application</h2>
          <p className="leadSmall">
            Gud Express accepts <strong>semi trucks</strong>, box trucks, and other qualified
            commercial vehicles. Fill in the application to join our MC authority program.
          </p>

          {/* SEMI TRUCK IMAGE — application section visual (semi-truck.png) */}
          <figure className="applyTruckFigure">
            <img
              src={semiTruckImg}
              alt="Gud Express branded semi truck for MC Authority application"
              className="applyTruckImg"
            />
            <figcaption className="applyTruckCaption">
              Semi Trucks Accepted — Gud Express MC Authority #{COMPANY.mc}
            </figcaption>
          </figure>

          {/* Document collection notice */}
          <div className="gudProvidedNotice">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <strong>Secure Document Upload via Google Form</strong>
              <p>
                All required documents — including your <strong>driver license</strong> and
                voided check / direct deposit info — are collected securely through the Google
                Form on this page. No separate email needed. Files go directly to a private
                GUD Express Google Drive folder.
              </p>
            </div>
          </div>

          <div className="contactCard">
            <p><Phone size={18} /> <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></p>
            <p><Mail size={18} /> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
          </div>
        </div>

        {/* Right column: Google Form embed or placeholder */}
        <div className="googleFormSide">
          {formReady ? (
            <>
              {/*
                GOOGLE FORM IFRAME EMBED
                Adjust the height (currently 900px) to match your form's actual length.
                The src comes from GOOGLE_FORM_EMBED_URL defined above this component.
              */}
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                title="GUD Express Owner-Operator Application"
                className="googleFormFrame"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                loading="lazy"
              >
                Loading form…
              </iframe>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary googleFormOpenLink"
              >
                <ExternalLink size={16} /> Open Form in New Tab
              </a>
            </>
          ) : (
            /* ── Direct-apply state ──────────────────────────────────────
               Shown until the owner sets GOOGLE_FORM_URL above.
               OWNER: follow the instructions at the top of this section
               to create your Google Form and paste the link above.
               See README → "Google Form Integration" for step-by-step help.
            ─────────────────────────────────────────────────────────── */
            <div className="googleFormPlaceholder">
              <ClipboardList size={52} aria-hidden="true" />
              <h3>Apply Now — Contact Us Directly</h3>
              <p className="leadSmall">
                Ready to get started? Call or email us to begin your owner-operator application.
                We'll walk you through every step and get your documents submitted fast — semi
                trucks, box trucks, and all qualified commercial vehicles welcome.
              </p>
              <div className="applyDocList">
                <p><strong>Have these documents ready:</strong></p>
                <ul>
                  <li>Valid Commercial Driver's License (CDL)</li>
                  <li>Proof of commercial auto insurance</li>
                  <li>Voided check or direct deposit info</li>
                  <li>Vehicle registration / title</li>
                </ul>
              </div>
              <div className="heroActions">
                <a href={`tel:${COMPANY.phoneRaw}`} className="primary">
                  <Phone size={18} /> Call {COMPANY.phone}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="secondary">
                  <Mail size={18} /> Email Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <p className="smallNote applyNote">
          Your information and any uploaded documents are handled securely through Google Forms
          and stored in a private Google Drive folder accessible only to GUD Express management.
        </p>
      </div>
    </section>
  )
}

// ============================================================
// Contact — CTA section with links
// ============================================================
function Contact() {
  return (
    <section className="section">
      <div className="container contact">
        <h2>Ready to Get Started?</h2>
        <p>Apply online, call, or email GUD Express today.</p>
        <div className="heroActions center">
          <a href="#apply" className="primary">Apply Now</a>
          <a href={`tel:${COMPANY.phoneRaw}`} className="secondary">Call {COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`} className="secondary">Email Us</a>
        </div>
      </div>
    </section>
  )
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div>
          <strong>{COMPANY.name}</strong>
          <p>MC {COMPANY.mc} | DOT {COMPANY.dot}</p>
        </div>
        <div>
          <p>
            <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
            {' \u00b7 '}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>
          <p className="footCopy">&copy; {CURRENT_YEAR} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

createRoot(document.getElementById('root')).render(<App />)
