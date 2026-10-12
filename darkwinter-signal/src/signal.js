// <darkwinter-signal>: the interactive darkwinter mark for the website.
//
// The 3D hypercube mark from the Mark Lab, with the Mark Lab sounds. Moving the pointer turns the hypercube through
// the fourth dimension and plays the era's scale. A click, a tap, Enter or Space sends a signal: the darkwinter
// sonic logo on the signal bell, with a ripple for each note. Sound stays off until the visitor turns it on, and the
// sound engine (Tone.js) only downloads at that moment.
//
//   <script type="module" src="/darkwinter-signal.js"></script>
//   <darkwinter-signal era="01" eras="01,02,05,00" style="height:520px"></darkwinter-signal>
//
// Attributes: era (00 Mark, 01 Synthwave, 02 Cassette, 03 Atomic, 04 Vector, 05 Noir, 06 Colony), eras (adds a switcher), hint ("off"
// hides the first-run hint), label (accessible name). Methods: signal(), build(). Events: dw-signal, dw-era,
// dw-sound (detail.on).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

const SOUND_URL = new URL('./darkwinter-signal-sound.js', import.meta.url).href;

export const ERAS = {
  '00': { name: 'Mark', bg: '#f4f2ee', fg: '#111111', frame: '#111111', ring: '#111111', tess: '#111111', core: null, bloom: 0, mode: 'flat' },
  '01': { name: 'Synthwave', bg: '#0b0612', fg: '#c9a3ff', frame: '#ff2e88', ring: '#2f5bff', tess: '#d6e2ff', core: '#ffffff', bloom: .85, grid: '#ff2e88', mode: 'neon' },
  '02': { name: 'Cassette', bg: '#120b03', fg: '#ffb000', frame: '#d97a00', ring: '#c86400', tess: '#ffd36b', core: '#fff1c4', bloom: .7, mode: 'neon' },
  '03': { name: 'Atomic', bg: '#f1e4c3', fg: '#1f2a3a', frame: '#c8402b', ring: '#2f7f7a', tess: '#1f2a3a', core: '#e9b949', bloom: 0, mode: 'toon', sunburst: ['#f1e4c3', '#ecd28f'], overlay: 'halftone' },
  '04': { name: 'Vector', bg: '#020604', fg: '#39ff88', frame: '#39ff88', ring: '#39ff88', tess: '#e6fff0', core: '#39ff88', bloom: .7, mode: 'wire', grid: '#0f5a32', overlay: 'scan' },
  '05': { name: 'Noir', bg: '#060914', fg: '#22e1ff', frame: '#ff2fb3', ring: '#22e1ff', tess: '#ffffff', core: '#ffd1f0', bloom: .9, mode: 'neon' },
  '06': { name: 'Colony', bg: '#f2c79a', fg: '#2b3a3f', frame: '#f6eedc', ring: '#7fc4cf', tess: '#2b3a3f', core: '#fff2cf', bloom: 0, mode: 'ceramic' },
};

/* ---------- shared geometry: the logo's proportions ---------- */
const S3 = Math.sqrt(3), G = { T: .085, ringW: .032, hex: .25, D4: 2 }; G.ringR = .5 - G.T - G.ringW / 2;
const triPts = r => [[0, r], [-S3 / 2 * r, -r / 2], [S3 / 2 * r, -r / 2]];
const V4 = []; for (let i = 0; i < 16; i++) V4.push([i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1, i & 8 ? 1 : -1]);
const E4 = []; for (let i = 0; i < 16; i++) for (let b = 0; b < 4; b++) { const j = i ^ (1 << b); if (i < j) E4.push([i, j]); }
function project(a, b) { const s = G.hex / Math.SQRT2, ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
  return V4.map(([x, y, z, w]) => { const x1 = x * ca - w * sa, w1 = x * sa + w * ca, z1 = z * cb - w1 * sb, w2 = z * sb + w1 * cb, k = 1 / (G.D4 + w2) * s; return [x1 * k, y * k, z1 * k]; }); }
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const outBack = x => 1 + 2.70158 * (x - 1) ** 3 + 1.70158 * (x - 1) ** 2, outCubic = x => 1 - (1 - x) ** 3;

