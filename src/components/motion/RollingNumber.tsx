import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface RollingNumberProps {
  value: number;
  className?: string;
}

/** Two-digit counter where each changing digit rolls up into place. */
export const RollingNumber: React.FC<RollingNumberProps> = ({ value, className }) => {
  const digits = String(value).padStart(2, '0').split('');

  return (
    <span className={`inline-flex overflow-hidden ${className ?? ''}`} aria-label={String(value)}>
      {digits.map((digit, i) => (
        <span key={i} className="relative inline-block" aria-hidden="true">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={digit}
              className="inline-block"
              initial={{ y: '-100%', opacity: 0, filter: 'blur(3px)' }}
              animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: '100%', opacity: 0, filter: 'blur(3px)' }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
};
