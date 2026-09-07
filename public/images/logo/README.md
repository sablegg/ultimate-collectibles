Logo folder
===========

Place the official logo files you provided in this folder. Recommended filenames:

- `logo.png` (preferred, full-color PNG)
- `logo.jpg` (optional JPG fallback)

Guidance
--------

- Keep the original full-resolution files for archival purposes.
- Add optimized/resized variants in the `optimized/` subfolder (the included script creates this).
- Typical sizes to produce: 1024 (full), 512, 256, 128, 64, 32 (favicon)

Optimizing locally (macOS - built-in `sips`)
-----------------------------------------

Run the helper script to generate resized images and place them in `optimized/`:

```bash
chmod +x ./scripts/optimize-logos.sh
./scripts/optimize-logos.sh
```

Advanced optimization
---------------------

For better compression consider:

- `pngquant` or `zopfli` for PNGs
- `jpegoptim` or `mozjpeg` for JPEGs

Example (pngquant):

```bash
pngquant --quality=60-80 --ext .png --force optimized/*.png
```

Committing
---------

After adding or updating files, commit normally and push to `origin`:

```bash
git add public/images/logo
git commit -m "Add official logos and optimization helper"
git push
```

If you want me to push these changes to GitHub, authenticate via `gh auth login` or switch to SSH and tell me to proceed.
