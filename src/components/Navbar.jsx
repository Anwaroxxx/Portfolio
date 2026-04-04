import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-[#010501]/90 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[#0a2a0a]"
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#home" className="font-mono text-lg sm:text-xl font-black tracking-tight">
          <span className="text-[#00ff41]">~/</span>
          <span className="text-white">anwar</span>
          <span className="text-[#00ff41] opacity-50">$</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              className="text-[#4a9a4a] hover:text-[#00ff41] transition-colors duration-200 font-mono text-sm tracking-widest relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff41] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button className="md:hidden text-[#4a9a4a] hover:text-[#00ff41] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`md:hidden absolute w-full bg-[#010501]/95 backdrop-blur-lg border-b border-[#0a2a0a] transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
      }`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#4a9a4a] hover:text-[#00ff41] transition-colors font-mono text-base">
              {link.name}
            </a>
          ))} 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;