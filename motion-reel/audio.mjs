// Synthesizes the 15s soundtrack from scratch (no samples): 120 BPM, F minor.
// Every hit is placed on the same timestamps the visuals use.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 48000, DUR = 15, N = SR * DUR;
const L = new Float32Array(N), R = new Float32Array(N), SL = new Float32Array(N), SR_ = new Float32Array(N);
let seed = 1337;
const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const noise = () => rand() * 2 - 1;
const TAU = Math.PI * 2;
const note = n => 440 * Math.pow(2, (n - 69) / 12); // midi → Hz

function voice(t0, dur, fn, { gain = 1, pan = 0, send = 0 } = {}) {
  const i0 = Math.round(t0 * SR), n = Math.round(dur * SR);
  const gl = gain * Math.cos((pan + 1) * Math.PI / 4), gr = gain * Math.sin((pan + 1) * Math.PI / 4);
  for (let k = 0; k < n; k++) {
    const i = i0 + k; if (i < 0 || i >= N) continue;
    const v = fn(k / SR, k / n);
    L[i] += v * gl; R[i] += v * gr;
    if (send) { SL[i] += v * gl * send; SR_[i] += v * gr * send; }
  }
}

/* ---------- instruments ---------- */
const kicks = [];
function kick(t0, g = 1) {
  kicks.push(t0); let ph = 0;
  voice(t0, .6, τ => {
    const f = 44 + 140 * Math.exp(-τ * 30); ph += TAU * f / SR;
    const env = Math.exp(-τ * 5.5) * Math.min(1, τ / .0015);
    const click = τ < .004 ? noise() * (1 - τ / .004) * .6 : 0;
    return Math.tanh(Math.sin(ph) * env * 1.8) + click;
  }, { gain: .85 * g });
}
function hat(t0, g = .1, pan = 0, decay = 60) {
  let lp = 0;
  voice(t0, .15, τ => { const x = noise(); lp += .55 * (x - lp); return (x - lp) * Math.exp(-τ * decay); }, { gain: g, pan, send: .08 });
}
function clap(t0, g = .35) {
  let lo = 0, bp = 0; const F = 2 * Math.sin(Math.PI * 1300 / SR);
  voice(t0, .35, τ => {
    const x = noise(); const hi = x - lo - .6 * bp; bp += F * hi; lo += F * bp;
    const env = [0, .011, .022].reduce((a, o) => a + (τ >= o ? Math.exp(-(τ - o) * (o < .02 ? 90 : 14)) : 0), 0);
    return bp * env;
  }, { gain: g, send: .35 });
}
function sweep(t0, dur, f0, f1, g, { q = .45, shape = 'rise', pan = 0, send = .3 } = {}) {
  let lo = 0, bp = 0;
  voice(t0, dur, (τ, u) => {
    const f = Math.min(f0 * Math.pow(f1 / f0, u), SR / 6.5), F = 2 * Math.sin(Math.PI * f / SR);
    const hi = noise() - lo - q * bp; bp += F * hi; lo += F * bp;
    const env = shape === 'rise' ? Math.pow(u, 2.2) : shape === 'whoosh' ? Math.sin(Math.PI * u) ** 2 : Math.pow(1 - u, 2);
    return bp * env;
  }, { gain: g, pan, send });
}
function bell(t0, f, g = .15, dec = 1.6, pan = 0, send = .5) {
  voice(t0, dec * 3, τ => {
    const a = Math.min(1, τ / .002);
    return a * (Math.sin(TAU * f * τ) * Math.exp(-τ / dec) + .35 * Math.sin(TAU * f * 2.756 * τ) * Math.exp(-τ / dec * 3.5)
      + .15 * Math.sin(TAU * f * 5.404 * τ) * Math.exp(-τ / dec * 7));
  }, { gain: g, pan, send });
}
function blip(t0, f0, f1, dur, g = .25, pan = 0, send = .3) {
  let ph = 0;
  voice(t0, dur, (τ, u) => { ph += TAU * f0 * Math.pow(f1 / f0, u) / SR; return Math.sin(ph) * Math.min(1, τ / .003) * Math.pow(1 - u, 1.5); }, { gain: g, pan, send });
}
function tick(t0, f = 3200, g = .12, pan = 0) {
  voice(t0, .03, τ => Math.sin(TAU * f * τ) * Math.exp(-τ * 260) + noise() * Math.exp(-τ * 900) * .3, { gain: g, pan, send: .15 });
}
function impact(t0, g = 1) {
  kick(t0, 1.1 * g);
  let lp = 0; voice(t0, 1.4, τ => { lp += .07 * (noise() - lp); return lp * 4 * Math.exp(-τ * 3.5); }, { gain: .55 * g, send: .9 });
  let ph = 0; voice(t0, 1.6, τ => { ph += TAU * (30 + 50 * Math.exp(-τ * 1.4)) / SR; return Math.sin(ph) * Math.exp(-τ * 2.2) * Math.min(1, τ / .004); }, { gain: .55 * g });
}
function crash(t0, g = .22) {
  let lp = 0; voice(t0, 2.2, τ => { const x = noise(); lp += .35 * (x - lp); return (x - lp) * Math.exp(-τ * 1.9); }, { gain: g, send: .5 });
}
function glitch(t0, dur) {
  // 32nd-note bit-crushed stutter
  let held = 0;
  voice(t0, dur, (τ, u) => {
    const step = Math.floor(τ * 16 * 4); const gate = (step % 2 === 0) ? 1 : .25;
    if (Math.floor(τ * SR) % 24 === 0) held = Math.round(noise() * 4) / 4;
    return held * gate * (1 - u) * .8 + Math.sign(Math.sin(TAU * (220 + step * 40) * τ)) * .15 * gate * (1 - u);
  }, { gain: .2, send: .2 });
}

