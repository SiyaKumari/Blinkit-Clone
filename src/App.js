
import AllProducts from "./AllProducts";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Details from "./Details";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [cart,setCart] = useState([])
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
    console.log(cart)
  }
return(
  <Router>
    <Routes>
      <Route path="/" element={<AllProducts addToCart={addToCart} cart={cart}/>}/>
      <Route path="/products/:id" element={<Details addToCart={addToCart} cart={cart}/>}/>
      <Route path="/cart" element={<Cart cart={cart}/>} />
      </Routes>
  </Router>
)
}

export default App;


// Requirements: Build a Blinkit like clone with features like adding to cart, displaying a list of products and opening the detail page
// Figma designs: Can refer to Blinkit website directly
// Images and assets: Also on Blinkit website
// Api resources: Fake store db