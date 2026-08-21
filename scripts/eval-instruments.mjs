#!/usr/bin/env node
// Standing eval for slop-scan + registry starBasis. Exit 1 on any miss.
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const scan = join(here, "slop-scan.mjs");
const failFix = join(here, "fixtures", "slop-fail.txt");
const passFix = join(here, "fixtures", "slop-pass.txt");
const page = join(here, "..", "docs", "site", "index.html");
const registryPath = join(here, "..", "registry", "registry.json");

function run(file) {
  const r = spawnSync(process.execPath, [scan, file], { encoding: "utf8" });
  let report;
  try { report = JSON.parse(r.stdout); } catch { report = { verdict: "PARSE_ERROR", stdout: r.stdout, stderr: r.stderr }; }
  return { code: r.status, report };
}

const fail = run(failFix);
const pass = run(passFix);
const site = run(page);
const errors = [];

if (fail.code !== 1 || fail.report.verdict !== "FAIL") {
  errors.push(`slop-fail fixture must FAIL, got ${fail.report.verdict} exit ${fail.code}`);
}
if (pass.code !== 0 || pass.report.verdict === "FAIL") {
  errors.push(`slop-pass fixture must not FAIL, got ${pass.report.verdict} exit ${pass.code}`);
}
if (site.report.verdict === "FAIL") {
  errors.push(`shipped page hard-failed slop-scan: ${JSON.stringify(site.report.hardFails)}`);
}

const registry = JSON.parse(readFileSync(registryPath, "utf8"));
const BASIS = new Set(["this-repo", "parent-repo", "unmeasured"]);
let parentOnScale = 0;
for (const e of registry.entries) {
  if (!BASIS.has(e.starBasis)) errors.push(`${e.name}: invalid starBasis ${e.starBasis}`);
  if (e.starBasis === "this-repo" && e.stars != null && !e.starRepo) errors.push(`${e.name}: this-repo missing starRepo`);
  if (e.starBasis === "parent-repo") {
    parentOnScale++;
    if (!e.starRepo) errors.push(`${e.name}: parent-repo missing starRepo`);
  }
}
if (parentOnScale < 1) errors.push("expected at least one parent-repo entry");

const thisRepoStars = registry.entries.filter((e) => e.starBasis === "this-repo" && e.stars != null).map((e) => e.stars);
const parentStars = registry.entries.filter((e) => e.starBasis === "parent-repo" && e.stars != null).map((e) => e.stars);
const maxThis = Math.max(...thisRepoStars);
const maxParent = Math.max(...parentStars);
if (maxParent <= maxThis) {
  // not required, but frontend-design should exceed gstack if still a parent pack
}
if (registry.entries.some((e) => e.name === "frontend-design" && e.starBasis !== "parent-repo")) {
  errors.push("frontend-design must be starBasis=parent-repo (anthropics/skills)");
}

if (errors.length) {
  console.error(JSON.stringify({ verdict: "FAIL", errors }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({
  verdict: "PASS",
  slop: { fail: fail.report.verdict, pass: pass.report.verdict, site: site.report.verdict },
  registry: { entries: registry.entries.length, maxThisRepoStars: maxThis, parentRepoEntries: parentOnScale },
}, null, 2));
