import React, { useState, useRef, forwardRef, useEffect } from "react";
import { motion } from "framer-motion";

// keep a lint-legal reference to motion (some linters flag unused imports)
const _motion = motion;
import { Code2, Palette, Database, Globe, Cpu, LineChart } from "lucide-react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

// Reusable circular icon wrapper (matches demo)
const Circle = forwardRef(({ className, children, style }, ref) => {
  return (
    <motion.div
      ref={ref}
      role="img"
      aria-hidden={false}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      style={style}
      className={
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white/6 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] hover:cursor-pointer " +
        (className || "")
      }
    >
      {children}
    </motion.div>
  );
});
Circle.displayName = "Circle";

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

  // Refs for animated beam demo (expanded to multiple nodes)
  const beamContainerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  const [isNarrow, setIsNarrow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = (e) => setIsNarrow(e.matches);
    setIsNarrow(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="skills"
      className=" bg-transparent dark:from-[#0a192f] dark:via-[#232946] dark:to-[#1f243c]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
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

        {/* Tech Icons with Animated Beams - Skiper demo style */}
        <div className="mt-4">
          <div
            ref={beamContainerRef}
            className="relative flex h-[420px] w-full items-center justify-center overflow-hidden p-1"
          >
            <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10 z-10">
              {/* Left: Development (centered caption) */}
              <div className="flex flex-col justify-center items-center">
                {(() => {
                  const leftShift =
                    screenWidth <= 325
                      ? -12
                      : screenWidth <= 375
                      ? -10
                      : screenWidth <= 425
                      ? -6
                      : 0;
                  const iconSize =
                    screenWidth <= 325
                      ? "w-5 h-5"
                      : screenWidth <= 375
                      ? "w-5 h-5"
                      : screenWidth <= 425
                      ? "w-6 h-6"
                      : "w-6 h-6";
                  return (
                    <Circle
                      ref={div7Ref}
                      className="bg-cyan-500/10 border-cyan-400/20 p-3"
                      style={{ marginLeft: leftShift }}
                    >
                      <Code2 className={`${iconSize} text-white`} />
                    </Circle>
                  );
                })()}
                <span className="text-sm text-gray-300 mt-2">Development</span>
              </div>

              {/* Center: Web (centered caption) */}
              <div className="flex flex-col justify-center items-center">
                {(() => {
                  const centerShift =
                    screenWidth <= 325
                      ? -8
                      : screenWidth <= 375
                      ? -6
                      : screenWidth <= 425
                      ? -4
                      : 0;
                  const iconSize =
                    screenWidth <= 325
                      ? "w-6 h-6"
                      : screenWidth <= 375
                      ? "w-6 h-6"
                      : screenWidth <= 425
                      ? "w-7 h-7"
                      : "w-8 h-8";
                  return (
                    <Circle
                      ref={div6Ref}
                      className="size-16 bg-emerald-400/8 border-emerald-300/20 p-4"
                      style={{ marginLeft: centerShift }}
                    >
                      <Globe className={`${iconSize} text-white`} />
                    </Circle>
                  );
                })()}
                <span className="text-sm text-gray-300 mt-2">
                  Responsive Web
                </span>
              </div>

              {/* Right column: icons with side-by-side labels (fixed column to keep circles centered) */}
              <div className="flex flex-col justify-center gap-4 items-center w-44">
                <div className="flex items-center gap-3 w-full max-w-[160px]">
                  {(() => {
                    // pick small left offset to avoid clipping on tiny screens
                    const mlPx =
                      screenWidth <= 325
                        ? 8
                        : screenWidth <= 375
                        ? 12
                        : screenWidth <= 425
                        ? 16
                        : 16;
                    const iconSize =
                      screenWidth <= 325
                        ? "w-4 h-4"
                        : screenWidth <= 375
                        ? "w-4 h-4"
                        : screenWidth <= 425
                        ? "w-4 h-4"
                        : "w-4 h-4";
                    return (
                      <Circle
                        ref={div1Ref}
                        className="bg-white/5 flex-shrink-0"
                        style={{ marginLeft: mlPx }}
                      >
                        <Cpu className={`${iconSize} text-white`} />
                      </Circle>
                    );
                  })()}
                  <span className="text-sm text-gray-300">Performance</span>
                </div>

                <div className="flex items-center gap-3 w-full max-w-[160px]">
                  {(() => {
                    const mlPx =
                      screenWidth <= 325
                        ? 8
                        : screenWidth <= 375
                        ? 12
                        : screenWidth <= 425
                        ? 16
                        : 16;
                    const iconSize =
                      screenWidth <= 325
                        ? "w-5 h-5"
                        : screenWidth <= 375
                        ? "w-5 h-5"
                        : screenWidth <= 425
                        ? "w-6 h-6"
                        : "w-6 h-6";
                    return (
                      <Circle
                        ref={div2Ref}
                        className="bg-amber-400/8 border-amber-300/20 flex-shrink-0"
                        style={{ marginLeft: mlPx }}
                      >
                        <LineChart className={`${iconSize} text-white`} />
                      </Circle>
                    );
                  })()}
                  <span className="text-sm text-gray-300">Analytics</span>
                </div>

                <div className="flex items-center gap-3 w-full max-w-[160px]">
                  {(() => {
                    const mlPx =
                      screenWidth <= 325
                        ? 8
                        : screenWidth <= 375
                        ? 12
                        : screenWidth <= 425
                        ? 16
                        : 16;
                    const iconSize =
                      screenWidth <= 325
                        ? "w-5 h-5"
                        : screenWidth <= 375
                        ? "w-5 h-5"
                        : screenWidth <= 425
                        ? "w-6 h-6"
                        : "w-6 h-6";
                    return (
                      <Circle
                        ref={div3Ref}
                        className="bg-white/5 flex-shrink-0"
                        style={{ marginLeft: mlPx }}
                      >
                        <Code2 className={`${iconSize} text-white`} />
                      </Circle>
                    );
                  })()}
                  <span className="text-sm text-gray-300">Tools</span>
                </div>

                <div className="flex items-center gap-3 w-full max-w-[160px]">
                  {(() => {
                    const mlPx =
                      screenWidth <= 325
                        ? 8
                        : screenWidth <= 375
                        ? 12
                        : screenWidth <= 425
                        ? 16
                        : 16;
                    const iconSize =
                      screenWidth <= 325
                        ? "w-5 h-5"
                        : screenWidth <= 375
                        ? "w-5 h-5"
                        : screenWidth <= 425
                        ? "w-6 h-6"
                        : "w-6 h-6";
                    return (
                      <Circle
                        ref={div4Ref}
                        className="bg-violet-500/8 border-violet-400/20 flex-shrink-0"
                        style={{ marginLeft: mlPx }}
                      >
                        <Database className={`${iconSize} text-white`} />
                      </Circle>
                    );
                  })()}
                  <span className="text-sm text-gray-300">APIs & DB</span>
                </div>

                <div className="flex items-center gap-3 w-full max-w-[160px]">
                  {(() => {
                    const mlPx =
                      screenWidth <= 325
                        ? 8
                        : screenWidth <= 375
                        ? 12
                        : screenWidth <= 425
                        ? 16
                        : 16;
                    const iconSize =
                      screenWidth <= 325
                        ? "w-5 h-5"
                        : screenWidth <= 375
                        ? "w-5 h-5"
                        : screenWidth <= 425
                        ? "w-6 h-6"
                        : "w-6 h-6";
                    return (
                      <Circle
                        ref={div5Ref}
                        className="bg-white/5 flex-shrink-0"
                        style={{ marginLeft: mlPx }}
                      >
                        <Palette className={`${iconSize} text-white`} />
                      </Circle>
                    );
                  })()}
                  <span className="text-sm text-gray-300">Design</span>
                </div>
              </div>
            </div>

            {/* AnimatedBeams connecting items */}
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
              duration={3}
              curvature={isNarrow ? -12 : -24}
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
              duration={3}
              curvature={isNarrow ? -12 : -24}
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
              duration={3}
              curvature={isNarrow ? -12 : -24}
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={div4Ref}
              toRef={div6Ref}
              duration={3}
              curvature={isNarrow ? -12 : -24}
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={div5Ref}
              toRef={div6Ref}
              duration={3}
              curvature={isNarrow ? -12 : -24}
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
              duration={3}
              curvature={isNarrow ? -8 : -16}
            />
          </div>

          {/* labels are now placed beneath the corresponding icons above */}
        </div>
      </div>
    </section>
  );
}

// TechIcon component uses AnimatedBeam to draw a subtle animated beam behind the icon
function TechIcon({ item, index }) {
  const containerRef = useRef(null);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.08 }}
      viewport={{ once: true }}
    >
      {/* Invisible target marker above the icon used as beam end-point */}
      <div
        ref={toRef}
        className="pointer-events-none absolute left-1/2 z-0"
        style={{ transform: "translateX(-50%)", top: -24, width: 0, height: 0 }}
      />

      {/* Animated beam SVG positioned absolutely inside the container */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        curvature={-20}
        pathOpacity={0.08}
        gradientStartColor={index % 2 === 0 ? "#15e2e5" : "#9c40ff"}
        gradientStopColor={index % 2 === 0 ? "#38bdf8" : "#6366f1"}
        duration={3 + index * 0.6}
        delay={index * 0.2}
        className="pointer-events-none"
      />

      <div
        ref={fromRef}
        className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-3 relative z-10`}
      >
        {item.icon}
      </div>
      <h3 className="font-medium text-white z-10">{item.label}</h3>
    </motion.div>
  );
}
