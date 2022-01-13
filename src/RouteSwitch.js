import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import Shop from "./pages/Shop";

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            {/* <Route exact path="/" element={<App />} /> */}
            <Route exact path="/shop" element={<Shop />} /> 
        </Routes>
      </BrowserRouter>
  );
};

export default RouteSwitch;