
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "../../../public/MOVIES+HEADER.png";

const Header = props => {
    return (
        <div className="Header">
            <img className="img-header" src="../../../public/MOVIES+HEADER.png" />
            <img className="img-header" src="../../../public/MOVIES+HEADER.png" />
            <img className="img-header" src="../../../public/MOVIES+HEADER.png" />
            <img className="img-header" src="../../../public/MOVIES+HEADER.png" />

        </div>
    )
}

export default Header 