// darkwinter TX-01 "Night Drive" score — synthesized sample by sample (no samples or loops).
// The synthwave score from ../darkwinter-tx02/audio-synthwave.mjs, which follows the steady-build rules: no impacts,
// crashes, alarms or snare rolls, one pulse that never drops out, sections that change by filter, swell and pitch.
// The cues line up with this film: the eight bells at 5.0–6.75 light the eight lamps, the lead's pickup at 7.5 lands
// as the mark rises at 8.0, the E–G–B bells at 13.5/14.5/15.5 are the three exits, then the breath, and the lift to
// C major under the lockup at 16.0. Writes soundtrack.wav.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 48000, DUR = 20, N = SR * DUR, TAU = Math.PI * 2;
const buf2 = () => [new Float32Array(N), new Float32Array(N)];
const [L, R] = buf2(), [RL, RR] = buf2(), [DL, DR] = buf2(), [CL, CR] = buf2();
let seed = 1984; const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296; const noise = () => rand() * 2 - 1;
const mtof = n => 440 * 2 ** ((n - 69) / 12);
const NOTE = s => { const m = /^([A-G])(#|b)?(-?\d)$/.exec(s); return 12 * (+m[3] + 1) + { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0); };
const notes = s => s.split(' ').map(NOTE);
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x)), smooth = x => { x = clamp(x); return x * x * (3 - 2 * x); };
// cho: send to the chorus bus instead of the dry bus (pads)
function voice(t0, dur, fn, { gain = 1, pan = 0, rev = 0, dly = 0, cho = false } = {}) {
  const i0 = Math.round(t0 * SR), n = Math.round(dur * SR), gl = gain * Math.cos((pan + 1) * Math.PI / 4), gr = gain * Math.sin((pan + 1) * Math.PI / 4);
  const OL = cho ? CL : L, OR = cho ? CR : R;
  for (let k = 0; k < n; k++) { const i = i0 + k; if (i < 0 || i >= N) continue; const v = fn(k / SR, k / n, t0 + k / SR), l = v * gl, r = v * gr;
    OL[i] += l; OR[i] += r; if (rev) { RL[i] += l * rev; RR[i] += r * rev; } if (dly) { DL[i] += l * dly; DR[i] += r * dly; } }
}
const lp1 = () => { let y = 0; return (x, fc) => (y += (1 - Math.exp(-TAU * fc / SR)) * (x - y)); };
const svf = () => { let lo = 0, bp = 0; return (x, fc, q = .5) => { const F = 2 * Math.sin(Math.PI * Math.min(fc, SR / 6.5) / SR); const hi = x - lo - q * bp; bp += F * hi; lo += F * bp; return { lo, bp, hi }; }; };
const saw = (f, t, o = 0) => 2 * ((f * t + o) % 1) - 1;

/* ---------- the filter curve over the 20 seconds (same shape as v2: climb, breathe before GO, open) ---------- */
const KEYS = [[0, 260], [1.5, 480], [5, 800], [7.5, 1800], [8, 1700], [13, 3400], [15.45, 5600], [15.95, 1000], [16.05, 4000], [19.4, 2600], [20, 2200]];
function cutoff(t) { for (let i = 1; i < KEYS.length; i++) if (t <= KEYS[i][0]) { const [a, fa] = KEYS[i - 1], [b, fb] = KEYS[i]; return fa * (fb / fa) ** smooth((t - a) / (b - a)); } return KEYS.at(-1)[1]; }