/* ---------- harmony: F minor, one chord per bar (2s) ---------- */
const CHORDS = [[53, 56, 60], [49, 53, 56, 60], [56, 60, 63], [51, 55, 58], [53, 56, 60, 63], [49, 53, 56, 60], [56, 60, 63, 67], [53, 56, 60, 67]];
const BASS = [41, 37, 44, 39, 41, 37, 44, 41];
function pad() {
  for (let b = 0; b < 8; b++) {
    const t0 = b * 2, dur = b === 7 ? 3.2 : 2.35;
    const ch = CHORDS[b];
    ch.forEach((n, j) => {
      for (const det of [-.07, .07]) {
        const f = note(n + det); let l1 = 0, l2 = 0;
        voice(t0 - .15, dur, (τ, u) => {
          const saw = 2 * ((f * τ + j * .31) % 1) - 1;
          const T = t0 - .15 + τ;
          const cut = 500 + 2200 * (Math.sin(T * .7) * .5 + .5) * (T > 2.5 && T < 12.5 ? 1 : .45);
          const a = 1 - Math.exp(-TAU * cut / SR); l1 += a * (saw - l1); l2 += a * (l1 - l2);
          const env = Math.min(1, τ / .3) * Math.min(1, (1 - u) * dur / .4);
          return l2 * env;
        }, { gain: .032, pan: det < 0 ? -.5 : .5, send: .35 });
      }
    });
  }
}
function bass(from, to) {
  for (let t = from; t < to - 1e-6; t += .25) {
    const b = Math.floor(t / 2), f = note(BASS[b] + 12 * (Math.round(t * 4) % 4 === 3 ? 1 : 0));
    let ph = 0;
    voice(t, .24, (τ, u) => { ph += TAU * f / SR; const s = Math.sin(ph) + .25 * Math.sin(2 * ph); return Math.tanh(s * 1.5) * Math.min(1, τ / .005) * Math.pow(1 - u, .6); }, { gain: .26 });
  }
}
const PENTA = [65, 68, 70, 72, 75, 77, 80, 82, 84, 87];

