# darkwinter brand assets

The production set for the darkwinter mark. Every file comes from one geometry: the refined mark used across the Mark Lab, the Transmissions and the Signal component. That geometry is a precise, symmetric redraw of `darkwinter_icon_logo_black.svg`.

## What's here

| Folder | Files | Use |
|---|---|---|
| `svg/` | `darkwinter-mark-black.svg`, `darkwinter-mark-white.svg` | The master mark for light and dark grounds. |
| `svg/` | `darkwinter-mark-small-black.svg`, `darkwinter-mark-small-white.svg` | The small cut: a simplified cube and a heavier ring, for 32 px and below. |
| `svg/` | `darkwinter-tile-<era>.svg` | A square tile per era: 00 Mark, 01 Synthwave, 02 Cassette, 03 Atomic, 04 Vector, 05 Noir, 06 Colony. |
| `png/` | `darkwinter-mark-black-<512/1024/2048>.png`, `darkwinter-mark-white-<…>.png` | Transparent PNGs of the master mark. |
| `png/` | `darkwinter-tile-<era>-1024.png` | The era tiles as PNG. |
| `favicon/` | `favicon.ico` (16, 32, 48), `favicon.svg` | Browser tab icons. The SVG switches to white in dark mode. |
| `favicon/` | `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `site.webmanifest`, `head.html` | Phone home screens and app installs. The maskable icon keeps the mark inside Android's safe circle. |
| `avatars/` | `darkwinter-avatar-<era>.png` (1080×1080) | Social avatars: the 3D mark in each era, in its rest pose, framed to survive a circle crop. |

**On a website:** copy everything from `favicon/` to the site root and paste `favicon/head.html` into the page `<head>`.

## Rules for the mark

- **Proportions.** The frame is 8.5% of the triangle's circumradius. The ring sits on the inner triangle's incircle. The hypercube is in its isometric rest pose.
- **Small sizes.** Use the small cut at 32 px and below, and the master mark above that.
- **Clear space.** Leave at least the ring's radius around the triangle. The tiles use 28% padding.
- **Colour.** Black on light grounds and white on dark ones. Era colours belong to their era, and are not mixed across eras.
- **Don't** redraw the mark, rotate it, stretch it, outline it, or put it on a busy image without a tile.

## Rebuild

```sh
npm ci                              # from the repo root
node darkwinter-signal/build.mjs    # the 3D component that renders the avatars
node darkwinter-brand/export.mjs    # → svg/, png/, favicon/, avatars/
```

`flat.mjs` is the flat geometry. It needs no dependencies, so any build tool can import it to draw the mark.
