---
name: density
provider: codex
description: Audit visual density and whitespace balance. Checks that sections alternate between sparse and dense, avoiding uniform monotony.
user-invokable: true
---

# /density — Density Analysis

Measure the visual density of each section:
- Content-to-whitespace ratio
- Element count per viewport height
- Spacing between major sections
- Internal padding within components

Flag:
- Uniformly dense (need breathing room)
- Uniformly sparse (need to tighten)
- Abrupt density changes (need transitions)

Ideal: rhythmic alternation between dense information and open breathing space.
