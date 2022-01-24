import React, { createContext, useState } from 'react';
import SHOP_DATA from '../shop';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [proudcts] = useState(SHOP_DATA);

    return (
        <ProductsContext.Provider value={{ proudcts }}>
            {
                children
            }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;