import React from 'react'
import '../styles/contactpopup.css'

export default function ContactPopup({ open, setOpen }) {
  if (!open) return null
  return (
    <div className="contact-popup__backdrop" onClick={() => setOpen(false)}>
      <div className="contact-popup" onClick={e => e.stopPropagation()}>
        <button className="contact-popup__close" onClick={() => setOpen(false)} aria-label="Close">×</button>
        <h2>Contact Us</h2>
        <p>Call us at <a href="tel:8550952303">8550952303</a></p>
        <p>Email: <a href="mailto:info@vitus.com">info@vitus.com</a></p>
        {/* Place any form or more contact info here */}
      </div>
    </div>
  )
}
