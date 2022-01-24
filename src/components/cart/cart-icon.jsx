import React from "react";
import { ShoppingCartOutlined } from '@material-ui/icons';
import './cart-icon.styles.scss';

const CartIcon = () => {
    return (
        <div className='cart-container'>
            <ShoppingCartOutlined className = 'cart-icon' alt='shopping-cart-icon' />
            <span className='cart-count'> 5 </span>
        </div>
    );
}

export default CartIcon;
