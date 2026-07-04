import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { content } from '../data/content';

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
                <div key={proj.id} style={{ 
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', overflow: 'hidden' 
                }}>
                  {/* Image Placeholder */}
                  <div style={{ height: '200px', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#475569' }}>[Project Screenshot]</span>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '0 0 1rem 0' }}>{proj.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{proj.success}</p>
                    <button style={{ 
                      background: 'transparent', border: '1px solid #ffea00', padding: '0.8rem 1.5rem', borderRadius: '50px', color: '#ffea00', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
                    }} onMouseOver={(e) => { e.currentTarget.style.background = '#ffea00'; e.currentTarget.style.color = '#000'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffea00'; }}>
                      Details <span>→</span>
                    </button>
                  </div>
                </div>
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
              {content.certificates.map(cert => (
                <div key={cert.id} style={{ 
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '1rem', display: 'flex', flexDirection: 'column' 
                }}>
                  {/* Landscape Image Placeholder */}
                  <div style={{ 
                    height: '250px', background: '#0a0a0a', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,234,0,0.1)' 
                  }}>
                    <span style={{ color: '#333' }}>[Certificate Image]</span>
                  </div>
                  <div style={{ padding: '1.5rem 1rem 0.5rem 1rem', textAlign: 'center' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>{cert.title}</h3>
                    <p style={{ color: '#ffea00', fontSize: '0.9rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
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
