// Exports the darkwinter mark production set from one geometry (flat.mjs) and the 3D component (../darkwinter-signal).
//   svg/       flat marks: black, white, the small cut, and a square tile for each era
//   png/       the flat marks as transparent PNGs at 512/1024/2048, and the era tiles at 1024
//   favicon/   favicon.svg (follows light/dark), favicon.ico (16/32/48), apple-touch-icon, PWA icons, manifest, <head> snippet
//   avatars/   1080×1080 social avatars: the 3D mark in each era, in its rest pose, framed for a circle crop
// Run `node darkwinter-signal/build.mjs` first; then `node darkwinter-brand/export.mjs`.
import { createRequire } from 'node:module'; import { createServer } from 'node:http'; import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname, resolve, extname } from 'node:path'; import { fileURLToPath } from 'node:url';
import { svgMark } from './flat.mjs';
const require = createRequire(import.meta.url);
let playwright; try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }
const DIR = dirname(fileURLToPath(import.meta.url)), ROOT = resolve(DIR, '..');

const ERAS = [
  ['00', 'mark', { bg: '#f4f2ee', ink: '#111111' }],
  ['01', 'synthwave', { bg: '#0b0612', frame: '#ff2e88', ring: '#2f5bff', tess: '#d6e2ff', core: '#ffffff' }],
  ['02', 'cassette', { bg: '#120b03', frame: '#d97a00', ring: '#c86400', tess: '#ffd36b', core: '#fff1c4' }],
  ['03', 'atomic', { bg: '#f1e4c3', frame: '#c8402b', ring: '#2f7f7a', tess: '#1f2a3a', core: '#e9b949' }],
  ['04', 'vector', { bg: '#020604', frame: '#39ff88', ring: '#39ff88', tess: '#e6fff0', core: '#39ff88' }],
  ['05', 'noir', { bg: '#060914', frame: '#ff2fb3', ring: '#22e1ff', tess: '#ffffff', core: '#ffd1f0' }],
  // flat Colony sits on slate: its cream frame needs a dark ground to read at small sizes
  ['06', 'colony', { bg: '#2b3a3f', frame: '#f6eedc', ring: '#7fc4cf', tess: '#f7d9a8', core: '#fff2cf' }],
];
const PAPER = '#f4f2ee', INK = '#111111', WHITE = '#f4f1f8';

const out = async (rel, data) => { const p = join(DIR, rel); await mkdir(dirname(p), { recursive: true }); await writeFile(p, data); console.log(rel); };

/* ---------- SVG ---------- */
const SVG = {
  'svg/darkwinter-mark-black.svg': svgMark({ ink: INK }),
  'svg/darkwinter-mark-white.svg': svgMark({ ink: WHITE }),
  'svg/darkwinter-mark-small-black.svg': svgMark({ ink: INK, small: true }),
  'svg/darkwinter-mark-small-white.svg': svgMark({ ink: WHITE, small: true }),
};
for (const [id, name, c] of ERAS) SVG[`svg/darkwinter-tile-${id}-${name}.svg`] = svgMark({ ...c, pad: .28 });
for (const [rel, s] of Object.entries(SVG)) await out(rel, s + '\n');
// favicon.svg follows the browser's light or dark tab strip
const favSvg = svgMark({ ink: INK, small: true }).replace('<svg ', '<svg class="m" ').replace(/fill="#111111"/g, 'fill="currentColor"').replace(/stroke="#111111"/g, 'stroke="currentColor"')
  .replace('role="img" aria-label="darkwinter">', 'role="img" aria-label="darkwinter"><style>svg{color:#111}@media (prefers-color-scheme:dark){svg{color:#f4f1f8}}</style>');
await out('favicon/favicon.svg', favSvg + '\n');

