import React, { useContext, useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/layout";
import './single-product.styles.scss'

const SingleProduct = ({ match, history: { push} }) => {
    const { products } = useContext(ProductsContext);
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id))

        if (!product) {
            return push('/shop')
        }

        setProduct(product);
    }, [id, product, push, products]);
    //while checking for product return null
    if (!product) { return null }

    const{ src, title, price, description } = product;

    return (
        <Layout>
            <div className='single-product-container'>
                <div className='product-image'>
                    <img src = {src} alt='product' />
                </div>
                <div className='product-details'>
                    <div className='name-price'>
                        <h3>{title}</h3>
                        <p>${price}</p>
                    </div>
                    <div className='add-to-cart-btns'>
                        <button className='button is-white nomad-btn' id='btn-white-outline'>
                            ADD TO CART
                        </button>
                        <button className='button is-black nomad-btn'>
                            PROCEED TO CHECKOUT
                        </button>
                    </div>
                    <div className='product-description'>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default withRouter(SingleProduct);