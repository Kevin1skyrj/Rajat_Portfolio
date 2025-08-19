import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ProfileCard from "../Main/ProfileCard";
import TextType from "../TextType/TextType";

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
    className="relative w-screen bg-transparent overflow-hidden min-h-screen"
  >
    <section
      id="home"
      className="flex items-center justify-center min-h-screen relative z-10 pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content - Profile Card */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="scale-75 sm:scale-90 lg:scale-100 pt-6">
              <ProfileCard 
                name="Rajat Pandey"
                title="Software Engineer"
                handle="rajatpandey_dev"
                status="Available for work"
                avatarUrl="/profile1.png"
                miniAvatarUrl="/profile1.png"
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <motion.h1
              className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-none"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={textVariants}
            >
              Hi, I'm{" "}
              <span className=" bg-clip-text text-cyan-400">
                Rajat Pandey
              </span>
            </motion.h1>
            
            <motion.div
              className="mb-6"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariants}
            >
              <div className="text-gray-300 text-xl md:text-2xl lg:text-3xl font-medium mb-2 min-h-[1.8rem] md:min-h-[2rem] lg:min-h-[2.5rem]">
                <TextType
                  text={["Full-Stack Developer", "AI Engineer", "Problem Solver", "Tech Enthusiast"]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={2000}
                  textColors={["#06b6d4", "#06b6d4", "#06b6d4", "#06b6d4"]}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto lg:mx-0 rounded-full"></div>
            </motion.div>
            
            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariants}
            >
              I craft exceptional digital experiences with cutting-edge technologies. 
              Passionate about creating innovative solutions that make a difference.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={textVariants}
            >
              <Link to="projects" smooth duration={1000}>
                <button className=" cursor-pointer group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden">
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Link to="about" smooth duration={1000}>
            <div className="h-12 w-8 border-2 border-white mx-auto rounded-full relative cursor-pointer animate-bounce hover:border-cyan-400 transition-colors">
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white rotate-45"></div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 border-b-2 border-r-2 border-white rotate-45 opacity-60"></div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Content;
