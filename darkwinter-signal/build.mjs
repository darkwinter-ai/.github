// Bundles the component into two self-contained ES modules (no CDN, no import map needed on the website):
//   dist/darkwinter-signal.js        the element, with three.js (loads with the page)
//   dist/darkwinter-signal-sound.js  Tone.js and the era kits (downloads only when a visitor turns sound on)
// Uses the esbuild already in node_modules (run `npm ci` at the repo root first).
import { build } from 'esbuild';
import { statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const DIR = dirname(fileURLToPath(import.meta.url));
const common = { bundle: true, format: 'esm', minify: true, target: 'es2022', legalComments: 'none', logLevel: 'warning' };
await build({ ...common, entryPoints: [join(DIR, 'src/signal.js')], outfile: join(DIR, 'dist/darkwinter-signal.js') });
await build({ ...common, entryPoints: [join(DIR, 'src/sound.js')], outfile: join(DIR, 'dist/darkwinter-signal-sound.js') });
for (const f of ['darkwinter-signal.js', 'darkwinter-signal-sound.js']) console.log(f, (statSync(join(DIR, 'dist', f)).size / 1024).toFixed(0) + ' KB');
