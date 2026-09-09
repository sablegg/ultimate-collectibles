# Ultimate Collectibles LLC — Website (Phase 1)

Static Next.js site. No database, no backend, no admin login yet — that's
Phase 3. Every page's text lives in a small number of data files so
Phase 3 can convert them into a CMS without rebuilding the site.

## What's here

- 22 pages: homepage, 8 category pages (shared template), Buy/Sell/Trade,
  Buying Collections, Appraisal, Events, About, Contact, FAQs, Photos,
  eBay, Legal, plus a placeholder /admin/login stub.
- Forms (Contact, Buying Collections, Appraisal, and Newsletter) post to
  Formspree — a free form-relay service, no backend required. See
  `.env.local.example`.
- SEO: unique title/description per page (`lib/seo.ts`), sitemap.xml,
  robots.txt, and LocalBusiness schema in the root layout.
- Brand colors, fonts, and layout ported directly from the approved
  homepage_mockup.html.

## Still needed before/at launch

1. **Hero images + logo** — drop files into `/public/images/` per the
   README there, then swap the placeholder markup in
   `components/SiteHeader.tsx` (logo) and `app/page.tsx` (hero) for real
   `<Image>` tags.
2. **Formspree endpoints** — create a free account, make 4 forms
   (Contact, Buying Collections, Appraisal, Newsletter), and fill in
   `.env.local`.
3. **eBay store URL** — `app/ebay/page.tsx` has a placeholder link.
4. **Legal page** — has attorney review the Terms/Shipping/Refund/Privacy
   copy in `app/legal/page.tsx` before relying on it.
5. **Google Business Profile** — claim/verify separately (not code).

## Local development

```
npm install
npm run dev
```

## Deploy

Push this repo to GitHub, import it in Vercel, then point your GoDaddy
domain at Vercel (exact DNS records provided at deploy time).

## Phase 3 note

`lib/siteData.ts` and `lib/categoryContent.ts` are written as the shape
your Payload CMS collections should take. When Phase 3 starts, these
become database-backed content with per-page, per-role permissions,
not a rewrite of the pages themselves.
