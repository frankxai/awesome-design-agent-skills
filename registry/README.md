# Cross-Harness Design Skill Registry

The complete 2026 map of agentic design skills across every major coding harness — every entry live-verified against the GitHub API on the audit date. Star counts drift; verdicts and structure are the durable part.

| File | Covers |
|---|---|
| [claude-code.md](./claude-code.md) | Anthropic official skills/plugins, the big community packs (gstack, impeccable, ui-ux-pro-max, taste-skill…), awesome lists, subagents, design MCP servers |
| [codex.md](./codex.md) | OpenAI Codex CLI — AGENTS.md origin, native `$imagegen`, community packs |
| [gemini-antigravity.md](./gemini-antigravity.md) | Google's first-party design toolchain — Stitch, Nano Banana extensions, Antigravity workflows |
| [grok.md](./grok.md) | Grok Build (reads Claude's format wholesale) + Grok Imagine asset workflows |
| [cursor.md](./cursor.md) | Cursor rules ecosystem and its `.cursorrules` → `.mdc` migration caveats |
| [cross-harness.md](./cross-harness.md) | AGENTS.md, skills.sh, Figma Dev Mode MCP, the universal packs, and the "harness doesn't matter" thesis |
| [registry.json](./registry.json) | Machine-readable index of the high-signal entries |

## Star-count honesty

Every `registry.json` entry has `starBasis`:

| Value | Meaning | May set chart scale / rank? |
|---|---|---|
| `this-repo` | `stargazers_count` of `starRepo` | yes |
| `parent-repo` | stars of a containing pack (e.g. `anthropics/skills` for `frontend-design`) | **no** — labeled, not scaled |
| `unmeasured` | no comparable GitHub star count | no — hollow ring |

`frontend-design` at ~170k is the parent pack `anthropics/skills`, not the skill. Using that number as brightness was the same class of error as hand-plotting the plate. Install counts (`installs`) are a separate signal when present.

## The one-paragraph verdict

Install layer beats harness choice: **AGENTS.md** at repo root, then `npx skills add` **ui-ux-pro-max** + **taste-skill** + **impeccable** + **emilkowalski/skills**, wire **Figma Dev Mode MCP** when design files exist, route assets through the harness's native image engine (gpt-image-2 / Nano Banana 2 / Grok Imagine), and close the loop with a browser-QA engine (gstack / Playwright MCP / chrome-devtools-mcp). Everything else in this registry is specialization on top of that spine.

## Companion knowledge

- [How elite web teams actually work](../docs/how-elite-web-teams-work.md) — the human process these skills industrialize
- [The 2026 premium web stack](../docs/premium-web-stack-2026.md) — verified library/model landscape the skills build with
- [Rankings](../rankings/) — job-by-job leader comparisons · [Rubrics](../rubrics/) — scoring gates
