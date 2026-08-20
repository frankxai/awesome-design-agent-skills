# Design Rules & Skills — Cursor

Verified 2026-08-20. Structural context first: Cursor deprecated the single-file `.cursorrules` format in favor of scoped `.cursor/rules/*.mdc` project rules with activation modes — many high-star collections still carry legacy-format entries. Cursor also ships a first-party Figma extension and consumes the universal SKILL.md packs via [skills.sh](https://skills.sh).

| Name | Author | ★ | Last push | Category | Install | What it does | Verdict |
|---|---|---|---|---|---|---|---|
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | PatrickJS | 40.6k | 2026-05 | rules mega-collection | copy `.mdc`/`.cursorrules` | 500+ rules; strong frontend coverage (Tailwind, shadcn/ui, Next.js×React×TS stacks, `toss-style-design-system.mdc`) | ⭐ essential with a caveat — canonical, but much legacy format |
| [spencerpauly/awesome-cursor-skills](https://github.com/spencerpauly/awesome-cursor-skills) | spencerpauly | 704 | 2026-08 | Skills meta-list | browse | Post-Agent-Skills-spec list: frontend-design generation, shadcn management, a11y/perf audit skills | solid — best-maintained Cursor-specific list in 2026 |
| [spencergoldade/cursor-designer](https://github.com/spencergoldade/cursor-designer) | spencergoldade | 26 | 2026-03 | UX/UI/IA rule set | copy to `.cursor/rules` | Auto-attached rules for layout, forms, accessibility, content/UX writing — design-discipline-focused, not framework boilerplate | solid |
| [blefnk/awesome-cursor-rules](https://github.com/blefnk/awesome-cursor-rules) | blefnk | 82 | 2025-03 | modern-stack rules | copy | Next.js 15/React 19/TS5/Tailwind4/shadcn tuned rules | niche (dormant) |
| [studioalexwolf/cursor-design-rules](https://github.com/studioalexwolf/cursor-design-rules) | studioalexwolf | 3 | 2026-02 | anti-slop rules | copy 3 files | "3 free design rules that stop amateur UI" — cross-loadable into Cursor, Claude Code, Lovable, Codex | niche |

**Bottom line:** Cursor has the largest community *volume* but much of it is framework boilerplate from the `.cursorrules` era. For actual visual taste, install the universal packs (ui-ux-pro-max, taste-skill, impeccable — all list Cursor as a target) and use the Figma Dev Mode MCP for real design data; keep awesome-cursorrules as a stack-conventions library, not a design authority.
