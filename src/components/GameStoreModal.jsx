import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function GameStoreModal({ game, onClose }) {
  if (!game) return null;

  return createPortal(
    <AnimatePresence>
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          padding: '2rem'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, type: 'spring' }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#161925', // Dark bluish-grey like Steam/Itch
            width: '100%',
            maxWidth: '900px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative'
          }}
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              background: 'rgba(0,0,0,0.5)',
              border: 'none',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,0,0,0.8)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
          >
            ✕
          </button>

          {/* Hero Banner / Cover */}
          <div style={{ width: '100%', height: '400px', background: '#000', position: 'relative' }}>
            {game.image ? (
              <img 
                src={game.image} 
                alt={game.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444' }}>
                No Cover Image
              </div>
            )}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '150px',
              background: 'linear-gradient(to top, #161925 0%, transparent 100%)'
            }} />
          </div>

          {/* Game Details Area */}
          <div style={{ padding: '0 2.5rem 2.5rem 2.5rem', marginTop: '-40px', position: 'relative', zIndex: 5 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '900', 
              color: '#fff', 
              margin: '0 0 0.5rem 0',
              textShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}>
              {game.title}
            </h1>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {game.genre && game.genre.map((tag, i) => (
                <span key={i} style={{
                  background: 'rgba(255, 234, 0, 0.1)',
                  color: 'var(--accent-color)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(255, 234, 0, 0.2)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <p style={{ 
              color: '#a1a1aa', 
              fontSize: '1.1rem', 
              lineHeight: '1.6', 
              marginBottom: '2.5rem',
              maxWidth: '700px'
            }}>
              {game.shortDescription}
            </p>

            {game.itchLink && (
              <motion.a 
                href={game.itchLink} 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#ff2449', // Itch.io style prominent color
                  color: '#fff',
                  padding: '1rem 2.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '800',
                  fontSize: '1.2rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  boxShadow: '0 8px 20px rgba(255, 36, 73, 0.4)'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                Play on Itch.io
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
