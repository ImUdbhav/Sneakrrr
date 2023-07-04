import React from "react"
import  {Product}  from "./Product"
import { PROD} from "../Products" 
import {} from "./Shop.css"

export const Shop = () => {
    
     return(   
    <div className="Shop">
        <div className="shopTitle">
           <b>Sneakrrr</b>
        </div>
        <div className="products">
            {PROD.map((product) => {
               return <Product data={product} ></Product>
            })}
        </div>
    
     </div>
     )
   
     
        
    
}