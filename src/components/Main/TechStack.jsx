import { motion } from "framer-motion";
export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: "/techstack icons/html5.svg?height=80&width=80",
          color: "bg-orange-100 dark:bg-orange-900/20",
        },
        {
          name: "CSS3",
          icon: "/techstack icons/css3.svg?height=80&width=80",
          color: "bg-blue-100 dark:bg-blue-900/20",
        },
        {
          name: "JavaScript",
          icon: "/techstack icons/javascript.svg?height=80&width=80",
          color: "bg-yellow-100 dark:bg-yellow-900/20",
        },
        {
          name: "React",
          icon: "/techstack icons/react.svg?height=80&width=80",
          color: "bg-cyan-100 dark:bg-cyan-900/20",
        },
        {
          name: "Tailwind CSS",
          icon: "/techstack icons/tailwindcss.svg?height=80&width=80",
          color: "bg-teal-100 dark:bg-teal-900/20",
        },
        {
          name: "Vite",
          icon: "/techstack icons/vite.svg?height=80&width=80",
          color: "bg-purple-100 dark:bg-purple-900/20",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "/techstack icons/nodejs.svg?height=80&width=80",
          color: "bg-green-100 dark:bg-green-900/20",
        },
        {
          name: "Express",
          icon: "/techstack icons/express.svg?height=80&width=80",
          color: "bg-gray-100 dark:bg-gray-700/30",
        },
        {
          name: "MongoDB",
          icon: "/techstack icons/mongo.svg?height=80&width=80",
          color: "bg-green-100 dark:bg-green-900/20",
        },
        {
          name: "Firebase",
          icon: "/techstack icons/firebase.svg?height=80&width=80",
          color: "bg-amber-100 dark:bg-amber-900/20",
        },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        {
          name: "Git",
          icon: "/techstack icons/git-icon.svg?height=80&width=80",
          color: "bg-red-100 dark:bg-red-900/20",
        },
        {
          name: "GitHub",
          icon: "/techstack icons/github.svg?height=80&width=80",
          color: "bg-gray-100 dark:bg-gray-700/30",
        },
        {
          name: "VS Code",
          icon: "/techstack icons/vs-code.svg?height=80&width=80",
          color: "bg-blue-100 dark:bg-blue-900/20",
        },
        {
          name: "Figma",
          icon: "/techstack icons/figma.svg?height=80&width=80",
          color: "bg-purple-100 dark:bg-purple-900/20",
        },
        {
          name: "Netlify",
          icon: "/techstack icons/netlify.svg?height=80&width=80",
          color: "bg-teal-100 dark:bg-teal-900/20",
        },
        {
          name: "Vercel",
          icon: "/techstack icons/vercel.svg?height=80&width=80",
          color: "bg-gray-100 dark:bg-gray-700/30",
        },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-20 bg-transparent dark:from-[#0a192f] dark:via-[#232946] dark:to-[#1f243c]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#15e2e5] to-[#232946] bg-clip-text text-cyan-400 dark:from-[#15e2e5] dark:to-white"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            My Tech Stack
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#15e2e5] to-[#232946] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-200 font-normal  max-w-2xl mx-auto">
            These are the technologies, frameworks, and tools I work with to
            build modern web applications.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-8 text-center text-white">
                {tech.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {tech.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ scale: 1.08 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-20 h-20 ${item.color} rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:shadow-[0_0_16px_4px_rgba(21,226,229,0.25)] transition-shadow duration-300`}
                    >
                      <img
                        src={item.icon || "/placeholder.svg"}
                        alt={item.name}
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="font-medium text-white bg-clip-text ">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
