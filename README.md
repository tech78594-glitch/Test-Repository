# MFM Edinburgh Website

Website for Mountain of Fire and Miracles Ministries Edinburgh, 13 Bangor Road, Leith, Edinburgh EH6 5JY.

It is a static React + Vite + Tailwind site. It needs no server, database or API keys.

## Run it locally

Requires [Node.js](https://nodejs.org/) 22 or newer.

```bash
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

## Deploy to GitHub Pages

The site deploys automatically with the workflow in `.github/workflows/deploy.yml`.

1. Push this repository to GitHub.
2. On GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions** (one-time setup).
3. Every push to `main` builds and publishes the site. Progress shows under the **Actions** tab.

The site will be live at `https://<your-username>.github.io/<repository-name>/`.

To use a custom domain such as `mfmedinburgh.org`, add it under **Settings → Pages → Custom domain**, then change `BASE_PATH` in the workflow to `/`.

## Updating content

### Sermons: automatic

The Sermons section shows the latest videos from the [MFM Edinburgh YouTube channel](https://www.youtube.com/@MFMEDINBURGH). The deploy workflow checks the channel every 3 hours, and on every push, then republishes the site, so new uploads appear on their own.

- To add details to a video (preacher, summary, scripture, key points), add its video ID to `src/data/sermon-overrides.json`. The ID is the part after `watch?v=` in the YouTube link.
- To refresh the list immediately, open the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.
- To refresh it on your own computer: `npm run sync:sermons`.

### News: add a file

News posts are Markdown files in `content/news/`. To publish one on github.com:

1. Open `content/news/` → **Add file** → **Create new file**.
2. Name it like `2026-12-20-carol-service.md`.
3. Paste this in and edit it:

   ```markdown
   ---
   title: Carol Service
   date: 2026-12-20
   summary: One or two sentences shown on the news card.
   link: https://example.com
   linkText: Register here
   ---

   The full text of the post. Leave a blank line between paragraphs.

   - Lines starting with a dash become bullet points
   ```

4. Click **Commit changes**. The site updates within a few minutes.

`link` and `linkText` are optional. For a picture, upload it to `public/assets/news/` and add `image: /assets/news/your-picture.jpg`. The 6 newest posts are shown. To remove a post, delete its file.

### Pages and menu

- **Which sections appear on each page:** `src/pages/index.tsx`.
- **Header links:** the 5 main links and the **More** menu are listed in `src/routes.ts` (`PRIMARY_NAV` and `MORE_NAV`). Move an item between the two lists to change what shows in the header.

### Everything else

- **Logo:** `public/assets/brand/mfm-logo.png`.
- **Services, testimonies, ministries and other text:** `src/data/churchData.ts` and the files in `src/components/`.

## Other commands

| Command | What it does |
| --- | --- |
| `npm run sync:sermons` | Fetches the latest sermons from YouTube |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the built site locally |
| `npm run lint` | Type-checks the code |
