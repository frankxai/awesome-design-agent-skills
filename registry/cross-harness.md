# Cross-Harness Standards & Universal Design Packs

Verified 2026-08-20. **The 2026 finding that matters most:** harness choice increasingly doesn't determine design quality. The three biggest design-skill repos in the entire survey — ui-ux-pro-max (118k★), taste-skill (78k★), impeccable (61k★) — are harness-agnostic SKILL.md packs distributed through skills.sh, each explicitly targeting 8–20 harnesses. The center of gravity moved from *which agent* to *which universal skill pack you install into it*.

## The substrate

| Name | Steward | Coverage | What it is | Verdict |
|---|---|---|---|---|
| [AGENTS.md](https://agents.md) | Agentic AI Foundation (Linux Foundation) | 20+ harnesses (Codex, Gemini CLI/Jules, Cursor, Amp, Factory, Aider, Goose, Zed, Warp, Copilot, Devin, Windsurf, JetBrains…) | The project-context standard, used by 60k+ OSS projects; complements Skills (always-on context vs on-demand expertise) | ⭐ essential substrate |
| [Skills.sh](https://skills.sh) | Vercel | 20+ CLIs (Claude Code, Cursor, Codex, Copilot, Windsurf, Gemini CLI, Cline, Antigravity, OpenClaw, Goose, Zed…) | `npx skills add <owner>/<repo>` — the de facto cross-CLI skill installer + install-count leaderboard, dominated by design skills | ⭐ essential install layer |
| [Figma Dev Mode MCP](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server) | Figma (official) | Cursor, Codex, Gemini CLI, Claude Code, VS Code, Windsurf, Zed | Streams the real design tree (auto-layout, variables, Code Connect) into any MCP agent; bidirectional push-to-canvas | ⭐ essential design-data channel |

## The universal design packs

| Pack | ★ | Harnesses (explicit) | Signature capability |
|---|---|---|---|
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 118.2k | 20 (Cursor, Windsurf, Antigravity, Codex, Gemini CLI, Copilot, Continue, OpenCode, Qoder, Droid, Warp, Trae, Roo, Claude Code…) | Searchable design-intelligence DB + full design-system generation, `uipro init --ai <harness>` |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | 78.2k | 8 (Claude Code, Codex, Cursor, OpenCode, Gemini CLI, AI Studio, v0, Lovable) | Tunable anti-slop dials: DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 60.7k | 14 (Claude Code, Cursor, Copilot, Gemini CLI, Codex, Grok Build, OpenCode, Pi, Kiro, Trae, Rovo Dev, Qoder, Mistral Vibe, Antigravity) | 23 commands + 58 deterministic anti-pattern detectors + live browser iteration; `npx impeccable install` auto-detects harness |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | 30.8k | any SKILL.md harness | Motion authority: easing, duration, interruption, reduced-motion |
| [wuyoscar/GPT-Image2-Skill](https://github.com/wuyoscar/GPT-Image2-Skill) | 4.7k | Codex, Claude Code, OpenClaw, Hermes | gpt-image-2 design-asset workflows (UI mockups, dense-text diagrams) |
| [h3nryprod01/design-taste](https://github.com/h3nryprod01/design-taste) | 33 | Claude Code/Cowork | Explicit merge of taste-skill + impeccable + emilkowalski — early consolidation signal |

## Which harness has the strongest design ecosystem (2026)

- **Gemini CLI / Antigravity — strongest first-party toolchain.** Only vendor shipping a coordinated official design stack: Stitch (product + MCP + 8k★ skills library), Nano Banana 2 extension, web-accessibility extension. See [gemini-antigravity.md](./gemini-antigravity.md).
- **Cursor — strongest community volume**, but heavily legacy framework boilerplate. See [cursor.md](./cursor.md).
- **Codex — wins standard-setting + native tooling**: AGENTS.md origin, `$imagegen` in the binary, largest install base. See [codex.md](./codex.md).
- **Grok Build — deliberately ecosystem-less**: reads Claude's `CLAUDE.md`/`.claude/` + AGENTS.md wholesale, bootstrapping everything above instantly. See [grok.md](./grok.md).
- **Claude Code — the richest total design surface** once official skills + plugins + the universal packs + MCP servers are combined. See [claude-code.md](./claude-code.md).

**Default 2026 install for any harness:** AGENTS.md at repo root → `npx skills add` ui-ux-pro-max + taste-skill + impeccable + emilkowalski/skills → Figma Dev Mode MCP if design files exist → the harness's native image engine for assets (gpt-image-2 / Nano Banana 2 / Grok Imagine) → a browser-QA loop (gstack, Playwright MCP, or chrome-devtools-mcp) to close verification.
