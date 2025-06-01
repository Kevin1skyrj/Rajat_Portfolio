import React from 'react';
// import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';
import { Link } from 'react-scroll';

const Content = () => (
  <div className="relative w-screen h-screen bg-black overflow-hidden">
    {/* <ParticleHeaderBg /> */}

    <section id="inicio" className="flex justify-center items-center h-full">
      <div className="text-center z-20 mt-40 px-4">
        <p className="text-white text-4xl font-semibold mb-2">Hello</p>
        <h1 className="text-green-500 text-5xl font-bold mb-2">
          I am Rajat Pandey
        </h1>
        <p className="text-white text-3xl font-medium mb-6">
          Full-stack developer
        </p>

        <div className="hidden sm:flex justify-center gap-6 mb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-[#4267B2] transition-all duration-300"
          >
            <i className="fab fa-linkedin text-xl mr-3" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-[#333] transition-all duration-300"
          >
            <i className="fab fa-github text-xl mr-3" />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-[#E1306C] transition-all duration-300"
          >
            <i className="fab fa-instagram text-xl mr-3" />
            <span>Instagram</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-[#4fc35b] transition-all duration-300"
          >
            <i className="fab fa-whatsapp text-xl mr-3" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="flex sm:hidden justify-center gap-6 text-white text-2xl mb-10">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp" />
          </a>
        </div>

        <Link to="sobre-mi" smooth duration={500}>
          <div className="h-12 w-8 border-2 border-white mx-auto rounded-full relative cursor-pointer animate-bounce">
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white rotate-45"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white rotate-45 opacity-60"></div>
          </div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
