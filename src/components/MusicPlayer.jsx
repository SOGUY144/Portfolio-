import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3; // slightly lower volume so it doesn't blast

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Add custom CSS for the range slider thumb
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #fff;
        cursor: none;
        margin-top: -3px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
      }
      input[type=range]::-moz-range-thumb {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #fff;
        cursor: none;
        border: none;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ 
        position: 'fixed', 
        bottom: '30px', 
        right: '30px', 
        zIndex: 101,
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        width: '300px'
      }}
    >
      {/* Hidden audio element loading the song we moved to public/music/ */}
      <audio ref={audioRef} loop src="/music/call_out_my_name.mp3" />

      {/* Album Art Placeholder */}
      <div style={{ 
        width: '50px', 
        height: '50px', 
        borderRadius: '8px', 
        background: '#334155', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}>
         <img 
           src="/music/cover.png" 
           alt="Album Cover" 
           style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} 
           onError={(e) => { e.target.style.display = 'none'; }}
         />
      </div>

      {/* Info & Progress Container */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {/* Top row: Title/Artist and Play Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '700', lineHeight: '1.2' }}>Call Out My Name</span>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>The Weeknd</span>
          </div>
          
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
              outline: 'none',
              marginLeft: '10px'
            }}
          >
            {isPlaying ? (
              <Icon icon="mdi:pause" width="20" height="20" color="#0f172a" />
            ) : (
              <Icon icon="mdi:play" width="20" height="20" color="#0f172a" style={{ marginLeft: '2px' }} />
            )}
          </motion.button>
        </div>

        {/* Bottom row: Progress Bar & Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#64748b', fontSize: '0.65rem', minWidth: '24px' }}>{formatTime(currentTime)}</span>
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', height: '4px' }}>
            {/* Custom styled range input */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress} 
              onChange={handleSeek}
              style={{
                width: '100%',
                height: '4px',
                WebkitAppearance: 'none',
                background: `linear-gradient(to right, #fff ${progress}%, #334155 ${progress}%)`,
                borderRadius: '2px',
                outline: 'none',
                cursor: 'none',
                margin: 0
              }}
            />
          </div>
          <span style={{ color: '#64748b', fontSize: '0.65rem', minWidth: '24px', textAlign: 'right' }}>{formatTime(duration)}</span>
        </div>

      </div>
    </motion.div>
  );
}
