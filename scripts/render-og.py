#!/usr/bin/env python3
"""Rasterize docs/site/og.png from plate.json. Light-first, 1200x630.
No network. Geometry comes from build-plate.mjs — never hand-plotted.
"""
from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).resolve().parent
PLATE = HERE.parent / "docs" / "site" / "plate.json"
OUT = HERE.parent / "docs" / "site" / "og.png"

PAPER = (244, 246, 248)
INK = (14, 27, 51)
SIGNAL = (180, 83, 9)
DIM = (90, 107, 133)
RULE = (211, 218, 227)
PLATE_BG = (239, 242, 245)

W, H = 1200, 630


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = []
    if bold:
        candidates += [
            r"C:\Windows\Fonts\segoeuib.ttf",
            r"C:\Windows\Fonts\arialbd.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        ]
    candidates += [
        r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\consola.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def main() -> None:
    data = json.loads(PLATE.read_text(encoding="utf-8"))
    desk = data["desktop"]
    im = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(im)

    d.rectangle((0, 0, 8, H), fill=SIGNAL)

    title = font(40, bold=True)
    sub = font(20)
    mono = font(16)
    tiny = font(13)

    d.text((48, 64), "The design-agent", font=title, fill=INK)
    d.text((48, 118), "sky, surveyed.", font=title, fill=INK)
    d.text((48, 196), "this-repo stars only", font=mono, fill=SIGNAL)
    d.multiline_text(
        (48, 240),
        "Filled marks scale with sqrt of\nthat repository's GitHub stars.\nParent packs are diamonds.\nAmber is the install spine.",
        font=sub,
        fill=DIM,
        spacing=8,
    )
    d.text((48, 560), f"awesome-design-agent-skills  ·  {data['auditDate']}", font=tiny, fill=DIM)

    # Plate panel
    ox, oy, pw, ph = 470, 48, 690, 534
    d.rounded_rectangle((ox, oy, ox + pw, oy + ph), radius=4, fill=PLATE_BG, outline=RULE, width=1)

    vb = desk["viewBox"]
    scale = min((pw - 36) / vb[2], (ph - 36) / vb[3])
    tx = ox + 18
    ty = oy + 18

    def P(x, y):
        return (tx + x * scale, ty + y * scale)

    for g in desk["grats"]:
        x1, y = P(40, g["y"])
        x2, _ = P(620, g["y"])
        d.line((x1, y, x2, y), fill=RULE, width=1)
        d.text((x2 + 4, y - 6), g["label"], font=tiny, fill=DIM)

    for b in desk["bands"]:
        x, y = P(b["x"], 505)
        d.text((x, y), b["t"], font=tiny, fill=DIM)

    for ln in desk["lines"]:
        if ln.get("spine"):
            pts = [P(p["x"], p["y"]) for p in ln["pts"]]
            if len(pts) >= 2:
                d.line(pts, fill=SIGNAL, width=2)
        else:
            d.line((P(ln["x1"], ln["y1"]), P(ln["x2"], ln["y2"])), fill=(*INK, ), width=1)

    for n in desk["nodes"]:
        x, y = P(n["cx"], n["cy"])
        r = max(2.5, n["r"] * scale)
        if n["kind"] == "ring":
            d.ellipse((x - r, y - r, x + r, y + r), outline=DIM, width=2)
        elif n["kind"] == "parent":
            s = 5 * scale
            diamond = [(x, y - s), (x + s, y), (x, y + s), (x - s, y)]
            d.polygon(diamond, outline=DIM)
        else:
            fill = SIGNAL if n["spine"] else INK
            d.ellipse((x - r, y - r, x + r, y + r), fill=fill)

    im.save(OUT, "PNG", optimize=True)
    print(f"wrote {OUT} {im.size} from {PLATE.name} maxS={data['maxS']}")


if __name__ == "__main__":
    main()
