import { BriefcaseBusiness, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { experiences } from '../data/portfolio.js';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="site-section experience-section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Experience"
          title="Real delivery experience across products, visuals, and client outcomes."
          description="A focused timeline of applied work, from structured internship learning to freelance delivery with creative ownership."
        />

        <div className="timeline">
          {experiences.map((experience, index) => (
            <Reveal key={experience.title} className="timeline-item" delay={index * 0.12}>
              <div className="timeline-node">
                {index === 0 ? <BriefcaseBusiness size={19} /> : <Sparkles size={19} />}
              </div>
              <div className="timeline-card">
                <span>{experience.duration}</span>
                <h3>{experience.title}</h3>
                <strong>{experience.company}</strong>
                <p>{experience.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
