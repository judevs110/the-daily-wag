# The Daily Wag — thedailywag.co.uk

Production marketing site for The Daily Wag, a premium dog walking and mobile
grooming business covering Windsor, Eton, Ascot, Maidenhead and Slough.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. Every page
is statically generated; the only server code is the enquiry form endpoint.

## Running it

```bash
npm install
npm run dev      # local dev on http://localhost:3000
npm run build    # production build (all routes SSG)
npm start        # serve the production build
```

Deploys to Vercel with zero configuration — import the repo, keep the defaults.

## Where things live

| Path | What it is |
| --- | --- |
| `src/lib/site.ts` | **All business facts** — prices, phone, email, hours, geo. Edit here, changes flow everywhere including JSON-LD. |
| `src/lib/areas.ts` | The five town pages' copy (unique per town) |
| `src/lib/services.ts` | Service tiers and what's included |
| `src/lib/faqs.ts` | FAQ questions and answers (also emitted as FAQPage schema) |
| `src/lib/blog.ts` | Blog posts (content model, no CMS) |
| `src/lib/schema.ts` | JSON-LD builders (LocalBusiness, Service, FAQPage, BreadcrumbList, Article) |
| `src/app/api/enquiry/route.ts` | Contact form endpoint — **stub**, see TODO inside for wiring up Resend |
| `public/llms.txt` | Machine-readable business summary for LLM crawlers |

## SEO / AEO / GEO already in place

- Unique title/description/canonical + OpenGraph/Twitter cards on every route
- Unique **static OG image per page**, generated at build time (`opengraph-image.tsx` files)
- JSON-LD on every route (validated — LocalBusiness, Service with offers, FAQPage, BreadcrumbList, Article)
- `sitemap.xml` and `robots.txt` via App Router conventions; `llms.txt` in `public/`
- Citable summary paragraph at the top of every page; FAQ answers written to be liftable verbatim
- Placeholder prices (grooming, day sitting) are **excluded from structured data** on purpose

Verified at build time: Lighthouse (mobile) 95–97 performance, 100 accessibility,
100 best practices, 100 SEO across all page types; zero type errors; zero lint errors.

## Before launch — content you need to supply

1. **Grooming & day-sitting prices** — currently marked "launch pricing to be
   confirmed" in `src/lib/site.ts` (`PLACEHOLDER_PRICES`). Confirm and remove the caveat.
2. **Phone number** — `01753 123456` came from the old site; double-check it's real.
3. **Founder bio** — `src/app/about/page.tsx` has a marked TODO for name/photo/bio.
4. **Real testimonials** — the home page has an honestly-labelled placeholder quote.
5. **Email delivery** — wire the enquiry endpoint to Resend (TODO in `src/app/api/enquiry/route.ts`).
6. **Social links** — none are shown yet; add to the footer when accounts exist.
7. **Domain** — metadata assumes `https://thedailywag.co.uk` (`SITE.url`).
8. **Photography** — see the shot list below.

## Photography to shoot

Every illustrated placeholder renders its own brief in a small caption chip
on the page ("Photo to shoot: …"). Swap `<PlaceholderArt>` for `next/image`
inside the same wrapper (aspect ratios are set by the parent, so no layout
shift). The full list:

- **Home hero** — happy spaniel mid-walk on the Long Walk, Windsor Castle soft-focus behind, golden morning light (portrait, 4:5)
- **Home, standards section** — four dogs sitting in a row on Windsor Great Park grass, leads in a neat hand (square)
- **Dog walking** — walker from behind with two dogs on the Long Walk avenue, autumn (3:4)
- **Grooming** — van interior, dog mid-blow-dry, groomer's hands visible, natural light (square)
- **Grooming gallery** — 2 real before/after pairs, with owner permission (3:4 each)
- **Puppy visits** — puppy mid-zoomie in a Windsor garden (4:5)
- **About** — founder crouched at dog level on the Long Walk, candid (4:5)
- **Areas index** — one signature-location shot per town: Long Walk (Windsor), The Brocas (Eton), Swinley Forest (Ascot), Ockwells Park (Maidenhead), Herschel Park (Slough) (4:3)

Shoot warm, low, at dog height, golden hour where possible — the palette is
cream/green/clay, so grass, tree bark and autumn light will sit naturally.
