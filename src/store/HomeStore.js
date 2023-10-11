import { create } from "zustand";
import axios from "axios";
const HomeStore = create((set) => ({
  //state to store the coins
  fetchedCoins: [],

  fetchCoins: async () => {
    const coins = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    //craeting an object with the array that i want

    const fetchedCoins = coins.data.coins.map((coin) => {
      return {
        id: coin.item.coin_id,
        image: coin.item.large,
        name: coin.item.name,
        price: coin.item.price_btc,
      };
    });

    //setting the array i got on state
    set({ fetchedCoins: fetchedCoins });
  },
}));

export default HomeStore;
