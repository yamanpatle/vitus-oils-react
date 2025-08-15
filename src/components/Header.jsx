import React, { useState } from 'react'
import ContactPopup from './ContactPopup.jsx'
import NavBar from './NavBar.jsx'
import '../styles/header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        <span className="header__logo">Vitus Oil Solutions</span>
        <NavBar />
        <button className="header__contact-btn" onClick={() => setOpen(true)}>
          Contact
        </button>
      </div>
      <ContactPopup open={open} setOpen={setOpen} />
    </header>
  )
}
