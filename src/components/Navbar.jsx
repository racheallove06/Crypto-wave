import React from "react";
import { FaBars } from "react-icons/fa6";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        {" "}
        <h1>Logo</h1>{" "}
        <ul className="nave-menu">
          {" "}
          <li>
            {" "}
            <FaBars />
          </li>
        </ul>{" "}
      </div>
    </div>
  );
};

export default Navbar;