/* ---------- instruments ---------- */
const kicks = [];
// a drum-machine kick, rounded: short pitch sweep and a soft, low-passed click
function kick(t0, g = 1) { kicks.push(t0); let ph = 0; const f = lp1(), c = lp1(); voice(t0, .5, τ => { ph += TAU * (48 + 95 * Math.exp(-τ * 30)) / SR; return f(Math.sin(ph), 600) * Math.min(1, τ / .003) * Math.exp(-τ * 6.5) + c(noise(), 1800) * Math.exp(-τ * 300) * .5; }, { gain: .6 * g }); }
// a roomy snare: the body is soft, most of its size comes from the reverb send
function snare(t0, g = 1) { let ph = 0; const f = svf(), lp = lp1(); voice(t0, .4, τ => { ph += TAU * (185 + 40 * Math.exp(-τ * 30)) / SR; return lp(Math.sin(ph) * Math.exp(-τ * 22) * .6 + f(noise(), 1700, .9).bp * Math.exp(-τ * 11) * 1.2, 5500) * Math.min(1, τ / .003); }, { gain: .2 * g, rev: 1.3, pan: .05 }); }
function hat(t0, g = .03, pan = .3, open = false) { const f = lp1(), h = lp1(); voice(t0, open ? .3 : .1, τ => { const x = noise(); return h(x - f(x, 7500), 11000) * Math.min(1, τ / .002) * Math.exp(-τ * (open ? 14 : 50)); }, { gain: g, pan, rev: .15 }); }
// a reverse cymbal: high noise swelling into the downbeat, cut with a short fade rather than a hit
function revCym(tEnd, dur, g = .07) { const f = lp1(), s = lp1(); voice(tEnd - dur, dur, (τ, u) => { const x = noise(), hp = x - f(x, 3500); return s(hp, 4000 + 6000 * u) * u ** 3 * Math.min(1, (1 - u) * dur / .025); }, { gain: g, rev: .5 }); }
function tick(t0, g = .12, pan = 0) { const f = svf(); voice(t0, .05, τ => f(noise(), 2400, 1.2).bp * Math.min(1, τ / .0015) * Math.exp(-τ * 120), { gain: g, pan, rev: .25 }); }
// a DX-style bell for the lamps and the countdown
function bell(t0, n, g = .07, pan = 0, dur = 2.4) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ + 1.4 * Math.exp(-τ * 4) * Math.sin(TAU * f * 14 * τ) * .3 + .9 * Math.exp(-τ * 6) * Math.sin(TAU * f * 2 * τ)) * Math.min(1, τ / .004) * Math.exp(-τ * 2) * Math.min(1, (1 - u) * 8), { gain: g, pan, rev: .5, dly: .4 }); }
// the sequenced bass: 16ths, a pluck through cutoff(t)
function seqBass(t0, n, g = .16) { const fr = mtof(n), a = svf(); voice(t0, .12, (τ, u, t) => { const x = saw(fr, τ) * .7 + saw(fr * 1.004, τ) * .3, fc = Math.min(2400, cutoff(t) * .7) * (.35 + 1.4 * Math.exp(-τ * 28)); return Math.tanh(a(x, fc, .6).lo * 1.4) * Math.min(1, τ / .003) * Math.min(1, (1 - u) * 6); }, { gain: g }); }
// the poly pad: three detuned saws per note with a slow pulse-width-like shimmer, into the chorus bus
function pad(t0, dur, ns, g = .035, { atk = .5, rel = .8 } = {}) { ns.forEach((n, j) => { for (const det of [-.11, 0, .11]) { const f = mtof(n + det), a = lp1(), b = lp1(); let ph = rand();
  voice(t0, dur, (τ, u, t) => { ph += f / SR; const p = ph % 1, w = .5 + .35 * Math.sin(TAU * .3 * t + j), x = (2 * p - 1) * .6 + (p < w ? .4 : -.4), fc = cutoff(t); return b(a(x, fc), fc) * smooth(τ / atk) * smooth((1 - u) * dur / rel); }, { gain: g, pan: det * 5, rev: .45, cho: true }); } }); }
