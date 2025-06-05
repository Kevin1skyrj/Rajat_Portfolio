import { useState } from "react";
import { Code2, Palette, Database, Globe, Cpu, LineChart } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 85 },
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 skills-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and proficiencies that I've developed
            over the years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Skill Categories */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === category.id
                      ? "bg-white dark:bg-gray-700 shadow-md"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
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
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-lg">{skill.name}</h3>
                  <span className="text-[#15e2e5] font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-[#15e2e5] h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Icons */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-3">
              <Code2 className="w-8 h-8 text-[#15e2e5]" />
            </div>
            <h3 className="font-medium">Web Development</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-medium">Responsive Design</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
              <Cpu className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-medium">API Integration</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-3">
              <LineChart className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="font-medium">Performance</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
