import React, { useContext } from "react";
import { ShoppingCartOutlined } from '@material-ui/icons';
import { CartContext } from "../../context/cart-context";
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { itemCount, cartItems } = useContext(CartContext);
    console.log('CartItems:', cartItems);
    return (
        <div className='cart-container'>
            <ShoppingCartOutlined className = 'cart-icon' alt='shopping-cart-icon' />
            {
                itemCount > 0 ? <span className='cart-count'> { itemCount } </span> : null
            }
        </div>
    );
}

export default CartIcon;
