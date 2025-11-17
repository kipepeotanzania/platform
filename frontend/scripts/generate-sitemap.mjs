import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const mapPath = path.join(root, 'site.map.json');
const publicDir = path.join(root, 'public');

const siteMap = JSON.parse(fs.readFileSync(mapPath, 'utf-8'));
const collected = new Set();

function collect(node, base = '') {
  const full = (base + '/' + (node.path || '')).replace(/\/+/g, '/');
  const normalized = full === '' ? '/' : full === '//' ? '/' : full.replace(/\/+$/, '') || '/';

  if (node.component) {
    collected.add(normalized);
  }

  (node.children || []).forEach((child) => collect(child, normalized));
}

siteMap.site.routes.forEach((route) => collect(route));

const urls = Array.from(collected);
const body = urls
  .map((routePath) => {
    const loc = routePath === '/' ? '/' : routePath;
    return `  <url><loc>${siteMap.site.baseUrl}${loc}</loc></url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

fs.mkdirSync(publicDir, { recursive: true });
const outputPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf-8');
console.log(`Sitemap written to ${outputPath} with ${urls.length} entries.`);
