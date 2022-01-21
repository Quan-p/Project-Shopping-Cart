import React, { useState } from "react";

const AddToCart = () => {
    const [cart, setCart] = useState([]);
    const [itemIndex, setItemIndex] = useState(1);

    setCart([...cart, ` item ${itemIndex}`]);
    setItemIndex(itemIndex + 1);
}

export default AddToCart;