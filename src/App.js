import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import FollowUs from "./components/FollowUs/FollowUs";
import Offers from "./components/Offers/Offers";


function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <OurServices />
      <Gallery />
      <Testimonials />
      <FollowUs />
      <Offers />
    </div>
  );
}

export default App;
