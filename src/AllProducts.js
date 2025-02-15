
import { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function AllProducts({addToCart, cart}) {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{ 
               console.log(json);
              setItems(json)})

  },[])
  console.log(cart)
  return (
    <div className="App">
      <h1>blinkit</h1>
      <Link to="/cart" style={{textDecoration: 'none',fontSize: '25px', fontWeight: '600',backgroundColor: 'green',marginBottom: '10px',padding: '10px',
    gap: '10px',
    display: 'flex',
    width: 'fit-content',
    color: 'antiquewhite'}}>{cart.length === 0 ? 'Cart Items' : `Cart Items : ${cart.length}`} </Link>
      <div style={{display: 'flex', flexWrap:'wrap'}}>
    {items.map((ele) => {
        const count = cart.filter((item) => item.id === ele.id).length
      return (
        <div style={{ border: "1px solid black" ,
          borderRadius: '5px',
          margin: '10px',
          padding: '15px',
          width: '200px',
          height: '400px'
        }} >
        <Link to= {`/products/${ele.id}`} style={{textDecoration: 'none', color: '#000000'}}>
        <img src = {ele.image} alt = {ele.category} style={{width: '100ppx', height: '100px'}}/>
        <p>{ele.category}</p>
        <p>{`Rs ${ele.price}`}</p>
        <p>{ele.title}</p>
        <p>Rating : {ele.rating.rate}</p>
        </Link>
        <button style={{backgroundColor: "lightgreen" , border: "1px solid green" , borderRadius: '5px' , paddingTop: '.5rem',
        paddingBottom: '.5rem'}} onClick={() => addToCart(ele)} >{count === 0 ? 'Add to Cart' : `${count}`}</button>
        </div>
      )
})}
</div>
    </div>
  );
}

export default AllProducts;


// Requirements: Build a Blinkit like clone with features like adding to cart, displaying a list of products and opening the detail page
// Figma designs: Can refer to Blinkit website directly
// Images and assets: Also on Blinkit website
// Api resources: Fake store db