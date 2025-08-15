import React, { useMemo } from 'react'
import { getOilColor, getOilIcon } from '../utils'
import '../styles/catalogue.css'

export default function TagFilter({ products, activeType, setActiveType }) {
  const types = useMemo(() => {
    const set = new Set(products.map(p => p.oil_type || 'Other'))
    return Array.from(set)
  }, [products])

  return (
    <div className="tag-filter">
      {types.map(type => (
        <button
          key={type}
          className={`tag-filter__item${activeType === type ? ' active' : ''}`}
          style={activeType === type ? { background: getOilColor(type), color: '#fff' } : {}}
          onClick={() => setActiveType(type)}
          aria-pressed={activeType === type}
        >
          {getOilIcon(type)} {type}
        </button>
      ))}
      <button
        className={`tag-filter__item${activeType === 'All' ? ' active' : ''}`}
        onClick={() => setActiveType('All')}
      >
        Show All
      </button>
    </div>
  )
}