// the lead: one continuous voice per phrase so the notes glide into each other, with delayed vibrato
function lead(phrase, g = .06) { const t0 = phrase[0][0], end = phrase.at(-1)[0] + phrase.at(-1)[2] + .35, a = lp1(), b = lp1(); let p1 = 0, p2 = 0, cur = mtof(phrase[0][1]), k = 0;
  voice(t0, end - t0, (τ, u, t) => { while (k + 1 < phrase.length && t >= phrase[k + 1][0]) k++; const [ts, n, d] = phrase[k], since = t - ts;
    cur += (mtof(n) - cur) * (1 - Math.exp(-1 / (SR * .035)));
    const vib = 1 + .006 * smooth((since - .25) / .3) * Math.sin(TAU * 5.4 * t), f = cur * vib; p1 += f / SR; p2 += f * 1.006 / SR;
    const gap = phrase[k + 1] ? phrase[k + 1][0] - (ts + d) : 1, env = since < d ? Math.min(1, since / .02) : Math.max(0, 1 - (since - d) / Math.min(.3, Math.max(.06, gap)));
    const x = (2 * (p1 % 1) - 1) + (2 * (p2 % 1) - 1), fc = 1400 + 1800 * Math.exp(-since * 3);
    return b(a(x * .5, fc), fc) * env * smooth((end - t) / .3); }, { gain: g, pan: -.05, rev: .45, dly: .5 }); }
// a bright arp pluck
function arp(t0, n, g = .03, pan = 0) { const f = mtof(n), a = lp1(); voice(t0, .3, (τ, u, t) => a(saw(f, τ) * .6 + Math.sin(TAU * f * 2 * τ) * .4, Math.min(5000, cutoff(t) * 1.2)) * Math.min(1, τ / .003) * Math.exp(-τ * 12), { gain: g, pan, dly: .55, rev: .3 }); }
function bloom(t0, n, dur, g = .3) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ) * smooth(τ / .12) * (1 - smooth(u)), { gain: g }); }

/* =====================================================================
   SCORE (same cues as index.html)
   ===================================================================== */
const PROG = [['A1', 'A3 C4 E4 G4'], ['F1', 'F3 A3 C4 E4'], ['C2', 'G3 C4 E4 G4'], ['G1', 'G3 B3 D4 F#4']].map(([b, c]) => [NOTE(b), notes(c)]);
const PENTA = notes('A4 C5 D5 E5 G5 A5 C6 D6');
const bassPat = [0, 12, 0, 12, 0, 12, 7, 12];   // the octave-jumping synthwave sequence

// 0–1.5 power on: the pad blooms up through a closed filter; one bell as the raster opens
tick(.2, .16, -.3);
pad(.1, 2.0, notes('A2 E3 B3 C4 E4'), .018, { atk: 1.1, rel: .5 });
bell(1.0, NOTE('E5'), .035, .2, 2);

// 1.5–5 flying blind: the sequence starts, muffled; the chord hangs on a sus; distant telemetry
for (let t = 1.5; t < 8.0; t += .125) seqBass(t, PROG[0][0] + bassPat[Math.round(t * 8) % 8], .1 + .06 * smooth((t - 1.5) / 6));
pad(1.9, 2.3, notes('A3 D4 E4 B4'), .014, { atk: 1 });
pad(3.9, 1.5, notes('F3 C4 E4 G4'), .015, { atk: .8 });
for (let t = 3.0; t < 5.0; t += .5) hat(t + .25, .012 + .006 * (t - 3), .25);
for (let t = 1.7; t < 6.6; t += .22) if (rand() < .4) bell(t, PENTA[Math.floor(rand() * 8)] + 12, .006 + .004 * rand(), (rand() - .5) * 1.4, .4);

// 5–7.5 connect: each switch plays the next arp note; the kick fades in under a filter
pad(5.2, 2.6, notes('D3 A3 C4 E4 G4'), .02, { atk: .9, rel: .5 });
for (let i = 0; i < 8; i++) { const t = 5 + i * .25, p = -.7 + i * .2; tick(t, .1, p); bell(t + .01, PENTA[i], .045 + i * .004, p, 1.4); }
for (let t = 6.0; t < 7.5; t += .5) kick(t, .25 + .15 * (t - 6));
for (let t = 6.0; t < 8.0; t += .25) hat(t + .125, .008 + .012 * smooth((t - 6) / 2), Math.round(t * 4) % 2 ? .3 : -.3);
revCym(8.0, 1.6, .06);

