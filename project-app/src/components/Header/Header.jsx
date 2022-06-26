
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "../../../public/MOVIES+HEADER.png";

const Navbar = () => {
    return (

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"><img className="movies" src="../../../public/MOVIES+HEADER.png" alt="Movies" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            M e n u
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="navlink" to="/">Inicio</NavLink></li>
            <li><NavLink className="navlink" to="/tiempo">Login</NavLink></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><NavLink className="navlink" to="/">Tarjetas</NavLink></li>
            <li><NavLink className="navlink" to="/">Inicio</NavLink></li>
            <li><NavLink className="navlink" to="/">Inicio</NavLink></li>
            <li><NavLink className="navlink" to="/">Inicio</NavLink></li>

          </ul>
        </li>  
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    )

}





export default Navbar 