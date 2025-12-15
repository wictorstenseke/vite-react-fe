---
name: New Feature
about: Ordinary Agent Work
title: ''
labels: ''
assignees: ''

---

# Cursor Rules – Authority & Discovery (Modular Rules)

You must always:
1) Discover rules first
   - Read `/ .cursorrules` (root) before doing anything else
   - Then search for and read any additional rule files in:
     - `/.cursorrules/**`
     - `/docs/rules/**`
     - `/.github/agent/**` (if present)

2) Treat rules as authoritative
   - These rules override your default behavior and any generic best practices

3) Never bypass rules
   - Do not proceed with edits, refactors, dependency choices, or scaffolding if rules exist but haven’t been read
   - If instructions conflict, stop and ask for clarification (do not “choose one”)

4) Keep rules in sync
   - If you add new tooling or conventions, propose an update to the relevant rules file

Output requirement:
- At the top of your first response, briefly list which rule files you read (file paths only)
---
