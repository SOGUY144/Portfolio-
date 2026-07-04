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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 2rem 0' }}>
          <div style={{ width: '40px', height: '2px', background: 'var(--accent-color)', boxShadow: '0 0 10px var(--accent-color)' }}></div>
          <span style={{ color: 'var(--accent-color)', letterSpacing: '3px', fontWeight: '900', textTransform: 'uppercase', fontSize: '0.9rem' }}>01 ABOUT ME</span>
        </div>
        
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1.5rem 0', lineHeight: '1.1', fontWeight: '900', textTransform: 'uppercase' }}>
          Who is <br/>
          <span style={{ color: 'var(--accent-color)', textShadow: '0 0 20px rgba(255, 234, 0, 0.4)' }}>{content.hero.name}?</span>
        </h2>
        
        <div className="glass" style={{ padding: '3rem', borderRadius: '1rem', marginTop: '2.5rem', borderLeft: '4px solid var(--accent-color)' }}>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0, fontWeight: '400' }}>
            {content.about.story}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
