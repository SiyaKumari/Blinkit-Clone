import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

function Details({addToCart, cart}) {
    const {id} = useParams()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data => setDetail(data))
           
    },[id])
    const count = cart.filter((item) => item.id === detail.id).length
  return (
  <>
    <Link to ="/" style={{textDecoration: 'none',fontSize: '25px', fontWeight: '600',backgroundColor: 'green',marginBottom: '10px',padding: '10px',
    gap: '10px',
    display: 'flex',
    width: 'fit-content',
    color: 'antiquewhite'}}> Back to Products List</Link>
    <div style={{display:'flex' , flexDirection:'column', margin: '20px', justifyContent:'center' , textAlign: 'center'}}>      
   
         <img src = {detail?.image} alt={detail?.title} style={{width: '10%', height: '10%'}}/>
         <h1>{detail?.description}</h1>
         <b>Rating : {detail?.rating?.rate}/5</b>
         <b>Purchase Count: {detail?.rating?.count}</b>
         <button style={{backgroundColor: "lightgreen" , border: "1px solid green" , borderRadius: '5px' , paddingTop: '.5rem',
        paddingBottom: '.5rem'}} onClick={() => addToCart(detail)} >{count === 0 ? 'Add to Cart' : `${count}`}</button>
        
    </div>
    </>
  )
}

export default Details
