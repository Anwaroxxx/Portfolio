import { useState, useEffect } from "react";

// Each section maps to a C pointer concept — this is the art
const pointers = [
  { id: "home",       address: "0x0001", label: "home",       type: "char*"     },
  { id: "about",      address: "0x0002", label: "about",      type: "struct*"   },
  { id: "skills",     address: "0x0003", label: "skills",     type: "int[]"     },
  { id: "projects",   address: "0x0004", label: "projects",   type: "void*"     },
  { id: "experience", address: "0x0005", label: "experience", type: "node*"     },
  { id: "contact",    address: "0x0006", label: "contact",    type: "func*"     },
];

const PointerNav = () => {
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState(null);

  // Track which section is in view
  useEffect(() => {
    const observers = [];

    pointers.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1">
      {pointers.map((ptr) => {
        const isActive  = active  === ptr.id;
        const isHovered = hovered === ptr.id;

        return (
          <button
            key={ptr.id}
            onClick={() => handleClick(ptr.id)}
            onMouseEnter={() => setHovered(ptr.id)}
            onMouseLeave={() => setHovered(null)}
            className="group flex items-center justify-end gap-2 cursor-pointer bg-transparent border-none outline-none"
          >
            {/* Tooltip — expands on hover */}
            <div className={`flex flex-col items-end transition-all duration-300 overflow-hidden ${
              isHovered ? "opacity-100 translate-x-0 max-w-[160px]" : "opacity-0 translate-x-2 max-w-0"
            }`}>
              <span className="font-mono text-[10px] text-[#2a6a2a] whitespace-nowrap">
                {ptr.type} *ptr = &amp;{ptr.label}
              </span>
              <span className="font-mono text-[9px] text-[#1a4a1a] whitespace-nowrap">
                // {ptr.address}
              </span>
            </div>

            {/* The dot indicator */}
            <div className="relative flex items-center justify-center w-5 h-5">
              {/* Ping animation when active */}
              {isActive && (
                <span className="absolute inline-flex w-full h-full rounded-full bg-[#00ff41] opacity-20 animate-ping" />
              )}
              <div className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-[#00ff41] shadow-[0_0_10px_#00ff41]"
                  : isHovered
                  ? "w-2.5 h-2.5 bg-[#00ff41]/60"
                  : "w-1.5 h-1.5 bg-[#1a5a1a]"
              }`} />
            </div>

            {/* Arrow — only when active */}
            <div className={`font-mono text-[#00ff41] text-xs transition-all duration-300 ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
            }`}>
              *
            </div>
          </button>
        );
      })}

      {/* Bottom label — memory address flavor */}
      <div className="mt-3 flex flex-col items-end gap-0.5">
        <div className="w-px h-8 bg-gradient-to-b from-[#0a2a0a] to-transparent mx-auto mr-[9px]" />
        <span className="font-mono text-[9px] text-[#0a2a0a] mr-1">
          &amp;stack
        </span>
      </div>
    </div>
  );
};

export default PointerNav;