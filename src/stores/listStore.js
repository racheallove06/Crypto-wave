import { create } from "zustand";
import axios from "axios";
import { debounce } from "../handlingEvent/Debounce";

const extractDataFromResponse = (dataRes) => {
  const displayData = dataRes.data.name;
  const displayImage = dataRes.data.image.large;
  const displayDes = dataRes.data.description;
  const communityscore = dataRes.data.community_score;
  const liquidityscore = dataRes.data.liquidity_score;
  const marketrank = dataRes.data.market_cap_rank;
  const watchlist = dataRes.data.watchlist_portfolio_users;

  const marketchange =
    dataRes.data.market_data.market_cap_change_percentage_24h;
  const pricechange = dataRes.data.market_data.price_change_24h;
  const pricechangeyear = dataRes.data.market_data.price_change_percentage_1y;
  const pricechangeweek = dataRes.data.market_data.price_change_percentage_7d;
  const price14 = dataRes.data.market_data.price_change_percentage_14d;
  const publicscore = dataRes.data.public_interest_score;
  return {
    displayData,
    displayImage,
    displayDes,
    communityscore,
    liquidityscore,
    marketrank,
    watchlist,
    marketchange,
    pricechange,
    pricechangeyear,
    pricechangeweek,
    price14,
    publicscore,
  };
};

const listStore = create((set) => ({
  //state for handling the data
  graphData: [],
  displayData: [],
  displayImage: [],
  displayDes: [],

  fetchData: debounce(async (id) => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=14`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
      ),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      //deconstructuring the data
      const [timestamp, cost] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us");
      return {
        Date: date,
        Price: cost,
      };
    });

    const extractedData = extractDataFromResponse(dataRes);
    //console.log(dataRes);
    set({ graphData, ...extractedData });
  }, 500),
}));

export default listStore;
