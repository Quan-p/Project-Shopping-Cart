import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home-page";
import Shop from './components/pages/shop/shop'
import SingleProduct from "./components/single-product/single-product";
import './css/App.scss'

const App = () => {
  return (
    <div className = 'App'>
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route path='/shop' component = {Shop} />
        <Route path='/product/:id' component= {SingleProduct} />
      </Switch>
    </div>
  )
}

export default App;
