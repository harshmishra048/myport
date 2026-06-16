import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Line, Sparkles as ThreeSparkles, Stars } from '@react-three/drei';
import { ArrowDownRight, Code2, Cpu, Download, Github, Linkedin, Mail, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton.jsx';
import { profile } from '../data/portfolio.js';

const MotionDiv = motion.div;

function Laptop() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.16;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, -0.24, 0]} rotation={[0.08, -0.18, 0]}>
      <mesh position={[0, -0.54, 0.2]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[3.2, 0.12, 2.05]} />
        <meshStandardMaterial color="#0c1224" metalness={0.75} roughness={0.24} />
      </mesh>
      <mesh position={[0, -0.46, 0.24]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[1.0, 0.025, 0.58]} />
        <meshStandardMaterial color="#1f2a44" metalness={0.95} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.42, -0.82]} rotation={[0.04, 0, 0]}>
        <boxGeometry args={[3.05, 1.85, 0.08]} />
        <meshStandardMaterial color="#050816" metalness={0.86} roughness={0.2} emissive="#071b2d" emissiveIntensity={0.65} />
      </mesh>
      <mesh position={[0, 0.42, -0.875]} rotation={[0.04, 0, 0]}>
        <planeGeometry args={[2.74, 1.52]} />
        <meshBasicMaterial color="#07111f" transparent opacity={0.94} />
      </mesh>
      <Html
        transform
        distanceFactor={1.34}
        position={[0, 0.43, -0.93]}
        rotation={[0.04, 0, 0]}
        className="screen-code-wrap"
      >
        <div className="screen-code">
          <span>const builder = "Harsh";</span>
          <span>ship(fullStackApp);</span>
          <span>train(model.insight);</span>
          <span>design(userFirst);</span>
        </div>
      </Html>
    </group>
  );
}

