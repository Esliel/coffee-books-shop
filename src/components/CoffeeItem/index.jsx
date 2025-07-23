// import Scales from 'components/Scales'
import 'styles/CoffeeItem.css'
import React from 'react'

function CoffeeItem({
  id,
  cover,
  name,
  cafeine,
  intensite,
  editionLimitee,
  price,
  description,
}) {
  return (
    <li key={id} className="cbs-coffee-item">
      <span className="cbs-coffee-item-name">
        {name.split('<br />').map((part, idx) => (
          <React.Fragment key={idx}>
            {part}
            {idx < name.split('<br />').length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
      <span className="cbs-coffee-item-price">{price} €</span>
      {editionLimitee === true ? (
        <span className="edition-limitee">Edition Limitée</span>
      ) : (
        <span className="edition-limitee" style={{ visibility: 'hidden' }}>
          Edition Limitée
        </span>
      )}
      <img
        className="cbs-coffee-item-cover"
        src={cover}
        alt={`${name} cover`}
      />
      <p className="cbs-description-pack">{description}</p>

      {/* {cafeine ? <span>☀️ (présence de caféine)</span> : <span>🌙 (décaféiné)</span>}
			<div>
				Intensité : <Scales scaleValue={intensite} type='intensite' />
			</div> */}
    </li>
  )
}

export default CoffeeItem
