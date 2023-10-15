import React from "react";
import image from "../assets/image.jpeg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* left side */}
        <div className="left">
          <p>This is the Home page</p>
          <h1>Invest in Crypto</h1>
          <div className="input-container">
            <input type="email" placeholder="Enter Your Email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/*Right side */}
        <div className="right">
          <div className="img-container">
            <img src={image} alt="" width="300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
