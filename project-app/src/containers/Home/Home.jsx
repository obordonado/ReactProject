import React from "react";
import { NavLink } from "react-router-dom"

import './Home.css'

const Home = props => {
    return (
        <div className="Home">



<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="image carousel-item active">
      <img src="../public/matrix.jpg" class="d-block w-100" alt="..."></img>
    </div>
    <div className="image carousel-item">
      <img src="../public/dune.jpeg" class="d-block w-100" alt="..."></img>
    </div>
    <div className="image carousel-item">
      <img src="../public/avp.jpg" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




















        </div>
    )
}

export default Home 