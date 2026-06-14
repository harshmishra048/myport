import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !glowRef.current) {
      return undefined;
    }

    const updatePosition = (event) => {
      glowRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    window.addEventListener('pointermove', updatePosition);

    return () => window.removeEventListener('pointermove', updatePosition);
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
