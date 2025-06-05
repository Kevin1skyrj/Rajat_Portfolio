import React from "react";
import Navbar from "../../components/Header/Navbar";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import ScroolToTop from "../../components/ScroolTop/ScroolToTop";
import Main from "../../components/Main/Main";

const Homepage = () => {
  return (
    <div className="relative z-0">
      

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
