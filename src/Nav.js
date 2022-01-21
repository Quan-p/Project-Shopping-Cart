import React, { useState } from "react";
import './css/Nav.css'
import { Link } from 'react-router-dom';
import ShoppingPane from "./components/ShoppingPane";

const Nav = () => {
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map((x) =>
                x.id === product.id ? {...exist, qty: exist.qty + 1} : x
            )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    }

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
                    <ShoppingPane onAdd = {onAdd} cartItems={cartItems}/> 
                </div>
            </nav>
            
            
        </div>    
    );
}

export default Nav;