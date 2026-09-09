"use client";

import Link from "next/link";
import { useRef } from "react";
import DirectionsMap from "@/components/DirectionsMap";
import HeroSlideshow from "@/components/HeroSlideshow";

const categories = [
  { name: "Sports Cards", href: "/sports-cards", icon: "🏆", tag: "Bulk buying" },
  { name: "Pokémon", href: "/pokemon", icon: "🃏", tag: "New & vintage" },
  { name: "Non-Sports Cards", href: "/non-sports-cards", icon: "🎴", tag: "TCG & pop culture" },
  { name: "Records", href: "/records", icon: "🎵", tag: "In-store new releases" },
  { name: "Comics", href: "/comics", icon: "📖", tag: "Golden Age to Modern" },
  { name: "Toys", href: "/toys", icon: "🧩", tag: "Figures & collectibles" },
  { name: "Movie Posters", href: "/posters", icon: "🖼", tag: "Vintage & modern" },
  { name: "Memorabilia", href: "/memorabilia", icon: "👕", tag: "Signed & authenticated" },
  { name: "Supplies", href: "/supplies", icon: "📦", tag: "Sleeves, binders..." },
];

export default function HomePageClient() {
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  const scrollCategories = (direction: "left" | "right") => {
    const el = categoriesRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.7, 260);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      <HeroSlideshow />

      <div className="page-content" style={{ paddingBottom: 0 }}>
        <div className="content-block" style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 26, color: "#111", marginBottom: 12 }}>
            Collectibles Store — Hopkins, MN
          </h1>
          <p style={{ color: "#444", lineHeight: 1.7 }}>
            Come to the store to shop new and vintage Sports Cards, Pokémon,
            Records &amp; Much More... You can bring in items to trade or
            sell, and join the email list so you can catch up with us at one
            of our many upcoming shows/events!
          </p>
          <div className="home-hero-label">
            <div className="home-hero-label-inner">
              <div className="hero-label">Buy • Sell • Trade</div>
              <div className="hero-sublabel">Pokémon • Sports Cards • Records • Comics • Toys • More</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-header-wrap">
        <div className="section-header">Shop by category</div>
        <div className="category-scroll-controls" aria-label="Category navigation">
          <button type="button" className="scroll-arrow" onClick={() => scrollCategories("left")} aria-label="Scroll categories left">←</button>
          <button type="button" className="scroll-arrow" onClick={() => scrollCategories("right")} aria-label="Scroll categories right">→</button>
        </div>
      </div>
      <div className="categories-grid" ref={categoriesRef}>
        {categories.map((c) => (
          <Link key={c.href} href={c.href} className="cat-card">
            <div className="cat-icon">{c.icon}</div>
            <div className="cat-name">{c.name}</div>
            <div className="cat-tag">{c.tag}</div>
          </Link>
        ))}
      </div>

      <div className="action-banner blue">
        <div className="banner-left">
          Buying Collections
          <span>We buy entire collections — Pokémon, sports, records &amp; more</span>
        </div>
        <Link className="banner-btn" href="/buying-collections">
          Get a Quote →
        </Link>
      </div>

      <div className="action-banner red">
        <div className="banner-left">
          Free Collection Appraisals
          <span>Schedule a time — we&rsquo;ll explain the value of your collection</span>
        </div>
        <Link className="banner-btn" href="/appraisal">
          Book Now →
        </Link>
      </div>

      <div className="action-banner blue">
        <div className="banner-left">
          Trading
          <span>Bring items to trade — ask in-store for details</span>
        </div>
        <Link className="banner-btn" href="/buy-sell-trade">
          Learn More →
        </Link>
      </div>

      <DirectionsMap />
    </>
  );
}
