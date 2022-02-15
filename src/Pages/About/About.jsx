import React from "react";
import "./About.css";
import head from "../../Assets/headings/statement.png";
function About() {
  return (
    <div id="about" className="about">
      <img src={head} alt="" className="heading" />
      <p className="about-desc">
        NFT，非同質化代幣，在近一年快速的擄獲一線品牌、藝術家、媒體、明星、網紅，成為他們與受眾建立關係，進而變現，甚至是商業模式轉型的關鍵工具。
        然而我們發現:
      </p>
      <p className="about-desc">
        目前相關技術與資訊在台灣甚至亞洲的大眾普及度遠低於歐美，對於非該產業的業者來說加入NFT行列的門檻較高，如果沒有一定資源或人脈，盲目跟風投入後很難達到預期的成效。
      </p>
      <p className="about-desc">
        而我們希望讓NFT普及化，任何人都能過NFT結合自身產品或商業模式，進而提升品牌價值。
      </p>
    </div>
  );
}

export default About;
