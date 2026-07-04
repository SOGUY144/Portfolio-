import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';

function InteractiveScene() {
  const groupRef = useRef();
  const sphereRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  
  const [hovered, setHover] = useState(false);

  // Parse Batman SVG Path into 3D Shapes
  const batShapes = useMemo(() => {
    try {
      const svgPath = "M.75 8S5 7 8 9c0 0 .5 3.75 2.5 3.75V11s.5 1 1.5 1s1.5-1 1.5-1v1.75C15.5 12.75 16 9 16 9c3-2 7.25-1 7.25-1c-2 1-2.25 4.5-2.25 4.5c-4 0-4 3.25-4 3.25c-5-1-5 2.75-5 2.75s0-3.75-5-2.75c0 0 0-3.25-4-3.25C3 12.5 2.75 9 .75 8";
      const loader = new SVGLoader();
      const data = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${svgPath}"/></svg>`);
      if (data.paths && data.paths.length > 0) {
        return data.paths[0].toShapes(true);
      }
    } catch (e) {
      console.error("SVG Parsing error:", e);
    }
    // Fallback simple shape if parsing fails
    const shape = new THREE.Shape();
    shape.moveTo(0, 0); shape.lineTo(0, 1); shape.lineTo(1, 1); shape.lineTo(1, 0); shape.lineTo(0, 0);
    return [shape];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // 1. Mouse-Reactive Physics (Parallax)
    // The entire group looks towards the mouse cursor
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.pointer.y * 0.6, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.6, 0.05);
    }

    // 2. Floating Elements (Neon Rings) rotating on different axes
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.2;
      ring2Ref.current.rotation.y = t * 0.4;
    }

    // 3. Hover Distortion & Color Morphing on the main shape (Batman Logo)
    if (sphereRef.current) {
      // Base rotation (Math.PI to flip it right-side up, fixed X axis so it stays straight)
      sphereRef.current.rotation.x = Math.PI;
      // Spin only on Y axis
      sphereRef.current.rotation.y = t * 0.3;
      
      // Scale up the bat so it's much more prominent
      sphereRef.current.scale.setScalar(THREE.MathUtils.lerp(sphereRef.current.scale.x, hovered ? 0.45 : 0.35, 0.1));
      
      // Morph color from metallic grey/black to glowing golden yellow on hover
      const targetColor = new THREE.Color(hovered ? '#ffea00' : '#222222');
      sphereRef.current.material.color.lerp(targetColor, 0.1);
      
      // Increase metallic feel
      sphereRef.current.material.metalness = THREE.MathUtils.lerp(sphereRef.current.material.metalness, hovered ? 0.5 : 1, 0.1);
      sphereRef.current.material.roughness = THREE.MathUtils.lerp(sphereRef.current.material.roughness, hovered ? 0.2 : 0.1, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {/* The Main Interactive Shape (Batman Logo) */}
          <mesh 
            ref={sphereRef} 
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
          >
            {/* The SVG is 24x24, so we center the geometry to rotate properly */}
            <extrudeGeometry 
              args={[batShapes, { 
                depth: 1.5, 
                bevelEnabled: true, 
                bevelThickness: 0.2, 
                bevelSize: 0.1, 
                bevelSegments: 4, 
                curveSegments: 24 
              }]} 
              onUpdate={(self) => self.center()}
            />
            <meshPhysicalMaterial 
              envMapIntensity={2.5} 
              clearcoat={1} 
              clearcoatRoughness={0.1} 
              metalness={1} 
              roughness={0.1} 
            />
          </mesh>

        {/* Floating Element: Inner Dark Energy Ring */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[4.8, 0.1, 16, 64]} />
          <meshPhysicalMaterial 
            color="#000000" 
            metalness={1}
            roughness={0}
            clearcoat={1}
            envMapIntensity={2}
          />
        </mesh>

        {/* Floating Element: Outer Dark Energy Ring */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[5.5, 0.05, 16, 64]} />
          <meshPhysicalMaterial 
            color="#000000" 
            metalness={1}
            roughness={0}
            clearcoat={1}
            envMapIntensity={2}
          />
        </mesh>
      </Float>
    </group>
  );
}



export default function Background() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#03030a' }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ff0040" />
        <directionalLight position={[0, -10, 10]} intensity={2} color="#38bdf8" />
        
        <Environment preset="city" />

        {/* Dense Starfield serving as our cosmic background */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
        
        <InteractiveScene />

        {/* Post-Processing Effects for the Neon Glow */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
