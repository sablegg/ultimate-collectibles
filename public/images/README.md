# Image drop-in guide

- `logo.png` (goes directly in /public/images/) — your logo. Once added,
  swap the `.logo-box` placeholder in components/SiteHeader.tsx for
  `<Image src="/images/logo.png" ... />`.
- `hero/` — hero banner images, 1600x500px recommended (JPG or WebP).
  Once added, swap the `.hero-placeholder` div in app/page.tsx for an
  `<Image>` or a small carousel component.
- `gallery/` — photos for the /photos page. List filenames in
  app/photos/page.tsx.
- `og-default.jpg` (goes directly in /public/images/) — 1200x630px image
  used when links to this site are shared on social media.
