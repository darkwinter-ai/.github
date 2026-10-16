// darkwinter.ai concept mockups: the mark as an instrument and a guide.
// One engine drives both concepts: a 3D mark whose four parts map to the four starting points, each with its own sound.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

/* ---------- the four parts, the four starting points ----------
   The parts are deliberately unnamed on screen: they are shown only by number, colour and the section they open.
   The keys below are code identifiers, not labels. */
export const PARTS = {
  core: { n: '01', short: 'Get started', path: 'Get started with AI', line: 'Find one useful first task. Build the context and confidence to do it well.', color: '#ff3b3b',
    changes: ['Pick one recurring task worth improving', 'Capture your business context once, reuse it everywhere', 'Get a reviewed, useful result your team can see'], resource: 'Find your first use case', kind: 'Prompt' },
  ring: { n: '02', short: 'Team capability', path: 'Build team capability', line: 'Shared practices, reusable prompts, and clear ownership of quality.', color: '#b04dff',
    changes: ['Shared prompts and practices the team owns', 'Clear review and ownership for AI output', 'A working agreement for how AI is used'], resource: 'Team AI working agreement', kind: 'Template' },
  frame: { n: '03', short: 'Connect and automate', path: 'Connect and automate work', line: 'Map the recurring work, connect the tools, and add review gates.', color: '#2f7bff',
    changes: ['A map of the recurring work and its handoffs', 'A focused pilot with a human review gate', 'Connected tools and fewer manual steps'], resource: 'Workflow map', kind: 'Template' },
  lattice: { n: '04', short: 'AI operating system', path: 'Build your AI operating system', line: 'Context, tools, workflows, permissions and selected agents, connected.', color: '#00d4ff',
    changes: ['Shared context across tools and teams', 'Permissions and review built in from day one', 'Selected agents where they earn their place'], resource: 'Pilot scorecard', kind: 'Template' },
};
export const ORDER = ['core', 'ring', 'frame', 'lattice'];

/* ---------- sound: the Mark Lab voices (darkwinter-signal/src/sound.js, Synthwave kit), off until the visitor turns it on ---------- */
import { makeKit, attach } from '../../darkwinter-signal/src/sound.js';
let RAW = null, kit = null; const last = {};
export async function soundOn() {
  try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {}
  RAW ??= new (window.AudioContext || window.webkitAudioContext)(); RAW.resume();
  await attach(RAW);
  if (!kit) { kit = makeKit('01'); await kit.ready; kit.start(); kit.build(); }
  return true;
}
export function soundOff() { kit?.stop(); kit = null; }
const ok = (key, gap) => { const t = performance.now() / 1000; if (!kit || (last[key] && t - last[key] < gap)) return false; last[key] = t; return true; };
export const sfx = {
  hover(part) { if (ok(part, .7)) kit.part(part); },
  select() { if (ok('select', .4)) kit.logo(); },     // the sonic logo as a path opens
  step(i) { if (kit) kit.note(i); },                   // turning the lattice plays the scale
  tick() { if (ok('tick', .12)) kit.ui('tap'); },
};

/* ---------- the mark ---------- */
const S3 = Math.sqrt(3), G = { T: .085, ringW: .032, hex: .25, D4: 2 }; G.ringR = .5 - G.T - G.ringW / 2;
const triPts = r => [[0, r], [-S3 / 2 * r, -r / 2], [S3 / 2 * r, -r / 2]];
const V4 = []; for (let i = 0; i < 16; i++) V4.push([i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1, i & 8 ? 1 : -1]);
const E4 = []; for (let i = 0; i < 16; i++) for (let b = 0; b < 4; b++) { const j = i ^ (1 << b); if (i < j) E4.push([i, j]); }
const project = (a, b) => { const s = G.hex / Math.SQRT2, ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
  return V4.map(([x, y, z, w]) => { const x1 = x * ca - w * sa, w1 = x * sa + w * ca, z1 = z * cb - w1 * sb, w2 = z * sb + w1 * cb, k = 1 / (G.D4 + w2) * s; return [x1 * k, y * k, z1 * k]; }); };
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const outBack = x => 1 + 2.70158 * (x - 1) ** 3 + 1.70158 * (x - 1) ** 2;

