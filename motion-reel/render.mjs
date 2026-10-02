// Renders reel.html frame-by-frame in headless Chromium and pipes PNGs into ffmpeg.
// usage: node render.mjs [--frames a-b] [--sub N] [--stills 30,120,...]
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }

const DIR = dirname(fileURLToPath(import.meta.url));
const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, all) => (v.startsWith('--') ? a.push([v.slice(2), all[i + 1]]) : a, a), []));
const SUB = Number(args.sub ?? 6);
const [F0, F1] = (args.frames ?? '0-899').split('-').map(Number);
const TYPES = { '.html': 'text/html', '.woff2': 'font/woff2', '.wav': 'audio/wav', '.js': 'text/javascript' };

const server = createServer(async (req, res) => {
  try { const p = join(DIR, decodeURIComponent(req.url.split('?')[0])); res.writeHead(200, { 'content-type': TYPES[extname(p)] ?? 'application/octet-stream' }); res.end(await readFile(p)); }
  catch { res.writeHead(404); res.end(); }
}).listen(0);
const port = server.address().port;

const browser = await playwright.chromium.launch({ args: ['--disable-gpu-vsync', '--font-render-hinting=none'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('console', m => console.log('[page]', m.text()));
page.on('pageerror', e => { console.error('[pageerror]', e); process.exit(1); });
await page.goto(`http://localhost:${port}/reel.html?render`);
await page.evaluate(() => window.ready);
console.log('particles:', await page.evaluate(() => window.particleCount()));

const grab = f => page.evaluate(([f, sub]) => { window.renderFrame(f, sub); return document.getElementById('c').toDataURL('image/png').split(',')[1]; }, [f, SUB]);

if (args.stills) {
  const { writeFile, mkdir } = await import('node:fs/promises');
  await mkdir(join(DIR, 'stills'), { recursive: true });
  for (const f of args.stills.split(',').map(Number)) await writeFile(join(DIR, 'stills', `f${String(f).padStart(4, '0')}.png`), Buffer.from(await grab(f), 'base64'));
} else {
  const out = args.out ?? join(DIR, 'video-only.mp4');
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '60', '-c:v', 'png', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '14', '-pix_fmt', 'yuv420p', '-tune', 'animation', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const t0 = Date.now();
  for (let f = F0; f <= F1; f++) {
    const png = Buffer.from(await grab(f), 'base64');
    if (!ff.stdin.write(png)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % 60 === 0) console.log(`frame ${f}/${F1}  ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  console.log('wrote', out);
}
await browser.close(); server.close();
