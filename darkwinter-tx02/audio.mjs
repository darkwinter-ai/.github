// darkwinter TX-02 score — synthesized sample by sample (no samples or loops).
// 120 BPM, A minor, 1970s mission control: relay clicks, telemetry beeps, an alarm, toggle clunks,
// an analog drum machine, a tape-wobbled pad, a countdown, and a tape stop. Every event matches index.html.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 48000, DUR = 20, N = SR * DUR, TAU = Math.PI * 2;
const L = new Float32Array(N), R = new Float32Array(N), RL = new Float32Array(N), RR = new Float32Array(N), DL = new Float32Array(N), DR = new Float32Array(N);
let seed = 1974; const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296; const noise = () => rand() * 2 - 1;
const mtof = n => 440 * 2 ** ((n - 69) / 12);
const NOTE = s => { const m = /^([A-G])(#|b)?(-?\d)$/.exec(s); return 12 * (+m[3] + 1) + { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0); };
function voice(t0, dur, fn, { gain = 1, pan = 0, rev = 0, dly = 0 } = {}) {
  const i0 = Math.round(t0 * SR), n = Math.round(dur * SR), gl = gain * Math.cos((pan + 1) * Math.PI / 4), gr = gain * Math.sin((pan + 1) * Math.PI / 4);
  for (let k = 0; k < n; k++) { const i = i0 + k; if (i < 0 || i >= N) continue; const v = fn(k / SR, k / n), l = v * gl, r = v * gr;
    L[i] += l; R[i] += r; if (rev) { RL[i] += l * rev; RR[i] += r * rev; } if (dly) { DL[i] += l * dly; DR[i] += r * dly; } }
}
const lp1 = () => { let y = 0; return (x, fc) => (y += (1 - Math.exp(-TAU * fc / SR)) * (x - y)); };
const svf = () => { let lo = 0, bp = 0; return (x, fc, q = .5) => { const F = 2 * Math.sin(Math.PI * Math.min(fc, SR / 6.5) / SR); const hi = x - lo - q * bp; bp += F * hi; lo += F * bp; return { lo, bp, hi }; }; };
const saw = (f, t, o = 0) => 2 * ((f * t + o) % 1) - 1, sq = (f, t, o = 0) => ((f * t + o) % 1) < .5 ? 1 : -1;

/* ---------- instruments ---------- */
const kicks = [];
function kick(t0, g = 1) { kicks.push(t0); let ph = 0; voice(t0, .5, τ => { ph += TAU * (46 + 120 * Math.exp(-τ * 28)) / SR; return Math.tanh(Math.sin(ph) * Math.exp(-τ * 7) * 2.2) + (τ < .002 ? noise() * .4 : 0); }, { gain: .75 * g }); }
function snare(t0, g = 1) { let ph = 0; const f = svf(); voice(t0, .32, τ => { ph += TAU * (210 * Math.exp(-τ * 9) + 150) / SR; const gate = τ < .22 ? 1 : Math.max(0, 1 - (τ - .22) / .02); return (Math.sin(ph) * Math.exp(-τ * 24) * .7 + f(noise(), 2200, .8).bp * Math.exp(-τ * 9) * 1.3) * gate; }, { gain: .38 * g, rev: .7 }); }
function hat(t0, g = .06, pan = .3) { const f = lp1(); voice(t0, .09, τ => { const x = noise(); return (x - f(x, 6500)) * Math.exp(-τ * 80); }, { gain: g, pan }); }
function relay(t0, g = .35, pan = 0) { const f = svf(); voice(t0, .05, τ => f(noise(), 3200, 1.4).bp * Math.exp(-τ * 160) + Math.sin(TAU * 900 * τ) * Math.exp(-τ * 220) * .5, { gain: g, pan, rev: .15 }); }
function clunk(t0, g = .5, pan = 0) { relay(t0, g * .8, pan); let ph = 0; voice(t0, .12, τ => { ph += TAU * (120 * Math.exp(-τ * 30) + 60) / SR; return Math.sin(ph) * Math.exp(-τ * 40); }, { gain: g * .6, pan }); }
function beep(t0, f, dur = .08, g = .12, pan = 0, type = 'sq') { const lp = lp1(); voice(t0, dur, (τ, u) => lp((type === 'sq' ? sq(f, τ) : Math.sin(TAU * f * τ)), 5000) * Math.min(1, τ / .003) * (u < .9 ? 1 : (1 - u) * 10), { gain: g, pan, dly: .25, rev: .15 }); }
function chirps(t0, n, g = .04, pan = 0) { for (let i = 0; i < n; i++) beep(t0 + i * .035, 1800 + rand() * 1600, .018, g, pan + (rand() - .5) * .4); }
function bassNote(t0, n, dur, g = .25, cut = 900) { const f = mtof(n), a = lp1(), b = lp1(); voice(t0, dur, (τ, u) => { const x = saw(f, τ) * .6 + sq(f / 2, τ) * .4; const fc = cut * (.35 + 1.5 * Math.exp(-τ * 16)); return Math.tanh(b(a(x, fc), fc) * 2) * Math.min(1, τ / .004) * Math.min(1, (1 - u) * dur / .015); }, { gain: g }); }
function pad(t0, dur, notes, g = .045, cut = 1300) { notes.forEach((n, j) => { for (const det of [-.08, .08]) { const f = mtof(n + det), a = lp1(), b = lp1();
  voice(t0, dur, (τ, u) => b(a(saw(f, τ, j * .21) * .6 + sq(f, τ, j * .37) * .25, cut), cut) * Math.min(1, τ / .4) * Math.min(1, (1 - u) * dur / .6), { gain: g, pan: det < 0 ? -.55 : .55, rev: .5 }); } }); }
function arp(t0, n, dur, g = .06, pan = 0) { const f = mtof(n), a = lp1(); voice(t0, dur, τ => a(sq(f, τ) * .75 + saw(f * 2.003, τ) * .25, 2600) * Math.exp(-τ * 10), { gain: g, pan, dly: .5, rev: .2 }); }
function riser(t0, dur, f0, f1, g = .35) { const f = svf(); voice(t0, dur, (τ, u) => f(noise(), f0 * (f1 / f0) ** u, .35).bp * u ** 2.3, { gain: g, rev: .4 }); }
function impact(t0, g = 1) { kick(t0, 1.2 * g); let ph = 0; voice(t0, 1.8, τ => { ph += TAU * (30 + 55 * Math.exp(-τ * 1.6)) / SR; return Math.sin(ph) * Math.exp(-τ * 2) * Math.min(1, τ / .004); }, { gain: .55 * g }); const f = lp1(); voice(t0, 1.3, τ => f(noise(), 1100) * 3 * Math.exp(-τ * 3.2), { gain: .45 * g, rev: 1 }); }
function crash(t0, g = .22) { const f = lp1(); voice(t0, 2.2, τ => { const x = noise(); return (x - f(x, 5000)) * Math.exp(-τ * 1.7); }, { gain: g, rev: .4 }); }

/* =====================================================================
   SCORE
   ===================================================================== */
const PROG = [['A2', ['A3', 'C4', 'E4', 'G4']], ['F2', ['F3', 'A3', 'C4', 'E4']], ['C3', ['G3', 'C4', 'E4', 'G4']], ['G2', ['G3', 'B3', 'D4', 'F4']]].map(([b, c]) => [NOTE(b), c.map(NOTE)]);
const PENTA = ['A4', 'C5', 'D5', 'E5', 'G5', 'A5', 'C6', 'D6'].map(NOTE);

// power: mains hum under everything, a relay, then the CRT warming up
voice(.2, 19.6, (τ, u) => (Math.sin(TAU * 60 * τ) * .5 + Math.sin(TAU * 120 * τ) * .3 + Math.sin(TAU * 180 * τ) * .12) * Math.min(1, τ / .3) * (1 - .5 * u), { gain: .05 });
relay(.2, .5, -.3); relay(.32, .3, .3);
voice(1.0, .6, (τ, u) => Math.sin(TAU * (60 + 900 * u * u) * τ) * (1 - u) * .5, { gain: .14, rev: .3 });   // CRT power-up sweep
voice(1.0, 19.3, τ => Math.sin(TAU * 15700 * τ) * Math.min(1, τ / .2), { gain: .004 });                    // flyback whine
impact(1.0, .5);

// flying blind: nervous drum machine, scrambled telemetry, the abort alarm
for (let t = 2.0; t < 5.0; t += .5) kick(t, .8);
for (let t = 2.5; t < 5.0; t += 1) snare(t, .7);
for (let t = 2.0; t < 5.0; t += .125) hat(t, Math.round(t * 8) % 2 ? .05 : .025, Math.round(t * 8) % 4 < 2 ? .35 : -.35);
for (let t = 1.5; t < 5.0; t += .125) bassNote(t, PROG[0][0] + (rand() < .3 ? 12 : 0) + (rand() < .2 ? 1 : 0), .1, .2, 700);
for (let t = 1.6; t < 6.6; t += .11) if (rand() < .55) beep(t, 1200 + Math.floor(rand() * 8) * 220, .03, .045, (rand() - .5) * 1.2);
for (let t = 2.0; t < 5.0; t += .5) { beep(t, 880, .2, .07, .4, 'sin'); beep(t + .25, 660, .2, .05, .4, 'sin'); }                 // abort lamp
chirps(1.9, 13, .035, -.2);

// connect every system: eight switches on the half-beat, a rising lamp tone each
chirps(5.0, 21, .03, .2);
for (let i = 0; i < 8; i++) { const t = 5 + i * .25; clunk(t, .5, -.7 + i * .2); beep(t + .03, mtof(PENTA[i]), .14, .06, -.7 + i * .2, 'sin'); kick(t, .45); }
riser(6.4, 1.1, 250, 7000, .38);
// signal acquired
impact(7.5, .8); crash(7.5, .2); pad(7.5, .9, [NOTE('A3'), NOTE('E4'), NOTE('A4'), NOTE('C5')], .05, 2200);

// the mark: full groove
impact(8.0, 1.0); crash(8.0, .25);
for (let t = 8.0; t < 13.0; t += .5) kick(t, .95);
for (let t = 8.5; t < 13.0; t += 1) snare(t, .9);
for (let t = 8.0; t < 13.0; t += .125) hat(t, Math.round(t * 8) % 2 ? .06 : .03, Math.round(t * 8) % 4 < 2 ? .35 : -.35);
for (let t = 8.0; t < 16.0; t += .125) { const bar = Math.floor((t - 8) / 2) % 4, st = Math.round(t * 8) % 8; bassNote(t, PROG[bar][0] + [0, 0, 12, 0, 7, 0, 12, 0][st], .11, .24, 800 + 500 * ((t - 8) / 8)); }
for (let b = 0; b < 4; b++) pad(8 + b * 2, 2.1, PROG[b][1], .042);
for (let t = 9.0; t < 16.0; t += .125) { const bar = Math.floor((t - 8) / 2) % 4, ch = PROG[bar][1], k = Math.round(t * 8) % 8; arp(t, ch[[0, 1, 2, 3, 2, 1, 2, 3][k]] + 12, .2, .045 + .02 * ((t - 9) / 7), k % 2 ? .45 : -.45); }
chirps(8.6, 15, .03, .1); chirps(9.1, 22, .025, .3);
for (const t of [10.0, 10.4, 10.8]) chirps(t, 9, .03, -.4);

// countdown
for (let t = 13.0; t < 16.0; t += .5) kick(t, .9);
{ let t = 13.0, step = .25; while (t < 15.9) { snare(t, .3 + (t - 13) * .25); t += step; if (t > 14.5) step = .125; if (t > 15.25) step = .0625; } }
for (const t of [13.5, 14.5, 15.5]) beep(t, 1000, .16, .14, 0, 'sin');
riser(13.0, 3.0, 200, 9000, .4);

// lockup
impact(16.0, 1.4); crash(16.0, .32); beep(16.0, 2000, .35, .12, 0, 'sin');
pad(16.0, 3.6, [NOTE('A2'), NOTE('E3'), NOTE('A3'), NOTE('C4'), NOTE('E4'), NOTE('B4')], .05, 1800);
bassNote(16.0, NOTE('A1'), 1.6, .3, 500);
chirps(16.1, 13, .035, -.3); chirps(16.4, 30, .02, .3);
for (let t = 16.5; t < 19.3; t += .25) { const k = Math.round(t * 4) % 8; arp(t, PENTA[[0, 4, 2, 5, 4, 2, 1, 4][k]], .3, .05 * (1 - (t - 16.5) / 3.2), k % 2 ? .5 : -.5); }
kick(17.0, .55); kick(18.0, .45); snare(17.5, .45);
relay(19.35, .45, .2); voice(19.4, .5, (τ, u) => Math.sin(TAU * (1800 - 1600 * u) * τ) * (1 - u), { gain: .1, rev: .3 });

/* ---------- buses, tape, master ---------- */
function reverb(inp, offs) { const out = new Float32Array(N);
  const combs = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100 * 1.15)), i: 0, f: 0 }));
  const aps = [556, 441, 341, 225].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100)), i: 0 }));
  for (let n = 0; n < N; n++) { let s = 0; const x = inp[n] * .22;
    for (const c of combs) { const y = c.b[c.i]; c.f = y * .65 + c.f * .35; c.b[c.i] = x + c.f * .86; c.i = (c.i + 1) % c.b.length; s += y; }
    for (const a of aps) { const y = a.b[a.i]; a.b[a.i] = s + y * .5; a.i = (a.i + 1) % a.b.length; s = y - s; } out[n] = s; }
  return out; }
