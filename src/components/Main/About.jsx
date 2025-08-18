import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import ProfileCard from "./ProfileCard";

export default function About() {
  return (
    <section
      id="about"
      className="pt-24 bg-transparent dark:from-[#0a192f] dark:via-[#232946] dark:to-[#1f243c] z-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">           
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
            <p className="text-gray-300 font-normal max-w-2xl mx-auto">
              Get to know me better and learn about my journey as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Profile Card Column */}
            <div className="flex justify-center lg:justify-start">
              <ProfileCard 
                name="Rajat Pandey"
                title="Software Engineer"
                handle="rajatpandey_dev"
                status="Available for work"
                avatarUrl="/profile1.png"
                miniAvatarUrl="/profile1.png"
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>

            {/* Content Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                A passionate Web Developer based in India
              </h3>
              <p className="text-gray-200 font-normal mb-6">
                I'm a full-stack developer with a passion for creating
                interactive, responsive, and user-friendly websites. With over 5
                months of experience in web development, I specialize in
                building modern web applications using React, Node.js, and other
                cutting-edge technologies.
              </p>
              <p className="text-gray-200 font-normal mb-8">
                My journey in tech started when I built my first website at the
                age of 16. Since then, I've been constantly learning and
                improving my skills to stay up-to-date with the latest
                technologies and best practices in the industry.
              </p>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-white">
                  <Calendar className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Born: December 06, 2005</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Location: Rourkela, INDIA</span>
                </div>
                <div className="flex items-center text-white">
                  <Briefcase className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Experience: 5+ Months</span>
                </div>
                <div className="flex items-center text-white">
                  <GraduationCap className="w-5 h-5 text-[#19b5d4fa] mr-3" />
                  <span>Degree: Computer Science</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contacts"
                className="inline-flex items-center px-6 py-3 bg-[#19b5d4fa] hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Contact Me
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Timeline />
        </div>
      </motion.div>
    </section>
  );
}