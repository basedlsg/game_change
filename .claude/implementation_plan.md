# GameChangers Labs — Unified Implementation Plan

> Synthesized from all 10 committee reports
> Created: 2025-12-14

---

## Executive Summary

**Project:** GameChangers Labs Marketing Website
**Goal:** Professional, high-converting website that communicates "See The Whole Board" positioning
**Timeline:** 4 milestones over ~3-4 weeks
**Status:** Ready to begin (pending design asset decisions)

### Critical Blockers
| Asset | Impact | Workaround |
|-------|--------|------------|
| Logo files | Blocks header/footer | Use text-only logo initially |
| Color palette | Blocks all styling | Use neutral placeholder palette |
| Typography | Blocks text styling | Use system fonts or Inter/Outfit |
| Team photos | Blocks team section | Use placeholder silhouettes |

**Recommendation:** Proceed with placeholder design system; swap assets when ready.

---

## Tech Stack (Final Decision)

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | Next.js 14+ (App Router) | SSG, great DX, Vercel native |
| Language | TypeScript (strict) | Type safety, better DX |
| Styling | Tailwind CSS | Rapid development, design tokens |
| Animations | Framer Motion | Scroll-based "complex→simple" effect |
| Content | MDX | Case studies with rich formatting |
| Forms | React Hook Form + Zod | Validation, type safety |
| Email | Resend | Free tier, simple API |
| Analytics | Google Analytics 4 | Industry standard, free |
| Hosting | Vercel | Free tier, automatic deployments |
| CI/CD | GitHub Actions | Lint, type-check, build verification |

---

## Milestone Breakdown

### M0: Foundation Setup (Days 1-2)

**Goal:** Repository scaffolding and development environment

#### Tasks
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS with design tokens
- [ ] Set up ESLint + Prettier
- [ ] Create folder structure:
  ```
  /app
    /page.tsx (landing)
    /case-studies/[slug]/page.tsx
    /layout.tsx
  /components
    /ui (primitives)
    /sections (page sections)
    /layout (header, footer)
  /lib
    /utils.ts
    /constants.ts
  /content
    /case-studies (MDX files)
  /styles
    /globals.css
  ```
- [ ] Configure MDX for case studies
- [ ] Set up Framer Motion
- [ ] Create .env.example with required variables
- [ ] Initialize GitHub Actions CI pipeline
- [ ] Deploy empty shell to Vercel

#### Definition of Done
- `npm run dev` starts without errors
- `npm run build` completes successfully
- `npm run lint` passes
- Vercel preview deployment works
- CI pipeline runs on PR

#### Dependencies
- None (can start immediately)

---

### M1: Design System & Layout (Days 3-5)

**Goal:** Visual foundation and page structure

#### Tasks
- [ ] Create design tokens (colors, spacing, typography)
  ```typescript
  // Placeholder palette (swap when brand assets arrive)
  colors: {
    primary: '#1a1a2e',      // Deep navy
    secondary: '#16213e',    // Dark blue
    accent: '#0f3460',       // Accent blue
    text: '#eaeaea',         // Light text
    background: '#0f0f0f',   // Near black
  }
  ```
- [ ] Build UI primitives:
  - [ ] Button (primary, secondary, ghost variants)
  - [ ] Card (case study cards, team cards)
  - [ ] Typography components (H1-H4, Body, Caption)
  - [ ] Container (max-width wrapper)
  - [ ] Section (consistent vertical spacing)
- [ ] Build layout components:
  - [ ] Header (logo, nav, CTA)
  - [ ] Footer (links, contact, locations)
  - [ ] Navigation (mobile responsive)
- [ ] Implement scroll-based animation system:
  - [ ] useScrollProgress hook
  - [ ] AnimatedSection wrapper
  - [ ] "Complex shapes → simple" visual effect
- [ ] Set up responsive breakpoints
- [ ] Create loading states and skeletons

#### Definition of Done
- Design system documented in Storybook or component file comments
- All primitives render correctly at all breakpoints
- Scroll animations perform at 60fps
- Lighthouse Performance > 90