/**
 * mountMark(host, { layout(aspect) -> {x, scale}, snow, grid, onHover(part), onSelect(part), onFrame(anchors) })
 * Returns { hover(part), select(part), anchors }.
 */
export function mountMark(host, opts = {}) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(2, devicePixelRatio || 1)); renderer.outputColorSpace = THREE.SRGBColorSpace;
  host.prepend(renderer.domElement); Object.assign(renderer.domElement.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#040810'); scene.fog = new THREE.Fog('#040810', 3.6, 9);
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 40);
  const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .5, .45, .3); composer.addPass(bloom); composer.addPass(new OutputPass());

  // world: a faint cyan floor grid and falling snow
  if (opts.grid !== false) { const g = new THREE.GridHelper(16, 48, '#00d4ff', '#00d4ff'); g.position.y = -1.05; g.material.transparent = true; g.material.opacity = .07; scene.add(g); }
  const flakeC = document.createElement('canvas'); flakeC.width = flakeC.height = 32; { const x = flakeC.getContext('2d'), gr = x.createRadialGradient(16, 16, 0, 16, 16, 16); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = gr; x.fillRect(0, 0, 32, 32); }
  const NS = opts.snow ?? 900, snowPos = new Float32Array(NS * 3), snowV = new Float32Array(NS);
  for (let i = 0; i < NS; i++) { snowPos[i * 3] = (Math.random() - .5) * 9; snowPos[i * 3 + 1] = (Math.random() - .5) * 5; snowPos[i * 3 + 2] = (Math.random() - .5) * 6 - 1; snowV[i] = .15 + Math.random() * .35; }
  const snowG = new THREE.BufferGeometry(); snowG.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
  scene.add(new THREE.Points(snowG, new THREE.PointsMaterial({ size: .03, map: new THREE.CanvasTexture(flakeC), transparent: true, depthWrite: false, color: '#cfe0ff', opacity: .45 })));

  const root = new THREE.Group(), mark = new THREE.Group(); root.add(mark); scene.add(root);
  const shape = new THREE.Shape(triPts(1).map(p => new THREE.Vector2(...p))); shape.holes.push(new THREE.Path(triPts(1 - 2 * G.T).reverse().map(p => new THREE.Vector2(...p))));
  const fg = new THREE.ExtrudeGeometry(shape, { depth: .09, bevelEnabled: true, bevelThickness: .012, bevelSize: .008, bevelSegments: 3 }); fg.translate(0, 0, -.045);
  const base = { frame: new THREE.Color(PARTS.frame.color), ring: new THREE.Color(PARTS.ring.color), lattice: new THREE.Color('#e8f0ff'), core: new THREE.Color(PARTS.core.color) };
  const frame = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ color: base.frame.clone() })); mark.add(frame);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(G.ringR, G.ringW / 2 * 1.05, 20, 180), new THREE.MeshBasicMaterial({ color: base.ring.clone() })); mark.add(ring);
  const qIso = (() => { const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1, 1, 1).normalize(), new THREE.Vector3(0, 0, 1)); const p = new THREE.Vector3(1, 1, -1).applyQuaternion(q);
    return new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2 - Math.atan2(p.y, p.x)).multiply(q); })();
  const tess = new THREE.Group(); tess.quaternion.copy(qIso); mark.add(tess);
  const tessPos = new Float32Array(E4.length * 6), tessGeo = new LineSegmentsGeometry(); tessGeo.setPositions(tessPos);
  const tessMat = new LineMaterial({ color: base.lattice.clone(), linewidth: 2.4, worldUnits: false }); tess.add(new LineSegments2(tessGeo, tessMat));
  const nodes = new THREE.InstancedMesh(new THREE.SphereGeometry(.013, 10, 8), new THREE.MeshBasicMaterial({ color: '#e8f0ff' }), 16); tess.add(nodes);
  const core = new THREE.Mesh(new THREE.SphereGeometry(.03, 20, 16), new THREE.MeshBasicMaterial({ color: base.core.clone().multiplyScalar(1.4) })); mark.add(core);
  // a halo around the beacon
  const haloC = document.createElement('canvas'); haloC.width = haloC.height = 128; { const x = haloC.getContext('2d'), gr = x.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,59,59,.55)'); gr.addColorStop(1, 'rgba(255,59,59,0)'); x.fillStyle = gr; x.fillRect(0, 0, 128, 128); }
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(haloC), transparent: true, depthWrite: false })); halo.scale.setScalar(.35); mark.add(halo);
  // invisible hit volumes, one per part
  const hitMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false });
  const hits = [];
  const hit = (geo, part) => { const m = new THREE.Mesh(geo, hitMat); m.userData.part = part; mark.add(m); hits.push(m); return m; };
  hit(new THREE.SphereGeometry(.075, 16, 12), 'core');
  hit(new THREE.SphereGeometry(G.hex * .95, 20, 16), 'lattice');
  hit(new THREE.TorusGeometry(G.ringR, .05, 10, 90), 'ring');
  { const s = new THREE.Shape(triPts(1.03).map(p => new THREE.Vector2(...p))); s.holes.push(new THREE.Path(triPts(1 - 2 * G.T - .06).reverse().map(p => new THREE.Vector2(...p)))); const g = new THREE.ExtrudeGeometry(s, { depth: .2, bevelEnabled: false }); g.translate(0, 0, -.1); hit(g, 'frame'); }
  const PRIORITY = ['core', 'lattice', 'ring', 'frame'];

  let state = { hover: null, selected: null, a: .6, b: .2, ta: .6, tb: .2, step: null, clock: 0, build0: 0, ripple: -9, drag: null, moved: 0 };
  const m4 = new THREE.Matrix4(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), v = new THREE.Vector3();
  const api = {
    hover(p) { if (p === state.hover) return; state.hover = p; if (p) sfx.hover(p); opts.onHover?.(p); host.style.cursor = p ? 'pointer' : 'grab'; },
    select(p) { state.selected = p; if (p) { state.ripple = state.clock; sfx.select(); } opts.onSelect?.(p); },
    get selected() { return state.selected; },
  };
  const pick = e => { const r = renderer.domElement.getBoundingClientRect(); ndc.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); ray.setFromCamera(ndc, camera);
    const got = new Set(ray.intersectObjects(hits, false).map(h => h.object.userData.part)); return PRIORITY.find(p => got.has(p)) ?? null; };
  const el = renderer.domElement; el.style.touchAction = 'pan-y';
  el.addEventListener('pointermove', e => {
    if (state.drag) { const dx = e.clientX - state.drag.x, dy = e.clientY - state.drag.y; state.moved += Math.abs(dx) + Math.abs(dy); state.ta += dx * .012; state.tb += dy * .008; state.drag = { x: e.clientX, y: e.clientY }; return; }
    if (e.pointerType === 'mouse') api.hover(pick(e));
  });
  el.addEventListener('pointerdown', e => { state.drag = { x: e.clientX, y: e.clientY }; state.moved = 0; });
  el.addEventListener('pointerup', e => { const wasDrag = state.moved > 8; state.drag = null; if (wasDrag) return; const p = pick(e); if (p) { api.hover(p); api.select(p); } });
  el.addEventListener('pointerleave', () => { state.drag = null; if (!state.selected) api.hover(null); });

  const resize = () => { const w = host.clientWidth, h = host.clientHeight; renderer.setSize(w, h, false); composer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); tessMat.resolution.set(w, h); };
  new ResizeObserver(resize).observe(host); resize();

  let last = performance.now(), visible = true;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(host);
  const loop = now => {
    requestAnimationFrame(loop); if (!visible) { last = now; return; }
    const raw = Math.min(.1, (now - last) / 1000); last = now; state.clock += raw; const dt = raw, t = state.clock;
    // layout
    const L = opts.layout ? opts.layout(camera.aspect) : { x: 0, y: 0, scale: 1 };
    const sel = state.selected, focus = sel || state.hover;
    root.position.x += ((sel && L.selX !== undefined ? L.selX : L.x) - root.position.x) * (1 - Math.exp(-dt * 4));
    root.position.y = L.y ?? 0;
    const sc = L.scale * (sel ? (L.selScale ?? 1) : 1); root.scale.setScalar(root.scale.x + (sc - root.scale.x) * (1 - Math.exp(-dt * 4)));
    camera.position.set(0, .05, 3.6); camera.lookAt(0, 0, 0);
    // build-in and the 4D turn
    const lt = reduce ? 9 : t - state.build0;
    frame.scale.setScalar(outBack(clamp((lt - .4) / 1.1))); ring.scale.setScalar(outBack(clamp((lt - 1.2) / .9)));
    if (!state.drag && !reduce) state.ta += dt * (focus === 'lattice' ? .45 : .16);
    state.a += (state.ta - state.a) * (1 - Math.exp(-dt * 5)); state.b += (state.tb - state.b) * (1 - Math.exp(-dt * 5));
    const step = Math.floor(state.a / (Math.PI / 6)); if (state.step !== null && step !== state.step && state.drag) sfx.step(step); state.step = step;
    // the second 4D angle stays small so the perspective never blows up
    const unfold = clamp((lt - 1.9) / 1.4), P = project(state.a, clamp(.3 * Math.sin(state.a * .37) + state.b * .25, -.38, .38));
    for (let i = 0; i < E4.length; i++) { const [p, q] = E4[i]; tessPos.set([...P[p].map(x => x * unfold), ...P[q].map(x => x * unfold)], i * 6); }
    tessGeo.setPositions(tessPos); P.forEach((p, i) => { m4.makeTranslation(p[0] * unfold, p[1] * unfold, p[2] * unfold); nodes.setMatrixAt(i, m4); }); nodes.instanceMatrix.needsUpdate = true;
    // emphasis: the focused part brightens, the others recede
    const k = (part, c) => c.copy(base[part]).multiplyScalar(!focus ? 1 : focus === part ? 1.25 : .55);
    k('frame', frame.material.color); k('ring', ring.material.color); k('lattice', tessMat.color); k('core', core.material.color);
    const rp = t - state.ripple, pulse = 1 + Math.sin(t * 1.4) * .06 + (focus === 'core' ? .25 : 0) + (rp < 1.6 ? (1 - rp / 1.6) * .7 : 0);
    core.scale.setScalar(clamp((lt - 3.1) / .6) * 1.2 * pulse); halo.scale.setScalar(.35 * pulse * (focus && focus !== 'core' ? .5 : 1));
    mark.rotation.set(Math.sin(t * .5) * (reduce ? 0 : .08), Math.sin(t * .37) * (reduce ? 0 : .22) + (state.drag ? 0 : 0), 0);
    bloom.strength = .5 + (rp < 1.6 ? (1 - rp / 1.6) * .25 : 0);
    // snow
    if (!reduce) { for (let i = 0; i < NS; i++) { snowPos[i * 3 + 1] -= snowV[i] * dt; snowPos[i * 3] += Math.sin(t * .4 + i) * .002 + dt * .05; if (snowPos[i * 3 + 1] < -2.5) { snowPos[i * 3 + 1] = 2.5; snowPos[i * 3] = (Math.random() - .5) * 9; } } snowG.attributes.position.needsUpdate = true; }
    composer.render();
    // screen anchors for each part, for the HUD leader lines
    if (opts.onFrame) {
      const r = { w: host.clientWidth, h: host.clientHeight }, toScr = (lx, ly, lz, obj = mark) => { v.set(lx, ly, lz); obj.localToWorld(v); v.project(camera); return [(v.x + 1) / 2 * r.w, (1 - v.y) / 2 * r.h]; };
      const node = P[5].map(x => x * unfold);
      opts.onFrame({ core: toScr(0, 0, 0), ring: toScr(Math.cos(-.5) * G.ringR, Math.sin(-.5) * G.ringR, 0), frame: toScr(triPts(1)[2][0] * .82, triPts(1)[2][1] * .82 + .02, 0), lattice: toScr(node[0], node[1], node[2], tess) });
    }
  };
  requestAnimationFrame(loop);
  return api;
}
