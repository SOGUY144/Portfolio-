import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Mindset() {
  return (
    <section id="mindset" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ color: 'var(--text-primary)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem', textAlign: 'center', fontWeight: '900', textTransform: 'uppercase' }}
      >
        Mindset <span style={{ color: 'var(--accent-color)' }}>&</span> Attitude
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <motion.div 
          className="glass" 
          style={{ padding: '2.5rem', borderRadius: '1rem', borderLeft: '4px solid var(--accent-color)', transition: 'all 0.3s ease' }} 
          whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(255, 234, 0, 0.1)' }}
          whileInView={{ x: 0, opacity: 1 }} initial={{ x: -50, opacity: 0 }} viewport={{ once: true }}
        >
          <h4 style={{ fontSize: '1.4rem', marginTop: 0, color: 'var(--text-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Conflict Resolution</h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>{content.mindset.conflictResolution}</p>
        </motion.div>

        <motion.div 
          className="glass" 
          style={{ padding: '2.5rem', borderRadius: '1rem', borderLeft: '4px solid #00e5ff', transition: 'all 0.3s ease' }} 
          whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(0, 229, 255, 0.1)' }}
          whileInView={{ x: 0, opacity: 1 }} initial={{ x: -50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
        >
          <h4 style={{ fontSize: '1.4rem', marginTop: 0, color: 'var(--text-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Tech Interest</h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>{content.mindset.techInterest}</p>
        </motion.div>
      </div>
    </section>
  );
}
