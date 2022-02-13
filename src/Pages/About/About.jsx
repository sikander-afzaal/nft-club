import React from "react";
import "./About.css";
import head from "../../Assets/headings/statement.png";
function About() {
  return (
    <div id="about" className="about">
      <img src={head} alt="" className="heading" />
      <p className="about-desc">
        In our mission to help save the endangered wildlife, we have chosen the
        three most endangered species in the world to become the faces of
        BabyBoom Club.
      </p>
      <p className="about-desc">
        BabyBoom Club is a Baby NFT that’s soon to be performing on the Ethereum
        blockchain. They are on a mission to educate & create awareness to the
        eneral public about endangered BabyBoom Club around the world.
      </p>
      <p className="about-desc">
        If you love good old rock music like we do and can’t help yourself but
        to rage out when your favorite songs comes on, heck you are in for a
        treat mates. Look no further as you have found that one project which
        shares the passion for music like you do.
      </p>
    </div>
  );
}

export default About;
