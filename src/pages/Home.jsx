import React, { useEffect } from "react";
import HomeStore from "../stores/HomeStore";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Navbar from "../components/Navbar";
const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <p>
        {" "}
        Never giving up is a testament to the resilience and determination that
        resides within each of us. It's a philosophy that acknowledges life's
        challenges, setbacks, and obstacles but refuses to be defeated by them.
        When we embrace the idea of never giving up, we open the door to growth,
        success, and personal transformation. It means pushing through the most
        challenging moments, even when the path seems insurmountable, and
        holding onto hope in the face of adversity. It's a reminder that the
        journey to our goals may be fraught with difficulties, but it's in
        persevering through those hardships that we discover our true strength
        and potential. Whether in pursuing our dreams, overcoming hurdles, or
        weathering life's storms, never giving up is a testament to the human
        spirit's indomitable will to thrive and flourish, no matter the odds.
      </p>

      <div>
        {" "}
        <input type="text" value={store.query} onChange={store.setQuery} />
        {/*rendering the coins on screen BY MAPPING OVER THE ARRAY*/}
        {store.fetchedCoins.map((coin) => {
          return (
            <div key={coin.id}>
              <Link to={`/${coin.id}`}>{coin.name}</Link>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Home;
