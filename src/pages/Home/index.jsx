import { useState, useEffect } from 'react'
import 'styles/index.css'
import 'styles/App.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Cart from 'components/Cart'
import ShoppingList from 'components/ShoppingList'
import Presentation from 'components/Presentation'

function App() {
  // const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState([])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <body>
      <Header />
      <main>
        <Presentation />
        <div className="flex-row">
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
      </main>
      <Footer />
    </body>
  )
}

export default App
