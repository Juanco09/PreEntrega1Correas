import React from 'react'
import "./NavBar.css";
import CartWidget from "./CartWidget.js";
import logo from "../../assets/Logo-1.jpg";
import { Link } from 'react-router-dom'

export const NavBar = () => {
    
    return (
        <header className="header">
            <div className="header_container">
                <Link to={"/"}><img className="header_logo" src={logo} /></Link>    
               
                <nav className="header_nav">
                        <li><Link to={"/"} className="NavBar_link">Inicio</Link></li>
                        <li><Link to={"/category/tintos"} className="NavBar_link">Tintos</Link></li>
                        <li><Link to={"/category/blancos"} className="NavBar_link">Blancos</Link></li>
                        <li><Link to={"/category/rosados"} className="NavBar_link">Rosados</Link></li>
                </nav>
                <CartWidget />
            </div>
            
        </header>
    )
};
