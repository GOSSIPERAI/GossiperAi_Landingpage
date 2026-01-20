# Gossiper Landing Page - Quick Reference

## Project Type

✅ **Landing Page Only** - Marketing/Information Site

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Radix UI
- Vercel Analytics

## Getting Started

### Installation

```bash
npm install
npm run dev
```

### Build & Deploy

```bash
npm run build
npm start
```

## Available Pages

| Page     | Route       | Purpose                     |
| -------- | ----------- | --------------------------- |
| Home     | `/`         | Hero section, features, CTA |
| Features | `/features` | Detailed feature breakdown  |
| Pricing  | `/pricing`  | Pricing information         |
| About    | `/about`    | Company info                |
| Contact  | `/contact`  | Contact form                |
| Help     | `/help`     | FAQ & support               |
| Privacy  | `/privacy`  | Privacy policy              |
| Terms    | `/terms`    | Terms of service            |

## Key Components

- **MainNavigation** - Top navigation bar
- **ThemeProvider** - Dark/light mode
- **AccessibilityProvider** - WCAG compliance
- **Radix UI Components** - Pre-built accessible components

## Important Files

- `src/app/page.tsx` - Home page content
- `src/app/layout.tsx` - Root layout
- `src/components/main-navigation.tsx` - Navigation component
- `package.json` - Dependencies and scripts
- `tailwind.config.ts` - Tailwind styling
- `README.md` - Full documentation

## What's NOT Here

- ❌ No authentication
- ❌ No database
- ❌ No blockchain/Solana
- ❌ No real-time features
- ❌ No sessions or payments
- ❌ No API routes

## Development

### Add New Page

1. Create folder in `src/app/[page-name]`
2. Add `page.tsx` file
3. Add link to `src/components/main-navigation.tsx`

### Customize Styling

- Colors: `tailwind.config.ts`
- Components: `src/components/ui/`
- Global styles: `src/app/globals.css`

### Deployment

- Connect GitHub repo to Vercel
- Environment variables: `.env.local` (optional)
- Deploy on push to main branch

## Performance Tips

- Images are optimized with Next.js Image
- Analytics are lightweight
- No heavy dependencies
- Fast build time

---

**Status**: Production-ready landing page
