import React from "react";

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
      </div>
    </div>
  );
};

export default Hero;
