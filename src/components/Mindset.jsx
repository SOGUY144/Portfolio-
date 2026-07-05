import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Mindset() {
  return (
    <section id="mindset" style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '100px 5%',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', margin: '0 0 1rem 0', textTransform: 'uppercase' }}>
          Mindset <span style={{ color: 'var(--accent-color)' }}>& Attitude</span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', letterSpacing: '1px' }}>แนวคิด วิธีการรับมือกับปัญหา และการทำงานร่วมกับผู้อื่น</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', position: 'relative' }}>
        
        {/* Background glow lines can be added here if needed */}

        <motion.div 
          className="glass" 
          style={{ 
            padding: '3rem', 
            borderRadius: '24px', 
            borderTop: '4px solid var(--accent-color)', 
            background: 'rgba(15, 23, 42, 0.5)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden'
          }} 
          whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(255, 234, 0, 0.15)' }}
          whileInView={{ y: 0, opacity: 1 }} 
          initial={{ y: 50, opacity: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: 'rgba(255, 234, 0, 0.05)', fontWeight: '900', lineHeight: 1 }}>01</div>
          <h4 style={{ fontSize: '1.8rem', marginTop: 0, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '800' }}>การจัดการความขัดแย้ง</h4>
          <p style={{ color: '#cbd5e1', lineHeight: '1.8', margin: 0, fontSize: '1.1rem' }}>{content.mindset.conflictResolution}</p>
        </motion.div>

        <motion.div 
          className="glass" 
          style={{ 
            padding: '3rem', 
            borderRadius: '24px', 
            borderTop: '4px solid #00e5ff', 
            background: 'rgba(15, 23, 42, 0.5)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '3rem' // Stagger effect
          }} 
          whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0, 229, 255, 0.15)' }}
          whileInView={{ y: 0, opacity: 1 }} 
          initial={{ y: 50, opacity: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ delay: 0.2 }}
        >
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '8rem', color: 'rgba(0, 229, 255, 0.05)', fontWeight: '900', lineHeight: 1 }}>02</div>
          <h4 style={{ fontSize: '1.8rem', marginTop: 0, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '800' }}>ความสนใจด้านเทคโนโลยี</h4>
          <p style={{ color: '#cbd5e1', lineHeight: '1.8', margin: 0, fontSize: '1.1rem' }}>{content.mindset.techInterest}</p>
        </motion.div>
      </div>
    </section>
  );
}
