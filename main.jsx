import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  Truck, ShieldCheck, ClipboardList, DollarSign, Phone, Mail,
  CheckCircle, UploadCloud, Send, FileText, ArrowRight
} from 'lucide-react'
import './styles.css'

const COMPANY = {
  name: 'GUD Express LLC',
  dot: '4039907',
  mc: '1528475',
  phone: '(775) 389-1414',
  phoneRaw: '7753891414',
  email: 'gudexpress@gudxp.com'
}

const services = [
  ['Work Under Our MC', 'Box truck owner-operators can work under GUD Express MC authority.', ShieldCheck],
  ['Dispatch Service', 'We help find, negotiate, and book loads for qualified owner-operators.', ClipboardList],
  ['Factoring Support', 'We help coordinate factoring paperwork and faster payment support.', DollarSign],
  ['Payment Support', 'We assist with rate confirmations, paperwork, invoices, and weekly settlements.', FileText]
]

const requirements = [
  'Valid driver license',
  'Box truck information',
  'Active insurance or insurance in progress',
  'W-9 form',
  'Truck registration',
  'Direct deposit or voided check',
  'Driving experience information'
]

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

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="brand">
          <img src="/src/assets/gud-logo.png" alt="GUD Express Logo" />
          <span>
            <strong>GUD Express</strong>
            <small>MC {COMPANY.mc} | DOT {COMPANY.dot}</small>
          </span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#apply">Apply</a>
          <a href={`tel:${COMPANY.phoneRaw}`} className="callBtn">Call Now</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container heroGrid">
        <div>
          <p className="badge">Box Truck Owner-Operators Wanted</p>
          <h1>Drive Under <span>GUD Express</span> MC Authority</h1>
          <p className="lead">
            GUD Express helps box truck owner-operators get access to work under our MC authority with dispatch service, factoring support, and payment coordination.
          </p>

          <div className="heroActions">
            <a href="#apply" className="primary">Start Application <ArrowRight size={18}/></a>
            <a href={`tel:${COMPANY.phoneRaw}`} className="secondary">Call {COMPANY.phone}</a>
          </div>

          <p className="trust">
            <CheckCircle size={18}/> Verified company information: MC {COMPANY.mc} | DOT {COMPANY.dot}
          </p>
        </div>

        <div className="heroImage">
          <img src="/src/assets/truck.png" alt="GUD Express branded box truck" />
          <div className="priceCard">
            <strong>10% – 15%</strong>
            <span>weekly revenue fee</span>
          </div>
        </div>
      </div>
    </section>
  )
}

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
              <Icon size={34}/>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="section team">
      <div className="container">
        <img src="/src/assets/team.png" alt="GUD Express driver support team" />
        <div className="teamText">
          <p className="badge">All Qualified Drivers Welcome</p>
          <h2>One Team. One Mission. Helping Drivers Grow.</h2>
          <p>
            GUD Express welcomes qualified box truck owner-operators from all backgrounds. Our focus is dispatch support, business organization, and helping drivers stay moving.
          </p>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section dark">
      <div className="container pricing">
        <h2>Simple Weekly Fee</h2>
        <div className="big">10% – 15%</div>
        <p>
          Owner-operators pay 10% to 15% of weekly gross revenue for dispatch, factoring coordination, payment support, and business assistance.
        </p>
      </div>
    </section>
  )
}

function Requirements() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <p className="badge">Application Requirements</p>
          <h2>What Drivers Need to Apply</h2>
          <p className="leadSmall">
            GUD Express reviews each applicant to make sure they are ready to work professionally under our MC authority.
          </p>
        </div>

        <div className="requireBox">
          {requirements.map(item => (
            <div className="check" key={item}>
              <CheckCircle size={20}/>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Application() {
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
            <p><Phone size={18}/> <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></p>
            <p><Mail size={18}/> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p>
          </div>
        </div>

        <form className="form" onSubmit={(e)=>{e.preventDefault(); alert('Demo application submitted. Connect this form to a backend to receive real applications.')}}>
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
            {['Driver License','Insurance','W-9','Truck Registration','Voided Check / Direct Deposit'].map(doc => (
              <label className="upload" key={doc}>
                <UploadCloud size={22}/>
                <span>{doc}</span>
                <input type="file" />
              </label>
            ))}
          </div>

          <label>Message<textarea name="message" placeholder="Tell us about your truck, availability, and driving experience." /></label>

          <button className="primary full" type="submit">
            <Send size={18}/> Submit Application
          </button>

          <p className="smallNote">
            Note: This demo form must be connected to a backend or form service before it can receive real applications.
          </p>
        </form>
      </div>
    </section>
  )
}

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

function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div>
          <strong>{COMPANY.name}</strong>
          <p>MC {COMPANY.mc} | DOT {COMPANY.dot}</p>
        </div>
        <div>
          <p>{COMPANY.phone} | {COMPANY.email}</p>
        </div>
      </div>
    </footer>
  )
}

createRoot(document.getElementById('root')).render(<App />)
