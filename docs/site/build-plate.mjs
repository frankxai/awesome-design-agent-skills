#!/usr/bin/env node
// Compiles desktop + mobile survey plates in index.html from registry.json.
// ONLY this-repo stars set position, area, axis, and mobile rank.
// parent-repo entries are hashed marks — labeled, never scaled or ranked.
// Also writes plate.json (for OG raster) after any registry change:
//   node docs/site/build-plate.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(readFileSync(join(here, "..", "..", "registry", "registry.json"), "utf8"));
const htmlPath = join(here, "index.html");
const ogHtmlPath = join(here, "og.html");

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
  "frontend-design":              { x: 92,  py: 78,  lx: 108, ly: 74, label: "frontend-design" },
  "vercel-web-design-guidelines": { x: 368, py: 304, lx: 386, ly: 298, label: "vercel wdg" },
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
if (!plotted.length) { console.error("no this-repo stars to scale"); process.exit(1); }

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

function splice(html, start, end, inner) {
  const si = html.indexOf(start), ei = html.indexOf(end);
  if (si < 0 || ei < 0 || ei < si) {
    console.error(`markers not found: ${start}`);
    process.exit(1);
  }
  return html.slice(0, si + start.length) + "\n" + inner + "\n        " + html.slice(ei);
}

const gratRows = [100000, 10000, 1000];
let svg = "";
for (const g of gratRows) svg += `        <line class="grat" x1="40" y1="${Y(g)}" x2="620" y2="${Y(g)}"/>\n`;
for (const g of gratRows) svg += `        <text class="axis" x="622" y="${(Y(g) + 3).toFixed(1)}">${fmt(g)}</text>\n`;
const bands = [[70, "claude code"], [196, "codex"], [318, "universal"], [398, "qa"], [452, "gemini"], [524, "grok"], [580, "cursor"]];
for (const [x, t] of bands) svg += `        <text class="axis" x="${x}" y="505">${t}</text>\n`;
const lineSegs = [];
for (const [a, b] of LINES) {
  if (!node[a] || !node[b] || node[a].kind !== "star" || node[b].kind !== "star") continue;
  lineSegs.push({ x1: node[a].cx, y1: node[a].cy, x2: node[b].cx, y2: node[b].cy, spine: false });
  svg += `        <polyline class="cline" points="${node[a].cx},${node[a].cy} ${node[b].cx},${node[b].cy}"/>\n`;
}
svg += `        <polyline class="cline spine" points="${SPINE.map((n) => `${node[n].cx},${node[n].cy}`).join(" ")}"/>\n`;
lineSegs.push({ spine: true, pts: SPINE.map((n) => ({ x: node[n].cx, y: node[n].cy })) });
for (const name of order) {
  const n = node[name]; if (!n) continue;
  const label = n.c.label ?? name;
  const lx = n.c.lx ?? (n.cx + n.r + 6), ly = n.c.ly ?? (n.cy + 3);
  if (n.kind === "ring") {
    svg += `        <g class="cg"><circle class="ringed ${sClass[name]}" cx="${n.cx}" cy="${n.cy}" r="${n.r}"/><text class="lbl n" x="${lx}" y="${ly}">${label}</text></g>\n`;
  } else if (n.kind === "parent") {
    const half = 5;
    svg += `        <g class="cg"><rect class="parent ${sClass[name]}" x="${(n.cx - half).toFixed(1)}" y="${(n.cy - half).toFixed(1)}" width="10" height="10" transform="rotate(45 ${n.cx} ${n.cy})"/><text class="lbl n" x="${lx}" y="${ly}">${label}</text></g>\n`;
  } else {
    const spine = SPINE.includes(name) ? " spine" : "";
    svg += `        <g class="cg"><circle class="star${spine} ${sClass[name]}" cx="${n.cx}" cy="${n.cy}" r="${n.r}"/><text class="lbl" x="${lx}" y="${ly}">${label} <tspan class="n">${fmt(n.e.stars)}</tspan></text></g>\n`;
  }
}
svg += `        <text class="axis" x="452" y="160" fill="var(--signal-deep)">— the spine</text>`;

