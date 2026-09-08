import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import DirectionsMap from "@/components/DirectionsMap";
import HeroSlideshow from "@/components/HeroSlideshow";

export const metadata = buildMetadata("home");

const categories = [
  { name: "Sports Cards", href: "/sports-cards", icon: "🏆", tag: "Bulk buying" },
  { name: "Pokémon", href: "/pokemon", icon: "🃏", tag: "New & vintage" },
  { name: "Non-Sports Cards", href: "/non-sports-cards", icon: "🎴", tag: "TCG & pop culture" },
  { name: "Records", href: "/records", icon: "🎵", tag: "In-store new releases" },
  { name: "Comics", href: "/comics", icon: "📖", tag: "Golden Age to Modern" },
  { name: "Movie Posters", href: "/posters", icon: "🖼", tag: "Vintage & modern" },
  { name: "Memorabilia", href: "/memorabilia", icon: "👕", tag: "Signed & authenticated" },
  { name: "Supplies", href: "/supplies", icon: "📦", tag: "Sleeves, binders..." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — swap for real JPG/WebP images at /public/images/hero/.
          Recommended size: 1600x500px. Ken Burns animation + slide order
          become admin-managed in Phase 3. */}
      <HeroSlideshow />

      {/* WELCOME / INTRO — approved copy */}
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
          <div className="home-hero-label" style={{ marginTop: 12 }}>
            <div>
              <div className="hero-label">Buy · Sell · Trade</div>
              <div className="hero-sublabel">Pokémon · Sports Cards · Records · Comics &amp; more</div>
            </div>
            <div className="hero-right" />
          </div>
        </div>
      </div>

      <div className="section-header">Shop by category</div>
      <div className="categories-grid">
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

      <div className="action-banner blue" style={{ marginTop: 12 }}>
        <div className="banner-left">
          Trading &amp; Consignment
          <span>Bring items to trade or consign — ask in-store for details</span>
        </div>
        <Link className="banner-btn" href="/buy-sell-trade">
          Learn More →
        </Link>
      </div>

      <DirectionsMap />
    </>
  );
}
