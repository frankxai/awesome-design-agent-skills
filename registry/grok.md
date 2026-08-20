# Design Skills — Grok / xAI

Verified 2026-08-20 (`gh api` star counts and `pushed_at` dates). The strategic fact about Grok Build: **it reads Claude's format directly** — `CLAUDE.md`, `.claude/rules/`, plugins, and Skills — plus AGENTS.md. It deliberately imports the existing skill ecosystem instead of building a competing one, so every universal design pack in [cross-harness.md](./cross-harness.md) runs on it unmodified.

| Name | Author | ★ | Last push | Category | Install | What it does | Verdict |
|---|---|---|---|---|---|---|---|
| [xai-org/grok-build](https://github.com/xai-org/grok-build) | xAI (official) | 25.7k | 2026-08 | harness | script / npm | Official coding-agent CLI/TUI; consumes Claude-format skills and AGENTS.md wholesale | ⭐ essential |
| [xai-org/grok-prompts](https://github.com/xai-org/grok-prompts) | xAI (official) | 4.4k | 2025-11 | prompt examples | browse | Official prompt examples for Grok chat and the `@grok` X bot — context, not an agentic design pack | solid |
| [superagent-ai/grok-cli](https://github.com/superagent-ai/grok-cli) | superagent-ai | 3.4k | 2026-07 | harness (alt) | `npm i -g` | Most-starred independent Grok coding agent, predates the official CLI | solid |
| [phuryn/grok-build-vscode](https://github.com/phuryn/grok-build-vscode) | phuryn | 158 | 2026-08 | harness UI wrapper | VS Code marketplace | Desktop GUI + VS Code/Cursor extension for Grok Build; bridges to Codex and Claude Code | solid |
| [FineComputer14451/Grok-Imagine-Cinematic-Studio](https://github.com/FineComputer14451/Grok-Imagine-Cinematic-Studio) | FineComputer14451 | 25 | 2026-08 | multi-agent video/asset pipeline | copy | Cinematic production pipeline (pre-production → marketing assets) on Grok 4.5 Build + Grok Imagine | niche |
| [runapi-ai/grok-imagine](https://github.com/runapi-ai/grok-imagine) | runapi-ai | 1 | 2026-08 | image/video asset skill | `npx skills add` | Grok Imagine wrapper targeting 50+ agents cross-harness | low-signal (new; watch) |
| [tern/grok-cli-skills](https://github.com/tern/grok-cli-skills) | tern | 2 | 2026-07 | headless workflows | copy | Repo-aware Grok CLI skill workflows for OpenClaw/Codex | low-signal |

**Bottom line:** treat Grok Build as a Claude-compatible runtime with Grok Imagine as its native image/video engine. Install the big three universal packs (ui-ux-pro-max, taste-skill, impeccable) and route design-asset generation through Grok Imagine when the SuperGrok subscription is the available budget.
