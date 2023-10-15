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
import classNames from "classnames";
const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-search width">
          <h2>Search for a coin </h2>{" "}
          <div
            className={classNames("home-search-input", {
              searching: store.searching,
            })}
          >
            {" "}
            <input type="text" value={store.query} onChange={store.setQuery} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 512 512"
            >
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
          </div>
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
      </div>
      <Featured />
    </div>
  );
};

export default Home;
