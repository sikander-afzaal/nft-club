import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([false, false, false, false, false, false]);

  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div id="faq" className="faq">
      <div className="heading-div">
        <h1 className="big teko">FAQS</h1>
        <h1 className="small teko">FAQ</h1>
      </div>
      <p className="desc-faq">Some of your Frequently Asked Questions</p>
      <div className="faq-div">
        <div className="faq-q-div">
          <div
            data-num={0}
            onClick={clickHandler}
            className={`faq-btn ${open[0] ? "border-radius" : ""}`}
          >
            <p className={`${open[0] ? "active-btn" : ""}`}>
              What does NFT Collection Comprise of?
            </p>
            {open[0] ? (
              <FontAwesomeIcon
                className={`${open[0] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[0] ? "active" : ""}`}>
            <p className="answer">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={1}
            onClick={clickHandler}
            className={`faq-btn ${open[1] ? "border-radius" : ""}`}
          >
            <p className={`${open[1] ? "active-btn" : ""}`}>
              What does NFT Collection Comprise of?
            </p>
            {open[1] ? (
              <FontAwesomeIcon
                className={`${open[1] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[1] ? "active" : ""}`}>
            <p className="answer">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={2}
            onClick={clickHandler}
            className={`faq-btn ${open[2] ? "border-radius" : ""}`}
          >
            <p className={`${open[2] ? "active-btn" : ""}`}>
              What does NFT Collection Comprise of?
            </p>
            {open[2] ? (
              <FontAwesomeIcon
                className={`${open[2] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[2] ? "active" : ""}`}>
            <p className="answer">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={3}
            onClick={clickHandler}
            className={`faq-btn ${open[3] ? "border-radius" : ""}`}
          >
            <p className={`${open[3] ? "active-btn" : ""}`}>
              What does NFT Collection Comprise of?
            </p>
            {open[3] ? (
              <FontAwesomeIcon
                className={`${open[3] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[3] ? "active" : ""}`}>
            <p className="answer">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={4}
            onClick={clickHandler}
            className={`faq-btn ${open[4] ? "border-radius" : ""}`}
          >
            <p className={`${open[4] ? "active-btn" : ""}`}>
              What does NFT Collection Comprise of?
            </p>
            {open[4] ? (
              <FontAwesomeIcon
                className={`${open[4] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[4] ? "active" : ""}`}>
            <p className="answer">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={5}
            onClick={clickHandler}
            className={`faq-btn ${open[5] ? "border-radius" : ""}`}
          >
            <p className={`${open[5] ? "active-btn" : ""}`}>
              What does NFT Collection Comprise of?
            </p>
            {open[5] ? (
              <FontAwesomeIcon
                className={`${open[5] ? "active-btn" : ""}`}
                icon={faMinusSquare}
              />
            ) : (
              <FontAwesomeIcon icon={faPlusSquare} />
            )}
          </div>
          <div className={`faq-answer ${open[5] ? "active" : ""}`}>
            <p className="answer">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </div>
        </div>
        {
          // when you add a new faq make sure to increment the value in the brackets
        }
      </div>
    </div>
  );
}

export default Faq;
