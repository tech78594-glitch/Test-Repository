#!/usr/bin/env node
/**
 * Pulls the latest videos from the MFM Edinburgh YouTube channel and writes them to
 * src/data/sermons.generated.json, which the Sermons section reads at build time.
 *
 * Runs automatically in the GitHub deploy workflow (on every push and on a schedule),
 * so new uploads appear on the website without anyone editing code.
 *
 * Run it by hand with:  npm run sync:sermons
 *
 * If YouTube can't be reached, the existing file is left untouched so the build
 * still succeeds with the last known list.
 */
import { readFile, writeFile } from 'node:fs/promises';

const CHANNEL_ID = 'UC1s9pVF23PCw5VrhTAuHJiQ'; // youtube.com/@MFMEDINBURGH
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const OUTPUT = new URL('../src/data/sermons.generated.json', import.meta.url);
const MAX_VIDEOS = 6;

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim();

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : '';
};

// Streams are often uploaded more than once (e.g. three "Sunday Service | 27th September"
// parts). Treat titles that differ only in spacing/punctuation as the same service.
const normalise = (title) => title.toLowerCase().replace(/[^a-z0-9]/g, '');

async function main() {
  let xml;
  try {
    const res = await fetch(FEED_URL, { headers: { 'User-Agent': 'mfm-edinburgh-website-sync' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xml = await res.text();
  } catch (err) {
    console.warn(`⚠ Could not fetch YouTube feed (${err.message}). Keeping existing sermon list.`);
    return;
  }

  const entries = xml.split('<entry>').slice(1).map((entry) => ({
    youtubeId: tag(entry, 'yt:videoId'),
    title: tag(entry, 'title'),
    published: tag(entry, 'published'),
    description: tag(entry, 'media:description'),
  }));

  const seen = new Set();
  const videos = entries
    .filter((v) => v.youtubeId && v.title)
    .sort((a, b) => b.published.localeCompare(a.published))
    .filter((v) => {
      const key = normalise(v.title);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, MAX_VIDEOS);

  if (videos.length === 0) {
    console.warn('⚠ YouTube feed returned no videos. Keeping existing sermon list.');
    return;
  }

  const next = JSON.stringify(videos, null, 2) + '\n';
  const current = await readFile(OUTPUT, 'utf8').catch(() => '');
  if (current === next) {
    console.log(`✓ Sermon list already up to date (${videos.length} videos).`);
    return;
  }
  await writeFile(OUTPUT, next);
  console.log(`✓ Updated sermon list with ${videos.length} videos:`);
  for (const v of videos) console.log(`  • ${v.published.slice(0, 10)}  ${v.title}`);
}

main();
