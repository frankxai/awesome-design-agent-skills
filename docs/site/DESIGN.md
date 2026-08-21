# docs/site — design record

Surface: public landing page for the registry (`index.html`, standalone, GitHub-Pages-ready). Mode: Persuade. Built 2026-08-20 through a design-council pass; 2026-08-21 absorbed into `/pwo` (Premium Web OS). `/studio` and `/pwd` are retired aliases, not a second conductor.

**The desktop survey plate is compiled, not drawn.** `build-plate.mjs` reads `../../registry/registry.json` and regenerates the SVG between the `plate:auto` markers: vertical position and mark area are computed (√ stars), horizontal band placement and label offsets are composed in the script's curated table, the spine polyline follows its members' computed coordinates, and uncomposed new entries emit a warning instead of a fake mark. Run it after any registry change. (v1 hand-plotted marks drifted up to 31px from their true scale positions — the compiler killed that class of error.) The mobile band remains a hand-composed excerpt by design.

## Direction

- Thesis: the registry doesn't borrow the sky for mood — stellar cartography is the one chart precise enough to rank real adoption without decorating it.
- Signature: the survey plate. An inline-SVG figure plotting 22 real entries from `registry/registry.json`: mark area ∝ √ GitHub stars, grouped by primary harness with universal packs at center, four unmeasured standards as hollow rings, and the four-skill install spine drawn as the only amber asterism. Desktop and mobile are separate SVG compositions, not one reflowed.
- Type: Bricolage Grotesque (display, H1/H2 only) · IBM Plex Sans (body) · IBM Plex Mono (data, eyebrows, captions).
- Tokens (light): paper `#F4F6F8` · ink `#0E1B33` · signal `#B45309` (marks/accents; `#8A3F07` for small text) · dim `#5A6B85` · rule `#D3DAE3` · plate `#EFF2F5`. Night mode via `prefers-color-scheme`: ground `#0B1526`, text `#E8EEF6`, amber `#F5A742`.
- Motion: stars ink in (220ms, 40ms stagger, `cubic-bezier(.16,1,.3,1)`), constellation lines draw once (700ms, `cubic-bezier(.83,0,.17,1)`, t+160ms), hero settles ≤900ms; scroll reveals limited to section boundaries, armed via a `.rv` class with a 2s fail-safe so content can never stay hidden; `prefers-reduced-motion` renders fully static.

## Decision log

- Light-first, not dark: the SIS foundation reset (2026-08-17, starlight-design-intelligence) supersedes the older dark-cinematic Starlight world for SIS surfaces — "clear institutional light with an optional night mode." Scoped to this surface.
- Celestial as information architecture only: every star is a measured registry entry; no ambient starfields, no glow.
- Sizing honesty: √ scale uses **this-repo** stars only. Parent-pack stars (frontend-design inside anthropics/skills; vercel guidelines inside vercel-labs/agent-skills) are dashed diamonds, labeled, never scaled. Unmeasured entries are rings. Method published in the figure caption.
- Ledger rows, not cards, for the catalog; primary CTA is ink-filled (amber reserved for data marks).
- H1 "surveyed" over "charted" (a survey records position and brightness — which is exactly what the plate does).
- ui-ux-pro-max dark-cinema/green suggestion overridden per brand canon (logged, not silently dropped).
- Council dissent resolved: hero ratio 55/45 (between PD's 48/52 and VD's 58/42), chart max ~620px.

## QA evidence (2026-08-20, DOM-verified; pixel screenshots pending a visible pane)

- Both schemes render from tokens; contrast: ink/paper 15.85:1, dim/paper 5.0:1, CTA 15.85:1, deep amber 6.94:1.
- 0 SVG label collisions and 0 label-over-star overlaps after one bounded fix round.
- Mobile: separate plate composition active, no horizontal overflow, CTAs above the fold, no tap targets under 44px.
- Console: zero errors. Network: no 404s; fonts loaded.

Follow-ups: replace OG image with a rendered plate crop; capture desktop/mobile screenshots when a compositing pane is available.

2026-08-21: plate scale is this-repo only (max = gstack). Parent-pack marks are dashed diamonds. `/studio` retired in favor of `/pwo`.
