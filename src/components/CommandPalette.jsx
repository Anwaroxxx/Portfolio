import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, ChevronRight, Command } from "lucide-react";

const CommandPalette = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to Portfolio OS v4.2.0 (LTS)" },
    { type: "system", content: "Kernel: React-18.x-Antigravity-Edition" },
    { type: "system", content: "Type 'help' or 'man' for available commands." },
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
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
      "  echo [text]   - Print text",
      "  man [cmd]     - Manual for command",
    ],
    man: (args) => {
      const cmd = args[0];
      const manuals = {
        ls: ["Usage: ls [-la]", "Lists the available sections of the portfolio.", "Use -la for more verbose output."],
        cd: ["Usage: cd [section]", "Changes the current active view to the specified section."],
        whoami: ["Usage: whoami", "Displays current user profile information."],
        neofetch: ["Usage: neofetch", "Shows system status and aesthetic hardware info."],
        echo: ["Usage: echo [text]", "Prints strings to the terminal."],
        clear: ["Usage: clear", "Wipes the terminal history clean."],
      };
      return manuals[cmd] || ["No manual entry for " + (cmd || "nothing")];
    },
    ls: (args) => {
      if (args.includes("-la")) {
        return [
          "drwxr-xr-x  2 anwar root  4096 Apr  9 11:42 .",
          "drwxr-xr-x  4 anwar root  4096 Apr  9 11:42 ..",
          "-rw-r--r--  1 anwar staff  892 Apr  9 11:42 home.jsx",
          "-rw-r--r--  1 anwar staff 2145 Apr  9 11:42 about.jsx",
          "-rw-r--r--  1 anwar staff 4102 Apr  9 11:42 skills.jsx",
          "-rw-r--r--  1 anwar staff 8921 Apr  9 11:42 projects.jsx",
          "-rw-r--r--  1 anwar staff 1201 Apr  9 11:42 contact.jsx",
        ];
      }
      return ["home", "about", "skills", "projects", "experience", "contact"];
    },
    whoami: () => [
      "ANWAR",
      "------------------",
      "Primary Skill: Full Stack Wizardry",
      "Current Focus: Building high-performance web experiences",
      "Vibe: Highly optimized terminal addict",
    ],
    neofetch: () => [
      "      .---.      OS: PortfolioOS v4.2.0 x86_64",
      "     /     \\     Host: Custom-Vite-Rig",
      "    | () () |    Kernel: 6.9.4-antigravity",
      "     \\  ^  /     Uptime: ∞ (Infinite Passion)",
      "      |||||      Packages: 1337 (aur)",
      "      |||||      Shell: anwarsh 5.0",
      "                 Resolution: 4K_Aesthetics",
      "                 DE: Terminal-UI",
      "                 WM: Framer-Motion",
      "                 CPU: Logic-Engine @ 4.2GHz",
      "                 GPU: Pixel-Perfect-Render",
      "                 Memory: 16GiB / 64GiB (Unlimited Potential)",
    ],
    matrix: () => {
      window.location.hash = "home";
      return ["System: Optimizing reality... Welcome to the source."];
    },
    echo: (args) => [args.join(" ")],
    sudo: () => ["Permission denied: User 'anwar' is not in the sudoers file. This incident will be reported (to anwar)."],
    clear: () => {
      setHistory([]);
      return null;
    },
    exit: () => {
      onClose();
      return null;
    },
    socials: () => [
      "GitHub:   https://github.com/Anwaroxxx",
      "LinkedIn: https://linkedin.com/in/anwar-azarzou",
      "Discord:  anwar.terminal",
    ],
    cd: (args) => {
      const section = args[0];
      const validSections = ["home", "about", "skills", "projects", "experience", "contact"];
      if (validSections.includes(section)) {
        window.location.hash = section;
        onClose();
        return [`[SUCCESS] Moved to /${section}`];
      }
      return [`[ERROR] cd: ${section}: No such directory`];
    },
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const parts = input.trim().split(" ");
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1);

      setHistory((prev) => [...prev, { type: "input", content: input }]);

      if (commands[cmd]) {
        const result = commands[cmd](args);
        if (result) {
          setHistory((prev) => [...prev, ...result.map((line) => ({ type: "system", content: line }))]);
        }
      } else if (input.length > 0) {
        setHistory((prev) => [...prev, { type: "error", content: `bash: ${cmd}: command not found` }]);
      }

      setInput("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const availableCmds = Object.keys(commands);
      const matches = availableCmds.filter(c => c.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="w-full max-w-2xl bg-[#010801]/95 border border-[#00ff41]/40 rounded-lg shadow-[0_0_80px_rgba(0,255,65,0.2)] overflow-hidden flex flex-col h-[450px]"
          >
            {/* Header / Title Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#00ff41]/20 bg-[#00ff41]/10">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#00ff41]" />
                  <span className="font-mono text-[10px] text-[#00ff41]/70 uppercase tracking-widest font-bold">anwar@portfolio: ~</span>
                </div>
              </div>
              <button onClick={onClose} className="text-[#00ff41]/40 hover:text-[#ff5f56] transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Viewport */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 font-mono text-sm space-y-1.5 custom-scrollbar selection:bg-[#00ff41] selection:text-black"
            >
              {history.map((item, i) => (
                <div key={i} className={`whitespace-pre-wrap ${
                  item.type === "error" ? "text-red-500" : 
                  item.type === "input" ? "text-white" : "text-[#00ff41]"
                }`}>
                  {item.type === "input" && <span className="text-[#00ff41] mr-2">anwar@portfolio:~$</span>}
                  {item.content}
                </div>
              ))}
            </div>

            {/* Input Line */}
            <div className="px-5 py-4 bg-[#00ff41]/5 border-t border-[#00ff41]/10 flex items-center gap-2">
              <span className="text-[#00ff41] font-mono whitespace-nowrap">anwar@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Type command..."
                autoFocus
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-[#00ff41]/20"
              />
              <div className="hidden sm:flex items-center gap-2 px-2 py-1 bg-[#00ff41]/10 border border-[#00ff41]/20 rounded text-[9px] text-[#00ff41]/60 font-mono">
                <Command size={10} /> <span>TAB TO AUTOCOMPLETE</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
