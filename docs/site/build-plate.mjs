#!/usr/bin/env node
// Compiles the desktop survey plate in index.html from ../../registry/registry.json.
// ONLY this-repo stars set position, area, and axis scale.
// parent-repo entries are hashed marks at a composed y — labeled, never scaled.
// unmeasured standards are hollow rings.
// Run after any registry change: node docs/site/build-plate.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(readFileSync(join(here, "..", "..", "registry", "registry.json"), "utf8"));
const htmlPath = join(here, "index.html");

const PLOT = (e) => e.verdict === "essential";
const SPINE = ["ui-ux-pro-max", "taste-skill", "impeccable", "emilkowalski-skills"];
const BASIS = new Set(["this-repo", "parent-repo", "unmeasured"]);

for (const e of registry.entries) {
  if (!BASIS.has(e.starBasis)) {
    console.error(`entry "${e.name}" missing/invalid starBasis`);
    process.exit(1);
  }
}

const COMPOSE = {
  "gstack":                       { x: 65,  lx: 86,  ly: 118 },
  "openai-codex":                 { x: 205, lx: 225, ly: 132, label: "codex" },
  "gpt-image2-skill":             { x: 185, lx: 196, ly: 371, label: "gpt-image2" },
  "shadcn-ui":                    { x: 305, lx: 250, ly: 98,  label: "shadcn/ui" },
  "ui-ux-pro-max":                { x: 352, lx: 374, ly: 126 },
  "taste-skill":                  { x: 310, lx: 214, ly: 186 },
  "impeccable":                   { x: 345, lx: 246, ly: 217 },
  "emilkowalski-skills":          { x: 318, lx: 204, ly: 282, label: "emilkowalski" },
  "gsap-skills":                  { x: 330, lx: 344, ly: 348 },
  "chrome-devtools-mcp":          { x: 400, lx: 414, ly: 224, label: "devtools mcp" },
  "playwright-mcp":               { x: 392, lx: 406, ly: 272, label: "playwright" },
  "figma-context-mcp":            { x: 408, lx: 420, ly: 322, label: "figma ctx" },
  "stitch-skills":                { x: 470, lx: 481, ly: 352, label: "stitch" },
  "nanobanana-extension":         { x: 455, lx: 464, ly: 424, label: "nanobanana" },
  "grok-build":                   { x: 540, lx: 500, ly: 268, label: "grok build" },
  "awesome-cursorrules":          { x: 600, lx: 520, ly: 238, label: "cursorrules" },
  // parent-repo: composed y (py), never sqrt-scaled
  "frontend-design":              { x: 92,  py: 78,  lx: 108, ly: 74, label: "frontend-design" },
  "vercel-web-design-guidelines": { x: 368, py: 304, lx: 386, ly: 298, label: "vercel wdg" },
  // unmeasured standards (rings)
  "agents-md":                    { x: 295, ry: 455, lx: 240, ly: 442, label: "agents.md" },
  "skills-sh":                    { x: 330, ry: 462, lx: 316, ly: 480, label: "skills.sh" },
  "figma-dev-mode-mcp":           { x: 365, ry: 455, lx: 374, ly: 452, label: "figma mcp" },
  "starlight-design-intelligence": { x: 400, ry: 462, lx: 409, ly: 472, label: "sdi" },
};

const LINES = [
  ["openai-codex", "gpt-image2-skill"],
  ["shadcn-ui", "ui-ux-pro-max"],
  ["chrome-devtools-mcp", "playwright-mcp"],
  ["playwright-mcp", "figma-context-mcp"],
  ["stitch-skills", "nanobanana-extension"],
];

const plotted = registry.entries.filter((e) => PLOT(e) && e.starBasis === "this-repo" && e.stars != null);
const parents = registry.entries.filter((e) => PLOT(e) && e.starBasis === "parent-repo" && COMPOSE[e.name]);
const rings = registry.entries.filter((e) => PLOT(e) && e.starBasis === "unmeasured" && COMPOSE[e.name]);

if (!plotted.length) {
  console.error("no this-repo stars to scale");
  process.exit(1);
}

