import { create } from "zustand";

const showStore = create((set) => ({
  fetchData: () => {
    console.log("heyy");
  },
}));

export default showStore;
