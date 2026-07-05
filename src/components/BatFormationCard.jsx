import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BatFormationCard({ children, delay = 0 }) {
  const [showContent, setShowContent] = useState(false);

  // Generate bats that start from outside and converge to the center
  const bats = useMemo(() => Array.from({ length: 25 }).map((_, i) => {
    // Start them in a wide circle around the card
    const angle = Math.random() * Math.PI * 2;
    const distance = 300 + Math.random() * 400; // start 300-700px away
    const startX = Math.cos(angle) * distance;
    const startY = Math.sin(angle) * distance;

    // They will fly towards 0, 0
    const batDelay = delay + Math.random() * 0.4; // Stagger them
    const duration = 0.8 + Math.random() * 0.5; // Fast fly in
    const scale = 0.5 + Math.random() * 1.5; 

    return { id: i, startX, startY, delay: batDelay, duration, scale, angle };
  }), [delay]);

  useEffect(() => {
    // The bats animation takes ~ 1.5s max per card + delay
    // We show the content slightly before the bats completely vanish
    const timer = setTimeout(() => {
      setShowContent(true);
    }, (delay * 1000) + 800);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* The actual certificate content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={showContent ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>

      {/* The bat swarm formation effect */}
      {!showContent && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          width: 0, 
          height: 0, 
          zIndex: 20,
          pointerEvents: 'none' 
        }}>
          {bats.map((bat) => (
            <motion.div
              key={bat.id}
              initial={{ x: bat.startX, y: bat.startY, scale: bat.scale, opacity: 0, rotate: (bat.angle * 180) / Math.PI - 90 }}
              animate={{ 
                x: 0, 
                y: 0, 
                scale: 0.2, // Shrink as they form the card
                opacity: [0, 1, 1, 0] // Fade in quickly, then fade out as they hit center
              }}
              transition={{
                duration: bat.duration, 
                delay: bat.delay, 
                ease: 'easeIn',
                opacity: { times: [0, 0.2, 0.8, 1], duration: bat.duration, delay: bat.delay }
              }}
              style={{
                position: 'absolute',
                filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.8))',
                marginLeft: '-30px', 
                marginTop: '-15px'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 24 24">
                 <path fill="#0a0a0a" stroke="#ffea00" strokeWidth="0.8" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
              </svg>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
