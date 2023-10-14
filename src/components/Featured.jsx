import React, { useState, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import axios from "axios";
const Featured = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        {/*left*/}
        <div className="left">
          {" "}
          <h2>Explore bitcoin and curreny</h2>
          <p>See all currencies</p>
          <button className="btn">leran more</button>
        </div>
        {/*right*/}
        <div className="right">
          <div className="top">
            <img src={data[0].image} alt="" />
          </div>
          <div>
            <h2>{data[0].name}</h2>
            <p>${data[0].current_price.toLocaleString()}</p>
          </div>
          {data[0].price_change_percentage_24h < 0 ? (
            <span className="red"></span>
          ) : (
            <span className="green">
              <AiOutlineArrowDown /> {data[0].price_change_percentage_24h}%{" "}
            </span>
          )}

          <span>
            {" "}
            <AiOutlineArrowDown />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Featured;
