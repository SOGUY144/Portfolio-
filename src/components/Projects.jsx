import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { content } from '../data/content';
import ProjectModal from './ProjectModal';
import BatFormationCard from './BatFormationCard';

// Mapping exact icon names for Tech Stack
const iconMap = {
  "React.js": "logos:react",
  "TypeScript": "logos:typescript-icon",
  "Tailwind": "vscode-icons:file-type-tailwind",
  "HTML": "logos:html-5",
  "CSS": "logos:css-3",
  "PHP": "logos:php",
  "Laravel": "logos:laravel",
  "Next.js": "logos:nextjs-icon",
  "JavaScript": "logos:javascript",
  "MySQL": "logos:mysql-icon"
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('Projects');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const tabs = ['Projects', 'Certificates', 'Tech Stack'];

  return (
    <section id="portfolio" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 5%', position: 'relative', zIndex: 10 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', margin: '0 0 1rem 0', textTransform: 'uppercase' }}>
          Portfolio <span style={{ color: '#ffea00' }}>Showcase</span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', letterSpacing: '1px' }}>Explore my journey through projects, certifications, and technical expertise.</p>
      </div>

      {/* Segmented Control / Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
        <div style={{ 
          display: 'flex', 
          background: 'rgba(255,255,255,0.03)', 
          borderRadius: '50px', 
          padding: '8px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '1rem 3rem',
                borderRadius: '50px',
                border: activeTab === tab ? '1px solid #ffea00' : '1px solid transparent',
                background: activeTab === tab ? 'rgba(255,234,0,0.1)' : 'transparent',
                color: activeTab === tab ? '#ffea00' : '#64748b',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                outline: 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProjectId !== null && (
          <ProjectModal 
            project={content.projects.find(p => p.id === selectedProjectId)} 
            onClose={() => setSelectedProjectId(null)} 
          />
        )}
      </AnimatePresence>

      {/* Dynamic Content Areas */}
      <div style={{ minHeight: '500px' }}>
        <AnimatePresence mode="wait">
          
          {/* ================= PROJECTS TAB ================= */}
          {activeTab === 'Projects' && (
            <motion.div 
              key="projects"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}
            >
              {content.projects.map(proj => (
                <motion.div 
                  key={proj.id} 
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 234, 0, 0.2)' }}
                  style={{ 
                    background: 'rgba(15, 23, 42, 0.4)', 
                    border: '1px solid rgba(255, 255, 255, 0.05)', 
                    borderRadius: '24px', 
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.border = '1px solid rgba(255, 234, 0, 0.5)'}
                  onMouseOut={(e) => e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.05)'}
                >
                  {/* Image Placeholder or Actual Image */}
                  <div style={{ 
                    height: '220px', 
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(20,20,30,0.8))', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {proj.image ? (
                      <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span style={{ color: '#475569', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>[Project Snapshot]</span>
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '800', margin: '0 0 1rem 0' }}>{proj.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', flex: 1 }}>{proj.success}</p>
                    <motion.button 
                      onClick={() => setSelectedProjectId(proj.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ 
                        textDecoration: 'none',
                        background: 'transparent', 
                        border: '2px solid var(--accent-color)', 
                        padding: '1rem 2rem', 
                        borderRadius: '50px', 
                        color: 'var(--accent-color)', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: '10px', 
                        transition: 'all 0.3s ease', 
                        fontWeight: '800', 
                        textTransform: 'uppercase', 
                        letterSpacing: '2px'
                      }} 
                      onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = '#000'; }} 
                      onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-color)'; }}
                    >
                      View Mission <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ================= CERTIFICATES TAB ================= */}
          {activeTab === 'Certificates' && (
            <motion.div 
              key="certs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}
            >
              {content.certificates.map((cert, index) => (
                <BatFormationCard key={cert.id} delay={index * 0.2}>
                  <motion.div 
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 234, 0, 0.15)' }}
                  style={{ 
                    background: 'rgba(15, 23, 42, 0.4)', 
                    border: '1px solid rgba(255, 255, 255, 0.05)', 
                    borderRadius: '24px', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'border 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.border = '1px solid rgba(255, 234, 0, 0.4)'}
                  onMouseOut={(e) => e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.05)'}
                >
                  {/* Landscape Image */}
                  <div style={{ 
                    height: '250px', background: 'rgba(0,0,0,0.6)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.05)', overflow: 'hidden'
                  }}>
                    {cert.image ? (
                      <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <span style={{ color: '#475569', fontWeight: '600', letterSpacing: '1px' }}>[Certificate Image]</span>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem 0.5rem 0.5rem 0.5rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '800', margin: '0 0 0.8rem 0' }}>{cert.title}</h3>
                    <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>{cert.issuer} • {cert.date}</p>
                  </div>
                </motion.div>
              </BatFormationCard>
            ))}
          </motion.div>
          )}

          {/* ================= TECH STACK TAB ================= */}
          {activeTab === 'Tech Stack' && (
            <motion.div 
              key="tech"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}
            >
              {content.techStack.map(tech => (
                <motion.div 
                  key={tech.id} 
                  whileHover={{ y: -5, background: '#111', borderColor: '#ffea00', boxShadow: '0 10px 30px rgba(255,234,0,0.1)' }}
                  style={{ 
                    background: '#050505', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
                    borderRadius: '24px', 
                    padding: '2.5rem 1rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    cursor: 'default',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon icon={iconMap[tech.name] || "logos:react"} width="70" height="70" style={{ marginBottom: '1.5rem' }} />
                  <span style={{ color: '#fff', fontWeight: '600', fontSize: '1.1rem' }}>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
