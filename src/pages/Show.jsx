import React, { useEffect } from "react";
import Showstore from "../store/Showstore";
const Show = () => {
  const store = Showstore();

  useEffect(() => {
    store.fetchData();
  }, []);
  return <div>Show</div>;
};

export default Show;
