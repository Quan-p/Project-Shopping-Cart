import React from "react";
import { RemoveCircleOutline, DeleteOutline, AddCircleOutline, } from '@material-ui/icons';

const CartItem = (props) => {
    const { title, src, price, description, quantity, id, increase, decrease, removeProduct } = props;
    const product = { title, src, price, quantity, id, description }

    return (
        <div className='cart-item'>
            <div className='item-image'>
                <img src={src} alt='product' />
            </div>
            <div className='name-price'>
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
            <div className='quantity'>
                <p>{`Quantity: ${quantity}`}</p>
            </div>
            <div className='btns-container'>
                <button className='btn-increase' onClick={() => increase(product)}>
                    <AddCircleOutline />
                </button>
                <button className='btn-decrease' onClick={() => decrease(product)}>
                    <RemoveCircleOutline />
                </button>
                <button className='btn-trash' onClick={() => removeProduct(product)}>
                    <DeleteOutline />
                </button>
            </div>
        </div>
    );
}

export default CartItem;