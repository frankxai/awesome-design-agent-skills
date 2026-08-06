# Best design audit skills

This ranking focuses on resources that help agents critique weak interfaces and identify why a UI feels generic, cluttered, or low-trust.

## What this ranking rewards

- Sharp critique language
- Ability to detect slop patterns
- Attention to usability and visual hierarchy
- Actionable recommendations instead of vague taste comments

## Current top picks

### 1. Impeccable detector plus human critique

**Why it leads:** it combines a deterministic 59-rule scan with named design
operations such as critique, audit, normalize, clarify, harden, optimize, and
distill. Deterministic findings are reproducible; human judgment handles context.

### 2. Vercel `web-design-guidelines`

**Why it matters:** it fetches the current official guideline source and reports
terse `file:line` findings, making it strong for repeatable UI compliance review.

### 3. Starlight Design Intelligence release gates

**Why it matters:** it ties desktop/mobile/reduced-motion captures, typography,
accessibility, performance, claims, privacy, production commit, independent
verification, and rollback into one release contract.

### 4. Taste Skill preflight

**Why it matters:** it catches generic composition, weak hierarchy, excessive
cards/pills, placeholder icons, unearned motion, and missing visual assets before
implementation on marketing surfaces.

### 5. Playwright + axe + Lighthouse

**Why it matters:** coded checks provide browser-path, accessibility, layout,
console, link, and performance evidence. They complement taste; they do not score it.

See [the end-to-end stack](./end-to-end-brand-design-stack.md) for the required
maker/verifier/approver separation and production receipt.

## Common failure patterns an audit skill should catch

- weak type hierarchy
- overuse of neutral grays
- inconsistent spacing rhythm
- generic card-grid sameness
- shallow empty states and loading states
- poor CTA emphasis
- excessive decorative gradients or glassmorphism without purpose
