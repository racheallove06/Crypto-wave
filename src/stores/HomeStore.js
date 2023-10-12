import { create } from "zustand";
import axios from "axios";
import { debounce } from "../handlingEvent/Debounce";
const HomeStore = create((set) => ({
  //state to store the coins
  fetchedCoins: [],
  //another piece of state query which is = to the value typed to on the input
  query: "",
  //created another state to rebert back to the trending coins
  tending: [],
  //function to update the state
  setQuery: (e) => {
    set({ query: e.target.value });
    HomeStore.getState().searchCoins();
  },

  //function to get the coins entered in the input from the api

  searchCoins: debounce(async () => {
    const { query, trending } = HomeStore.getState();
    if (query.length > 2) {
      const coins = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      const fetchedCoins = coins.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
          marketCupRank: coin.market_cup_rank,
        };
      });
      ///set our fetched coinds
      set({ fetchedCoins: fetchedCoins });
    } else {
      set({ fetchedCoins: trending });
    }
  }, 500),

  ///created a function to only get the data i want from the query

  fetchCoins: async () => {
    const [coins, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      ),
    ]);

    ///getting the price
    const getBtc = btcRes.data.bitcoin.usd;

    //craeting an object with the array that i want
    const fetchedCoins = coins.data.coins.map((coin) => {
      return {
        id: coin.item.coin_id,
        image: coin.item.large,
        name: coin.item.name,
        price: coin.item.price_btc.toFixed(9),
        priceUsd: (coin.item.price_btc * getBtc).toFixed(9),
      };
    });
    console.log(fetchedCoins);

    //setting the array i got on state
    set({ fetchedCoins, trending: fetchedCoins });
  },
}));

export default HomeStore;
