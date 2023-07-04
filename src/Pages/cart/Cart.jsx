import React, { useContext } from "react";
import { PROD } from "../Products";
import { ShopContext } from "../../context/ShopContextProvider";
import { CartItem } from "./CartItem";
import {} from "./Cart.css";
import { useNavigate } from "react-router-dom";

export const Cart= () =>

{

    const {cartItems,getTotalCartAmount} =useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const Navigate = useNavigate();
    return (
        <div className="Cart">
            <div class="mb-11"><h1>Cart</h1></div>
            <div className="cartItems">
                {PROD.map((product)=>{
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product} />
                    }
                })}
            </div>
            <div className="checkout">
                <p>${totalAmount}</p>
                <button onClick={() => Navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    )

}
