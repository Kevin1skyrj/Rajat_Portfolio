import { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowLeft, Code, Smartphone, Globe, Play, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "web",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and real-time data visualization.",
      technologies: ["React", "Tailwind CSS", "Chart.js", "Firebase", "TypeScript"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      title: "Social Media App",
      category: "mobile",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A social networking platform with real-time messaging, content sharing, and advanced user interaction features.",
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "Redux"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      date: "2024-02-20",
      status: "completed"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A modern, responsive portfolio website showcasing projects and skills with elegant animations and clean design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
      date: "2024-03-10",
      status: "completed"
    },
    {
      id: 4,
      title: "Task Management Tool",
      category: "web",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A comprehensive productivity app for managing tasks, projects, and team collaboration with advanced filtering.",
      technologies: ["React", "Redux", "Express", "PostgreSQL", "Socket.io"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      date: "2023-12-05",
      status: "completed"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "mobile",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A beautiful weather application providing real-time forecasts, weather alerts, and location-based services.",
      technologies: ["React Native", "Weather API", "Geolocation", "Redux", "Expo"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      date: "2024-01-30",
      status: "completed"
    },
    {
      id: 6,
      title: "Blog Platform",
      category: "web",
      image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A modern content management system for creating and publishing blog posts with rich text editing and user authentication.",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
      date: "2024-02-14",
      status: "completed"
    },
    {
      id: 7,
      title: "Fitness Tracker",
      category: "mobile",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A comprehensive fitness tracking application with workout plans, progress monitoring, and social features.",
      technologies: ["React Native", "Firebase", "HealthKit", "Redux", "Chart.js"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      date: "2023-11-20",
      status: "completed"
    },
    {
      id: 8,
      title: "Real Estate Platform",
      category: "web",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A modern real estate platform with property listings, virtual tours, and advanced search capabilities.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Mapbox"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
      date: "2024-03-25",
      status: "in-progress"
    },
    {
      id: 9,
      title: "Recipe Sharing App",
      category: "mobile",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A social platform for sharing and discovering recipes with meal planning and shopping list features.",
      technologies: ["React Native", "Node.js", "MongoDB", "Cloudinary", "Expo"],
      demoLink: "#",
      githubLink: "#",
      featured: false,
      date: "2024-04-01",
      status: "in-progress"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "web", label: "Web Apps", icon: Code },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  ];

  const sortOptions = [
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "featured", label: "Featured First" },
    { id: "alphabetical", label: "A-Z" }
  ];

  let filteredProjects = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter);

  if (searchTerm) {
    filteredProjects = filteredProjects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  filteredProjects.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      case "featured":
        return (b.featured - a.featured) || new Date(b.date) - new Date(a.date);
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <motion.a
                href="/"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Home</span>
              </motion.a>
              
              <div className="w-px h-6 bg-slate-600"></div>
              
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">All Projects</h1>
                <p className="text-slate-400 text-sm">
                  {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters and Search */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      filter === category.id
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                        : "bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 pr-10 text-white text-sm font-medium focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id} className="bg-slate-800">
                    {option.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === 'completed' 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-amber-500/90 text-white'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-xs font-bold">
                        ⭐ Featured
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-md rounded-full text-white text-xs font-medium">
                      {project.category === "web" ? "Web App" : "Mobile App"}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.demoLink}
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white shadow-lg hover:shadow-cyan-500/40 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        className="flex items-center justify-center w-12 h-12 bg-slate-800/80 backdrop-blur-md rounded-full text-white border border-slate-600/50 hover:bg-slate-700/80 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-400 text-xs font-medium rounded-lg">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.demoLink}
                      className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                     Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.githubLink}
                      className="flex-1 flex items-center justify-center px-4 py-2.5 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-lg hover:bg-slate-600/50 hover:text-white transition-all text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-slate-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilter("all");
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Load More Button (if needed for pagination) */}
        {filteredProjects.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-slate-400 text-sm">
              Showing all {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
