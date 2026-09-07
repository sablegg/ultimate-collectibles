#!/usr/bin/env bash
set -euo pipefail

# Resize hero images into public/images/hero/optimized

SRC_DIR="public/images/hero"
OUT_DIR="$SRC_DIR/optimized"
mkdir -p "$OUT_DIR"

shopt -s nullglob
for img in "$SRC_DIR"/*.{jpg,jpeg,png,JPG,PNG,JPEG}; do
  [ -e "$img" ] || continue
  base=$(basename "$img")
  name="${base%.*}"
  ext="${base##*.}"
  # widths: 1920, 1280, 800, 400
  sips -Z 1920 "$img" --out "$OUT_DIR/${name}-1920.${ext}" >/dev/null
  sips -Z 1280 "$img" --out "$OUT_DIR/${name}-1280.${ext}" >/dev/null
  sips -Z 800 "$img" --out "$OUT_DIR/${name}-800.${ext}" >/dev/null
  sips -Z 400 "$img" --out "$OUT_DIR/${name}-400.${ext}" >/dev/null
done

echo "Hero images resized into: $OUT_DIR"
