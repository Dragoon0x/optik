---
name: transition
description: Audit and improve CSS transition declarations. Replace generic easing with intentional curves. Ensure consistent durations.
user-invokable: true
---

# /transition — Transition Tuning

Review all transition declarations:
1. Replace 'ease' with contextual cubic-bezier curves
2. Standardize durations (hover: 200ms, state change: 300ms, layout: 400ms)
3. Ensure all interactive properties are transitioned
4. Remove transitions on non-interactive elements
5. Add will-change hints for frequently animated properties

Provide before/after for each change.
