import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AllProjects from "./AllProjects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "web",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and real-time data visualization.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Chart.js",
        "Firebase",
        "TypeScript",
      ],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Social Media App",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A social networking platform with real-time messaging, content sharing, and advanced user interaction features.",
      technologies: [
        "React Native",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Redux",
      ],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with elegant animations and clean design.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
        "TypeScript",
      ],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Task Management Tool",
      category: "web",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A comprehensive productivity app for managing tasks, projects, and team collaboration with advanced filtering.",
      technologies: ["React", "Redux", "Express", "PostgreSQL", "Socket.io"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "mobile",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A beautiful weather application providing real-time forecasts, weather alerts, and location-based services.",
      technologies: [
        "React Native",
        "Weather API",
        "Geolocation",
        "Redux",
        "Expo",
      ],
      demoLink: "#",
      githubLink: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Blog Platform",
      category: "web",
      image:
        "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "A modern content management system for creating and publishing blog posts with rich text editing and user authentication.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
      ],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "web", label: "Web Apps", icon: Code },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredProjects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  return (
    <section
      id="projects"
      className="py-10 sm:py-16 lg:py-24 bg-transparent relative overflow-hidden"
    >
      {/* <div id="projects-section">
        <AllProjects />
      </div> */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs sm:text-sm font-medium">
              <Code className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Featured Work</span>
            </div>

            <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-4">
              My Projects
            </h2>

            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>

            <p className=" text-white max-w-2xl mx-auto">
              Explore a collection of projects that showcase my expertise in
              modern web development, mobile applications, and innovative
              digital solutions.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex p-1.5 sm:p-2 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl shadow-2xl">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 ${
                    filter === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">
                    {category.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative mx-auto w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          {/* Navigation Buttons - Positioned outside the card */}
          <button
            onClick={prevProject}
            className="absolute -left-2 sm:-left-8 lg:-left-16 top-54 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center text-white hover:bg-slate-700/90 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 hover:scale-110"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          <button
            onClick={nextProject}
            className="absolute -right-2 sm:-right-8 lg:-right-16 top-54 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center text-white hover:bg-slate-700/90 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20 hover:scale-110"
            aria-label="Next project"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto bg-transparent">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${filter}-${currentIndex}`}
                initial={{ opacity: 0, x: 300, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -300, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { duration: 0.4 },
                }}
                className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[180px] sm:min-h-[240px] lg:h-[420px]"
              >
                {filteredProjects.length > 0 && (
                  <>
                    {/* Project Image */}
                    <div className="relative w-full lg:w-1/2 aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto flex-shrink-0 h-32 sm:h-48 lg:h-full">
                      <motion.img
                        src={filteredProjects[currentIndex].image}
                        alt={filteredProjects[currentIndex].title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Featured Badge */}
                      {filteredProjects[currentIndex].featured && (
                        <motion.div
                          className="absolute top-4 sm:top-6 left-4 sm:left-6"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg">
                            ⭐ Featured
                          </div>
                        </motion.div>
                      )}

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 sm:top-6 right-4 sm:right-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/90 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium">
                          {filteredProjects[currentIndex].category === "web"
                            ? "Web App"
                            : "Mobile App"}
                        </div>
                      </motion.div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/20"></div>
                    </div>

                    {/* Project Info */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        className="space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                            {filteredProjects[currentIndex].title}
                          </h3>

                          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                            {filteredProjects[currentIndex].description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                          {filteredProjects[currentIndex].technologies.map(
                            (tech, i) => (
                              <motion.span
                                key={i}
                                className="px-2.5 sm:px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs sm:text-sm font-medium rounded-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                              >
                                {tech}
                              </motion.span>
                            )
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <motion.a
                            href={filteredProjects[currentIndex].demoLink}
                            className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-sm sm:text-base"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Live Demo
                          </motion.a>

                          <motion.a
                            href={filteredProjects[currentIndex].githubLink}
                            className="flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-800/50 border border-slate-700/50 text-slate-300 font-semibold rounded-xl hover:bg-slate-700/50 hover:text-white hover:border-slate-600/50 transition-all duration-300 text-sm sm:text-base"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            GitHub Repo
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/25 scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 sm:mt-6">
            <span className="text-slate-400 text-xs sm:text-sm">
              {currentIndex + 1} of {filteredProjects.length} projects
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-slate-300 text-base sm:text-lg px-4">
              Interested in working together? Let's create something amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="/all-projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>View All Projects</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
