import { useState, useEffect, useMemo } from "react";
import { ExternalLink, Github, ArrowLeft, Code, Smartphone, Globe, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Move projects data outside component to prevent re-creation on every render
const projectsData = [
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
    date: "2024-01-10",
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
    date: "2023-11-15",
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
    date: "2024-02-01",
    status: "completed"
  },
  {
    id: 7,
    title: "Fitness Tracker",
    category: "mobile",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A comprehensive fitness tracking app with workout plans, progress monitoring, and social features.",
    technologies: ["React Native", "Firebase", "Charts.js", "AsyncStorage", "Expo"],
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

export default function AllProjects() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

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

  // Optimize filtering and sorting with useMemo to prevent lag
  const filteredProjects = useMemo(() => {
    let filtered = filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

    if (searchTerm) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    filtered.sort((a, b) => {
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

    return filtered;
  }, [filter, searchTerm, sortBy]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={handleBackToHome}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Home</span>
              </motion.button>
              
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
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white text-xs font-bold shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-cyan-500/90 backdrop-blur-md rounded-full text-white text-xs font-medium">
                      {project.category === "web" ? "Web App" : "Mobile App"}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 text-xs font-medium rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.demoLink}
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>

                    <a
                      href={project.githubLink}
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-slate-700/50 border border-slate-600/50 text-slate-300 font-semibold rounded-lg text-sm hover:bg-slate-600/50 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
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
