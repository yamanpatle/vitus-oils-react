import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalogue from './pages/Catalogue.jsx'
import Offerings from './pages/Offerings.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <div className="app-shell">
      {/* Header includes NavBar internally */}
      <Header />

      <main className="app-main" role="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}
