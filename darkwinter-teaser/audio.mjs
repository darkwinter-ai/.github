// darkwinter.ai teaser score — synthesized sample by sample, no samples or loops.
// 120 BPM, D minor, dark synthwave. Every hit sits on a visual event in teaser.html.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 48000, DUR = 20, N = SR * DUR, TAU = Math.PI * 2;
const L = new Float32Array(N), R = new Float32Array(N);       // dry
const RL = new Float32Array(N), RR = new Float32Array(N);     // reverb send
const DL = new Float32Array(N), DR = new Float32Array(N);     // ping-pong delay send
let seed = 2026;
const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const noise = () => rand() * 2 - 1;
const mtof = n => 440 * 2 ** ((n - 69) / 12);

function voice(t0, dur, fn, { gain = 1, pan = 0, rev = 0, dly = 0 } = {}) {
  const i0 = Math.round(t0 * SR), n = Math.round(dur * SR);
  const gl = gain * Math.cos((pan + 1) * Math.PI / 4), gr = gain * Math.sin((pan + 1) * Math.PI / 4);
  for (let k = 0; k < n; k++) {
    const i = i0 + k; if (i < 0 || i >= N) continue;
    const v = fn(k / SR, k / n), l = v * gl, r = v * gr;
    L[i] += l; R[i] += r;
    if (rev) { RL[i] += l * rev; RR[i] += r * rev; }
    if (dly) { DL[i] += l * dly; DR[i] += r * dly; }
  }
}
const lp1 = () => { let y = 0; return (x, fc) => (y += (1 - Math.exp(-TAU * fc / SR)) * (x - y)); };
const svf = () => { let lo = 0, bp = 0; return (x, fc, q = .5) => { const F = 2 * Math.sin(Math.PI * Math.min(fc, SR / 6.5) / SR); const hi = x - lo - q * bp; bp += F * hi; lo += F * bp; return { lo, bp, hi }; }; };

/* ---------- drums ---------- */
const kicks = [];
function kick(t0, g = 1) {
  kicks.push(t0); let ph = 0;
  voice(t0, .55, τ => { ph += TAU * (48 + 150 * Math.exp(-τ * 32)) / SR; return Math.tanh(Math.sin(ph) * Math.exp(-τ * 6) * 2) + (τ < .003 ? noise() * .5 : 0); }, { gain: .8 * g });
}
function snare(t0, g = 1, rev = .9) {   // 80s gated-reverb snare: tone + noise, big send, hard gate on the tail
  let ph = 0; const f = svf();
  voice(t0, .4, τ => {
    ph += TAU * (190 * Math.exp(-τ * 8) + 140) / SR;
    const n = f(noise(), 2400, .7).bp;
    const gate = τ < .26 ? 1 : Math.max(0, 1 - (τ - .26) / .02);
    return (Math.sin(ph) * Math.exp(-τ * 22) * .7 + n * Math.exp(-τ * 7) * 1.4) * gate;
  }, { gain: .42 * g, rev });
}
function hat(t0, g = .08, pan = .25, dec = 70) { const f = lp1(); voice(t0, .12, τ => { const x = noise(); return (x - f(x, 7000)) * Math.exp(-τ * dec); }, { gain: g, pan, rev: .05 }); }
function tom(t0, f0, g = .5, pan = 0) { let ph = 0; voice(t0, .5, τ => { ph += TAU * (f0 * (1 + .6 * Math.exp(-τ * 18))) / SR; return Math.sin(ph) * Math.exp(-τ * 7); }, { gain: g, pan, rev: .5 }); }
function crash(t0, g = .25) { const f = lp1(); voice(t0, 2.5, τ => { const x = noise(); return (x - f(x, 5000)) * Math.exp(-τ * 1.6); }, { gain: g, rev: .4 }); }
function impact(t0, g = 1) {
  kick(t0, 1.2 * g);
  let ph = 0; voice(t0, 2.2, τ => { ph += TAU * (28 + 60 * Math.exp(-τ * 1.6)) / SR; return Math.sin(ph) * Math.exp(-τ * 1.8) * Math.min(1, τ / .004); }, { gain: .6 * g });
  const f = lp1(); voice(t0, 1.6, τ => f(noise(), 900) * 3 * Math.exp(-τ * 3), { gain: .5 * g, rev: 1 });
}

