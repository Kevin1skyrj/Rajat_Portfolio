import { useState } from "react";
import { Menu, X } from "lucide-react";
import MarqueeLine from "../ScrollGradientLine";
import ScrollGradientLine from "../ScrollGradientLine";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#111] text-white w-full fixed top-0 z-50 shadow-md ">
      <ScrollGradientLine />
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="./logo1.0.png"
            alt="Logo"
            className="w-30 h-23 object-contain" 
            
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-10 font-semibold text-base">
          <a
            href="#home"
            className="hover:text-[#15e2e5] border-b-2 border-transparent hover:border-[#15e2e5] transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#15e2e5] border-b-2 border-transparent hover:border-[#15e2e5] transition"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="hover:text-[#15e2e5] border-b-2 border-transparent hover:border-[#15e2e5] transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#15e2e5] border-b-2 border-transparent hover:border-[#15e2e5] transition"
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="hover:text-[#15e2e5] border-b-2 border-transparent hover:border-[#15e2e5] transition"
          >
            Contacts
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-[#111] text-white px-4 pb-4 pt-2 space-y-2 font-medium">
          <a href="#home" className="block hover:text-[#15e2e5]">
            Home
          </a>
          <a href="#about" className="block hover:text-[#15e2e5]">
            About Me
          </a>
          <a href="#skills" className="block hover:text-[#15e2e5]">
            Services
          </a>
          <a href="#projects" className="block hover:text-[#15e2e5]">
            Projects
          </a>
          <a href="#contacts" className="block hover:text-[#15e2e5]">
            Contacts
          </a>
        </nav>
      )}
      
    </header>
  );
};

export default Navbar;
