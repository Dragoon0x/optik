---
name: touch-target
description: Verify all interactive elements meet 44x44px minimum touch target size. Suggests fixes for undersized targets.
user-invokable: true
---

# /touch-target — Touch Target Verification

Scan all interactive elements (buttons, links, inputs, selects):
1. Calculate effective touch area (including padding)
2. Flag any target below 44x44px
3. Check spacing between adjacent targets (minimum 8px)
4. Suggest padding increases to meet minimum

Report as a table: element, current size, pass/fail, suggested fix.
