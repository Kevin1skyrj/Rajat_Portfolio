import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#15e2e5] via-white to-[#232946] dark:from-[#232946] dark:via-[#111] dark:to-[#15e2e5]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#15e2e5] to-[#232946] bg-clip-text text-transparent dark:from-[#15e2e5] dark:to-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know me better and learn about my journey as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Column */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
              
              >
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#15e2e5] rounded-full flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs uppercase tracking-wider">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                A passionate Web Developer based in New York
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a full-stack developer with a passion for creating
                interactive, responsive, and user-friendly websites. With over 5
                years of experience in web development, I specialize in building
                modern web applications using React, Node.js, and other
                cutting-edge technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                My journey in tech started when I built my first website at the
                age of 16. Since then, I've been constantly learning and
                improving my skills to stay up-to-date with the latest
                technologies and best practices in the industry.
              </p>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center dark:text-white">
                  <Calendar className="w-5 h-5 text-[#15e2e5] mr-3" />
                  <span>Born: January 15, 1995</span>
                </div>
                <div className="flex items-center dark:text-white">
                  <MapPin className="w-5 h-5 text-[#15e2e5] mr-3" />
                  <span>Location: New York, USA</span>
                </div>
                <div className="flex items-center dark:text-white">
                  <Briefcase className="w-5 h-5 text-[#15e2e5] mr-3" />
                  <span>Experience: 5+ Years</span>
                </div>
                <div className="flex items-center dark:text-white">
                  <GraduationCap className="w-5 h-5 text-[#15e2e5] mr-3" />
                  <span>Degree: Computer Science</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[#15e2e5] hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300"
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

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-2xl font-bold text-center mb-10 dark:text-white">
              My Journey
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

              {/* Timeline Items */}
              <div className="space-y-12 dark:text-white">
                {[
                  {
                    year: "2023 - Present",
                    title: "Senior Frontend Developer",
                    company: "Tech Innovations Inc.",
                    description:
                      "Leading the frontend development team and implementing modern UI/UX designs.",
                  },
                  {
                    year: "2020 - 2023",
                    title: "Full Stack Developer",
                    company: "Digital Solutions LLC",
                    description:
                      "Developed and maintained full-stack web applications using React and Node.js.",
                  },
                  {
                    year: "2018 - 2020",
                    title: "Junior Web Developer",
                    company: "WebCraft Studios",
                    description:
                      "Started my professional journey building responsive websites and e-commerce platforms.",
                  },
                  {
                    year: "2017",
                    title: "Computer Science Degree",
                    company: "Tech University",
                    description:
                      "Graduated with honors in Computer Science with a focus on web technologies.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    } md:justify-between`}
                  >
                    <div
                      className={`hidden md:block w-5/12 ${
                        index % 2 === 0 ? "text-right" : ""
                      }`}
                    >
                      {index % 2 === 0 ? (
                        <>
                          <h4 className="text-xl font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-[#15e2e5] font-medium">
                            {item.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            {item.description}
                          </p>
                        </>
                      ) : (
                        <span className="text-gray-500 font-semibold">
                          {item.year}
                        </span>
                      )}
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#15e2e5] flex items-center justify-center z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>

                    <div
                      className={`md:w-5/12 w-full ${
                        index % 2 === 1 ? "md:text-right" : ""
                      }`}
                    >
                      <span className="text-gray-500 font-semibold md:hidden block mb-1">
                        {item.year}
                      </span>
                      {index % 2 === 1 ? (
                        <>
                          <h4 className="text-xl font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-[#15e2e5] font-medium">
                            {item.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">
                            {item.description}
                          </p>
                        </>
                      ) : (
                        <>
                          <span className="text-gray-500 font-semibold hidden md:block">
                            {item.year}
                          </span>
                          <div className="md:hidden">
                            <h4 className="text-xl font-semibold">
                              {item.title}
                            </h4>
                            <p className="text-[#15e2e5] font-medium">
                              {item.company}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                              {item.description}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
