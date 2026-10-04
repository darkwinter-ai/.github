# darkwinter.ai teaser (HyperFrames)

A HyperFrames rebuild of [`../darkwinter-teaser`](../darkwinter-teaser): the same 20-second, 1080×1920, 60 fps story and the same score, authored as a HyperFrames composition instead of a hand-written canvas renderer.

**▶ [teaser-hf.mp4](teaser-hf.mp4)**

## How it's built

`index.html` is one composition (`data-composition-id="main"`). It holds five timed scene clips, one paused GSAP timeline, and the score as an `<audio>` clip.

| Clip | Time | Built with |
|---|---|---|
| `sc-signal` | 0–4s | DOM console with fixed-slot glyph decode, CRT switch-on bars, CSS radial core, shockwave ring |
| `sc-chaos` | 4–8s | Glitch headline (RGB-split ghost copies plus per-character jitter), decode morph, scan-beam tween |
| `sc-system` | 8–14.6s | SVG triangle drawn with `stroke-dashoffset`, SVG tunnel, rails, decoding copy, camera push and zoom-through |
| `sc-rush` | 14.15–16s | Canvas 2D hyperspace, radial whiteout |
| `sc-lockup` | 16–20s | Wordmark decode, underline, scrolling data block, tagline, CRT switch-off |

The LED data city, the floor grid, the glitch tears, the camera shake and the film grain span several scenes. They live outside the clips and are drawn by one driver `onUpdate` as pure functions of `tl.time()`, so any seek reproduces the exact frame.

GSAP is vendored (`assets/gsap.min.js`) and the fonts are local, so a render makes no network requests. The score is the synthesized one from `../darkwinter-teaser/audio.mjs`, loudness-normalized to −14 LUFS.

## Build

```sh
npm ci                     # from the repo root: installs the pinned hyperframes CLI (0.8.117)
cd darkwinter-teaser-hf
npx hyperframes check      # lint + runtime + layout + motion + contrast
PRODUCER_HEADLESS_SHELL_PATH=/path/to/headless_shell \
  npx hyperframes render --fps 60 --quality delivery --output teaser-hf.mp4
```

Follow the repo's `CLAUDE.md` guardrails: no `usage`, `init`, `feedback`, `publish`, cloud renders or skill updates without asking.

The `check` result is `ok`. It leaves 6 lint warnings recommending sub-compositions; the file stays monolithic on purpose, because the city, emblem and core span scenes and a sub-composition timeline can't animate parent elements. There are also 3 contrast warnings, on pink headline text over intentional glitch noise.
