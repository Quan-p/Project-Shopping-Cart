import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = (product) => {
    const { title, src, price, quantity } = product;

    return (
        <div>
            <div>
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
                <button>
                    <AddCircleIcon />
                </button>
                {
                    quantity === 1 &&
                    <button>
                        <DeleteIcon />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button>
                        <RemoveCircleIcon />
                    </button>
                }
            </div>
        </div>
    );
}

export default CartItem;