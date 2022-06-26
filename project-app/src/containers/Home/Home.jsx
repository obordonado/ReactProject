import React from "react";
import { NavLink } from "react-router-dom"

import './Home.css'

const Home = props => {
    return (
        <div className="Home">



<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="image" src="../../../public/alien.jpg" class="d-block w-100" alt="matrix"></img>
    </div>
    <div className="carousel-item">
      <img className="image" src="../../../public/batman.jpg" class="d-block w-100" alt="dune"></img>
    </div>
    <div className="carousel-item">
      <img className="image" src="../../../public/jaws.jpg" class="d-block w-100" alt="dune"></img>
    </div>
    <div className="carousel-item">
      <img className="image" src="../../../public/bttf.jpg" class="d-block w-100" alt="avp"></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



















        </div>
    )
}

export default Home 