import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Black Hole Core */}
      <motion.div
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          backgroundColor: '#000',
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 15px 2px rgba(139, 92, 246, 0.8)' // Purple glow
        }}
      />

      {/* Event Horizon Ring */}
      <motion.div
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 100, damping: 10 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '48px',
          height: '48px',
          border: '2px solid rgba(139, 92, 246, 0.3)', // Faint purple ring
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          boxShadow: 'inset 0 0 10px rgba(139, 92, 246, 0.2)'
        }}
      />
    </>
  );
}
