import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <span>&copy; {new Date().getFullYear()} Vitus Oil Solutions Pvt Ltd</span>
        <span className="footer__credits">Designed & Developed by Your Team</span>
      </div>
      <div className="footer__links">
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a> | <a href="/contact">Contact</a>
      </div>
    </footer>
  )
}
