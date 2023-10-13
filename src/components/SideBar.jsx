import React, { useState } from "react";
import { FcCurrencyExchange } from "react-icons/fc";
import { FaBars } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import logo from "./cryptocurrency.png";
import "../index.css";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { Avatar } from "antd";
const SideBar = ({ children }) => {
  const menuItem = [
    {
      path: "/Cryptos",
      name: "Cryptos",
      icon: <FcCurrencyExchange />,
    },
    {
      path: "/Exchanges",
      name: "Exchanges",
      icon: <FcCurrencyExchange />,
    },

    {
      path: "/Trending",
      name: "Trending",
      icon: <FcCurrencyExchange />,
    },
    {
      path: "/",
      name: "Home",
      icon: <FcCurrencyExchange />,
    },
  ];
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          {" "}
          <h1 className="logo">
            {" "}
            <Avatar src={logo} size="large" />
          </h1>{" "}
          <div className="bars">
            {" "}
            <FaRegTimesCircle />{" "}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon"> {item.icon} </div>{" "}
            <div className="link-text">{item.name} </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
