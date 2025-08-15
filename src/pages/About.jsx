import React from 'react'
import '../styles/about.css'

export default function About() {
  return (
    <section className="about-page">
      <div className="about-main">
        <h1>About VITUS</h1>
        <p>
          At VITUS, we deliver innovative specialty products trusted across the globe. Headquartered in Amravati and with locations across India, we are customer-focused and driven by values of collaboration and entrepreneurship.
        </p>
        <p>
          <strong>Our Mission:</strong> To deliver high-performance lubrication solutions that empower maximum efficiency and equipment life—while upholding the highest standards of quality, innovation, and environmental care.
        </p>
        <p>
          <strong>Our Vision:</strong> To become the most trusted and innovative lubrication partner in India and beyond, recognized for technical expertise, unmatched quality, and relentless customer focus.
        </p>
        <p>
          We’re not just suppliers—we are partners in your success. Every product and recommendation is backed by research, industry knowledge, and a passion for excellence.
        </p>
        <p>
          From two-wheelers to 24/7 industrial plants, our solutions protect and empower—because your performance is our priority.
        </p>
      </div>
      <aside className="about-contact-card">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> <a href="tel:8550952303">8550952303</a></p>
        <p><strong>Email:</strong> <a href="mailto:biomassenergies@gmail.com">biomassenergies@gmail.com</a></p>
      </aside>
    </section>
  )
}
