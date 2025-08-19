import { Calendar, MapPin, Briefcase, GraduationCap, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import { MagicCard } from "@/components/magicui/magic-card";
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
      className="py-10 bg-transparent relative overflow-hidden min-h-screen"
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight"
              variants={itemVariants}
            >
              About{" "}
              <span className="text-cyan-400">
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
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <MagicCard
                  gradientFrom="#06b6d4"
                  gradientTo="#7c3aed"
                  gradientSize={300}
                  gradientOpacity={0.12}
                  useBackground={false}
                  useBorderOverlay={false}
                  className="p-0 w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/10 transform transition-all duration-300 group-hover:-translate-y-3 group-hover:scale-105 group-hover:shadow-2xl"
                >
                  {/* Border beams (appear on hover) */}
                  <BorderBeam
                    size={420}
                    duration={6}
                    delay={0}
                    borderWidth={4}
                    colorFrom="transparent"
                    colorTo="#ef4444"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                  <BorderBeam
                    size={420}
                    duration={6}
                    delay={3}
                    borderWidth={4}
                    colorFrom="transparent"
                    colorTo="#3b82f6"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                  {/* Card header */}
                  <div className="border-b border-white/10 p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">Who I Am</h3>
                        <p className="text-gray-300 mt-2 max-w-xl">Passionate about creating digital experiences that make a difference.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-4 sm:p-6">
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
                </MagicCard>
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