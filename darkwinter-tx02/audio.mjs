// darkwinter TX-02 score — synthesized sample by sample (no samples or loops).
// v2, "steady build": a 120 BPM grid in A minor that lifts to C major on the lockup. There are no impacts, crashes,
// alarms or snare rolls. One unbroken pulse runs from power-on to the end, and sections change through filter
// sweeps, swells and pitch, the way slow synthwave moves between sections. The tape wobble is loose while the screen
// says "flying blind" and steadies as each system links. Every event still lands on the cues in index.html.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 48000, DUR = 20, N = SR * DUR, TAU = Math.PI * 2;
const L = new Float32Array(N), R = new Float32Array(N), RL = new Float32Array(N), RR = new Float32Array(N), DL = new Float32Array(N), DR = new Float32Array(N);
let seed = 1974; const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296; const noise = () => rand() * 2 - 1;
const mtof = n => 440 * 2 ** ((n - 69) / 12);
const NOTE = s => { const m = /^([A-G])(#|b)?(-?\d)$/.exec(s); return 12 * (+m[3] + 1) + { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0); };
const notes = s => s.split(' ').map(NOTE);
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x)), smooth = x => { x = clamp(x); return x * x * (3 - 2 * x); };
function voice(t0, dur, fn, { gain = 1, pan = 0, rev = 0, dly = 0 } = {}) {
  const i0 = Math.round(t0 * SR), n = Math.round(dur * SR), gl = gain * Math.cos((pan + 1) * Math.PI / 4), gr = gain * Math.sin((pan + 1) * Math.PI / 4);
  for (let k = 0; k < n; k++) { const i = i0 + k; if (i < 0 || i >= N) continue; const v = fn(k / SR, k / n, t0 + k / SR), l = v * gl, r = v * gr;
    L[i] += l; R[i] += r; if (rev) { RL[i] += l * rev; RR[i] += r * rev; } if (dly) { DL[i] += l * dly; DR[i] += r * dly; } }
}
const lp1 = () => { let y = 0; return (x, fc) => (y += (1 - Math.exp(-TAU * fc / SR)) * (x - y)); };
const svf = () => { let lo = 0, bp = 0; return (x, fc, q = .5) => { const F = 2 * Math.sin(Math.PI * Math.min(fc, SR / 6.5) / SR); const hi = x - lo - q * bp; bp += F * hi; lo += F * bp; return { lo, bp, hi }; }; };
const saw = (f, t, o = 0) => 2 * ((f * t + o) % 1) - 1, tri = (f, t, o = 0) => 1 - 4 * Math.abs(((f * t + o) % 1) - .5);

/* ---------- the one automation curve: where the filter sits over the 20 seconds ----------
   It climbs steadily to the countdown, takes a short breath just before GO, then opens on the lockup. */
const KEYS = [[0, 320], [1.5, 520], [5, 820], [7.5, 1700], [8, 1500], [13, 3000], [15.45, 5200], [15.95, 900], [16.05, 3600], [19.4, 2400], [20, 2000]];
function cutoff(t) { for (let i = 1; i < KEYS.length; i++) if (t <= KEYS[i][0]) { const [a, fa] = KEYS[i - 1], [b, fb] = KEYS[i]; return fa * (fb / fa) ** smooth((t - a) / (b - a)); } return KEYS.at(-1)[1]; }

