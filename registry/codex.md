# Design Skills — OpenAI Codex CLI

Verified 2026-08-20 (`gh api` star counts and `pushed_at` dates, not estimates). Codex's design story rests on three pillars: the **AGENTS.md** standard it originated, the **built-in `$imagegen` skill** (native gpt-image-2, no API key — see `codex-rs/skills/src/assets/samples/imagegen/SKILL.md`), and the universal SKILL.md packs it consumes via [skills.sh](https://skills.sh) (see [cross-harness.md](./cross-harness.md)).

| Name | Author | ★ | Last push | Category | Install | What it does | Verdict |
|---|---|---|---|---|---|---|---|
| [openai/codex](https://github.com/openai/codex) | OpenAI | 106.9k | 2026-08 | harness + standard + imagegen | npm / brew | The harness. Ships AGENTS.md docs and native `$imagegen` (gpt-image-2) for screenshot-to-code, batch asset gen, Figma-MCP round-trips, Playwright-verified at multiple viewports | ⭐ essential |
| [wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) | wuyoscar | 4.7k | 2026-08 | image-gen workflow | `npx skills add` | Prompt gallery + skill + CLI for gpt-image-2 with reference packs for UI mockups, character design, dense-text diagrams | ⭐ essential |
| [Ischca/awesome-agents-md](https://github.com/Ischca/awesome-agents-md) | Ischca | 74 | 2025-08 | AGENTS.md reference | browse | Curated real-world AGENTS.md files and templates | solid (stale — predates Skills launch) |
| [vipulgupta2048/codex-skills](https://github.com/vipulgupta2048/codex-skills) | vipulgupta2048 | 35 | 2026-01 | frontend anti-slop | `npx skills add` | "Codex Frontend Skill" targeting generic purple-gradient AI UI | solid |
| [oakplank/gpt-image-bridge](https://github.com/oakplank/gpt-image-bridge) | oakplank | 32 | 2026-07 | image-gen bridge | script | Gives Claude Code image gen by shelling to gpt-image-2 through Codex CLI (rides the ChatGPT subscription) | niche |
| [wzx2002/codex-frontend-skill](https://github.com/wzx2002/codex-frontend-skill) | wzx2002 | 3 | 2026-04 | design-first workflow | copy to `.codex/skills` | Enforces design-first flow with shadcn/Tailwind constraints | niche |
| [chentao326/codex-skill-design-md](https://github.com/chentao326/codex-skill-design-md) | chentao326 | 0 | 2026-05 | design-system corpus | copy | 71 brand DESIGN.md references (Apple, Stripe, Airbnb…) as a skill | low-signal (interesting concept, zero traction) |

**Bottom line:** install [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), [taste-skill](https://github.com/Leonxlnx/taste-skill), and [impeccable](https://github.com/pbakaus/impeccable) via skills.sh, use native `$imagegen` for design assets, and let AGENTS.md carry project context. Codex wins on standard-setting and native image tooling, not on a design-specific ecosystem of its own.
