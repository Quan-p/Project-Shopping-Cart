import React from "react";
import './css/Nav.css'
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@material-ui/icons';

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
                <button>
                    <ShoppingCartOutlined />
                </button>
            </nav>
        </div>    
    );
}

export default Nav;