import { Calendar, MapPin, Briefcase, GraduationCap, Code, Coffee, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";

export default function About() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Coffee, label: "Cups of Coffee", value: "200+" },
    { icon: Zap, label: "Technologies", value: "12+" },
    { icon: Target, label: "Happy Clients", value: "8+" },
  ];

  const skills = [
    { name: "Frontend Development", level: 90, color: "bg-cyan-400" },
    { name: "Backend Development", level: 75, color: "bg-blue-500" },
    { name: "UI/UX Design", level: 65, color: "bg-purple-500" },
    { name: "Problem Solving", level: 85, color: "bg-green-500" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-transparent relative overflow-hidden min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Me
              </span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 font-normal max-w-2xl mx-auto text-lg">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            {/* Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  My Journey as a Developer
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate full-stack developer with a love for creating 
                  beautiful, functional web experiences. My journey began when I 
                  built my first website at 16, and since then, I've been 
                  constantly learning and evolving with the ever-changing tech landscape.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With over 5 months of hands-on experience, I specialize in 
                  modern web technologies like React, Node.js, and cutting-edge 
                  frameworks. I believe in writing clean, maintainable code and 
                  creating user experiences that truly matter.
                </p>

                {/* Personal Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center text-white">
                      <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Born</p>
                        <p className="font-medium">December 06, 2005</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center text-white">
                      <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-medium">Rourkela, INDIA</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center text-white">
                      <Briefcase className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Experience</p>
                        <p className="font-medium">5+ Months</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center text-white">
                      <GraduationCap className="w-5 h-5 text-cyan-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-400">Education</p>
                        <p className="font-medium">Computer Science</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Skills */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Skills & Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div>
            <Timeline />
          </div>
        </div>
      </motion.div>
    </section>
  );
}