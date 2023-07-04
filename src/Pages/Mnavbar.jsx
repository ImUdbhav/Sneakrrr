import React from "react";
import { Link } from "react-router-dom"
import {ShoppingCart,Storefront} from "phosphor-react";
import {} from "./Navbar.css"

export const Mnavbar = () =>
{
    return (
        <div className="Navbar">
            
            <div className="links">
              
              <Link to="/">
                <Storefront size={32} />
              </Link>
             <Link to="/Cart">
            <ShoppingCart size={32}/>
            </Link>

             </div>
        </div>
    )

}