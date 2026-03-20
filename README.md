# OPTIK

**Measure design quality. Don't guess.**

The Lighthouse for design quality. 58 design intelligence commands with scoring algorithms, mathematical type scales, color palette generation, and anti-pattern detection.

Paste code → get a 0-100 score → install commands that fix what the score finds.

[**Try the live analyzer →**](https://dragoon0x.github.io/optik/)

---

## What is OPTIK?

Most AI design skills tell the AI what good design looks like. OPTIK gives it scoring algorithms that measure design quality across five pillars:

| Pillar | Weight | What it measures |
|--------|--------|-----------------|
| Typography | 25% | Scale ratio, banned fonts, hierarchy depth, line measure, weight usage |
| Color | 25% | Contrast ratios, palette coherence, anti-patterns, CSS variables, dark mode |
| Layout | 25% | Grid alignment, spacing rhythm, responsive breakpoints, nesting depth |
| Motion | 10% | Transition purpose, easing curves, reduced-motion support, performance |
| Accessibility | 15% | Focus styles, semantic HTML, ARIA, touch targets, screen reader experience |

The AI doesn't learn opinions. It runs analysis.

## Install

```bash
# All tools (auto-detects your AI harness)
npx skills add dragoon0x/optik

# Claude Code plugin
/plugin marketplace add dragoon0x/optik

# Manual
git clone https://github.com/dragoon0x/optik.git
cp -r optik/.claude your-project/    # Claude Code
cp -r optik/.cursor your-project/    # Cursor
cp -r optik/.agents your-project/    # Copilot/Kiro/Antigravity/OpenCode
cp -r optik/.gemini your-project/    # Gemini CLI
cp -r optik/.codex your-project/     # Codex CLI
```

Works with Claude Code, Cursor, Gemini CLI, Codex CLI, VS Code Copilot, Kiro, OpenCode, and Antigravity.

## 58 Commands

### Score & Audit (8)
| Command | What it does |
|---------|-------------|
| `/score` | Run full 0-100 design quality analysis |
| `/audit` | Comprehensive quality report with line references |
| `/critique` | UX hierarchy + resonance review |
| `/benchmark` | Compare against quality baselines |
| `/compare` | Side-by-side version comparison |
| `/report` | Generate shareable score card |
| `/trend` | Track score across iterations |
| `/certify` | Pass/fail against threshold (for CI/CD) |

### Typography (8)
| Command | What it does |
|---------|-------------|
| `/type-scale` | Generate mathematical type scale from ratio |
| `/type-pair` | Font pairing recommendations |
| `/type-audit` | Audit all font usage across codebase |
| `/type-fix` | Auto-fix type scale inconsistencies |
| `/type-hierarchy` | Enforce heading + body hierarchy |
| `/type-measure` | Check line lengths (45-75 chars) |
| `/type-rhythm` | Align to vertical rhythm baseline |
| `/type-set` | Apply complete type system at once |

### Color (8)
| Command | What it does |
|---------|-------------|
| `/palette` | Generate full 50-950 shade palette from one hex |
| `/contrast` | WCAG AA/AAA contrast check |
| `/harmonize` | Fix palette coherence issues |
| `/semantic-color` | Generate semantic token set |
| `/dark-mode` | Create dark mode preserving contrast |
| `/color-audit` | Map all colors, find duplicates |
| `/color-fix` | Auto-fix contrast failures |
| `/color-a11y` | Ensure palette passes WCAG at every size |

### Layout (8)
| Command | What it does |
|---------|-------------|
| `/grid` | Apply 8px grid with snap correction |
| `/spacing` | Generate spacing scale from base unit |
| `/density` | Audit visual density + whitespace |
| `/rhythm` | Enforce vertical spacing rhythm |
| `/responsive` | Check breakpoints + reflow quality |
| `/layout-audit` | Map layout patterns + find issues |
| `/layout-fix` | Auto-fix off-grid spacing values |
| `/align` | Verify alignment across sections |

### Motion (6)
| Command | What it does |
|---------|-------------|
| `/animate` | Add purposeful motion + transitions |
| `/transition` | Audit + improve timing functions |
| `/scroll-fx` | Scroll-triggered reveals + parallax |
| `/motion-audit` | Check motion purpose + performance |
| `/reduce-motion` | Add prefers-reduced-motion support |
| `/overdrive` | WebGL, spring physics, GPU effects |

### Accessibility (6)
| Command | What it does |
|---------|-------------|
| `/a11y-audit` | Full accessibility check |
| `/focus` | Generate focus ring system |
| `/touch-target` | Verify 44x44px minimum targets |
| `/aria` | Audit + fix ARIA attributes |
| `/a11y-fix` | Auto-fix detectable a11y issues |
| `/screen-reader` | Test screen reader experience |

### Design System (8)
| Command | What it does |
|---------|-------------|
| `/tokens` | Generate complete token set |
| `/extract` | Pull reusable patterns into system |
| `/normalize` | Align to design system standards |
| `/system-audit` | Check for token drift + orphans |
| `/component-check` | Verify component consistency |
| `/export-css` | Export as CSS custom properties |
| `/export-tailwind` | Export as Tailwind config |
| `/export-json` | Export as W3C design tokens |

### Polish (6)
| Command | What it does |
|---------|-------------|
| `/polish` | Final pass — alignment, spacing, details |
| `/distill` | Strip to essence, remove complexity |
| `/bolder` | Amplify safe, boring designs |
| `/quieter` | Tone down aggressive designs |
| `/harden` | Error handling, i18n, edge cases |
| `/delight` | Add memorable moments of joy |

## Score Thresholds

| Score | Grade | Meaning |
|-------|-------|---------|
| 90-100 | Exceptional | Ship with confidence |
| 80-89 | Strong | Minor refinements only |
| 65-79 | Needs work | Address issues before shipping |
| 40-64 | AI slop detected | Significant rework required |
| 0-39 | Design emergency | Start over with intention |

## Anti-Pattern Registry

These are automatically flagged and deducted:

| Pattern | Deduction | Fix |
|---------|-----------|-----|
| Inter/Roboto/Arial font | -25 type | Use distinctive typeface |
| Purple gradient on white | -30 color | Choose bold, non-generic palette |
| Cards inside cards | -20 layout | Flatten hierarchy |
| No CSS custom properties | -15 color | Use variables for consistency |
| outline:none without replacement | -20 a11y | Add :focus-visible styles |
| No media queries | -15 layout | Add responsive breakpoints |
| Pure black text (#000) | -5 color | Tint dark colors |
| Off-grid spacing | -3 each layout | Snap to 4px grid |

## Web Analyzer

The [OPTIK landing page](https://dragoon0x.github.io/optik/) includes a live code analyzer. Paste any HTML or CSS, get an instant score with category breakdowns and specific issues.

## Development

```bash
git clone https://github.com/dragoon0x/optik.git
cd optik
node build.js          # Compile skills to all providers
node test/test.js      # Run test suite (514 checks)
```

## License

Apache 2.0. See [LICENSE](LICENSE).

The core design intelligence skill builds on concepts from Anthropic's official frontend-design skill.

---

Built by [dragoon0x](https://github.com/dragoon0x)
