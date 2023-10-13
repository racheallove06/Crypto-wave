import React from "react";
import { TbMenu2 } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-content">
        <ul className="nav">
          <li>Crypto</li>
          <li>
            {" "}
            <TbMenu2 />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
