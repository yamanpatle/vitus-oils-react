import React, { useEffect, useMemo, useState } from 'react'
import TagFilter from '../components/TagFilter.jsx'
import ProductCard from '../components/ProductCard.jsx'
import '../styles/catalogue.css'

export default function Catalogue() {
  const [products, setProducts] = useState([])
  const [activeType, setActiveType] = useState(null)

  useEffect(() => {
    fetch('/data/products.json')
      .then(r => r.json())
      .then(setProducts)
      .catch(console.error)
  }, [])

  const sorted = useMemo(() => {
    if (!activeType) return products
    const match = products.filter(p => (p.oil_type || 'Other') === activeType)
    const rest = products.filter(p => (p.oil_type || 'Other') !== activeType)
    return [...match, ...rest]
  }, [products, activeType])

  return (
    <section className="catalogue">
      <header className="catalogue-header">
        <h1>Our Product Catalogue</h1>
        <p className="catalogue-subhead">Explore the full range of high-performance lubricants and specialty oils.</p>
        <TagFilter products={products} activeType={activeType} setActiveType={setActiveType} />
      </header>
      <div className="product-grid">
        {sorted.map((p, idx) => (
          <div className="card-animator" style={{ animationDelay: `${idx * 40}ms` }} key={p.product_name}>
            <ProductCard product={p} highlight={!!activeType && (p.oil_type === activeType)} />
          </div>
        ))}
      </div>
    </section>
  )
}
