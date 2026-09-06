/**
 * Subtle 3D tilt-on-hover for `.tilt` cards. Skipped on touch/coarse
 * pointers, where mousemove doesn't apply.
 */
export function initTilt(): void {
  if (!window.matchMedia('(pointer:fine)').matches) return;

  document.querySelectorAll<HTMLElement>('.tilt').forEach((card) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      card.style.transform =
        `perspective(900px) rotateX(${(0.5 - py) * 11}deg) ` +
        `rotateY(${(px - 0.5) * 13}deg) translateY(-8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}