/* ---------- synths ---------- */
const saw = (f, τ, o = 0) => 2 * ((f * τ + o) % 1) - 1;
const sq = (f, τ, o = 0) => ((f * τ + o) % 1) < .5 ? 1 : -1;
function bassNote(t0, n, dur, { g = .3, cut = 900 } = {}) {
  const f = mtof(n), a = lp1(), b = lp1();
  voice(t0, dur, (τ, u) => {
    const x = saw(f, τ) * .6 + saw(f * 1.005, τ, .3) * .4 + Math.sin(TAU * f / 2 * τ) * .6;
    const fc = cut * (.35 + 1.4 * Math.exp(-τ * 18));
    return Math.tanh(b(a(x, fc), fc) * 2.2) * Math.min(1, τ / .004) * Math.min(1, (1 - u) * dur / .015);
  }, { gain: g });
}
function arpNote(t0, n, dur, { g = .09, pan = 0, cut = 3000 } = {}) {
  const f = mtof(n), a = lp1();
  voice(t0, dur, (τ, u) => a(sq(f, τ) * .7 + saw(f * 2.002, τ) * .3, cut) * Math.exp(-τ * 9), { gain: g, pan, dly: .55, rev: .2 });
}
function pad(t0, dur, notes, { g = .05, cut = 1400, rev = .6 } = {}) {
  notes.forEach((n, j) => {
    for (const det of [-.09, .09]) {
      const f = mtof(n + det), a = lp1(), b = lp1();
      voice(t0, dur, (τ, u) => {
        const env = Math.min(1, τ / .6) * Math.min(1, (1 - u) * dur / .8);
        const fc = cut * (.7 + .3 * Math.sin(τ * 1.3 + j));
        return b(a(saw(f, τ, j * .17), fc), fc) * env;
      }, { gain: g, pan: det < 0 ? -.6 : .6, rev });
    }
  });
}
function riser(t0, dur, f0, f1, g = .4) {
  const f = svf();
  voice(t0, dur, (τ, u) => f(noise(), f0 * (f1 / f0) ** u, .35).bp * u ** 2.4, { gain: g, rev: .4 });
  let ph = 0; voice(t0, dur, (τ, u) => { ph += TAU * (110 * 2 ** (u * 3)) / SR; return saw(1, ph / TAU) * u ** 3 * .3; }, { gain: g * .4, rev: .3 });
}
function chirp(t0, f, g = .05, pan = 0) { voice(t0, .04, τ => sq(f, τ) * Math.exp(-τ * 120), { gain: g, pan, dly: .3 }); }
function zap(t0, f0, f1, dur, g = .2) { let ph = 0; voice(t0, dur, (τ, u) => { ph += TAU * f0 * (f1 / f0) ** u / SR; return Math.sin(ph) * (1 - u); }, { gain: g, rev: .3 }); }
function glitchBurst(t0, dur, g = .18) {
  let held = 0;
  voice(t0, dur, (τ, u) => {
    if (Math.floor(τ * SR) % (8 + Math.floor(u * 40)) === 0) held = Math.round(noise() * 3) / 3;
    const gate = Math.floor(τ * 64) % 2 ? 1 : .2;
    return (held * .8 + sq(300 + 1200 * rand(), τ) * .1) * gate * (1 - u);
  }, { gain: g, pan: noise() * .6, rev: .15 });
}

/* =====================================================================
   SCORE   (bars of 2s; Dm  Bb  Gm  A)
   ===================================================================== */
const D = 38; // D2
const PROG = [[D, [62, 65, 69]], [D - 4, [58, 62, 65]], [D - 7 + 12, [55, 58, 62]], [D - 5 + 12, [57, 61, 64]]];

// I · SIGNAL (0–4): CRT hum, boot chirps, ignition
voice(0, 4.2, (τ, u) => (Math.sin(TAU * 50 * τ) * .5 + Math.sin(TAU * 100 * τ) * .25 + Math.sin(TAU * 150 * τ) * .1) * Math.min(1, τ / .05) * (1 - u * .6), { gain: .07 });
zap(.02, 9000, 2200, .35, .12);
voice(0.2, 4, (τ, u) => { const f = mtof(26); return (Math.sin(TAU * f * τ) + .4 * Math.sin(TAU * f * 2.01 * τ)) * Math.min(1, τ / 1.5); }, { gain: .2 });
for (let i = 0; i < 6; i++) for (let c = 0; c < 10; c++) chirp(.7 + i * .33 + c * .02, 1800 + rand() * 2600, .035, -.4 + rand() * .3);
riser(1.0, 1.0, 200, 3000, .25);
impact(2.0, .9); pad(2.0, 2.2, [50, 57, 62], { g: .035, cut: 700 });
zap(2.0, 3200, 180, .9, .12);
for (let t = 2.5; t < 4; t += .25) bassNote(t, D, .22, { g: .18, cut: 300 + (t - 2.5) * 500 });
riser(3.0, 1.0, 300, 9000, .35);

