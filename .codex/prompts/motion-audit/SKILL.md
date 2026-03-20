---
name: motion-audit
provider: codex
description: Check all motion declarations for purpose, performance, and accessibility. Flags decorative jitter, layout-animating properties, and missing reduced-motion fallbacks.
user-invokable: true
---

# /motion-audit — Motion Audit

Audit every animation and transition:
1. List all transition properties and durations
2. List all @keyframes animations
3. Flag animations on layout properties (width, height, top, left) — should use transform
4. Flag durations over 400ms without justification
5. Check for prefers-reduced-motion fallback
6. Count simultaneous animations (>3 is too many)
7. Verify custom easing curves are used (not just 'ease')
