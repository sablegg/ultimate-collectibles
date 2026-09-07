Hero images
===========

Place hero/banner images in this folder. Recommended filenames:

- `hero-1.jpg`, `hero-2.jpg`, ... (JPEG for photographic images)
- `hero-1.png` if transparency is required

Guidance
--------

- Keep original high-resolution files for archival purposes.
- The included script produces resized variants in `optimized/` at widths: 1920, 1280, 800, 400.
- Use the `optimized/` versions in the site for responsive `<picture>` sources.

Optimizing locally (macOS - built-in `sips`)
-----------------------------------------

```bash
chmod +x ./scripts/optimize-hero.sh
./scripts/optimize-hero.sh
```

Advanced compression
---------------------

After resizing, run `jpegoptim` or `mozjpeg` for better compression:

```bash
jpegoptim --max=85 optimized/*.jpg
```

Committing
---------

After adding images, commit and push:

```bash
git add public/images/hero
git commit -m "Add hero images"
git push
```

If you upload hero images here, I can add them into this folder and generate optimized variants.
