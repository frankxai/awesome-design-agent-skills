# End-to-end brand and design-agent stack

> Evidence snapshot: 2026-08-06. Quality ranking is based on demonstrated workflow depth, artifact inspection, reproducibility, licensing, and production gates—not stars alone.

![World-class design-agent stack](../assets/world-class-design-stack.svg)

## Executive answer

No single public skill creates a defensible brand from strategy through production. The strongest operating model is a **composed stack**:

1. **Owned authority:** a repository-backed brand constitution, logo and type rules, tokens, asset provenance, quality gates, and release evidence.
2. **Reference intelligence:** UI UX Pro Max for searchable design patterns and stack guidance.
3. **Taste and implementation:** Anthropic `frontend-design`, Impeccable, and Taste Skill for distinctiveness and anti-slop discipline.
4. **Interaction craft:** Emil Kowalski's design-engineering skill.
5. **Systemization:** Google DESIGN.md / ibelick `create-design-md` and design-token tooling.
6. **Deterministic audit:** Impeccable detector, Vercel Web Interface Guidelines, Playwright, axe, Lighthouse, responsive visual QA, and a human verifier.
7. **Production authority:** the product repository, CI, deployment receipt, and rollback—not a chat transcript or generated mock.

FrankX's owned authority is [`frankxai/starlight-design-intelligence`](https://github.com/frankxai/starlight-design-intelligence). This repository remains the public discovery and comparison layer.

## Current leaders by role

GitHub stars are included only as a discovery signal and were sampled on 2026-08-06.

