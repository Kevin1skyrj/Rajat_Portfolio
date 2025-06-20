import React, { useEffect, useState } from "react";

const ScrollGradientLine = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial value
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-1 bg-transparent overflow-hidden">
      <div
        className="h-full bg-cyan-400"
        style={{
          width: `${scrollPercent}%`,
          
          transition: "width 0.2s linear",
        }}
      />
    </div>
  );
};

export default ScrollGradientLine;