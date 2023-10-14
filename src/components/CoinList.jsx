import React from "react";
import { Link } from "react-router-dom";
const CoinList = ({ coin }) => {
  console.log(coin);
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>
        <span className="home-crypto-image">
          {" "}
          <img src={coin.image} alt="" />
        </span>
        <span className="home-crypto-name"> {coin.name}</span>

        {coin.price && (
          <span className="home-crypto-prices">
            {" "}
            <span className="home-btc">
              {" "}
              <img src={coin.image} /> {coin.price} BTC
            </span>
            <span className="home-usd">{coin.priceUsd} USD</span>
          </span>
        )}
      </Link>
    </div>
  );
};

export default CoinList;