const maxS = Math.max(...plotted.map((e) => e.stars));
const sq = Math.sqrt(maxS);
const Y = (s) => +(60 + (1 - Math.sqrt(s) / sq) * 380).toFixed(1);
const R = (s) => +(3 + (Math.sqrt(s) / sq) * 15).toFixed(1);
const fmt = (s) => (s >= 99500 ? Math.round(s / 1000) + "k" : s >= 10000 ? Math.round(s / 1000) + "k" : s >= 950 ? (s / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(s));

const node = {};
for (const e of plotted) {
  const c = COMPOSE[e.name];
  if (!c) { console.warn(`⚠ uncomposed this-repo entry "${e.name}" — add COMPOSE placement; skipping`); continue; }
  node[e.name] = { cx: c.x, cy: Y(e.stars), r: R(e.stars), e, c, kind: "star" };
}
for (const e of parents) {
  const c = COMPOSE[e.name];
  node[e.name] = { cx: c.x, cy: c.py, r: 6, e, c, kind: "parent" };
}
for (const e of rings) {
  node[e.name] = { cx: COMPOSE[e.name].x, cy: COMPOSE[e.name].ry, r: 4.5, e, c: COMPOSE[e.name], kind: "ring" };
}

const order = [...plotted].sort((a, b) => b.stars - a.stars).map((e) => e.name)
  .concat(parents.map((e) => e.name))
  .concat(rings.map((e) => e.name));
const sClass = Object.fromEntries(order.map((n, i) => [n, `s${i + 1}`]));

const gratRows = [100000, 10000, 1000];
let svg = "";
for (const g of gratRows) svg += `        <line class="grat" x1="40" y1="${Y(g)}" x2="620" y2="${Y(g)}"/>\n`;
for (const g of gratRows) svg += `        <text class="axis" x="622" y="${(Y(g) + 3).toFixed(1)}">${fmt(g)}</text>\n`;
for (const [x, t] of [[70, "claude code"], [196, "codex"], [318, "universal"], [398, "qa"], [452, "gemini"], [524, "grok"], [580, "cursor"]])
  svg += `        <text class="axis" x="${x}" y="505">${t}</text>\n`;
for (const [a, b] of LINES) {
  if (!node[a] || !node[b] || node[a].kind !== "star" || node[b].kind !== "star") continue;
  svg += `        <polyline class="cline" points="${node[a].cx},${node[a].cy} ${node[b].cx},${node[b].cy}"/>\n`;
}
svg += `        <polyline class="cline spine" points="${SPINE.map((n) => `${node[n].cx},${node[n].cy}`).join(" ")}"/>\n`;
for (const name of order) {
  const n = node[name]; if (!n) continue;
  const label = n.c.label ?? name;
  const lx = n.c.lx ?? (n.cx + n.r + 6), ly = n.c.ly ?? (n.cy + 3);
  if (n.kind === "ring") {
    svg += `        <g class="cg"><circle class="ringed ${sClass[name]}" cx="${n.cx}" cy="${n.cy}" r="${n.r}"/><text class="lbl n" x="${lx}" y="${ly}">${label}</text></g>\n`;
  } else if (n.kind === "parent") {
    const half = 5;
    svg += `        <g class="cg"><rect class="parent ${sClass[name]}" x="${(n.cx - half).toFixed(1)}" y="${(n.cy - half).toFixed(1)}" width="10" height="10" transform="rotate(45 ${n.cx} ${n.cy})"/><text class="lbl n" x="${lx}" y="${ly}">${label} <tspan class="n">parent ${fmt(n.e.stars)}</tspan></text></g>\n`;
  } else {
    const spine = SPINE.includes(name) ? " spine" : "";
    svg += `        <g class="cg"><circle class="star${spine} ${sClass[name]}" cx="${n.cx}" cy="${n.cy}" r="${n.r}"/><text class="lbl" x="${lx}" y="${ly}">${label} <tspan class="n">${fmt(n.e.stars)}</tspan></text></g>\n`;
  }
}
svg += `        <text class="axis" x="452" y="160" fill="var(--signal-deep)">— the spine</text>`;

const html = readFileSync(htmlPath, "utf8");
const START = "<!-- plate:auto:start -->", END = "<!-- plate:auto:end -->";
const si = html.indexOf(START), ei = html.indexOf(END);
if (si < 0 || ei < 0) { console.error("markers not found in index.html"); process.exit(1); }
const next = html.slice(0, si + START.length) + "\n" + svg + "\n        " + html.slice(ei);
writeFileSync(htmlPath, next);
console.log(`plate compiled: ${plotted.length} this-repo stars + ${parents.length} parent + ${rings.length} rings, max=${maxS} (this-repo only), audit=${registry.auditDate}`);
