// darkwinter.ai hero teaser score, v2. Synthesized sample by sample (no samples or loops). Its own track under the
// darkwinter sound rules (../SOUND.md): D minor lifting to F major, a synthwave groove with a soft backbeat, a square
// arp through a ping-pong delay, and sixteenth-note octave bass. There are no impacts, crashes or snare rolls.
// Cues: the core ignites on a reverse swell (2.0); the chaos act detunes the pad, and it glides back into tune when
// the scan beam snaps the city into order (7.0); the triangle traces as a rising run (8.0); the sonic logo climbs
// A–C–E through the rush (13.5/14.5/15.5), the breath, and the resolve to F on the lockup (16.0). Writes soundtrack.wav.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 48000, DUR = 20, N = SR * DUR, TAU = Math.PI * 2;
const buf2 = () => [new Float32Array(N), new Float32Array(N)];
const [L, R] = buf2(), [RL, RR] = buf2(), [DL, DR] = buf2(), [CL, CR] = buf2();
let seed = 2026; const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296; const noise = () => rand() * 2 - 1;
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
const KEYS = [[0, 240], [2, 480], [4, 650], [7, 850], [7.08, 1300], [8, 1600], [13.5, 3300], [15.45, 6000], [15.95, 900], [16.05, 4200], [19.4, 2600], [20, 2200]];
function cutoff(t) { for (let i = 1; i < KEYS.length; i++) if (t <= KEYS[i][0]) { const [a, fa] = KEYS[i - 1], [b, fb] = KEYS[i]; return fa * (fb / fa) ** smooth((t - a) / (b - a)); } return KEYS.at(-1)[1]; }

/* ---------- instruments ---------- */
const kicks = [];
function kick(t0, g = 1, cut = 650) { kicks.push(t0); let ph = 0; const f = lp1(); voice(t0, .5, τ => { ph += TAU * (48 + 90 * Math.exp(-τ * 28)) / SR; return f(Math.sin(ph), cut) * Math.min(1, τ / .004) * Math.exp(-τ * 6.5); }, { gain: .62 * g }); }
// the synthwave backbeat, softened: a short body and a big room, no hard gate
function snare(t0, g = 1) { let ph = 0; const f = svf(), lp = lp1(); voice(t0, .45, τ => { ph += TAU * (185 + 40 * Math.exp(-τ * 30)) / SR; return lp(Math.sin(ph) * Math.exp(-τ * 22) * .55 + f(noise(), 1800, .9).bp * Math.exp(-τ * 10) * 1.1, 5000) * Math.min(1, τ / .004); }, { gain: .17 * g, rev: 1.4 }); }
function hat(t0, g = .03, pan = .3) { const f = lp1(), h = lp1(); voice(t0, .1, τ => { const x = noise(); return h(x - f(x, 7500), 11000) * Math.min(1, τ / .003) * Math.exp(-τ * 50); }, { gain: g, pan, rev: .15 }); }
// THE DARKWINTER SIGNAL BELL (shared by every film, see ../SOUND.md)
function bell(t0, n, g = .07, pan = 0, dur = 2.4) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ + 1.1 * Math.exp(-τ * 5) * Math.sin(TAU * f * 3.5 * τ)) * Math.min(1, τ / .006) * Math.exp(-τ * 1.9) * Math.min(1, (1 - u) * 8), { gain: g, pan, rev: .55, dly: .35 }); }
// console keys: tiny filtered ticks, far back
function key(t0, g = .03, pan = 0) { const f = svf(); voice(t0, .03, τ => f(noise(), 3200 + 900 * Math.sin(t0 * 77), 1.4).bp * Math.min(1, τ / .001) * Math.exp(-τ * 220), { gain: g, pan, rev: .2 }); }
// the pulse: sixteenth-note octave bass whose filter follows cutoff(t)
function pulse(t0, n, g = .14) { const fr = mtof(n), a = svf(); voice(t0, .12, (τ, u, t) => { const x = saw(fr, τ) * .7 + saw(fr * 1.004, τ) * .3, fc = Math.min(2200, cutoff(t) * .6) * (.4 + 1.2 * Math.exp(-τ * 26)); return Math.tanh(a(x, fc, .6).lo * 1.4) * Math.min(1, τ / .004) * Math.min(1, (1 - u) * 6); }, { gain: g }); }
// the pad: detuned saws; `drift(t)` detunes it in semitones (the chaos act) and glides back into tune at the snap
function pad(t0, dur, ns, g = .03, { atk = .5, rel = .8, drift = null } = {}) { ns.forEach((n, j) => { for (const det of [-.1, 0, .1]) { const a = lp1(), b = lp1(); let ph = rand();
  voice(t0, dur, (τ, u, t) => { const dd = drift ? drift(t, j, det) : 0; ph += mtof(n + det + dd) / SR; const x = (2 * (ph % 1) - 1), fc = cutoff(t); return b(a(x, fc), fc) * smooth(τ / atk) * smooth((1 - u) * dur / rel); }, { gain: g, pan: det * 5, rev: .45, cho: true }); } }); }
