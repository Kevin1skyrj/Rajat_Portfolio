import React, { useRef } from "react";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "2023 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading the frontend development team and implementing modern UI/UX designs with React, TypeScript, and advanced state management.",
    type: "work",
  },
  {
    year: "2020 - 2023",
    title: "Full Stack Developer",
    company: "Digital Solutions LLC",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and cloud technologies. Improved application performance by 40%.",
    type: "work",
  },
  {
    year: "2018 - 2020",
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    description:
      "Started my professional journey building responsive websites and e-commerce platforms. Collaborated with design teams to create pixel-perfect implementations.",
    type: "work",
  },
  {
    year: "2017",
    title: "Computer Science Degree",
    company: "Tech University",
    description:
      "Graduated with honors in Computer Science with a focus on web technologies, algorithms, and software engineering principles.",
    type: "education",
  },
];

const getIcon = (type) => (type === "work" ? Briefcase : GraduationCap);

const Timeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  // Animate the line fill from 0 to 100% as you scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-10 md:py-16 bg-transparent px-2" ref={timelineRef}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            My Journey
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A timeline of my professional growth and educational achievements
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative flex">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 w-1 h-full bg-gray-700/30 rounded-full z-0">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-purple-500/30"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="flex-1 flex flex-col gap-10 md:gap-16 z-10">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = getIcon(item.type);

              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center relative"
                >
                  {/* Desktop: Left Side */}
                  <div
                    className={`hidden md:flex w-1/2 ${
                      isLeft ? "justify-end pr-8" : "justify-start pl-8"
                    }`}
                  >
                    {isLeft && (
                      <div className="max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 text-right">
                        <div className="flex items-center justify-end gap-2 text-blue-300 font-semibold mb-2">
                          <Calendar size={18} />
                          <span>{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-end gap-2 text-purple-300 font-medium mb-2">
                          <MapPin size={16} />
                          <span>{item.company}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center md:mx-0 mx-6 z-10">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Desktop: Right Side */}
                  <div
                    className={`hidden md:flex w-1/2 ${
                      !isLeft ? "justify-start pl-8" : "justify-end pr-8"
                    }`}
                  >
                    {!isLeft && (
                      <div className="max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 text-left">
                        <div className="flex items-center gap-2 text-blue-300 font-semibold mb-2">
                          <Calendar size={18} />
                          <span>{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-300 font-medium mb-2">
                          <MapPin size={16} />
                          <span>{item.company}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex flex-row items-start gap-4 ml-2">
                    {/* Dot is already rendered above */}
                    <div className="flex-1">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-center gap-2 text-blue-300 font-semibold mb-1">
                          <Calendar size={16} />
                          <span className="text-sm">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-300 font-medium mb-1">
                          <MapPin size={14} />
                          <span className="text-sm">{item.company}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 md:mt-16">
          <div className="inline-flex items-center gap-3 text-gray-400">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse" />
            <span className="font-medium">The journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