// II · CHAOS (4–7): full drums, nervous bass, glitch bursts
for (let t = 4; t < 7; t += .5) kick(t);
for (const t of [4.5, 5.5, 6.5]) snare(t);
for (let t = 4; t < 7; t += .125) hat(t, Math.round(t * 8) % 2 ? .06 : .03, Math.round(t * 8) % 4 < 2 ? .3 : -.3);
for (let t = 4; t < 7; t += .125) { const bar = Math.floor(t / 2) % 4; bassNote(t, PROG[bar][0] + (Math.round(t * 8) % 4 === 3 ? 12 : 0), .11, { g: .24, cut: 1100 }); }
for (const [t, a] of [[4.0, .3], [4.5, .15], [5.0, .25], [5.25, .12], [5.5, .22], [5.75, .15], [6.0, .3], [6.5, .15], [6.75, .1]]) glitchBurst(t, .12 + a * .4, a);
impact(4.0, .6); crash(4.0, .2);
pad(4.0, 2.1, [62, 65, 69], { g: .03, cut: 1100 }); pad(6.0, 1.1, [58, 62, 65], { g: .03, cut: 1100 });
// the snap at 7.0: one hit, a vacuum, then the swell
impact(7.0, .8); snare(7.0, 1.2, 1.4); zap(7.0, 6000, 400, .35, .1);
{ const f = svf(); voice(7.2, .8, (τ, u) => f(noise(), 400 * 20 ** u, .3).bp * u ** 3, { gain: .45, rev: .3 }); }
for (let i = 0; i < 15; i++) chirp(7.1 + i * .02, 2500 + i * 90, .03, .2);

// III · SYSTEM (8–14): the groove, arp lead, pad progression
impact(8.0, 1.0); crash(8.0, .28);
zap(8.0, 400, 2600, .9, .06); // triangle trace
for (let t = 8; t < 13.5; t += .5) kick(t, .95);
for (let t = 8.5; t < 13.5; t += 1) snare(t, .9);
for (let t = 8; t < 13.5; t += .125) hat(t, Math.round(t * 8) % 2 ? .065 : .035, Math.round(t * 8) % 4 < 2 ? .35 : -.35);
for (let t = 8; t < 14; t += .125) { const bar = Math.floor((t - 8) / 2) % 4; const step = Math.round(t * 8) % 8; bassNote(t, PROG[bar][0] + [0, 0, 12, 0, 0, 12, 0, 7][step], .11, { g: .25, cut: 900 + 900 * ((t - 8) / 6) }); }
const ARP = [0, 1, 2, 1, 2, 3, 2, 1];
for (let t = 9; t < 14; t += .125) {
  const bar = Math.floor((t - 8) / 2) % 4, ch = PROG[bar][1], k = Math.round(t * 8) % 8, n = (ARP[k] === 3 ? ch[0] + 12 : ch[ARP[k]]) + 12;
  arpNote(t, n, .2, { g: .07 + .03 * ((t - 9) / 5), pan: k % 2 ? .4 : -.4, cut: 1800 + 3000 * ((t - 9) / 5) });
}
pad(8, 2.1, PROG[0][1], { g: .045 }); pad(10, 2.1, PROG[1][1], { g: .045 }); pad(12, 1.1, PROG[2][1], { g: .045 }); pad(13, 1.1, PROG[3][1], { g: .045 });
for (const t of [10.0, 12.0]) chirp(t, 880, .05);
// fill into the rush
[[13.5, 196], [13.625, 175], [13.75, 147], [13.875, 123]].forEach(([t, f], i) => tom(t, f, .45, -.5 + i * .33));
riser(12.5, 1.5, 300, 6000, .3);

// IV · RUSH (14–16): accelerating snare roll, kick 8ths, whiteout
impact(14.0, .7);
{ let t = 14.0, step = .25; while (t < 15.72) { snare(t, .35 + (t - 14) * .35, .5); t += step; if (t > 14.75) step = .125; if (t > 15.25) step = .0625; } }
for (let t = 14; t < 15.75; t += .25) kick(t, .8);
for (let t = 14; t < 15.75; t += .125) bassNote(t, D + (t > 15 ? 2 : 0), .11, { g: .22, cut: 1600 + (t - 14) * 1400 });
riser(14.0, 1.75, 200, 12000, .45);
{ let ph = 0; voice(14.0, 1.75, (τ, u) => { ph += TAU * mtof(50 + u * 24) / SR; return saw(1, ph / TAU) * u ** 2; }, { gain: .06, rev: .4 }); }
// 15.75: a quarter-beat of silence before the drop

