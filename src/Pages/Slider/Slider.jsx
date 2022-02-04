import React from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// images
import img1 from "../../Assets/slider/slider (1).jpg";
import img2 from "../../Assets/slider/slider (2).jpg";
import img3 from "../../Assets/slider/slider (3).jpg";
import img4 from "../../Assets/slider/slider (4).jpg";
import img5 from "../../Assets/slider/slider (5).jpg";
import img6 from "../../Assets/slider/slider (6).jpg";
import img7 from "../../Assets/slider/slider (7).jpg";
import img8 from "../../Assets/slider/slider (8).jpg";
import img9 from "../../Assets/slider/slider (9).jpg";
import img10 from "../../Assets/slider/slider (10).jpg";
import img11 from "../../Assets/slider/slider (11).jpg";
import img12 from "../../Assets/slider/slider (12).jpg";
import img13 from "../../Assets/slider/slider (13).jpg";
import img14 from "../../Assets/slider/slider (14).jpg";
import img15 from "../../Assets/slider/slider (15).jpg";
import img16 from "../../Assets/slider/slider (16).jpg";
import img17 from "../../Assets/slider/slider (17).jpg";
function Slider() {
  return (
    <div className="swiper">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 7,
          pauseOnHover: false,
          resetProgress: false,
          height: "auto",
          loop: true,
          width: "80%",
          gap: "5rem",
          arrows: false,
          pagination: false,
          drag: true,
          interval: "0",
          speed: "4000",
          perMove: 4,
          breakpoints: {
            1483: {
              perPage: 5,
            },
            903: {
              perPage: 3,
            },
            470: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <img className="slider-img" src={img1} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img2} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img3} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img4} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img6} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img7} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img8} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img9} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img10} alt="" />
        </SplideSlide>
      </Splide>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 7,
          pauseOnHover: false,
          resetProgress: false,
          height: "auto",
          loop: true,
          width: "80%",
          gap: "5rem",
          arrows: false,
          pagination: false,
          drag: true,
          interval: "0",
          speed: "4000",
          perMove: 4,
          direction: "rtl",
          breakpoints: {
            1483: {
              perPage: 5,
            },
            903: {
              perPage: 3,
            },
            470: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <img className="slider-img" src={img11} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img12} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img13} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img14} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img15} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img16} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="slider-img" src={img17} alt="" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