/* ---------- instruments: everything has a soft attack ---------- */
const kicks = [];
// a round, felt-like kick: a sine with a short pitch drop and no click
function kick(t0, g = 1) { kicks.push(t0); let ph = 0; const f = lp1(); voice(t0, .6, τ => { ph += TAU * (44 + 70 * Math.exp(-τ * 22)) / SR; return f(Math.sin(ph), 400) * Math.min(1, τ / .006) * Math.exp(-τ * 5.5); }, { gain: .62 * g }); }
// a brushed hat: high-passed noise with a slower attack than a stick hit
function hat(t0, g = .03, pan = .3) { const f = lp1(), h = lp1(); voice(t0, .12, τ => { const x = noise(); return h(x - f(x, 7000), 12000) * Math.min(1, τ / .004) * Math.exp(-τ * 45); }, { gain: g, pan, rev: .2 }); }
// a tick for the toggles: a muffled relay, not a clunk
function tick(t0, g = .12, pan = 0) { const f = svf(); voice(t0, .05, τ => f(noise(), 2400, 1.2).bp * Math.min(1, τ / .0015) * Math.exp(-τ * 120), { gain: g, pan, rev: .25 }); }
// an FM bell for the lamps and the countdown
function bell(t0, n, g = .07, pan = 0, dur = 2.4) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ + 1.1 * Math.exp(-τ * 5) * Math.sin(TAU * f * 3.5 * τ)) * Math.min(1, τ / .006) * Math.exp(-τ * 1.9) * Math.min(1, (1 - u) * 8), { gain: g, pan, rev: .55, dly: .35 }); }
// soft telemetry: quiet sine blips far back in the mix
function blip(t0, f, g = .02, pan = 0) { voice(t0, .07, (τ, u) => Math.sin(TAU * f * τ) * Math.sin(Math.PI * u), { gain: g, pan, rev: .5, dly: .4 }); }
// the pulse: eighth-note bass whose filter follows cutoff(t)
function pulse(t0, n, dur, g = .2) { const fr = mtof(n), a = lp1(), b = lp1(); voice(t0, dur, (τ, u, t) => { const x = saw(fr, τ) * .55 + tri(fr / 2, τ) * .45, fc = Math.min(1400, cutoff(t) * .55) * (.6 + .6 * Math.exp(-τ * 9)); return Math.tanh(b(a(x, fc), fc) * 1.6) * Math.min(1, τ / .008) * Math.min(1, (1 - u) * dur / .03); }, { gain: g }); }
// the pad: detuned saws through cutoff(t), slow attack and release
function pad(t0, dur, ns, g = .04, { atk = .5, rel = .8, glide = null } = {}) { ns.forEach((n, j) => { for (const det of [-.07, .07]) { const f = mtof(n + det), a = lp1(), b = lp1(); let ph = j * .21;
  voice(t0, dur, (τ, u, t) => { ph += f * (glide ? glide(τ) : 1) / SR; const x = 2 * (ph % 1) - 1, fc = cutoff(t); return b(a(x * .7 + Math.sin(TAU * ph) * .3, fc), fc) * smooth(τ / atk) * smooth((1 - u) * dur / rel); }, { gain: g, pan: det < 0 ? -.6 : .6, rev: .55 }); } }); }
// a pluck arp: rounded square into the ping-pong delay
function arp(t0, n, dur, g = .04, pan = 0) { const f = mtof(n), a = lp1(); voice(t0, dur, (τ, u, t) => a(Math.tanh(Math.sin(TAU * f * τ) * 2.4) * .7 + saw(f * 2.002, τ) * .2, Math.min(4200, cutoff(t))) * Math.min(1, τ / .004) * Math.exp(-τ * 9), { gain: g, pan, dly: .55, rev: .3 }); }
// a reverse swell: a chord whose volume rises toward a target time, with an air layer under it
function swell(tEnd, dur, ns, g = .05) { ns.forEach((n, j) => { const f = mtof(n); voice(tEnd - dur, dur, (τ, u) => (Math.sin(TAU * f * τ + j) + .3 * Math.sin(TAU * f * 2 * τ)) * u ** 3.2 * Math.min(1, (1 - u) * dur / .02), { gain: g, pan: (j % 2 ? .4 : -.4), rev: .8 }); });
  const s = svf(); voice(tEnd - dur, dur, (τ, u) => s(noise(), 600 + 5000 * u * u, .4).bp * u ** 3 * Math.min(1, (1 - u) * dur / .02), { gain: g * 2.2, rev: .6 }); }
// a shimmer riser: harmonics gliding up an octave, tonal rather than a noise wash
function shimmer(t0, dur, root, g = .03) { [0, 7, 12, 19, 24].forEach((iv, j) => { const f0 = mtof(root + iv); let ph = 0; voice(t0, dur, (τ, u) => { ph += f0 * 2 ** smooth(u) / SR; return Math.sin(TAU * ph) * u ** 2 * (1 - smooth((u - .9) / .1)); }, { gain: g / (1 + j * .4), pan: (j % 2 ? .5 : -.5), rev: .7, dly: .3 }); }); }
// a sub bloom: low sine with a slow attack, felt rather than heard as a hit
function bloom(t0, n, dur, g = .3) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ) * smooth(τ / .12) * (1 - smooth(u)), { gain: g }); }

/* =====================================================================
   SCORE
   ===================================================================== */
const PROG = [['A2', 'A3 C4 E4 G4 B4'], ['F2', 'F3 A3 C4 E4 G4'], ['C3', 'G3 C4 E4 G4 D5'], ['G2', 'G3 B3 D4 E4 A4']].map(([b, c]) => [NOTE(b), notes(c)]);
const PENTA = notes('A4 C5 D5 E5 G5 A5 C6 D6');

// mains hum, very low, under the first act only
voice(.1, 8, (τ, u) => (Math.sin(TAU * 60 * τ) * .6 + Math.sin(TAU * 120 * τ) * .25) * smooth(τ / .4) * (1 - smooth(u)), { gain: .025 });

