import React from "react";
import listStore from "../stores/listStore";
import "../style.scss";

import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../components/Navbar";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const List = () => {
  const store = listStore();
  const params = useParams();
  ///get id of the coin using react router
  React.useEffect(() => {
    store.fetchData(params.id);
  }, [store, params]);
  return (
    <div>
      <Navbar />
      <header className="list-header">
        <img src={store.displayImage} /> <h2>{store.displayData}</h2>
      </header>
      <div className="list-graph width">
        {" "}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={store.graphData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />7
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>{" "}
      </div>
      <div className="data width">
        <h2> Details</h2>
        <div>
          <h4>Community Score</h4>
          <span> {store.communityscore}</span>
        </div>{" "}
        <div>
          <h4>Liquidity Score</h4>
          <span> {store.liquidityscore}</span>
        </div>{" "}
        <div>
          <h4>Market Cup Rank</h4>
          <span> {store.marketrank}</span>
        </div>{" "}
        <div>
          <h4>WatchList Users</h4>
          <span> {store.watchlist}</span>
        </div>{" "}
        <div>
          <h4>Market Change</h4>
          <span> {store.marketchange}</span>
        </div>{" "}
        <div>
          <h4>Price Change in 24hrs</h4>
          <span> {store.pricechange}</span>
        </div>
        <div>
          <h4>Market Change in 7 days </h4>
          <span> {store.pricechangeweek}</span>
        </div>
        <div>
          <h4>Market Change in 14 days </h4>
          <span> {store.price14}</span>
        </div>
        <div>
          <h4>Market Change in 1 year</h4>
          <span> {store.pricechangeyear}</span>
        </div>
        <div>
          <h4>Public Score </h4>
          <span> {store.publicscore}</span>
        </div>
        <p>{store.displayDes.en}</p>
      </div>
    </div>
  );
};

export default List;
