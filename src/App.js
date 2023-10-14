import React from "react";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Exchanges from "./pages/Exchanges";
import PriceTracking from "./pages/PriceTracking";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      {" "}
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<List />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Exchanges" element={<Exchanges />} />
          <Route path="/Cryptos" element={<PriceTracking />} />
        </Routes>
      </SideBar>
    </div>
  );
};

export default App;
