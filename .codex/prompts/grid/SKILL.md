---
name: grid
provider: codex
description: Apply 8px grid system with automatic snap correction. Finds all spacing values not aligned to the grid and snaps them to the nearest valid value.
user-invokable: true
---

# /grid — 8px Grid Alignment

Scan all spacing values (padding, margin, gap, width, height) and:
1. Identify values not divisible by 4 (or 8 for strict mode)
2. Snap each to the nearest grid value
3. Show before/after for each correction

The spacing scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

Strict mode (8px): 0, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128

Show total corrections made and percentage of values that were already on-grid.
