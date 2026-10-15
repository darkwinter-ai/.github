# darkwinter.ai site concepts (mockups)

Two live, interactive mockups for the new darkwinter.ai, for review before building. They are not the site.

- **Concept A, The Signal:** the 3D mark is the front door. Its four parts (core, ring, frame and lattice) are the four starting points from the site report. Each part has its own sound, and selecting a part plays the sonic logo and opens that path.
- **Concept B, The Operator:** a console that asks three questions, lights the matching part of the mark, and hands back a starting brief. It is scripted. A live version could draft the brief with Claude, clearly labelled as AI.

`src/concepts.js` is the shared engine (three.js and Tone.js). `concepts.js` is the bundled build. Open `index.html` through a local server. To rebuild:

```sh
node darkwinter-site-concepts/build.mjs darkwinter-site-concepts   # needs the esbuild in node_modules (npm ci)
```
