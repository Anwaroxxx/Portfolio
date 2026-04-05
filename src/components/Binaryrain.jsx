import { useEffect, useRef } from "react";

const BinaryRain = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const fontSize = 14;
    const columns = Math.floor(w / fontSize);
    const drops = Array(columns).fill(1).map(() => Math.random() * -100);
    const symbols = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";

    const draw = () => {
      // Background with trail effect
      ctx.fillStyle = "rgba(1, 5, 1, 0.15)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      drops.forEach((y, i) => {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        const x = i * fontSize;
        const screenY = y * fontSize;

        // Interaction logic: Mouse proximity glow
        const dx = mouseRef.current.x - x;
        const dy = mouseRef.current.y - screenY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = distance < 100;

        if (isNearMouse) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#00ff41";
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = Math.random() > 0.99 
            ? "#ffffff" 
            : `rgba(0, 255, 65, ${Math.random() * 0.4 + 0.1})`;
        }

        ctx.fillText(text, x, screenY);

        // Reset drops
        if (screenY > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Background depth layer */}
      <div className="absolute inset-0 bg-[#010501] opacity-[0.2]" />
      
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-[0.35]"
      />
      
      {/* Static Scanline Overlay for whole screen */}
      <div className="absolute inset-0 bg-transparent pointer-events-none opacity-5 shadow-[inset_0_0_100px_rgba(0,255,65,0.1)]" />
    </div>
  );
};

export default BinaryRain;