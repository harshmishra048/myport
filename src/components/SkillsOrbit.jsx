import { Binary, Braces, Code2, Figma, GitBranch, Orbit } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { orbitSkills, skillGroups } from '../data/portfolio.js';

const icons = {
  Programming: Binary,
  'Web Development': Code2,
  'Platforms & CMS': Orbit,
  Tools: GitBranch,
  Design: Figma,
  'AI & Integrations': Braces,
};

const orbitSlots = [
  { x: '0rem', y: '-13.9rem' },
  { x: '8.8rem', y: '-11.6rem' },
  { x: '14.2rem', y: '-4.4rem' },
  { x: '14.1rem', y: '4.4rem' },
  { x: '8.3rem', y: '11.7rem' },
  { x: '-1.7rem', y: '13.7rem' },
  { x: '-10.3rem', y: '10.1rem' },
  { x: '-14.4rem', y: '1.7rem' },
  { x: '-13.8rem', y: '-6.7rem' },
  { x: '-7.5rem', y: '-12.1rem' },
  { x: '3.9rem', y: '-7.3rem' },
  { x: '7.6rem', y: '-1.7rem' },
  { x: '5.3rem', y: '6.2rem' },
  { x: '-5.2rem', y: '6.6rem' },
  { x: '-9.5rem', y: '-3.5rem' },
  { x: '-4.5rem', y: '-7.2rem' },
];

function getOrbitStyle(index) {
  const slot = orbitSlots[index % orbitSlots.length];

  return {
    '--orbit-x': slot.x,
    '--orbit-y': slot.y,
    '--float-delay': `${(index % 6) * -0.55}s`,
    '--float-duration': `${4.6 + (index % 4) * 0.45}s`,
  };
}

export default function SkillsOrbit() {
  return (
    <section id="skills" className="site-section skills-section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Skills"
          title="A rotating skill universe with practical engineering gravity."
          description="The stack is intentionally balanced: development fundamentals, platform delivery, creative UI/UX, and the AI basics needed for future-ready products."
        />

        <div className="skills-layout">
          <Reveal className="skill-orbit" aria-label="Skill orbit visualization">
            <div className="orbit-core">
              <span>HM</span>
              <strong>Full Stack</strong>
            </div>
            <div className="orbit-ring orbit-ring--one" />
            <div className="orbit-ring orbit-ring--two" />
            <div className="orbit-ring orbit-ring--three" />
            <div className="orbit-ring orbit-ring--four" />
            {orbitSkills.map((skill, index) => (
              <span
                key={skill.name}
                className={`orbit-chip orbit-chip--${skill.accent}`}
                style={getOrbitStyle(index)}
              >
                {skill.name}
              </span>
            ))}
          </Reveal>

          <div className="skill-groups">
            {skillGroups.map((group, index) => {
              const Icon = icons[group.category];

              return (
                <Reveal key={group.category} className={`skill-group skill-group--${group.accent}`} delay={index * 0.06}>
                  <div className="skill-group__header">
                    <Icon size={21} />
                    <h3>{group.category}</h3>
                  </div>
                  <div className="skill-group__chips">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
