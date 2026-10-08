# darkwinter Mark Lab

The darkwinter mark as a live 3D object: the cube-in-a-cube from the logo becomes a real four-dimensional hypercube rotating inside the circle and triangle. In rest pose it lines up with the flat logo.

`index.html` is a single page (three.js 0.186.1 and Tone.js 15.1.22, both loaded from jsDelivr):

- **14 era skins:** eight retro (Mark, Synthwave, Cassette, Atomic, Vector, Noir, Colony, Blueprint) and six future (Haze, Horizon, Monolith, Ink, Shimmer, Clean Room). Each has its own materials, lighting, particles, overlay and sound kit.
- **Controls:** Sound on/off, Rest pose, Hypercube spin, Replay build. Drag to orbit.
- **Flat-mark comparison:** the current logo (`current.png`), a proposed refinement drawn from the same geometry as the 3D model, a reversed version, and a small-size cut, shown at 128–16px.

The refinement is drawn from a PNG of the logo, not the original SVG; final proportions should be matched to the source file before export.

To view locally, serve the folder (`npx serve darkwinter-mark`) and open it in a browser. Sound starts only after you press Sound on; on iPhone/iPad the page switches to the media audio channel so silent mode doesn't mute it.
