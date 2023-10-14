import { create } from "zustand";
import axios from "axios";
import { debounce } from "../handlingEvent/Debounce";

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

    const displayData = dataRes.data.name;
    const displayImage = dataRes.data.image.large;
    const displayDes = dataRes.data.description;
    console.log(displayDes);
    set({ graphData });
    set({ displayData });
    set({ displayImage });
    set({ displayDes });
  }, 500),
}));

export default listStore;
