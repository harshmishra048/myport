import { motion, useScroll, useSpring } from 'framer-motion';

const MotionDiv = motion.div;

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return <MotionDiv className="scroll-progress" style={{ scaleX }} />;
}
