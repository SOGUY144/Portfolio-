import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lines, setLines] = useState([]);
  
  const bootSequence = [
    "WAYNE_OS_v9.0 BOOT SEQUENCE INITIATED...",
    "ESTABLISHING SECURE CONNECTION...",
    "BYPASSING ARKHAM SECURITY PROTOCOLS... SUCCESS.",
    "LOADING BATCOMPUTER ARCHIVES...",
    "ACCESS GRANTED. WELCOME."
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Typing effect for terminal lines
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        // Wait a bit after finishing typing, then hide preloader
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 1000); // Wait for exit animation
        }, 800);
      }
    }, 400); // Speed of each line appearing
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          exit={{ y: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: '#050505',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#00ff41',
            fontFamily: '"Courier New", Courier, monospace',
            padding: '2rem',
            boxShadow: 'inset 0 0 150px rgba(0,0,0,1)'
          }}
        >
          {/* Scanline overlay for preloader */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 4px, 3px 100%',
            pointerEvents: 'none',
            zIndex: 1
          }}></div>

          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '600px' }}>
            {/* Batman Logo Glowing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 2, times: [0, 0.2, 0.5, 1] }}
              style={{
                width: '80px',
                height: '50px',
                margin: '0 auto 2rem auto',
                filter: 'drop-shadow(0 0 15px rgba(255, 234, 0, 0.8))'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                <path fill="#ffea00" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
              </svg>
            </motion.div>

            {/* Terminal Lines */}
            <div style={{ textAlign: 'left', minHeight: '150px' }}>
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ marginBottom: '0.8rem', fontSize: '1rem', textShadow: '0 0 5px rgba(0, 255, 65, 0.5)' }}
                >
                  {'>'} {line}
                </motion.div>
              ))}
              
              {/* Blinking Cursor */}
              {lines.length < bootSequence.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ display: 'inline-block', width: '10px', height: '1rem', background: '#00ff41' }}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
