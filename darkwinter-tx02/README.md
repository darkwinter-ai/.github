# Transmission 02: Mission Control

**▶ [tx02.mp4](tx02.mp4)**: 20 seconds, 1080×1920, 60 fps, with sound. Cassette futurism: a 1970s mission-control console with the 3D darkwinter mark on its amber CRT.

| Time | Beat |
|---|---|
| 0–1.5s | The console powers up; the CRT opens from a line to a full raster |
| 1.5–5s | "FLYING BLIND?": scrambled telemetry, an erratic graph, a NO SIGNAL warning, the abort lamp and swinging needles |
| 5–7.5s | "CONNECT EVERY SYSTEM.": eight toggles flip on the half-beat and the lamps light |
| 7.5–13s | SIGNAL ACQUIRED, then the mark builds in amber phosphor; readouts resolve and the needles settle |
| 13–16s | Camera push, T-3, T-2, T-1, GO |
| 16–20s | darkwinter.ai and "intelligence for uncertain times"; the mark settles into rest pose, then the CRT collapses to a dot with a tape stop |

`index.html` draws the console in Canvas 2D and the mark with three.js (same geometry as `../darkwinter-mark`), both as pure functions of time. `audio.mjs` synthesizes the score.

### Score v2: a steady build

The first score hit hard on 1.0, 7.5, 8.0 and 16.0 (kick, sub drop and noise burst together, plus crashes), and it also had an abort alarm and a snare roll into GO. v2 removes all of them and moves between sections the way slow synthwave does: by filter, swell and pitch, never by impact.

- One eighth-note bass pulse runs from 1.5s to the end. It never drops out, and everything else builds by addition.
- A single filter curve opens across the whole piece, from 320 Hz at power-on to 5.2 kHz at T-1.
- **Power on:** the opening chord spins up into pitch from half speed, like a tape reel starting.
- **Flying blind:** a suspended chord that never resolves, distant telemetry blips, and a loose tape wobble.
- **Connect every system:** each toggle lights a bell, and the eight bells climb the A-minor pentatonic. The tape wobble steadies as the systems link.
- **Signal acquired:** a soft two-note bell, then a reverse swell that crests exactly on 8.0. The groove arrives under a slow sub bloom.
- **Countdown:** a tonal shimmer riser, and T-3, T-2 and T-1 climb E–G–B to the leading tone. At 15.5 the drums stop and the filter closes for half a second (the breath).
- **GO and lockup:** B resolves up to C and the key lifts from A minor to C major under the wordmark.
- The camera shake follows the same idea: four slow sways in place of ten jolts.

In v1 the loud moments were one-beat spikes: the half-second at 8.0 sat about 5 dB above the next one, and the score fell straight back down. In v2 the level climbs into each section and holds, so the loudness range is wider (8.7 LU against 6.6) even though nothing jumps out.

```sh
npm ci                                  # from the repo root (three.js for the render page)
node audio.mjs                          # → soundtrack.wav
node render.mjs                         # → video-only.mp4 (~18 min, software WebGL)
ffmpeg -i video-only.mp4 -i soundtrack.wav -af loudnorm=I=-14:TP=-1 \
  -c:v libx264 -crf 19 -pix_fmt yuv420p -c:a aac -b:a 256k -shortest tx02.mp4
```
