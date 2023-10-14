import React, { useEffect } from "react";
import HomeStore from "../stores/HomeStore";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../index.css";
import Featured from "../components/Featured";

const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
    </div>
  );
};

export default Home;
