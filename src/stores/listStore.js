import { create } from "zustand";
import axios from "axios";
import { debounce } from "../handlingEvent/Debounce";

const listStore = create((set) => ({
  //state for handling the data
  graphData: [],
  displayData: [],
  displayImage: [],
  displaySymb: [],
  fetchData: debounce(async (coin) => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=121`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&market_data=true`
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

    const displayData = dataRes.data.name;
    const displayImage = dataRes.data.image.large;
    const displaySymb = dataRes.data.symbol;
    set({ graphData });
    set({ displayData });
    set({ displayImage });
    set({ displaySymb });
  }, 500),
}));

export default listStore;
