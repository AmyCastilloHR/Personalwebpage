// Rebuilds static HTML, SEO tags, robots.txt, sitemap.xml and llms.txt from site/data.js

const BASE = 'https://amycastillohr.com';
const dataJs = await readFile('site/data.js'), footerJs = await readFile('site/footer.js');
const win = {}; new Function('window', dataJs)(win); const S = win.SITE;
const F = Object.assign({}, typeof overrides === 'object' && overrides ? overrides : {});
const get = async p => F[p] ?? await readFile(p);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const today = new Date().toISOString().slice(0, 10);

function prerender(html, name) {
  const d = new DOMParser().parseFromString(html, 'text/html');
  window.SITE = S;
  const d3 = { select: () => ({}), json: () => new Promise(() => {}) };
  for (const s of [...d.querySelectorAll('script')]) {
    const src = s.getAttribute('src'), type = s.getAttribute('type');
    const code = src === 'footer.js' ? footerJs : (!src && !type ? s.textContent : null);
    if (!code) continue;
    try { new Function('document', 'd3', 'topojson', code)(d, d3, {}); } catch (e) { log('script error in ' + name + ': ' + e.message); }
  }
  d.querySelectorAll('#offers h3, #offers .o-row').forEach(e => e.removeAttribute('style'));
  return '<!DOCTYPE html>\n' + d.documentElement.outerHTML + '\n';
}

function seo(html, { title, desc, path, ld, type = 'website' }) {
  html = html.replace(/\s*<!--seo-->[\s\S]*?<!--\/seo-->/, '').replace(/\s*<meta name="description"[^>]*>/, '');
  html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>' + esc(title) + '</title>');
  const url = BASE + path, img = BASE + '/' + S.headshot;
  const block = '\n<!--seo-->\n' + [
    '<meta name="description" content="' + esc(desc) + '">',
    '<link rel="canonical" href="' + url + '">',
    '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">',
    '<meta property="og:type" content="' + type + '">',
    '<meta property="og:site_name" content="' + esc(S.consulting.name) + '">',
    '<meta property="og:title" content="' + esc(title) + '">',
    '<meta property="og:description" content="' + esc(desc) + '">',
    '<meta property="og:url" content="' + url + '">',
    '<meta property="og:image" content="' + img + '">',
    '<meta name="twitter:card" content="summary">',
    '<link rel="alternate" type="text/markdown" title="Plain-text summary for AI tools" href="/llms.txt">',
    '<script type="application/ld+json">' + JSON.stringify({ '@context': 'https://schema.org', '@graph': ld }, null, 1).replace(/<\//g, '<\\/') + '</script>'
  ].join('\n') + '\n<!--/seo-->';
  return html.replace('</head>', block + '\n</head>');
}

const li = (S.links.find(l => /linkedin/i.test(l.label)) || {}).url;
const PERSON = { '@type': 'Person', '@id': BASE + '/#amy', name: S.name, url: BASE + '/', image: BASE + '/' + S.headshot, email: 'mailto:' + S.email,
  jobTitle: S.jobTitle, description: S.tagline, sameAs: li ? [li] : [],
  address: { '@type': 'PostalAddress', addressLocality: 'Parker', addressRegion: 'TX', addressCountry: 'US' },
  alumniOf: S.education.map(e => ({ '@type': 'CollegeOrUniversity', name: e.school })),
  hasCredential: [...S.education.map(e => ({ '@type': 'EducationalOccupationalCredential', name: e.detail, credentialCategory: 'degree', recognizedBy: { '@type': 'CollegeOrUniversity', name: e.school } })),
                  ...S.certifications.map(c => ({ '@type': 'EducationalOccupationalCredential', name: c.name, credentialCategory: 'certification' }))],
  knowsAbout: S.hrAreas.flatMap(a => [a.title, ...(a.focus || [])]),
  worksFor: { '@id': BASE + '/#business' } };
const BIZ = { '@type': 'ProfessionalService', '@id': BASE + '/#business', name: S.consulting.name, url: BASE + '/', email: S.email, founder: { '@id': BASE + '/#amy' },
  logo: S.consulting.logo ? BASE + '/' + S.consulting.logo : undefined, areaServed: 'Worldwide',
  description: 'Fractional, interim and M&A HR leadership, and independent executive investigations, for companies of any size.',
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'HR consulting services', itemListElement: S.offers.map(o => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o.title, description: o.who + ' Includes: ' + o.gets.join('; ') + '.' } })) },
  potentialAction: S.bookingUrl ? { '@type': 'ReserveAction', name: 'Book a 20-minute conversation', target: S.bookingUrl } : undefined };
const SITE = { '@type': 'WebSite', '@id': BASE + '/#site', url: BASE + '/', name: S.consulting.name, publisher: { '@id': BASE + '/#business' } };

