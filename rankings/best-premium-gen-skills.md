# Best Premium Gen Skills (Image/Video + Design) — L99 Ranked

Ranked by demonstrated ability to produce 95+ outputs when used inside the full agentic loop (research + tokens + critic). Raw gens score low.

## Tier 1 (Canonical in This System — Use These)
1. **premium-visual-gen** (design-agent-skills): The enforced Phase 3 wrapper. Injects exact DESIGN.md tokens + research refs + "ready for critic". Post always routes to visual-qa-gate. Never raw. 2026 premium standard.
2. **gsap-motion-premium** (design-agent-skills): Official GSAP patterns (timelines, ScrollTrigger, performance) + taste + reduced-motion. For any video/motion gen or code export.
3. **modern-logo-design** + **3d-logo-premium best-practice**: Vector master → validated → cinematic 3D application only. Enforces small-size + 1-color tests.
4. **design-loop-evidence** + **visual-qa-gate**: The critic + memory layer that makes gen trustworthy. Scores, inspects, forces iterate or ship.
5. **kinetic-typography** + **typography-scale** + **icon-system**: For type/motion/icon precision in visuals and UI.

## Tier 2 (Strong External / Complementary)
- VoltAgent / awesome-design-md + stitch patterns (for DESIGN.md grounding)
- Official GSAP skills and demos (performance + timeline correctness)
- Anthropic / Vercel frontend-design and reflection skills (critic patterns)
- Remotion + Lottie + dotLottie for deterministic video exports inside loops
- Apple HIG + Linear + Vercel Geist visual references (taste inputs)

## Strict Usage Rules
- Always inside loop-orchestrator.
- Pre-gen: research + DESIGN.md + refs loaded.
- Prompt: use the exact loop-injected template from premium-visual-gen.
- Post-gen: immediate visual-qa-gate + rubrics. Iterate to 95+.
- Evidence: capture with design-loop-evidence.

## Anti-Patterns (Avoid)
- Direct image_gen / higgsfield / "generate a nice logo" without loop context.
- Skipping critic or accepting <90 scores.
- Generic refs (no specific VoltAgent/prior L99 cited).
- Motion as decoration instead of GSAP purposeful timeline.

See full rubrics in ../rubrics/, loop details in design-agent-standards/, and the ADOPTION_SCRIPT for wiring these into any repo.

Top notch = these skills + loop + critic = L99. Anything less is slop.