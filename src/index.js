import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./RouteSwitch";
import CartContextProvider from './components/cart-context';

ReactDOM.render(
  <CartContextProvider>
    <RouteSwitch />
  </CartContextProvider>

  ,document.getElementById("root")
);