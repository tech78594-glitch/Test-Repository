/**
 * Every page on the site, and where each old on-page section now lives.
 * Use `sectionPath('giving')` instead of "#giving" when linking to a section.
 */

export interface PageInfo {
  path: string;
  /** Translation key for the menu label */
  navKey: string;
  title: string;
}

export const PAGES = {
  home: { path: '/', navKey: 'nav.home', title: 'Mountain of Fire and Miracles Ministries Edinburgh' },
  about: { path: '/about', navKey: 'nav.about', title: 'About Us' },
  services: { path: '/services', navKey: 'nav.services', title: 'Services & Programmes' },
  sermons: { path: '/sermons', navKey: 'nav.sermons', title: 'Sermons' },
  prayer: { path: '/prayer', navKey: 'nav.prayer', title: 'Prayer' },
  contact: { path: '/contact', navKey: 'nav.contact', title: 'Visit & Contact' },
  news: { path: '/news', navKey: 'nav.news', title: 'News' },
  ministries: { path: '/ministries', navKey: 'nav.ministries', title: 'Ministries' },
  gallery: { path: '/gallery', navKey: 'nav.gallery', title: 'Gallery' },
  giving: { path: '/giving', navKey: 'nav.giving', title: 'Giving' },
  books: { path: '/books', navKey: 'nav.books', title: 'DKO Books' },
} satisfies Record<string, PageInfo>;

/** The five links shown in the header. */
export const PRIMARY_NAV: { to: string; navKey: string }[] = [
  { to: PAGES.about.path, navKey: 'nav.about' },
  { to: PAGES.services.path, navKey: 'nav.services' },
  { to: PAGES.sermons.path, navKey: 'nav.sermons' },
  { to: PAGES.prayer.path, navKey: 'nav.prayer' },
  { to: PAGES.contact.path, navKey: 'nav.contact' },
];

/** Everything else, shown under the "More" menu. */
export const MORE_NAV: { to: string; navKey: string }[] = [
  { to: PAGES.news.path, navKey: 'nav.news' },
  { to: PAGES.ministries.path, navKey: 'nav.ministries' },
  { to: PAGES.gallery.path, navKey: 'nav.gallery' },
  { to: PAGES.giving.path, navKey: 'nav.giving' },
  { to: PAGES.books.path, navKey: 'nav.books' },
  { to: `${PAGES.services.path}#programmes`, navKey: 'nav.programmes' },
  { to: `${PAGES.services.path}#bulletin`, navKey: 'nav.bulletin' },
  { to: `${PAGES.prayer.path}#prayer-wall`, navKey: 'nav.prayerWall' },
];

const SECTIONS: Record<string, string> = {
  about: '/about',
  beliefs: '/about#beliefs',
  testimonies: '/about#testimonies',
  services: '/services',
  programmes: '/services#programmes',
  bulletin: '/services#bulletin',
  sermons: '/sermons',
  prayers: '/prayer',
  'prayer-wall': '/prayer#prayer-wall',
  news: '/news',
  ministries: '/ministries',
  gallery: '/gallery',
  giving: '/giving',
  publications: '/books',
  contact: '/contact',
};

/** Page (and anchor) that shows a given section, e.g. sectionPath('bulletin') → '/services#bulletin'. */
export const sectionPath = (id: string) => SECTIONS[id] ?? `/#${id}`;

export const pageTitle = (pathname: string) => {
  const page = Object.values(PAGES).find((p) => p.path === pathname);
  const site = PAGES.home.title;
  if (!page || page === PAGES.home) return site;
  return `${page.title} | MFM Edinburgh`;
};
