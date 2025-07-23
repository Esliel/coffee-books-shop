import React from 'react'
import { useState } from 'react'
import 'styles/Cart.css'

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, coffeeType) => acc + coffeeType.amount * coffeeType.price,
    0,
  )

  return isOpen ? (
    <aside className="cbs-cart">
      <button
        className="cbs-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul className="item-cart">
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name.split('<br />').map((part, idx) => (
                  <React.Fragment key={idx}>
                    {part}
                    {idx < name.split('<br />').length - 1 && <br />}
                  </React.Fragment>
                ))}
                <span className="cart-price">{price} €</span>
                <span className="cart-quantite">x {amount}</span>
              </div>
            ))}
          </ul>
          <button className="vider-panier-cta" onClick={() => updateCart([])}>
            Vider le panier
          </button>
          <h3>Total : {total} €</h3>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </aside>
  ) : (
    <div className="cbs-cart-closed">
      <button
        className="cbs-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  )
}

export default Cart
