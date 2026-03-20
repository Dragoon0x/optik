---
name: responsive
description: Check responsive behavior at key breakpoints. Verifies layout doesn't break, text remains readable, touch targets meet minimum sizes, and spacing scales appropriately.
user-invokable: true
---

# /responsive — Responsive Verification

Check the interface at these breakpoints:
- 320px (small mobile)
- 375px (standard mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1280px (standard desktop)
- 1440px (large desktop)

At each breakpoint verify:
1. No horizontal overflow
2. Text line measure stays 45-75 characters
3. Touch targets minimum 44x44px on mobile
4. Spacing scales down proportionally
5. Images/media don't overflow
6. Navigation is accessible
7. No content is hidden on mobile that's essential

Report issues at each breakpoint with suggested fixes.
