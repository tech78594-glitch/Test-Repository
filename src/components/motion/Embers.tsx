import React, { useMemo } from 'react';

interface EmbersProps {
  count?: number;
}

/** Glowing embers that drift upward — a subtle "Holy Ghost fire" backdrop for the hero. */
export const Embers: React.FC<EmbersProps> = ({ count = 22 }) => {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        // Deterministic pseudo-random spread so the layout is stable between renders.
        const r = (n: number) => {
          const x = Math.sin((i + 1) * 9301 + n * 49297) * 233280;
          return x - Math.floor(x);
        };
        return {
          left: `${r(1) * 100}%`,
          size: 2 + r(2) * 4,
          duration: 7 + r(3) * 9,
          delay: -r(4) * 16,
          drift: `${(r(5) - 0.5) * 120}px`,
          opacity: 0.35 + r(6) * 0.5,
        };
      }),
    [count]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={
            {
              left: e.left,
              width: e.size,
              height: e.size,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
              '--ember-drift': e.drift,
              '--ember-opacity': e.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
