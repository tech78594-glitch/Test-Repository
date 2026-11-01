import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { pageTitle, sectionPath } from '@/src/routes';

/**
 * On every page change: update the browser tab title, then either jump to the
 * #section in the address (e.g. /services#bulletin) or go back to the top.
 */
export const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Old one-page links like "/#sermons" now point to their own page.
  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const id = decodeURIComponent(hash.slice(1));
    if (document.getElementById(id)) return; // still on the home page
    const target = sectionPath(id);
    if (!target.startsWith('/#')) navigate(target, { replace: true });
  }, [pathname, hash, navigate]);

  useEffect(() => {
    document.title = pageTitle(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    // The section may not exist until the new page has rendered; retry briefly.
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let settle: number | undefined;
    const timer = window.setInterval(() => {
      const el = document.getElementById(id);
      if (!el && ++tries <= 20) return;
      window.clearInterval(timer);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // The header shrinks once the page scrolls, which shifts the target slightly;
      // when the smooth scroll finishes, snap exactly into place.
      const realign = () => el.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.addEventListener('scrollend', realign, { once: true });
      settle = window.setTimeout(realign, 1200);
    }, 50);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(settle);
    };
  }, [pathname, hash]);

  return null;
};
