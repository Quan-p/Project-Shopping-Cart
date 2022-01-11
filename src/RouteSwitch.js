import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/shopping-cart" element={<App />} />
            <Route exact path="/shopping-cart/shop" element={<Shop />} /> 
        </Routes>
      </BrowserRouter>
  );
};

export default RouteSwitch;