import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';


export const CartItem = (props) => {
  
  const {id,Name,price,productImage} = props.data;
  const { cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);
    
  return (
    <div className='CartItem'>
        <img src={productImage}/>
        <div className='description'>
        <p>{Name}</p>
        <p>${price}</p> 
        </div>
        <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) }></input>
            <button onClick={() => addToCart(id)}>+</button>
        </div>     
    </div>
  )
}


