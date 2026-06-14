import Reveal from './Reveal.jsx';

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <Reveal className={`section-header section-header--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Reveal>
  );
}
