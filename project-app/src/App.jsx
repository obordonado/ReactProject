
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home/Home'
import Header from './components/Header/Header'
import Tiempo from './containers/Tiempo/Tiempo'
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
        

      </BrowserRouter>

 
    </div>
  )
}

export default App