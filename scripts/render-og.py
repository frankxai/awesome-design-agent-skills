#!/usr/bin/env python3
"""Render docs/site/og.png from the designed og.html artboard via Chrome headless.
The PNG is a screenshot of the labeled plate, not a redrawn blob chart.
"""
from __future__ import annotations

import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE = HERE.parent / "docs" / "site"
HTML = SITE / "og.html"
OUT = SITE / "og.png"
CHROME = Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")


def main() -> None:
    if not HTML.exists():
        sys.exit(f"missing {HTML} — run node docs/site/build-plate.mjs first")
    if not CHROME.exists():
        sys.exit(f"missing Chrome at {CHROME}")
    OUT.unlink(missing_ok=True)
    html_uri = HTML.resolve().as_uri()
    cmd = [
        str(CHROME),
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        "--window-size=1200,630",
        "--default-background-color=F4F6F8",
        "--virtual-time-budget=8000",
        f"--screenshot={OUT}",
        html_uri,
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    if not OUT.exists() or OUT.stat().st_size < 4000:
        sys.exit(f"screenshot failed: {OUT}")
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes) from {HTML.name}")


if __name__ == "__main__":
    main()
