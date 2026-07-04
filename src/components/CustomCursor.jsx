import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('glass') ||
        e.target.closest('.glass')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1,
      backgroundColor: 'rgba(255, 234, 0, 1)',
      border: '1px solid rgba(255, 234, 0, 1)',
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      backgroundColor: 'rgba(255, 234, 0, 0.1)',
      border: '1px solid rgba(255, 234, 0, 0.8)',
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? '40px' : '20px',
        height: isHovering ? '40px' : '20px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference'
      }}
    />
  );
}
