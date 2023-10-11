import { create } from "zustand";

const Showstore = create((set) => ({
  fetchData: () => {
    console.log("heyy");
  },
}));

export default Showstore;
