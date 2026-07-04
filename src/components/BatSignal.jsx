import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BatSignal() {
  const [isActive, setIsActive] = useState(false);

  const toggleSignal = () => {
    if (isActive) return;
    setIsActive(true);
    // Auto turn off after 6 seconds
    setTimeout(() => {
      setIsActive(false);
    }, 6000);
  };

  return (
    <>
      {/* Hidden Trigger Button */}
      <button
        onClick={toggleSignal}
        title="Summon the Batman"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          background: 'transparent',
          border: 'none',
          opacity: 0.15,
          cursor: 'pointer',
          zIndex: 100,
          outline: 'none',
          transition: 'opacity 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
        onMouseOut={(e) => e.currentTarget.style.opacity = 0.15}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path fill="#ffea00" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
        </svg>
      </button>

      {/* Bat-Signal Overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              pointerEvents: 'none',
              zIndex: 9999,
              background: 'radial-gradient(circle at 50% 120%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.6) 80%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* The Beam (Spotlight) */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '150vh', opacity: 0.5 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: '-20vh',
                width: '400px',
                background: 'linear-gradient(to top, rgba(255, 255, 255, 0.4), transparent)',
                clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0% 100%)',
                filter: 'blur(25px)',
                transformOrigin: 'bottom center',
                animation: 'sway 4s ease-in-out infinite alternate'
              }}
            />
            
            {/* The Bat Symbol in the sky (Clouds) */}
            <motion.div
              initial={{ scale: 0, y: 200, opacity: 0 }}
              animate={{ scale: 1, y: -100, opacity: 0.9 }}
              exit={{ scale: 0, y: 0, opacity: 0 }}
              transition={{ duration: 2, type: 'spring' }}
              style={{
                filter: 'drop-shadow(0 0 40px rgba(255,255,255,1))',
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
                padding: '50px',
                borderRadius: '50%'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="150" viewBox="0 0 24 24">
                <path fill="#000" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes sway {
          0% { transform: rotate(-5deg); }
          100% { transform: rotate(5deg); }
        }
      `}} />
    </>
  );
}
