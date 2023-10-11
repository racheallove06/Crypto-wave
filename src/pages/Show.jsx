import React, { useEffect } from "react";
import ShowStore from "../stores/ShowStore";

import { useParams } from "react-router-dom";
const Show = () => {
  const store = ShowStore();
  ///get id of the coin using react router
  const params = useParams();
  useEffect(() => {
    console.log(params);
    store.fetchData();
  }, [params, store]);
  return <div>Show</div>;
};

export default Show;
