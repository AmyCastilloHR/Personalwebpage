# Personal site — deploy notes

Static site, no build step.

- **Update content:** edit `data.js` only (bio, companies, interests, travel).
- **Logos:** drop files in `logos/` matching the paths in `data.js`.
- **Headshot:** `img/headshot-2026.png` (path set in `data.js`).
- **Vercel:** import the repo, set Root Directory to `site`, Framework Preset "Other", no build command.
