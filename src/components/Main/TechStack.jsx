"use client";
import React, { useEffect, useRef } from 'react';

const TechStack = () => {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  
  // Use refs for pause state to avoid re-renders during animation
  const isFirstRowPaused = useRef(false);
  const isSecondRowPaused = useRef(false);
  
  // Animation refs for cleanup
  const firstRowAnimationId = useRef(null);
  const secondRowAnimationId = useRef(null);

  const technologies = [
    {
      id: 1,
      name: "HTML5",
      icon: "/techstack icons/html5.svg",
      color: "bg-orange-500/20",
    },
    {
      id: 2,
      name: "CSS3",
      icon: "/techstack icons/css3.svg",
      color: "bg-blue-500/20",
    },
    {
      id: 3,
      name: "JavaScript",
      icon: "/techstack icons/javascript.svg",
      color: "bg-yellow-500/20",
    },
    {
      id: 4,
      name: "React",
      icon: "/techstack icons/react.svg",
      color: "bg-cyan-500/20",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      icon: "/techstack icons/tailwindcss.svg",
      color: "bg-teal-500/20",
    },
    {
      id: 6,
      name: "Vite",
      icon: "/techstack icons/vite.svg",
      color: "bg-purple-500/20",
    },
    {
      id: 7,
      name: "Node.js",
      icon: "/techstack icons/nodejs.svg",
      color: "bg-green-500/20",
    },
    {
      id: 8,
      name: "Express",
      icon: "/techstack icons/express.svg",
      color: "bg-gray-500/20",
    },
  ];

  const secondRowTechs = [
    {
      id: 9,
      name: "MongoDB",
      icon: "/techstack icons/mongo.svg",
      color: "bg-green-600/20",
    },
    {
      id: 10,
      name: "Firebase",
      icon: "/techstack icons/firebase.svg",
      color: "bg-amber-500/20",
    },
    {
      id: 11,
      name: "Git",
      icon: "/techstack icons/git-icon.svg",
      color: "bg-red-500/20",
    },
    {
      id: 12,
      name: "GitHub",
      icon: "/techstack icons/github.svg",
      color: "bg-gray-600/20",
    },
    {
      id: 13,
      name: "VS Code",
      icon: "/techstack icons/vs-code.svg",
      color: "bg-blue-600/20",
    },
    {
      id: 14,
      name: "Figma",
      icon: "/techstack icons/figma.svg",
      color: "bg-purple-600/20",
    },
    {
      id: 15,
      name: "Netlify",
      icon: "/techstack icons/netlify.svg",
      color: "bg-teal-600/20",
    },
    {
      id: 16,
      name: "Vercel",
      icon: "/techstack icons/vercel.svg",
      color: "bg-black/20",
    },
  ];

  // Create multiple sets for truly infinite scroll
  const infiniteFirstRow = [...technologies, ...technologies, ...technologies, ...technologies];
  const infiniteSecondRow = [...secondRowTechs, ...secondRowTechs, ...secondRowTechs, ...secondRowTechs];

  useEffect(() => {
    const firstRowCarousel = firstRowRef.current;
    const secondRowCarousel = secondRowRef.current;
    if (!firstRowCarousel || !secondRowCarousel) return;

    let firstRowPosition = 0, secondRowPosition = 0;
    const speed = 0.5;
    const cardWidth = 180; // Card width + margin
    const resetPoint = -(cardWidth * technologies.length);

    const animateFirstRow = () => {
      if (!isFirstRowPaused.current) {
        firstRowPosition -= speed;
        
        if (firstRowPosition <= resetPoint) {
          firstRowPosition = 0;
        }
        
        firstRowCarousel.style.transform = `translateX(${firstRowPosition}px)`;
      }
      firstRowAnimationId.current = requestAnimationFrame(animateFirstRow);
    };

    const animateSecondRow = () => {
      if (!isSecondRowPaused.current) {
        secondRowPosition += speed; // Reverse direction
        
        if (secondRowPosition >= 0) {
          secondRowPosition = resetPoint;
        }
        
        secondRowCarousel.style.transform = `translateX(${secondRowPosition}px)`;
      }
      secondRowAnimationId.current = requestAnimationFrame(animateSecondRow);
    };

    // Start animations
    animateFirstRow();
    animateSecondRow();

    return () => {
      cancelAnimationFrame(firstRowAnimationId.current);
      cancelAnimationFrame(secondRowAnimationId.current);
    };
  }, [technologies.length]);

  return (
    <section id="tech-stack" className="py-4 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
            My Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 font-normal max-w-2xl mx-auto text-lg">
            Technologies, frameworks, and tools I use to build modern web applications
          </p>
        </div>

        {/* Marquee Container */}
        <div className="bg-transparent rounded-2xl mx-0 md:mx-0 overflow-hidden mb-6">
          {/* First Row - Left to Right */}
          <div 
            className="overflow-hidden w-full bg-transparent py-6"
            onMouseEnter={() => (isFirstRowPaused.current = true)}
            onMouseLeave={() => (isFirstRowPaused.current = false)}
          >
            <div 
              ref={firstRowRef}
              className="flex transition-none will-change-transform"
            >
              {infiniteFirstRow.map((tech, index) => (
                <div 
                  key={`first-${tech.id}-${index}`}
                  className="bg-white/10 backdrop-blur-md rounded-xl mx-3 shadow-md border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl h-32 w-40 flex items-center justify-center flex-shrink-0 group cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-3 p-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${tech.color}`}>
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-12 h-12 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm font-medium text-white text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div 
            className="overflow-hidden w-full bg-transparent py-6"
            onMouseEnter={() => (isSecondRowPaused.current = true)}
            onMouseLeave={() => (isSecondRowPaused.current = false)}
          >
            <div 
              ref={secondRowRef}
              className="flex transition-none will-change-transform"
            >
              {infiniteSecondRow.map((tech, index) => (
                <div 
                  key={`second-${tech.id}-${index}`}
                  className="bg-white/10 backdrop-blur-md rounded-xl mx-3 shadow-md border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl h-32 w-40 flex items-center justify-center flex-shrink-0 group cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-3 p-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${tech.color}`}>
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-12 h-12 object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm font-medium text-white text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default TechStack;