/* =====================================================================
   SCORE
   ===================================================================== */
pad();
// SC.01 genesis
blip(.02, 520, 980, .12, .22);
blip(.40, 300, 240, .1, .12);
blip(.5, 220, 880, .22, .28);
sweep(.5, .5, 900, 2600, .25, { shape: 'whoosh' });
impact(1.0, .65); bell(1.0, note(77), .18, 1.4, -.3, .7); bell(1.0, note(84), .12, 1.2, .3, .7);
for (let k = 0; k < 10; k++) bell(1.1 + k * .125, note(PENTA[(k * 3) % PENTA.length]), .05, .4, k % 2 ? .6 : -.6, .5);
sweep(1.25, 1.25, 180, 7500, .5, { shape: 'rise', send: .4 });
blip(1.6, 200, 900, .9, .08, 0, .5);
// SC.02 kinetic type
impact(2.5, 1.2); crash(2.5, .25);
for (const t of [3.0, 3.5, 4.0, 4.5]) kick(t, t === 4.0 ? 1.1 : .95);
impact(4.0, .7);
for (const t of [3.0, 4.0]) clap(t);
for (let t = 2.75; t < 5; t += .5) hat(t, .12, .3);
for (let t = 2.625; t < 5; t += .25) if (Math.round(t * 8) % 2) hat(t, .05, -.4, 90);
for (const t of [2.85, 3.35, 3.85]) sweep(t, .17, 500, 6000, .45, { shape: 'whoosh', pan: (t - 3.35) * 1.5 });
glitch(4.5, .3);
sweep(4.82, .2, 400, 5000, .45, { shape: 'whoosh' });
bass(2.5, 5.0);
// SC.03 curve
kick(5.0, .7); kick(6.0, .8);
for (let k = 0; k < 11; k++) tick(5.0 + k * .02, 2400, .05, -.8 + k * .14); // grid lines drawing
tick(5.42, 1500, .16); tick(5.54, 1800, .16);
blip(5.42, 400, 560, .5, .05); // spring wobble
for (let k = 0; k <= 24; k++) tick(6.0 + k / 24, 1800 + 2400 * (k / 24), .09, -.6 + 1.2 * k / 24);
for (let t = 5.5; t < 7.0; t += .5) hat(t, .06, .2);
kick(7.0, .9); blip(7.0, 180, 90, .25, .22);
sweep(7.12, .33, 2000, 300, .3, { shape: 'whoosh' });
// SC.04 rhythm
for (let k = 0; k < 14; k++) tick(7.5 + k * .022, 900 + rand() * 2200, .06, noise() * .8);
for (let t = 7.5; t < 10.0; t += .5) kick(t);
for (const t of [8.0, 9.0]) clap(t, .38);
for (let t = 7.75; t < 10; t += .5) hat(t, .13, .3);
for (let t = 7.625; t < 10; t += .25) if (Math.round(t * 8) % 2) hat(t, .05, -.4, 90);
[[8.0, 0], [8.5, 2], [9.0, 4]].forEach(([t, o]) => { for (let k = 0; k < 6; k++) bell(t + k * .03, note(PENTA[(o + k) % PENTA.length]), .07, .5, -.7 + k * .28, .45); });
bass(7.5, 9.5);
sweep(9.5, .5, 4000, 250, .35, { shape: 'whoosh' });
// SC.05 emergence
sweep(10.0, 1.0, 300, 1400, .35, { shape: 'whoosh', pan: -.5, q: .3 });
sweep(10.2, 1.0, 380, 1800, .3, { shape: 'whoosh', pan: .5, q: .3 });
[65, 68, 72, 75, 77, 80].forEach((n, i) => {
  let ph = 0; const f1 = note(n), f0 = f1 / 2;
  voice(10.55 + i * .05, 1.4, (τ, u) => { const f = f0 * Math.pow(f1 / f0, Math.min(1, u * 1.6)); ph += TAU * f / SR; return Math.sin(ph) * Math.sin(Math.PI * u); }, { gain: .04, pan: -.6 + i * .24, send: .7 });
});
for (let k = 0; k < 16; k++) tick(11.3 + k / 70 * 2.2, 2600 + rand() * 800, .05, .1); // caption typing
sweep(11.2, .8, 200, 9000, .55, { shape: 'rise', send: .2 });
impact(12.0, 1.35); crash(12.0, .3);
bass(12.0, 12.5);
// SC.06 signature
sweep(12.5, .9, 6000, 180, .4, { shape: 'fall', send: .6 });
impact(13.0, 1.0);
[65, 68, 72, 79].forEach((n, i) => bell(13.0 + i * .018, note(n), .1, 2.2, -.45 + i * .3, .85));
for (let i = 0; i < 6; i++) tick(13.45 + i * .045, 1400 + i * 180, .09, -.5 + i * .2);
for (let i = 0; i < 43; i += 2) tick(13.8 + i / 75, 3000 + rand() * 900, .045, .15);
for (let i = 0; i < 6; i++) blip(14.48 + i * .025, 900 - i * 80, 500 - i * 50, .08, .05, .5 - i * .2);
blip(14.84, 640, 160, .16, .22, 0, .6);

