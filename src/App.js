import "./App.css";
import Navbar from "./Layout/Navbar/Navbar.js";
import Hero from "./Pages/Hero/Hero.jsx";
import About from "./Pages/About/About.jsx";
import Slider from "./Pages/Slider/Slider.jsx";
import Faq from "./Pages/Faq/Faq.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Faq />
    </div>
  );
}

export default App;
