import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cases from './shopcategory/Cases';

const Shop = (props) => {
    const [cart, setCart] = useState([]);
    const [cartClicked, setCartClicked] = useState(false);
    const [cartLength, setCartLength] = useState(cart.length);

    function addToCart(e, product) {
        for(let i = 0; i < e.target.nextElementSibling.value; i++) {
            setCart((prevCart) => [...prevCart, product])
        }
    }

    function emptyCart() {
        setCart([]);
        setCartClicked(0);
    }

    useEffect(() => {
        setCartLength(cart.length);
    }, [cart]);

    return (
    <main>
        <div>
            <h1>Shop</h1>
        </div>
        <div className='shop-categories'>
            <Link to='cases'>
                <p>Cases</p>
            </Link>
            <Link to='processors'>
                <p>Processors</p>
            </Link>
            <Link to='motherboards'>
                <p>Motherboards</p>
            </Link>
            <Link to='videocards'>
                <p>Video Cards</p>
            </Link>
            <Link to='memory'>
                <p>Memory</p>
            </Link>
        </div>
        <div>
            <Cases />
        </div>
    </main>
);
}

export default Shop;
