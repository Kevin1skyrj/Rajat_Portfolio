import React, { useRef } from "react";
import { Calendar, MapPin, GraduationCap, Briefcase, User, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  {
    year: "Aug 2023 - Present",
    title: "B.Tech (3rd Year)",
    company: "NIT Rourkela",
    description:
      "Pursuing engineering from one of India's premier institutes.",
    type: "education",
  },
  {
    year: "Apr - Jul 2025",
    title: "Full Stack Developer Intern",
    company: "Jeevijay Technologies",
    description:
      "Built web applications using React.js, Node.js, and MongoDB with focus on UI/UX.",
    type: "internship",
  },
  {
    year: "Jul 2025 - Present",
    title: "Freelance Developer",
    company: "Independent",
    description:
      "Building tools like Job Tracker, Admin Dashboards with modern tech stacks.",
    type: "freelance",
  },
  {
    year: "2025 & Beyond",
    title: "Future Goals",
    company: "Tech Industry",
    description:
      "Open-source contributions, SDE internships, and preparing for top tech companies.",
    type: "goals",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "education":
      return GraduationCap;
    case "internship":
      return Briefcase;
    case "freelance":
      return User;
    case "goals":
      return Target;
    default:
      return Briefcase;
  }
};

const Timeline = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  // Animate the line fill from 0 to 100% as you scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-6 md:py-10 bg-transparent px-2" ref={timelineRef}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            My Journey
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
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
          <div className="flex-1 flex flex-col gap-6 md:gap-8 z-10">
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
                      <div className="max-w-sm bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 text-right">
                        <div className="flex items-center justify-end gap-2 text-blue-300 font-medium mb-2">
                          <Calendar size={15} />
                          <span className="text-sm">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-end gap-2 text-purple-300 font-medium mb-2">
                          <MapPin size={13} />
                          <span className="text-sm">{item.company}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center md:mx-0 mx-6 z-10">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={16} />
                    </div>
                  </div>

                  {/* Desktop: Right Side */}
                  <div
                    className={`hidden md:flex w-1/2 ${
                      !isLeft ? "justify-start pl-8" : "justify-end pr-8"
                    }`}
                  >
                    {!isLeft && (
                      <div className="max-w-sm bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 text-left">
                        <div className="flex items-center gap-2 text-blue-300 font-medium mb-2">
                          <Calendar size={15} />
                          <span className="text-sm">{item.year}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-300 font-medium mb-2">
                          <MapPin size={13} />
                          <span className="text-sm">{item.company}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex flex-row items-start gap-3 ml-2">
                    {/* Dot is already rendered above */}
                    <div className="flex-1">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-center gap-2 text-blue-300 font-medium mb-2">
                          <Calendar size={13} />
                          <span className="text-sm">{item.year}</span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-300 font-medium mb-2">
                          <MapPin size={11} />
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
        <div className="text-center mt-6 md:mt-8">
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse" />
            <span className="font-medium text-sm">The journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
