import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Mindset() {
  return (
    <section id="mindset" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ color: 'var(--accent-color)', fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        Mindset & Attitude
      </motion.h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <motion.div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem' }} whileInView={{ x: 0, opacity: 1 }} initial={{ x: -50, opacity: 0 }} viewport={{ once: true }}>
          <h4 style={{ fontSize: '1.2rem', marginTop: 0, color: 'white' }}>Conflict Resolution</h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{content.mindset.conflictResolution}</p>
        </motion.div>

        <motion.div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem' }} whileInView={{ x: 0, opacity: 1 }} initial={{ x: 50, opacity: 0 }} viewport={{ once: true }}>
          <h4 style={{ fontSize: '1.2rem', marginTop: 0, color: 'white' }}>Tech Interest</h4>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{content.mindset.techInterest}</p>
        </motion.div>
      </div>
    </section>
  );
}
