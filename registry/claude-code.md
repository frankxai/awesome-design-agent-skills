# Design Skills — Claude Code

Verified 2026-08-20 via live GitHub API (`gh api` + cross-checked `gh search repos`). Star counts are repo-level; skills.sh installs are a separate adoption metric where noted. Content counts inside fast-moving skills (styles/palettes) drift by version — treat them as order-of-magnitude.

## Official Anthropic

| Skill | Author | ★ | Category | Install | What it does | Verdict |
|---|---|---|---|---|---|---|
| [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) (in anthropics/skills) | Anthropic | 170.5k (repo) | ui-styling | `npx skills add anthropics/skills` | Design-lead persona: named aesthetic direction, 4–6 hex token palette, deliberate type pairing, explicit anti-slop calibration (names the 3 default AI looks to avoid) before code | ⭐ essential — the root doctrine everything else builds on or reacts against |
| [frontend-design plugin](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) | Anthropic | 142k (repo) | ui-styling | `/plugin install frontend-design@claude-plugins-official` | Same doctrine as a first-party auto-applying plugin | ⭐ essential |
| [brand-guidelines](https://github.com/anthropics/skills/tree/main/skills/brand-guidelines) | Anthropic | — | branding | bundled | Anthropic's own brand encoded as a skill — the template for encoding *yours* | solid (fork the pattern) |
| [web-artifacts-builder](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder) | Anthropic | — | workflow | bundled | React+TS+Vite+Tailwind+shadcn scaffolding for complex artifacts | solid |
| [webapp-testing](https://github.com/anthropics/skills/tree/main/skills/webapp-testing) | Anthropic | — | visual-qa | bundled | Playwright screenshot/log/verify toolkit | solid |
| [canvas-design](https://github.com/anthropics/skills/tree/main/skills/canvas-design) / [theme-factory](https://github.com/anthropics/skills/tree/main/skills/theme-factory) | Anthropic | — | visual-design | bundled | Static art pieces / 10 preset themes | niche |
| [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Anthropic | 33.7k | discovery | `/plugin marketplace add` | 286 plugins, 8 design-tagged (figma, adobe-for-creativity, hyperframes, superdesign, canva, miro, runway-api, ui-theme-designer) | ⭐ essential as a discovery surface |

## The big community packs

| Skill | Author | ★ | skills.sh installs | Category | What it does | Verdict |
|---|---|---|---|---|---|---|
| [gstack](https://github.com/garrytan/gstack) | Garry Tan (YC) | 128.7k | — | visual-qa / workflow | 23 opinionated tools: `/design-review`, `/design-html`, `/design-consultation`, `/design-shotgun`, `/qa`, `/canary` on a headless-Chromium engine | ⭐ essential — best-in-class iterative visual-QA loop |
| [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | nextlevelbuilder | 118.2k | 322k | ui-styling / design-system | Searchable design DB (v2.11: 84 styles, 192 palettes, 74 font pairings, 98 UX rules, 16 GSAP presets across 22 stacks) with `--design-system` generation and variance/motion/density dials | ⭐ essential — deepest style database |
| [taste-skill](https://github.com/Leonxlnx/taste-skill) | Leonxlnx | 78.2k | 378k (top skill) | ui-styling | Anti-slop family: minimalist/brutalist/soft direction packs, brandkit, redesign, image-to-code, imagegen-frontend-web/mobile, output-enforcement | ⭐ essential — highest real-world installs |
| [impeccable](https://github.com/pbakaus/impeccable) | Paul Bakaus | 60.7k | — | ui-styling / design-system | 18 skills, 23 commands, 7 design pillars, 58 deterministic anti-pattern detectors, live browser iteration; builds on Anthropic frontend-design | ⭐ essential — most systematized design language |
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills) | Vercel Labs | 30.2k | 557k | ui-styling | Vercel's official web-interface guideline audit skill | ⭐ essential |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | Emil Kowalski | 30.8k | — | motion | Easing/duration correctness, Apple-style fluid motion, animation auditing — from the Sonner/Vaul author | ⭐ essential for motion |
| [uizze anti-ui-slop](https://github.com/uizze/uizze) | UIZZE | 7 (★) / 382k installs | visual-qa | Grounds generation against 800k+ real screens; hard finish-gate blocks "clean/modern/premium" as non-decisions | solid — differentiated; verify health before depending on it |
| [gsap-skills](https://github.com/greensock/gsap-skills) | GreenSock (official) | 13.8k | — | motion | Maintainer-authored GSAP correctness reference | ⭐ essential for GSAP work |
| [motion-design-skill](https://github.com/lottiefiles/motion-design-skill) | LottieFiles (official) | 1.2k | — | motion | Timing/easing/choreography principles | solid |
| [hyperframes](https://github.com/heygen-com/hyperframes) | HeyGen | 41.7k | — | motion/video | Programmable HTML→video (GSAP compositions → MP4/WebM) | solid |
| [superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | Superdesign.dev | 436 | — | workflow | Codebase-aware UI drafts on an infinite canvas | solid |
| [better-icons](https://github.com/better-auth/better-icons) | better-auth | 1.2k | — | icons | Skill+MCP searching 150+ icon libraries, 200k+ icons | solid |
| [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | ibelick | — | — | design-system | Evidence-led DESIGN.md extraction from existing code | solid |
| [claude-design-skill](https://github.com/jiji262/claude-design-skill) | jiji262 | 180 | — | workflow | Portable adaptation of claude.ai's internal Claude Design canvas prompt | niche |
| [design-system-ops](https://github.com/murphytrueman/design-system-ops) | murphytrueman | 159 | — | design-system | Maintenance workflows for a *live* design system | niche |
| [claudedesignskills](https://github.com/freshtechbro/claudedesignskills) | freshtechbro | 753 | — | motion/3d | Three.js/R3F-adjacent interactive experience skills | niche |
| [obra/superpowers](https://github.com/obra/superpowers) | Jesse Vincent | 274.3k | — | workflow | General agentic SDLC methodology — NOT a design pack; listed because its composable-skill pattern shaped the ecosystem | contextual only |

## Awesome lists (design-relevant)

| List | ★ | Design relevance |
|---|---|---|
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | 52.7k | Definitive general list; design entries tagged within |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 30.6k | 1000+ cross-CLI skills, design vertical included |
| [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents) | 24.5k | 100+ subagents incl. design-bridge |
| [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) | 14.7k | General skills list with design/frontend section |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | 3.5k | Purpose-built: 68 ready DESIGN.md systems by aesthetic family |
| [rohitg00/awesome-claude-design](https://github.com/rohitg00/awesome-claude-design) | 1.0k | DESIGN.md prompts, remix recipes, teardowns |

## Subagents & design MCP servers

| Resource | ★ | What it bridges |
|---|---|---|
| [wshobson/agents](https://github.com/wshobson/agents) | 38.9k | 202 agents/181 skills incl. ui-ux-designer + tailwind-design-system |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 49.4k | 44 tools: perf tracing, screenshots, console/network — closes the QA loop |
| [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) | 36.3k | A11y-tree browser automation for visual QA |
| [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) | 15.7k | De facto community Figma→code bridge (Figma's official server is hosted; see [figma/mcp-server-guide](https://github.com/figma/mcp-server-guide)) |
| [Jpisnice/shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server) | 2.9k | shadcn component source/props (official MCP also ships via `shadcn mcp init`) |

## Top 10 (ranked)

1. anthropics/skills **frontend-design** — root doctrine, install first
2. **impeccable** — most systematized third-party design language
3. **ui-ux-pro-max** — deepest style/palette/rules database
4. **taste-skill** — anti-slop pioneer, highest installs
5. **gstack** — the visual-QA loop
6. **vercel-labs web-design-guidelines** — official guideline audit
7. **Figma-Context-MCP** — the design-to-code bridge people actually install
8. **greensock/gsap-skills** — official motion correctness
9. **shadcn-ui/ui** skill+MCP — the component backbone
10. **playwright-mcp + chrome-devtools-mcp** — verification workhorses

Known impostors/forks to avoid: `gessniio/impeccable_SKILL_CLAUDE` (use pbakaus), `waamengineer/ui-ux-pro-max-skill` (fork; use nextlevelbuilder).