// 0–1.5 power on: the reel spins up and the opening chord rises into pitch from below, instead of a hit
tick(.2, .18, -.3);
pad(.15, 2.2, notes('A2 E3 G3 B3 C4'), .05, { atk: .9, rel: .6, glide: τ => .5 + .5 * smooth(τ / 1.25) });

// 1.5–5 flying blind: the pulse starts muted and never stops; a suspended chord sits unresolved; telemetry is distant
for (let t = 1.5; t < 8.0; t += .25) pulse(t, PROG[0][0] + (Math.round(t * 4) % 4 === 2 ? 12 : 0), .22, .12 + .06 * smooth((t - 1.5) / 6));
pad(1.9, 2.4, notes('A3 D4 E4 B4'), .035, { atk: 1 });          // Asus2/4: unsettled, never resolving
pad(3.9, 1.6, notes('F3 C4 E4 G4'), .035, { atk: .8 });
for (let t = 1.7; t < 6.6; t += .22) if (rand() < .45) blip(t, mtof(PENTA[Math.floor(rand() * 8)] + 12), .012 + .006 * rand(), (rand() - .5) * 1.4);

// 5–7.5 connect every system: each switch lights a lamp, and the lamps play a rising line
pad(5.2, 2.6, notes('D3 A3 C4 E4 G4'), .04, { atk: .9, rel: .5 });
for (let i = 0; i < 8; i++) { const t = 5 + i * .25, p = -.7 + i * .2; tick(t, .12, p); bell(t + .01, PENTA[i], .05 + i * .004, p, 1.6); }
for (let t = 6.0; t < 8.0; t += .125) hat(t, .008 + .012 * smooth((t - 6) / 2), Math.round(t * 8) % 2 ? .3 : -.3);

// 7.5 signal acquired: a soft two-note bell, then a reverse swell that crests exactly on 8.0
bell(7.5, NOTE('E5'), .05, -.2, 2); bell(7.5, NOTE('A5'), .04, .2, 2);
swell(8.0, 1.0, notes('A3 E4 A4 C5'), .03);

// 8–13 the mark: the groove arrives with a sub bloom, not an impact; everything after builds by addition
bloom(8.0, NOTE('A1'), 1.6, .15);
for (let t = 8.0; t < 15.5; t += .5) kick(t, .55 + .25 * smooth((t - 8) / 6));
for (let t = 8.0; t < 16.0; t += .25) { const bar = Math.floor((t - 8) / 2) % 4, st = Math.round(t * 4) % 4; pulse(t, PROG[bar][0] + [0, 0, 12, 7][st], .22, .17 + .04 * smooth((t - 8) / 7)); }
for (let b = 0; b < 4; b++) pad(8 + b * 2, 2.1, PROG[b][1], .038, { atk: .25, rel: .3 });
for (let t = 8.0; t < 15.5; t += .125) { const s = Math.round(t * 8) % 2; if (t < 11 && s === 0) continue; hat(t, (s ? .022 : .012) * (.5 + .5 * smooth((t - 8) / 5)), Math.round(t * 8) % 4 < 2 ? .3 : -.3); }
for (let t = 9.0; t < 15.5; t += .125) { const bar = Math.floor((t - 8) / 2) % 4, ch = PROG[bar][1], k = Math.round(t * 8) % 8; arp(t, ch[[0, 1, 2, 3, 4, 3, 2, 1][k]] + 12, .25, .024 + .018 * smooth((t - 9) / 6), k % 2 ? .45 : -.45); }
for (const [t, p] of [[10.0, -.5], [10.4, -.2], [10.8, .1]]) blip(t, 2637, .015, p);            // the three readouts resolving

// 13–16 countdown: the build peaks by opening up, not by getting louder
shimmer(13.0, 2.95, NOTE('A4'), .022);
for (const [t, n] of [[13.5, 'E5'], [14.5, 'G5'], [15.5, 'B5']]) bell(t, NOTE(n), .075, 0, 2.2); // T-3, T-2, T-1 climb to the leading tone
// 15.5–16 the breath: kick and hats stop, the filter closes for half a second (see KEYS), and the B5 hangs

