import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-6 bg-[#00ff41] z-[10000] pointer-events-none mix-blend-difference hidden sm:block"
      animate={{
        x: position.x + 10,
        y: position.y + 10,
        scaleY: isPointer ? 0.5 : 1,
        scaleX: isPointer ? 2 : 1,
        opacity: [1, 0, 1],
      }}
      transition={{
        x: { type: 'spring', damping: 20, stiffness: 300, mass: 0.5 },
        y: { type: 'spring', damping: 20, stiffness: 300, mass: 0.5 },
        opacity: { repeat: Infinity, duration: 1, ease: "stepEnd" }
      }}
      style={{
        boxShadow: '0 0 10px #00ff41',
      }}
    />
  );
};

export default TerminalCursor;
