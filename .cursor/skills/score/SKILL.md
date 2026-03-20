---
name: score
description: Run a full 0-100 OPTIK design quality analysis on the current interface or component. Produces category scores for Typography, Color, Layout, Motion, and Accessibility with specific issue callouts and fix suggestions.
user-invokable: true
---

# /score — Design Quality Score

Run the full OPTIK scoring engine against the current codebase or specified component.

## Output Format

```
OPTIK Score: 78/100 [■■■■■■■■░░] Strong

Typography   82  [■■■■■■■■░░]  Scale ratio: 1.25, hierarchy depth: 5
Color        75  [■■■■■■■░░░]  Palette: 8 colors, contrast: AA pass
Layout       84  [■■■■■■■■░░]  Grid-aligned: 94%, responsive: 3 breakpoints
Motion       60  [■■■■■■░░░░]  3 transitions, no reduced-motion fallback
Accessibility 72  [■■■■■■■░░░]  Focus styles: yes, semantic HTML: partial

Issues (5):
  ⚠ No prefers-reduced-motion query [-10 motion]
  ⚠ 2 spacing values off 4px grid [-6 layout]
  ⚠ Missing max-width on .content [-10 layout]
  ✓ Type scale consistent (ratio 1.25)
  ✓ All colors use CSS custom properties
```

## Scoring Weights
Typography: 25% | Color: 25% | Layout: 25% | Motion: 10% | Accessibility: 15%

## Thresholds
- 90-100: Exceptional — ship with confidence
- 80-89: Strong — minor refinements only
- 65-79: Needs work — address issues before shipping
- 40-64: AI slop detected — significant rework required
- 0-39: Design emergency — start over with intentional decisions

Run /score after every major change. Track improvement with /trend.