// 7.5 signal acquired: the lead's pickup notes, landing on the downbeat as the mark builds
// 8–13 the mark: four-on-the-floor, a soft backbeat, the sequence opens, the lead takes the melody
bloom(8.0, NOTE('A1'), 1.4, .12);
for (let t = 8.0; t < 15.5; t += .5) kick(t, .6 + .2 * smooth((t - 8) / 5));
for (let t = 8.5; t < 13.0; t += 1) snare(t, .7 + .3 * smooth((t - 8.5) / 3));
for (let t = 8.0; t < 15.5; t += .25) { const off = Math.round(t * 4) % 2; hat(t, off ? .02 : .01, off ? .3 : -.3, off && Math.round(t * 4) % 4 === 3 && t > 10); }
for (let t = 8.0; t < 16.0; t += .125) { const bar = Math.floor((t - 8) / 2) % 4; seqBass(t, PROG[bar][0] + bassPat[Math.round(t * 8) % 8], .16 + .03 * smooth((t - 8) / 7)); }
for (let b = 0; b < 4; b++) pad(8 + b * 2, 2.1, PROG[b][1], .03, { atk: .2, rel: .3 });
const M = [[7.5, 'E5', .2], [7.75, 'G5', .2], [8.0, 'A5', .9], [9.0, 'G5', .45], [9.5, 'E5', .45],
  [10.0, 'F5', .7], [10.75, 'E5', .2], [11.0, 'C5', .9], [12.0, 'E5', .45], [12.5, 'G5', .45], [13.0, 'A5', .9]];
lead(M.map(([t, n, d]) => [t, NOTE(n), d]), .055);
for (let t = 10.0; t < 15.5; t += .125) { const bar = Math.floor((t - 8) / 2) % 4, ch = PROG[bar][1], k = Math.round(t * 8) % 8; arp(t, ch[[0, 1, 2, 3, 2, 3, 1, 2][k]] + 12, .012 + .022 * smooth((t - 10) / 5), k % 2 ? .5 : -.5); }

// 13–16 countdown: the snare steps out, the arp climbs, the bells count E–G–B; then the half-second breath
for (const [t, n] of [[13.5, 'E5'], [14.5, 'G5'], [15.5, 'B5']]) bell(t, NOTE(n), .065, 0, 2.2);
revCym(16.0, 2.0, .07);

// 16–20 lockup: the B resolves to C; the lead plays the hook in C major over a wide pad
bloom(16.0, NOTE('C2'), 3, .22);
bell(16.0, NOTE('C6'), .05, 0, 3);
pad(15.98, 3.9, notes('C3 G3 B3 D4 E4 G4'), .055, { atk: .3, rel: 1.2 });
for (let t = 16.0; t < 19.4; t += .125) seqBass(t, NOTE('C2') + bassPat[Math.round(t * 8) % 8], .15 * (1 - .5 * smooth((t - 16) / 3.4)));
for (let t = 16.0; t < 19.0; t += .5) kick(t, .5 - (t - 16) * .08);
for (const t of [16.5, 17.5, 18.5]) snare(t, .6 - (t - 16.5) * .15);
for (let t = 16.0; t < 19.0; t += .25) if (Math.round(t * 4) % 2) hat(t, .016 * (1 - (t - 16) / 3.4), .3);
const H = [[16.0, 'C6', .7], [16.75, 'B5', .2], [17.0, 'G5', .45], [17.5, 'E5', .45], [18.0, 'D5', .45], [18.5, 'E5', .3], [18.75, 'G5', .6]];
lead(H.map(([t, n, d]) => [t, NOTE(n), d]), .062);
tick(19.35, .14, .2);

/* ---------- buses: chorus, reverb, delay, sidechain, tape, master ---------- */
// chorus: two modulated delays, opposite phase per side
{ const srcL = CL.slice(), srcR = CR.slice();
  for (let n = 0; n < N; n++) { const t = n / SR, dL = (.009 + .0025 * Math.sin(TAU * .45 * t)) * SR, dR = (.009 + .0025 * Math.cos(TAU * .45 * t)) * SR;
    const tap = (src, d) => { const p = n - d, i = Math.floor(p), f = p - i; return i >= 0 && i + 1 < N ? src[i] * (1 - f) + src[i + 1] * f : 0; };
    L[n] += srcL[n] * .75 + tap(srcR, dL) * .55; R[n] += srcR[n] * .75 + tap(srcL, dR) * .55; } }
