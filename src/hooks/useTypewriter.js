import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 100, pauseAfter = 2000) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % (Array.isArray(text) ? text.length : 1));
      }
    } else {
      const targetText = Array.isArray(text) ? text[index] : text;
      
      if (displayedText.length < targetText.length) {
        timeout = setTimeout(() => {
          const nextChar = targetText[displayedText.length];
          // Random glitch character injection
          if (Math.random() > 0.95) {
            setDisplayedText(displayedText + "█");
            setTimeout(() => setDisplayedText(displayedText + nextChar), 50);
          } else {
            setDisplayedText(displayedText + nextChar);
          }
        }, speed + (Math.random() * 50));
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseAfter);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, text, speed, pauseAfter]);

  return displayedText;
};

export default useTypewriter;