| Role | Leader | Why it matters | Boundary | License signal | Stars at snapshot |
| --- | --- | --- | --- | --- | ---: |
| Searchable UI/UX intelligence | [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Offline searchable data for styles, product types, palettes, type pairings, UX rules, frameworks, and design-system scaffolds | Broad recommendations can become formulaic without source-specific art direction; base and premium capabilities differ | MIT for the public repository | 113,856 |
| Production taste loop | [Impeccable](https://github.com/pbakaus/impeccable) | Product/brand initialization, 23 design commands, browser iteration, and 59 deterministic anti-pattern rules | It improves frontend execution; it does not replace business strategy, trademark review, or a final vector identity system | Apache-2.0 | 55,857 |
| High-variance landing/portfolio direction | [Taste Skill](https://github.com/Leonxlnx/taste-skill) | Deep anti-slop rules, explicit design dials, visual-asset requirements, and strong preflight checks | Intentionally not for dashboards/data-heavy product UI; large and opinionated, so local brand truth must override it | MIT | 72,570 |
| Concise baseline generation | [Anthropic `frontend-design`](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Strong subject grounding, three-direction thinking, typography, signature element, and self-critique | Anthropic's `brand-guidelines` skill applies Anthropic's brand; it is not a generic brand-creation workflow. Per-skill terms vary | Per-skill / mixed | 166,503 repository-wide |
| Interaction and motion craft | [Emil Kowalski's skills](https://github.com/emilkowalski/skills) | Frequency-aware motion decisions, easing, interruptibility, microinteractions, performance, and reduced-motion craft | Specialist polish layer, not brand strategy or a release system | MIT | 25,785 |
| Evidence-based DESIGN.md | [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | Extracts governing design evidence without promoting accidental implementation into product intent | Read-only planning/systemization; implementation and visual QA remain separate | MIT | 6,963 |
| UI compliance audit | [Vercel agent skills](https://github.com/vercel-labs/agent-skills) | Official `web-design-guidelines` skill fetches current interface rules and reports terse file-level findings | Audit layer, not identity creation; repository terms are mixed | Mixed / per-skill | 29,782 |
| Codex-native catalog | [OpenAI skills](https://github.com/openai/skills) | First-party Codex skill distribution and packaging reference | No complete end-to-end brand-identity authority was identified in this snapshot | Mixed / per-skill | 24,553 |

## What is installed in FrankX's current machine estate

These are point-in-time observations from 2026-08-06. Re-verify executable
versions, authentication, skill hashes, and provider access before production use.

| Capability | Verified state | Evidence / note |
| --- | --- | --- |
| UI UX Pro Max | Installed globally for Claude Code, Codex, and Gemini; CLI `ui-ux-pro-max-cli@2.11.0` | `~/.claude/skills/ui-ux-pro-max`, `~/.codex/skills/ui-ux-pro-max`, `~/.gemini/skills/ui-ux-pro-max` |
| Impeccable | Installed globally across Claude, Codex universal skills, Gemini, Grok, Cursor, GitHub Copilot, and OpenCode; skill payload reports `4.0.4` | Installed 2026-08-06 from canonical `pbakaus/impeccable`; project hooks still require per-repo review/trust |
| Brand/design helper pack | Installed for Claude, Codex, and Gemini | `brand`, `design`, `design-system`, `banner-design`, `ui-styling`; provenance/version pinning should be made explicit |
| Hermes design operating skills | Installed | `estate-design-excellence`, `brand-media-ops`, `premium-ui-components`, `design-md`, `popular-web-designs`, image workflows, responsive and accessibility release audits |
| Claude Code | Installed and authenticated | CLI `2.1.53`; strong design/plugin ecosystem |
| Codex CLI | Installed and authenticated | CLI `0.112.0`; product-design plugin material exists in cache, but cache is not proof of active installation |
| OpenCode / Gemini CLI | Installed | OpenCode `1.2.24`; Gemini CLI `0.27.3` |
| 21st.dev CLI | Installed but not production-ready | CLI `0.8.2`; `whoami` reports not logged in |
| Figma bridge | Not verified active | Cached/plugin files or an MCP entry are not proof of authenticated design-file access or Code Connect usage |
| Image generation | Active through Hermes | Grok Imagine image/video is available; deterministic text, diagrams, tokens, and logo masters must remain code/vector based |
| Visual QA | Installed | Playwright/CDP, responsive release audits, Impeccable detector, Lighthouse/axe patterns, screenshot inspection |

### Duplication and drift to fix

- Multiple UI/UX, design-system, image-generation, infographic, and Playwright skills overlap. Triggering becomes weaker when all claim the same job.
- UI UX Pro Max's Claude and Codex skill files have diverged hashes; distribution updates need one pinned source and reproducible install receipt.
- Several nested self-copies and deprecated skills exist in the Claude skill tree.
- `21st` is installed but unauthenticated; Figma is discoverable but not proven active.
- Public design skills are strongest at UI generation. Logo construction, font licensing, trademark clearance, and brand governance need owned authority.

## The production workflow

### 0. Establish authority and legal boundaries

- Name the product, owner, audience, market, offer, proof, jurisdictions, and intended surfaces.
- Inventory prior decisions and assets before creating anything.
- Separate a name/domain search from legal trademark clearance. An agent may collect evidence; qualified human/legal review owns clearance.

### 1. Evidence and visual research

- Capture the current product at desktop and mobile, or the host context for a greenfield route.
- Build a source ledger: URL, creator/owner, capture date, rights state, observed principle, and permitted use.
- Translate references into principles—do not clone compositions, marks, proprietary fonts, illustrations, or voices.
- Collect real product workflows, screenshots, customer language, category codes, materials, and artifacts.

### 2. Experience thesis and three directions

Define one recipient, job, promise, primary action, signature proof, intended feeling, and anti-references. Then produce **exactly three materially different direction boards**. Each direction must differ in:

- composition;
- typography;
- color/material language;
- imagery/iconography;
- motion posture;
- signature brand memory.

Do not merge directions before selection. The decision owner records why one direction won.

### 3. Brand constitution

Document promise, positioning, audience, category, proof, voice, naming rules, visual thesis, product behavior, motion identity, content system, and explicit do/don't boundaries. Every rule must change an implementation decision.

### 4. Logo system—vector first

Create an original master mark and wordmark as editable vector source. Validate:

- primary, secondary, horizontal, stacked, symbol-only, wordmark-only, monochrome, and reverse lockups;
- clear space, minimum sizes, optical corrections, color modes, and responsive/logo-small variants;
- 16, 32, 64, 128, 512, and social/app-icon outputs;
- no raster dependency, external SVG references, unlicensed type, accidental similarity, or unreadable small-size detail.

Generated image models may explore territory; they do not author the final master logo. A 3D/chrome/glass render is an application, never the identity.

### 5. Typography and font-license gate

For every family and weight, record source, foundry/author, license/EULA, acquired files, permitted web/app/desktop/print/social/embedding use, attribution requirements, and review date. Test real copy, numerals, punctuation, fallback, loading, 200% zoom, smallest phone, and layout shift. Ambiguous proprietary rights are a hard stop—not a reason to substitute a similarly named CDN font.

### 6. Tokens, components, and DESIGN.md

Create semantic design tokens and validate an implementation-facing DESIGN.md. Keep tokens, components, themes, responsive rules, and exceptions evidence-based. Use UI UX Pro Max for search, not as automatic authority. Use approved component sources only and record provenance, license, dependencies, accessibility, and runtime cost.

### 7. Asset system

Produce a manifest-driven suite:

- logo masters and exports;
- color and typography specimens;
- iconography and illustration rules;
- photography/image-generation direction and provenance;
- social avatar, cover, OG image, favicon, app icons, slide/deck, document, email, and campaign templates;
- motion principles and reduced-motion equivalents;
- asset registry with source, prompt/edit instruction, model/tool, dimensions, hash, score, approval, and expiry/review state.

Exact text, charts, UI, and logos use deterministic code/vector/layout tools. Image models create source imagery and exploration, followed by inspection and deterministic typography/overlay.

### 8. Product integration and QA

Implement the selected system in the owning product repository. Then run independent checks:

- visual comparison at desktop, mobile, 320px/reflow, and reduced motion;
- keyboard, focus, semantics, contrast, touch targets, 200% zoom, and screen-reader-relevant status behavior;
- type rendering, font license/source, loading, and CLS;
- Impeccable detector plus human critique;
- Playwright browser paths, console, links, claims, privacy, analytics, performance, and failure states;
- asset provenance and license review.

### 9. Release, approval, and rollback

Maker, verifier, and approver remain distinct for flagship identity and public production work. Record exact commit, checks, preview, production URL, post-deploy inspection, content-addressed evidence, and rollback target. A pretty mockup, CI badge, or generated image is not production proof.

## Where differentiation actually comes from

Adding more styles does not create difference. Difference comes from:

1. **Specific source material:** real workflows, artifacts, customer language, and category truth.
2. **A narrow experience thesis:** one recipient and one job, not a demographic cloud.
3. **Anti-references:** explicit patterns, colors, fonts, metaphors, and competitor codes the brand refuses.
4. **A signature memory:** one ownable visual/interaction behavior that expresses the proposition.
5. **Brand boundary discipline:** products may share infrastructure and quality gates without sharing a costume.
6. **Subtraction:** fewer families, accents, radii, effects, and motion ideas—each with a reason.
7. **Proof beside claims:** the experience shows real work rather than generic capability language.
8. **Consistent production:** assets, templates, product UI, motion, and copy derive from the same versioned authority.

## Recommended FrankX composition

```text
Public discovery     awesome-design-agent-skills
Owned authority      starlight-design-intelligence
Machine governance   .agent-harness + Hermes design skills
Pattern intelligence UI UX Pro Max
Taste loop           Impeccable + Anthropic frontend-design + Taste Skill
Motion craft         Emil Kowalski + owned motion-and-interaction
Systemization        DESIGN.md + design-system extractor
QA                    Impeccable detector + Playwright + axe + Lighthouse + verifier
Production           owning product repo + CI + deployment receipt + rollback
```

## Adoption decisions

| Decision | Status |
| --- | --- |
| Adopt Impeccable as the primary cross-harness frontend critique/polish loop | Adopted globally; approve hooks per product repo |
| Keep UI UX Pro Max as searchable pattern intelligence | Adopted; do not let recommendations override brand evidence |
| Use Anthropic `frontend-design` as a concise baseline | Adopt as reference, not authority |
| Use Taste Skill selectively for marketing/portfolio variance | Research/adopt per project; not a dashboard default |
| Use Emil Kowalski for interaction craft | Adopt as specialist reference |
| Use ibelick `create-design-md` concepts for evidence-based system extraction | Adopt alongside the local DESIGN.md validator |
| Treat 21st.dev and Figma as active production sources | Blocked until authentication, license/source review, and a verified project workflow |
| Let image generation output final logos or exact UI | Blocked |

## Primary sources

- [Anthropic Agent Skills](https://github.com/anthropics/skills)
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [Impeccable](https://github.com/pbakaus/impeccable)
- [Taste Skill](https://github.com/Leonxlnx/taste-skill)
- [Emil Kowalski's design-engineering skills](https://github.com/emilkowalski/skills)
- [ibelick/ui-skills](https://github.com/ibelick/ui-skills)
- [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills)
- [OpenAI Skills](https://github.com/openai/skills)
- [Starlight Design Intelligence](https://github.com/frankxai/starlight-design-intelligence)
