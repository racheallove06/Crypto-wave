import React from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import List from "./pages/List";

import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <SideBar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          {" "}
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:id" element={<List />} />
          </Routes>{" "}
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Copyright © 2021
          <Link to="/">Cryptoverse Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/List">List</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
