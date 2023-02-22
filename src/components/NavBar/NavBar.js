import React from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget.js";

const NavBar = () => {
    return (
        <div className="NavBar">
            <h1>Luis Segundo Correas</h1>
            <nav>
                <ul>
                    <li><a href="">Malbec</a></li>
                    <li><a href="">Chardonnay</a></li>
                    <li><a href="">Torrontes</a></li>
                    <li><a href="">Cabernet Sauvignon</a></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    )
};

export default NavBar;