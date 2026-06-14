import { motion, useMotionValue, useSpring } from 'framer-motion';

const MotionAnchor = motion.a;

export default function MagneticButton({
  children,
  href,
  className = '',
  variant = 'primary',
  download,
  target,
  rel,
  onClick,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.3 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionAnchor
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-button magnetic-button--${variant} ${className}`}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </MotionAnchor>
  );
}
