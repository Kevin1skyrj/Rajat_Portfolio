import React from "react";
import Navbar from "../../components/Header/Navbar";

import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import ScroolToTop from "../../components/ScroolTop/ScroolToTop";
import Main from "../../components/Main/Main";
import ThreeBackground from "../../components/ParticlesBg/ThreeBackground";

const Homepage = () => {
  return (
    <div className="relative z-0">
      <ThreeBackground />

      <Navbar />

      {/* <ParticleBackground /> */}

      <Content />

      <Main />

      <ScroolToTop />

      <Footer />
    </div>
  );
};

export default Homepage;
