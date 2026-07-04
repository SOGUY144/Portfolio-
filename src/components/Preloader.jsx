import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, User, Globe } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Scroll to top on reload so preloader doesn't drop you randomly in the middle
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Give time for exit animation
    }, 2500);
    
    return () => clearTimeout(timer);
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
            background: '#050510',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}
          >
            <div style={{ padding: '1rem', background: '#1e293b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code size={20} color="#38bdf8" />
            </div>
            <div style={{ padding: '1rem', background: '#1e293b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={20} color="#e879f9" />
            </div>
            <div style={{ padding: '1rem', background: '#1e293b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={20} color="#ff0040" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4 } }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              textAlign: 'center',
              fontWeight: '900',
              lineHeight: '1.2',
              margin: '0 0 2rem 0',
              letterSpacing: '-1px'
            }}
          >
            Welcome to my <br />
            Portfolio Website
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ delay: 0.8 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.8rem 2rem',
              borderRadius: '2rem',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.9rem',
              letterSpacing: '1px',
              color: '#cbd5e1'
            }}
          >
            www.dii9.future.app
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
