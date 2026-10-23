# Personal site — deploy notes

Static site, no build step.

- **Update content:** edit `data.js` only (bio, companies, interests, travel).
- **Logos:** drop files in `logos/` matching the paths in `data.js`.
- **Headshot:** `img/headshot-2026.png` (path set in `data.js`).
- **Vercel:** import the repo, set Root Directory to `site`, Framework Preset "Other", no build command.


## AI and search readability
Every page is saved with its full text already in the HTML, so AI crawlers (ChatGPT, Claude, Perplexity, Gemini, Copilot) can read it without running JavaScript. Each page also carries a description, share-preview tags and structured data (Person, ProfessionalService, services).
Also included: `robots.txt` (explicitly allows AI crawlers), `sitemap.xml`, and `llms.txt` (plain-text summary for AI tools).

**After editing data.js, rebuild before deploying** so the saved text matches: ask Claude to "re-run tools/prerender.js". The pages still display correctly in browsers without a rebuild; only what crawlers see would be out of date.
Expertise pages: `expertise-<id>.html` (built from `tools/templates/expertise.html`). Old `expertise.html#id` links redirect.
