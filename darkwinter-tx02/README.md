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

`index.html` draws the console in Canvas 2D and the mark with three.js (same geometry as `../darkwinter-mark`), both as pure functions of time. `audio.mjs` synthesizes the score: relays, telemetry beeps, an alarm, toggle clunks, an analog drum machine, a tape-wobbled A-minor pad, a countdown and a tape stop.

```sh
npm ci                                  # from the repo root (three.js for the render page)
node audio.mjs                          # → soundtrack.wav
node render.mjs                         # → video-only.mp4 (~18 min, software WebGL)
ffmpeg -i video-only.mp4 -i soundtrack.wav -af loudnorm=I=-14:TP=-1 \
  -c:v libx264 -crf 19 -pix_fmt yuv420p -c:a aac -b:a 256k -shortest tx02.mp4
```
