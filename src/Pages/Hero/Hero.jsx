import React from "react";
import "./Hero.css";
import CountDownTimer from "../../Components/Timer/CountDownTimer.js";
import img from "../../Assets/hero-img (1).png";
function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="hero-left">
        <div className="heading-div">
          <h1 className="big teko">WELCOME</h1>
          <h1 className="small teko">Welcome to the NFT Club</h1>
        </div>
        <p className="desc-hero">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          beatae! Nisi quasi at nesciunt, neque ipsam, possimus accusamus
          nostrum, voluptates ullam esse quisquam hic veniam!Lorem23 Lorem
        </p>
        <CountDownTimer />
        <div className="btn-div">
          <button className="hero-btn openSea">Buy on OpenSea</button>
          <button className="hero-btn discord">Join Us</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Hero;
