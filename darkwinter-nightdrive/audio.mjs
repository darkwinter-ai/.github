// darkwinter TX-01 "Night Drive" score — synthesized sample by sample (no samples or loops). Its own track:
// F# minor lifting to A major, a half-time outrun groove, a string machine, an FM electric piano and a breathy lead.
// It shares the darkwinter sound with every film (see ../SOUND.md): a steady build with no hits, one pulse that never
// stops, the half-second breath before the lockup, the signal bell playing the sonic logo, and the tape stop.
// Cues: eight glass notes light the eight lamps (5.0–6.75), a reverse chord lands as the mark rises (8.0), the bell
// climbs C#–E–G# on the three exits (13.5/14.5/15.5) and resolves to A on the lockup (16.0). Writes soundtrack.wav.
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 48000, DUR = 20, N = SR * DUR, TAU = Math.PI * 2;
const buf2 = () => [new Float32Array(N), new Float32Array(N)];
const [L, R] = buf2(), [RL, RR] = buf2(), [DL, DR] = buf2(), [CL, CR] = buf2();
let seed = 2140; const rand = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296; const noise = () => rand() * 2 - 1;
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
// a round kick: a short pitch sweep, with almost no click
function kick(t0, g = 1, cut = 600) { kicks.push(t0); let ph = 0; const f = lp1(); voice(t0, .55, τ => { ph += TAU * (46 + 80 * Math.exp(-τ * 26)) / SR; return f(Math.sin(ph), cut) * Math.min(1, τ / .004) * Math.exp(-τ * 6); }, { gain: .62 * g }); }
// a soft clap: three quick filtered bursts, most of its size from the reverb
function clap(t0, g = 1) { for (const [d, a] of [[0, .7], [.011, .8], [.023, 1]]) { const f = svf(); voice(t0 + d, .3, τ => f(noise(), 1250, .8).bp * Math.min(1, τ / .002) * Math.exp(-τ * (d < .02 ? 60 : 13)) * a, { gain: .13 * g, rev: 1.4, pan: -.05 }); } }
function hat(t0, g = .03, pan = .3) { const f = lp1(), h = lp1(); voice(t0, .1, τ => { const x = noise(); return h(x - f(x, 7500), 11000) * Math.min(1, τ / .003) * Math.exp(-τ * 48); }, { gain: g, pan, rev: .15 }); }
// THE DARKWINTER SIGNAL BELL — shared by every darkwinter film (same FM bell as TX-02); it carries the sonic logo
function bell(t0, n, g = .07, pan = 0, dur = 2.4) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ + 1.1 * Math.exp(-τ * 5) * Math.sin(TAU * f * 3.5 * τ)) * Math.min(1, τ / .006) * Math.exp(-τ * 1.9) * Math.min(1, (1 - u) * 8), { gain: g, pan, rev: .55, dly: .35 }); }
// a glass pluck for the streetlamps: sine plus a soft third harmonic, quick decay, long delay
function glass(t0, n, g = .05, pan = 0) { const f = mtof(n); voice(t0, 1.2, (τ, u) => (Math.sin(TAU * f * τ) + .25 * Math.sin(TAU * f * 3 * τ) * Math.exp(-τ * 8)) * Math.min(1, τ / .003) * Math.exp(-τ * 4) * Math.min(1, (1 - u) * 6), { gain: g, pan, rev: .45, dly: .6 }); }
// the drive: steady eighth-note bass that swells into each note (a built-in pump), filter on cutoff(t)
function drive(t0, n, g = .17) { const fr = mtof(n), a = lp1(), b = lp1(); voice(t0, .25, (τ, u, t) => { const x = saw(fr, τ) * .6 + Math.sin(TAU * fr / 2 * τ) * .5, fc = Math.min(1300, cutoff(t) * .5); return Math.tanh(b(a(x, fc), fc) * 1.5) * smooth(τ / .05) * Math.min(1, (1 - u) * 5); }, { gain: g }); }
// a string machine: four detuned saws per note, slow ensemble, into the chorus bus
function strings(t0, dur, ns, g = .02, { atk = .8, rel = .9 } = {}) { ns.forEach((n, j) => { for (const det of [-.13, -.04, .05, .14]) { const f = mtof(n + det), a = lp1(), b = lp1(); let ph = rand();
  voice(t0, dur, (τ, u, t) => { ph += f * (1 + .0025 * Math.sin(TAU * (5.1 + j * .3) * t + det * 9)) / SR; const fc = cutoff(t) * .85; return b(a(2 * (ph % 1) - 1, fc), fc) * smooth(τ / atk) * smooth((1 - u) * dur / rel); }, { gain: g, pan: det * 4, rev: .5, cho: true }); } }); }
