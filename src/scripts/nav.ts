/**
 * Header scroll state, scroll-progress bar, and the accessible mobile menu.
 * Runs on every page (imported from BaseLayout.astro).
 */
export function initNav(): void {
  const header = document.getElementById('header');
  const progress = document.getElementById('progress');

  if (header && progress) {
    window.addEventListener(
      'scroll',
      () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = `${pct}%`;
      },
      { passive: true },
    );
  }

  const mobileMenu = document.getElementById('mobileMenu');
  const navToggle = document.getElementById('navToggle');
  const menuClose = document.getElementById('menuClose');

  if (!mobileMenu || !navToggle) return;

  const setMenu = (open: boolean): void => {
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  navToggle.addEventListener('click', () => setMenu(true));
  menuClose?.addEventListener('click', () => setMenu(false));
  mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') setMenu(false);
  });
}
