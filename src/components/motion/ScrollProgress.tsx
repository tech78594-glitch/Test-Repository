import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/** Thin gold bar across the top of the page that fills as the visitor scrolls. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
      style={{ scaleX }}
    />
  );
};
