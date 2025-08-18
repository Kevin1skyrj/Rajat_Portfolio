import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ScrollGradientLine from "../ScrollGradientLine";

// Hook to detect which section is in view
const useScrollSpy = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contacts"];

    const observer = new IntersectionObserver(
      (entries) => {
        // Filter only intersecting entries
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by which is closest to the top
          visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        threshold: 0.2, // Lower threshold for better detection
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <header className="text-white w-full fixed top-0 z-50">
      <ScrollGradientLine />
      <div className="flex items-center justify-center h-20 px-6 pt-4">
        {/* Desktop - Compact centered container */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3 min-w-fit">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="./logo1.0.png"
              alt="Logo"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeId === item.id
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#15e2e5]/20 to-[#15e2e5]/10 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Hire Me Button */}
          <div className="flex items-center">
            <a
              href="#contacts"
              className="bg-white text-black px-7 py-2.5 rounded-full font-medium text-sm hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Hire me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Container */}
        <div className="md:hidden flex items-center justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 w-full max-w-sm">
          {/* Mobile Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="./logo1.0.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Mobile Menu Button */}
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors" onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-t border-white/10">
          <nav className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeId === item.id
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* Mobile Hire Me Button */}
            <a
              href="#contacts"
              className="block mt-4 bg-white text-black px-4 py-3 rounded-lg font-medium text-sm text-center hover:bg-gray-100 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Hire me →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
