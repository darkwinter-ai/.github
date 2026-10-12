# Transmission 01: Night Drive

**▶ [nightdrive.mp4](nightdrive.mp4)**: 20 seconds, 1080×1920, 60 fps, with sound. A companion film to the hero teaser in the Synthwave era. It drives down a neon grid highway at 2 AM while the 3D Synthwave mark (from `../darkwinter-mark`) rises with a striped sunset sun.

| Time | Beat | Score |
|---|---|---|
| 0–1.5s | A pink horizon line draws out from the centre and the world fades up through it | The string machine rises on an open fifth |
| 1.5–5s | "BUILDING IS A NIGHT DRIVE." No map, no streetlights, nobody to call | The eighth-note drive starts muffled; an F♯sus2 hangs |
| 5–7.5s | "YOU NEED A SYSTEM." Eight streetlamps ignite down the road | Each lamp is a glass note, and the eight notes climb |
| 7.5–13s | SIGNAL LOCKED, then the mark rises from the horizon and builds as the sun climbs behind it. RUNWAY, FOCUS and SIGNAL readouts resolve | A reverse chord lands on 8.0; the half-time groove, electric piano and breathy lead build |
| 13–16s | Three exits pass overhead: CLARITY, FOCUS, MOMENTUM. Then the world dims for half a second | The sonic logo: the signal bell climbs C♯–E–G♯, then the breath |
| 16–20s | darkwinter.ai, "intelligence for uncertain times". The mark settles into rest pose, then the picture folds to a dot | G♯ resolves to A, a lift to A major, then a tape stop |

`index.html` draws everything as a pure function of time:

- **three.js** draws the sky, the stars, the sun, the mountains, the lamps, the exit gantries and the mark. The ground is one shader that draws the scrolling grid, the road edges and the centre dashes. The distance driven is integrated once from a speed curve, so every lamp and sign position follows from the same `D(t)`.
- **Canvas 2D** draws the chrome type, the HUD and the finishing (scanlines, grain, vignette, and the fold at the end).

`audio.mjs` is this film's own score: F♯ minor lifting to A major, a half-time outrun groove, a string machine, an FM electric piano and a breathy lead. It shares the darkwinter sound with the other films (see [`../SOUND.md`](../SOUND.md)): a steady build with no hard hits, the signal bell and its sonic logo, the breath and the tape stop. The camera only sways softly on the swells.

The copy is a draft: "Building is a night drive" pairs with the Synthwave era's line, "You need a system."

```sh
npm ci                                  # from the repo root (three.js for the render page)
node audio.mjs                          # → soundtrack.wav
node render.mjs                         # → video-only.mp4 (~9 min, software WebGL)
ffmpeg -i video-only.mp4 -i soundtrack.wav -af "loudnorm=I=-14:TP=-1,volume=-1.8dB" \
  -c:v libx264 -crf 19 -pix_fmt yuv420p -c:a aac -b:a 256k -shortest nightdrive.mp4
```
