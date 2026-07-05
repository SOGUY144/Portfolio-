import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertModal({ image, onClose }) {
  if (!image) return null;

  return createPortal(
    <AnimatePresence>
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          background: 'rgba(0, 0, 0, 0.9)', 
          backdropFilter: 'blur(10px)',
          zIndex: 10000, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          cursor: 'zoom-out'
        }}
        onClick={onClose}
      >
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, type: 'spring' }}
          src={image}
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
          onClick={onClose}
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
      </div>
    </AnimatePresence>,
    document.body
  );
}
