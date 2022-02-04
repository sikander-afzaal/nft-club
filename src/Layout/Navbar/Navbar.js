import React from "react";
import Logo from "../../Components/Logo/Logo.js";
import "./Navbar.css";
import hamburger from "../../Assets/hamburger.png";
import crossIcon from "../../Assets/cross-icon.png";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", null);
    };
  });

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container-wrapper">
        <div className="navbar">
          <div className="navbar-left">
            <a href="#" style={{ width: "200px" }}>
              <Logo />
            </a>
          </div>

          <div className="hamburger" onClick={() => setShow(!show)}>
            <img src={hamburger} alt="" />
          </div>

          <div className={`navbar-right ${show ? "show" : ""}`}>
            <div className="nav-links">
              <img
                onClick={() => setShow(false)}
                className="cross-icon"
                src={crossIcon}
                alt=""
              />
              <ScrollLink
                to="home"
                className="nav-link pointer fs-16px dark-blue weight-4 montserrat"
                onClick={() => setShow(false)}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about"
                offset={80}
                className="nav-link pointer fs-16px dark-blue weight-4 montserrat"
                onClick={() => setShow(false)}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="roadmap"
                className="nav-link pointer fs-16px dark-blue weight-4 montserrat"
                onClick={() => setShow(false)}
              >
                Road Map
              </ScrollLink>
              <ScrollLink
                to="team"
                className="nav-link pointer fs-16px dark-blue weight-4 montserrat"
                onClick={() => setShow(false)}
                offset={-100}
              >
                Team
              </ScrollLink>
              <ScrollLink
                to="faq"
                offset={-100}
                className="nav-link pointer fs-16px dark-blue weight-4 montserrat"
                onClick={() => setShow(false)}
              >
                FAQ
              </ScrollLink>
            </div>
            <a
              href="#"
              className="nav-btn fs-24px teko weight-5 dark-blue pointer"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
