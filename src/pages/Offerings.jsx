import React from 'react'
import '../styles/offerings.css'

const offerings = [
  {
    icon: "🛢️",
    title: "Premium Lubricant Range",
    description: "Over 90 high-performance products for automotive, industry, and agriculture."
  },
  {
    icon: "🧑‍🔬",
    title: "GENext Advisory Program",
    description: "Expert consultancy for new manufacturing plants and custom lubrication plans."
  },
  {
    icon: "🛠️",
    title: "Technical Support & Training",
    description: "Comprehensive knowledge & assistance beyond products."
  },
  {
    icon: "🌱",
    title: "Sustainability-Driven Solutions",
    description: "Lubrication strategies to reduce your environmental impact."
  },
  {
    icon: "🚚",
    title: "Bulk Supply & Logistics",
    description: "Reliable and efficient supply chain solutions for your operations."
  }
]

export default function Offerings() {
  return (
    <section className="offerings-page">
      <h1>Our Offerings</h1>
      <div className="offerings-list">
        {offerings.map((o, idx) => (
          <div className="offering-card" style={{ animationDelay: `${idx * 80}ms` }} key={o.title}>
            <span className="offering-icon">{o.icon}</span>
            <h2>{o.title}</h2>
            <p>{o.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
