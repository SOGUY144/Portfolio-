import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CHARS = '!@#$%^&*()_+|}{[]:;?><,./-=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export default function GlitchText({ text }) {
  const [displayText, setDisplayText] = useState(text.split('').map(char => ({ char, isGlitched: false })));
  const [isHovered, setIsHovered] = useState(false);

  const [isAutoGlitching, setIsAutoGlitching] = useState(false);

  // Auto-glitch loop
  useEffect(() => {
    const loop = setInterval(() => {
      setIsAutoGlitching(true);
      setTimeout(() => {
        setIsAutoGlitching(false);
      }, 600); // Glitch lasts for 600ms
    }, 2000); // Happens every 2 seconds

    return () => clearInterval(loop);
  }, []);

  useEffect(() => {
    let intervalId;
    const shouldGlitch = isHovered || isAutoGlitching;

    if (shouldGlitch) {

      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char) => {
              if (char === ' ') return { char: ' ', isGlitched: false };
              if (Math.random() < 0.3) {
                return { char: CHARS[Math.floor(Math.random() * CHARS.length)], isGlitched: true };
              }
              return { char, isGlitched: false };
            })
        );
      }, 50);
    } else {
      setDisplayText(text.split('').map(char => ({ char, isGlitched: false })));
      if (intervalId) clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isHovered, isAutoGlitching, text]);

  const shouldGlitch = isHovered || isAutoGlitching;

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={shouldGlitch ? {
        x: [0, -2, 2, -1, 1, 0],
        y: [0, 1, -1, 2, -2, 0],
        textShadow: [
          "2px 0 0 red, -2px 0 0 blue",
          "-2px 0 0 red, 2px 0 0 blue",
          "0px 0 0 transparent"
        ]
      } : {
        x: 0,
        y: 0,
        textShadow: "0px 0 0 transparent"
      }}
      transition={{ duration: 0.2 }}
      style={{
        display: 'inline-block',
        position: 'relative',
        color: 'inherit',
        pointerEvents: 'auto'
      }}
    >
      {displayText.map((item, i) => (
        <span key={i} style={{ color: item.isGlitched ? '#000' : 'inherit' }}>
          {item.char}
        </span>
      ))}
    </motion.span>
  );
}
