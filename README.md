# Nova — SaaS Landing Page

A responsive SaaS landing-page portfolio project built with Next.js, TypeScript and Tailwind CSS.

## Features

- Next.js App Router
- Responsive desktop/tablet/mobile layout
- Reusable React components
- Tailwind CSS
- Metadata and Open Graph basics
- JSON-LD structured data
- `sitemap.ts` and `robots.ts`
- Loading and error UI
- Optimized `next/image` usage
- Responsive navigation menu
- Pricing, testimonials, CTA and contact sections

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

If PowerShell blocks `npm.ps1` on Windows, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Important

This is a portfolio/demo SaaS project. Nova, the pricing, usage statistics and testimonials are fictional demo content.

Before deployment, replace the placeholder domain in:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/page.tsx`

with the actual deployed domain.
