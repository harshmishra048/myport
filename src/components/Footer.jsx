import { Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-inner">
        <p>&copy; 2026 Harsh Mishra. Designed & Developed with passion, creativity, and code.</p>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
