import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
export default function About() {
  return (
    <section
      id="about"
      // Palette 1: Modern Minimal
      className="min-h-screen pt-24 bg-transparent dark:from-[#0a192f] dark:via-[#232946] dark:to-[#1f243c] z-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-[#15e2e5] to-[#232946] bg-clip-text text-[#15e2e5] dark:from-[#15e2e5] dark:to-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
            <p className="text-gray-300 font-normal max-w-2xl mx-auto">
              Get to know me better and learn about my journey as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Column */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  src="/projects/services-bg6.jpg?height=600&width=600"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#19b5d4fa] rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs uppercase tracking-wider">
                    Months of Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                A passionate Web Developer based in New York
              </h3>
              <p className="text-gray-200 font-normal  mb-6">
                I'm a full-stack developer with a passion for creating
                interactive, responsive, and user-friendly websites. With over 5
                years of experience in web development, I specialize in building
                modern web applications using React, Node.js, and other
                cutting-edge technologies.
              </p>
              <p className="text-gray-200 font-normal mb-8">
                My journey in tech started when I built my first website at the
                age of 16. Since then, I've been constantly learning and
                improving my skills to stay up-to-date with the latest
                technologies and best practices in the industry.
              </p>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-white">
                  <Calendar className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Born: January 15, 1995</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Location: New York, USA</span>
                </div>
                <div className="flex items-center text-white">
                  <Briefcase className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Experience: 5+ Years</span>
                </div>
                <div className="flex items-center text-white">
                  <GraduationCap className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Degree: Computer Science</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#19b5d4fa] hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Contact Me
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Timeline />
        </div>
      </motion.div>
    </section>
  );
}
