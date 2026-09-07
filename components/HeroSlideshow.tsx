"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slideshowImages } from "@/lib/heroImages";

export default function HeroSlideshow({ intervalMs = 6000 }: { intervalMs?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideshowImages.length), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  const current = slideshowImages[index];

  return (
    <div className="hero-section">
      <Link href={current.href || "/"} className="hero-slide" aria-label={current.alt || "hero"}>
        <img src={current.src} alt={current.alt || "hero image"} />
      </Link>

      <div className="hero-overlay">
        <div>
          <div className="hero-label">Buy · Sell · Trade</div>
          <div className="hero-sublabel">Pokémon · Sports Cards · Records · Comics &amp; more</div>
        </div>
        <div className="hero-right" />
      </div>
    </div>
  );
}
