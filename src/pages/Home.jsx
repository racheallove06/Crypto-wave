import React, { useEffect } from "react";
import HomeStore from "../stores/HomeStore";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Navbar from "../components/Navbar";
const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
      <input type="text" value={store.query} onChange={store.setQuery} />
      {/*rendering the coins on screen BY MAPPING OVER THE ARRAY*/}
      {store.fetchedCoins.map((coin) => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