// The flat mark as SVG, shown when WebGL isn't available
const FLAT = (ink) => { const P = triPts(1).map(([x, y]) => `${x * 100 + 100},${100 - y * 100 + 25}`).join(' '), I = triPts(1 - 2 * G.T).map(([x, y]) => `${x * 100 + 100},${100 - y * 100 + 25}`).join(' ');
  const hex = [...Array(6)].map((_, i) => { const a = Math.PI / 2 + i * Math.PI / 3; return `${100 + Math.cos(a) * 25},${125 - Math.sin(a) * 25}`; }).join(' ');
  return `<svg viewBox="0 0 200 200" role="img" aria-hidden="true"><path fill="${ink}" fill-rule="evenodd" d="M${P}Z M${I}Z"/><circle cx="100" cy="125" r="${G.ringR * 100}" fill="none" stroke="${ink}" stroke-width="${G.ringW * 100}"/><polygon points="${hex}" fill="none" stroke="${ink}" stroke-width="2.4"/></svg>`; };

const CSS = `
  :host { display: block; position: relative; min-height: 320px; overflow: hidden; contain: content; border-radius: inherit; color: var(--fg); background: var(--bg); font: inherit; -webkit-tap-highlight-color: transparent; }
  .stage { position: absolute; inset: 0; cursor: pointer; outline: none; touch-action: pan-y; }
  .stage:focus-visible { box-shadow: inset 0 0 0 2px var(--fg); }
  canvas, .flat { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  .fx { position: absolute; inset: 0; pointer-events: none; }
  .fx[data-o="halftone"] { background: radial-gradient(rgba(31,42,58,.18) 1.2px, transparent 1.6px) 0 0 / 7px 7px; }
  .fx[data-o="scan"] { background: repeating-linear-gradient(180deg, rgba(0,0,0,0) 0 2px, rgba(0,0,0,.28) 2px 3px), radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,.55)); }
  .flat { display: grid; place-items: center; } .flat svg { width: min(60%, 60vh); }
  .ui { position: absolute; left: 12px; right: 12px; bottom: max(12px, env(safe-area-inset-bottom, 0px)); display: flex; flex-wrap: wrap; gap: 8px; align-items: center; justify-content: space-between; pointer-events: none; }
  .ui > * { pointer-events: auto; }
  button { font: 600 12px/1 inherit; letter-spacing: .08em; text-transform: uppercase; color: var(--fg); background: color-mix(in srgb, var(--bg) 70%, transparent);
    border: 1px solid color-mix(in srgb, var(--fg) 45%, transparent); border-radius: 999px; padding: 9px 14px; min-height: 36px; cursor: pointer; backdrop-filter: blur(6px); display: inline-flex; gap: 8px; align-items: center; }
  button:hover { border-color: var(--fg); } button:focus-visible { outline: 2px solid var(--fg); outline-offset: 2px; }
  button[aria-pressed="true"] { background: var(--fg); color: var(--bg); border-color: var(--fg); }
  .eras { display: flex; flex-wrap: wrap; gap: 6px; } .eras button { padding: 9px 12px; }
  .dot { width: 9px; height: 9px; border-radius: 50%; border: 1px solid color-mix(in srgb, var(--fg) 50%, transparent); }
  .hint { position: absolute; left: 0; right: 0; top: 16px; text-align: center; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; opacity: .7; transition: opacity .6s; pointer-events: none; padding-inline: 16px; }
  .hint[data-gone] { opacity: 0; }
  .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
  svg.spk { width: 14px; height: 14px; }
`;

