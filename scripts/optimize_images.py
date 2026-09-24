#!/usr/bin/env python3
"""Optimize every raster image under public/images/ into a WebP web asset.

Walks nested folders, resizes with LANCZOS while preserving aspect ratio,
strips EXIF/ICC/XMP metadata, writes a sibling .webp file at quality 80,
then deletes the original source file.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

try:
    from PIL import Image, UnidentifiedImageError
except ImportError:  # pragma: no cover
    sys.stderr.write(
        "Pillow is required. Install it with:  pip install Pillow\n"
    )
    raise SystemExit(1)

MAX_SIZE = (1920, 1080)
WEBP_QUALITY = 80
SOURCE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".tiff", ".tif", ".bmp"}

PROJECT_ROOT = Path(__file__).resolve().parent.parent
IMAGES_DIR = PROJECT_ROOT / "public" / "images"


def collect_source_images(root: Path) -> list[Path]:
    """Return every target image under root, sorted for stable logs."""
    images: list[Path] = []
    for path in root.rglob("*"):
        if path.is_file() and path.suffix.lower() in SOURCE_EXTENSIONS:
            images.append(path)
    return sorted(images)


def prepare_for_webp(image: Image.Image) -> Image.Image:
    """Normalize color mode and drop attached metadata profiles.

    WebP supports RGB and RGBA. Palette, grayscale-alpha, CMYK and other
    modes are converted so the encoder receives a clean pixel buffer with
    no EXIF, ICC, or XMP sidecar data.
    """
    if image.mode in {"RGBA", "LA"}:
        converted = image.convert("RGBA")
    elif image.mode == "P":
        converted = image.convert("RGBA" if "transparency" in image.info else "RGB")
    elif image.mode != "RGB":
        converted = image.convert("RGB")
    else:
        converted = image.convert("RGB")

    stripped = Image.new(converted.mode, converted.size)
    stripped.paste(converted)
    stripped.info.clear()
    return stripped


def format_kb(num_bytes: int) -> str:
    """Format a byte count as a signed kilobyte figure for logs."""
    kilobytes = num_bytes / 1024
    if abs(kilobytes) >= 10:
        return f"{kilobytes:.0f} KB"
    return f"{kilobytes:.1f} KB"


def optimize_one(source: Path) -> int:
    """Convert a single image in place. Returns bytes saved (may be negative)."""
    destination = source.with_suffix(".webp")
    original_size = source.stat().st_size

    with Image.open(source) as img:
        img.load()
        img.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        web_ready = prepare_for_webp(img)

    web_ready.save(
        destination,
        format="WEBP",
        quality=WEBP_QUALITY,
        method=6,
    )
    web_ready.close()

    if not destination.is_file() or destination.stat().st_size == 0:
        raise OSError(f"WebP write produced an empty file: {destination}")

    if source.resolve() != destination.resolve():
        os.remove(source)

    saved = original_size - destination.stat().st_size
    relative = source.relative_to(PROJECT_ROOT).as_posix()
    print(f"Optimized: {relative} -> {destination.name} [Saved {format_kb(saved)}]")
    return saved


def main() -> int:
    if not IMAGES_DIR.is_dir():
        sys.stderr.write(f"Images directory not found: {IMAGES_DIR}\n")
        return 1

    sources = collect_source_images(IMAGES_DIR)
    if not sources:
        print(f"No JPEG/PNG/TIFF/BMP files found under {IMAGES_DIR.as_posix()}")
        return 0

    print(f"Found {len(sources)} image(s) under {IMAGES_DIR.relative_to(PROJECT_ROOT).as_posix()}/\n")

    optimized = 0
    failed = 0
    total_saved = 0

    for source in sources:
        relative = source.relative_to(PROJECT_ROOT).as_posix()
        try:
            total_saved += optimize_one(source)
            optimized += 1
        except (UnidentifiedImageError, OSError, ValueError) as exc:
            failed += 1
            print(f"Skipped (corrupt or unreadable): {relative} ({exc})")
        except Exception as exc:  # noqa: BLE001 — keep the batch running
            failed += 1
            print(f"Skipped (unexpected error): {relative} ({exc})")

    print(
        f"\nDone. Optimized {optimized} file(s), "
        f"failed {failed}, total saved {format_kb(total_saved)}."
    )
    return 1 if failed and not optimized else 0


if __name__ == "__main__":
    raise SystemExit(main())