function reverb(inp, offs) { const out = new Float32Array(N);
  const combs = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100 * 1.4)), i: 0, f: 0 }));
  const aps = [556, 441, 341, 225].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100)), i: 0 }));
  for (let n = 0; n < N; n++) { let s = 0; const x = inp[n] * .2;
    for (const c of combs) { const y = c.b[c.i]; c.f = y * .5 + c.f * .5; c.b[c.i] = x + c.f * .89; c.i = (c.i + 1) % c.b.length; s += y; }
    for (const a of aps) { const y = a.b[a.i]; a.b[a.i] = s + y * .5; a.i = (a.i + 1) % a.b.length; s = y - s; } out[n] = s; }
  return out; }
const wl = reverb(RL, 0), wr = reverb(RR, 23);
const DT = Math.round(.375 * SR), dl = new Float32Array(N), dr = new Float32Array(N);
{ let fl = 0, fr = 0; for (let n = 0; n < N; n++) { const pl = n >= DT ? dr[n - DT] : 0, pr = n >= DT ? dl[n - DT] : 0; fl += .22 * (pl - fl); fr += .22 * (pr - fr); dl[n] = DL[n] + fl * .55; dr[n] = DR[n] + fr * .55; } }
kicks.sort((a, b) => a - b);
const mixL = new Float32Array(N), mixR = new Float32Array(N);
for (let n = 0, ki = 0; n < N; n++) { const t = n / SR; while (ki + 1 < kicks.length && kicks[ki + 1] <= t) ki++;
  const dk = kicks.length && kicks[ki] <= t ? t - kicks[ki] : 9, duck = 1 - .32 * Math.exp(-dk * 7);
  mixL[n] = L[n] * (1 - .12 * Math.exp(-dk * 7)) + (wl[n] * .55 + dl[n] * .45) * duck; mixR[n] = R[n] * (1 - .12 * Math.exp(-dk * 7)) + (wr[n] * .55 + dr[n] * .45) * duck; }
// tape: a light, constant wobble (the synthwave cut stays locked), the tape stop at the end, saturation and hiss
const outL = new Float32Array(N), outR = new Float32Array(N); let pos = 0, peak = 0; const tl = lp1(), tr = lp1();
for (let n = 0; n < N; n++) { const t = n / SR;
  let rate = 1 + .0014 * Math.sin(TAU * .55 * t) + .0006 * Math.sin(TAU * 6.8 * t);
  if (t > 19.4) rate *= Math.max(0, 1 - ((t - 19.4) / .55) ** 1.6);
  pos += rate; const i = Math.floor(pos), fr = pos - i, a = i < N ? mixL[i] : 0, b = i + 1 < N ? mixL[i + 1] : 0, c = i < N ? mixR[i] : 0, d = i + 1 < N ? mixR[i + 1] : 0;
  const hiss = noise() * .0015, fade = Math.min(1, (DUR - t) / .03) * smooth(t / .08);
  outL[n] = Math.tanh(tl(a + (b - a) * fr, 12000) * 1.1) * fade + hiss; outR[n] = Math.tanh(tr(c + (d - c) * fr, 12000) * 1.1) * fade + hiss;
  peak = Math.max(peak, Math.abs(outL[n]), Math.abs(outR[n])); }
const norm = .89 / peak, wav = Buffer.alloc(44 + N * 4);
wav.write('RIFF', 0); wav.writeUInt32LE(36 + N * 4, 4); wav.write('WAVE', 8); wav.write('fmt ', 12); wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(2, 22);
wav.writeUInt32LE(SR, 24); wav.writeUInt32LE(SR * 4, 28); wav.writeUInt16LE(4, 32); wav.writeUInt16LE(16, 34); wav.write('data', 36); wav.writeUInt32LE(N * 4, 40);
for (let n = 0; n < N; n++) { wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outL[n] * norm)) * 32767), 44 + n * 4); wav.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outR[n] * norm)) * 32767), 46 + n * 4); }
const out = join(dirname(fileURLToPath(import.meta.url)), 'soundtrack.wav'); writeFileSync(out, wav); console.log('wrote', out, 'peak', peak.toFixed(3));
