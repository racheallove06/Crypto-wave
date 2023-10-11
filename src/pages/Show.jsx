import React, { useEffect } from "react";
import showStore from "../stores/Showstore";
import { useParams } from "react-router-dom";
const Show = () => {
  const store = showStore();
  ///get id of the coin using react router
  const params = useParams();
  useEffect(() => {
    console.log(params);
    store.fetchData();
  }, []);
  return <div>Show</div>;
};

export default Show;
