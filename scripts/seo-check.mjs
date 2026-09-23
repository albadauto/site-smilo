// Crawl the actual HTML response, including the metadata visible without JavaScript.
import assert from 'node:assert/strict';
const origin = new URL(process.argv[2] || 'http://localhost:3000').origin;
const canonicalOrigin = 'https://www.smilo.com.br';
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1];
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))].map(m => m[0]);
const get = async path => {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(30000) });
  return { response, html: await response.text() };
};
const { response: sitemapResponse, html: xml } = await get('/sitemap.xml');
assert.equal(sitemapResponse.status, 200, 'Sitemap must load');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]));
assert.ok(urls.length >= 16, 'Expected existing site pages in sitemap');
const paths = new Set(urls.map(url => url.pathname));
const titles = new Set(), descriptions = new Set(), links = new Set(), assets = new Set();
for (const url of urls) {
  const path = url.pathname;
  check(url.origin === canonicalOrigin, `${path}: wrong sitemap domain`);
  const { response, html } = await get(path);
  check(response.status === 200, `${path}: HTTP ${response.status}`);
  check(new URL(response.url).pathname === path, `${path}: unexpected redirect`);
  const meta = tags(html, 'meta');
  const canonical = tags(html, 'link').filter(tag => attr(tag, 'rel') === 'canonical');
  check(canonical.length === 1, `${path}: expected one canonical`);
  const href = attr(canonical[0] || '', 'href');
  check(href && new URL(href).origin === canonicalOrigin && new URL(href).pathname === path, `${path}: incorrect canonical ${href}`);
  check(!meta.some(tag => /robots|googlebot/.test(attr(tag, 'name') || '') && /noindex|nofollow/.test(attr(tag, 'content') || '')), `${path}: robots block`);
  check(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${path}: header blocks indexing`);
  check(tags(html, 'h1').length === 1, `${path}: expected one H1`);
  check(/<html[^>]*lang="pt-BR"/.test(html), `${path}: missing language`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = attr(meta.find(tag => attr(tag, 'name') === 'description') || '', 'content');
  check(title && !titles.has(title), `${path}: missing/duplicate title`);
  check(description && !descriptions.has(description), `${path}: missing/duplicate description`);
  titles.add(title); descriptions.add(description);
  const data = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
  check(data.length > 0, `${path}: no structured data`);
  for (const [, raw] of data) { try { JSON.parse(raw); } catch { errors.push(`${path}: invalid JSON-LD`); } }
  for (const tag of tags(html, 'a')) {
    const href = attr(tag, 'href');
    if (href?.startsWith('/') && !href.startsWith('//')) links.add(new URL(href, origin).pathname);
  }
  for (const tag of tags(html, 'img')) {
    check(attr(tag, 'alt') !== undefined, `${path}: image missing alt`);
    const src = attr(tag, 'src');
    if (src?.startsWith('/')) assets.add(src.replaceAll('&amp;', '&'));
  }
  console.log(`Checked ${path}`);
}
for (const path of links) {
  if (!paths.has(path)) {
    const { response } = await get(path);
    check(response.status === 200, `Broken internal link ${path}: ${response.status}`);
  }
}
for (const url of urls) check(url.pathname === '/' || links.has(url.pathname), `No internal link to ${url.pathname}`);
for (const path of assets) {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(30000) });
  check(response.ok && response.headers.get('content-type')?.startsWith('image/'), `Broken image ${path}`);
  await response.body?.cancel();
}
const { html: robots } = await get('/robots.txt');
check(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), 'Robots sitemap domain mismatch');
check(!/^Disallow:\s*\/\s*$/m.test(robots), 'Robots blocks whole site');
const { response: missing } = await get('/seo-check-page-that-does-not-exist');
check(missing.status === 404, `Unknown page must return 404, got ${missing.status}`);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${urls.length} pages, ${links.size} internal destinations, ${assets.size} images; canonical, metadata, robots, structured data and 404 verified.`);
