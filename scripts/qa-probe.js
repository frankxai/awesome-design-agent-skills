/* QA probe — inject this whole file via javascript_tool (or gstack eval)
   on the live page. Returns one JSON evidence block. Run per scheme × viewport.
   Pure read-only; no DOM mutation except a scroll round-trip for reveal testing. */
(async () => {
  const out = { url: location.href, vw: innerWidth, vh: innerHeight,
    scheme: matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" };

  out.hScroll = document.documentElement.scrollWidth - innerWidth;
  try { await document.fonts.ready; } catch {}
  out.fonts = document.fonts.status;

  const lum = (c) => { const m = c.match(/\d+(\.\d+)?/g); if (!m) return null;
    const [r, g, b] = m.slice(0, 3).map(Number).map((v) => { v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b);
    if (l1 == null || l2 == null) return null;
    return +(((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2)); };
  const bgOf = (el) => { let e = el; while (e) {
    const bg = getComputedStyle(e).backgroundColor;
    if (bg && !/rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)|transparent/.test(bg)) return bg;
    e = e.parentElement; } return getComputedStyle(document.body).backgroundColor; };

  const bodyCs = getComputedStyle(document.body);
  out.contrast = { body: ratio(bodyCs.color, bodyCs.backgroundColor) };
  const lowContrast = [];
  for (const el of document.querySelectorAll("a, button, h1, h2, h3, p, li, span, td, th, figcaption")) {
    const r = el.getBoundingClientRect(); if (r.width < 2 || r.height < 2) continue;
    const cs = getComputedStyle(el); if (cs.visibility === "hidden" || +cs.opacity === 0) continue;
    if (!el.textContent.trim()) continue;
    const cr = ratio(cs.color, bgOf(el)); if (cr == null) continue;
    const px = parseFloat(cs.fontSize);
    const bold = +cs.fontWeight >= 700;
    const large = px >= 24 || (px >= 18.66 && bold);
    const min = large ? 3 : 4.5;
    if (cr < min) lowContrast.push({ text: el.textContent.trim().slice(0, 40), tag: el.tagName, ratio: cr, px });
  }
  out.lowContrast = lowContrast.slice(0, 12); out.lowContrastCount = lowContrast.length;

  out.deadHrefs = [...document.querySelectorAll("a")]
    .filter((a) => { const h = a.getAttribute("href"); return !h || h === "#"; }).length;

  const tt = [...document.querySelectorAll("a.btn, button, ol a, nav a, [role=button]")]
    .filter((a) => { const r = a.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && r.height < 44 && getComputedStyle(a).display !== "inline"; });
  out.smallTargets = tt.length;

  let tc = 0, lom = 0;
  for (const svg of document.querySelectorAll("svg")) {
    if (getComputedStyle(svg).display === "none") continue;
    const labels = [...svg.querySelectorAll("text")].filter((t) => t.textContent.trim());
    const marks = [...svg.querySelectorAll("circle, rect.mark, rect.parent, path.mark")];
    for (let i = 0; i < labels.length; i++) for (let j = i + 1; j < labels.length; j++) {
      const a = labels[i].getBoundingClientRect(), b = labels[j].getBoundingClientRect();
      if (a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom) tc++;
    }
    for (const t of labels) { const a = t.getBoundingClientRect();
      for (const c of marks) { const b = c.getBoundingClientRect();
        if (a.left < b.right - 4 && b.left + 4 < a.right && a.top < b.bottom - 4 && b.top + 4 < a.bottom) lom++; } }
  }
  out.svgTextCollisions = tc; out.svgLabelOverMark = lom;

  const y0 = scrollY;
  scrollTo(0, document.body.scrollHeight);
  await new Promise((r) => setTimeout(r, 2400));
  scrollTo(0, y0);
  await new Promise((r) => setTimeout(r, 300));
  const noAnim = document.createElement("style");
  noAnim.textContent = "*{transition:none!important;animation:none!important}";
  document.head.appendChild(noAnim);
  await new Promise((r) => setTimeout(r, 60));
  let stuck = 0;
  for (const el of document.querySelectorAll("section, main > div, article, .reveal")) {
    const r = el.getBoundingClientRect();
    if (r.height > 40 && +getComputedStyle(el).opacity < 0.05) stuck++;
  }
  noAnim.remove();
  out.stuckHidden = stuck;
  out.pageVisibility = document.visibilityState;

  out.verdictHints = {
    pass: out.hScroll <= 0 && out.fonts === "loaded" && out.deadHrefs === 0 &&
      out.smallTargets === 0 && tc === 0 && lom === 0 && stuck === 0 && lowContrast.length === 0,
  };
  return JSON.stringify(out, null, 1);
})()
