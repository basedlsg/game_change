# GameChangers Labs

> See The Whole Board

Technology implementation studio that turns research into shipped products across AI, spatial computing, neurotech, and product development.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Typography:** Space Grotesk (display) + Inter (body)

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Design system & tokens
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── ui/           # Primitives (Button, Card, etc.)
│   │   ├── sections/     # Page sections
│   │   └── layout/       # Header, Footer, Nav
│   └── lib/              # Utilities & constants
├── content/              # MDX content
│   └── case-studies/     # Case study pages
├── public/               # Static assets
└── .claude/              # Claude Code config
```

## Environment Variables

```bash
# Analytics
NEXT_PUBLIC_GA_ID=

# Contact Form
RESEND_API_KEY=

# Site URL
NEXT_PUBLIC_SITE_URL=https://gamechangerslabs.com
```

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Brand Guidelines

- **Voice:** Confident but not arrogant. No buzzwords.
- **Aesthetic:** Modern, exclusive, methodical
- **Typography:** Bold, playful, LA/SF creative agency vibe
- **Colors:** Dark backgrounds with electric violet/coral accents

## Documentation

- [`CLAUDE.md`](./CLAUDE.md) — Project guide for Claude Code
- [`company_context.txt`](./company_context.txt) — Business context
- [`assets_manifest.txt`](./assets_manifest.txt) — Asset inventory
- [`.claude/implementation_plan.md`](./.claude/implementation_plan.md) — Implementation roadmap

---

Built with Claude Code
