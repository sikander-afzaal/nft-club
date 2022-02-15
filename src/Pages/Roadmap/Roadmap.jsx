import React from "react";
import "./Roadmap.css";
import head from "../../Assets/headings/roadmap.png";
function Roadmap() {
  let milkRef = React.useRef();
  let bottle = React.useRef();
  let lineRef = React.useRef();

  let box = React.useRef();
  let box2 = React.useRef();
  let box3 = React.useRef();
  let box4 = React.useRef();
  let box5 = React.useRef();

  React.useEffect(() => {
    const handler = () => {
      const bottleTop = bottle.current.getBoundingClientRect().top;
      const boxTop = box.current.getBoundingClientRect().top;
      const box2Top = box2.current.getBoundingClientRect().top;
      const box3Top = box3.current.getBoundingClientRect().top;
      const box4Top = box4.current.getBoundingClientRect().top;
      const box5Top = box5.current.getBoundingClientRect().top;
      // dasdasd
      if (bottleTop > boxTop) {
        milkRef.current.style.height = "20px";
      } else {
        box.current.style.backgroundColor = "transparent";
        milkRef.current.style.height = "10px";
      }

      if (bottleTop > box2Top) {
        milkRef.current.style.height = "40px";
      }

      if (bottleTop > box3Top) {
        milkRef.current.style.height = "50px";
      }

      if (bottleTop > box4Top) {
        milkRef.current.style.height = "80px";
      }

      if (bottleTop > box5Top) {
        milkRef.current.style.height = "90px";
      }
    };
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div id="roadmap" className="roadmap-wrapper">
      <div className="container-wrapper">
        <div className="roadmap">
          <img src={head} alt="" className="heading" />
          <p className="desc-roadmap">
            Our commitment as a team to this project is one that is beyond a
            successful token sale, but towards building a product that our
            community loves, enjoys and also benefits from.
          </p>

          <div className="roadmap-content-wrapper">
            <div className="roadmap-content" ref={lineRef}>
              <div className="roadmap-box bot" ref={bottle}>
                <div className="bottle">
                  <div className="milk" ref={milkRef}></div>
                </div>
              </div>

              <div className="roadmap-box" ref={box}>
                <div className="roadmap-box-content left">
                  <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    2022 Q1 團隊招募
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    集結區塊鏈工程師、前端工程師、社群行銷人才，組成一站式NFT發行顧問團隊。
                  </p>
                </div>
              </div>
              <div className="roadmap-box" ref={box2}>
                <div className="roadmap-box-content right">
                  <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    2022 Q2 實驗行NFT技術開發
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    NFT碎片化、NFT外觀變化、3D角色進入元宇宙等，提供多變性的專案玩法。
                  </p>
                </div>
              </div>
              <div className="roadmap-box" ref={box3}>
                <div className="roadmap-box-content left">
                  <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    2022 Q3 結合NFT與電商系統
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    使用Shopify、Wordpress系統，增加NFT網站的開發效率，同時讓消費者透過信用卡、金融卡直接購買NFT。
                  </p>
                </div>
              </div>
              <div className="roadmap-box" ref={box4}>
                <div className="roadmap-box-content right">
                  <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    2022 Q4 推出NFT電商應用功能
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    NFT會員憑證、NFT分潤機制、NFT線下兌換等，探索更多相關實際應用場景。
                  </p>
                </div>
              </div>
              <div className="roadmap-box" ref={box5}>
                <div className="roadmap-box-content left">
                  <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    2023 Q1 開發NFT API
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    該API可串接各大電商系統，增加NFT電商功能運用的普及率
                  </p>
                </div>
              </div>
              {/* <div className="roadmap-box" ref={box6}>
                <div className="roadmap-box-content right">
                  <p className="fs-48px teko pink weight-7 lh-42px mb-10px">
                    100% - BREEDING
                  </p>
                  <p className="fs-18px dark-blue lh-26px weight-5">
                    To sell your NFTs on a marketplace, you’ll need to locate
                    them in your collection, click on them and find the “sell”
                    button.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
