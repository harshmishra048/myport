import { Medal, Presentation, Trophy } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { achievements } from '../data/portfolio.js';

const icons = [Trophy, Presentation, Medal];

export default function Achievements() {
  return (
    <section id="achievements" className="site-section achievements-section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Achievements"
          title="Signals of initiative, research, and competitive participation."
          description="A polished snapshot of public-facing work, academic recognition, and national innovation exposure."
        />

        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={achievement.title} className="achievement-card" delay={index * 0.08}>
                <div className="achievement-card__visual">
                  {achievement.image ? (
                    <img src={achievement.image} alt={`${achievement.title} achievement`} loading="lazy" />
                  ) : (
                    <span className="achievement-card__icon">
                      <Icon size={32} />
                    </span>
                  )}
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
