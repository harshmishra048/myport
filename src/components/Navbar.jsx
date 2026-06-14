import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ items }) {
  const [activeId, setActiveId] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-38% 0px -54% 0px',
        threshold: 0.01,
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const handleNavigate = () => setIsOpen(false);

  return (
    <header className={`navbar-shell ${isScrolled ? 'navbar-shell--scrolled' : ''}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a className="navbar__brand" href="#home" onClick={handleNavigate}>
          <span>HM</span>
          <strong>Harsh Mishra</strong>
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {items.map((item) => (
            <a
              key={item.id}
              className={activeId === item.id ? 'is-active' : ''}
              href={`#${item.id}`}
              onClick={handleNavigate}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