/* ---------- sidechain on pad/bass-ish bed is implied by mix; reverb ---------- */
function reverb(inp, offs) {
  const out = new Float32Array(N);
  const combs = [1557, 1617, 1491, 1422, 1277, 1356, 1188, 1116].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100)), i: 0, f: 0 }));
  const aps = [556, 441, 341, 225].map(d => ({ b: new Float32Array(Math.round((d + offs) * SR / 44100)), i: 0 }));
  const fb = .86, damp = .25;
  for (let n = 0; n < N; n++) {
    let s = 0; const x = inp[n] * .25;
    for (const c of combs) { const y = c.b[c.i]; c.f = y * (1 - damp) + c.f * damp; c.b[c.i] = x + c.f * fb; c.i = (c.i + 1) % c.b.length; s += y; }
    for (const a of aps) { const y = a.b[a.i]; a.b[a.i] = s + y * .5; a.i = (a.i + 1) % a.b.length; s = y - s; }
    out[n] = s;
  }
  return out;
}
const wl = reverb(SL, 0), wr = reverb(SR_, 23);
// gentle sidechain duck of the reverb tail on kicks
kicks.sort((a, b) => a - b);
let peak = 0; const outL = new Float32Array(N), outR = new Float32Array(N);
for (let n = 0, ki = 0; n < N; n++) {
  const t = n / SR; while (ki + 1 < kicks.length && kicks[ki + 1] <= t) ki++;
  const dk = kicks.length && kicks[ki] <= t ? t - kicks[ki] : 9;
  const duck = 1 - .5 * Math.exp(-dk * 9);
  const fade = Math.min(1, (DUR - t) / .04);
  outL[n] = Math.tanh((L[n] + wl[n] * .5 * duck) * 1.1) * fade;
  outR[n] = Math.tanh((R[n] + wr[n] * .5 * duck) * 1.1) * fade;
  peak = Math.max(peak, Math.abs(outL[n]), Math.abs(outR[n]));
}
const norm = .89 / peak;
const buf = Buffer.alloc(44 + N * 4);
buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVE', 8); buf.write('fmt ', 12);
buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22); buf.writeUInt32LE(SR, 24);
buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34); buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
for (let n = 0; n < N; n++) {
  buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outL[n] * norm)) * 32767), 44 + n * 4);
  buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, outR[n] * norm)) * 32767), 46 + n * 4);
}
const out = join(dirname(fileURLToPath(import.meta.url)), 'soundtrack.wav');
writeFileSync(out, buf);
console.log('wrote', out, 'peak', peak.toFixed(3));
