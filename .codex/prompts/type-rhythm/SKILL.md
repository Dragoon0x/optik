---
name: type-rhythm
provider: codex
description: Align text spacing to a vertical rhythm baseline. Ensures headings, paragraphs, and other elements maintain consistent vertical flow.
user-invokable: true
---

# /type-rhythm — Vertical Type Rhythm

Establish vertical rhythm:
1. Define baseline from body line-height (e.g., 1.6 * 16px = 25.6px, round to 24px)
2. All heading margin-top: multiples of baseline
3. All heading margin-bottom: baseline or half-baseline
4. Paragraph spacing: one baseline unit
5. List item spacing: half baseline
6. Image heights: multiples of baseline (use object-fit)

Show before/after for spacing corrections.
