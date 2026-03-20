---
name: contrast
description: Check WCAG contrast ratios between any two colors. Reports AA/AAA compliance for normal text, large text, and UI components.
user-invokable: true
---

# /contrast — WCAG Contrast Checker

## Usage
`/contrast [foreground] [background]`

## Output
Calculate relative luminance and contrast ratio. Report:
- Ratio (e.g., 7.2:1)
- Normal text AA (4.5:1): PASS/FAIL
- Normal text AAA (7:1): PASS/FAIL
- Large text AA (3:1): PASS/FAIL
- Large text AAA (4.5:1): PASS/FAIL
- UI components (3:1): PASS/FAIL

If any check fails, suggest the nearest color that would pass.
