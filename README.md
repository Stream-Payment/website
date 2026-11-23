# Stream — website

The public marketing site for Stream: a single, server-rendered page built with
Nuxt 4, Vue 3, and Tailwind CSS 4. Designed for Vercel.

## Stack

| Concern    | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Rendering  | Nuxt 4 with SSR on every request (no client-only content)  |
| UI         | Vue 3 single-file components, no UI framework              |
| Styling    | Tailwind CSS 4 via `@tailwindcss/vite`                     |
| Type       | TypeScript in strict mode                                  |
| SEO        | `useSeoMeta`, canonical, Open Graph, JSON-LD, robots, sitemap |
| Deployment | Vercel (zero-config Nuxt detection and serverless SSR)     |

## Local development

Requires Node 20.19+ (`.nvmrc` pins 22).

```bash
npm install
npm run dev
```

The site runs at <http://localhost:3000>.

```bash
npm run typecheck   # vue-tsc via nuxt typecheck
npm run build       # production build in .output/
npm run preview     # serve the production build locally
```

## Environment

Copy `.env.example` to `.env` for local overrides. Both values are public.

| Variable                    | Purpose                                              | Fallback                |
| --------------------------- | ---------------------------------------------------- | ----------------------- |
| `NUXT_PUBLIC_SITE_URL`      | Canonical URL, Open Graph URLs, sitemap, robots       | `http://localhost:3000` |
| `NUXT_PUBLIC_DASHBOARD_URL` | “Sign in” / “Open the dashboard” destination          | `http://localhost:4200` |

Set `NUXT_PUBLIC_SITE_URL` to the real origin in production — canonical tags,
`og:url`, `og:image`, `robots.txt`, and `sitemap.xml` are all derived from it.

## Deploy to Vercel

1. Push this repository to GitHub as `website`.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel detects Nuxt
   automatically; leave the build command (`nuxt build`) and output defaults.
3. Add `NUXT_PUBLIC_SITE_URL` (and `NUXT_PUBLIC_DASHBOARD_URL`) for Production
   and Preview, then deploy.
4. After the first deploy, confirm `https://<domain>/robots.txt`,
   `/sitemap.xml`, and `/og.png` resolve, then submit the sitemap in Google
   Search Console and run the [Rich Results Test](https://search.google.com/test/rich-results).

Or from the CLI:

```bash
npx vercel
npx vercel --prod
```

No `vercel.json` is required. Nitro emits the Vercel serverless build from
`nuxt build`.

## Project structure

```
app/
  app.vue                     # shell: skip link, header, page, footer
  assets/css/main.css         # Tailwind import, brand tokens, base styles
  components/
    SiteHeader.vue            # sticky nav + accessible mobile menu
    HeroSection.vue
    ProductSection.vue
    HowItWorksSection.vue
    DevelopersSection.vue
    SecuritySection.vue
    FaqSection.vue
    CtaSection.vue
    SiteFooter.vue
    CodeWindow.vue            # shared code panel
    SectionHeading.vue
    FeatureIcon.vue
    BrandMark.vue
  pages/index.vue             # one-pager composition + SEO metadata/JSON-LD
  utils/site.ts               # all copy: nav, features, steps, FAQs, endpoints
public/                       # favicon, apple icon, OG image, webmanifest
server/routes/
  robots.txt.ts
  sitemap.xml.ts
```

Most copy lives in `app/utils/site.ts`. Section components read from it, and the
FAQ answers are reused for the `FAQPage` structured data, so editing an answer
updates both the page and the schema.

## SEO

- Server-rendered HTML with a unique title, description, and canonical URL.
- Open Graph and Twitter card metadata, with a 1200×630 `public/og.png`.
- JSON-LD graph: `Organization`, `WebSite`, `WebPage`, and `FAQPage`.
- `robots.txt` and `sitemap.xml` generated from `NUXT_PUBLIC_SITE_URL`.
- Security headers (`nosniff`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`) via `routeRules`.
- One `<h1>`, ordered heading levels, landmark elements, and a skip link.

## Design standards

These match the rest of the Stream product:

- **Primary color:** `#1B4EF5` (`brand-600`). `brand-50`, `brand-500`, and
  `brand-700` are the supporting tokens. Do not substitute another blue.
- **Corner radius:** 8px maximum. Use `rounded-lg` for surfaces, cards, inputs,
  and buttons. `rounded-full` is only for dots and circular indicators.
- **Semantic colors:** slate for neutrals, red/amber/emerald for feedback only —
  never the brand color for status.
- **Type:** self-hosted Inter Variable via `@fontsource-variable/inter`.
- **Tone:** calm, direct, no fabricated logos, testimonials, or pricing.

## Notes

- The site is intentionally SSR rather than prerendered so every request is
  server-rendered. Nitro caches static assets; the page itself is cheap.
- The dashboard link defaults to the Angular dev server at port 4200. Set
  `NUXT_PUBLIC_DASHBOARD_URL` to the deployed dashboard.
