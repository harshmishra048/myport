import { ArrowUpRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionArticle = motion.article;

export default function ProjectCard({ project, icon: Icon, index }) {
  const ProjectIcon = Icon;

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const handleMouseLeave = (event) => {
    const card = event.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <MotionArticle
      className={`project-card project-card--${project.accent}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card__shine" />
      <div className="project-card__top">
        <span className="project-card__icon">
          <ProjectIcon size={24} />
        </span>
        <span className="project-card__category">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>
      <p>{project.description}</p>
      <div className="project-card__stack">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="project-card__actions">
        <a href="#contact">
          View Details
          <ArrowUpRight size={16} />
        </a>
        <a href="https://github.com/harshmishra048" target="_blank" rel="noreferrer">
          GitHub / Live Demo
          <Github size={16} />
        </a>
      </div>
    </MotionArticle>
  );
}
