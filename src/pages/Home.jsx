import React, { useEffect } from "react";
import HomeStore from "../stores/HomeStore";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../index.css";

const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
