import { GraduationCap, Laptop, LibraryBig } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="site-section education-section">
      <div className="section-container education-container">
        <SectionHeader
          eyebrow="Education"
          title="Computer science foundation with a builder's mindset."
          description="Academic momentum paired with practical product work and continuous technology exploration."
          align="left"
        />

        <Reveal className="education-card">
          <div className="education-visual" aria-hidden="true">
            <div className="book-stack">
              <span />
              <span />
              <span />
            </div>
            <Laptop size={58} />
          </div>
          <div className="education-content">
            <span className="card-label">
              <GraduationCap size={17} />
              Academic Track
            </span>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <div className="education-meta">
              <span>{education.years}</span>
              <span>CGPA: {education.cgpa}</span>
            </div>
          </div>
          <LibraryBig className="education-watermark" size={160} aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
