---
name: certify
description: Verify the design meets a specific OPTIK score threshold. Returns pass/fail with score breakdown. Use in CI/CD pipelines.
user-invokable: true
---

# /certify — Design Certification

Run /score and compare against a threshold (default: 80).
Return PASS if score >= threshold, FAIL otherwise.

Output format for CI/CD integration:
```
OPTIK CERTIFY: PASS (82/100, threshold: 80)
Typography: 85 | Color: 80 | Layout: 84 | Motion: 72 | A11y: 78
```

Use in pre-commit hooks or CI pipelines to enforce design quality.
