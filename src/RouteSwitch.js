import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import Shop from "./pages/Shop";
import Cases from "./pages/shopcategory/Cases";

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact={false} path="/shop" element={<><Shop /> <Outlet /></>}>
                <Route path="/shop/cases" element={<Cases />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default RouteSwitch;