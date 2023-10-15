import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";
import logo from "../assets/Crypto.png";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="" width="84" />
        <div className="hamberger" onClick={handleClick}>
          {click ? (
            <FaTimes size={34} style={{ color: "#40a798" }} />
          ) : (
            <FaBars size={34} style={{ color: "#40a798" }} />
          )}
        </div>
        <ul className={click ? "nav-menu show" : "nav-menu"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Trending">Trending</a>
          </li>
          <li>
            <a href="/Cryptos">Cryptos</a>
          </li>
          <li>
            <a href="/Exchanges">Exchanges</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
