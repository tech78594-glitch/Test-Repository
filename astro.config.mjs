// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thedistinct5ltd.com',
  trailingSlash: 'never',
  build: {
    // Keep URLs identical to the previous static site (ai-in-b2b.html, not ai-in-b2b/)
    format: 'file',
  },
});