const wl = reverb(RL, 0), wr = reverb(RR, 23);
const DT = Math.round(.375 * SR), dl = new Float32Array(N), dr = new Float32Array(N);
{ let fl = 0, fr = 0; for (let n = 0; n < N; n++) { const pl = n >= DT ? dr[n - DT] : 0, pr = n >= DT ? dl[n - DT] : 0; fl += .3 * (pl - fl); fr += .3 * (pr - fr); dl[n] = DL[n] + fl * .5; dr[n] = DR[n] + fr * .5; } }
kicks.sort((a, b) => a - b);
const mixL = new Float32Array(N), mixR = new Float32Array(N);
for (let n = 0, ki = 0; n < N; n++) { const t = n / SR; while (ki + 1 < kicks.length && kicks[ki + 1] <= t) ki++;
  const dk = kicks.length && kicks[ki] <= t ? t - kicks[ki] : 9, duck = 1 - .5 * Math.exp(-dk * 8);
  mixL[n] = L[n] + (wl[n] * .5 + dl[n] * .45) * duck; mixR[n] = R[n] + (wr[n] * .5 + dr[n] * .45) * duck; }
// tape: wow and flutter, a tape stop at the end, saturation, a gentle top-end roll-off and hiss
const outL = new Float32Array(N), outR = new Float32Array(N); let pos = 0, peak = 0; const tl = lp1(), tr = lp1();
for (let n = 0; n < N; n++) { const t = n / SR;
  let rate = 1 + .0028 * Math.sin(TAU * .55 * t) + .0011 * Math.sin(TAU * 6.8 * t);
  if (t > 19.4) rate *= Math.max(0, 1 - ((t - 19.4) / .55) ** 1.6);
  pos += rate; const i = Math.floor(pos), fr = pos - i, a = i < N ? mixL[i] : 0, b = i + 1 < N ? mixL[i + 1] : 0, c = i < N ? mixR[i] : 0, d = i + 1 < N ? mixR[i + 1] : 0;
  const hiss = noise() * .0035, fade = Math.min(1, (DUR - t) / .03);
  outL[n] = Math.tanh(tl(a + (b - a) * fr, 11000) * 1.2) * fade + hiss; outR[n] = Math.tanh(tr(c + (d - c) * fr, 11000) * 1.2) * fade + hiss;
  peak = Math.max(peak, Math.abs(outL[n]), Math.abs(outR[n])); }
const norm = .89 / peak, buf = Buffer.alloc(44 + N * 4);
buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVE', 8); buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22);
buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
for (let n = 0; n < N; n++) { buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outL[n] * norm)) * 32767), 44 + n * 4); buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outR[n] * norm)) * 32767), 46 + n * 4); }
const out = join(dirname(fileURLToPath(import.meta.url)), 'soundtrack.wav'); writeFileSync(out, buf); console.log('wrote', out, 'peak', peak.toFixed(3));
