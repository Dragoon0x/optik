---
name: aria
provider: codex
description: Audit and fix ARIA attributes. Ensures proper aria-label, aria-hidden, aria-live, and role usage throughout the interface.
user-invokable: true
---

# /aria — ARIA Audit

Check every interactive and dynamic element:
- Icon buttons need aria-label
- Decorative images need aria-hidden='true'
- Dynamic content areas need aria-live
- Custom widgets need proper role attributes
- Don't over-use ARIA — prefer semantic HTML
- Validate against WAI-ARIA spec
