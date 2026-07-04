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
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '100px 5%',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', margin: '0 0 1rem 0' }}>Let's Connect</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Have a project in mind or just want to say hi? Send me a transmission.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          maxWidth: '600px',
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

        <div style={{ marginTop: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-around' }}>
          <span>{content.contact.email}</span>
          <span>{content.contact.github}</span>
        </div>
      </motion.div>
    </section>
  );
}
