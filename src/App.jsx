import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Mindset from './components/Mindset';
import Contact from './components/Contact';
import Background from './components/Background';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <CustomCursor />
      <Preloader onComplete={() => setLoading(false)} />
      <Background />
      <MusicPlayer />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero loading={loading} />
        <About />
        <Projects />
        <Mindset />
        <Contact />
      </div>
    </>
  );
}

export default App;
