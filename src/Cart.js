import React from 'react'
import {Link} from 'react-router-dom'

function Cart({cart}) {

    const newCart = Object.values(
        cart.reduce((acc,item) => {
            if(acc[item.id]){
                acc[item.id].quantity += 1
            }
            else{
                acc[item.id] = {...item , quantity: 1}
            }
            return acc
        },{})
    )

    if(newCart.length === 0 ){
        return(
            <>
            <h1>No items inside cart</h1>
            <Link to ="/">Back to Products List</Link>
            </>
        )
    }
   let itemTotal = 0
  return (
    
    <div>
        <h1 style={{ display:'flex', justifyContent: 'center', margin: '20px'}}>Cart items</h1>
        <ul style={{listStyle: 'none'}}>
      {newCart.map((ele) => {
          itemTotal =  itemTotal+( ele.price * ele.quantity) 
        return(
            <li style={{display:'flex', alignItems: 'center', gap: '20px', margin: '30px', fontSize: '25px'}} key={ele.id}>
            <img src = {ele?.image} alt={ele?.title} style={{width: '100px', height: '100px'}}/>
            <div>
            <p>{ele.title}</p>
            <p>Rs{ele.price}</p>
            </div>
            <button style={{backgroundColor: "lightgreen" , border: "1px solid green" , borderRadius: '5px' , paddingTop: '.5rem',
        paddingBottom: '.5rem', width: '80px'}}  >Quantity: {ele.quantity}</button>
            </li>
        )
      })}
       <p>Item Total: Rs {itemTotal} </p>
       <p>Handling Charge: Rs 4</p>
       <b>Grand Total: Rs {itemTotal+4}</b>

      </ul>
    </div>
  )
}

export default Cart
