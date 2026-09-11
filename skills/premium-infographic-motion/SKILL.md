---
name: premium-infographic-motion
description: "Create, critique, animate, or benchmark premium infographics and social carousels with researched claims, a generated visual layer, deterministic typography/diagrams, inspected exports, motion choreography, and transparent cost accounting. Use when the user asks for an infographic, annotated visual, AI architecture map, system-layer explainer, Instagram or LinkedIn carousel, animated infographic, Reel motion graphic, visual explainer, diagram-led editorial card, or a comparison of image/motion production tools. Also use when the user asks to make an existing infographic feel world-class, less AI-generated, denser, more tactile, or more professionally authored. Do not trigger for a plain flowchart, ordinary slide deck, or generic UI unless the user explicitly asks for premium infographic craft."
---

# Premium Infographic Motion

Build the information as a system, not as one image-model prompt.

The default premium stack is:

1. Research and information architecture.
2. A generated or sourced visual layer for atmosphere, material, subjects, and depth.
3. Deterministic typography, charts, connectors, logos, labels, and citations in Figma, SVG/HTML, or code.
4. Deterministic motion in HyperFrames + GSAP or Remotion; generated video may be a source layer, never the authority for public copy.
5. Actual export inspection, scoring, repair, and a cost/latency ledger.

Read [references/master-prompt.md](references/master-prompt.md) when generating source imagery. Read [references/tool-router.md](references/tool-router.md) when selecting tools. Read [references/quality-rubric.md](references/quality-rubric.md) before scoring or claiming completion. Read [references/cost-accounting.md](references/cost-accounting.md) whenever the user asks about tokens, spend, or tool comparisons.

Read [references/architecture-motion-scan.md](references/architecture-motion-scan.md) when the infographic is a system map, architecture plate, layered stack, or dense technical cutaway that must become a Reel or animated feed post.

## Non-negotiable outcome

Deliver a useful authored visual with one dominant first read, correct information, purposeful density, exact public text, an editable source, and an inspected export. “Attractive” is not enough.

Never claim an infographic is state of the art because the image model rendered many labels. Verify every label and claim. Never let generated logos or approximate mascots become public brand assets.

## Operating loop

### 1. Ground

- Establish audience, placement, canvas, first read, one-sentence takeaway, evidence, CTA, brand unit, and motion purpose.
- Research changing or factual claims using current primary sources. Prefer official lab docs, standards, papers, and first-party product documentation.
- Distinguish fact, inference, opinion, and art direction.
- If external brands appear, use official press-kit assets when licensed and cite provenance. Otherwise use exact text labels or clearly sourced open icon sets; do not describe third-party icon replicas as official.

### 2. Route

- Choose an asset tier: A real proof/product, B custom high-fidelity generated media, C exact vector/UI/system asset, or D decorative filler.
- Select the production route with [references/tool-router.md](references/tool-router.md).
- Run a reuse-before-regenerate check. Search the approved asset mirror and prior evidence for a visually compatible, inspected source layer. Reuse it with its hash and provenance when it already carries the required subject; do not spend an image call merely to make the run look new.
- If the user explicitly asks to use Create Image for each card, generate a distinct, composition-aware source visual for every authored card. Keep every word, chart, brand mark, and connector in the deterministic overlay.
- Before local builds, browsers, or video renders, honor the workspace machine-performance preflight. Do not install a renderer or start a dev server when the gate says HOLD.

### 3. Compose

- Write the information architecture before polishing imagery.
- Build the static master before adding motion.
- Create at least two structurally different directions for high-stakes work: one raw-model challenger and one hybrid/deterministic direction are a useful minimum.
- Reserve negative space in generated source prompts for the exact overlay.
- Use one focal object, one hierarchy, one grid, and one signature visual mechanism. Dense does not mean evenly full.
- At 4:5, inspect both 1080 × 1350 and a 540 × 675 feed preview. For motion, author a dedicated 1080 × 1920 composition rather than blindly cropping.

### 4. Execute

- Generate source imagery without public text or logos unless the raw-model lane is intentionally being benchmarked.
- Set all public copy, numbers, charts, arrows, icons, and citations deterministically.
- Keep the master editable. Name layers by meaning and expose controlled variables for repeated series.
- Create a motion beat sheet before implementation: hook, reveal order, proof, hold, CTA, loop seam, reduced-motion route, and optional sound purpose.
- Animate reading order and state change. Do not animate every object because the runtime permits it.
- For architecture maps, animate one semantic lens at a time while keeping the whole-system relationship available. Render cross-cutting controls across the architecture, never as the last isolated step merely because they appear last in the video.

### 5. Verify

- Inspect actual exports; inspecting code or a design tree is not visual QA.
- Check full size, feed/phone scale, 4:5 crop, 9:16 crop, silent viewing, reduced motion, text accuracy, contrast, compression, and the loop seam.
- Score with [references/quality-rubric.md](references/quality-rubric.md). Ship at 26/30 or higher only when all hard gates pass. Iterate at 22–25. Restart below 22.
- The author’s first pass is provisional. A 26+ self-score makes the asset eligible for founder or independent review; it is not automatic approval.

### 6. Learn and ratify

- Record the observed failure, the repair, the result, and the cost delta in the run directory.
- Prefer evidence from inspected outputs over tool reputation or marketing claims.
- Update this skill only when a lesson fixes a hard-gate failure or repeats across two independent runs. Add or update an evaluation case when changing behavior.
- Never silently weaken the rubric to make an output pass. Never fabricate hidden token counts or charges.

## Required evidence

For important work, create a bounded run directory containing:

- `brief.md`
- `prompts/`
- source assets and exact provenance
- editable master
- final exports and feed/phone previews
- `design-loop-evidence.json`
- `cost-ledger.json`
- `lessons.md`

Use `scripts/audit_infographic_run.py <run-dir>` for a fast structural check. The script does not replace visual inspection.

## Approval boundaries

- Cost estimates are read-only. Do not submit a paid image/video job, publish, buy a plan, or use external brand assets with unclear rights without the authorization required by the active workspace.
- If a connector quota, plan limit, or machine-performance gate blocks a lane, preserve the partial editable artifact, exclude the uninspected lane from scoring, and continue through a safe deterministic route when possible.
- Name untested tools “capability assessed” or “cost preflight only,” never “benchmarked.”
