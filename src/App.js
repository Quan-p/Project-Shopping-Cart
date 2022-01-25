import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import HomePage from "./components/home-page";
import Shop from './components/pages/shop/shop'
import './css/App.scss'

const App = () => {
  return (
    <div className = 'App'>
      <Routes>
        <Route exact path='/' element = {<HomePage/>}></Route>
        <Route path='/shop' element = {<Shop/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
