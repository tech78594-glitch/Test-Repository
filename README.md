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

- **Sermon videos:** edit `SERMONS` in `src/data/churchData.ts`. The `youtubeId` is the part after `watch?v=` in a YouTube link.
- **Logo:** `public/assets/brand/mfm-logo.png`.
- **Other text** (services, testimonies, ministries): `src/data/churchData.ts` and the files in `src/components/`.

## Other commands

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the built site locally |
| `npm run lint` | Type-checks the code |
