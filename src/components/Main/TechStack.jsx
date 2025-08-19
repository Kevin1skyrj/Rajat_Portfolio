import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const technologies = [
  {
    name: "HTML5",
    icon: "/techstack icons/html5.svg",
    color: "bg-orange-500/20",
  },
  {
    name: "CSS3",
    icon: "/techstack icons/css3.svg",
    color: "bg-blue-500/20",
  },
  {
    name: "JavaScript",
    icon: "/techstack icons/javascript.svg",
    color: "bg-yellow-500/20",
  },
  {
    name: "React",
    icon: "/techstack icons/react.svg",
    color: "bg-cyan-500/20",
  },
  {
    name: "Tailwind CSS",
    icon: "/techstack icons/tailwindcss.svg",
    color: "bg-teal-500/20",
  },
  {
    name: "Vite",
    icon: "/techstack icons/vite.svg",
    color: "bg-purple-500/20",
  },
  {
    name: "Node.js",
    icon: "/techstack icons/nodejs.svg",
    color: "bg-green-500/20",
  },
  {
    name: "Express",
    icon: "/techstack icons/express.svg",
    color: "bg-gray-500/20",
  },
  {
    name: "MongoDB",
    icon: "/techstack icons/mongo.svg",
    color: "bg-green-600/20",
  },
  {
    name: "Firebase",
    icon: "/techstack icons/firebase.svg",
    color: "bg-amber-500/20",
  },
  {
    name: "Git",
    icon: "/techstack icons/git-icon.svg",
    color: "bg-red-500/20",
  },
  {
    name: "GitHub",
    icon: "/techstack icons/github.svg",
    color: "bg-gray-600/20",
  },
  {
    name: "VS Code",
    icon: "/techstack icons/vs-code.svg",
    color: "bg-blue-600/20",
  },
  {
    name: "Figma",
    icon: "/techstack icons/figma.svg",
    color: "bg-purple-600/20",
  },
  {
    name: "Netlify",
    icon: "/techstack icons/netlify.svg",
    color: "bg-teal-600/20",
  },
  {
    name: "Vercel",
    icon: "/techstack icons/vercel.svg",
    color: "bg-black/20",
  },
];

// Split technologies into two rows with exactly 8 icons each
const firstRow = technologies.slice(0, 8);
const secondRow = technologies.slice(8, 16);

const TechCard = ({ icon, name, color }) => {
  return (
    <div
      className={cn(
        "relative flex h-32 w-40 cursor-pointer items-center justify-center rounded-xl border p-4 flex-shrink-0",
        "border-gray-200/20 bg-gray-900/40 backdrop-blur-sm",
        "hover:bg-gray-800/60 hover:scale-105 transition-all duration-300",
        "group"
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center", color)}>
          <img
            src={icon}
            alt={name}
            className="w-12 h-12 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
          />
        </div>
        <span className="text-sm font-medium text-gray-200 text-center leading-tight">
          {name}
        </span>
      </div>
    </div>
  );
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            My Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 font-normal max-w-2xl mx-auto text-lg">
            Technologies, frameworks, and tools I use to build modern web applications
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
          {/* First Row - Left to Right */}
          <div className="w-full mb-6">
            <Marquee 
              pauseOnHover 
              className="[--duration:25s] [--gap:1rem]" 
              repeat={4}
            >
              <div className="flex flex-row gap-4">
                {firstRow.map((tech, index) => (
                  <TechCard key={`first-${tech.name}-${index}`} {...tech} />
                ))}
              </div>
            </Marquee>
          </div>

          {/* Second Row - Right to Left */}
          <div className="w-full">
            <Marquee 
              reverse 
              pauseOnHover 
              className="[--duration:25s] [--gap:1rem]" 
              repeat={4}
            >
              <div className="flex flex-row gap-4">
                {secondRow.map((tech, index) => (
                  <TechCard key={`second-${tech.name}-${index}`} {...tech} />
                ))}
              </div>
            </Marquee>
          </div>

          {/* Fade Gradients */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-900/80 to-transparent"></div> */}
        </div>
      </div>
    </section>
  );
}
