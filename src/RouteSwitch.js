import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import Shop from "./pages/Shop";
import Cases from "./pages/shopcategory/Cases";
import Motherboards from "./pages/shopcategory/Motherboards";
import Processors from "./pages/shopcategory/Processors";
import VideoCards from "./pages/shopcategory/VideoCards";
import Memory from "./pages/shopcategory/Memory"

const RouteSwitch = () => {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact={false} path="/shop" element={<><Shop /> <Outlet /></>}>
                <Route path="/shop/cases" element={<Cases />} />
                <Route path="/shop/processors" element={<Processors />} />
                <Route path="/shop/motherboards" element={<Motherboards />} />
                <Route path="/shop/videocards" element={<VideoCards />} />
                <Route path="/shop/memory" element={<Memory />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default RouteSwitch;