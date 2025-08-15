import React from 'react'
import '../styles/home.css'

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1>
          <span className="brand-name">VITUS Oil Solutions</span>
        </h1>
        <h2>
          Unlocking Performance, Creating Value
        </h2>
        <p className="tagline">
          India's trusted partner for world-class lubrication technology, serving automotive, manufacturing, agriculture, and heavy engineering.
        </p>
        <a href="/catalogue" className="home-hero__cta">Explore Products</a>
      </div>
    </section>
  )
}
