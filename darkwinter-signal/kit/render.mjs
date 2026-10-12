// Renders the darkwinter sound kit to WAV files with the exact engine the website uses (dist/darkwinter-signal-sound.js),
// offline in headless Chromium through Tone.Offline. Run `node build.mjs` first.
//   kit/logo/   the sonic logo per era (4 s): the signal bell climbs 3–5–7 and resolves to the tonic
//   kit/sting/  the build plus the sonic logo per era (6 s): video endings, social, presentations
//   kit/ui/     product UI sounds on the clean Mark voices: tap, hover, success, notify, signal
//   kit/ambience/  a 20 s ambience bed per era: podcast intros, event loops, booth screens
import { createRequire } from 'node:module'; import { createServer } from 'node:http'; import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname, resolve, extname } from 'node:path'; import { fileURLToPath } from 'node:url'; import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
let playwright; try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }
const DIR = dirname(fileURLToPath(import.meta.url)), ROOT = resolve(DIR, '..'), SR = 48000;
const srv = createServer(async (q, r) => {
  if (q.url.startsWith('/kit.html')) { r.writeHead(200, { 'content-type': 'text/html' }); r.end('<!doctype html><title>kit</title>'); return; }
  try { const p = join(ROOT, decodeURIComponent(q.url.split('?')[0])); if (!p.startsWith(ROOT)) throw 0; r.writeHead(200, { 'content-type': extname(p) === '.js' ? 'text/javascript' : 'application/octet-stream' }); r.end(await readFile(p)); }
  catch { r.writeHead(404); r.end(); }
}).listen(0);
const browser = await playwright.chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage(); page.on('pageerror', e => { console.error(e); process.exit(1); });
await page.goto(`http://localhost:${srv.address().port}/kit.html`);
await page.evaluate(async () => { window.mod = await import('/dist/darkwinter-signal-sound.js'); });

const ERAS = { '00': 'mark', '01': 'synthwave', '02': 'cassette', '05': 'noir', '06': 'colony' };
const JOBS = [];
for (const [id, name] of Object.entries(ERAS)) {
  JOBS.push({ dir: 'logo', file: `darkwinter-logo-${id}-${name}`, id, dur: 4, act: 'logo', peak: -1 });
  JOBS.push({ dir: 'sting', file: `darkwinter-sting-${id}-${name}`, id, dur: 6, act: 'sting', peak: -1 });
  JOBS.push({ dir: 'ambience', file: `darkwinter-ambience-${id}-${name}`, id, dur: 20, act: 'ambience', lufs: -24 });
}
for (const ui of ['tap', 'hover', 'success', 'notify', 'signal']) JOBS.push({ dir: 'ui', file: `darkwinter-ui-${ui}`, id: '00', dur: ui === 'signal' || ui === 'success' ? 2.5 : 1.2, act: 'ui', ui, peak: ui === 'hover' ? -14 : ui === 'tap' ? -10 : -6 });

function wav(chs) { const n = chs[0].length, b = Buffer.alloc(44 + n * 4);
  b.write('RIFF', 0); b.writeUInt32LE(36 + n * 4, 4); b.write('WAVE', 8); b.write('fmt ', 12); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(2, 22);
  b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 4, 28); b.writeUInt16LE(4, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(n * 4, 40);
  for (let i = 0; i < n; i++) for (let c = 0; c < 2; c++) b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, chs[c][i])) * 32767), 44 + i * 4 + c * 2); return b; }

for (const j of JOBS) {
  const b64 = await page.evaluate(async ({ id, dur, act, ui }) => {
    const { Tone, makeKit } = window.mod;
    const buf = await Tone.Offline(async () => { const kit = makeKit(id); await kit.ready;
      if (act === 'logo') kit.logo();
      if (act === 'sting') { kit.build(); kit.logo(2.3); }
      if (act === 'ambience') kit.start();
      if (act === 'ui') kit.ui(ui);
    }, dur, 2, 48000);
    return buf.toArray().map(a => { const u = new Uint8Array(a.buffer); let s = ''; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000)); return btoa(s); });
  }, j);
  const chs = b64.map(s => { const u = Buffer.from(s, 'base64'); return new Float32Array(u.buffer, u.byteOffset, u.length / 4); });
  const n = chs[0].length;
  if (j.act === 'ambience') for (let i = 0; i < n; i++) { const f = Math.min(1, i / (SR * 2.5), (n - i) / (SR * 3)); chs[0][i] *= f; chs[1][i] *= f; }  // fade in and out
  else { const fo = Math.round(SR * .25); for (let i = n - fo; i < n; i++) { const f = (n - i) / fo; chs[0][i] *= f; chs[1][i] *= f; } }
  let pk = 0; for (const c of chs) for (const v of c) pk = Math.max(pk, Math.abs(v));
  if (pk === 0) throw new Error(j.file + ' rendered silent');
  const g = j.peak !== undefined ? 10 ** (j.peak / 20) / pk : 1; for (const c of chs) for (let i = 0; i < n; i++) c[i] *= g;
  await mkdir(join(DIR, j.dir), { recursive: true }); const out = join(DIR, j.dir, j.file + '.wav'); await writeFile(out, wav(chs));
  if (j.lufs) { const tmp = out + '.tmp.wav'; execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', out, '-af', `loudnorm=I=${j.lufs}:TP=-3:LRA=7`, '-ar', String(SR), tmp]); execFileSync('mv', [tmp, out]); }
  console.log(j.dir.padEnd(9), j.file);
}
await browser.close(); srv.close();