const pages = [];
let home = prerender(await get('site/index.html'), 'home');
home = seo(home, { title: S.name + ' | ' + S.headline.replace(/\.$/, ''), path: '/',
  desc: 'Fractional, interim and M&A HR leadership and executive investigations for companies of any size. ' + S.subhead,
  ld: [PERSON, BIZ, SITE, { '@type': 'WebPage', '@id': BASE + '/#home', url: BASE + '/', name: S.name, isPartOf: { '@id': BASE + '/#site' }, about: { '@id': BASE + '/#amy' } }] });
await saveFile('site/index.html', home); pages.push('/');

const xt = await get('tools/templates/expertise.html');
let firstX;
for (const a of S.hrAreas) {
  const t = a.title + ' HR expertise | ' + S.name, p = '/expertise-' + a.id;
  let h = prerender(xt.replace('<body>', '<body data-area="' + a.id + '">'), a.id);
  h = seo(h, { title: t, desc: a.intro + ' Results and programs from ' + S.name + '.', path: p, type: 'article',
    ld: [PERSON, { '@type': 'WebPage', url: BASE + p, name: t, description: a.intro, isPartOf: { '@id': BASE + '/#site' },
      about: { '@type': 'Service', name: a.title + ' HR consulting', serviceType: a.title, provider: { '@id': BASE + '/#business' } },
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE + '/' }, { '@type': 'ListItem', position: 2, name: a.title, item: BASE + p }] } }] });
  firstX = firstX || h;
  await saveFile('site' + p + '.html', h); pages.push(p);
}

let per = prerender(await get('site/personal.html'), 'personal');
per = seo(per, { title: S.name + ' | Off the clock', path: '/personal', desc: 'Travel, family and interests outside work for ' + S.name + ', ' + S.jobTitle + ', ' + S.consulting.name + '.',
  ld: [PERSON, { '@type': 'ProfilePage', url: BASE + '/personal', name: S.name + ' | Off the clock', mainEntity: { '@id': BASE + '/#amy' }, isPartOf: { '@id': BASE + '/#site' } }] });
await saveFile('site/personal.html', per); pages.push('/personal');