// the hero arp: a square pluck into the ping-pong delay
function arp(t0, n, g = .03, pan = 0) { const f = mtof(n), a = lp1(); voice(t0, .3, (τ, u, t) => a((((f * τ) % 1) < .5 ? 1 : -1) * .6 + Math.sin(TAU * f * 2 * τ) * .3, Math.min(4800, cutoff(t) * 1.1)) * Math.min(1, τ / .003) * Math.exp(-τ * 11), { gain: g, pan, dly: .6, rev: .3 }); }
// glass: decode and trace notes
function glass(t0, n, g = .04, pan = 0) { const f = mtof(n); voice(t0, 1, (τ, u) => (Math.sin(TAU * f * τ) + .25 * Math.sin(TAU * f * 3 * τ) * Math.exp(-τ * 8)) * Math.min(1, τ / .003) * Math.exp(-τ * 4.5) * Math.min(1, (1 - u) * 6), { gain: g, pan, rev: .45, dly: .5 }); }
// a reverse swell: a chord rising into a downbeat, with air
function swell(tEnd, dur, ns, g = .03) { ns.forEach((n, j) => { const f = mtof(n); voice(tEnd - dur, dur, (τ, u) => (Math.sin(TAU * f * τ + j) + .3 * Math.sin(TAU * f * 2 * τ)) * u ** 3.2 * Math.min(1, (1 - u) * dur / .02), { gain: g, pan: (j % 2 ? .4 : -.4), rev: .8 }); });
  const s = svf(); voice(tEnd - dur, dur, (τ, u) => s(noise(), 600 + 5000 * u * u, .4).bp * u ** 3 * Math.min(1, (1 - u) * dur / .02), { gain: g * 2, rev: .6 }); }
// a tonal riser for the rush: harmonics gliding up an octave
function shimmer(t0, dur, root, g = .025) { [0, 7, 12, 19, 24].forEach((iv, j) => { const f0 = mtof(root + iv); let ph = 0; voice(t0, dur, (τ, u) => { ph += f0 * 2 ** smooth(u) / SR; return Math.sin(TAU * ph) * u ** 2 * (1 - smooth((u - .9) / .1)); }, { gain: g / (1 + j * .4), pan: (j % 2 ? .5 : -.5), rev: .7, dly: .3 }); }); }
function bloom(t0, n, dur, g = .2) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ) * smooth(τ / .12) * (1 - smooth(u)), { gain: g }); }
// soft interference for the chaos act: short, quiet, filtered blips instead of glitch bursts
function static_(t0, g = .012, pan = 0) { const f = svf(), fc = 900 + rand() * 2500; voice(t0, .06, (τ, u) => f(noise(), fc, 2.5).bp * Math.sin(Math.PI * u), { gain: g, pan, rev: .3, dly: .3 }); }

/* =====================================================================
   SCORE (cues match teaser.html)
   ===================================================================== */
// D minor: Dm(add9) | Bbmaj7 | F(add9) | C6, two seconds a chord; the lockup lifts to F major
const PROG = [['D2', 'D3 F3 A3 E4'], ['A#1', 'A#2 D3 F3 A3'], ['F2', 'F3 A3 C4 G4'], ['C2', 'C3 E3 G3 A3']].map(([b, c]) => [NOTE(b), notes(c)]);
const DM = NOTE('D2'), oct = [0, 12, 0, 12, 0, 12, 7, 12];

// I · SIGNAL (0–4): the CRT warms up on a low fifth; console keys; the core ignites on a reverse swell at 2.0
pad(.1, 4.2, notes('D2 A2'), .02, { atk: 1.4, rel: .6 });
for (let t = .55; t < 1.95; t += .045 + rand() * .05) key(t, .022 + rand() * .012, (rand() - .5) * .6);
swell(2.0, 1.1, notes('D3 A3 D4 F4'), .016);
bloom(2.0, NOTE('D2'), 1.8, .06); bell(2.0, NOTE('A5'), .04, 0, 2.4);
for (let t = 2.0; t < 8.0; t += .125) pulse(t, DM + oct[Math.round(t * 8) % 8], .07 + .07 * smooth((t - 2) / 6));
for (let t = 2.6; t < 3.9; t += .06 + rand() * .06) key(t, .018, (rand() - .5) * .6);

