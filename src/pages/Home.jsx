import React, { useEffect } from "react";
import HomeStore from "../store/HomeStore";
import { Link } from "react-router-dom";
const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div>
      <input type="text" />
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