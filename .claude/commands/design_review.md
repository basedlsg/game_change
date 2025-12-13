# Design Review

You are conducting a **design review** of the current UI/UX implementation.

## Context Files to Read
1. `./CLAUDE.md` — Project guide
2. `./company_context.txt` — Business context
3. `./assets_manifest.txt` — Design assets

## Review Checklist

### 1. User Flow Analysis
- [ ] User can complete primary tasks without confusion
- [ ] Navigation is intuitive and consistent
- [ ] Error states guide users to resolution
- [ ] Empty states provide helpful guidance
- [ ] Loading states prevent confusion

### 2. Visual Consistency
- [ ] Typography follows design system
- [ ] Colors match brand guidelines
- [ ] Spacing is consistent (using tokens)
- [ ] Icons are consistent in style and size
- [ ] Components look consistent across pages

### 3. Accessibility (a11y)
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible
- [ ] Images have alt text
- [ ] Forms have proper labels
- [ ] Screen reader experience is logical

### 4. Responsiveness
- [ ] Layout works at all breakpoints
- [ ] Touch targets are 44x44px minimum on mobile
- [ ] Text remains readable on all screen sizes
- [ ] Images scale appropriately
- [ ] No horizontal scroll on mobile

### 5. Interaction Design
- [ ] Buttons have clear hover/active states
- [ ] Forms validate in real-time
- [ ] Destructive actions require confirmation
- [ ] Success/error feedback is clear
- [ ] Animations are purposeful and smooth

### 6. Performance Impact
- [ ] Images are optimized
- [ ] Fonts load efficiently
- [ ] No layout shift (CLS)
- [ ] Interactions feel responsive

## Output Format

```markdown
## Design Review Summary

**Overall Score:** [X/10]
**Critical Issues:** [Count]
**Recommendations:** [Count]

## Issues Found

### Critical (Must Fix)
| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|
| [Issue] | [File/Component] | [Impact] | [Solution] |

### High Priority
| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|

### Medium Priority
| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|

### Low Priority / Nice to Have
| Issue | Location | Impact | Fix |
|-------|----------|--------|-----|

## What's Working Well
- [Positive observation]
- [Positive observation]

## Recommended Next Steps
1. [Action item]
2. [Action item]
```

## Begin Review

1. Read context files
2. Review all UI components and pages
3. Check against each criterion
4. Produce the review report
