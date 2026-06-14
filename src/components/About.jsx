import { Cpu, Fingerprint, Layers3, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { stats } from '../data/portfolio.js';

const identity = [
  'Full-stack application thinking',
  'AI and machine learning curiosity',
  'User-first interface design',
  'Real-world problem solving',
];

export default function About() {
  return (
    <section id="about" className="site-section about-section">
      <div className="section-container">
        <SectionHeader
          eyebrow="About"
          title="A developer profile built around systems, design, and useful AI."
          description="Harsh blends engineering fundamentals with creative product instincts, building interfaces and workflows that feel clear, fast, and purposeful."
        />

        <div className="about-grid">
          <Reveal className="hologram-card">
            <div className="hologram-card__scan" />
            <div className="identity-mark">
              <Fingerprint size={42} />
            </div>
            <div>
              <span className="card-label">Identity</span>
              <h3>Harsh Mishra</h3>
              <p>Computer Science Engineering student crafting scalable web apps, AI-based solutions, and premium digital experiences.</p>
            </div>
            <div className="identity-list">
              {identity.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>

          <div className="about-copy">
            <Reveal>
              <p>
                Harsh Mishra is a results-driven Computer Science Engineering student with hands-on experience in full-stack web development,
                machine learning, and UI/UX design. He is skilled in building scalable web applications, AI-based solutions, and user-centric
                platforms.
              </p>
              <p>
                His work is shaped by practical problem-solving, clean interfaces, and a bias toward technology that can create real value for
                people, teams, and communities.
              </p>
            </Reveal>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} className={`stat-card stat-card--${stat.tone}`} delay={index * 0.08}>
                  {index === 0 ? <Layers3 size={20} /> : index === 1 ? <Cpu size={20} /> : <Sparkles size={20} />}
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
