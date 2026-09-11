#!/usr/bin/env python3
"""Structural audit for a premium-infographic benchmark run.

This deliberately checks evidence structure, not visual quality.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path


REQUIRED = ("brief.md", "cost-ledger.json", "design-loop-evidence.json")
VALID_COST_STATUS = {"actual", "estimated", "unknown", "not_exposed"}


def fail(message: str) -> None:
    print(f"[FAIL] {message}", file=sys.stderr)
    raise SystemExit(1)


def load_json(path: Path) -> dict:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        fail(f"Cannot read valid JSON from {path}: {exc}")
    if not isinstance(value, dict):
        fail(f"Expected a JSON object in {path}")
    return value


def main() -> None:
    if len(sys.argv) != 2:
        fail("Usage: audit_infographic_run.py <run-directory>")

    root = Path(sys.argv[1]).expanduser().resolve()
    if not root.is_dir():
        fail(f"Run directory not found: {root}")

    missing = [name for name in REQUIRED if not (root / name).is_file()]
    if missing:
        fail("Missing required files: " + ", ".join(missing))

    evidence = load_json(root / "design-loop-evidence.json")
    ledger = load_json(root / "cost-ledger.json")

    artifacts = evidence.get("artifacts")
    checks = evidence.get("checks")
    score = evidence.get("score")
    calls = ledger.get("calls")
    if not isinstance(artifacts, list) or not artifacts:
        fail("Evidence must contain at least one artifact")
    if not isinstance(checks, list) or not checks:
        fail("Evidence must contain checks")
    if not isinstance(score, dict) or not {"total", "max"} <= set(score):
        fail("Evidence score must contain total and max")
    if not isinstance(calls, list):
        fail("Cost ledger calls must be a list")

    for index, call in enumerate(calls):
        if not isinstance(call, dict) or "lane" not in call or "tool" not in call:
            fail(f"Ledger call {index} requires lane and tool")

    prompts = root / "prompts"
    exports = root / "exports"
    if not prompts.is_dir() or not any(prompts.iterdir()):
        fail("Prompts directory is missing or empty")
    if not exports.is_dir() or not any(exports.iterdir()):
        fail("Exports directory is missing or empty")

    inspected = sum(bool(item.get("inspected")) for item in artifacts if isinstance(item, dict))
    print(
        "[OK] Structural audit passed: "
        f"{len(artifacts)} artifacts, {inspected} inspected, "
        f"{len(checks)} checks, {len(calls)} ledger calls, "
        f"score {score['total']}/{score['max']}."
    )


if __name__ == "__main__":
    main()
