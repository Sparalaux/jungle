import Banner from './banner';
import Cart from './cart';
import ShoppingList from './shoppinglist';
import Footer from './footer'
import "../styles/app.css"
import { useState, useEffect } from 'react'

function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    <div>
      <Banner />
      <div className="lmj-screen">
        <Cart cart={cart} updateCart={updateCart} /> 
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      
      <Footer />
    </div>
    
  );
}

export default App;
