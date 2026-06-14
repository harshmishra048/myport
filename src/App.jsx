import { lazy, Suspense, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import SkillsOrbit from './components/SkillsOrbit.jsx';
import Projects from './components/Projects.jsx';
import ExperienceTimeline from './components/ExperienceTimeline.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import { navItems } from './data/portfolio.js';

const Hero3D = lazy(() => import('./components/Hero3D.jsx'));

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <BackgroundEffects />
      <Navbar items={navItems} />
      <main>
        <Suspense
          fallback={
            <section id="home" className="hero-section hero-section--loading">
              <div className="section-container hero-loading">
                <span className="eyebrow">Loading Experience</span>
                <h1>Harsh Mishra</h1>
              </div>
            </section>
          }
        >
          <Hero3D />
        </Suspense>
        <About />
        <SkillsOrbit />
        <Projects />
        <ExperienceTimeline />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
