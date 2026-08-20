# Cost, tokens, and latency accounting

Every number needs a status.

## Status vocabulary

- **Actual**: returned by the tool, invoice, usage object, balance delta, or deterministic local counter.
- **Estimated**: calculated from an official rate card, tokenizer, or disclosed credit preflight.
- **Unknown**: not exposed. Never replace it with a confident guess.

## Required ledger fields

For each meaningful call record:

- lane and tool/model;
- wall-clock time;
- prompt path, characters, and tokenizer/heuristic;
- input, cached-input, reasoning/output, image-output, or video duration units when exposed;
- actual charge or credit delta;
- pricing source and date for estimates;
- result path or job ID;
- execution status: generated, rendered, cost-preflight-only, capability-assessed, blocked, or failed;
- iteration number and quality-score delta.

## Token forecast

Use a real model tokenizer when it is already available. Do not install a package solely to make a token estimate while the machine gate is holding work.

When no tokenizer is available, report a range or a labeled heuristic such as `characters / 4`; never call it actual. Internal Codex reasoning tokens and connector serialization are unknown unless the product returns them.

For image generation, separate:

- text input tokens;
- reference-image input tokens for edits;
- image-output tokens, which vary with dimensions and quality;
- product-plan usage from API-equivalent pricing.

For generated video, record duration, resolution, audio mode, model, and returned credits or dollars. For local HyperFrames/GSAP/Remotion work, distinguish license/subscription cost from compute and cloud-render charges.

## Comparative efficiency

Do not compare only the first call. Calculate:

`quality-adjusted cost = total run cost / accepted outputs`

Also report time-to-first-usable, number of repair loops, deterministic editability, and time-to-variant. A cheap raw image that must be rebuilt is not the low-cost winner.
