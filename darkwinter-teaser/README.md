# darkwinter.ai teaser

A 20-second vertical teaser (1080×1920, 60 fps) for darkwinter.ai. It's built on the look of the original 5-second reference loop: a neon double triangle, a tunnel of blue triangles, an LED "data city" skyline, scanlines and glitch. It then extends that look into a story told in five acts.

**▶ [teaser.mp4](teaser.mp4)**

| Time | Act | What happens |
|---|---|---|
| 0–4s | Signal | A CRT switches on. A cold-boot console types out with scrambled text that resolves into words, and the core ignites with an anamorphic flare and a shockwave |
| 4–8s | Chaos | "building is chaos." jitters and glitches over a city that keeps scrambling itself. The text morphs into "you need a system." At 7s a scan beam sweeps down and snaps the city into order as it passes |
| 8–14s | System | The neon triangle traces itself out from the apex. The tunnel, floor grid and rails build in, and the copy reads "an ai operating system" and "for mission-driven founders", then "built for the long game." |
| 14–16s | Rush | A zoom through the triangle into hyperspace, ending in a whiteout |
| 16–20s | Lockup | A homage to the reference frame: the darkwinter.ai wordmark decodes in, scrolling data text sits beneath it, and "intelligence for uncertain times" appears. The CRT switches off |

**How it's made:** everything is drawn with Canvas 2D as a pure function of time:
- 4-sample, 180° shutter motion blur
- Two-level bloom
- RGB channel split, slice displacement and datamosh-style smear blocks, driven by a glitch timeline
- Scanlines, a rolling refresh bar, film grain and a CRT switch-on/off mask

**Sound:** `audio.mjs` synthesizes a dark synthwave score at 120 BPM in D minor. It includes a gated-reverb snare, a sequenced saw bass, a square-wave arpeggio through a ping-pong delay, pads, risers, a tom fill, an accelerating snare roll, glitch bursts and CRT zaps. Every hit lands on a visual event.

## Build

```sh
node audio.mjs        # → soundtrack.wav
node render.mjs       # → video-only.mp4 (headless Chromium → ffmpeg)
ffmpeg -i video-only.mp4 -i soundtrack.wav -af loudnorm=I=-14:TP=-1 \
  -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -c:a aac -b:a 256k -shortest teaser.mp4
```

To preview live, serve the folder (`npx serve`), open `teaser.html`, then click to start the audio.
