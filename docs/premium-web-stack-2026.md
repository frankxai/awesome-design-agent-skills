# The 2026 Premium Web Stack — Agent Reference

Verified 2026-08-20 against the npm registry, GitHub API, and primary docs. Do not trust pre-2025 training data for anything below — GSAP licensing, Base UI, shadcn's default primitive, Next.js middleware, and the Nano Banana family all changed materially in the last 12 months. Pair with the [registry](../registry/README.md) for the skills that operationalize this stack.

## TL;DR — default stack for a new premium build

| Layer | Default pick | Version (2026-08-20) |
|---|---|---|
| Framework | Next.js 16 (App Router, Turbopack, `proxy.ts`) + React 19 | `next@16.3.1`, `react@19.2.8` |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no config file) | `tailwindcss@4.3.3` |
| Primitives | Base UI (shadcn's new default); Radix for legacy/registry compat | `@base-ui/react@1.7.0` |
| Scaffolding | shadcn CLI (copy-paste registry, not a dependency) | `shadcn@4.18.0` |
| Variants | CVA (simple) / tailwind-variants (slot-heavy) | `0.7.1` / `3.3.1` |
| Motion | Motion (`motion/react`) for React; GSAP+ScrollTrigger for scroll storytelling | `motion@13.1.0` / `gsap@3.15.0` |
| Smooth scroll | Lenis | `lenis@1.3.26` |
| Native transitions | View Transitions API (same-document, Baseline all 4 engines) + `text-wrap: balance/pretty` | — |
| 3D | R3F + drei on three.js WebGPU/TSL path, poster fallback | `@react-three/fiber@9.7.0`, `three@0.185.1` |
| Icons | Lucide default; Phosphor for weight axes | `lucide-react` (1,776 icons) |
| Type | Variable-font pairing (e.g. Fraunces display + Hanken Grotesk/Geist body); Fontshare gems | — |
| Hero/brand imagery | Nano Banana 2 (fast) / Nano Banana Pro (text-critical, grounded) | `gemini-3.1-flash-image` / `gemini-3-pro-image-preview` |
| Vector/logo/icon gen | Recraft V4.1 (native SVG) — always human vector-pass before ship | — |
| Photoreal hero | Flux.2 [pro] | — |
| QA | Playwright `toHaveScreenshot` + `@axe-core/playwright` + CrUX/INP | `playwright@1.62.1`, `axe-core@4.13.0` |

## 1. Component systems

**Base UI is now the default.** shadcn/ui switched its default scaffold from Radix to Base UI in July 2026 ([changelog](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)); Base UI hit stable 1.0 Dec 2025 and sits at `@base-ui/react@1.7.0` (the old `@base-ui-components/react` npm name is deprecated — a silent trap). Radix (19.2k★) is not deprecated — `shadcn init -b radix` — but new builds default Base UI. React Aria Components (`1.20.0`) when i18n/RTL/strict WCAG AA is a hard requirement.

**shadcn registry ecosystem** — agent-friendly surfaces: [registry.json schema](https://ui.shadcn.com/docs/registry/registry-json), first-party [MCP server](https://ui.shadcn.com/docs/registry/mcp) (`shadcn mcp init --client claude`), [llms.txt](https://ui.shadcn.com/llms.txt). Third-party registries by job: **Magic UI** (animated components), **Aceternity** (bold hero effects), **Origin UI** (primitive gaps), **Kibo UI** (Gantt/Kanban/editor/AI-chat), **Cult UI** (agent/AI-native product UI), **HeroUI** (installed library on React Aria — strongest built-in a11y), **Park UI** (Ark UI base), **daisyUI** (pure-CSS plugin alternative).

**Tailwind v4** is CSS-first: tokens live in `@theme` CSS, no `tailwind.config.js` — scaffolding a JS config for v4 is dead code. Oxide engine: ~182× faster incremental builds.

## 2. Motion

- **GSAP is 100% free since April 2025** (Webflow acquisition) — ScrollTrigger, SplitText, MorphSVG, all of it. Not open source though: free-to-use proprietary EULA. `gsap@3.15.0`.
- **Framer Motion → Motion** (`motion`, import `motion/react`, v13.1.0). `framer-motion` is a legacy alias.
- **Lenis** moved to plain `lenis` (`lenis/react`) under Darkroom Engineering — `@studio-freight/*` packages are retired.
- **View Transitions**: same-document is Baseline in all four engines (Firefox shipped v144). Cross-document remains Chromium/Safari-only — progressive enhancement.
- **Rive** (state machines, GPU, tiny binaries) vs **dotLottie** (designer pipeline; state machines added late 2025).

Routing: scroll-pinned storytelling → GSAP+ScrollTrigger · React enter/exit/layout → Motion · scroll feel → Lenis · designer loops → dotLottie · stateful micro-interactions → Rive · zero-dependency transitions → View Transitions + WAAPI.

## 3. 3D

three.js r185; WebGPURenderer production-viable since r171 with **TSL** writing once for WGSL/GLSL. R3F v9 (`9.7.0`) is the React-19 major; keep drei (`10.7.8`) on matching majors. **OGL** (~8KB) for shader-driven hero backdrops without scene-graph overhead; **Spline** when no 3D engineer. Doctrine: poster fallback always · code-split behind `ssr:false` · cap DPR at 2 + `<AdaptiveDpr>`/`<PerformanceMonitor>` · simplify mobile post-processing, not just DPR · reduced-motion disables camera drift, not just entrances.

## 4. Icons

| Library | Count | Axes | React |
|---|---|---|---|
| Lucide | 1,776 | single weight, 24px grid | `lucide-react` — shadcn default |
| Phosphor | ~1.5k × 6 weights | Thin→Fill/Duotone | `@phosphor-icons/react@2.1.10` |
| Tabler | 6,100+ | outline | `@tabler/icons-react@3.46.0` |
| Heroicons | 292 | 4 sizes/styles | Tailwind-team coherence |
| Iconoir | 1,600+ | regular/solid | `iconoir-react@7.12.1` |
| Hugeicons | 5,400 free (59k pro) | 10 styles | `@hugeicons/react@4.2.3` |

Inline SVG, full stop — icon fonts are legacy (screen-reader mishandling, no multi-color, no tree-shaking). AI vector gen: **Recraft V4.1** is the only mainstream native-SVG generator (hex-exact brand conditioning) — use for concepts, always finish in Figma/Illustrator, never ship raw AI SVG as a final logo.

## 5. Type

Premium pairing doctrine: characterful serif/humanist display (Fraunces — variable with optical-size/SOFT/WONK axes, Playfair) + geometric/grotesk body (Geist, Hanken Grotesk, Plus Jakarta Sans). Two families max + one mono. Weight/size hierarchy over all-caps (all-caps reads generic-SaaS in 2026). One variable font file (~100–200KB) replaces 400–800KB of static weights. [Fontshare](https://www.fontshare.com/): 100 curated free families — check per-family license (ITF FFL vs OFL). Fluid type via `clamp()` tokens; ship `text-wrap: balance` (headings) and `text-wrap: pretty` (body; not yet Firefox) unconditionally.

## 6. Generated visual assets

| Asset class | First choice | Why |
|---|---|---|
| Hero/lifestyle/product photography | **Flux.2 [pro]** | Photorealism + structural fidelity leader |
| Fast hero/OG/banner, ultra-wide | **Nano Banana 2** (`gemini-3.1-flash-image`) | ~95% of Pro quality at 3–5× speed; 14 aspect ratios incl. 8:1 |
| Text-dense infographics/diagrams/UI mockups | **Nano Banana Pro** (`gemini-3-pro-image-preview`) | Reasoning step + Search grounding; best legible in-image text |
| Multi-line typography/logos | **Ideogram 4.0** (open-weight) | Wins blind typography benchmarks; JSON captions with bounding boxes + hex conditioning |
| Vector icons/logos/flat illustration | **Recraft V4.1** | Native SVG |
| UI screenshots, non-Latin text | **gpt-image-2** | Thinking mode plans layout; strong CJK/Arabic |
| Video (ads/UGC/character campaigns) | **Higgsfield** (Sora 2, Veo 3.1, Kling 3.0, Seedance 2.0 + Soul ID) | Aggregator + character consistency |
| Sub-second local iteration | **Flux.2 [klein]** | <0.5s on consumer hardware |

**Naming trap:** Nano Banana Pro (`gemini-3-pro-image-preview`), Nano Banana 2 (`gemini-3.1-flash-image`), and original Nano Banana (`gemini-2.5-flash-image`) are three distinct models — not versions of one another. Pipelines: background-removal → upscale **last** after final crop; favicon/OG derivation through deterministic build scripts (`sharp`/`svgo`), never regenerated per deploy.

## 7. Quality tooling

CWV 2026: **LCP <2.5s · CLS <0.1 · INP <200ms**, judged on CrUX field data at p75 — Lighthouse is diagnosis, not the score. 43% of sites still fail INP; motion-heavy builds are highest-risk (long main-thread tasks on interaction). Playwright `toHaveScreenshot()` with CI-generated committed baselines; `@axe-core/playwright` in the same suite (automation catches ~57% of WCAG issues — keyboard/screen-reader walks are still manual craft); Lighthouse CI at the merge gate, not ad hoc.

## 8. What agents commonly get wrong (2026)

1. GSAP + all plugins free since Apr 2025 (but proprietary EULA, not MIT).
2. `framer-motion` → `motion` / `motion/react`.
3. shadcn defaults to Base UI since Jul 2026; `@base-ui-components/react` npm name is deprecated → `@base-ui/react`.
4. Tailwind v4 has no JS config — `@theme` in CSS.
5. Next.js 16: `middleware.ts` → `proxy.ts` (nodejs-only runtime).
6. Nano Banana 2 ≠ Nano Banana Pro ≠ Nano Banana — three models, three price/quality points.
7. View Transitions same-document is Baseline incl. Firefox 144+; cross-document still isn't.
8. Icon counts drift weekly — don't hardcode them in copy.
9. Recraft is V4.1, not V3.
10. CVA at 0.7.1 isn't abandoned — it's finished, small software (pushed 2026-08).

### Key sources
[shadcn changelog](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default) · [shadcn MCP](https://ui.shadcn.com/docs/registry/mcp) · [Base UI](https://base-ui.com/) · [Tailwind blog](https://tailwindcss.com/blog) · [GSAP free announcement](https://webflow.com/blog/gsap-becomes-free) · [motion.dev](https://motion.dev) · [Lenis](https://github.com/darkroomengineering/lenis) · [caniuse view-transitions](https://caniuse.com/view-transitions) · [R3F v9 migration](https://r3f.docs.pmnd.rs/tutorials/v9-migration-guide) · [Lucide](https://lucide.dev) · [Recraft](https://www.recraft.ai) · [Fontshare](https://www.fontshare.com/) · [NB Pro docs](https://ai.google.dev/gemini-api/docs/models/gemini-3-pro-image) · [gpt-image-2](https://developers.openai.com/api/docs/models/gpt-image-2) · [Ideogram 4.0](https://ideogram.ai/blog/ideogram-4.0/) · [FLUX.2](https://bfl.ai/blog/flux-2) · [Higgsfield](https://higgsfield.ai/) · [axe-core](https://github.com/dequelabs/axe-core) · [Next middleware→proxy](https://nextjs.org/docs/messages/middleware-to-proxy)
