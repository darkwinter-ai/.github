// darkwinter signal — sound. Loaded only when a visitor turns sound on, so the page pays nothing for it otherwise.
// The per-era kits come from the Mark Lab (darkwinter-mark), plus the darkwinter signal bell and sonic logo
// from SOUND.md: the bell climbs scale degrees 3–5–7 and resolves up to the tonic.
import * as Tone from 'tone';
export { Tone };   // the kit renderer (kit/render.mjs) uses the same instance for Tone.Offline

export const KITS = {
  '00': { lead: 'sine', pad: 'sine', scale: ['D5', 'F5', 'A5', 'C6', 'E6'], chord: ['D4', 'A4', 'E5', 'F5'], bass: 'D2', click: 'tick', kick: false, rev: 1.8, revWet: .2, dly: 0, drone: ['D3', 'A3'], droneVol: -30, logo: ['A4', 'C5', 'E5', 'F5'] },
  '01': { lead: 'sawtooth', pad: 'sawtooth', scale: ['D5', 'F5', 'A5', 'C6', 'D6'], chord: ['D3', 'A3', 'F4', 'A4', 'D5'], bass: 'D1', click: 'noise', kick: true, rev: 4, revWet: .35, dly: .375, drone: ['D2', 'A2', 'F3'], droneVol: -27, cutoff: 1400, logo: ['A5', 'C6', 'E6', 'F6'] },
  '02': { lead: 'square', pad: 'triangle', scale: ['A5', 'C6', 'E6', 'A6', 'C7'], chord: ['A3', 'E4', 'C5', 'E5'], bass: 'A1', click: 'metal', kick: false, rev: 1.5, revWet: .2, dly: .12, drone: ['A2', 'E3'], droneVol: -28, wobble: true, beep: true, cutoff: 1800, logo: ['E5', 'G5', 'B5', 'C6'] },
  '03': { lead: 'fm', pad: 'triangle', scale: ['F5', 'A5', 'C6', 'D6', 'F6'], chord: ['F3', 'C4', 'A4', 'C5', 'F5'], bass: 'F1', click: 'metal', kick: true, rev: 2.6, revWet: .3, dly: 0, drone: ['F2', 'C3'], droneVol: -31, theremin: true, logo: ['A5', 'C6', 'E6', 'F6'] },
  '04': { lead: 'square', pad: 'square', scale: ['E5', 'G5', 'B5', 'E6', 'G6'], chord: ['E3', 'B3', 'G4', 'B4'], bass: 'E1', click: 'tick', kick: false, rev: 1.2, revWet: .12, dly: .5, drone: ['E2'], droneVol: -32, ping: true, cutoff: 1100, logo: ['B5', 'D6', 'F#6', 'G6'] },
  '05': { lead: 'sawtooth', pad: 'sawtooth', scale: ['C5', 'Eb5', 'G5', 'Bb5', 'C6'], chord: ['C3', 'G3', 'Eb4', 'Bb4', 'D5'], bass: 'C1', click: 'noise', kick: true, rev: 6, revWet: .45, dly: .5, drone: ['C2', 'G2'], droneVol: -28, rain: true, buzz: true, cutoff: 900, logo: ['G4', 'Bb4', 'D5', 'Eb5'] },
  '06': { lead: 'sine', pad: 'fatsine', scale: ['G5', 'B5', 'D6', 'E6', 'G6'], chord: ['G3', 'D4', 'B4', 'E5', 'G5'], bass: 'G1', click: null, kick: false, rev: 5, revWet: .45, dly: 0, drone: ['G2', 'D3', 'B3'], droneVol: -23, cutoff: 2200, logo: ['B5', 'D6', 'F#6', 'G6'] },
};

