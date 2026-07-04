import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { content } from '../data/content';
import GlitchText from './GlitchText';

export default function Hero({ loading }) {
  const animateState = loading ? "initial" : "animate";

  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '4rem',
      alignItems: 'center', 
      padding: '0 10%', 
      pointerEvents: 'none',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Left Side: Text Content */}
      <motion.div 
        initial="initial"
        animate={animateState}
        variants={{
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
        }}
        style={{ zIndex: 10, pointerEvents: 'auto' }}
      >
        <p style={{ 
          fontSize: '1rem', 
          letterSpacing: '0.3em', 
          textTransform: 'uppercase', 
          margin: '0 0 1.5rem 0',
          fontWeight: '600',
          background: 'linear-gradient(90deg, #38bdf8, #e879f9)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          — Welcome to my universe
        </p>
        
        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
          margin: '0', 
          lineHeight: '1',
          fontWeight: '900',
          textShadow: '0 20px 40px rgba(0,0,0,0.8)'
        }}>
          Hi, I'm <br/>
          <span style={{ 
            color: 'transparent', 
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)',
            position: 'relative',
            display: 'inline-block',
            marginTop: '0.2em'
          }}>
            <GlitchText text={content.hero.name} />
            {/* Soft glow behind the stroked text */}
            <span style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)',
              filter: 'blur(10px)',
              zIndex: -1
            }}><GlitchText text={content.hero.name} /></span>
          </span>
        </h1>

        <div style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
          marginTop: '2rem', 
          fontWeight: '400', 
          color: '#cbd5e1', 
          height: '100px',
          textShadow: '0 5px 15px rgba(0,0,0,0.5)'
        }}>
          <TypeAnimation
            sequence={[
              content.hero.tagline,
              1000,
              'Digital Innovator.',
              1000,
              'Problem Solver.',
              1000,
              'Future DII Student.',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </div>

        <motion.a
          href="#about"
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3rem', 
            padding: '1.2rem 3rem', 
            background: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            color: '#ffea00', 
            textDecoration: 'none', 
            fontWeight: '800',
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            pointerEvents: 'auto',
            border: '2px solid #ffea00',
            borderRadius: '4px',
            boxShadow: '0 0 15px rgba(255, 234, 0, 0.1)',
            clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)',
          }}
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: '#ffea00',
            color: '#000',
            boxShadow: '0 0 40px rgba(255, 234, 0, 0.6)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          ENTER BATCAVE
          <svg style={{ marginLeft: '12px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Right Side: The ID Badge */}
      <div style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', pointerEvents: 'auto', zIndex: 10 }}>
        <motion.div
          initial="initial"
          animate={animateState}
          variants={{
            initial: { y: -1000, rotate: -20 },
            animate: { 
              y: 0, 
              rotate: -5, 
              transition: { type: "spring", damping: 12, stiffness: 100, mass: 2, delay: 0.2 } 
            }
          }}
          whileHover={{ rotate: 0, scale: 1.05, transition: { type: 'spring', stiffness: 200 } }}
          style={{ 
            position: 'relative',
            width: '300px',
            height: '450px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2.5rem 1.5rem 1.5rem 1.5rem',
            color: '#fff',
            cursor: 'grab'
          }}
        >
          {/* The Lanyard / String */}
          <div style={{ 
            position: 'absolute', 
            top: '-500px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            width: '24px', 
            height: '500px', 
            background: 'linear-gradient(to right, #0f172a, #1e293b, #0f172a)',
            zIndex: -1,
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
          }}>
            {/* Lanyard text pattern */}
            <div style={{ writingMode: 'vertical-rl', color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', letterSpacing: '3px', fontWeight: 'bold', paddingTop: '20px', height: '100%', textAlign: 'center' }}>
              DII PORTFOLIO DII PORTFOLIO
            </div>
          </div>
          
          {/* Metal Clip connecting lanyard to badge */}
          <div style={{ 
            position: 'absolute',
            top: '-15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '16px',
            height: '35px',
            background: 'linear-gradient(135deg, #e2e8f0, #94a3b8, #64748b)',
            borderRadius: '8px',
            boxShadow: '0 5px 10px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.8)'
          }}>
             {/* The hole clip on the badge itself */}
             <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '6px' }}></div>
          </div>

          {/* Batman Logo */}
          <div style={{
            position: 'absolute',
            top: '25px',
            right: '20px',
            width: '50px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 0 10px rgba(255, 234, 0, 0.6))',
            opacity: 0.9
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
              <path fill="#ffea00" d="M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8" />
            </svg>
          </div>

          {/* Profile Image Placeholder */}
          <div style={{ 
            width: '100%', 
            height: '240px', 
            background: 'rgba(0, 0, 0, 0.4)', 
            borderRadius: '16px',
            marginTop: '1.5rem',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            {/* Viewfinder crosshairs */}
            <div style={{ position: 'absolute', top: 10, left: 10, width: 10, height: 10, borderTop: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)'}}></div>
            <div style={{ position: 'absolute', top: 10, right: 10, width: 10, height: 10, borderTop: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)'}}></div>
            <div style={{ position: 'absolute', bottom: 10, left: 10, width: 10, height: 10, borderBottom: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)'}}></div>
            <div style={{ position: 'absolute', bottom: 10, right: 10, width: 10, height: 10, borderBottom: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)'}}></div>

            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textAlign: 'center', padding: '1rem', letterSpacing: '1px' }}>
              [รอใส่รูปภาพของคุณ]
            </span>
          </div>

          {/* Badge Info */}
          <div style={{ marginTop: 'auto', textAlign: 'center', width: '100%' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.6rem', color: '#fff', letterSpacing: '1px', fontWeight: '800' }}>{content.hero.name}</h3>
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', margin: '0.8rem 0' }}></div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#38bdf8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Future DII 9
            </p>
          </div>
          
          {/* Barcode / Scan decor */}
          <div style={{ 
            display: 'flex', 
            gap: '3px', 
            marginTop: '1.2rem', 
            height: '25px',
            width: '100%',
            justifyContent: 'center',
            opacity: 0.7
          }}>
            {[1, 3, 1, 4, 1, 2, 5, 2, 1, 3, 2, 1, 4].map((w, i) => (
              <div key={i} style={{ width: `${w * 2}px`, background: '#fff', height: '100%', borderRadius: '1px' }}></div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  );
}
