import "./App.css";
import Header from "./conponents/Header";
import Features from "./conponents/Features";
import Pricing from "./conponents/Pricing";
import AboutUs from "./conponents/AboutUs";
import Newsletter from "./conponents/Newsletter/Newsletter";
import Hero from "./conponents/Hero";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <AboutUs />
      <Newsletter />
    </div>
  );
}

export default App;
