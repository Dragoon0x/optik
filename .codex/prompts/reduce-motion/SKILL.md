---
name: reduce-motion
provider: codex
description: Add prefers-reduced-motion support. Wraps existing animations in a media query and provides static fallbacks.
user-invokable: true
---

# /reduce-motion — Reduced Motion Support

For every animation and transition in the code:
1. Wrap in @media (prefers-reduced-motion: no-preference) { }
2. Add @media (prefers-reduced-motion: reduce) with:
   - animation-duration: 0.01ms
   - transition-duration: 0.01ms
   - Preserve final states (don't hide content that animates in)
3. Test that the page is fully usable without any motion
