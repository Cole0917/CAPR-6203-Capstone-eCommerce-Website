import React, { useContext } from 'react'
import {GlobalState} from '../globalstate'
import {Link} from "react-router-dom"
import Menu from "./icons/utensils-solid.svg"
import Cart from "./icons/cart-shopping-solid.svg"
import Exit from "./icons/x-solid.svg"
import "./header.css"

function Header() {
    const value = useContext(GlobalState)
    return (
            <header>
              <div className="menu">
                <img src={Menu} alt="" width="30"/>
              </div>
              <div className="logo">
                <h1>
                    <Link to= "/">Grocery Name"</Link>
                </h1>
              </div> 

              <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/">Login/Register</Link></li>
                <li>
                    <img src={Exit} alt="" width="30"/>
                </li>
              </ul>

              <div className="cart-icon">
                <span>0</span>
                <Link to="">
                    <img src={Cart} alt="" width="30"/>
                </Link>
              </div>
            </header>    
    )
}

export default Header