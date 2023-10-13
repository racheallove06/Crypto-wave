import React from "react";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Exchanges from "./pages/Exchanges";
import Cryptos from "./pages/Cryptos";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Exchanges" element={<Exchanges />} />
        <Route path="/Cryptos" element={<Cryptos />} />
      </Routes>
    </div>
  );
};

export default App;
