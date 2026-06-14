import { Award, BadgeCheck, FileBadge } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { certifications } from '../data/portfolio.js';

const icons = [FileBadge, BadgeCheck, Award];

export default function Certifications() {
  return (
    <section id="certifications" className="site-section certifications-section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials that reinforce hands-on technical growth."
          description="A compact certificate wall for web development, DSA fundamentals, and mentor-level program participation."
        />

        <div className="certification-grid">
          {certifications.map((certification, index) => {
            const Icon = icons[index];

            return (
              <Reveal key={certification} className="certificate-card" delay={index * 0.08}>
                <Icon size={28} />
                <span>Certificate</span>
                <h3>{certification}</h3>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
