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
  CheckCircle, UploadCloud, Send, FileText, ArrowRight,
  Menu, X, Loader2
} from 'lucide-react'
import './styles.css'

// ---------------------------------------------------------------------------
// BRANDING: Replace with your own logo image in src/assets/
// ---------------------------------------------------------------------------
import gudLogo from './assets/gud-logo.png'

// ---------------------------------------------------------------------------
// IMAGES: Replace truck.png and team.png in src/assets/ with your own photos
// ---------------------------------------------------------------------------
import truckImg from './assets/truck.png'
import teamImg from './assets/team.png'

// ---------------------------------------------------------------------------
// TEAM & TECHNOLOGY IMAGES
// Replace these three images with your own professional photos.
// Recommended: dispatcher at work, team in operations center, driver support rep.
// Place replacement files in src/assets/ and update the import paths below.
// ---------------------------------------------------------------------------
import teamOps1Img from './assets/team-ops1.png'
import teamOps2Img from './assets/team-ops2.png'
import teamOps3Img from './assets/team-ops3.png'

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
  ['Work Under Our MC', 'Box truck owner-operators can work under GUD Express MC authority.', ShieldCheck],
  ['Dispatch Service', 'We help find, negotiate, and book loads for qualified owner-operators.', ClipboardList],
  ['Factoring Support', 'We help coordinate factoring paperwork and faster payment support.', DollarSign],
  ['Payment Support', 'We assist with rate confirmations, paperwork, invoices, and weekly settlements.', FileText],
]

