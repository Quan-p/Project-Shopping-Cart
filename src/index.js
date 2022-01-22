import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartContextProvider from './components/cart-context';

ReactDOM.render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>
    

  ,document.getElementById("root")
);