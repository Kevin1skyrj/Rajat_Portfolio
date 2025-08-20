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
import { Link } from "react-router-dom"; // Add this import
import AllProjects from "./AllProjects";
import { CardCarousel } from "@/components/ui/card-carousel";
import ScroolToTop from "../ScroolTop/ScroolToTop";

export default function Projects() {
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

  return (
    <section
      id="projects"
      className= "bg-transparent relative overflow-hidden"
    >
      <div>
        <ScroolToTop />
      </div>
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
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
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

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <CardCarousel
            projects={projects}
            autoplayDelay={3000}
            showPagination={true}
            showNavigation={true}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="space-y-4 sm:space-y-6">
            <p className="text-slate-300 text-base sm:text-lg px-4">
              Interested in working together? Let's create something amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/all-projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>View All Projects</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
