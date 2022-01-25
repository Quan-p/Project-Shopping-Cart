import { BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import HomePage from "./components/home-page";
import './css/App.scss'

const App = () => {
  return (
    <div className = 'App'>
      <Routes>
        <Route exact path='/' element = {<HomePage/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
