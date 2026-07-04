import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(5, 5, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 5%',
        overflowY: 'auto'
      }}
    >
      {/* Header / Back Button */}
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            fontSize: '1.2rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontWeight: '600',
            transition: 'color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
          onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
        >
          <span>←</span> Back
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        gap: '4rem', 
        maxWidth: '1400px', 
        margin: '0 auto',
        width: '100%'
      }}>
        
        {/* Left Column: Details */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 1rem 0', fontWeight: '900', color: '#fff', textTransform: 'uppercase' }}>
              {project.title}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
              {project.description || project.success}
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent-color)' }}>&lt;/&gt;</div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff' }}>{project.technologies?.length || 0}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Technologies</div>
              </div>
            </div>
            
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2rem', color: '#00e5ff' }}>★</div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#fff' }}>{project.features?.length || 0}</div>
                <div style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Features</div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a 
              href={project.githubLink !== "#" ? project.githubLink : null} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: '1rem',
                textAlign: 'center',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: project.githubLink !== "#" ? '#fff' : '#475569',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: project.githubLink !== "#" ? 'pointer' : 'not-allowed',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              {project.githubLink !== "#" ? "GitHub Repo" : "No Link"}
            </a>
            <a 
              href={project.liveLink !== "#" ? project.liveLink : null} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: '1rem',
                textAlign: 'center',
                borderRadius: '50px',
                border: '1px solid var(--accent-color)',
                color: project.liveLink !== "#" ? '#000' : '#475569',
                background: project.liveLink !== "#" ? 'var(--accent-color)' : 'transparent',
                borderColor: project.liveLink !== "#" ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
                textDecoration: 'none',
                fontWeight: '800',
                textTransform: 'uppercase',
                cursor: project.liveLink !== "#" ? 'pointer' : 'not-allowed'
              }}
            >
              {project.liveLink !== "#" ? "Live Site" : "No Link"}
            </a>
          </div>

          {/* Technologies Tags */}
          {project.technologies && (
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>&lt;/&gt; Technologies Used</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{ 
                    padding: '0.5rem 1.2rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '50px',
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Media & Features */}
        <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Media Placeholder */}
          <div className="glass" style={{ 
            width: '100%', 
            aspectRatio: '16/9', 
            borderRadius: '24px', 
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(0,0,0,0.8))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {project.image ? (
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', cursor: 'pointer'
                }}>
                  <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid #fff', marginLeft: '10px' }}></div>
                </div>
                <span style={{ color: '#475569', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>Video / Image Preview</span>
              </div>
            )}
          </div>

          {/* Features Box */}
          {project.features && (
            <div className="glass" style={{ padding: '2.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15, 23, 42, 0.4)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--accent-color)' }}>✨</span> Key Features
              </h4>
              <ul style={{ color: '#94a3b8', lineHeight: '2', margin: 0, paddingLeft: '1.5rem' }}>
                {project.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </motion.div>,
    document.body
  );
}
