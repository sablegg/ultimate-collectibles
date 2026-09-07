#!/usr/bin/env bash
set -euo pipefail

# Simple macOS image resize helper using `sips`.
# Places resized images into `public/images/logo/optimized/`.

SRC_DIR="public/images/logo"
OUT_DIR="$SRC_DIR/optimized"
mkdir -p "$OUT_DIR"

shopt -s nullglob
for img in "$SRC_DIR"/*.{png,jpg,jpeg,JPG,PNG,JPEG}; do
  [ -e "$img" ] || continue
  base=$(basename "$img")
  name="${base%.*}"
  ext="${base##*.}"
  # sizes: 1024, 512, 256, 128, 64, 32
  sips -Z 1024 "$img" --out "$OUT_DIR/${name}-1024.${ext}" >/dev/null
  sips -Z 512 "$img" --out "$OUT_DIR/${name}-512.${ext}" >/dev/null
  sips -Z 256 "$img" --out "$OUT_DIR/${name}-256.${ext}" >/dev/null
  sips -Z 128 "$img" --out "$OUT_DIR/${name}-128.${ext}" >/dev/null
  sips -Z 64 "$img" --out "$OUT_DIR/${name}-64.${ext}" >/dev/null
  sips -Z 32 "$img" --out "$OUT_DIR/${name}-32.${ext}" >/dev/null
done

echo "Optimized/resized images written to: $OUT_DIR"

echo "Tip: for better compression, run pngquant/jpegoptim on the files in $OUT_DIR"
