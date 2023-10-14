import React, { useEffect } from "react";
import HomeStore from "../stores/HomeStore";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../index.css";
import Featured from "../components/Featured";
import Signup from "../components/Signup";
import Footer from "../components/Footer";
import "../style.scss";
import CoinList from "../components/CoinList";
const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home-search width">
        <h2>Search for a coin </h2>{" "}
        <input type="text" value={store.query} onChange={store.setQuery} />
      </div>
      <div className="home-cryptos width">
        <h2>Trending Coins</h2>{" "}
        <div className="home-crypto-list">
          {" "}
          {/*rendering the coins on screen BY MAPPING OVER THE ARRAY*/}
          {store.fetchedCoins.map((coin) => {
            return <CoinList key={coin.id} coin={coin} />;
          })}{" "}
        </div>
      </div>

      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </div>
  );
};

export default Home;
