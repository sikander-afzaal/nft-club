import React, { useState } from "react";
import "./Hero.css";
import img from "../../Assets/hero-img (1).png";
function Hero({ value }) {
  const [count, setCount] = useState(0);
  return (
    <div id="hero" className="hero">
      <div className="hero-left">
        <div className="heading-div">
          <h1 className="big teko">WELCOME</h1>
          <h1 className="small teko">Welcome to the NFT Club</h1>
        </div>
        <div className="counter">
          <div
            className="c_icon"
            onClick={() => setCount(count > 0 ? count - 1 : count)}
          >
            -
          </div>
          <div className="val">
            <input type="text" value={count} />
          </div>
          <div
            className="c_icon"
            onClick={() => setCount(count >= 0 ? count + 1 : count)}
          >
            +
          </div>
        </div>

        <div className="btn-div">
          <button className="hero-btn openSea">Connect Wallet</button>
          <button className="hero-btn discord">Mint</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={value === "" ? img : value} alt="..." />
      </div>
    </div>
  );
}

export default Hero;
