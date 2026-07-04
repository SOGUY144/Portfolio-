import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass"
      style={{ 
        position: 'fixed', 
        top: '20px', 
        left: '50%', 
        x: '-50%', // Framer motion transform instead of transform: translateX
        width: '90%', 
        maxWidth: '1000px', 
        zIndex: 100, 
        padding: '1.2rem 3rem', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}
    >
      <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '1px', background: 'linear-gradient(90deg, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        DII 9 Portfolio
      </div>
      <div style={{ display: 'flex', gap: '3rem' }}>
        {['Home', 'About', 'Portfolio', 'Mindset'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase()}`} 
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '500', fontSize: '1rem', transition: 'color 0.3s ease' }}
            whileHover={{ color: '#fff' }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
