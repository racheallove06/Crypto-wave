import { create } from "zustand";
import axios from "axios";

export const Showstore = create((set) => ({
  //fetching data when one loads the show page
  fetchData: async (id) => {
    console.log(id);
    const prices = await axios.get(
      ` https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
    );
  },
}));
