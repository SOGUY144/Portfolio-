import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BatBurst({ active }) {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (active) {
      setTrigger(true);
      const timer = setTimeout(() => setTrigger(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  const bats = useMemo(() => Array.from({ length: 40 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    // Calculate distance in pixels (enough to go offscreen)
    const distance = 800 + Math.random() * 800; 
    
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    const delay = Math.random() * 0.15; 
    const duration = 0.8 + Math.random() * 0.5;
    const scale = 0.5 + Math.random() * 2; 

    return { id: i, destX, destY, delay, duration, scale, angle };
  }), []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 99999, // Ensure it's on top of everything
      display: trigger ? 'block' : 'none' // Hide container when not active
    }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0 }}>
        {trigger && bats.map((bat) => (
          <motion.div
            key={bat.id}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: (bat.angle * 180) / Math.PI + 90 }}
            animate={{ 
              x: bat.destX, 
              y: bat.destY, 
              scale: bat.scale,
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: bat.duration, 
              delay: bat.delay, 
              ease: 'easeOut',
              opacity: { times: [0, 0.7, 1], duration: bat.duration, delay: bat.delay }
            }}
            style={{
              position: 'absolute',
              filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.8))',
              marginLeft: '-30px', 
              marginTop: '-15px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 24 24">
               <path fill="#0a0a0a" stroke="#ffea00" strokeWidth="1" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
