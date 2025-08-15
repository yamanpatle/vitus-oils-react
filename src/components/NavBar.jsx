import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function NavBar() {
  const getActive = ({ isActive }) => (isActive ? 'active' : undefined)
  return (
    <nav className="navbar">
      <NavLink to="/" className={getActive}>Home</NavLink>
      <NavLink to="/catalogue" className={getActive}>Product Catalogue</NavLink>
      <NavLink to="/offerings" className={getActive}>Offerings</NavLink>
      <NavLink to="/about" className={getActive}>About Us</NavLink>
    </nav>
  )
}
