import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([false, false, false, false]);

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
              這個項目在做什麼？
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
              THE NEW PROJECT 是在 Solana 上發行的 NFT 項目，NFT
              持有者依照屬性，能獲得公司不同比例的年度分紅。
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={1}
            onClick={clickHandler}
            className={`faq-btn ${open[1] ? "border-radius" : ""}`}
          >
            <p className={`${open[1] ? "active-btn" : ""}`}>還有其他賦能嗎？</p>
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
              NFT 設計是由「怪胎秀紋身俱樂部」主理人繪製，所有持有者能憑 NFT
              到店裡兌換該圖像的刺青（限本人使用）
            </p>
          </div>
        </div>
        <div className="faq-q-div">
          <div
            data-num={2}
            onClick={clickHandler}
            className={`faq-btn ${open[2] ? "border-radius" : ""}`}
          >
            <p className={`${open[2] ? "active-btn" : ""}`}>要如何購買?</p>
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
              NFT 已全數售完，請期待下個項目，任何最新消息會在官方 Discord
              發佈。
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
              我也想發行 NFT 要怎麼做？
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
              歡迎前往我們公司官網{" "}
              <a
                style={{ color: "white" }}
                target={"blank"}
                href="https://neo.cafe/"
              >
                www.neo.cafe
              </a>{" "}
              查看服務項目。
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
