# Motion Reel

A 15-second, 1920×1080, 60 fps motion-graphics piece. Every frame is a pure function of time: no keyframes, no timeline software, no stock assets. The only inputs are four Google Fonts.

**▶ [reel.mp4](reel.mp4)**

| Time | Scene | What it shows |
|---|---|---|
| 0.0–2.5 | Genesis | Squash and stretch, anticipation, a shockwave burst, Lissajous orbits with tapered trails, and a match-cut into the next scene |
| 2.5–5.0 | Kinetic type | Masked letter staggers, echo outlines, crop marks that snap in, beat-locked diagonal wipes, and an RGB slice glitch |
| 5.0–7.5 | The curve | A live graph editor: bezier handles spring into place, a playhead drives linear vs. eased tracks, with spacing charts and onion skins |
| 7.5–10.0 | Rhythm | 144 tiles morph, rotate and recolor in three distance-staggered waves over a breathing ripple field |
| 10.0–12.5 | Emergence | 3,042 particles go from tile grid to vortex, form the word MOTION, then explode |
| 12.5–15.0 | Signature | A ring tunnel, a spring-loaded mark, and a wordmark lockup that collapses back to the opening dot, so the reel loops |

**Craft details:** 6-sample, 180° shutter motion blur. Camera shake, punch-zoom and chromatic split are driven by an impact list shared with the audio. Film grain, a vignette, and a HUD drawn in difference blend mode so it reads on any background.

**Sound:** `audio.mjs` synthesizes the score sample by sample (kick, clap, hats, bass, detuned saw pad, bells, risers, whooshes, glitch stutter, Schroeder reverb) at 120 BPM in F minor. Every hit uses the same timestamps as the visuals.

## Build

```sh
node audio.mjs                      # → soundtrack.wav
node render.mjs                     # → video-only.mp4 (headless Chromium → ffmpeg)
ffmpeg -i video-only.mp4 -i soundtrack.wav -af loudnorm=I=-14:TP=-1 \
  -c:v copy -c:a aac -b:a 256k -shortest reel.mp4
```

To preview live, serve the folder (`npx serve`), open `reel.html`, then click to start the audio.
