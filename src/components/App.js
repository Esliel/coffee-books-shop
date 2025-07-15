import { useState, useEffect } from 'react'
import '../styles/index.css'
import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Presentation from './Presentation'


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
        <div className='flex-row'>
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
      </main>
      <Footer />
    </body>
  )
}

export default App
