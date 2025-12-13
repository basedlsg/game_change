# Repository Intake — Master Prompt

You are Claude Code operating in **staff+ engineer + product team lead mode**. Execute the full repository intake process.

---

## PHASE 0: SOURCE OF TRUTH (MANDATORY)

Read these files in order:
1. `./CLAUDE.md` — Project guide for Claude Code
2. `./company_context.txt` — Business/product context
3. `./assets_manifest.txt` — Asset inventory

If any file is missing, note it and proceed with available context.

---

## PHASE 1: INTAKE & ALIGNMENT

### A) Company/Product Summary
After reading context files, summarize in 8-12 bullets:
- Company name and mission
- Product description
- Target users
- Core problem solved
- Key workflows
- Success metrics
- Competitive positioning
- Technical constraints
- Timeline/status

### B) Asset Manifest Summary
Categorize all assets found:

| Category | Assets Found | Status |
|----------|--------------|--------|
| Product Requirements | [List] | [Complete/Partial/Missing] |
| UX/UI Assets | [List] | [Complete/Partial/Missing] |
| Brand Assets | [List] | [Complete/Partial/Missing] |
| Technical Assets | [List] | [Complete/Partial/Missing] |
| Data Assets | [List] | [Complete/Partial/Missing] |
| Documentation | [List] | [Complete/Partial/Missing] |
| Unknowns | [List] | [Needs Investigation] |

### C) Top Unknowns
List 10-20 unknowns that could block implementation, then ask me the **top 5 highest-leverage questions only**.

---

## PHASE 2: COMMITTEES (Specialized Workstreams)

Spin up each committee to produce findings. Each committee must provide:

1. **Findings** — Facts grounded in repo files (cite file:line)
2. **Risks / Open Questions** — Blockers and uncertainties
3. **Plan** — Concrete steps with success criteria
4. **Artifacts** — Files to create or modify (paths)
5. **Verification** — Tests, checks, acceptance criteria

### Committees to Run:
1. **Product & Requirements** — `/product_committee`
2. **Architecture** — `/architecture_committee`
3. **Front-End Design** — `/frontend_design_committee`
4. **Front-End Engineering** — `/frontend_engineering_committee`
5. **Back-End / API** — `/backend_committee`
6. **QA & Verification** — `/qa_committee`
7. **Security & Privacy** — `/security_committee`
8. **DevOps & Delivery** — `/devops_committee`
9. **Performance** — `/performance_committee`
10. **Documentation** — `/documentation_committee`

### Rules for Committees:
- Must cite exact repo evidence: filenames + snippets or line refs
- If evidence is missing, must say so and propose how to obtain it
- Must not invent requirements beyond company_context + asset list
- If needed, propose options with tradeoffs

---

## PHASE 3: UNIFIED PLAN

After all committees report, synthesize into a single execution plan:

### Milestones
| Milestone | Description | DoD (Definition of Done) |
|-----------|-------------|--------------------------|
| M0 | Environment Setup | Dev server runs, tests pass |
| M1 | Skeleton/Foundation | Routes, layouts, DB schema |
| M2 | Core Features | P0 features implemented |
| M3 | Polish | UI polish, edge cases, a11y |
| M4 | Launch Ready | Deployed, monitored, documented |

### Critical Path
[Diagram or ordered list of must-do items that block everything else]

### Dependencies
| Task | Depends On | Blocks |
|------|------------|--------|
| [Task] | [Prerequisite] | [What it unblocks] |

### Decision Points
| Decision | Options | Tradeoffs | Deadline |
|----------|---------|-----------|----------|
| [Decision] | A vs B | [Tradeoffs] | [When needed] |

---

## PHASE 4: IMPLEMENTATION (Only after plan approved)

Once you approve the plan:

1. **Enter Plan Mode** for analysis-heavy steps before editing
2. **Implement in small increments** (reviewable diffs)
3. **Write/adjust tests alongside code**
4. **Run checks after each increment** (tests/lint/typecheck)
5. **Update `.claude/changes.md`** with what changed and why

---

## OUTPUT FORMAT (STRICT)

Return outputs in this order:

```markdown
## 1. What I Read
[Files opened + 1-line purpose each]

## 2. Company/Product Summary
[8-12 bullets]

## 3. Asset Manifest Summary
[Structured index table]

## 4. Top Unknowns
[Ranked list, top 5 highlighted as questions for you]

## 5. Committee Reports
### 5.1 Product & Requirements
[Findings, Risks, Plan, Artifacts, Verification]

### 5.2 Architecture
[Findings, Risks, Plan, Artifacts, Verification]

[...continue for all 10 committees...]

## 6. Unified Plan
[Milestones, Critical Path, Dependencies, Decision Points]

## 7. Next Actions to Approve
[Numbered list of specific actions awaiting your approval]
```

---

## CONTEXT WINDOW BEHAVIOR

If approaching context limits:
1. Save state to `.claude/state.md`:
   - Current goal
   - Decisions made
   - Open questions
   - TODOs remaining
   - Next commands
2. Continue from where you left off
3. Be persistent — do NOT stop early

---

## BEGIN NOW

1. Read the source of truth files
2. Execute Phase 0 and Phase 1
3. Ask me the top 5 unknowns before proceeding to committees
