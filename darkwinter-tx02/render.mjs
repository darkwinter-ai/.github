// Renders index.html frame-by-frame in headless Chromium (software WebGL) and pipes PNGs into ffmpeg.
// usage: node render.mjs [--frames a-b] [--stills 30,120,...]
// Serves the repo root so the page can import three.js from ../node_modules (run `npm ci` first).
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { extname, join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let playwright; try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }
const DIR = dirname(fileURLToPath(import.meta.url)), ROOT = resolve(DIR, '..');
const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, all) => (v.startsWith('--') ? a.push([v.slice(2), all[i + 1]]) : a, a), []));
const [F0, F1] = (args.frames ?? '0-1199').split('-').map(Number);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.woff2': 'font/woff2', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  try { const p = join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!p.startsWith(ROOT)) throw 0;
    res.writeHead(200, { 'content-type': TYPES[extname(p)] ?? 'application/octet-stream' }); res.end(await readFile(p)); }
  catch { res.writeHead(404); res.end(); }
}).listen(0);
const browser = await playwright.chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--font-render-hinting=none'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
page.on('pageerror', e => { console.error('[pageerror]', e); process.exit(1); });
await page.goto(`http://localhost:${server.address().port}/darkwinter-tx02/index.html?render`);
await page.evaluate(() => window.ready);
const grab = f => page.evaluate(f => { window.renderFrame(f); return document.getElementById('c').toDataURL('image/png').split(',')[1]; }, f);
if (args.stills) {
  await mkdir(join(DIR, 'stills'), { recursive: true });
  for (const f of args.stills.split(',').map(Number)) await writeFile(join(DIR, 'stills', `f${String(f).padStart(4, '0')}.png`), Buffer.from(await grab(f), 'base64'));
} else {
  const out = args.out ?? join(DIR, 'video-only.mp4');
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '60', '-c:v', 'png', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '14', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const t0 = Date.now();
  for (let f = F0; f <= F1; f++) { const png = Buffer.from(await grab(f), 'base64'); if (!ff.stdin.write(png)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % 60 === 0) console.log(`frame ${f}/${F1}  ${((Date.now() - t0) / 1000).toFixed(1)}s`); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r)); console.log('wrote', out);
}
await browser.close(); server.close();
