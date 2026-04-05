import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronRight, Command } from "lucide-react";

const CommandPalette = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to Portfolio OS v4.2.0" },
    { type: "system", content: "Type 'help' for available commands." },
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history]);

  const commands = {
    help: () => [
      "Available commands:",
      "  ls            - List site sections",
      "  cd [section]  - Navigate to section",
      "  whoami        - About the developer",
      "  neofetch      - System information",
      "  matrix        - Enter the source",
      "  clear         - Clear terminal",
      "  exit          - Close terminal",
      "  socials       - View social links",
    ],
    ls: () => ["Sections:", "  home", "  about", "  skills", "  projects", "  experience", "  contact"],
    whoami: () => [
      "User: Anwar",
      "Role: Full Stack Developer",
      "Status: Building the future, one commit at a time.",
    ],
    neofetch: () => [
      "OS: PortfolioOS v4.2.0",
      "Host: Anwar-Zen-Book-Pro",
      "Kernel: React-18.3.1",
      "Uptime: 100% Passion",
      "Packages: 42 (npm)",
      "Shell: anwarsh 5.0",
      "Resolution: Responsive_Ultra_Wide",
      "Terminal: Vite-Terminal",
      "CPU: Self-Taught-Logic 8-Core",
      "Memory: Infinite Creativity",
    ],
    matrix: () => {
      window.location.hash = "home";
      return ["System: Transitioning to the source code..."];
    },
    sudo: () => ["Nice try. Anwar is already root."],
    clear: () => {
      setHistory([]);
      return null;
    },
    exit: () => {
      onClose();
      return null;
    },
    socials: () => ["GitHub: https://github.com/Anwaroxxx", "LinkedIn: https://linkedin.com/in/anwar-azarzou"],
    cd: (args) => {
      const section = args[0];
      const validSections = ["home", "about", "skills", "projects", "experience", "contact"];
      if (validSections.includes(section)) {
        window.location.hash = section;
        onClose();
        return [`Navigating to ${section}...`];
      }
      return [`Error: Section '${section}' not found.`];
    },
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const parts = input.trim().toLowerCase().split(" ");
      const cmd = parts[0];
      const args = parts.slice(1);

      setHistory((prev) => [...prev, { type: "input", content: input }]);

      if (commands[cmd]) {
        const result = commands[cmd](args);
        if (result) {
          setHistory((prev) => [...prev, ...result.map((line) => ({ type: "system", content: line }))]);
        }
      } else if (input.length > 0) {
        setHistory((prev) => [...prev, { type: "error", content: `Command not found: ${cmd}` }]);
      }

      setInput("");
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-2xl bg-[#010801] border border-[#00ff41]/30 rounded-xl shadow-[0_0_50px_rgba(0,255,65,0.15)] overflow-hidden flex flex-col h-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#00ff41]/10 bg-[#00ff41]/5">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-[#00ff41]" />
                <span className="font-mono text-xs text-[#4a9a4a] uppercase tracking-widest">Interactive_Shell</span>
              </div>
              <button 
                onClick={onClose}
                className="text-[#4a9a4a] hover:text-[#ff5f56] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Terminal Body */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-2 custom-scrollbar"
            >
              {history.map((item, i) => (
                <div key={i} className={`${
                  item.type === "error" ? "text-[#ff5f56]" : 
                  item.type === "input" ? "text-[#e0ffe0]" : "text-[#4a9a4a]"
                }`}>
                  {item.type === "input" && <span className="text-[#00ff41] mr-2">$</span>}
                  {item.content}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#00ff41]/5 border-t border-[#00ff41]/10 flex items-center gap-2">
              <ChevronRight size={18} className="text-[#00ff41]" />
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Enter command..."
                className="flex-1 bg-transparent border-none outline-none text-[#00ff41] placeholder:text-[#2a5a2a] font-mono"
              />
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-black/40 rounded border border-[#00ff41]/10 text-[10px] text-[#4a9a4a]">
                <Command size={10} /> <span>+ ENTER</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
