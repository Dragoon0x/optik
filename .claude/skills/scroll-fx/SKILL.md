---
name: scroll-fx
description: Add scroll-triggered reveals and parallax effects. Uses IntersectionObserver for reveals and CSS scroll-driven animations for parallax.
user-invokable: true
---

# /scroll-fx — Scroll Effects

Add scroll-based effects:

**Reveal on scroll:** Elements fade in and translate up 20-30px as they enter the viewport.
- Use IntersectionObserver with threshold: 0.1
- Stagger siblings with 80-120ms delays
- One-shot (don't re-hide on scroll up)

**Parallax:** Background layers move at different rates.
- Use CSS scroll-driven animations where supported
- Fall back to transform: translateY with scroll listeners
- Keep subtle (0.1-0.3 rate difference)

Always respect prefers-reduced-motion.
