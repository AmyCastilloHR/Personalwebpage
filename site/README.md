# Amy Castillo — personal & consulting site

Static site, no build step. Implemented from the Claude Design handoff in `project/site/`.

- **Update content:** edit `data.js` only (bio, companies, consulting, HR expertise, interests, travel).
- **Logos:** files in `logos/`, referenced by path from `data.js`. A missing company logo falls back to the company name.
- **Headshot:** hidden for now. Set `headshot: "img/headshot.png"` in `data.js` to show it.
- **Travel:** add countries/states to `travel` in `data.js`; planned trips go in `plannedCountries` / `plannedStates`.
- **Vercel:** import the repo, set Root Directory to `site`, Framework Preset "Other", no build command.

External dependencies (loaded at runtime): Google Fonts (Archivo), d3 7.9.0 and topojson-client 3.1.0 from unpkg (SRI-pinned), and the world/US atlas map data from jsDelivr. If the map data can't load, the visited list still renders with a note.
