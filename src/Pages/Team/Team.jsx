import React from "react";
import "./Team.css";
import head from "../../Assets/headings/team.png";
import man from "../../Assets/slider/slider (10).jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
function Team() {
  return (
    <div id="team" className="team">
      {/* <div className="heading-div">
        <h1 className="big teko">TEAM</h1>
        <h1 className="small teko">TEAM</h1>
      </div> */}
      <img src={head} alt="" className="heading" />
      <p className="desc-faq team-desc">
        Our commitment as a team to this project is one that is beyond a
        successful token sale, but towards building a product that our community
        loves, enjoys and also benefits from.
      </p>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          perPage: 4,
          pauseOnHover: true,
          resetProgress: false,
          height: "auto",
          loop: true,
          width: "90%",
          gap: "2rem",
          arrows: false,
          pagination: false,
          drag: false,
          interval: "0",
          speed: "6000",
          perMove: 1,
          breakpoints: {
            1000: {
              perPage: 3,
            },
            600: {
              perPage: 2,
            },
            400: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="box-team">
            <img className="team-img" src={man} alt="" />
            <div className="text-div-team">
              <h3>@Dwane_John</h3>
              <p>the leader</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Team;
