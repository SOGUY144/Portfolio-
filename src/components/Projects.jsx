import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { content } from '../data/content';
import ProjectModal from './ProjectModal';
import BatFormationCard from './BatFormationCard';
import GameStoreModal from './GameStoreModal';

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
  "Vanilla JavaScript": "logos:javascript",
  "MySQL": "logos:mysql-icon",
  "Supabase": "logos:supabase-icon",
  "OpenAI Vision": "logos:openai-icon",
  "Firebase": "logos:firebase",
  "Leaflet.js": "logos:leaflet",
  "jsQR": "mdi:qrcode-scan",
  "Node.js": "logos:nodejs-icon",
  "React (Next.js)": "logos:nextjs-icon",
  "Map API (Google Maps)": "logos:google-maps",
  "AI Integration (Gemini AI)": "logos:google-gemini",
  "Tailwind CSS": "vscode-icons:file-type-tailwind"
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('Projects');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedGameId, setSelectedGameId] = useState(null);
  const [selectedCertImage, setSelectedCertImage] = useState(null);
  const tabs = ['Projects', 'Games', 'Certificates', 'Tech Stack'];

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

          {/* ================= GAMES TAB ================= */}
          {activeTab === 'Games' && (
            <motion.div 
              key="games"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}
            >
              {content.games && content.games.map(game => (
                <motion.div 
                  key={game.id} 
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 36, 73, 0.2)' }}
                  onClick={() => setSelectedGameId(game.id)}
                  style={{ 
                    background: 'rgba(22, 25, 37, 0.8)', 
                    border: '1px solid rgba(255, 255, 255, 0.05)', 
                    borderRadius: '16px', 
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.border = '1px solid rgba(255, 36, 73, 0.5)'}
                  onMouseOut={(e) => e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.05)'}
                >
                  <div style={{ height: '200px', width: '100%', background: '#000', overflow: 'hidden' }}>
                    {game.image ? (
                      <img src={game.image} alt={game.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'opacity 0.3s, transform 0.5s' }} 
                           onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.05)' }} 
                           onMouseOut={(e) => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)' }}/>
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>No Image</div>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.5rem 0' }}>{game.title}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {game.genre && game.genre.map((tag, i) => (
                        <span key={i} style={{ color: '#ff2449', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase' }}>
                          {tag}{i < game.genre.length - 1 ? ' • ' : ''}
                        </span>
                      ))}
                    </div>
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
                    transition: 'border 0.3s',
                    cursor: 'pointer'
                  }}
                  onClick={() => cert.image && setSelectedCertImage(cert.image)}
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
      {/* Game Store Modal */}
      <GameStoreModal 
        game={selectedGameId ? content.games.find(g => g.id === selectedGameId) : null} 
        onClose={() => setSelectedGameId(null)} 
      />

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCertImage && createPortal(
          <div 
            style={{ 
              position: 'fixed', 
              top: 0, left: 0, width: '100vw', height: '100vh', 
              background: 'rgba(0, 0, 0, 0.9)', 
              backdropFilter: 'blur(10px)',
              zIndex: 10000, 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'zoom-out'
            }}
            onClick={() => setSelectedCertImage(null)}
          >
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, type: 'spring' }}
              src={selectedCertImage}
              alt="Certificate Fullscreen"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                cursor: 'default'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={() => setSelectedCertImage(null)}
              style={{
                position: 'absolute', top: '20px', right: '30px',
                background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none',
                width: '50px', height: '50px', borderRadius: '50%',
                fontSize: '1.5rem', cursor: 'pointer', transition: 'background 0.2s',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,0,0,0.8)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              ✕
            </button>
          </div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
}
