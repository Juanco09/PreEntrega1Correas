import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget.js";
import logo from "../../assets/Logo-1.jpg";

const NavBar = () => {
    return (
        <div className="NavBar">
            <img className="logo" src={logo} />
            <h1>Luis Segundo Correas</h1>
            <nav>
                <ul>
                    <li><a href="">Tintos</a></li>
                    <li><a href="">Blancos</a></li>
                    <li><a href="">Rosados</a></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
};

export default NavBar;