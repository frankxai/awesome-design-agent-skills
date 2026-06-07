# awesome-design-agent-skills

A curated map of design skills for AI coding agents: Claude Code, Codex, Cursor, Gemini CLI, v0, Lovable, and beyond.

## Why this repo exists

Generic skill aggregators already exist. This repo focuses on the narrower problem: **which skills actually improve design output** for product UI, motion, brand systems, and design audits.

The goal is not to list everything. The goal is to help people quickly find the highest-signal design-oriented skills, prompts, and reference repos.

## Start here

- [Best frontend design skills](./rankings/best-frontend-design-skills.md)
- [Best motion skills](./rankings/best-motion-skills.md)
- [Best brand system skills](./rankings/best-brand-system-skills.md)
- [Best design audit skills](./rankings/best-design-audit-skills.md)
- [Anti-slop rubric](./rubrics/anti-slop-rubric.md)
- [AI UI quality rubric](./rubrics/ai-ui-quality-rubric.md)
- [Before / after gallery](./examples/before-after-gallery.md)

## Positioning

This repository should become the **design-specific discovery layer** on top of broader agent-skill directories.

It should answer questions like:

- Which skills produce non-generic UI?
- Which skills are strongest for motion and polish?
- Which resources help generate coherent brand systems?
- Which prompts or skills are useful for auditing weak AI-generated interfaces?

## Already serious aggregators

These resources already matter, and this repo should complement them rather than duplicate them.

| Repo / Resource | What it is | Why it matters |
| --- | --- | --- |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | 1000+ agent skills compatible with Claude Code, Codex, Gemini CLI, Cursor, and more | The generic aggregator already exists. This repo should filter the design-specific winners from it. |
| [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills) | Curated Claude Skills list | Strong Claude-specific discovery layer and useful source of design-adjacent skills. |
| [Anthropic frontend-design skill](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) | Official-ish frontend design skill inside the Claude Code repo | A strong baseline for anti-slop frontend generation and a useful reference standard. |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | Ready-to-use `DESIGN.md` inspirations | Useful prompt and template layer for design-system-driven UI generation. |
| [bergside/awesome-design-skills](https://github.com/bergside/awesome-design-skills) | Curated design skill files for Claude Code, Cursor, Codex, and others | The closest existing repo to an "awesome design skills" concept. |

## What belongs here

High-signal content for this repo:

- Ranked lists by use case, not just by popularity
- Rubrics for evaluating whether a skill avoids generic AI UI
- Side-by-side before/after examples showing what good design guidance changes
- Short explanations of when to use a skill, not just links
- Cross-tool coverage for Claude Code, Codex, Cursor, Gemini CLI, v0, Lovable, and similar products

Low-signal content to avoid:

- Giant unsorted dumps of links
- Repositories with no design-specific angle
- Prompt packs with no visible output quality bar
- Lists that only track stars instead of actual design usefulness

## Initial curation principles

A resource should rank higher when it:

1. Produces distinctive, production-grade interfaces instead of generic AI UI
2. Encodes taste, hierarchy, spacing, typography, and motion guidance
3. Works across real coding-agent workflows, not only in chat
4. Helps with system-level consistency, not just single-screen mockups
5. Includes examples, templates, or skill files people can reuse directly

## Suggested next expansion

- Add more design-skill sources as they appear
- Add concrete examples from real generated interfaces
- Separate rankings by workflow stage: generation, polish, audit, and systemization
- Track which skills are strongest by agent ecosystem