#### Dependencies
- M0 complete
- Placeholder design decisions made

---

### M2: Core Sections (Days 6-12)

**Goal:** All landing page sections implemented

#### Sections (in scroll order)

##### 1. Hero Section
- [ ] "See The Whole Board" headline
- [ ] Animated geometric shapes (complex → simple on scroll)
- [ ] Primary CTA: "Start a Conversation"
- [ ] Secondary: Brief positioning statement

##### 2. Problem Section
- [ ] "70-88% of transformations fail" statistic
- [ ] Four failure types with icons:
  - Wrong problem
  - Wrong approach
  - Wrong scope
  - Wrong finish line
- [ ] Animate in on scroll

##### 3. Solution Section
- [ ] Four-step process:
  1. Define the problem precisely
  2. Determine if technology solves it
  3. Build only what's needed
  4. Ship working products, not decks
- [ ] Visual progression (1→2→3→4)

##### 4. Services Section
- [ ] Four service cards:
  - Artificial Intelligence
  - Spatial Computing
  - Neurotech
  - Product Development
- [ ] Expandable details on click/hover
- [ ] Icons for each (placeholder until brand assets)

##### 5. Case Studies Section
- [ ] Four case study cards:
  - BrainV Technology (Neurotech)
  - Chinese Energy Company (Enterprise AI)
  - Beauty Product Company (Product Dev)
  - Grammy-Winning Artists (Gaming/Spatial)
- [ ] Click through to full case study page
- [ ] Outcome metrics highlighted

##### 6. Team Section
- [ ] Four core team members
- [ ] Photo (placeholder), name, title, location
- [ ] Brief background
- [ ] Three advisors (smaller cards)

##### 7. Geographic Presence
- [ ] World map or abstract visualization
- [ ] Four locations highlighted:
  - Saudi Arabia (Omar)
  - Beijing (Carlos)
  - Detroit (Norvell)
  - London (Yixian)

##### 8. Process Section
- [ ] Three steps:
  1. Conversation
  2. Research
  3. Delivery
- [ ] Expandable details

##### 9. Contact Section
- [ ] Contact form (name, email, company, message)
- [ ] Form validation with Zod
- [ ] Success/error states
- [ ] Anti-spam (honeypot + rate limiting)

##### 10. Footer
- [ ] Company info
- [ ] Navigation links
- [ ] Location list
- [ ] Social links (if applicable)

#### Definition of Done
- All sections render correctly
- All sections responsive (mobile, tablet, desktop)
- Scroll animations work smoothly
- Contact form submits (to test endpoint)
- All copy matches company_context.txt
- WCAG 2.1 AA compliance verified

#### Dependencies
- M1 complete
- All copy finalized (ready in company_context.txt)

---

### M3: Case Study Pages & Polish (Days 13-18)

**Goal:** Full case study pages and production polish

#### Tasks
- [ ] Create MDX templates for case studies
- [ ] Build 4 case study pages:
  - [ ] BrainV Technology
  - [ ] Chinese Energy Company
  - [ ] Beauty Product Company
  - [ ] Grammy-Winning Artists
- [ ] Each page includes:
  - Problem statement
  - Solution approach
  - Technical details
  - Outcome metrics
  - Visual assets (placeholder)
- [ ] Implement contact form backend:
  - [ ] API route for form submission
  - [ ] Resend email integration
  - [ ] Rate limiting
  - [ ] Input sanitization
- [ ] Add analytics:
  - [ ] GA4 integration
  - [ ] Custom events (CTA clicks, form submissions)
- [ ] Performance optimization:
  - [ ] Image optimization (next/image)
  - [ ] Font optimization
  - [ ] Bundle analysis
  - [ ] Lazy loading for below-fold content
- [ ] SEO implementation:
  - [ ] Meta tags per page
  - [ ] Open Graph images
  - [ ] Structured data (Organization, LocalBusiness)
  - [ ] Sitemap generation
- [ ] Accessibility audit:
  - [ ] Keyboard navigation
  - [ ] Screen reader testing
  - [ ] Color contrast verification
  - [ ] Focus states

