import React from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import head from "../../Assets/headings/collection.png";
import "@splidejs/splide/dist/css/splide.min.css";
import { sliderDataA } from "./Data/SliderDataA.js";
import { sliderDataB } from "./Data/SliderDataB.js";

function Slider({ imageSelector }) {
  return (
    <div className="swiper">
      <img src={head} alt="" className="heading" />
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
          drag: false,
          pagination: false,
          interval: "0",
          speed: "3000",
          perMove: 1,
          breakpoints: {
            1483: {
              perPage: 5,
            },
            903: {
              perPage: 3,
            },
            500: {
              perPage: 2,
            },
          },
        }}
      >
        {sliderDataA.map((d, i) => {
          return (
            <SplideSlide key={i}>
              <img
                className="slider-img"
                onClick={(e) => imageSelector(e)}
                src={d.img}
                alt="..."
              />
            </SplideSlide>
          );
        })}
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
          drag: false,
          interval: "0",
          speed: "3000",
          perMove: 1,
          direction: "rtl",
          breakpoints: {
            1483: {
              perPage: 5,
            },
            903: {
              perPage: 3,
            },
            500: {
              perPage: 2,
            },
          },
        }}
      >
        {sliderDataB.map((d, i) => {
          return (
            <SplideSlide key={i}>
              <img
                className="slider-img"
                onClick={(e) => imageSelector(e)}
                src={d.img}
                alt="..."
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Slider;
