import React from 'react';
import { motion } from 'framer-motion';

export default function BatWipe({ trigger }) {
  // Generate 25 bats with random properties
  const bats = Array.from({ length: 25 }).map((_, i) => {
    const y = Math.random() * 100; // 0 to 100vh
    const delay = Math.random() * 0.4; // 0 to 0.4s delay for stagger
    const duration = 0.8 + Math.random() * 0.6; // 0.8s to 1.4s travel time
    const scale = 0.5 + Math.random() * 1.5; // size
    
    // Y-wobble
    const yWobble = Math.random() * 40 - 20;

    return { id: i, y, delay, duration, scale, yWobble };
  });

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
          initial={{ x: '-20vw', y: `${bat.y}vh`, scale: bat.scale }}
          animate={trigger ? { 
            x: '120vw', 
            y: [`${bat.y}vh`, `${bat.y + bat.yWobble}vh`, `${bat.y}vh`]
          } : { x: '-20vw', y: `${bat.y}vh` }}
          transition={{
            x: { duration: bat.duration, delay: bat.delay, ease: 'easeInOut' },
            y: { duration: bat.duration, delay: bat.delay, repeat: Infinity, repeatType: 'mirror' }
          }}
          style={{
            position: 'absolute',
            filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.8))'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 24 24">
             {/* Same Bat Shape as 3D logo but filled black with yellow glow optionally */}
             <path fill="#0a0a0a" stroke="#ffea00" strokeWidth="0.2" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
