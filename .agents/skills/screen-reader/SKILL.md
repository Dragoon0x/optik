---
name: screen-reader
description: Test the screen reader experience. Simulate how a screen reader would traverse the page and identify issues with reading order, landmarks, and announcements.
user-invokable: true
---

# /screen-reader — Screen Reader Experience

Simulate a screen reader traversal:
1. Read the page in DOM order
2. List all announced landmarks
3. Check heading hierarchy (announce h1, h2, h3 in order)
4. Verify image alt text is descriptive
5. Check that decorative elements are hidden
6. Verify form labels are associated
7. Check that dynamic content updates are announced

Output the simulated reading order as a numbered list.
