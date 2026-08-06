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

### Production system and toolchain leaders

These tools are less likely to market themselves as one-click agent magic, but
they supply the editable artifacts and deterministic evidence a production brand
system needs.

| Role | Leader | Unique contribution | Adoption boundary | License signal |
| --- | --- | --- | --- | --- |
| Strategy sequence | [Brand Building Skills](https://github.com/arnabbagxd/Brand-building-skills) | Portable skills for context, audience, positioning, architecture, naming, voice, identity brief, guidelines, launch, and measurement | Instruction framework, not validated research or legal clearance; senior review remains mandatory | MIT |
| Agent-readable design contract | [Google `design.md`](https://github.com/google-labs-code/design.md) | Validated YAML tokens plus ordered Markdown guidance and Stitch interoperability | Alpha and evolving; pin schema/version and never make it the sole source of truth | Apache-2.0 |
| Design-token contract | [DTCG](https://github.com/design-tokens/community-group) + [Style Dictionary](https://github.com/style-dictionary/style-dictionary) | Standard token semantics and deterministic cross-platform transforms | Syntax and transforms do not prove semantic naming, accessibility, or component adoption | W3C mixed document/software terms + Apache-2.0 |
| Editable vector canvas | [Penpot](https://github.com/penpot/penpot) | Open vector design, components, tokens, inspectable structure, and integrated MCP | MCP needs an active trusted plugin/tab; audit code-mode operations and retain editable masters | MPL-2.0 |
| Component workbench | [Storybook](https://github.com/storybookjs/storybook) | Isolated component states, documentation, interaction testing, and visual-regression ecosystem | Does not replace full-route, responsive, content, navigation, or end-to-end UX tests | MIT |
| Rendered browser QA | [Playwright](https://github.com/microsoft/playwright) + [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Chromium, Firefox, and WebKit paths, screenshots, traces, responsive states, and agent access | Pin browsers/fonts/data and disable unstable animation; screenshots do not judge artistic quality | Apache-2.0 |
| Brand extraction and drift | [Dembrandt](https://github.com/dembrandt/dembrandt) | Extracts typography, color, spacing, components, motion, DTCG tokens, and DESIGN.md from owned rendered sites; CI drift comparison | Use only on owned/authorized properties; dynamic Canvas/WebGL states are limited | MIT |
| Accessibility engine | [axe-core](https://github.com/dequelabs/axe-core) | Deterministic WCAG rule coverage in browser and CI | Automated checks cannot replace keyboard, screen-reader, zoom, cognitive, and content review | MPL-2.0 |
| Performance budgets | [Lighthouse](https://github.com/GoogleChrome/lighthouse) + [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) | Repeatable performance, accessibility, SEO, and best-practice budgets and trends | Synthetic scores vary by environment and are not visual-quality or UX scores | Apache-2.0 |
| Reproducible image workflow | [ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Node-graph image generation/editing with masks, compositing, upscaling, saved workflows, and API execution | Core, model, custom-node, training-data, and output rights differ; never ship raster marks as logo masters | GPL-3.0 core |
| Asset optimization | [SVGO](https://github.com/svg/svgo) + [sharp](https://github.com/lovell/sharp) | Deterministic SVG cleanup and responsive raster derivatives | Retain untouched editable masters and inspect geometry, transparency, and profiles after conversion | MIT + Apache-2.0 |

[`Open Design`](https://github.com/nexu-io/open-design) is a high-potential
evaluation platform, not an automatic dependency: its orchestration surface is
large and its compatibility/security claims need environment-specific proof.

## What is installed in FrankX's current machine estate

These are point-in-time observations from 2026-08-06. Re-verify executable
versions, authentication, skill hashes, and provider access before production use.

| Capability | Verified state | Evidence / note |
| --- | --- | --- |
| UI UX Pro Max | Installed globally for Claude Code, Codex, OpenCode, and Gemini; CLI `ui-ux-pro-max-cli@2.11.0` | Shared skill directories exist, but platform bodies and update provenance need one pinned manifest |
| Impeccable | Installed globally across Claude, Codex universal skills, Gemini, Grok, Cursor, GitHub Copilot, and OpenCode; skill payload reports `4.0.4` | Installed 2026-08-06 from canonical `pbakaus/impeccable`; project hooks still require per-repo review/trust |
| Brand/design helper pack | Installed for Claude, Codex, OpenCode, and Gemini | `brand`, `design`, `design-system`, `banner-design`, and `ui-styling` are hash-identical; the shared `design` skill hardcodes a Claude path and is not portable |
| Hermes design operating skills | Installed | Hermes `0.18.2`; strongest governed image/video and release workflow, but four profiles carry drift in two design skills |
| Claude Code | Installed and authenticated | CLI `2.1.215`; richest connected surface, including enabled `frontend-design` and Playwright plus Figma/Canva/media MCP entries |
| Codex CLI | Installed and authenticated | CLI `0.144.5`; strong implementation/artifact/QA plugins; cached Figma/Canva/Remotion/Cloudinary material is explicitly not installed |
| OpenCode | Installed but degraded | CLI `1.14.48`; `opencode mcp list` fails on a NUL JSON parse, 281 duplicate skill names were found across 694 discovery paths, and local plugin dependency links are broken |
| Gemini CLI | Installed with limited integration | CLI `0.51.0`; shared skills load, but no extensions are installed and only Starlight MCPs are connected |
| 21st.dev CLI | Installed but not production-ready | CLI `1.12.0`; account-backed discovery/generation is not authenticated |
| Figma bridge | Present on Claude, not estate-wide proven | Active authenticated design-file, Variables, and Code Connect use has not been demonstrated for a named production workflow |
| Image and media generation | Active through Hermes | Grok Imagine image/video is active; ComfyUI skill exists but the executable/service is absent; exact text, diagrams, tokens, and logos remain deterministic |
| Production visual QA | Partially available | Playwright and governed audits exist, but project-local repeatable visual baselines, axe/LHCI receipts, and design-drift checks are not standardized estate-wide |

### Duplication and drift to fix

- The live `.agent-harness` doctrine is hash-aligned to a mirror but its core files are uncommitted, so it has no durable provenance or release history.
- OpenCode is not a trusted design runner until its NUL parse failure, duplicate discovery roots, and broken package links are repaired.
- `estate-design-excellence` and `brand-media-ops` drift in four Hermes profiles and need intentional reconciliation or pinning.
- Shared skills need one cross-client distribution manifest with source, version, hash, supported clients, and adapter differences.
- `21st` is unauthenticated; Figma connectivity is asymmetric; ComfyUI is not operational.
- Public design skills remain strongest at UI generation. Logo construction, font licensing, trademark clearance, and brand governance need owned authority.

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

Maintain both an implementation-facing `DESIGN.md` and DTCG-compatible token
source. Transform platform outputs through a pinned Style Dictionary pipeline and
fail CI when generated outputs are stale. Keep tokens, components, themes,
responsive rules, and exceptions evidence-based. Use UI UX Pro Max for search,
not as automatic authority. Use approved component sources only and record
provenance, license, dependencies, accessibility, and runtime cost.

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
- Storybook coverage for normal, hover, focus, active, disabled, loading, empty, error, overflow, localization, and dense states;
- Playwright journeys in Chromium, Firefox, and WebKit with reviewed deterministic baselines and traces;
- keyboard, focus, semantics, contrast, touch targets, 200% zoom, and screen-reader-relevant status behavior;
- type rendering, font license/source, loading, and CLS;
- Impeccable detector plus human critique and Dembrandt drift comparison against owned approved previews;
- axe automated checks, Lighthouse/LHCI budgets, console, links, claims, privacy, analytics, performance, and failure states;
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
Vector handoff        owned SVG masters + Penpot where a human canvas is required
Systemization        DESIGN.md + DTCG + Style Dictionary + Storybook
QA                    Impeccable + Playwright + axe + LHCI + Dembrandt + verifier
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
| Use DTCG + Style Dictionary for machine-readable token distribution | Adopt per product with pinned schema/tool versions and stale-output CI |
| Use Storybook as the component state/documentation workbench | Adopt where a maintained component system exists; do not substitute it for route QA |
| Use Penpot as an editable vector/canvas handoff | Evaluate for logo/component collaboration; audit the integrated MCP and every code-mode action |
| Use Dembrandt against owned previews for extraction and drift | Evaluate in a bounded project before making it a release gate |
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
- [Brand Building Skills](https://github.com/arnabbagxd/Brand-building-skills)
- [Google design.md](https://github.com/google-labs-code/design.md)
- [Design Tokens Community Group](https://github.com/design-tokens/community-group)
- [Style Dictionary](https://github.com/style-dictionary/style-dictionary)
- [Penpot](https://github.com/penpot/penpot)
- [Storybook](https://github.com/storybookjs/storybook)
- [Playwright](https://github.com/microsoft/playwright)
- [Dembrandt](https://github.com/dembrandt/dembrandt)
- [axe-core](https://github.com/dequelabs/axe-core)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI)
- [SVGO](https://github.com/svg/svgo) and [sharp](https://github.com/lovell/sharp)
- [Starlight Design Intelligence](https://github.com/frankxai/starlight-design-intelligence)
