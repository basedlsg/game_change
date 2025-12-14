# CLAUDE.md — GameChangers Labs Website

> This file is the **source of truth** for Claude Code operating in this repository.
> Keep it concise, accurate, and human-readable.

---

## Product

**GameChangers Labs** — Technology implementation studio that turns research into shipped products across AI, spatial computing, neurotech, and product development.

- **Target Users:** Enterprise technology leaders, startup founders, creative industry executives
- **Core Workflows:**
  1. Visitor lands → understands value prop in <10 seconds
  2. Visitor explores case studies → sees proof of execution
  3. Visitor views team → trusts credibility
  4. Visitor initiates contact → starts conversation
- **Value Proposition:** "See The Whole Board" — Operators who ship products, not decks

---

## Repo Map

### Key Directories (To Be Created)
```
/src              → Application source code
/components       → Reusable UI components
/app              → Next.js App Router pages
/lib              → Shared utilities and helpers
/styles           → Global styles, design tokens
/public           → Static assets (images, fonts)
/content          → MDX content for case studies, team
/.claude          → Claude Code state, commands, logs
```

### Key Entry Points (To Be Created)
- `src/app/page.tsx` → Homepage
- `src/app/layout.tsx` → Root layout
- `package.json` → Dependencies and scripts

### Key Configs (To Be Created)
- `tsconfig.json` → TypeScript configuration
- `tailwind.config.ts` → Tailwind CSS
- `next.config.ts` → Next.js configuration

### Context Files (Existing)
- `company_context.txt` → Full business context, team, case studies
- `assets_manifest.txt` → Asset inventory and gaps

---

## How to Run

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```

### Test
```bash
npm run test
```

### Lint & Format
```bash
npm run lint
npm run format
```

### Build
```bash
npm run build
```

### Environment Variables
> **Note:** Never commit actual secrets. List variable names only.

```
# Analytics (optional)
NEXT_PUBLIC_GA_ID

# Contact form (optional)
CONTACT_FORM_ENDPOINT

# CMS (if using)
CMS_API_KEY
```

---

## Engineering Standards

### TypeScript & Formatting
- Strict TypeScript (`strict: true`)
- Prettier: 2-space indent, single quotes, no semicolons
- ESLint with Next.js recommended rules
- No `any` types without justification

### Branch Naming & PR Style
- Feature: `feature/short-description`
- Fix: `fix/issue-description`
- PRs: Small, focused, single-purpose

### Small Diffs Rule
- Each PR reviewable in < 15 minutes
- Refactors separate from features
- One logical change per commit

---

## Front-End Standards

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Components:** Custom components (no UI library)
- **Animations:** Framer Motion (for scroll-based effects)
- **Content:** MDX for case studies

### Design Direction
- **Visual metaphor:** Complex shapes → simple as you scroll
- **Mood:** Modern, exclusive, methodical
- **Concept:** Chess/strategic board ("See The Whole Board")
- **Tone:** Confident but not arrogant, no buzzwords

### Accessibility Baseline
- WCAG 2.1 AA minimum
- Keyboard navigation required
- Focus visible states
- Color contrast 4.5:1 (text), 3:1 (large text/UI)

### Responsive Breakpoints
```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

### Performance Budget
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Total JS bundle: < 150KB gzipped (initial)

---

## Site Structure

### Pages
| Route | Purpose | Priority |
|-------|---------|----------|
| `/` | Homepage with full story | P0 |
| `/work` | Case studies overview | P1 |
| `/work/[slug]` | Individual case study | P1 |
| `/team` | Team and advisors | P1 |
| `/contact` | Contact form | P0 |

### Sections (Homepage)
1. Hero — Hook, brand intro, "See The Whole Board"
2. Who We Are — Company introduction
3. The Landscape — The problem (with statistics)
4. Our Approach — The solution (plain, direct)
5. Technologies — What we work with
6. The Team — Credibility
7. What We've Shipped — Proof (case studies)
8. How We Work — Process
9. Let's Talk — CTA

---

## Content Sources

All content comes from `company_context.txt`:
- Company overview and positioning
- Team bios (4 core + 3 advisors)
- Case studies (4 detailed)
- Service lines (4 technologies)
- Market statistics (verified with sources)
- Process steps (Conversation → Research → Delivery)
- Key messages and brand voice

---

## Claude Workflow Rules

### Mandatory Behaviors
1. **Read first** — Always read `CLAUDE.md`, `company_context.txt`, and `assets_manifest.txt` before acting
2. **Plan Mode** — Use Plan Mode for refactors, architecture changes, or multi-file edits
3. **Small diffs** — Propose small, reviewable changes
4. **Verify first** — Run tests/lint after changes when available
5. **Document decisions** — Log significant decisions in `.claude/changes.md`

### Forbidden Behaviors
1. Never invent requirements beyond `company_context.txt` + asset list
2. Never run destructive commands without explicit approval
3. Never commit secrets or credentials
4. Never make large changes without plan approval
5. Never use buzzwords like "game-changing" or "revolutionary"

### Context Compaction
If approaching context limits, save state to `.claude/state.md`:
- Current goal
- Decisions made
- Open questions
- Next steps
- File references

---

## Quick Reference

| Task | Command |
|------|---------|
| Install | `npm install` |
| Dev | `npm run dev` |
| Test | `npm run test` |
| Lint | `npm run lint` |
| Build | `npm run build` |

---

## Asset Gaps (Blocking)

Before full design implementation:
- [ ] Logo files
- [ ] Color palette
- [ ] Typography choice
- [ ] Team headshots
- [ ] Visual aesthetic reference (Figma or examples)

Can proceed with:
- Site structure and components
- Content integration
- Interaction patterns
- Placeholder styling (to be refined)

---

*Last updated: 2025-12-14*
*Maintained by: Claude Code*