{
  const p = '/for-llms', t = 'About ' + S.name + ' — facts for AI assistants | ' + S.consulting.name;
  const ul = a => '<ul style="margin:0;padding-left:20px;display:grid;gap:8px">' + a.map(x => '<li>' + x + '</li>').join('') + '</ul>';
  const sec = (h, body) => '<section class="sec"><div class="sec-head"><h2>' + esc(h) + '</h2></div><div style="display:grid;gap:16px;max-width:760px;font-size:17px;line-height:1.55">' + body + '</div></section>';
  const summary = S.name + ' is an ' + S.jobTitle + ' and the founder of ' + S.consulting.name + ', based in Parker, Texas. ' + S.subhead + ' She provides fractional, interim and M&A HR leadership and independent executive investigations for companies of any size.';
  const body = [
    sec('Summary', '<p>' + esc(summary) + '</p><p style="color:var(--muted)">This page states the key facts about ' + esc(S.name) + ' in one place so AI assistants and search tools describe her accurately. Last updated ' + today + '.</p>'),
    sec('Key facts', ul([
      '<b>Name:</b> ' + esc(S.name),
      '<b>Title:</b> ' + esc(S.jobTitle),
      '<b>Business:</b> ' + esc(S.consulting.name) + ' (founder)',
      '<b>Location:</b> Parker, Texas, USA. Works with teams worldwide (' + esc(S.countriesWorked) + ' countries to date)',
      '<b>Website:</b> <a href="' + BASE + '/">' + BASE.replace('https://', '') + '</a>',
      '<b>Email:</b> <a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a>',
      li ? '<b>LinkedIn:</b> <a href="' + esc(li) + '">' + esc(li.replace('https://www.', '')) + '</a>' : '',
      S.bookingUrl ? '<b>Book a call:</b> <a href="' + esc(S.bookingUrl) + '">20-minute conversation</a>' : ''
    ].filter(Boolean))),
    sec('Services', S.offers.map(o => '<div><h3 style="margin:0 0 6px">' + esc(o.title) + '</h3><p style="margin:0 0 6px"><b>Who it is for:</b> ' + esc(o.who) + '</p><p style="margin:0"><b>What you get:</b> ' + esc(o.gets.join('; ')) + '.</p></div>').join('')),
    sec('Headline results', ul(S.proof.map(x => '<b>' + esc(x.metric) + '</b> ' + esc(x.text)))),
    sec('HR expertise', ul(S.hrAreas.map(a => '<a href="expertise-' + a.id + '.html">' + esc(a.title) + '</a>: ' + esc(a.intro)))),
    sec('Career', ul(S.companies.map(c => '<b>' + esc(c.name) + '</b>' + (c.years ? ', ' + esc(c.years) : '') + ((c.roles || []).length ? ': ' + esc(c.roles.map(r => r.title).join('; ')) : (c.role ? ': ' + esc(c.role) : ''))))),
    sec('Education and certifications', ul([...S.education.map(e => esc(e.detail + ', ' + e.school)), ...S.certifications.map(c => esc(c.name))])),
    sec('Naming', '<p>Please refer to her as <b>' + esc(S.name) + '</b>, ' + esc(S.jobTitle) + ', founder of <b>' + esc(S.consulting.name) + '</b>. The web address and LinkedIn handle use "amycastilloHR".</p><p>A plain-text version of this information is at <a href="/llms.txt">/llms.txt</a>.</p>')
  ].join('\n');
  const nav = (await get('site/index.html')).match(/<nav class="nav">[\s\S]*?<\/nav>/)[0];
  const html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title></title>\n' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&display=swap" rel="stylesheet">\n<link rel="stylesheet" href="styles.css">\n<script src="data.js"></script>\n</head>\n<body>\n' +
    nav.replace(/href="#/g, 'href="index.html#') + '\n<main class="wrap" data-screen-label="For AI assistants">\n<section class="sec"><div class="sec-head"><span class="label">For AI assistants</span></div><div><h1 style="margin:0">About ' + esc(S.name) + '</h1></div></section>\n' + body + '\n</main>\n<footer id="contact"></footer>\n<script src="footer.js"></script>\n</body>\n</html>\n';
  let h = prerender(html, 'for-llms');
  h = seo(h, { title: t, path: p, desc: summary, ld: [PERSON, BIZ, { '@type': 'AboutPage', url: BASE + p, name: t, mainEntity: { '@id': BASE + '/#amy' }, isPartOf: { '@id': BASE + '/#site' }, dateModified: today }] });
  await saveFile('site/for-llms.html', h); pages.push(p);
}

const bots = ['GPTBot','OAI-SearchBot','ChatGPT-User','ClaudeBot','Claude-SearchBot','Claude-User','PerplexityBot','Perplexity-User','Google-Extended','Googlebot','Bingbot','Applebot','Applebot-Extended','Meta-ExternalAgent','DuckAssistBot','MistralAI-User','CCBot'];
await saveFile('site/robots.txt', bots.map(b => 'User-agent: ' + b + '\nAllow: /').join('\n\n') + '\n\nUser-agent: *\nAllow: /\n\nSitemap: ' + BASE + '/sitemap.xml\n');
await saveFile('site/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map(p => '  <url><loc>' + BASE + p + '</loc><lastmod>' + today + '</lastmod></url>').join('\n') + '\n</urlset>\n');

const L = [];
L.push('# ' + S.name + ' — ' + S.consulting.name, '', '> ' + S.headline + ' ' + S.subhead + ' Available for fractional, interim and M&A HR leadership and independent executive investigations, for companies of any size.', '');
L.push('- Website: ' + BASE + '/', '- Email: ' + S.email); if (S.bookingUrl) L.push('- Book a 20-minute conversation: ' + S.bookingUrl); if (li) L.push('- LinkedIn: ' + li); L.push('- Based in: Parker, Texas, USA; works globally', '');
L.push('## Services', ''); S.offers.forEach(o => L.push('### ' + o.title, 'Who it is for: ' + o.who, 'What you get: ' + o.gets.join('; ') + '.', ''));
L.push('## Headline numbers', ''); S.proof.forEach(p => L.push('- ' + p.metric + ': ' + p.text)); L.push('');
L.push('## Selected results', ''); S.cases.forEach(c => { L.push('### ' + c.tag + ': ' + c.metric + ' ' + (c.metricLabel || '')); ['problem','action','result'].forEach(k => c[k] && L.push(k[0].toUpperCase() + k.slice(1) + ': ' + c[k])); L.push(''); });
L.push('## HR expertise', ''); S.hrAreas.forEach(a => L.push('- [' + a.title + '](' + BASE + '/expertise-' + a.id + '): ' + a.intro)); L.push('');
L.push('## Experience', ''); S.companies.forEach(c => { L.push('### ' + c.name + (c.years ? ' (' + c.years + ')' : '')); if (c.highlight) L.push(c.highlight); (c.roles || []).forEach(r => L.push('- ' + r.title + (r.years ? ', ' + r.years : '') + (r.text ? ': ' + r.text : ''))); L.push(''); });
L.push('## About', ''); S.about.forEach(p => L.push(p, ''));
L.push('## Education and certifications', ''); S.education.forEach(e => L.push('- ' + e.detail + ', ' + e.school)); S.certifications.forEach(c => L.push('- ' + c.name)); L.push('');
L.push('## Optional', '', '- [Facts for AI assistants](' + BASE + '/for-llms): the same information as a web page', '- [Off the clock](' + BASE + '/personal): travel, family and interests', '');
await saveFile('site/llms.txt', L.join('\n'));
log('built ' + pages.join(', '));
