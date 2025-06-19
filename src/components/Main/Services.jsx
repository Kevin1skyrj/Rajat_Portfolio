import { useState } from "react";
import { Code2, Palette, Database, Globe, Cpu, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 70 },
      { name: "REST API", level: 75 },
    ],
    other: [
      { name: "Git", level: 80 },
      { name: "Figma", level: 65 },
      { name: "Responsive Design", level: 85 },
      { name: "Performance Optimization", level: 70 },
      { name: "SEO", level: 60 },
    ],
  };

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Code2 className="w-5 h-5" /> },
    { id: "backend", label: "Backend", icon: <Database className="w-5 h-5" /> },
    { id: "other", label: "Other", icon: <Palette className="w-5 h-5" /> },
  ];

  return (
    <section
      id="skills"
      className=" pt-24 bg-transparent dark:from-[#0a192f] dark:via-[#232946] dark:to-[#1f243c]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#15e2e5] to-[#232946] bg-clip-text text-cyan-400 dark:from-[#15e2e5] dark:to-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
          <p className="text-gray-200 font-normal  max-w-2xl mx-auto">
            Here are my technical skills and proficiencies that I've developed
            over the years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Skill Categories */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-gray-800 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === category.id
                      ? "bg-white shadow-md"
                      : "text-gray-500  hover:text-gray-300 hover:cursor-pointer"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skills List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md text-white border border-white/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 24px #15e2e580",
                }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="text-[#15e2e5] font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    style={{
                      background:
                        "linear-gradient(90deg, #15e2e5 0%, #38bdf8 50%, #6366f1 100%)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Icons */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            {
              icon: <Code2 className="w-8 h-8 text-[#15e2e5]" />,
              label: "Web Development",
              bg: "bg-purple-100 dark:bg-purple-900/30",
            },
            {
              icon: <Globe className="w-8 h-8 text-blue-600" />,
              label: "Responsive Design",
              bg: "bg-blue-100 dark:bg-blue-900/30",
            },
            {
              icon: <Cpu className="w-8 h-8 text-green-600" />,
              label: "API Integration",
              bg: "bg-green-100 dark:bg-green-900/30",
            },
            {
              icon: <LineChart className="w-8 h-8 text-amber-600" />,
              label: "Performance",
              bg: "bg-amber-100 dark:bg-amber-900/30",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-3`}
              >
                {item.icon}
              </div>
              <h3 className="font-medium text-white ">{item.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