// V · SIGNAL (16–20): the lockup
impact(16.0, 1.5); crash(16.0, .35);
pad(16.0, 3.8, [50, 57, 62, 64, 69], { g: .055, cut: 1800, rev: .9 });
bassNote(16.0, D, 1.6, { g: .3, cut: 500 });
for (let t = 16.5; t < 19.3; t += .25) {
  const k = Math.round(t * 4) % 8, n = [62, 69, 65, 74, 69, 65, 64, 69][k] + 12;
  arpNote(t, n, .3, { g: .05 * (1 - (t - 16.5) / 3.5), pan: k % 2 ? .5 : -.5, cut: 2400 });
}
for (let i = 0; i < 13; i++) chirp(16.15 + i * .05, 1400 + i * 120, .04, -.5 + i * .08);   // wordmark decode
for (let i = 0; i < 32; i += 2) chirp(17.0 + i * .028, 2400 + rand() * 900, .025, .3);       // tagline decode
kick(17.0, .6); kick(18.0, .5); snare(17.5, .5, 1.2);
glitchBurst(17.5, .25, .14); glitchBurst(18.6, .15, .08); glitchBurst(19.4, .2, .1);
// CRT off: collapse whine + click
zap(19.4, 1800, 120, .5, .18);
zap(19.72, 12000, 6000, .18, .08);
voice(19.9, .02, τ => noise() * (1 - τ / .02), { gain: .25 });

/* ---------- FX buses ---------- */
function reverb(inp, offs) {
  const out = new Float32Array(N);
  const combs = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100 * 1.25)), i: 0, f: 0 }));
  const aps = [556, 441, 341, 225].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100)), i: 0 }));
  for (let n = 0; n < N; n++) {
    let s = 0; const x = inp[n] * .22;
    for (const c of combs) { const y = c.b[c.i]; c.f = y * .7 + c.f * .3; c.b[c.i] = x + c.f * .88; c.i = (c.i + 1) % c.b.length; s += y; }
    for (const a of aps) { const y = a.b[a.i]; a.b[a.i] = s + y * .5; a.i = (a.i + 1) % a.b.length; s = y - s; }
    out[n] = s;
  }
  return out;
}
const wl = reverb(RL, 0), wr = reverb(RR, 23);
// dotted-eighth ping-pong delay (0.375s), filtered feedback
const DT = Math.round(.375 * SR), dl = new Float32Array(N), dr = new Float32Array(N);
{ let fl = 0, fr = 0; for (let n = 0; n < N; n++) { const pl = n >= DT ? dr[n - DT] : 0, pr = n >= DT ? dl[n - DT] : 0; fl += .3 * (pl - fl); fr += .3 * (pr - fr); dl[n] = DL[n] + fl * .55; dr[n] = DR[n] + fr * .55; } }

/* ---------- master: sidechain the wet buses + pads on kicks, soft clip, normalize ---------- */
kicks.sort((a, b) => a - b);
const outL = new Float32Array(N), outR = new Float32Array(N); let peak = 0;
for (let n = 0, ki = 0; n < N; n++) {
  const t = n / SR; while (ki + 1 < kicks.length && kicks[ki + 1] <= t) ki++;
  const dk = kicks.length && kicks[ki] <= t ? t - kicks[ki] : 9, duck = 1 - .55 * Math.exp(-dk * 8);
  const fade = Math.min(1, (DUR - t) / .03);
  outL[n] = Math.tanh((L[n] + (wl[n] * .55 + dl[n] * .5) * duck) * 1.15) * fade;
  outR[n] = Math.tanh((R[n] + (wr[n] * .55 + dr[n] * .5) * duck) * 1.15) * fade;
  peak = Math.max(peak, Math.abs(outL[n]), Math.abs(outR[n]));
}
const norm = .89 / peak, buf = Buffer.alloc(44 + N * 4);
buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVE', 8); buf.write('fmt ', 12);
buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(SR, 24);
buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
for (let n = 0; n < N; n++) {
  buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outL[n] * norm)) * 32767), 44 + n * 4);
  buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outR[n] * norm)) * 32767), 46 + n * 4);
}
const out = join(dirname(fileURLToPath(import.meta.url)), 'soundtrack.wav');
writeFileSync(out, buf); console.log('wrote', out, 'peak', peak.toFixed(3));
