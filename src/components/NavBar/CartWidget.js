import React from "react";
import "./NavBar.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const CartWidget = () => {
    return (
        <div className="NavBar">
            <ShoppingBasketIcon />
            <h2>8</h2>
        </div>
    )
}
export default CartWidget;