function NeuralNetwork() {
  const networkRef = useRef(null);
  const nodes = useMemo(
    () => [
      [-2.8, 1.3, -0.7],
      [-2.15, 0.2, 0.55],
      [-1.52, 1.88, 0.12],
      [2.45, 1.45, -0.35],
      [2.1, -0.16, 0.48],
      [1.34, 2.14, 0.25],
      [0.28, 2.62, -0.4],
    ],
    [],
  );

  const links = [
    [0, 1],
    [0, 2],
    [2, 6],
    [6, 5],
    [5, 3],
    [3, 4],
    [1, 4],
    [1, 6],
  ];

  useFrame((state) => {
    if (!networkRef.current) return;
    networkRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    networkRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.14;
  });

  return (
    <group ref={networkRef} position={[0, -0.25, -0.2]}>
      {links.map(([start, end]) => (
        <Line
          key={`${start}-${end}`}
          points={[nodes[start], nodes[end]]}
          color="#22d3ee"
          lineWidth={1.2}
          transparent
          opacity={0.42}
        />
      ))}
      {nodes.map((node, index) => (
        <mesh key={node.join('-')} position={node}>
          <sphereGeometry args={[index === 6 ? 0.09 : 0.07, 18, 18]} />
          <meshStandardMaterial
            color={index % 2 ? '#8b5cf6' : '#22d3ee'}
            emissive={index % 2 ? '#6d28d9' : '#0891b2'}
            emissiveIntensity={1.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingArchitecture() {
  const rigRef = useRef(null);

  useFrame((state) => {
    if (!rigRef.current) return;
    rigRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={rigRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.35}>
        <mesh position={[-3.1, -0.2, -0.7]} rotation={[0.35, 0.62, 0.2]}>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
          <meshStandardMaterial color="#22d3ee" metalness={0.45} roughness={0.18} emissive="#0891b2" emissiveIntensity={0.35} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.3}>
        <mesh position={[3.0, 0.72, -0.9]} rotation={[0.1, -0.7, 0.3]}>
          <torusGeometry args={[0.52, 0.018, 18, 74]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.65} roughness={0.12} emissive="#5b21b6" emissiveIntensity={0.55} />
        </mesh>
      </Float>
      <Float speed={1.35} rotationIntensity={0.34} floatIntensity={0.25}>
        <mesh position={[2.6, -1.05, 0.2]} rotation={[0.4, 0.4, 0.2]}>
          <octahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial color="#10b981" metalness={0.55} roughness={0.22} emissive="#047857" emissiveIntensity={0.45} />
        </mesh>
      </Float>
      <mesh position={[0.08, 1.72, -1.35]}>
        <sphereGeometry args={[1.16, 40, 40]} />
        <meshStandardMaterial color="#09111f" wireframe transparent opacity={0.32} emissive="#22d3ee" emissiveIntensity={0.08} />
      </mesh>
    </group>
  );
}

function DeveloperScene() {
  const sceneRef = useRef(null);

  useFrame((state) => {
    if (!sceneRef.current) return;
    sceneRef.current.rotation.x = Math.sin(state.pointer.y * 0.4) * 0.08;
    sceneRef.current.rotation.y = state.pointer.x * 0.16;
  });

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.42} />
      <pointLight position={[4, 4, 5]} intensity={2.2} color="#22d3ee" />
      <pointLight position={[-4, 2, 3]} intensity={1.7} color="#8b5cf6" />
      <spotLight position={[0, 4.2, 4]} angle={0.42} penumbra={0.6} intensity={2.1} color="#f8fafc" />
      <Laptop />
      <NeuralNetwork />
      <FloatingArchitecture />
      <ThreeSparkles count={80} speed={0.3} size={2.2} scale={[7, 3.8, 3]} color="#38bdf8" opacity={0.28} />
      <Stars radius={70} depth={36} count={700} factor={2.5} fade speed={0.3} />
    </group>
  );
}

export default function Hero3D() {
  const heroImage = profile.images.hero || profile.images.portrait;

  return (
    <section id="home" className="hero-section">
      <div className="hero-canvas" aria-hidden="true">
        <Suspense fallback={<div className="hero-canvas__fallback" />}>
          <Canvas camera={{ position: [0, 0.78, 6.4], fov: 43 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: true }}>
            <DeveloperScene />
          </Canvas>
        </Suspense>
      </div>

      <div className="hero-noise" aria-hidden="true" />

      <div className="section-container hero-layout">
        <MotionDiv
          className="hero-content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-kicker">
            <Sparkles size={16} />
            Creative technologist for modern products
          </span>
          <h1>
            Hi, I&apos;m <span>Harsh Mishra</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-copy">{profile.tagline}</p>

          <div className="hero-actions">
            <MagneticButton href="#projects">
              Explore My Work
              <ArrowDownRight size={18} />
            </MagneticButton>
            <MagneticButton href={profile.resume} download="Harsh_Mishra_Resume.txt" variant="ghost">
              Download Resume
              <Download size={18} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="subtle">
              Contact Me
              <Mail size={18} />
            </MagneticButton>
          </div>

          <div className="hero-socials" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={19} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={19} />
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          className="hero-visual-column"
          initial={{ opacity: 0, x: 34, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-card">
            <div className="hero-image-card__glow" />
            <div className="hero-image-card__frame">
              {heroImage ? (
                <img src={heroImage} alt="Harsh Mishra" />
              ) : (
                <div className="hero-image-card__fallback">
                  <span>HM</span>
                </div>
              )}
            </div>
            <div className="hero-image-card__identity">
              <span>Harsh Mishra</span>
              <strong>Creative Developer</strong>
            </div>
            <div className="hero-image-card__chips" aria-hidden="true">
              <span>
                <Code2 size={15} />
                Full Stack
              </span>
              <span>
                <Cpu size={15} />
                AI / ML
              </span>
              <span>
                <Palette size={15} />
                UI/UX
              </span>
            </div>
          </div>

          <div className="hero-signal">
            <span className="hero-signal__status" />
            <p>Available for internships, freelance builds, and product-focused engineering work.</p>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
