import { useLayoutEffect } from 'react';
import { animate, inView } from 'motion';

/**
 * Elements that rise into view as the visitor scrolls. Inside each page section it
 * picks up headings, intro text, cards in grids, and anything marked `data-reveal`.
 * Siblings are staggered so rows of cards cascade in rather than appearing at once.
 */
const TARGETS = [
  '[data-reveal]',
  'h2',
  'h2 + p',
  '.grid > *',
].join(',');

const EASE = [0.22, 1, 0.36, 1] as const;

export function useScrollReveal(rootSelector = 'main section, footer') {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const roots = Array.from(document.querySelectorAll<HTMLElement>(rootSelector));
    const candidates = roots.flatMap((root) =>
      Array.from(root.querySelectorAll<HTMLElement>(TARGETS))
    );

    // Skip elements nested inside another target (the parent already animates them)
    // and anything inside an overlay/modal.
    const targets = candidates.filter(
      (el) =>
        !el.closest('.fixed') &&
        !candidates.some((other) => other !== el && other.contains(el))
    );

    // Hide below the fold only; anything already on screen stays put.
    const viewportBottom = window.innerHeight;
    const pending = targets.filter((el) => el.getBoundingClientRect().top > viewportBottom * 0.9);

    for (const el of pending) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(32px) scale(0.985)';
      el.style.filter = 'blur(6px)';
    }

    const stops = pending.map((el) =>
      inView(
        el,
        () => {
          const siblings = el.parentElement
            ? Array.from(el.parentElement.children).filter((c) => pending.includes(c as HTMLElement))
            : [el];
          const index = Math.max(0, siblings.indexOf(el));

          animate(
            el,
            {
              opacity: [0, 1],
              transform: ['translateY(32px) scale(0.985)', 'translateY(0px) scale(1)'],
              filter: ['blur(6px)', 'blur(0px)'],
            },
            { duration: 0.8, delay: Math.min(index * 0.08, 0.4), ease: EASE }
          ).then(() => {
            // Hand control back to the stylesheet so hover effects keep working.
            el.style.opacity = '';
            el.style.transform = '';
            el.style.filter = '';
          });
        },
        { margin: '0px 0px -12% 0px' }
      )
    );

    return () => {
      stops.forEach((stop) => stop());
      for (const el of pending) {
        el.style.opacity = '';
        el.style.transform = '';
        el.style.filter = '';
      }
    };
  }, [rootSelector]);
}