// II · CHAOS (4–8): the pad drifts out of tune and the interference crackles; at 7.0 the scan beam snaps it into tune
const chaos = (t, j, det) => { const amt = smooth((t - 4) / .8) * (1 - smooth((t - 7) / .35)); return amt * (.45 * Math.sin(TAU * (.31 + j * .17) * t + j * 2 + det * 30) + .25 * Math.sin(TAU * 1.7 * t + j)); };
pad(3.9, 4.3, notes('D3 F3 A3 C4 E4'), .026, { atk: .8, rel: .4, drift: chaos });
for (let t = 4.0; t < 7.0; t += .05) if (rand() < .3) static_(t, .008 + .01 * rand(), (rand() - .5) * 1.4);
for (let t = 4.0; t < 7.0; t += .25) if (rand() < .55) arp(t + (rand() - .5) * .06, PROG[0][1][Math.floor(rand() * 4)] + 12 + (rand() < .3 ? 1 : 0), .012, (rand() - .5));   // stray, slightly wrong notes
glass(7.0, NOTE('A5'), .04, 0); glass(7.02, NOTE('D6'), .03, .2);                   // the snap: two clean notes as everything lands in tune
for (let t = 6.0; t < 8.0; t += .25) hat(t + .125, .006 + .012 * smooth((t - 6) / 2), Math.round(t * 4) % 2 ? .3 : -.3);
for (const t of [7.0, 7.5]) kick(t, .3, 300);

// III · SYSTEM (8–14): the triangle traces from the apex as a rising run; the synthwave groove builds by addition
[0, 3, 5, 7, 10, 12, 15, 17].forEach((iv, i) => glass(8.0 + i * .11, NOTE('D5') + iv, .035 + i * .003, -.6 + i * .17));
bloom(8.0, NOTE('D1'), 1.4, .12);
for (let t = 8.0; t < 15.5; t += .5) kick(t, .6 + .2 * smooth((t - 8) / 5));
for (let t = 8.5; t < 13.5; t += 1) snare(t, .7 + .3 * smooth((t - 8.5) / 4));
for (let t = 8.0; t < 15.5; t += .25) { const off = Math.round(t * 4) % 2; hat(t, off ? .02 : .009, off ? .3 : -.3); }
for (let t = 8.0; t < 16.0; t += .125) { const bar = Math.floor((t - 8) / 2) % 4; pulse(t, PROG[bar][0] + oct[Math.round(t * 8) % 8], .15 + .03 * smooth((t - 8) / 7)); }
for (let b = 0; b < 3; b++) pad(8 + b * 2, 2.1, PROG[b][1], .022, { atk: .25, rel: .3 });
pad(14, 2.0, PROG[3][1], .022, { atk: .3, rel: .4 });
const ARP = [0, 1, 2, 3, 2, 3, 1, 2];
for (let t = 9.0; t < 15.5; t += .125) { const bar = Math.floor((t - 8) / 2) % 4, ch = PROG[bar][1], k = Math.round(t * 8) % 8; arp(t, ch[ARP[k]] + 12, .014 + .02 * smooth((t - 9) / 6), k % 2 ? .45 : -.45); }

// IV · RUSH (14–16): the tunnel opens up instead of a snare roll; the sonic logo climbs A–C–E over it, then the breath
shimmer(13.0, 2.95, NOTE('D4'), .022);
for (const [t, n] of [[13.5, 'A5'], [14.5, 'C6'], [15.5, 'E6']]) bell(t, NOTE(n), .07, 0, 2.2);

// V · SIGNAL (16–20): E resolves up to F and the key lifts to F major under the wordmark
bell(16.0, NOTE('F6'), .08, 0, 3); bell(16.0, NOTE('C6'), .04, -.3, 3); bell(16.02, NOTE('A6'), .025, .3, 3);
bloom(16.0, NOTE('F1'), 3, .2);
pad(15.98, 3.9, notes('F2 C3 E3 G3 A3 C4'), .03, { atk: .35, rel: 1.2 });
for (let t = 16.0; t < 19.4; t += .125) pulse(t, NOTE('F1') + oct[Math.round(t * 8) % 8], .14 * (1 - .5 * smooth((t - 16) / 3.4)));
for (let t = 16.0; t < 19.0; t += .5) kick(t, .5 - (t - 16) * .08);
for (const t of [16.5, 17.5, 18.5]) snare(t, .55 - (t - 16.5) * .15);
for (let i = 0; i < 13; i++) glass(16.15 + i * .05, NOTE('F5') + [0, 4, 7, 12][i % 4], .012, -.5 + i * .08);   // the wordmark decodes
const FARP = notes('F5 C6 A5 E6 C6 A5 G5 C6');
for (let t = 16.5; t < 19.3; t += .25) { const k = Math.round(t * 4) % 8; arp(t, FARP[k], .03 * (1 - smooth((t - 16.5) / 2.8)), k % 2 ? .5 : -.5); }

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
