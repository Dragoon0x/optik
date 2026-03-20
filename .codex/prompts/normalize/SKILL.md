---
name: normalize
provider: codex
description: Align an interface to its design system standards. Replace one-off values with tokens. Ensure every element uses the system.
user-invokable: true
---

# /normalize — Design System Normalization

Compare the current code against the design system tokens:
1. Replace hardcoded colors with CSS custom properties
2. Replace arbitrary font sizes with type scale values
3. Replace arbitrary spacing with scale values
4. Normalize border-radius to the radius scale
5. Normalize shadows to the elevation system

Goal: zero one-off values. Everything should reference the system.
