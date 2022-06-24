
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tiempo from './containers/Tiempo/Tiempo'
import Menu from './containers/Menu/Menu';
import { NavLink } from "react-router-dom"

import './App.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tiempo" element={<Tiempo/>}/>
        </Routes>
        <div className='center'>
        <Menu/>
        {/* <Home/> */}
        {/* <img className="img-app" src="../../../public/popcorn.png" /> */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/tiempo">El tiempo</NavLink>
        </div>
        <Footer/>
      </BrowserRouter>

 
    </div>
  )
}

export default App