import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending data
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem 0.5rem',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid rgba(255, 234, 0, 0.3)',
    borderRadius: '0px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    marginBottom: '2rem',
    fontFamily: 'inherit'
  };

  return (
    <section id="contact" style={{ 
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
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* Left Column: Text & Socials */}
        <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', margin: '0 0 1rem 0', textTransform: 'uppercase', letterSpacing: '2px' }}>Let's Connect</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: '1.6' }}>
            Have a project in mind or just want to say hi? <br/>
            Send a transmission to the Batcave.
          </p>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <motion.a 
              href={content.contact.github} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
              style={{ color: '#94a3b8', transition: 'color 0.3s' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .08 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
            </motion.a>
            
            <motion.a 
              href={content.contact.instagram} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
              style={{ color: '#94a3b8', transition: 'color 0.3s' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
            </motion.a>

            <motion.a 
              href={content.contact.facebook} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: 'var(--accent-color)' }}
              style={{ color: '#94a3b8', transition: 'color 0.3s' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
            </motion.a>
          </div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            flex: '1 1 500px',
            width: '100%',
            background: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '3rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          <form onSubmit={handleSubmit}>
          
          <motion.input 
            type="text" 
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            style={inputStyle}
            whileFocus={{ 
              borderColor: 'var(--accent-color)',
              boxShadow: '0 10px 10px -10px var(--accent-color)'
            }}
          />

          <motion.input 
            type="email" 
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            style={inputStyle}
            whileFocus={{ 
              borderColor: 'var(--accent-color)',
              boxShadow: '0 10px 10px -10px var(--accent-color)'
            }}
          />

          <motion.textarea 
            placeholder="Your Message..."
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            style={{ ...inputStyle, resize: 'none' }}
            whileFocus={{ 
              borderColor: 'var(--accent-color)',
              boxShadow: '0 10px 10px -10px var(--accent-color)'
            }}
          />

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: '100%',
              padding: '1rem',
              background: isSubmitted ? '#10b981' : (isSubmitting ? '#222' : 'var(--accent-color)'),
              color: isSubmitted ? '#fff' : (isSubmitting ? '#666' : '#000'),
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              boxShadow: isSubmitted 
                ? '0 0 20px rgba(16, 185, 129, 0.6)' 
                : (isSubmitting ? 'none' : '0 0 20px rgba(255, 234, 0, 0.4)'),
              transition: 'all 0.3s ease'
            }}
          >
            {isSubmitting ? 'Transmitting...' : (isSubmitted ? 'Transmission Sent! ✓' : 'Send Message')}
          </motion.button>
        </form>
        </motion.div>
      </div>
    </section>
  );
}
