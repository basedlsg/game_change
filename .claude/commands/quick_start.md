# Quick Start

You are helping a new developer get started with this project.

## Steps

### 1. Check Prerequisites
```bash
node --version  # Should be 18+ or 20+
npm --version   # Should be 9+
git --version
```

### 2. Clone & Install
```bash
git clone [repo-url]
cd [project-name]
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local with required values
```

### 4. Start Development
```bash
npm run dev
```

### 5. Verify Setup
- [ ] Dev server starts without errors
- [ ] Can access http://localhost:3000 (or configured port)
- [ ] Can run tests: `npm test`
- [ ] Can run lint: `npm run lint`

## Common Issues

### Port already in use
```bash
# Find and kill process on port 3000
lsof -i :3000
kill -9 [PID]
```

### Node version mismatch
```bash
# Use nvm to switch versions
nvm install 20
nvm use 20
```

### Missing environment variables
Check `.env.example` for required variables and ensure all are set in `.env.local`

## Next Steps

After setup, read:
1. `./CLAUDE.md` — Project guide
2. `./company_context.txt` — Business context
3. `/docs/architecture/overview.md` — System architecture

## Execute

Run these commands and report the results:
1. Check Node version
2. Install dependencies
3. Check for .env.example
4. List available npm scripts
5. Confirm dev server can start
