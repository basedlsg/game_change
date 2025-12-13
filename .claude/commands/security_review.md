# Security Review

You are conducting a **security review** of the codebase.

## Context Files to Read
1. `./CLAUDE.md` — Project guide
2. `./company_context.txt` — Business context (for data sensitivity)

## Security Review Checklist

### 1. Secrets & Credentials
- [ ] No hardcoded secrets in code
- [ ] No secrets in git history
- [ ] `.gitignore` covers all secret files
- [ ] `.env.example` documents required vars (without values)
- [ ] Secrets are injected at runtime

### 2. Authentication
- [ ] Passwords are hashed (bcrypt/argon2)
- [ ] Sessions expire appropriately
- [ ] Tokens are secure (httpOnly, secure, sameSite)
- [ ] Password reset is secure
- [ ] No auth bypass vulnerabilities

### 3. Authorization
- [ ] All endpoints check permissions
- [ ] No IDOR vulnerabilities
- [ ] Admin functions are protected
- [ ] Rate limiting on sensitive endpoints

### 4. Input Validation
- [ ] All user input is validated
- [ ] File uploads are restricted
- [ ] No path traversal vulnerabilities
- [ ] No command injection

### 5. Injection Prevention
- [ ] SQL queries use parameterization
- [ ] NoSQL queries are safe
- [ ] HTML output is escaped (XSS)
- [ ] No template injection

### 6. Data Protection
- [ ] Sensitive data encrypted at rest
- [ ] HTTPS enforced in production
- [ ] PII is handled appropriately
- [ ] Logs don't contain secrets

### 7. Dependencies
- [ ] No known vulnerabilities (npm audit)
- [ ] Dependencies are up to date
- [ ] No unnecessary dependencies

### 8. Headers & Config
- [ ] Security headers configured
- [ ] CORS is restrictive
- [ ] CSP is implemented
- [ ] No debug mode in production

## Output Format

```markdown
## Security Review Summary

**Risk Level:** [Critical/High/Medium/Low]
**Findings:** [Count by severity]

## Critical Findings (Immediate Action)
| Finding | Location | Risk | Remediation |
|---------|----------|------|-------------|
| [Finding] | [File:line] | [Risk] | [Fix] |

## High Risk Findings
| Finding | Location | Risk | Remediation |
|---------|----------|------|-------------|

## Medium Risk Findings
| Finding | Location | Risk | Remediation |
|---------|----------|------|-------------|

## Low Risk / Informational
| Finding | Location | Risk | Remediation |
|---------|----------|------|-------------|

## Positive Observations
- [Security practice done well]

## npm audit Results
[Output of npm audit]

## Recommended Actions
1. [Immediate action]
2. [Short-term action]
3. [Long-term improvement]
```

## Begin Review

1. Scan for secrets in code
2. Review auth/authz implementation
3. Check for injection vulnerabilities
4. Run `npm audit`
5. Produce the security report

**IMPORTANT:** Keep findings confidential. Do not expose in public channels.
