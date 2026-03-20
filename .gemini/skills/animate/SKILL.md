---
name: animate
description: Add purposeful motion and transitions to the interface. Focuses on high-impact moments: page load reveals, hover states, and scroll-triggered entries. Not decorative jitter.
user-invokable: true
---

# /animate — Purposeful Motion

Add motion that serves a purpose:

**Page load:** Staggered fade-up reveals for above-fold content. Use animation-delay in 80-120ms increments. Total reveal sequence should complete within 600ms.

**Hover states:** Scale (1.02-1.05), subtle shadow lift, color transitions. Duration: 200-300ms. Easing: var(--ease-spring) for playful, var(--ease-out) for refined.

**Scroll reveals:** Elements fade in and translate 20-30px as they enter viewport. Use IntersectionObserver. Stagger siblings.

**Transitions:** All interactive state changes (hover, focus, active) should have transition declarations. Minimum: color, background-color, border-color, box-shadow, transform.

Always include prefers-reduced-motion: reduce media query that disables animations.
