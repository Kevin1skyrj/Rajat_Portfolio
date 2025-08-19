import { Calendar, MapPin, Briefcase, GraduationCap, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-transparent relative overflow-hidden min-h-screen"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium uppercase tracking-wider backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-4 h-4" />
              Get to know me
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              variants={itemVariants}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Me
              </span>
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"
              variants={itemVariants}
            />
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Passionate about creating digital experiences that make a difference. 
              I blend creativity with technical expertise to build solutions that inspire and innovate.
            </motion.p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Personal Story Section */}
            <motion.div
              variants={itemVariants}
              className="mb-16 md:mb-20"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
                  <BorderBeam
                    size={60}
                    duration={6}
                    colorFrom="#06b6d4"
                    colorTo="#7c3aed"
                    borderWidth={2}
                    className="opacity-90 pointer-events-none"
                  />
                  {/* Additional beams to match MusicPlayer effect */}
                  <BorderBeam
                    duration={6}
                    size={400}
                    className="from-transparent via-red-500 to-transparent pointer-events-none"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent pointer-events-none"
                  />
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Who I Am
                    </h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg">
                      I'm a passionate <span className="text-cyan-400 font-semibold">full-stack developer</span> with 
                      a love for creating beautiful, functional web experiences. My journey began when I 
                      built my first website at 16, and since then, I've been constantly learning and 
                      evolving with the ever-changing tech landscape.
                    </p>
                    <p className="text-base sm:text-lg">
                      With over <span className="text-blue-400 font-semibold">5 months of hands-on experience</span>, 
                      I specialize in modern web technologies like React, Node.js, and cutting-edge frameworks. 
                      I believe in writing clean, maintainable code and creating user experiences that truly matter.
                    </p>
                    <p className="text-base sm:text-lg">
                      Currently pursuing my <span className="text-purple-400 font-semibold">B.Tech </span> 
                      from NIT Rourkela, I'm always excited to take on new challenges and contribute to 
                      innovative projects that make a positive impact.
                    </p>
                  </div>

                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {[
                      { icon: Calendar, label: "Born", value: "December 06, 2005", color: "text-cyan-400" },
                      { icon: MapPin, label: "Location", value: "Rourkela, INDIA", color: "text-blue-400" },
                      { icon: Briefcase, label: "Experience", value: "5+ Months", color: "text-purple-400" },
                      { icon: GraduationCap, label: "Education", value: "Computer Science", color: "text-green-400" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center text-white">
                          <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} mr-2 sm:mr-3 group-hover:scale-110 transition-transform flex-shrink-0`} />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs sm:text-sm text-gray-400 mb-1">{item.label}</p>
                            <p className="font-semibold text-sm sm:text-base truncate">{item.value}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div variants={itemVariants}>
              <Timeline />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}