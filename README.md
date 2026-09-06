# THE DISTINCT 5 Ltd — website

Rebuilt with [Astro](https://astro.build) + TypeScript. Outputs a fully static
site (`ai-in-b2b.html`, `index.html` — same URLs as before) that deploys to
GitHub Pages exactly as it did previously.

## Structure

```
src/
  pages/          index.astro, ai-in-b2b.astro — one file per route
  components/     Header, Hero, Services, Contact, Footer, etc. (.astro)
  layouts/        BaseLayout.astro — shared <head>, header, footer, scripts
  scripts/        TypeScript modules: nav, reveal, faq, tilt, contactProtect
  data/           contact.ts — typed, XOR-obfuscated contact details
  styles/         global.css — design tokens, reset, shared layout classes
public/
  images/         site photography
  contact.json, robots.txt, sitemap.xml — copied verbatim into the build
legacy-static-site/   the previous plain-HTML site, kept for reference
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks (astro check) then builds to dist/
npm run preview   # serve the production build locally
```

## Editing services / FAQ / copy

Most page content lives as typed arrays at the top of each `.astro` file's
frontmatter (e.g. `src/components/Services.astro`, `src/components/Faq.astro`,
`src/pages/ai-in-b2b.astro`) — edit the array, not the markup below it.

## Contact details

`src/data/contact.ts` stores the email/phone only as XOR-obfuscated numeric
arrays (never as plaintext), decoded client-side by
`src/scripts/contactProtect.ts`. If these ever change, decode the new value
locally, then paste the *encoded* array back in — never inline the plaintext
in that file (see the comment at the top of `contact.ts`).

## Deployment

`.github/workflows/deploy.yml` builds the site with Node/Astro and deploys
`dist/` to GitHub Pages on every push to `main` (Settings → Pages → Source =
"GitHub Actions").
