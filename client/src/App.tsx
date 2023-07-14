import { useState } from "react";
import "./App.css";
import Header from "./conponents/Header";
import Features from "./conponents/Features";
import Pricing from "./conponents/Pricing";
import AboutUs from "./conponents/AboutUs";
import Contact from "./conponents/Contact";
import Hero from "./conponents/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <AboutUs />
      <Contact />
    </div>
  );
}

export default App;
