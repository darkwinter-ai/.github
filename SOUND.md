# The darkwinter sound

Every darkwinter film gets its own score: its own key, groove, instruments and melody. All of them share one grammar and one signature, so they sound like the same company.

## Shared by every film

- **A steady build with no hits.** There are no impacts, crashes, alarms or snare rolls. Sections change through filter sweeps, swells, reverse chords and pitch. The loudest moment is the lockup, and it arrives by growing into it.
- **One pulse that never stops.** It starts muffled once the picture is up and runs to the end. Everything else builds by addition.
- **One filter curve.** It climbs across the film, closes for half a second before the lockup (the breath), and opens on the wordmark.
- **The signal bell.** A two-operator FM bell (carrier, modulator at 3.5×, index 1.1 decaying), defined by the same `bell()` in every `audio.mjs`. It is reserved for signals: lamps and cues, the countdown, and the sonic logo.
- **The sonic logo.** The signal bell climbs three notes, scale degrees 3–5–7 of the lockup key, one second apart. The leading tone hangs through the breath and resolves up to the tonic exactly as the wordmark lands. The lockup key is always a lift from the film's home key: the relative major, or a brighter key.
- **The tape stop** as the picture collapses at the end.
- **Loudness:** −14 LUFS integrated, with true peak at or below −1 dBTP.

## Unique to each film

| Film | Home key → lockup | Groove | Instruments | Sonic logo |
|---|---|---|---|---|
| TX-02 Mission Control (`darkwinter-tx02/audio.mjs`) | A minor → C major | Felt kick on the quarter note, brushed hats | Spinning-up reel pad, filtered bass pulse, pluck arp, tape wobble that steadies | E–G–B → C |
| TX-01 Night Drive (`darkwinter-nightdrive/audio.mjs`) | F♯ minor → A major | Half-time outrun: kick on 1 and the and-of-2, soft clap on 3 | String machine, FM electric piano, breathy lead, glass plucks for the lamps, reverse chord into the mark | C♯–E–G♯ → A |

`darkwinter-tx02/audio-synthwave.mjs` is an alternate TX-02 cut kept for comparison.

The original hero teaser (`darkwinter-teaser/`) predates these rules and still uses hard hits.
