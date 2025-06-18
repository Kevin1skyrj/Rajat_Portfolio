import React from "react";
import { Link } from "react-scroll";
import ParticleHeaderBg from "../ParticlesBg/ParticleHeader/ParticleHeaderBg";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};

const Content = () => (
  <div
    id="home"
    className="relative w-screen h-screen bg-transparent overflow-hidden"
  >
  { /* Particle Background on the right side */}
  <div className=" absolute mt-20 top-1/4 right-60 -translate-y-1/2 z-0 w-[300px] h-[300px] d:w-[180px] md:h-[180px]">
    <ParticleHeaderBg />
  </div>

    <section
      id="home"
      className="flex justify-center items-center h-full relative z-10"
    >
      <div className="text-center z-0 mt-40 px-4">
        <motion.p
          className="text-white text-4xl font-semibold mb-2"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          Hello
        </motion.p>
        <motion.h1
          className="text-[#15e2e5] text-5xl font-bold mb-2"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          I am Rajat Pandey
        </motion.h1>
        <motion.p
          className="text-white text-3xl font-medium mb-6"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Full-stack developer
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-[#15e2e5] text-black rounded-full shadow-md transition-all duration-300 hover:bg-[#0077b5] hover:text-white overflow-hidden w-16 hover:w-44 h-16 px-2"
          >
            <div className="flex items-center justify-center w-12 h-12 mx-3.5">
              <i className="fab fa-linkedin-in text-2xl" />
            </div>
            <span className="whitespace-nowrap text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2">
              LinkedIn
            </span>
          </a>

          {/* GitHub */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-[#15e2e5] text-black rounded-full shadow-md transition-all duration-300 hover:bg-[#333] hover:text-white overflow-hidden w-16 hover:w-44 h-16 px-2"
          >
            <div className="flex items-center justify-center w-12 h-12 mx-3.5">
              <i className="fab fa-github text-2xl" />
            </div>
            <span className="whitespace-nowrap text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2">
              GitHub
            </span>
          </a>

          {/* Instagram */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-[#15e2e5] text-black rounded-full shadow-md transition-all duration-300 hover:bg-[#E1306C] hover:text-white overflow-hidden w-16 hover:w-44 h-16 px-2"
          >
            <div className="flex items-center justify-center w-12 h-12 mx-3.5">
              <i className="fab fa-instagram text-2xl" />
            </div>
            <span className="whitespace-nowrap text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2">
              Instagram
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center bg-[#15e2e5] text-black rounded-full shadow-md transition-all duration-300 hover:bg-[#4fc35b] hover:text-white overflow-hidden w-16 hover:w-44 h-16 px-2"
          >
            <div className="flex items-center justify-center w-12 h-12 mx-3.5">
              <i className="fab fa-whatsapp text-2xl" />
            </div>
            <span className="whitespace-nowrap text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2">
              WhatsApp
            </span>
          </a>
        </div>

        <Link to="about" smooth duration={500}>
          <div className="h-12 w-8 border-2 border-white mx-auto mt-40 rounded-full relative cursor-pointer animate-bounce">
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white rotate-45"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white rotate-45 opacity-60"></div>
          </div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
