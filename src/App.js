import React, { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar/Navbar.js";
import Hero from "./Pages/Hero/Hero.jsx";
import About from "./Pages/About/About.jsx";
import Slider from "./Pages/Slider/Slider.jsx";
import Faq from "./Pages/Faq/Faq.jsx";
import Roadmap from "./Pages/Roadmap/Roadmap.jsx";
import Team from "./Pages/Team/Team.jsx";
function App() {
  const [value, setValue] = useState("");
  const imageSelector = (e) => {
    setValue(e.target.src);
  };
  return (
    <div className="App">
      <Navbar />
      <Hero value={value} />
      <Slider imageSelector={imageSelector} />
      <About />
      <Roadmap />
      <Team />
      <Faq />
    </div>
  );
}

export default App;
