
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home/Home'
import Header from './components/Header/Header'
import Tiempo from './containers/Tiempo/Tiempo'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './App.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        
        <Header/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/tiempo" element={<Tiempo/>}/>


        </Routes>
        

      </BrowserRouter>

 
    </div>
  )
}

export default App