import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function About() {
  return (
    <section id="about" style={{ 
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 5%',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1200px',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Column: Title & Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 400px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 1.5rem 0' }}>
            <div style={{ width: '50px', height: '2px', background: 'var(--accent-color)', boxShadow: '0 0 15px var(--accent-color)' }}></div>
            <span style={{ color: 'var(--accent-color)', letterSpacing: '4px', fontWeight: '900', textTransform: 'uppercase', fontSize: '1rem' }}>01 / ABOUT ME</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', margin: '0 0 1.5rem 0', lineHeight: '1.1', fontWeight: '900', textTransform: 'uppercase' }}>
            Who is <br/>
            <span style={{ color: 'var(--accent-color)', textShadow: '0 0 30px rgba(255, 234, 0, 0.3)' }}>{content.hero.name}?</span>
          </h2>

          <p style={{ color: '#64748b', fontSize: '1.2rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '600', marginBottom: '2rem' }}>
            Alias: {content.hero.alias}
          </p>
        </motion.div>

        {/* Right Column: Bento Box Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {/* Main Story Box */}
          <div className="glass" style={{ 
            padding: '3rem', 
            borderRadius: '24px', 
            borderLeft: '4px solid var(--accent-color)',
            background: 'rgba(15, 23, 42, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: '1.8', margin: 0, fontWeight: '400' }}>
              {content.about.story}
            </p>
          </div>

          {/* Mini Stats/Tags Box */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: '24px', background: 'rgba(15, 23, 42, 0.4)', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '2rem', fontWeight: '900' }}>3+</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Hackathons</p>
            </div>
            <div className="glass" style={{ padding: '2rem', borderRadius: '24px', background: 'rgba(15, 23, 42, 0.4)', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-color)', fontSize: '2rem', fontWeight: '900' }}>100%</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Dedication</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
