import React from "react";
import CoffeeStyle from "../images/CoffeeStyle.svg";
import Cart from "../images/Cart.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={CoffeeStyle} className="coffeStyle" />
      <div>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">OUR PRODUCTS</a>
          </li>
          <li>
            <a href="#">BLOGS</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">STYLE GUIDE</a>
          </li>
        </ul>
      </div>
      <img src={Cart} className="cart" />
    </div>
  );
}

export default Navbar;
