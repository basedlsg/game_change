# CLAUDE.md — Project Guide for Claude Code

> This file is the **source of truth** for Claude Code operating in this repository.
> Keep it concise, accurate, and human-readable.

---

## Product

**[PRODUCT NAME]** — [One-paragraph description from company_context.txt]

- **Target Users:** [Define primary user personas]
- **Core Workflows:** [List 3-5 key user journeys]
- **Value Proposition:** [What problem does this solve?]

---

## Repo Map

### Key Directories
```
/src              → Application source code
/components       → Reusable UI components
/pages or /app    → Route-based pages (Next.js/React Router)
/api              → Backend endpoints or API routes
/lib              → Shared utilities and helpers
/styles           → Global styles, design tokens
/public           → Static assets (images, fonts)
/tests            → Test files (unit, integration, e2e)
/docs             → Documentation
/.claude          → Claude Code state, commands, logs
```

### Key Entry Points
- `src/index.tsx` or `src/main.tsx` → App bootstrap
- `src/App.tsx` → Root component
- `package.json` → Dependencies and scripts

### Key Configs
- `tsconfig.json` → TypeScript configuration
- `.eslintrc.*` → Linting rules
- `.prettierrc` → Formatting rules
- `vite.config.*` or `next.config.*` → Build configuration

---

## How to Run

### Install
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development
```bash
npm run dev
```

### Test
```bash
npm run test        # Unit tests
npm run test:e2e    # E2E tests (if configured)
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
DATABASE_URL
API_KEY
AUTH_SECRET
NEXT_PUBLIC_API_BASE
```

---

## Engineering Standards

### TypeScript & Formatting
- Strict TypeScript (`strict: true`)
- Prettier for formatting (2-space indent, single quotes, no semicolons OR your standard)
- ESLint with recommended + React/Next rules
- No `any` types without explicit justification

### Branch Naming & PR Style
- Feature: `feature/short-description`
- Fix: `fix/issue-description`
- PRs: Small, focused, single-purpose
- PR title: `[type] Brief description`

### Small Diffs Rule
- Each PR should be reviewable in < 15 minutes
- Refactors separate from features
- One logical change per commit

### Logging & Error Handling
- Use structured logging (JSON format for production)
- Catch errors at boundaries, not everywhere
- User-facing errors: friendly messages
- Internal errors: detailed logs

---

## Front-End Standards

### Component Library Approach
- [ ] Custom components only
- [ ] Radix UI / Headless UI primitives
- [ ] shadcn/ui
- [ ] Other: ___________

### Accessibility Baseline
- WCAG 2.1 AA minimum
- Keyboard navigation required
- Focus visible states
- Color contrast 4.5:1 (text), 3:1 (large text/UI)
- Semantic HTML first, ARIA when needed

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
- Total JS bundle: < 200KB gzipped (initial)

---

## Back-End Standards

### API Patterns
- RESTful endpoints OR GraphQL (specify)
- Consistent response format:
  ```json
  {
    "success": true,
    "data": {},
    "error": null
  }
  ```

### Schema & Validation
- Zod or Yup for runtime validation
- TypeScript types generated from schemas
- Validate at API boundaries

### Auth Approach
- [ ] JWT tokens
- [ ] Session-based
- [ ] OAuth/OIDC
- [ ] Other: ___________

---

## Verification

### Required Checks Before Merge
- [ ] All tests pass
- [ ] Lint passes
- [ ] TypeScript compiles
- [ ] PR reviewed by 1+ team member
- [ ] No console.logs in production code

### E2E Smoke Flow
1. User can load homepage
2. User can authenticate (if applicable)
3. User can complete primary workflow
4. No JS errors in console

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

*Last updated: [DATE]*
*Maintained by: Claude Code + Human Team*