// an FM electric piano: a tine with a bright attack that mellows
function ep(t0, n, g = .03, pan = 0, dur = 1.2) { const f = mtof(n); voice(t0, dur, (τ, u) => (Math.sin(TAU * f * τ + 1.6 * Math.exp(-τ * 7) * Math.sin(TAU * f * τ)) + .12 * Math.sin(TAU * f * 14 * τ) * Math.exp(-τ * 30)) * Math.min(1, τ / .003) * Math.exp(-τ * 2.4) * Math.min(1, (1 - u) * 6), { gain: g, pan, rev: .4, dly: .25, cho: true }); }
// a reverse electric-piano chord that swells into a downbeat
function reverseEP(tEnd, dur, ns, g = .03) { ns.forEach((n, j) => { const f = mtof(n), len = Math.round(dur * SR), buf = new Float32Array(len);
  for (let k = 0; k < len; k++) { const τ = k / SR; buf[k] = Math.sin(TAU * f * τ + 1.6 * Math.exp(-τ * 7) * Math.sin(TAU * f * τ)) * Math.exp(-τ * 1.6); }
  voice(tEnd - dur, dur, (τ, u) => buf[Math.min(len - 1, len - 1 - Math.floor(u * len))] * smooth(u * 1.4) * Math.min(1, (1 - u) * dur / .015), { gain: g, pan: j % 2 ? .45 : -.45, rev: .7 }); }); }
// a breathy lead: a hollow narrow pulse with breath noise, one voice per phrase so notes glide
function lead(phrase, g = .05) { const t0 = phrase[0][0], end = phrase.at(-1)[0] + phrase.at(-1)[2] + .4, a = lp1(), b = lp1(), nb = svf(); let ph = 0, cur = mtof(phrase[0][1]), k = 0;
  voice(t0, end - t0, (τ, u, t) => { while (k + 1 < phrase.length && t >= phrase[k + 1][0]) k++; const [ts, n, d] = phrase[k], since = t - ts;
    cur += (mtof(n) - cur) * (1 - Math.exp(-1 / (SR * .06)));
    const f = cur * (1 + .007 * smooth((since - .35) / .4) * Math.sin(TAU * 4.8 * t)); ph += f / SR;
    const gap = phrase[k + 1] ? phrase[k + 1][0] - (ts + d) : 1, env = since < d ? smooth(since / .09) : Math.max(0, 1 - (since - d) / Math.min(.4, Math.max(.08, gap)));
    const tone = b(a(((ph % 1) < .3 ? 1 : -1) * .6 + Math.sin(TAU * ph) * .5, 1900), 1900), breath = nb(noise(), f * 2, .3).bp * .5;
    return (tone + breath * (.6 + .4 * Math.exp(-since * 4))) * env * smooth((end - t) / .4); }, { gain: g, pan: .05, rev: .5, dly: .45 }); }
function bloom(t0, n, dur, g = .3) { const f = mtof(n); voice(t0, dur, (τ, u) => Math.sin(TAU * f * τ) * smooth(τ / .15) * (1 - smooth(u)), { gain: g }); }

/* =====================================================================
   SCORE (cues match index.html)
   ===================================================================== */
// F# minor: F#m7 | Dmaj7 | A(add9) | E6, two seconds a chord; the lockup lifts to A major
const PROG = [['F#1', 'F#3 A3 C#4 E4'], ['D2', 'D3 F#3 A3 C#4'], ['A1', 'E3 A3 B3 C#4'], ['E2', 'E3 G#3 B3 C#4']].map(([b, c]) => [NOTE(b), notes(c)]);
const LAMP = notes('F#4 A4 B4 C#5 E5 F#5 A5 B5');

// 0–1.5 power on: the string machine rises out of the dark on an open fifth
strings(.1, 2.1, notes('F#2 C#3 G#3'), .02, { atk: 1.2, rel: .5 });

// 1.5–5 night drive: the drive starts muffled and never stops; an unresolved F#sus2 hangs over it
for (let t = 1.5; t < 8.0; t += .25) drive(t, PROG[0][0] + (Math.round(t * 4) % 2 ? 12 : 0), .1 + .07 * smooth((t - 1.5) / 6));
strings(1.9, 2.4, notes('F#3 G#3 C#4 E4'), .014, { atk: 1 });
strings(4.0, 1.4, notes('D3 A3 C#4 E4'), .014, { atk: .7 });
for (let t = 1.8; t < 6.6; t += .27) if (rand() < .35) glass(t, LAMP[Math.floor(rand() * 8)] + 12, .006 + .004 * rand(), (rand() - .5) * 1.4);