export function makeKit(id) {
  const k = KITS[id] || KITS['01'], T = Tone;
  const nodes = [], N = x => (nodes.push(x), x);
  const out = N(new T.Gain(.9)).toDestination();
  const rev = N(new T.Reverb({ decay: k.rev, wet: k.revWet })).connect(out);
  let bus = rev;
  if (k.dly) { const d = N(new T.PingPongDelay(k.dly, .35)); d.wet.value = .28; d.connect(rev); bus = d; }
  if (k.wobble) { const v = N(new T.Vibrato(5.5, .12)); v.connect(bus); bus = v; }
  const lead = k.lead === 'fm'
    ? N(new T.PolySynth(T.FMSynth, { harmonicity: 2, modulationIndex: 6, envelope: { attack: .01, decay: .25, sustain: .2, release: .6 }, volume: -18 })).connect(bus)
    : N(new T.PolySynth(T.Synth, { oscillator: { type: k.lead }, envelope: { attack: .005, decay: .18, sustain: .15, release: .4 }, volume: -18 })).connect(bus);
  // Atomic's theremin: a sine that glides with a wide vibrato
  const glide = k.theremin ? N(new T.Synth({ oscillator: { type: 'sine' }, portamento: .25, envelope: { attack: .15, decay: .2, sustain: .7, release: .8 }, volume: -18 })) : null;
  if (glide) { const v = N(new T.Vibrato(6, .25)).connect(rev); glide.connect(v); }
  const filt = N(new T.Filter(k.cutoff || 3000, 'lowpass')).connect(bus);
  const pad = N(new T.PolySynth(T.Synth, { oscillator: { type: k.pad }, envelope: { attack: .6, decay: .5, sustain: .8, release: 2.5 }, volume: -20 })).connect(filt);
  // the darkwinter signal bell: carrier plus a modulator at 3.5x with a fast-decaying index (same as the films)
  const bell = N(new T.PolySynth(T.FMSynth, { harmonicity: 3.5, modulationIndex: 1.4, oscillator: { type: 'sine' }, modulation: { type: 'sine' },
    envelope: { attack: .006, decay: 2.2, sustain: 0, release: 1.8 }, modulationEnvelope: { attack: .002, decay: .2, sustain: 0, release: .2 }, volume: -12 })).connect(rev);
  const kick = k.kick ? N(new T.MembraneSynth({ pitchDecay: .05, octaves: 5, envelope: { attack: .002, decay: .45, sustain: 0 }, volume: -14 })).connect(out) : null;
  const riserF = N(new T.Filter(300, 'bandpass', -24)).connect(rev); riserF.Q.value = 2;
  const riser = N(new T.NoiseSynth({ noise: { type: 'pink' }, envelope: { attack: .85, decay: .05, sustain: 0, release: .1 }, volume: -22 })).connect(riserF);
  let click = null;
  if (k.click === 'metal') click = N(new T.MetalSynth({ envelope: { attack: .001, decay: .06, release: .02 }, harmonicity: 5.1, resonance: 4000, volume: -30 })).connect(bus);
  else if (k.click === 'noise') click = N(new T.NoiseSynth({ noise: { type: 'white' }, envelope: { attack: .001, decay: .1, sustain: 0 }, volume: -24 })).connect(rev);
  else if (k.click === 'tick') click = N(new T.Synth({ oscillator: { type: 'sine' }, envelope: { attack: .001, decay: .03, sustain: 0, release: .01 }, volume: -18 })).connect(bus);
  const drone = N(new T.PolySynth(T.Synth, { oscillator: { type: k.pad === 'fatsine' ? 'fatsine' : 'triangle' }, envelope: { attack: 2.5, decay: 1, sustain: 1, release: 2.5 }, volume: k.droneVol })).connect(filt);
  const lfo = N(new T.LFO(.07, (k.cutoff || 3000) * .4, (k.cutoff || 3000))).connect(filt.frequency);
  let rain = null, buzz = null;
  if (k.rain) { const rf = N(new T.Filter(1800, 'highpass')).connect(out); rain = N(new T.Noise({ type: 'pink', volume: -38 })).connect(rf); }
  if (k.buzz) { const bf = N(new T.Filter(500, 'lowpass')).connect(out); buzz = N(new T.Oscillator({ frequency: 60, type: 'sawtooth', volume: -44 })).connect(bf); }
  const now = () => T.now() + .05;
  let lastNote = 0;

  return {
    ready: rev.ready,
    // the build: clicks, a run up the scale, a riser, then the chord and the bell (Mark Lab)
    build() {
      const t = now(), S = k.scale;
      if (click) for (let i = 0; i < 5; i++) { const ti = t + i * .045;
        if (k.click === 'tick') click.triggerAttackRelease(S[i % S.length], '64n', ti);
        else if (k.click === 'metal') click.triggerAttackRelease('C6', '64n', ti, .6);
        else click.triggerAttackRelease('32n', ti, .4); }
      if (k.beep) [0, .12, .24].forEach(d => lead.triggerAttackRelease('A6', .05, t + .3 + d, .4));
      S.forEach((n, i) => lead.triggerAttackRelease(n, .12, t + .35 + i * .075, .6));
      riserF.frequency.cancelScheduledValues(t); riserF.frequency.setValueAtTime(300, t + .7); riserF.frequency.exponentialRampToValueAtTime(6000, t + 1.55);
      riser.triggerAttackRelease(.9, t + .7);
      if (kick) kick.triggerAttackRelease(k.bass, '4n', t + 1.45, .7);
      pad.triggerAttackRelease(k.chord, 2.6, t + 1.45, .7);
      bell.triggerAttackRelease(S[S.length - 1], 1.2, t + 1.45, .5);
      if (glide) { glide.triggerAttack(S[0], t + .7); glide.setNote(S[4], t + 1.2); glide.triggerRelease(t + 1.7); }
      if (k.ping) [0, .5, 1].forEach((d, i) => bell.triggerAttackRelease('E6', .4, t + 2.2 + d, .45 / (i + 1)));   // Vector's radar ping, echoing out
    },
    // the sonic logo: the signal bell climbs 3–5–7 and resolves up to the tonic over a soft chord
    logo(at = 0) {
      const t = now() + at, [a, b, c, d] = k.logo;
      [[a, 0], [b, .24], [c, .48]].forEach(([n, o]) => bell.triggerAttackRelease(n, .9, t + o, .55));
      bell.triggerAttackRelease(d, 2.2, t + .96, .8);
      pad.triggerAttackRelease(k.chord.slice(0, 3), 2.2, t + .96, .45);
      if (kick) kick.triggerAttackRelease(k.bass, '8n', t + .96, .35);
    },
    // a single note of the era's scale, for the pointer: rate-limited so a fast drag stays musical
    note(i, vel = .35) { const t = T.now(); if (t - lastNote < .085) return; lastNote = t; const S = k.scale; lead.triggerAttackRelease(S[((i % S.length) + S.length) % S.length], .09, t + .01, vel); },
    // UI sounds for the product: quiet, short, and all on the era's own voices
    ui(kind) { const t = now(), S = k.scale, [a3, a5, a7, a8] = k.logo;
      if (kind === 'tap') (click && k.click === 'tick' ? click.triggerAttackRelease(S[2], '64n', t) : lead.triggerAttackRelease(S[2], .05, t, .35));
      if (kind === 'hover') lead.triggerAttackRelease(S[0], .06, t, .18);
      if (kind === 'success') { bell.triggerAttackRelease(a5, .5, t, .45); bell.triggerAttackRelease(a8, 1.4, t + .14, .6); }
      if (kind === 'notify') { bell.triggerAttackRelease(a3, .6, t, .45); bell.triggerAttackRelease(a7, 1.2, t + .16, .5); }
      if (kind === 'signal') { bell.triggerAttackRelease(a8, 1.6, t, .6); pad.triggerAttackRelease(k.chord.slice(0, 2), .9, t, .3); }
    },
    settle() { const t = now(); pad.triggerAttackRelease(k.chord.slice(0, 3), 1.6, t, .4); },
    // one voice per part of the mark (used by the site concepts): core = bell, ring = chord, frame = ignition, lattice = the scale run
    part(p) { const t = now(), S = k.scale;
      if (p === 'core') bell.triggerAttackRelease(S[S.length - 1], 1.4, t, .45);
      if (p === 'ring') pad.triggerAttackRelease(k.chord.slice(0, 3), 1.8, t, .4);
      if (p === 'frame') { if (kick) kick.triggerAttackRelease(k.bass, '8n', t, .45); pad.triggerAttackRelease([k.chord[0]], 1.2, t, .35); }
      if (p === 'lattice') S.forEach((n, i) => lead.triggerAttackRelease(n, .1, t + i * .075, .45));
    },
    start() { drone.triggerAttack(k.drone, now()); lfo.start(); rain?.start(); buzz?.start(); },
    stop() { const t = now(); drone.releaseAll(t); rain?.stop(t + .3); buzz?.stop(t + .3); out.gain.rampTo(0, 1, t); setTimeout(() => nodes.forEach(n => { try { n.dispose(); } catch {} }), 2400); },
  };
}

// Called after the tap that turns sound on. The component has already created and resumed an AudioContext and
// started a silent <audio> element inside that tap (iOS requires both); this hands that context to Tone.
let attached = null;
export async function attach(raw) {
  if (attached !== raw) { Tone.setContext(raw); attached = raw; }
  await Tone.start(); Tone.Destination.volume.value = -8;
  return raw.state === 'running';
}
