---
name: optik-design
description: Design intelligence engine for frontend interfaces. Measures and enforces design quality through scoring algorithms, mathematical scales, and anti-pattern detection. Goes beyond subjective prompting with computable metrics across typography, color, layout, motion, and accessibility. Use when building any frontend UI to ensure output avoids generic AI aesthetics and hits measurable quality thresholds.
user-invokable: false
---

# OPTIK — Design Intelligence Engine

This skill replaces subjective design guidance with measurable intelligence. Every recommendation is backed by a scoring algorithm. Every suggestion comes with a metric. The AI doesn't learn opinions — it runs analysis.

## Design Philosophy

Before writing any code, OPTIK requires three decisions:

1. **Aesthetic commitment** — Pick a direction and commit fully. Brutalist, editorial, maximalist, organic, industrial, retro-futuristic, luxury. Half-commitments produce the worst output. Bold minimalism beats timid maximalism every time.

2. **Design score target** — Set a minimum threshold (default: 75/100). Every decision gets evaluated against the five pillars: Typography, Color, Layout, Motion, Accessibility. If the score drops below target, the AI must fix before continuing.

3. **Anti-pattern enforcement** — OPTIK maintains a strict banlist. Violations are automatic failures.

## The Five Pillars (Scoring)

### 1. Typography (25% of score)

**Mathematical type scales only.** No arbitrary font sizes.

Pick a ratio and compute:
- Minor second: 1.067
- Major second: 1.125
- Minor third: 1.200
- Major third: 1.250
- Perfect fourth: 1.333
- Augmented fourth: 1.414
- Perfect fifth: 1.500

Given a base size (16px) and ratio (1.250), the scale is: 16, 20, 25, 31.25, 39.06, 48.83, 61.04. Round to whole pixels. Use at minimum 5 distinct sizes for proper hierarchy depth.

**Banned fonts (automatic -25 points):**
Inter, Roboto, Arial, Helvetica, system-ui, -apple-system, Open Sans, Lato, Montserrat, Poppins, Nunito, Space Grotesk, Raleway, Source Sans Pro

**Required checks:**
- Line measure: 45-75 characters per line. Compute from font-size and container width.
- Line height: body text 1.5-1.7, headings 1.1-1.3, captions 1.4-1.5
- Font weight usage: minimum 2 weights, maximum 4. Use weight to create hierarchy, not just size.
- Letter-spacing: headings may use -0.01 to -0.03em. All-caps text requires +0.05 to +0.15em.
- Font pairing: one display/serif + one body/sans or mono. Never two similar sans-serif fonts.

### 2. Color (25% of score)

**Palette generation from a single brand color.**

Given one hex value, generate:
- 50-950 shade scale (11 stops) using perceptual lightness interpolation
- Semantic tokens: surface, surface-elevated, text, text-secondary, text-muted, border, border-strong, accent, accent-hover, danger, success, warning
- Dark mode variants that maintain the same contrast ratios

**Contrast requirements (WCAG 2.1):**
- Body text: minimum 4.5:1 (AA)
- Large text (18px+ or 14px bold): minimum 3:1
- Interactive elements: minimum 3:1 against adjacent colors
- Target AAA (7:1) for body text when possible