// one AudioContext and one silent unlock element for every instance on the page
let RAW = null, unlockEl = null, soundMod = null;
function silentWav() {
  const n = 4000, b = new Uint8Array(44 + n), v = new DataView(b.buffer), w = (o, s) => [...s].forEach((c, i) => b[o + i] = c.charCodeAt(0));
  w(0, 'RIFF'); v.setUint32(4, 36 + n, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 8000, true); v.setUint32(28, 8000, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true); w(36, 'data'); v.setUint32(40, n, true); b.fill(128, 44);
  let bin = ''; b.forEach(x => bin += String.fromCharCode(x)); return 'data:audio/wav;base64,' + btoa(bin);
}
const loadSound = () => (soundMod ??= import(SOUND_URL));

class DarkwinterSignal extends HTMLElement {
  static observedAttributes = ['era'];
  #root; #stage; #three = null; #raf = 0; #visible = false; #kit = null; #soundOn = false; #eraId = '01';
  #state = { a: 0, b: 0, ta: 0, tb: 0, tiltX: 0, tiltY: 0, ttX: 0, ttY: 0, build0: -9, lastMove: -9, step: null, ripples: [], clock: 0 };
  #reduce = matchMedia('(prefers-reduced-motion: reduce)');

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: 'open' });
    this.#root.innerHTML = `<style>${CSS}</style>
      <div class="stage" part="stage" tabindex="0" role="button"></div>
      <div class="fx" part="overlay"></div>
      <div class="hint" part="hint">Move to tune · Tap to send a signal</div>
      <div class="ui" part="controls">
        <button class="snd" type="button" aria-pressed="false"><svg class="spk" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M2 6h3l4-3v10l-4-3H2z"/><path d="M11 5.5c1 .8 1 4.2 0 5M12.8 4c2 1.6 2 6.4 0 8" stroke="currentColor" fill="none" stroke-width="1.4" stroke-linecap="round"/></svg><span>Sound off</span></button>
        <div class="eras" role="group" aria-label="Era"></div>
      </div>
      <div class="sr" aria-live="polite"></div>`;
    this.#stage = this.#root.querySelector('.stage');
  }

  connectedCallback() {
    this.#eraId = ERAS[this.getAttribute('era')] ? this.getAttribute('era') : '01';
    if (this.getAttribute('hint') === 'off') this.#root.querySelector('.hint').dataset.gone = '';
    this.#stage.setAttribute('aria-label', this.getAttribute('label') || 'The darkwinter mark. Press to send a signal.');
    this.#renderEraButtons(); this.#paintTheme();
    const st = this.#stage, S = this.#state;
    st.addEventListener('pointermove', e => { const r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      S.ta = x * Math.PI * 1.2; S.tb = y * Math.PI * .8; S.ttY = x * .5; S.ttX = y * .3; S.lastMove = S.clock; this.#dismissHint(); });
    st.addEventListener('pointerleave', () => { S.ttX = S.ttY = 0; });
    st.addEventListener('click', () => this.signal());
    st.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.signal(); }
      const d = { ArrowLeft: [-.35, 0], ArrowRight: [.35, 0], ArrowUp: [0, -.3], ArrowDown: [0, .3] }[e.key];
      if (d) { e.preventDefault(); S.ta += d[0]; S.tb += d[1]; S.lastMove = S.clock; this.#dismissHint(); } });
    const snd = this.#root.querySelector('.snd');
    snd.addEventListener('pointerenter', loadSound, { once: true }); snd.addEventListener('focus', loadSound, { once: true }); snd.addEventListener('touchstart', loadSound, { once: true, passive: true });
    snd.addEventListener('click', () => this.#toggleSound());
    this.#io = new IntersectionObserver(([en]) => { this.#visible = en.isIntersecting; if (this.#visible) { this.#ensure3D(); this.#loop(); } }, { threshold: .05 });
    this.#io.observe(this);
    this.#onVis = () => { if (document.visibilityState === 'visible') this.#loop(); };
    document.addEventListener('visibilitychange', this.#onVis);
  }
  #io; #onVis;
  disconnectedCallback() { this.#io?.disconnect(); document.removeEventListener('visibilitychange', this.#onVis); cancelAnimationFrame(this.#raf); this.#raf = 0; this.#kit?.stop(); this.#kit = null; }
  attributeChangedCallback(n, o, v) { if (n === 'era' && o !== v && ERAS[v] && this.isConnected) this.#setEra(v); }

  get era() { return this.#eraId; } set era(v) { this.setAttribute('era', v); }

  /** Send a signal: the sonic logo, a ripple per note, and the core flares. */
  signal() {
    const S = this.#state; this.#dismissHint();
    const at = S.clock; [0, .24, .48, .96].forEach((d, i) => S.ripples.push({ t: at + d, big: i === 3 }));
    if (this.#soundOn) this.#kit?.logo(); else this.#nudgeSound();
    this.dispatchEvent(new CustomEvent('dw-signal', { bubbles: true, composed: true, detail: { era: this.#eraId, sound: this.#soundOn } }));
  }
  /** Replay the build: the frame, the ring, then the hypercube unfolds (with the era's build sound when on). */
  build() { this.#state.build0 = this.#state.clock; if (this.#soundOn) this.#kit?.build(); }

  #dismissHint() { const h = this.#root.querySelector('.hint'); if (!('gone' in h.dataset)) setTimeout(() => h.dataset.gone = '', 1800); }
  #nudgeSound() { const b = this.#root.querySelector('.snd'); b.animate?.([{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }], { duration: 380 }); }
  #say(m) { this.#root.querySelector('.sr').textContent = m; }

  async #toggleSound() {
    const btn = this.#root.querySelector('.snd'), label = btn.querySelector('span');
    if (this.#soundOn) { this.#soundOn = false; btn.setAttribute('aria-pressed', 'false'); label.textContent = 'Sound off'; this.#kit?.stop(); this.#kit = null; unlockEl?.pause();
      this.dispatchEvent(new CustomEvent('dw-sound', { bubbles: true, composed: true, detail: { on: false } })); return; }
    // inside the tap: create and resume the context and start the silent element (iOS needs both here, synchronously)
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {}
    RAW ??= new (window.AudioContext || window.webkitAudioContext)(); RAW.resume();
    if (!unlockEl) { unlockEl = document.createElement('audio'); unlockEl.src = silentWav(); unlockEl.loop = true; unlockEl.setAttribute('playsinline', ''); }
    unlockEl.play().catch(() => {});
    btn.setAttribute('aria-pressed', 'true'); label.textContent = 'Loading';
    try {
      const mod = await loadSound(); const running = await mod.attach(RAW);
      this.#soundMod = mod; this.#soundOn = true; label.textContent = 'Sound on';
      this.#kit = mod.makeKit(this.#eraId); this.#kit.start(); this.build();
      this.#say(running ? 'Sound on.' : 'Your browser is holding audio. Tap Sound again.');
      this.dispatchEvent(new CustomEvent('dw-sound', { bubbles: true, composed: true, detail: { on: true } }));
    } catch (err) { btn.setAttribute('aria-pressed', 'false'); label.textContent = 'Sound off'; this.#say('Sound could not start.'); console.warn('[darkwinter-signal]', err); }
  }
  #soundMod = null;

  #renderEraButtons() {
    const list = (this.getAttribute('eras') || '').split(',').map(s => s.trim()).filter(id => ERAS[id]), box = this.#root.querySelector('.eras');
    box.innerHTML = ''; box.hidden = list.length < 2;
    list.forEach(id => { const b = document.createElement('button'); b.type = 'button'; b.dataset.id = id; b.setAttribute('aria-pressed', id === this.#eraId);
      b.innerHTML = `<span class="dot" style="background:${ERAS[id].frame}"></span>${ERAS[id].name}`; b.onclick = () => this.setAttribute('era', id); box.append(b); });
  }
  #paintTheme() { const e = ERAS[this.#eraId]; this.style.setProperty('--bg', e.bg); this.style.setProperty('--fg', e.fg); }

  #setEra(id) {
    this.#eraId = id; this.#paintTheme();
    this.#root.querySelectorAll('.eras button').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === id));
    if (this.#three) this.#applyEra();
    if (this.#soundOn && this.#soundMod) { this.#kit?.stop(); this.#kit = this.#soundMod.makeKit(id); this.#kit.start(); }
    this.build();
    this.dispatchEvent(new CustomEvent('dw-era', { bubbles: true, composed: true, detail: { era: id, name: ERAS[id].name } }));
  }

  #ensure3D() {
    if (this.#three !== null) return;
    let renderer;
    try { const c = document.createElement('canvas'); renderer = new THREE.WebGLRenderer({ canvas: c, antialias: true, powerPreference: 'low-power' }); }
    catch { this.#three = false; this.#stage.innerHTML = `<div class="flat">${FLAT(ERAS[this.#eraId].fg)}</div>`; return; }
    this.#stage.append(renderer.domElement);
    renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1)); renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(30, 1, .1, 60);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x404050, 1.4)); const sun = new THREE.DirectionalLight(0xffffff, 2.2); sun.position.set(-2, 3, 4); scene.add(sun);
    const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .5, .3, .45); composer.addPass(bloom); composer.addPass(new OutputPass());

    const mark = new THREE.Group(); scene.add(mark);
    const shape = new THREE.Shape(triPts(1).map(p => new THREE.Vector2(...p))); shape.holes.push(new THREE.Path(triPts(1 - 2 * G.T).reverse().map(p => new THREE.Vector2(...p))));
    const fg = new THREE.ExtrudeGeometry(shape, { depth: .09, bevelEnabled: true, bevelThickness: .012, bevelSize: .008, bevelSegments: 3 }); fg.translate(0, 0, -.045);
    const frame = new THREE.Mesh(fg); mark.add(frame);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(G.ringR, G.ringW / 2 * 1.05, 20, 180)); mark.add(ring);
    const qIso = (() => { const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 1, 1).normalize(), new THREE.Vector3(0, 0, 1));
      const p = new THREE.Vector3(1, 1, -1).applyQuaternion(q); return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2 - Math.atan2(p.y, p.x)).multiply(q); })();
    const tess = new THREE.Group(); tess.quaternion.copy(qIso); mark.add(tess);
    const tessPos = new Float32Array(E4.length * 6), tessGeo = new LineSegmentsGeometry(); tessGeo.setPositions(tessPos);
    const tessMat = new LineMaterial({ color: 0xffffff, linewidth: 2.6, worldUnits: false }); tess.add(new LineSegments2(tessGeo, tessMat));
    const nodes = new THREE.InstancedMesh(new THREE.SphereGeometry(.013, 10, 8), new THREE.MeshBasicMaterial(), 16); tess.add(nodes);
    const core = new THREE.Mesh(new THREE.SphereGeometry(.03, 20, 16), new THREE.MeshBasicMaterial()); mark.add(core);
    const ripMat = new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false }), ripples = [];
    for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(new THREE.TorusGeometry(G.ringR, .004, 8, 120), ripMat.clone()); m.visible = false; mark.add(m); ripples.push(m); }
    const grid = new THREE.GridHelper(14, 42, 0xffffff, 0xffffff); grid.position.y = -.95; grid.material.transparent = true; grid.material.opacity = .4; scene.add(grid);
    // Vector draws every surface as an edge: the frame's outline and the ring as fat lines
    const fat = (pos, lw) => { const g = new LineSegmentsGeometry(); g.setPositions(pos); const m = new LineMaterial({ color: 0xffffff, linewidth: lw, worldUnits: false }); return new LineSegments2(g, m); };
    const frameEdges = fat(new THREE.EdgesGeometry(fg, 30).attributes.position.array, 2.2); mark.add(frameEdges);
    const circ = []; for (const rr of [G.ringR - G.ringW / 2, G.ringR + G.ringW / 2]) for (let i = 0; i < 96; i++) { const a0 = i / 96 * Math.PI * 2, a1 = (i + 1) / 96 * Math.PI * 2; circ.push(Math.cos(a0) * rr, Math.sin(a0) * rr, 0, Math.cos(a1) * rr, Math.sin(a1) * rr, 0); }
    const ringEdges = fat(circ, 2); mark.add(ringEdges);
    // Atomic's printed sunburst behind the mark
    const sb = document.createElement('canvas'); sb.width = sb.height = 1024;
    const sunburst = new THREE.CanvasTexture(sb); sunburst.colorSpace = THREE.SRGBColorSpace;
    this.#three = { renderer, scene, camera, composer, bloom, mark, frame, ring, tess, tessGeo, tessPos, tessMat, nodes, core, ripples, grid, frameEdges, ringEdges, sb, sunburst,
      lineMats: [tessMat, frameEdges.material, ringEdges.material], m4: new THREE.Matrix4(), fog: new THREE.Fog(0, 3.5, 11) };
    new ResizeObserver(() => this.#resize()).observe(this); this.#resize(); this.#applyEra();
    this.#state.build0 = this.#state.clock;
  }

  #applyEra() {
    const e = ERAS[this.#eraId], T = this.#three, C = c => new THREE.Color(c);
    T.fog.color = C(e.bg); T.scene.fog = e.bloom > 0 ? T.fog : null;
    if (e.sunburst) { const x = T.sb.getContext('2d'), n = 30; for (let i = 0; i < n; i++) { x.fillStyle = e.sunburst[i % 2]; x.beginPath(); x.moveTo(512, 512); x.arc(512, 512, 760, i / n * Math.PI * 2, (i + 1) / n * Math.PI * 2); x.fill(); }
      T.sunburst.needsUpdate = true; T.scene.background = T.sunburst; } else T.scene.background = C(e.bg);
    this.#root.querySelector('.fx').dataset.o = e.overlay || '';
    const wire = e.mode === 'wire'; T.frame.visible = T.ring.visible = !wire; T.frameEdges.visible = T.ringEdges.visible = wire;
    T.frameEdges.material.color.set(e.frame); T.ringEdges.material.color.set(e.ring);
    const mat = col => e.mode === 'ceramic' ? new THREE.MeshStandardMaterial({ color: col, roughness: .55, metalness: 0 }) : e.mode === 'toon' ? new THREE.MeshToonMaterial({ color: col }) : new THREE.MeshBasicMaterial({ color: col });
    T.frame.material = mat(e.frame); T.ring.material = mat(e.ring);
    T.tessMat.color.set(e.tess); T.tessMat.linewidth = { flat: 3.4, toon: 3.6, wire: 2 }[e.mode] ?? 2.6; T.nodes.material.color.set(e.tess); T.nodes.visible = e.mode !== 'flat' && e.mode !== 'toon';
    T.core.visible = !!e.core; if (e.core) T.core.material.color.set(e.core).multiplyScalar(e.bloom ? 1.3 : 1);
    T.ripples.forEach(r => r.material.color.set(e.mode === 'flat' ? e.frame : e.ring));
    T.grid.visible = !!e.grid; if (e.grid) T.grid.material.color.set(e.grid);
    T.bloom.enabled = e.bloom > 0; T.bloom.strength = e.bloom * .55;
  }

  #resize() {
    const T = this.#three; if (!T) return; const w = Math.max(1, this.clientWidth), h = Math.max(1, this.clientHeight), asp = w / h;
    T.renderer.setSize(w, h, false); T.composer.setSize(w, h); T.camera.aspect = asp;
    // fit the mark: about 70% of the height, or of the width on narrow elements
    const half = Math.tan(THREE.MathUtils.degToRad(15)), dH = .78 / (half * .6), dW = .9 / (half * asp * .66);
    T.camera.position.set(0, -.04, Math.max(dH, dW)); T.camera.lookAt(0, -.1, 0); T.camera.updateProjectionMatrix();
    T.lineMats.forEach(m => m.resolution.set(w, h));
  }

  #loop() {
    if (this.#raf || !this.#three || !this.#visible || document.visibilityState !== 'visible') return;
    let last = performance.now();
    const tick = now => {
      this.#raf = 0; if (!this.#visible || document.visibilityState !== 'visible') return;
      const raw = Math.min(1, (now - last) / 1000); last = now; this.#frame(raw);
      this.#raf = requestAnimationFrame(tick);
    };
    this.#raf = requestAnimationFrame(tick);
  }

  #frame(raw) {
    // the clock runs on real time so builds and ripples keep pace on slow devices; easing uses a capped step
    const S = this.#state, T = this.#three, reduce = this.#reduce.matches, dt = Math.min(.1, raw); S.clock += raw;
    // idle: a slow 4D turn; with the pointer: ease toward it
    const active = S.clock - S.lastMove < 2.5;
    if (!active && !reduce) { S.ta += dt * .35; S.tb += dt * .13; }
    const k = 1 - Math.exp(-dt * (active ? 6 : 2));
    S.a += (S.ta - S.a) * k; S.b += (S.tb - S.b) * k; S.tiltX += (S.ttX - S.tiltX) * k; S.tiltY += (S.ttY - S.tiltY) * k;
    // the pointer plays the scale: one note each time the hypercube turns another twelfth
    const step = Math.floor(S.a / (Math.PI / 6));
    if (S.step !== null && step !== S.step && active && this.#soundOn) this.#kit?.note(step);
    S.step = step;
    // build
    const lt = reduce ? 9 : S.clock - S.build0;
    T.frame.scale.setScalar(outBack(clamp(lt / .55))); T.ring.scale.setScalar(outBack(clamp((lt - .35) / .5))); T.frameEdges.scale.copy(T.frame.scale); T.ringEdges.scale.copy(T.ring.scale);
    const unfold = outCubic(clamp((lt - .7) / .9)), P = project(S.a, S.b * .6 + S.a * .37);
    for (let i = 0; i < E4.length; i++) { const [p, q] = E4[i]; T.tessPos.set([...P[p].map(v => v * unfold), ...P[q].map(v => v * unfold)], i * 6); }
    T.tessGeo.setPositions(T.tessPos);
    P.forEach((p, i) => { T.m4.makeTranslation(p[0] * unfold, p[1] * unfold, p[2] * unfold); T.nodes.setMatrixAt(i, T.m4); }); T.nodes.instanceMatrix.needsUpdate = true;
    // ripples and the core flare on a signal
    let flare = 0; S.ripples = S.ripples.filter(r => S.clock - r.t < 1.4);
    T.ripples.forEach((m, i) => { const r = S.ripples[i]; if (!r || S.clock < r.t) { m.visible = false; return; }
      const u = (S.clock - r.t) / 1.4; m.visible = true; m.scale.setScalar(1 + u * (r.big ? 2.6 : 1.5)); m.material.opacity = (1 - u) ** 2 * (r.big ? 1 : .7);
      flare = Math.max(flare, (1 - u) ** 3 * (r.big ? 1 : .5)); });
    T.core.scale.setScalar((.2 + 1.4 * outCubic(clamp((lt - 1.35) / .4))) * (1 + flare * .9));
    T.bloom.strength = ERAS[this.#eraId].bloom * .55 * (1 + flare * .6);
    T.mark.rotation.set(S.tiltX + (reduce ? 0 : Math.sin(S.clock * .5) * .06), S.tiltY + (reduce ? 0 : Math.sin(S.clock * .7) * .2), 0);
    T.mark.position.y = -.22;
    T.composer.render();
  }
}

if (!customElements.get('darkwinter-signal')) customElements.define('darkwinter-signal', DarkwinterSignal);
export default DarkwinterSignal;
