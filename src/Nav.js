import React, { useState } from "react";
import './css/Nav.css'
import { Link } from 'react-router-dom';
import ShoppingPane from "./components/ShoppingPane";

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
                <div>
                    <span className='cartCount'>5</span>
                    <ShoppingPane /> 
                </div>
            </nav>
            
            
        </div>    
    );
}

export default Nav;