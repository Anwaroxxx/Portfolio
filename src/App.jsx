import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BinaryRain from "./components/Binaryrain";
import PointerNav from "./components/Pointernav";
import CommandPalette from "./components/CommandPalette";
import { aboutMe } from "./data/portfolio";
import { Terminal } from "lucide-react";

function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  // Keyboard shortcut for Command Palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && !isCmdOpen) {
        e.preventDefault();
        setIsCmdOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCmdOpen]);

  return (
    <div className="bg-[#010501] min-h-screen text-gray-200 selection:bg-[#00ff41] selection:text-black font-sans relative">
      <BinaryRain />
      <PointerNav />
      <CommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} />

      {/* Floating UI Trigger for Terminal */}
      <button 
        onClick={() => setIsCmdOpen(true)}
        className="fixed bottom-6 right-6 z-[60] w-12 h-12 bg-[#010801] border border-[#00ff41]/30 rounded-full flex items-center justify-center text-[#00ff41] shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:scale-110 active:scale-95 transition-all group"
        title="Open Terminal (Press /)"
      >
        <Terminal size={20} className="group-hover:rotate-12 transition-transform" />
      </button>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="bg-[#010501] py-8 border-t border-[#0a1a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-mono text-xs text-[#1a4a1a]">
              © {new Date().getFullYear()} {aboutMe.name} — Built with React & Linux vibes
            </p>
            <div className="flex gap-6">
              <a href={aboutMe.github}   target="_blank" rel="noreferrer" className="font-mono text-xs text-[#1a4a1a] hover:text-[#00ff41] transition-colors">GitHub</a>
              <a href={aboutMe.linkedin} target="_blank" rel="noreferrer" className="font-mono text-xs text-[#1a4a1a] hover:text-[#00ff41] transition-colors">LinkedIn</a>
              <a href={aboutMe.discord}  target="_blank" rel="noreferrer" className="font-mono text-xs text-[#1a4a1a] hover:text-[#00ff41] transition-colors">Discord</a>
            </div>
            <p className="font-mono text-xs text-[#0a2a0a] hidden sm:block">
              root@portfolio:~$ shutdown now
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;