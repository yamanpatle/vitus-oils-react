import React from 'react'
import { getOilColor, getOilIcon } from '../utils'
import '../styles/catalogue.css'

function Badge({ color, icon, children }) {
  return (
    <span className="badge" style={{ backgroundColor: color }}>
      {icon} {children}
    </span>
  )
}

export default function ProductCard({ product, highlight }) {
  const type = product.oil_type || 'Other'
  const color = getOilColor(type)

  return (
    <article
      className={`product-card${highlight ? ' highlight' : ''}`}
      style={highlight ? { borderColor: color } : {}}
      aria-label={`Product card for ${product.product_name}`}
    >
      <div className="product-image-wrapper">
        <img
          src={product.image_url || '/images/placeholder.jpg'}
          alt={`${product.product_name} image`}
          loading="lazy"
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2 className="product-name">{product.product_name}</h2>

        <div className="badges-row">
          <Badge color={color} icon={getOilIcon(type)}>{type}</Badge>
          {product.availability_status && (
            <Badge color={product.availability_status === 'In Stock' ? 'green' : '#e53e3e'}>
              {product.availability_status}
            </Badge>
          )}
        </div>

        <p className="oil-grade"><strong>Grade:</strong> {product.oil_grade || 'N/A'}</p>

        {product.short_description && <p className="description">{product.short_description}</p>}
        {product.specifications && <p><strong>Specifications:</strong> {product.specifications}</p>}
        {product.recommended_use && <p><strong>Use:</strong> {product.recommended_use}</p>}
        {product.packaging_options && <p><strong>Packaging:</strong> {product.packaging_options}</p>}
        {product.price_range && <p><strong>Price:</strong> {product.price_range}</p>}

        {product.special_features && (
          <p className="special-features"><em>{product.special_features}</em></p>
        )}

        {product.safety_data_sheet_url && (
          <p>
            <a href={product.safety_data_sheet_url} target="_blank" rel="noreferrer" className="sds-link">
              Safety Data Sheet
            </a>
          </p>
        )}
      </div>
    </article>
  )
}