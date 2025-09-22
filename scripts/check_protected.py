#!/usr/bin/env python3
import yaml
import subprocess
import sys
from pathlib import Path

# Load quality gate rules
with open(".ai/quality-gate.yml", "r") as f:
    rules = yaml.safe_load(f)["rules"]

# Get changed files compared to last commit
result = subprocess.run(
    ["git", "diff", "--name-only", "--cached"],
    capture_output=True,
    text=True
)
changed_files = result.stdout.strip().split("\n")

# Enforce rules
for rule in rules:
    path = rule["path"]
    protect = rule.get("protect", False)

    if protect:
        for file in changed_files:
            if file and Path(file).match(path):
                print(f"❌ ERROR: Protected file modified: {file}")
                sys.exit(1)

print("✅ No protected files modified.")