// 5–7.5 you need a system: each lamp is a glass note, the eight climb; the kick arrives under a filter
strings(5.2, 2.7, notes('B2 D3 F#3 A3 C#4'), .016, { atk: .9, rel: .4 });
for (let i = 0; i < 8; i++) glass(5 + i * .25 + .01, LAMP[i], .05 + i * .004, -.7 + i * .2);
for (const t of [6.0, 6.75, 7.0]) kick(t, .3 + .1 * (t - 6), 300);
for (let t = 6.0; t < 8.0; t += .25) hat(t + .125, .006 + .01 * smooth((t - 6) / 2), Math.round(t * 4) % 2 ? .3 : -.3);

// 7.5 signal locked: a soft bell pair, then a reverse electric-piano chord that lands on 8.0
bell(7.5, NOTE('C#5'), .045, -.2, 2); bell(7.5, NOTE('F#5'), .035, .2, 2);
reverseEP(8.0, 1.2, notes('F#3 C#4 E4 A4'), .035);

// 8–13 the mark rises: a half-time outrun groove; strings, electric piano and the breathy lead build by addition
bloom(8.0, NOTE('F#1'), 1.5, .13);
for (let b = 8.0; b < 15.5; b += 2) { kick(b, .65); kick(b + .75, .5); if (b + 1.25 < 15.5) kick(b + 1.25, .35); }
for (let b = 9.0; b < 13.5; b += 2) clap(b, .7 + .3 * smooth((b - 9) / 4));
for (let t = 8.0; t < 15.5; t += .25) { const off = Math.round(t * 4) % 2; hat(t, (off ? .018 : .008) * (.6 + .4 * smooth((t - 8) / 5)), off ? .3 : -.3); }
for (let t = 8.0; t < 16.0; t += .25) { const bar = Math.floor((t - 8) / 2) % 4; drive(t, PROG[bar][0] + (Math.round(t * 4) % 2 ? 12 : 0), .17 + .03 * smooth((t - 8) / 7)); }
for (let b = 0; b < 4; b++) strings(8 + b * 2, 2.1, PROG[b][1], .016, { atk: .3, rel: .35 });
for (let b = 0; b < 4; b++) for (const off of [.5, 1.5]) { const t = 9 + b * 2 + off - 1; if (t < 9) continue; PROG[b][1].forEach((n, j) => ep(t + j * .008, n + 12, .016 + .008 * smooth((t - 9) / 5), j % 2 ? .35 : -.35)); }
const M = [[8.0, 'C#5', 1.4], [9.5, 'B4', .45], [10.0, 'A4', .9], [11.0, 'F#4', .7], [11.75, 'A4', .2], [12.0, 'C#5', .7], [12.75, 'E5', .9]];
lead(M.map(([t, n, d]) => [t, NOTE(n), d]), .05);
for (const [t, p] of [[10.0, -.5], [10.4, -.2], [10.8, .1]]) glass(t, NOTE('F#6'), .012, p);   // the three readouts

// 13–16 three exits: the DARKWINTER SONIC LOGO — the signal bell climbs 3–5–7 of the new key (C#–E–G#),
// the leading tone hangs through the breath, and resolves up to the tonic (A) as the wordmark lands
for (const [t, n] of [[13.5, 'C#5'], [14.5, 'E5'], [15.5, 'G#5']]) bell(t, NOTE(n), .07, 0, 2.2);
strings(13.0, 2.6, notes('E3 G#3 B3 D4 F#4'), .018, { atk: 1.6, rel: .3 });

// 16–20 lockup in A major: the bell resolves, the lead plays a short answering phrase, and the drive thins out
bell(16.0, NOTE('A5'), .08, 0, 3); bell(16.0, NOTE('E5'), .04, -.3, 3); bell(16.02, NOTE('C#6'), .03, .3, 3);
bloom(16.0, NOTE('A1'), 3, .2);
strings(15.98, 3.9, notes('A2 E3 G#3 B3 C#4 E4'), .022, { atk: .35, rel: 1.2 });
for (let t = 16.0; t < 19.4; t += .25) drive(t, NOTE('A1') + (Math.round(t * 4) % 2 ? 12 : 0), .15 * (1 - .5 * smooth((t - 16) / 3.4)));
for (const t of [16.0, 16.75, 18.0, 18.75]) kick(t, .5 - (t - 16) * .08);
clap(17.0, .6); clap(19.0, .35);
for (let t = 16.0; t < 19.0; t += .25) if (Math.round(t * 4) % 2) hat(t, .015 * (1 - (t - 16) / 3.4), .3);
const H = [[16.5, 'E5', .45], [17.0, 'C#5', .45], [17.5, 'B4', .45], [18.0, 'A4', 1.1]];
lead(H.map(([t, n, d]) => [t, NOTE(n), d]), .045);

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
