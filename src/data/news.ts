/**
 * News posts live as Markdown files in /content/news. To publish a post, add a file there
 * (on github.com: Add file → Create new file) — the site rebuilds and shows it automatically.
 *
 * Each file starts with a short header between --- lines:
 *
 *   ---
 *   title: Harvest Thanksgiving Service
 *   date: 2026-11-15
 *   summary: One or two sentences shown on the news card.
 *   image: /assets/news/harvest.jpg        (optional, file in public/assets/news)
 *   link: https://example.com              (optional button)
 *   linkText: Register here                (optional button label)
 *   ---
 *
 * followed by the full text. Blank lines start new paragraphs; lines starting with "- " become a list.
 */

export interface NewsPost {
  slug: string;
  title: string;
  date: Date;
  summary: string;
  image?: string;
  link?: string;
  linkText?: string;
  body: string;
}

const files = import.meta.glob('/content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parse(path: string, raw: string): NewsPost | null {
  const text = raw.replace(/\r\n/g, '\n');
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    console.warn(`News post ${path} is missing its --- header and was skipped.`);
    return null;
  }

  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }

  const date = new Date(meta.date);
  if (!meta.title || Number.isNaN(date.getTime())) {
    console.warn(`News post ${path} needs a title and a valid date (YYYY-MM-DD) and was skipped.`);
    return null;
  }

  const body = match[2].trim();
  const image = meta.image
    ? meta.image.startsWith('/')
      ? `${import.meta.env.BASE_URL}${meta.image.slice(1)}`
      : meta.image
    : undefined;

  return {
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    title: meta.title,
    date,
    summary: meta.summary || body.split('\n\n')[0].replace(/^- /gm, ''),
    image,
    link: meta.link || undefined,
    linkText: meta.linkText || undefined,
    body,
  };
}

/** All news posts, newest first. */
export const NEWS_POSTS: NewsPost[] = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .filter((p): p is NewsPost => p !== null)
  .sort((a, b) => b.date.getTime() - a.date.getTime());
