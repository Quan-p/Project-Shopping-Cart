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
        
    </main>

)

export default Shop;
