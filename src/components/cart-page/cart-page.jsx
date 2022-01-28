import React, { useContext, useState } from 'react';
import Layout from '../shared/layout';
import { CartContext } from '../../context/cart-context';
import CartItem from './cart-items';
import Total from './total';
import './cart-page.styles.scss'
 
const CartPage = () => { 
    const { cartItems, itemCount, total, } = useContext(CartContext);
    return (
      <Layout>
          <>
            <h1>Cart</h1>
            {
              cartItems.length === 0 ? <div className='empty-cart'>Your Cart is Empty </div>
              :
              <>
                <div className='cart-page'>
                  <div className='cart-item-container'>
                    {
                      cartItems.map(item => <CartItem { ...item } key={item.id}/>) 
                    }
                  </div>
                  <Total itemCount={itemCount} total={total} />
                </div>
              </>
            }
        </>
      </Layout>
    );
};
 
export default CartPage;