// The flat darkwinter mark as SVG, from the same geometry as the 3D mark (darkwinter-mark / darkwinter-signal).
// No three.js needed: the isometric rest pose of the hypercube is computed directly.
const S3 = Math.sqrt(3);
export const G = { T: .085, ringW: .032, tessW: .026, hex: .25, D4: 2 }; G.ringR = .5 - G.T - G.ringW / 2;
const triPts = r => [[0, r], [-S3 / 2 * r, -r / 2], [S3 / 2 * r, -r / 2]];
const V4 = []; for (let i = 0; i < 16; i++) V4.push([i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1, i & 8 ? 1 : -1]);
const E4 = []; for (let i = 0; i < 16; i++) for (let b = 0; b < 4; b++) { const j = i ^ (1 << b); if (i < j) E4.push([i, j]); }
// quaternion helpers (x, y, z, w)
const qMul = (a, b) => [a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1], a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0], a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3], a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]];
const qRot = (q, v) => { const p = qMul(qMul(q, [...v, 0]), [-q[0], -q[1], -q[2], q[3]]); return p.slice(0, 3); };
const qFromUnit = (a, b) => { const d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2], c = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]], q = [...c, 1 + d], n = Math.hypot(...q); return q.map(x => x / n); };
const qAxis = (ax, t) => [ax[0] * Math.sin(t / 2), ax[1] * Math.sin(t / 2), ax[2] * Math.sin(t / 2), Math.cos(t / 2)];
const qIso = (() => { const n = 1 / S3, q = qFromUnit([n, n, n], [0, 0, 1]), p = qRot(q, [1, 1, -1]); return qMul(qAxis([0, 0, 1], Math.PI / 2 - Math.atan2(p[1], p[0])), q); })();
const rest = V4.map(([x, y, z, w]) => { const k = 1 / (G.D4 + w) * G.hex / Math.SQRT2; return qRot(qIso, [x * k, y * k, z * k]); });

/** ink: mark colour; frame/ring/tess override per part; core: centre dot; small: the simplified cut for 32 px and below. */
export function svgMark({ ink = '#111111', frame, ring, tess, core = null, small = false, size = null, bg = null, pad = 0 } = {}) {
  frame ??= ink; ring ??= ink; tess ??= ink;
  const f = v => `${v[0].toFixed(4)} ${(-v[1]).toFixed(4)}`;
  const outer = triPts(1), inner = triPts(1 - 2 * G.T);
  const d = `M${outer.map(f).join(' L')} Z M${[inner[0], inner[2], inner[1]].map(f).join(' L')} Z`;
  let lines;
  if (small) {
    const hx = [0, 1, 2, 3, 4, 5].map(k => { const a = Math.PI / 2 + k * Math.PI / 3; return [Math.cos(a) * G.hex * 1.02, Math.sin(a) * G.hex * 1.02]; });
    lines = `<path d="M${hx.map(f).join(' L')} Z M0 0 L${f(hx[0])} M0 0 L${f(hx[2])} M0 0 L${f(hx[4])}" fill="none" stroke="${tess}" stroke-width="${(G.tessW * 1.9).toFixed(4)}" stroke-linejoin="round" stroke-linecap="round"/>`;
  } else {
    lines = `<path d="${E4.map(([i, j]) => `M${f(rest[i])} L${f(rest[j])}`).join(' ')}" fill="none" stroke="${tess}" stroke-width="${G.tessW}" stroke-linecap="round"/>`;
  }
  const s = 2.04 + pad * 2, vb = `${(-1.02 - pad).toFixed(3)} ${(-1.08 - pad).toFixed(3)} ${s.toFixed(3)} ${s.toFixed(3)}`;
  const back = bg ? `<rect x="${(-1.02 - pad).toFixed(3)}" y="${(-1.08 - pad).toFixed(3)}" width="${s.toFixed(3)}" height="${s.toFixed(3)}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}"${size ? ` width="${size}" height="${size}"` : ''} role="img" aria-label="darkwinter">${back}<path d="${d}" fill="${frame}" fill-rule="evenodd" stroke="${frame}" stroke-width="0.012" stroke-linejoin="round"/><circle cx="0" cy="0" r="${G.ringR.toFixed(4)}" fill="none" stroke="${ring}" stroke-width="${(small ? G.ringW * 1.6 : G.ringW).toFixed(4)}"/>${lines}${core ? `<circle cx="0" cy="0" r="0.035" fill="${core}"/>` : ''}</svg>`;
}