// Requirements checklist — edit items as needed
// Note: Insurance, W-9, and Truck Registration are handled by Gud Express.
// Do NOT ask applicants to provide their own versions of those documents.
const requirements = [
  'Valid driver license',
  'Box truck information',
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
          <img src={gudLogo} alt="GUD Express Logo" />
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
          <p className="badge">Box Truck Owner-Operators Wanted</p>
          <h1>Drive Under <span>GUD Express</span> MC Authority</h1>
          <p className="lead">
            GUD Express helps box truck owner-operators get access to work under our MC authority
            with dispatch service, factoring support, and payment coordination.
          </p>

          <div className="heroActions">
            <a href="#apply" className="primary">Start Application <ArrowRight size={18} /></a>
            <a href={`tel:${COMPANY.phoneRaw}`} className="secondary">Call {COMPANY.phone}</a>
          </div>

          <p className="trust">
            <CheckCircle size={18} /> Verified company: MC {COMPANY.mc} | DOT {COMPANY.dot}
          </p>
        </div>

        {/* IMAGES: Replace src/assets/truck.png with a photo of your actual truck */}
        <div className="heroImage">
          <img src={truckImg} alt="GUD Express branded box truck" />
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
          <p>Simple support for serious box truck owner-operators.</p>
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
// IMAGES: Replace team-ops1.png, team-ops2.png, team-ops3.png in
// src/assets/ with your own professional photos. Recommended:
//   team-ops1.png → dispatcher coordinating routes at a workstation
//   team-ops2.png → team collaborating in an operations center
//   team-ops3.png → driver support representative assisting an owner-operator
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
              {/* IMAGES: Replace the imported PNG with your own photo — see comment above the import */}
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
// Application — driver application form
// Submissions are sent to gudexpressllc@gmail.com via Formspree.
//
// HOW TO UPDATE THE FORMSPREE KEY:
//   1. Sign up (free) at https://formspree.io
//   2. Create a new form — Formspree will give you a unique form ID
//   3. Find the FORMSPREE_ENDPOINT constant below and replace
//      YOUR_FORMSPREE_KEY with your actual form ID, e.g.:
//        'https://formspree.io/f/xabcdefg'
//   4. Rebuild and redeploy: npm run build
// ============================================================

// ---------------------------------------------------------------------------
// FORMSPREE ENDPOINT
// Replace YOUR_FORMSPREE_KEY with the form ID from your Formspree dashboard.
// See README → "Formspree Integration" for step-by-step instructions.
// ---------------------------------------------------------------------------
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORMSPREE_KEY'

function Application() {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'

  // Warn developers if the Formspree key has not been configured yet
  useEffect(() => {
    if (FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_KEY')) {
      console.warn(
        '[GUD Express] Formspree endpoint is not configured. ' +
        'Replace YOUR_FORMSPREE_KEY in src/main.jsx with your real Formspree form ID ' +
        'so applications are delivered to gudexpressllc@gmail.com.'
      )
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    // ---------------------------------------------------------------------------
    // FORMSPREE POST — sends all form fields to gudexpressllc@gmail.com
    // If FORMSPREE_ENDPOINT still contains the placeholder key, the request
    // will fail gracefully and show an error message to the applicant.
    // ---------------------------------------------------------------------------
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
      } else {
        // Formspree returned a non-OK status (e.g. invalid key, rate limit)
        setStatus('error')
      }
    } catch {
      // Network failure or FORMSPREE_ENDPOINT placeholder not yet updated
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="apply" className="section dark">
        <div className="container successBox">
          <CheckCircle size={56} className="successIcon" />
          <h2>Application Received!</h2>
          <p>
            Thank you for your interest in working with GUD Express. Our team will review your
            application and reach out to you within 1–2 business days.
          </p>
          <p>
            Questions? Call us at{' '}
            <a href={`tel:${COMPANY.phoneRaw}`} className="inlineLink">{COMPANY.phone}</a>
            {' '}or email{' '}
            <a href={`mailto:${COMPANY.email}`} className="inlineLink">{COMPANY.email}</a>.
          </p>
          <button className="primary" onClick={() => setStatus('idle')}>
            Submit Another Application
          </button>
        </div>
      </section>
    )
  }

  if (status === 'error') {
    return (
      <section id="apply" className="section dark">
        <div className="container errorBox">
          <Mail size={56} className="errorIcon" />
          <h2>Submission Failed</h2>
          <p>
            We were unable to send your application at this time. Please try again, or contact us
            directly and we will be happy to help.
          </p>
          <div className="heroActions center">
            <button className="primary" onClick={() => setStatus('idle')}>Try Again</button>
            <a href={`tel:${COMPANY.phoneRaw}`} className="secondary">Call {COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="secondary">Email Us</a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="section dark">
      <div className="container appGrid">
        <div>
          <p className="badge">Apply Online</p>
          <h2>Box Truck Owner-Operator Application</h2>
          <p className="leadSmall">
            Complete this application and GUD Express will contact you about the next steps.
          </p>

          <div className="contactCard">
            <p><Phone size={18} /> <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></p>
            <p><Mail size={18} /> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="formRow">
            <label>Full Name<input required name="fullName" /></label>
            <label>Phone Number<input required name="phone" /></label>
          </div>

          <div className="formRow">
            <label>Email<input required type="email" name="email" /></label>
            <label>City / State<input required name="location" /></label>
          </div>

          <div className="formRow">
            <label>Truck Size
              <select required name="truckSize">
                <option value="">Select</option>
                <option>16 ft box truck</option>
                <option>20 ft box truck</option>
                <option>22 ft box truck</option>
                <option>24 ft box truck</option>
                <option>26 ft box truck</option>
                <option>Other</option>
              </select>
            </label>

            <label>Years of Experience<input name="experience" /></label>
          </div>

          <div className="formRow">
            <label>Ready to Start
              <select name="startDate">
                <option>Immediately</option>
                <option>This week</option>
                <option>This month</option>
                <option>Later</option>
              </select>
            </label>
          </div>

          {/* Policy notice — displayed prominently before document uploads */}
          <div className="gudProvidedNotice">
            <ShieldCheck size={22} />
            <div>
              <strong>Important: Gud Express provides Insurance, W-9, and Truck Registration</strong>
              <p>
                Do <strong>not</strong> provide your own insurance, W-9, or truck registration.
                All drivers must use Gud Express insurance, the Gud Express W-9, and be registered
                under Gud Express. These will be handled on your behalf.
              </p>
            </div>
          </div>

          <h3>Upload Documents</h3>
          <div className="uploads">
            {['Driver License', 'Voided Check / Direct Deposit'].map(doc => (
              <label className="upload" key={doc}>
                <UploadCloud size={22} />
                <span>{doc}</span>
                <input type="file" />
              </label>
            ))}
          </div>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell us about your truck, availability, and driving experience."
            />
          </label>

          <button className="primary full" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting'
              ? <><Loader2 size={18} className="spin" /> Submitting&hellip;</>
              : <><Send size={18} /> Submit Application</>
            }
          </button>

          {/* FORMSPREE: This form posts to FORMSPREE_ENDPOINT (defined above the component).
              Replace YOUR_FORMSPREE_KEY in that constant with your real Formspree form ID.
              See README → "Formspree Integration" for step-by-step setup instructions. */}
          <p className="smallNote">
            Your information is kept private and will only be used to contact you about the
            GUD Express owner-operator program.
          </p>
        </form>
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