/* ---------- rasterize in Chromium ---------- */
const srv = createServer(async (q, r) => {
  if (q.url.startsWith('/__export.html')) { r.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    r.end('<!doctype html><style>html,body{margin:0;background:transparent}darkwinter-signal{width:1080px;height:1080px;min-height:0}darkwinter-signal::part(controls),darkwinter-signal::part(hint){display:none}</style><body></body>'); return; }
  try { const p = join(ROOT, decodeURIComponent(q.url.split('?')[0])); if (!p.startsWith(ROOT)) throw 0; r.writeHead(200, { 'content-type': extname(p) === '.js' ? 'text/javascript' : 'application/octet-stream' }); r.end(await readFile(p)); }
  catch { r.writeHead(404); r.end(); }
}).listen(0);
const browser = await playwright.chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } }); page.on('pageerror', e => { console.error(e); process.exit(1); });
await page.goto(`http://localhost:${srv.address().port}/__export.html`);
// draw an SVG string onto a size×size canvas: optional background, optional rounded corners, and the mark scaled to `fill` of the canvas
const raster = (svg, size, { bg = null, radius = 0, fill = 1 } = {}) => page.evaluate(async ([svg, size, bg, radius, fill]) => {
  const img = new Image(); img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg))); await img.decode();
  const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d');
  if (bg) { x.fillStyle = bg; x.beginPath(); x.roundRect(0, 0, size, size, radius * size); x.fill(); }
  const s = size * fill, o = (size - s) / 2; x.drawImage(img, o, o, s, s);
  return c.toDataURL('image/png').split(',')[1];
}, [svg, size, bg, radius, fill]).then(b => Buffer.from(b, 'base64'));

for (const [tone, ink] of [['black', INK], ['white', WHITE]]) for (const px of [512, 1024, 2048]) await out(`png/darkwinter-mark-${tone}-${px}.png`, await raster(svgMark({ ink }), px));
for (const [id, name, c] of ERAS) await out(`png/darkwinter-tile-${id}-${name}-1024.png`, await raster(svgMark({ ...c, pad: .28 }), 1024));

/* ---------- favicons and app icons ---------- */
const smallTile = px => raster(svgMark({ ink: INK, small: true }), px, { bg: PAPER, radius: .22, fill: .86 });
const ico = [];
for (const px of [16, 32, 48]) { const png = await smallTile(px); ico.push([px, png]); await out(`favicon/favicon-${px}.png`, png); }
{ // ICO container with PNG entries
  const head = Buffer.alloc(6 + 16 * ico.length); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(ico.length, 4);
  let off = head.length; ico.forEach(([px, png], i) => { const e = 6 + i * 16; head.writeUInt8(px, e); head.writeUInt8(px, e + 1); head.writeUInt8(0, e + 2); head.writeUInt8(0, e + 3);
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6); head.writeUInt32LE(png.length, e + 8); head.writeUInt32LE(off, e + 12); off += png.length; });
  await out('favicon/favicon.ico', Buffer.concat([head, ...ico.map(([, p]) => p)]));
}
const appIcon = (px, fill) => raster(svgMark({ ink: INK }), px, { bg: PAPER, fill });
await out('favicon/apple-touch-icon.png', await appIcon(180, .78));
await out('favicon/icon-192.png', await appIcon(192, .78));
await out('favicon/icon-512.png', await appIcon(512, .78));
await out('favicon/icon-maskable-512.png', await appIcon(512, .6));   // inside the 80% safe circle
await out('favicon/site.webmanifest', JSON.stringify({ name: 'darkwinter', short_name: 'darkwinter', theme_color: '#0b0612', background_color: PAPER, display: 'standalone',
  icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }] }, null, 2) + '\n');
await out('favicon/head.html', `<!-- darkwinter icons: put the files from this folder at the site root -->
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0b0612">
`);

/* ---------- 3D avatars: the Signal component in its rest pose ---------- */
await page.evaluate(async () => { await import('/darkwinter-signal/dist/darkwinter-signal.js'); });
for (const [id, name] of ERAS) {
  await page.evaluate(id => { document.body.innerHTML = `<darkwinter-signal era="${id}" pose="rest" hint="off"></darkwinter-signal>`; }, id);
  await page.waitForTimeout(2500);
  await out(`avatars/darkwinter-avatar-${id}-${name}.png`, await page.locator('darkwinter-signal').screenshot());
}
await browser.close(); srv.close();
