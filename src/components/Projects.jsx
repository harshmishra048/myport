import { Accessibility, Bot, BriefcaseBusiness, CalendarDays, Newspaper, PenTool, ScanFace, ShoppingBag } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

const projectIcons = [CalendarDays, Accessibility, ShoppingBag, ScanFace, Bot, PenTool, Newspaper, BriefcaseBusiness];

export default function Projects() {
  return (
    <section id="projects" className="site-section projects-section">
      <div className="section-container">
        <SectionHeader
          eyebrow="Projects"
          title="Product-minded builds with depth, motion, and clear use cases."
          description="Each project is presented like a serious product surface: business goal, technical category, interaction polish, and room to add live links as they become available."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} icon={projectIcons[index]} />
          ))}
        </div>
      </div>
    </section>
  );
}
