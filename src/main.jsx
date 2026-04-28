/**
 * GUD Express LLC — Main React Application
 *
 * All page sections are defined in this single file for simplicity.
 * To customize branding, search for the COMPANY constant below and
 * update the values. Image assets are in src/assets/ — replace
 * gud-logo.png, truck.png, and team.png with your own images.
 */

import React, { useState } from 'react'
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
// COMPANY INFO: Update these values to match your actual company details
// ---------------------------------------------------------------------------
const COMPANY = {
  name: 'GUD Express LLC',
  dot: '4039907',
  mc: '1528475',
  phone: '(775) 389-1414',
  phoneRaw: '7753891414',
  email: 'gudexpress@gudxp.com',
}

// Services offered — update text or add/remove entries as needed
const services = [
  ['Work Under Our MC', 'Box truck owner-operators can work under GUD Express MC authority.', ShieldCheck],
  ['Dispatch Service', 'We help find, negotiate, and book loads for qualified owner-operators.', ClipboardList],
  ['Factoring Support', 'We help coordinate factoring paperwork and faster payment support.', DollarSign],
  ['Payment Support', 'We assist with rate confirmations, paperwork, invoices, and weekly settlements.', FileText],
]

// Requirements checklist — edit items as needed
const requirements = [
  'Valid driver license',
  'Box truck information',
  'Active insurance or insurance in progress',
  'W-9 form',
  'Truck registration',
  'Direct deposit or voided check',
  'Driving experience information',
]

// ============================================================
// Root App — arranges all page sections in order
// ============================================================
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <TeamSection />
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
            <strong>10% – 15%</strong>
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
// Pricing — fee highlight
// ============================================================
function Pricing() {
  return (
    <section className="section dark">
      <div className="container pricing">
        <h2>Simple Weekly Fee</h2>
        <div className="big">10% – 15%</div>
        <p>
          Owner-operators pay 10% to 15% of weekly gross revenue for dispatch, factoring
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
        </div>
      </div>
    </section>
  )
}

// ============================================================
// Application — driver application form
// Connect this form to a backend (Formspree, Supabase, etc.)
// to receive real applications. See README for instructions.
// ============================================================
function Application() {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success'

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    // TODO: Replace this timeout with a real form submission call, e.g.:
    //   await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: new FormData(e.target) })
    // See README for backend integration options.
    setTimeout(() => setStatus('success'), 1200)
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

            <label>Insurance Status
              <select required name="insurance">
                <option value="">Select</option>
                <option>Active insurance</option>
                <option>In progress</option>
                <option>Need help</option>
              </select>
            </label>
          </div>

          <div className="formRow">
            <label>Years of Experience<input name="experience" /></label>
            <label>Ready to Start
              <select name="startDate">
                <option>Immediately</option>
                <option>This week</option>
                <option>This month</option>
                <option>Later</option>
              </select>
            </label>
          </div>

          <h3>Upload Documents</h3>
          <div className="uploads">
            {['Driver License', 'Insurance', 'W-9', 'Truck Registration', 'Voided Check / Direct Deposit'].map(doc => (
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

          {/* BACKEND: Connect this form to Formspree, Supabase, or your own API.
              See README -> "Important Note" for integration options. */}
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
          <p className="footCopy">&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

createRoot(document.getElementById('root')).render(<App />)
