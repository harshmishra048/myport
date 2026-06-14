const particles = Array.from({ length: 24 }, (_, index) => index);

export default function BackgroundEffects() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div className="aurora aurora--cyan" />
      <div className="aurora aurora--violet" />
      <div className="background-grid" />
      <div className="particle-field">
        {particles.map((particle) => (
          <span key={particle} style={{ '--i': particle }} />
        ))}
      </div>
    </div>
  );
}
