import { create } from "zustand";

const ShowStore = create((set) => ({
  fetchData: () => {
    console.log("heyy");
  },
}));

export default ShowStore;
