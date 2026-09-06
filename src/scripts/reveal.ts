/**
 * Scroll-triggered reveal animation (adds `.in` to `.reveal` elements) and
 * the animated numeric counters used on stat cards (`[data-count]`).
 */
export function initReveal(): void {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        target.classList.add('in');
        if (target.matches('[data-count]')) runCounter(target);
        io.unobserve(target);
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el));
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => io.observe(el));
}

function runCounter(el: HTMLElement): void {
  const target = parseFloat(el.dataset.count ?? '0');
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  const duration = 1700;
  const start = performance.now();

  function step(now: number): void {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
