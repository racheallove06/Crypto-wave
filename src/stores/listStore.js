import { create } from "zustand";
import axios from "axios";
const listStore = create((set) => ({
  fetchData: async (coin) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
    );
    console.log(res.data);
  },
}));

export default listStore;