#### Definition of Done
- All case study pages complete
- Contact form sends emails successfully
- Lighthouse scores: Performance >90, A11y >95, SEO >95
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- Bundle size <150KB gzipped (initial)
- No console errors

#### Dependencies
- M2 complete
- Resend API key configured
- GA4 tracking ID configured

---

### M4: Launch Prep (Days 19-21)

**Goal:** Production deployment and handoff

#### Tasks
- [ ] Final QA pass:
  - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - [ ] Device testing (iOS Safari, Android Chrome)
  - [ ] Form submission testing
  - [ ] Analytics verification
- [ ] Security hardening:
  - [ ] Security headers configured
  - [ ] CSP policy finalized
  - [ ] Rate limiting verified
- [ ] Documentation:
  - [ ] README.md with setup instructions
  - [ ] Environment variable documentation
  - [ ] Deployment guide
  - [ ] Content update guide (for MDX)
- [ ] Production deployment:
  - [ ] Configure custom domain (if provided)
  - [ ] SSL verification
  - [ ] Redirect setup (www → non-www or vice versa)
- [ ] Monitoring setup:
  - [ ] Vercel Analytics enabled
  - [ ] Error tracking (Vercel or Sentry)

#### Definition of Done
- Site live on production URL
- All forms working
- Analytics collecting data
- No console errors in production
- Documentation complete
- Handoff meeting scheduled

#### Dependencies
- M3 complete
- Custom domain configured (optional)
- All API keys in production environment

---

## Critical Path

```
M0 (2 days) → M1 (3 days) → M2 (7 days) → M3 (6 days) → M4 (3 days)
              ↓
        [Design assets can arrive anytime and be swapped in]
```

**Total:** ~21 working days (3-4 weeks)

**Parallelizable work:**
- Content writing (MDX case studies) can happen during M1-M2
- Design asset creation can happen in parallel
- Analytics/email API setup can happen during M1

---

## Decision Points

### Immediate Decisions Needed

| Decision | Options | Recommendation | Impact |
|----------|---------|----------------|--------|
| Proceed without brand assets? | Wait / Proceed with placeholders | Proceed | Unblocks M0-M2 |
| Typography | Inter / Outfit / System fonts | Inter + Outfit | Affects all text |
| Contact form destination | Email only / CRM integration | Email (Resend) | Affects M3 scope |

### Deferred Decisions (Can Decide Later)

| Decision | When Needed | Default |
|----------|-------------|---------|
| Custom domain | M4 | Vercel subdomain |
| CRM integration | Post-launch | None |
| Blog/content section | Post-launch | None |

---

## Resource Requirements

### Development
- 1 developer (Claude Code + human oversight)
- ~80-100 hours total effort

### External Services (All Free Tier)
- Vercel account (hosting)
- Resend account (email)
- Google Analytics (analytics)
- GitHub (repository)

### Assets Needed from Client
| Asset | Priority | Blocks |
|-------|----------|--------|
| Logo (SVG) | P0 | Header, footer, OG images |
| Color palette | P0 | All styling |
| Font choice | P0 | All text |
| Team headshots | P1 | Team section |
| Case study visuals | P2 | Case study pages |

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Brand assets delayed | High | Medium | Proceed with placeholders |
| Scope creep | Medium | High | Strict adherence to company_context.txt |
| Animation performance | Low | Medium | Test early, simplify if needed |
| Form spam | Medium | Low | Honeypot + rate limiting |

---

## Success Metrics

### Launch Criteria
- [ ] All sections implemented per spec
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Contact form working
- [ ] Analytics collecting data
- [ ] No console errors
- [ ] Mobile responsive

### Post-Launch Tracking
- Form submissions / week
- Page views / session
- Time on site
- Bounce rate
- Core Web Vitals (real user data)

---

## Next Steps

1. **User approval of this plan**
2. **Decision on proceeding without brand assets**
3. **Begin M0: Foundation Setup**

---

*Plan created: 2025-12-14*
*Synthesized from: Product, Architecture, Frontend Design, Frontend Engineering, Backend, QA, Security, DevOps, Performance, Documentation committees*
