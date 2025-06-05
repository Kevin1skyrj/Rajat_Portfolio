export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: "/placeholder.svg?height=80&width=80", color: "bg-orange-100 dark:bg-orange-900/20" },
        { name: "CSS3", icon: "/placeholder.svg?height=80&width=80", color: "bg-blue-100 dark:bg-blue-900/20" },
        {
          name: "JavaScript",
          icon: "/placeholder.svg?height=80&width=80",
          color: "bg-yellow-100 dark:bg-yellow-900/20",
        },
        { name: "React", icon: "/placeholder.svg?height=80&width=80", color: "bg-cyan-100 dark:bg-cyan-900/20" },
        { name: "Tailwind CSS", icon: "/placeholder.svg?height=80&width=80", color: "bg-teal-100 dark:bg-teal-900/20" },
        { name: "Vite", icon: "/placeholder.svg?height=80&width=80", color: "bg-purple-100 dark:bg-purple-900/20" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "/placeholder.svg?height=80&width=80", color: "bg-green-100 dark:bg-green-900/20" },
        { name: "Express", icon: "/placeholder.svg?height=80&width=80", color: "bg-gray-100 dark:bg-gray-700/30" },
        { name: "MongoDB", icon: "/placeholder.svg?height=80&width=80", color: "bg-green-100 dark:bg-green-900/20" },
        { name: "Firebase", icon: "/placeholder.svg?height=80&width=80", color: "bg-amber-100 dark:bg-amber-900/20" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: "/placeholder.svg?height=80&width=80", color: "bg-red-100 dark:bg-red-900/20" },
        { name: "GitHub", icon: "/placeholder.svg?height=80&width=80", color: "bg-gray-100 dark:bg-gray-700/30" },
        { name: "VS Code", icon: "/placeholder.svg?height=80&width=80", color: "bg-blue-100 dark:bg-blue-900/20" },
        { name: "Figma", icon: "/placeholder.svg?height=80&width=80", color: "bg-purple-100 dark:bg-purple-900/20" },
        { name: "Netlify", icon: "/placeholder.svg?height=80&width=80", color: "bg-teal-100 dark:bg-teal-900/20" },
        { name: "Vercel", icon: "/placeholder.svg?height=80&width=80", color: "bg-gray-100 dark:bg-gray-700/30" },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900 techstack-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
          <div className="w-20 h-1 bg-[#15e2e5] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            These are the technologies, frameworks, and tools I work with to build modern web applications.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-8 text-center">{tech.category}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {tech.items.map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-20 h-20 ${item.color} rounded-xl flex items-center justify-center mb-3 shadow-sm`}
                    >
                      <img src={item.icon || "/placeholder.svg"} alt={item.name} className="w-10 h-10" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Bar */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Experience Level</h3>

          <div className="space-y-6">
            {[
              { name: "Frontend Development", level: 90 },
              { name: "Backend Development", level: 75 },
              { name: "UI/UX Design", level: 65 },
              { name: "Mobile Development", level: 60 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[#15e2e5] font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#15e2e5] to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
