# How Elite Web Design Teams Actually Work

A sourced field study of how the world's best studios and in-house teams run web work — distilled so agent swarms can execute the same discipline. Every named-studio claim carries a link; industry-consensus generalizations are flagged as such.

This document is the human-process backbone behind the estate conductor `/pwo` (Premium Web OS). `/pwd` and `/studio` are retired aliases for that loop — not a second pipeline. Pair it with the [anti-slop rubric](../rubrics/anti-slop-rubric.md) and the [end-to-end stack ranking](../rankings/end-to-end-brand-design-stack.md).

---

## A. Phase-by-phase SOP

| # | Phase | Goal | Key artifacts | Roles | Review gate | Timebox* |
|---|-------|------|---------------|-------|--------------|------------|
| 1 | **Discovery & strategy** | Understand business, audience, competitive field before any visual work | Creative brief, stakeholder interviews, competitive audit, positioning statement, success metrics | Strategist, producer, CD (sponsor) | Sign-off on brief + success criteria | 1–3 wks |
| 2 | **Brand & verbal positioning** | Establish the verbal spine — positioning, voice pillars, naming — before design has anything to hang off | Positioning statement, voice/tone pillars ([Mailchimp model](https://styleguide.mailchimp.com/voice-and-tone/)), naming territories ([namestorming](https://www.forbes.com/councils/forbesagencycouncil/2024/03/19/namestorming-the-artful-process-of-naming-a-brand/)), messaging framework (StoryBrand-style) | Brand strategist, copywriter | Voice/positioning workshop; trademark screen if naming | 1–2 wks |
| 3 | **Content-first & narrative architecture** | Draft the real story arc and real copy *before* layout | Content wireframes ([Boulton: "Structure First, Content Always"](https://markboulton.co.uk/journal/structure-first-content-always/)), page-level narrative arc (hero promise → proof → product truth → CTA), sitemap/IA, copy deck | Content strategist, UX/IA | Narrative review with real (not lorem) copy | 1–2 wks, parallel to 4 |
| 4 | **Art direction** | Set and pressure-test visual direction via *deconstructed* references, never copied surface style | Reference deconstruction board, [style tiles](https://www.creativebloq.com/web-design/style-tiles-4132333) (type pairing, color, UI sample, imagery direction), 2–3 divergent directions | Creative/art director, visual designer | Internal creative review; client picks 1 of 2–3 | 1–2 wks |
| 5 | **Wireframes / IA** | Lock structure, hierarchy, flow independent of visual polish | Low-fi wireframes per device class (not one layout reflowed), user flows, component inventory | UX/IA designer | UX crit + usability walkthrough | ~1 wk |
| 6 | **High-fidelity design** | Execute the chosen direction at full fidelity, desktop/tablet/mobile as **distinct experiences** *(generalized)* | Hi-fi comps per device class, design tokens, component library | Visual/UI designer, design-system owner | Design crit ([Figma formats](https://www.figma.com/blog/design-critiques-at-figma/), max 2 topics/60 min) + AD sign-off | 2–4 wks |
| 7 | **Motion language** | Define a *systemic* motion language tied to hierarchy and brand personality, not one-off flourishes | Motion principles doc ([Material](https://www.designsystems.com/5-steps-for-including-motion-design-in-your-system/); [IBM Carbon](https://carbondesignsystem.com/elements/motion/overview/)), key-transition prototypes, duration/easing tokens | Motion designer, design engineer | "Does each animation communicate state/hierarchy, or is it decorative?" | 1–2 wks, parallel |
| 8 | **Build handshake** | Design → production without "throw it over the wall" | Token-referenced specs ([Dev Mode handoff](https://www.figma.com/best-practices/guide-to-developer-handoff/)), component-by-component build, staging | Design engineer + designer, paired | Build-vs-comp parity review, done together | Continuous |
| 9 | **QA** | Verify the build holds craft intent across browsers/devices/ability, inside the performance budget | Cross-viewport visual-regression report (375/768/1440 *(generalized)*), a11y audit with real assistive-tech users (scanners catch [~30% of issues](https://eyeondesign.aiga.org/in-web-design-accessibility-shouldnt-be-an-afterthought/)), [performance-budget report](https://web.dev/articles/performance-budgets-101) | QA/a11y lead, perf engineer | Go/no-go — ship blocked until budget + a11y + parity pass | 3–5 days |
| 10 | **Launch & handover** | Ship a *maintainable system*, not just a page | Handover doc, decision log, token documentation, monitoring plan | Producer, design engineer, CD | Launch retro | 2–3 days |

\* Timeboxes are synthesized industry-typical ranges; studios do not publish exact durations.

Two structural findings:

- **No sequential handoff between design and engineering.** [Linear's Karri Saarinen](https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/): "When everyone understands how designs are implemented, and shares responsibility for the result, we're far more likely to achieve high quality." [Vercel's Design Engineering team](https://vercel.com/blog/design-engineering-at-vercel) works the same way; [darkroom.engineering](https://darkroom.engineering/about) frames it as engineers who "speak design fluently."
- **Content and structure lock before visual polish.** [Boulton](https://markboulton.co.uk/journal/structure-first-content-always/): you can't deliver a comp for every viewport, so design the content structure first and let visual treatment follow.

---

## Review culture & taste calibration

- **Critique ≠ review.** [Figma](https://www.figma.com/blog/design-critiques-at-figma/) excludes product decisions from critique scope; [thecrit.co](https://thecrit.co/resources/design-critique-vs-design-review): "critique makes designs better, review makes decisions about them." Conflating them turns critique into status theater.
- **Figma's critique formats** matched to problem type: Standard, Jams/Crazy-8s, Pair Design, Silent/async, Paper, FYI. Rules: max 2 topics per hour, prep ahead, note-taker assigned, presenter states the feedback type wanted.
- **Awwwards' rubric weights: Design 40% / Usability 30% / Creativity 20% / Content 10%** — a minimum of 18 jurors, outlier scores auto-eliminated ([source](https://www.awwwards.com/about-evaluation/)). Fundamentals (70%) outweigh cleverness, but all four are load-bearing.
- **Taste is calibration, not preference.** [Emil Kowalski's three stages](https://emilkowal.ski/ui/developing-taste): exposure → analysis (rationalize *why* something resonates) → deliberate practice. Rubric-driven review moves the conversation from "I like X" to "X is more appropriate."
- **Red-team pass** (recommendation, not attested studio practice): before QA, one pass whose only job is to argue the direction is generic, find the weakest screen, and stress-test the anti-generic principles below.

---

## B. 15 anti-generic principles

1. **Typography is the primary brand device, not a wrapper.** Obys: "typography shapes perception"; [Swiss style](https://swissthemes.design/insights/swiss-design-for-web-designers) treats type as the organizing tool.
2. **Content structure locks before visual comps** ([Boulton](https://markboulton.co.uk/journal/structure-first-content-always/)).
3. **Opinionated beats flexible.** [Saarinen](https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/): "You can only create a great product if you design for someone in particular."
4. **Small, senior teams over large diluted ones.** Saarinen: more people dilutes execution; Obys stays under 10 on purpose.
5. **No handoff — shared ownership through to shipped code** (Linear, Vercel, darkroom.engineering).
6. **Motion is systemic, not decorative.** Studio Freight defines behavioral rules per element until a system emerges; Carbon scales duration with distance; "when applied properly, motion goes unnoticed."
7. **Radical reduction as a signature.** [Rally's one-page portfolio](https://onepagelove.com/rallyinteractive); Apple's one-message-one-CTA heroes.
8. **Real proof beats generic superlatives.** [925studios](https://www.925studios.co/blog/ai-slop-web-design-guide): slop copy is "grammatically correct, topically relevant, and completely forgettable" — apply the founder-voice test.
9. **Distinctive, specific imagery over stock or too-smooth AI illustration** — real product screenshots, custom illustration tied to the brand.
10. **Semantic color systems, not decorative gradients.** Purple-to-blue is the "safe" generated choice; craft gives every color a job (`--color-action-primary`).
11. **Deliberate non-uniformity.** Identical padding/radius/card-heights everywhere reads as template, not craft.
12. **Accessibility built in from the first sketch** ([AIGA](https://eyeondesign.aiga.org/in-web-design-accessibility-shouldnt-be-an-afterthought/)): human testing with disabled users is the craft; scanners catch ~30%.
13. **Performance is a design constraint set at kickoff** ([performance budgets](https://web.dev/articles/performance-budgets-101)), not an engineering cleanup pass.
14. **Chaptered narrative over generic infinite scroll.** Apple's problem → feature → outcome sequencing; lineage to [NYT "Snow Fall"](https://www.maglr.com/blog/best-scrollytelling-examples).
15. **Concept-driven direction from deconstructed references — never copied surface style** (Obys; the style-tile method exists to argue direction from principles).

---

## C. Language & voice mini-guide

**Voice is constant, tone is situational** ([Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/)): plainspoken · genuine · translator · dry humor — and "it's always more important to be clear than entertaining."

**Customer is the hero, brand is the guide** ([StoryBrand](https://www.gravityglobal.com/blog/complete-guide-storybrand-framework)): character → problem → guide (empathy + authority) → plan → call to action → success/avoided failure. A brand that narrates itself as the hero has lost the reader.

**Apple's register** ([analysis](https://www.copystyleguide.com/apple-tone-of-voice)): no over-explaining, confident without arrogance, aspirational but grounded, rhythm via fragments. "It just works."

### Do / don't

| Don't (slop) | Do (craft) | Why |
|---|---|---|
| "We leverage cutting-edge AI to unlock seamless workflows." | "It just works." | Concrete claim, zero hedge |
| Button: "Submit" | Button: "Start free trial" | Buttons answer "what happens when I click" |
| "Error: Invalid input." | "Password must be at least 8 characters and include a number." | What happened + how to fix |
| Feature-first opening paragraph | Name the problem in the H1, resolve it in the first section | [PAS](https://www.gogochimp.com/blog/copywriting-frameworks) — trust is the first hurdle |
| Brand as hero | Customer as hero, brand as guide | StoryBrand |
| "may help," "can potentially," "aims to" | Direct, falsifiable claims | Hedging reads as generated |
| Headline promises X, CTA asks Y | Message / action / proof aligned | Most common hero failure |
| "In today's rapidly evolving landscape…" | Open with the problem or the proof | Throat-clearing is a top slop tell |
| delve · leverage · synergy · seamless · unlock · elevate · robust · landscape · crucial · pivotal | Plain concrete verbs, specific nouns | 3+ in one paragraph signals generated copy |

---

## D. Source index

Process/studios: [Instrument](https://lbbonline.com/news/Instrument-Named-Campaign-US-Design-Studio-of-the-Year-2026) · [Obys](https://obys.agency/) · [darkroom.engineering](https://darkroom.engineering/about) · [Studio Freight](https://tympanus.net/codrops/2026/07/29/studio-freight-moving-missions-forward/) · [Active Theory](https://www.awwwards.com/interview-active-theory-wins-developer-site-of-the-year-at-awwwards-london.html) · [Locomotive](https://locomotive.ca/en/agency) · [Metalab](https://tympanus.net/codrops/2026/02/16/inside-metalab-silicon-valleys-best-kept-design-secret/) · [Unseen](https://www.awwwards.com/unseenstudio/) · [BASIC/DEPT](https://www.basicagency.com/about) · [Buzzworthy](https://www.awwwards.com/case-study-buzzworthy-studio.html) · [Pentagram methodology (secondary source)](https://www.metabrand.digital/guides/startup-branding-guide/branding-process)

In-house: [Vercel Design Engineering](https://vercel.com/blog/design-engineering-at-vercel) · [Saarinen's 10 rules](https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/) · [Stripe's writing culture](https://slab.com/blog/stripe-writing-culture/)

Review: [Figma critiques](https://www.figma.com/blog/design-critiques-at-figma/) · [thecrit.co](https://thecrit.co/resources/design-critique-vs-design-review) · [Awwwards evaluation](https://www.awwwards.com/about-evaluation/) · [Kowalski, Developing Taste](https://emilkowal.ski/ui/developing-taste)

Voice: [Mailchimp](https://styleguide.mailchimp.com/voice-and-tone/) · [StoryBrand](https://www.gravityglobal.com/blog/complete-guide-storybrand-framework) · [Microcopy](https://www.justinmind.com/ux-design/microcopy) · [925studios AI-slop guide](https://www.925studios.co/blog/ai-slop-web-design-guide)

Craft: [Style tiles](https://www.creativebloq.com/web-design/style-tiles-4132333) · [Content wireframes](https://www.smashingmagazine.com/2016/02/create-content-wireframes-for-responsive-design/) · [Carbon motion](https://carbondesignsystem.com/elements/motion/overview/) · [Performance budgets](https://web.dev/articles/performance-budgets-101) · [A11y — AIGA](https://eyeondesign.aiga.org/in-web-design-accessibility-shouldnt-be-an-afterthought/) · [Handoff](https://www.figma.com/best-practices/guide-to-developer-handoff/) · [Native vs web design](https://dockyard.com/blog/2020/03/03/designing-for-native-apps-vs-progressive-web-apps) · [Visual regression checklist](https://qawerk.com/blog/visual-regression-testing-checklist/)

Flagged generalizations: SOP timeboxes; device-class-as-distinct-experience; the QA viewport matrix; the red-team pass recommendation.
