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
    <header className="bg-[#111] text-white w-full fixed top-0 z-50 shadow-md">
      <ScrollGradientLine />
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home">
          <div className="flex-shrink-0">
            <img
              src="./logo1.0.png"
              alt="Logo"
              className="w-30 h-23 object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10 font-semibold text-base">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition border-b-2 pb-1 ${
                activeId === item.id
                  ? "text-[#15e2e5] border-[#15e2e5]"
                  : "border-transparent hover:text-[#15e2e5] hover:border-[#15e2e5]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-[#111] text-white px-4 pb-4 pt-2 space-y-2 font-medium">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block hover:text-[#15e2e5]"
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