**Anti-patterns (automatic deductions):**
- Purple gradient on white background: -30 points. The single most identifiable AI slop pattern.
- Pure black (#000000) for text: -5 points. Always tint dark colors with a hue.
- Gray-only palette: -10 points. Even monochrome designs need tinted grays.
- More than 15 unique color values without CSS custom properties: -15 points. Consolidate.
- Using opacity to create shades instead of actual computed colors: -5 points.

**Required implementation:**
- All colors as CSS custom properties (--color-name pattern)
- prefers-color-scheme media query if any dark surface exists
- Minimum 3, maximum 12 intentional colors (excluding shades of the same hue)

### 3. Layout (25% of score)

**Spacing must be systematic, not arbitrary.**

Given a base unit (default: 4px), the spacing scale is:
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

Every padding, margin, and gap value MUST come from this scale. Off-grid values are automatic deductions.

**Grid requirements:**
- Use CSS Grid or Flexbox. No float-based layouts.
- Set max-width on content containers (typically 1100-1280px for full-width, 680-720px for text content)
- Use the gap property instead of margin for spacing between grid/flex children
- Consistent gutter width across the page

**Anti-patterns:**
- Nested cards (cards inside cards): -20 points. Flatten the hierarchy.
- Spacing values not divisible by 4: -3 points each
- No media queries in layouts wider than 600px of content: -15 points
- No max-width constraint on text content: -10 points

**Required checks:**
- Nesting depth: maximum 4 levels of visual containment
- Density audit: sections should alternate between sparse and dense, not be uniformly one or the other
- Responsive verification: layout must work at 320px, 768px, and 1280px minimum

### 4. Motion (10% of score)

**Motion must be purposeful, not decorative.**

Start at 50/100 (neutral). Earn points for intentional motion. Lose points for violations.

**Earning points:**
- Transition declarations on interactive elements: +15
- Custom cubic-bezier easing (not just ease, ease-in-out): +10
- @keyframes for meaningful animations: +15
- Scroll-triggered reveals: +10
- Staggered animation delays for list items: +5
- transform-based animations (GPU-accelerated): +5

**Losing points:**
- Motion without prefers-reduced-motion fallback: -10
- Animations longer than 400ms without justification: -5
- Animating layout properties (width, height, top, left) instead of transform: -10
- More than 3 simultaneous animations competing for attention: -5

**Required easing curves:**
- Standard: cubic-bezier(0.4, 0, 0.2, 1)
- Decelerate (entering): cubic-bezier(0, 0, 0.2, 1)
- Accelerate (exiting): cubic-bezier(0.4, 0, 1, 1)
- Spring: cubic-bezier(0.34, 1.56, 0.64, 1)
- Smooth out: cubic-bezier(0.16, 1, 0.3, 1)

### 5. Accessibility (15% of score)

**Accessibility is scored, not suggested.**

**Required (failure = deduction):**
- :focus-visible styles on all interactive elements: -15 if missing
- Semantic HTML landmarks (header, main, nav, section, footer): -10 if missing
- No outline:none or outline:0 without replacement: -20 if found
- Skip link for keyboard navigation: +5 if present
- ARIA attributes where semantic HTML is insufficient: +5
- Touch targets minimum 44x44px for mobile: -10 if buttons/links are smaller
- prefers-reduced-motion query: -10 if motion exists without it
- prefers-color-scheme query: +10 if present
- Alt text on images: -5 per missing alt
- Color contrast meeting WCAG AA: already counted in Color pillar

## Global Anti-Pattern Registry

These patterns are automatically flagged. Each one triggers specific deductions across the relevant pillar.

| Pattern | Pillar | Deduction | Fix |
|---------|--------|-----------|-----|
| Inter/Roboto/Arial font | Typography | -25 | Use distinctive typeface |
| Purple gradient on white | Color | -30 | Choose a bold, non-generic palette |
| Cards nested inside cards | Layout | -20 | Flatten visual hierarchy |
| No CSS custom properties | Color | -15 | Define all colors as variables |
| outline:none without replacement | Accessibility | -20 | Add :focus-visible styles |
| No media queries | Layout | -15 | Add responsive breakpoints |
| All text same weight | Typography | -10 | Use 2-4 weights for hierarchy |
| Pure black text (#000) | Color | -5 | Tint dark colors |
| Arbitrary spacing values | Layout | -3 each | Snap to 4px/8px grid |
| Generic box-shadow | Layout | -5 | Use elevation system |

## Token Generation

When generating design tokens, output in ALL of these formats simultaneously:

**CSS Custom Properties:**
```css
:root {
  --color-surface: #0A0A0F;
  --color-text: #E8E6E3;
  --type-scale-base: 16px;
  --type-scale-ratio: 1.25;
  --space-unit: 4px;
}
```

**Tailwind Config:**
```js
module.exports = {
  theme: {
    extend: {
      colors: { surface: '#0A0A0F', text: '#E8E6E3' },
      fontSize: { base: '16px', lg: '20px', xl: '25px' },
      spacing: { 1: '4px', 2: '8px', 3: '12px' }
    }
  }
}
```

**W3C Design Tokens (JSON):**
```json
{
  "color": { "surface": { "$value": "#0A0A0F", "$type": "color" } },
  "typography": { "scale-base": { "$value": "16px", "$type": "dimension" } }
}
```

## Execution Protocol

For every frontend task:

1. **Assess** — Determine aesthetic direction, target score, constraints
2. **Generate** — Build the design system (type scale, palette, spacing, tokens)
3. **Implement** — Write code following all five pillar requirements
4. **Score** — Run the internal scoring algorithm. If below target, iterate.
5. **Verify** — Check every anti-pattern. Fix any violations.

The AI must never ship code that scores below 65/100 without explicit user override. The target is 80+. Exceptional work scores 90+.

## Remember

OPTIK is not about making things pretty. It's about making design decisions measurable, repeatable, and defensible. Every choice has a number attached. Every violation has a specific fix. The AI doesn't guess what good design looks like — it computes it.
