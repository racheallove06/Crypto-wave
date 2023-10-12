import { create } from "zustand";
import axios from "axios";
const listStore = create((set) => ({
  //state for handling the data
  graphData: [],
  fetchData: async (coin) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=121`
    );

    const graphData = res.data.prices.map((price) => {
      //deconstructuring the data
      const [timestamp, cost] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us");
      return {
        Date: date,
        Price: cost,
      };
    });
    set({ graphData });
  },
}));

export default listStore;
