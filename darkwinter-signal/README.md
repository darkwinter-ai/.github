# darkwinter Signal

`<darkwinter-signal>` is the interactive darkwinter mark for the website. It renders the 3D hypercube mark from the Mark Lab (`../darkwinter-mark`) and plays the Mark Lab sounds.

- **Move** over it: the hypercube turns through the fourth dimension and plays the era's scale.
- **Click, tap, Enter or Space** sends a signal: the darkwinter sonic logo on the signal bell (see [`../SOUND.md`](../SOUND.md)), with a ripple and a flare for each note.
- **Sound** stays off until a visitor turns it on with the button.

Demo: [`demo/index.html`](demo/index.html). It shows the homepage hero, an about-page signature, a 404 "lost signal" page and a product/waitlist card, plus a live log of the analytics events.

## Embed

Host both files from `dist/` side by side, then:

```html
<script type="module" src="/js/darkwinter-signal.js"></script>
<darkwinter-signal era="01" eras="01,02,05,06,00" style="height: 520px"></darkwinter-signal>
```

It is a standard custom element in shadow DOM, so it works in Webflow (custom code embed), Framer (embed), Next.js or React (import the module once on the client), and plain HTML.

| | |
|---|---|
| `era` | `00` Mark, `01` Synthwave, `02` Cassette, `05` Noir, `06` Colony. Default `01`. |
| `eras` | A comma-separated list of eras; shows an era switcher. |
| `hint` | `off` hides the "Move to tune · Tap to send a signal" hint. |
| `label` | The accessible name. |
| `.signal()`, `.build()` | Send a signal, or replay the build, from your own code (for example, on waitlist sign-up). |
| `dw-signal`, `dw-sound`, `dw-era` | Events for analytics. They bubble and cross the shadow boundary. |

Theming: the element sets `--bg` and `--fg` from the era. Style the outer box (height, radius) like any block. The `stage`, `hint` and `controls` parts are exposed for `::part()`.

## Weight and behaviour

- **`darkwinter-signal.js`**: about 160 KB gzipped, with three.js bundled. It loads with the page.
- **`darkwinter-signal-sound.js`**: about 85 KB gzipped, with Tone.js and the era kits. It is fetched only when a visitor hovers or focuses the sound button, or turns sound on.
- **Rendering** starts when the element scrolls into view, and pauses when it leaves the screen or the tab is hidden. The pixel ratio is capped at 2.
- **`prefers-reduced-motion`**: no idle spin or sway, and the build shows complete.
- **Without WebGL**, it falls back to a static flat mark in SVG.
- **iPhone and iPad:** the audio context and a silent media element start inside the tap that turns sound on, so sound plays even with the ringer switch on silent. This is the same fix as the Mark Lab.
- **No network calls, no cookies, no storage.**

## Build

```sh
npm ci                        # from the repo root
node darkwinter-signal/build.mjs   # → dist/darkwinter-signal.js, dist/darkwinter-signal-sound.js
```

Sources: `src/signal.js` (the element, the geometry, the eras) and `src/sound.js` (the Mark Lab kits, the signal bell, the sonic logo).