const top10 = [...plotted].sort((a, b) => b.stars - a.stars).slice(0, 10);
const max10 = top10[0].stars;
const sq10 = Math.sqrt(max10);
const mY = (s) => +(46 + (1 - Math.sqrt(s) / sq10) * 100).toFixed(1);
const mR = (s) => +(4.2 + (Math.sqrt(s) / sq10) * 11).toFixed(1);
const mX = (i) => +(26 + i * 33.2).toFixed(1);
let msvg = "";
msvg += `        <line class="grat" x1="16" y1="160" x2="344" y2="160"/>\n`;
const spineTop = top10.filter((e) => SPINE.includes(e.name));
if (spineTop.length >= 2) {
  const pts = spineTop.map((e) => {
    const i = top10.findIndex((x) => x.name === e.name);
    return `${mX(i)},${mY(e.stars)}`;
  });
  msvg += `        <polyline class="cline spine" points="${pts.join(" ")}"/>\n`;
}
top10.forEach((e, i) => {
  const c = COMPOSE[e.name] || {};
  const label = c.label ?? e.name;
  const spine = SPINE.includes(e.name) ? " spine" : "";
  const x = mX(i), y = mY(e.stars), r = mR(e.stars);
  msvg += `        <g class="cg"><circle class="star${spine} s${i + 1}" cx="${x}" cy="${y}" r="${r}"/><text class="lbl" x="${(x - 3).toFixed(1)}" y="182">${i + 1}</text></g>\n`;
  void label;
});
msvg += `        <text class="axis" x="16" y="26">figure 1 (detail) · ten brightest this-repo</text>`;
const mcaption = top10.map((e, i) => {
  const c = COMPOSE[e.name] || {};
  return `${i + 1} ${c.label ?? e.name} ${fmt(e.stars)}`;
}).join(" · ") + ". Parent-pack stars excluded from this rank. Amber marks the install spine.";

let html = readFileSync(htmlPath, "utf8");
html = splice(html, "<!-- plate:auto:start -->", "<!-- plate:auto:end -->", svg);
html = splice(html, "<!-- mplate:auto:start -->", "<!-- mplate:auto:end -->", msvg);
html = splice(html, "<!-- mcaption:auto:start -->", "<!-- mcaption:auto:end -->", `      ${mcaption}`);
writeFileSync(htmlPath, html);

let ogHtml = readFileSync(ogHtmlPath, "utf8");
ogHtml = splice(ogHtml, "<!-- plate:auto:start -->", "<!-- plate:auto:end -->", svg);
writeFileSync(ogHtmlPath, ogHtml);

const plate = {
  auditDate: registry.auditDate,
  maxS,
  desktop: {
    viewBox: [0, 0, 660, 520],
    nodes: order.map((name) => {
      const n = node[name];
      return {
        name, kind: n.kind, spine: SPINE.includes(name),
        cx: +n.cx, cy: +n.cy, r: +n.r,
        label: n.c.label ?? name,
        stars: n.e.stars,
      };
    }),
    lines: lineSegs,
    grats: gratRows.map((g) => ({ y: +Y(g), label: fmt(g) })),
    bands: bands.map(([x, t]) => ({ x, t })),
  },
  mobile: {
    top10: top10.map((e, i) => ({
      rank: i + 1, name: e.name, label: (COMPOSE[e.name] || {}).label ?? e.name,
      stars: e.stars, spine: SPINE.includes(e.name),
      cx: +mX(i), cy: +mY(e.stars), r: +mR(e.stars),
    })),
  },
};
writeFileSync(join(here, "plate.json"), JSON.stringify(plate, null, 2) + "\n");
console.log(`plate compiled: ${plotted.length} this-repo + ${parents.length} parent + ${rings.length} rings; mobile top10=${top10.map((e) => e.name).join(",")}; max=${maxS}`);