// 16–20 lockup: the B resolves up to C and the key lifts to C major, with a slow bloom under the wordmark
bell(16.0, NOTE('C6'), .08, 0, 3); bell(16.0, NOTE('G5'), .04, -.3, 3); bell(16.02, NOTE('E6'), .03, .3, 3);
bloom(16.0, NOTE('C2'), 3.2, .26);
pad(15.98, 3.9, notes('C3 G3 B3 D4 E4 G4'), .045, { atk: .35, rel: 1.2 });
for (let t = 16.0; t < 19.4; t += .25) pulse(t, NOTE('C2') + [0, 12, 7, 12][Math.round(t * 4) % 4], .22, .16 * (1 - .5 * smooth((t - 16) / 3.4)));
for (const t of [16.0, 17.0, 18.0]) kick(t, .5 - (t - 16) * .1);
const CPENTA = notes('C6 G5 E5 D5 C5 G5 E5 D5');
for (let t = 16.5; t < 19.3; t += .25) { const k = Math.round(t * 4) % 8; arp(t, CPENTA[k], .3, .036 * (1 - smooth((t - 16.5) / 2.8)), k % 2 ? .5 : -.5); }
tick(19.35, .14, .2);   // the CRT relay; the tape stop below is the only "ending" gesture

/* ---------- buses, tape, master ---------- */
function reverb(inp, offs) { const out = new Float32Array(N);
  const combs = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100 * 1.25)), i: 0, f: 0 }));
  const aps = [556, 441, 341, 225].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100)), i: 0 }));
  for (let n = 0; n < N; n++) { let s = 0; const x = inp[n] * .22;
    for (const c of combs) { const y = c.b[c.i]; c.f = y * .55 + c.f * .45; c.b[c.i] = x + c.f * .88; c.i = (c.i + 1) % c.b.length; s += y; }
    for (const a of aps) { const y = a.b[a.i]; a.b[a.i] = s + y * .5; a.i = (a.i + 1) % a.b.length; s = y - s; } out[n] = s; }
  return out; }
const wl = reverb(RL, 0), wr = reverb(RR, 23);
const DT = Math.round(.375 * SR), dl = new Float32Array(N), dr = new Float32Array(N);
{ let fl = 0, fr = 0; for (let n = 0; n < N; n++) { const pl = n >= DT ? dr[n - DT] : 0, pr = n >= DT ? dl[n - DT] : 0; fl += .25 * (pl - fl); fr += .25 * (pr - fr); dl[n] = DL[n] + fl * .5; dr[n] = DR[n] + fr * .5; } }
kicks.sort((a, b) => a - b);
// a gentle sidechain: the pads and tails breathe with the kick rather than pump
const mixL = new Float32Array(N), mixR = new Float32Array(N);
for (let n = 0, ki = 0; n < N; n++) { const t = n / SR; while (ki + 1 < kicks.length && kicks[ki + 1] <= t) ki++;
  const dk = kicks.length && kicks[ki] <= t ? t - kicks[ki] : 9, duck = 1 - .28 * Math.exp(-dk * 6);
  mixL[n] = L[n] + (wl[n] * .6 + dl[n] * .45) * duck; mixR[n] = R[n] + (wr[n] * .6 + dr[n] * .45) * duck; }
// tape: the wow is loose while flying blind and locks in as the systems link; a tape stop at the end; soft saturation and hiss
const wowDepth = t => .0016 + .0042 * (smooth((t - 1.2) / .6) - smooth((t - 5) / 2.5));
const outL = new Float32Array(N), outR = new Float32Array(N); let pos = 0, peak = 0; const tl = lp1(), tr = lp1();
for (let n = 0; n < N; n++) { const t = n / SR;
  let rate = 1 + wowDepth(t) * Math.sin(TAU * .55 * t) + .0008 * Math.sin(TAU * 6.8 * t);
  if (t > 19.4) rate *= Math.max(0, 1 - ((t - 19.4) / .55) ** 1.6);
  pos += rate; const i = Math.floor(pos), fr = pos - i, a = i < N ? mixL[i] : 0, b = i + 1 < N ? mixL[i + 1] : 0, c = i < N ? mixR[i] : 0, d = i + 1 < N ? mixR[i + 1] : 0;
  const hiss = noise() * .002, fade = Math.min(1, (DUR - t) / .03) * smooth(t / .08);
  outL[n] = Math.tanh(tl(a + (b - a) * fr, 10000) * 1.1) * fade + hiss; outR[n] = Math.tanh(tr(c + (d - c) * fr, 10000) * 1.1) * fade + hiss;
  peak = Math.max(peak, Math.abs(outL[n]), Math.abs(outR[n])); }
const norm = .89 / peak, buf = Buffer.alloc(44 + N * 4);
buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVE', 8); buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22);
buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
for (let n = 0; n < N; n++) { buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outL[n] * norm)) * 32767), 44 + n * 4); buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outR[n] * norm)) * 32767), 46 + n * 4); }
const out = join(dirname(fileURLToPath(import.meta.url)), 'soundtrack.wav'); writeFileSync(out, buf); console.log('wrote', out, 'peak', peak.toFixed(3));
