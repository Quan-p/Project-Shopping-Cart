import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => (
    <main>
        <div>
            <h1>Shop</h1>
        </div>
        <div className='shop-categories'>
            <Link to='cases'>
                <p>Cases</p>
            </Link>
            <p>Processors</p>
            <p>Motherboards</p>
            <p>Video Cards</p>
            <p>Memory</p>
        </div>
        
    </main>

)

export default Shop;
