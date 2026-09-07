import Link from "next/link";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/siteData";

export const metadata = buildMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        header="About Ultimate Collectibles"
        intro="We're a collectibles shop based in Hopkins, MN — right in the heart of the Twin Cities. We buy, sell, and trade Pokémon cards, sports cards, vinyl records, comics, movie posters, memorabilia, and more. Whether you're a lifelong collector or just getting started, you're welcome here."
      />
      <div className="page-content">
        <div className="content-block">
          <h2 className="content-block-title">Our story</h2>
          <p>
            We&rsquo;ve been around for a long time, and it shows. Our store
            carries a wide variety of new and old finds, with a focus on
            older, unique items alongside the modern staples that make the
            collectibles hobby so vibrant.
          </p>
          <p>
            Our passions are music, games, movies and sports, so expect to
            find rare vintage sports trading cards mixed with pop culture
            items, records, and movie memorabilia — it&rsquo;s quite an
            experience for anyone who loves this hobby.
          </p>
          <p>
            You can also find us at a number of local card and toy shows, as
            well as out-of-state shows.{" "}
            <Link href="/events" className="text-link">
              Find us at a show or upcoming event — see the Events page →
            </Link>
          </p>
        </div>

        <div className="ebay-callout">
          <span>Check out our eBay store in case we have items you&rsquo;re after posted.</span>
          <Link href="/ebay" className="ebay-btn">
            Visit Our eBay Store →
          </Link>
        </div>

        <div className="content-block" style={{ marginTop: 32 }}>
          <h2 className="content-block-title">What we carry</h2>
          <p>
            Pokémon · Sports Cards · Non-Sports Cards · Vinyl Records ·
            Comics · Movie Posters · Memorabilia · Supplies · And much more!
          </p>
        </div>

        <div className="content-block we-buy-block">
          <h2 className="content-block-title">Come visit us</h2>
          <p>
            {business.fullAddress}
            <br />
            {business.phone}
          </p>
        </div>
      </div>
    </>
  );
}
