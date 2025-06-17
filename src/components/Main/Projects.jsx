import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "web",
      image: "/projects/meme-generator.jpg?height=400&width=600",
      description:
        "A comprehensive dashboard for e-commerce businesses with analytics and inventory management.",
      technologies: ["React", "Tailwind CSS", "Chart.js", "Firebase"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Social Media App",
      category: "mobile",
      image: "/projects/test.png?height=400&width=600",
      description:
        "A social networking platform with real-time messaging and content sharing capabilities.",
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image: "/projects/personal-dashboard.png?height=400&width=600",
      description:
        "A modern portfolio website showcasing projects and skills with a clean, responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Task Management Tool",
      category: "web",
      image: "/projects/tenzies.jpg?height=400&width=600",
      description:
        "A productivity app for managing tasks, projects, and team collaboration.",
      technologies: ["React", "Redux", "Express", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "mobile",
      image: "/projects/restaurant-menu.jpg?height=400&width=600",
      description:
        "A weather application providing real-time forecasts and weather alerts for multiple locations.",
      technologies: ["React Native", "Weather API", "Geolocation", "Redux"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Blog Platform",
      category: "web",
      image: "/projects/experiences.png?height=400&width=600",
      description:
        "A content management system for creating and publishing blog posts with user authentication.",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-transparent dark:from-[#0a192f] dark:via-[#232946] dark:to-[#1f243c]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400 bg-gradient-to-r from-[#15e2e5] to-[#232946] bg-clip-text  dark:from-[#15e2e5] dark:to-white"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#15e2e5] to-[#232946] mx-auto mb-6 rounded-full"></div>
          <p className=" text-gray-200 font-mono max-w-2xl mx-auto">
            Check out some of my recent work and personal projects that showcase
            my skills and expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            {["all", "web", "mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-[#15e2e5] text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: "0px 4px 24px #15e2e580" }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="space-x-2">
                    <a
                      href={project.demoLink}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      aria-label="View code on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <span className="px-3 py-1 bg-[#15e2e5] text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-[#15e2e5] to-[#232946] text-white text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <a
                  href={`#project-${project.id}`}
                  className="inline-flex items-center text-[#15e2e5] font-medium hover:text-cyan-600 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-[#15e2e5] hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.07 }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
