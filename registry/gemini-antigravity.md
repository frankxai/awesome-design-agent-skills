# Design Skills — Google Gemini CLI + Antigravity

Verified 2026-08-20 (`gh api` star counts and `pushed_at` dates). **The strongest first-party design ecosystem of any harness**: Google is the only vendor shipping a coordinated design toolchain under its own orgs — Stitch (agentic UI generation with an official MCP server *and* official skills library), Nano Banana 2 image gen as a native extension, and a web-accessibility extension, all maintained through August 2026.

| Name | Author | ★ | Last push | Harness | Category | Install | What it does | Verdict |
|---|---|---|---|---|---|---|---|---|
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | Google Labs (official) | 8.1k | 2026-08 | Gemini CLI, Antigravity, Cursor, Claude Code | UI-generation skills | `npx skills add` | Official Agent-Skills library for the Stitch MCP server; explicitly cross-harness | ⭐ essential |
| [gemini-cli-extensions/nanobanana](https://github.com/gemini-cli-extensions/nanobanana) | Google (official org) | 1.1k | 2026-06 | Gemini CLI | image-gen extension | `gemini extensions install` | Nano Banana 2 (`gemini-3.1-flash-image-preview`, swappable to `gemini-3-pro-image-preview`) with `/generate`, `/edit`, `/icon`, `/pattern`, `/diagram`, `/restore` | ⭐ essential |
| [davideast/stitch-mcp](https://github.com/davideast/stitch-mcp) | David East (Google DevRel) | 954 | 2026-05 | any MCP client | UI-gen MCP/CLI | `npm i -g` | Exports Stitch screens/components into a real dev workflow | solid |
| [Piebald-AI/awesome-gemini-cli](https://github.com/Piebald-AI/awesome-gemini-cli) | Piebald-AI | 497 | 2026-08 | Gemini CLI | meta-list | browse | Best-maintained ecosystem index (light on dedicated design entries) | solid |
| [gemini-cli-extensions/stitch](https://github.com/gemini-cli-extensions/stitch) | Google | 466 | 2026-01 | Gemini CLI | UI-gen MCP bridge | `gemini extensions install` | Natural-language Stitch UI generation/iteration in the CLI | solid |
| [harikrishna8121999/antigravity-workflows](https://github.com/harikrishna8121999/antigravity-workflows) | harikrishna8121999 | 178 | 2026-03 | Antigravity | workflow packs | copy to `.agents/workflows` | Community reusable workflow prompts, some design-adjacent | niche |
| [ZhangYu-zjut/awesome-Antigravity](https://github.com/ZhangYu-zjut/awesome-Antigravity) | ZhangYu-zjut | 150 | 2026-01 | Antigravity | meta-guide | browse | General Antigravity guide (agents, rate limits, Gemini 3) | niche |
| [Kargatharaakash/stitch-mcp](https://github.com/Kargatharaakash/stitch-mcp) | Kargatharaakash | 121 | 2026-08 | any MCP client | UI-gen MCP | npx | Independent "universal" Stitch MCP alternative | niche |
| [gemini-cli-extensions/web-accessibility](https://github.com/gemini-cli-extensions/web-accessibility) | Google | 85 | 2026-02 | Gemini CLI | visual QA / a11y | `gemini extensions install` | Finds and fixes accessibility violations in a codebase | solid |
| [gabelul/stitch-kit](https://github.com/gabelul/stitch-kit) | gabelul | 41 | 2026-08 | Gemini CLI, Antigravity | Stitch pipeline kit | script | Ideation → screens → design systems → production components, end to end | niche |
| [MichaelZelbel/awesome-antigravity](https://github.com/MichaelZelbel/awesome-antigravity) | Michael Zelbel | 21 | 2026-02 | Antigravity | meta-list | browse | Small extension/workflow collection | low-signal |
| [hoadh/antigravity-workflow-skills](https://github.com/hoadh/antigravity-workflow-skills) | hoadh | 7 | 2026-03 | Antigravity | workflow/knowledge | copy | Environment settings, prompt schemas, workflow macros | low-signal |
| [akhilesh-w/gemini-design-plugin](https://github.com/akhilesh-w/gemini-design-plugin) | akhilesh-w | 4 | 2026-01 | Gemini CLI | UI-iteration extension | manual | Multiple UI variations per component for side-by-side comparison | low-signal |

Adjacent, excluded from design ranking: [gemini-cli-extensions/conductor](https://github.com/gemini-cli-extensions/conductor) (3.7k★) — spec-driven development for Antigravity + Claude Code; process tooling, not design.

**Bottom line:** for design-asset generation with legible text (infographics, diagrams, UI concepts), the official nanobanana extension is the reference implementation; for agentic screen generation, Stitch + stitch-skills is the only first-party pipeline any vendor ships. Antigravity itself consumes the universal SKILL.md packs (see [cross-harness.md](./cross-harness.md)).
