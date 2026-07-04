import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function About() {
  return (
    <section id="about" style={{ 
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'center',
      padding: '0 10%',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '40px', height: '2px', background: '#38bdf8' }}></div>
          <span style={{ color: '#38bdf8', letterSpacing: '2px', fontWeight: 'bold' }}>01 ABOUT ME</span>
        </div>
        
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1.5rem 0', lineHeight: '1.1' }}>
          Who is <br/>
          <span style={{ color: '#ff0040' }}>{content.hero.name}?</span>
        </h2>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', marginTop: '2rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.8', margin: 0 }}>
            {content.about.story}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
