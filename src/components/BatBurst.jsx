import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BatBurst({ active }) {
  const [trigger, setTrigger] = useState(false);

  // When active becomes true, trigger the burst
  useEffect(() => {
    if (active) {
      setTrigger(true);
      // Reset trigger after animation completes (approx 2s) so it can trigger again later
      const timer = setTimeout(() => setTrigger(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  // Generate 35 bats with random properties
  const bats = Array.from({ length: 35 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2; // Random direction in radians
    const distance = 100 + Math.random() * 150; // Distance in vw/vh units
    
    // Calculate destination coordinates
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    const delay = Math.random() * 0.2; // Quick scatter
    const duration = 0.8 + Math.random() * 0.7; // 0.8s to 1.5s
    const scale = 0.5 + Math.random() * 2; // End scale

    return { id: i, destX, destY, delay, duration, scale };
  });

  if (!trigger) return null;

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 50 // Ensures bats fly over the content
    }}>
      {bats.map((bat) => (
        <motion.div
          key={bat.id}
          initial={{ x: '50vw', y: '50vh', scale: 0, opacity: 1, rotate: Math.atan2(bat.destY, bat.destX) * (180 / Math.PI) + 90 }}
          animate={{ 
            x: `calc(50vw + ${bat.destX}vw)`, 
            y: `calc(50vh + ${bat.destY}vh)`, 
            scale: bat.scale,
            opacity: [1, 1, 0] // Fade out at the end
          }}
          transition={{
            duration: bat.duration, 
            delay: bat.delay, 
            ease: 'easeOut',
            opacity: { times: [0, 0.8, 1] }
          }}
          style={{
            position: 'absolute',
            filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.8))',
            marginLeft: '-30px', // Center the bat SVG itself
            marginTop: '-15px'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 24 24">
             <path fill="#0a0a0a" stroke="#ffea00" strokeWidth="0.2" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
