import React from "react";
import './css/Nav.css'
import { Link } from 'react-router-dom';
import Cart from "./components/Cart";

const Nav = () => {
    return (
        <div className = 'header'>
            <div>
                Title
            </div>
            <nav>
                <Link to='/'>
                    <div>Home</div>
                </Link>
                <Link to='/shop'>
                    <div>Shop</div>
                </Link>
            </nav>
            <div>
               <Cart /> 
            </div>
            
        </div>    
    );
}

export default Nav;