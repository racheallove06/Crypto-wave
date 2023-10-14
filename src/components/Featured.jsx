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
        {/* Left Section */}
        <div className="left">
          <h2>Explore bitcoin and currency</h2>
          <p>See all currencies</p>
          <button className="btn">Learn more</button>
        </div>

        {/* Right Section - First Card */}
        <div className="right">
          {/* Card 1 */}
          <div className="card">
            <div className="top">
              <img src={data[0].image} alt="" />
            </div>
            <div>
              <h2>{data[0].name}</h2>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>
            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                {data[0].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <AiOutlineArrowDown />{" "}
                {data[0].price_change_percentage_24h.toFixed(3)}%{" "}
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="" />
            </div>
            <div>
              <h2>{data[2].name}</h2>
              <p>${data[2].current_price.toLocaleString()}</p>
            </div>
            {data[2].price_change_percentage_24h < 0 ? (
              <span className="red">
                {data[2].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <AiOutlineArrowDown />{" "}
                {data[2].price_change_percentage_24h.toFixed(3)}%{" "}
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[3].image} alt="" />
            </div>
            <div>
              <h2>{data[3].name}</h2>
              <p>${data[3].current_price.toLocaleString()}</p>
            </div>
            {data[3].price_change_percentage_24h < 0 ? (
              <span className="red">
                {data[3].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <AiOutlineArrowDown />{" "}
                {data[3].price_change_percentage_24h.toFixed(3)}%{" "}
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[4].image} alt="" />
            </div>
            <div>
              <h2>{data[4].name}</h2>
              <p>${data[4].current_price.toLocaleString()}</p>
            </div>
            {data[4].price_change_percentage_24h < 0 ? (
              <span className="red">
                {data[4].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <AiOutlineArrowDown />{" "}
                {data[4].price_change_percentage_24h.toFixed(3)}%{" "}
              </span>
            )}
          </div>

          <div className="card">
            <div className="top">
              <img src={data[5].image} alt="" />
            </div>
            <div>
              <h2>{data[5].name}</h2>
              <p>${data[5].current_price.toLocaleString()}</p>
            </div>
            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                {data[5].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <AiOutlineArrowDown />{" "}
                {data[5].price_change_percentage_24h.toFixed(3)}%{" "}
              </span>
            )}
          </div>
        </div>

        {/* Add more card sections here with similar structure */}
      </div>
    </div>
  );
};

export default Featured;
