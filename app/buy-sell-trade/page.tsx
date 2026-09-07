import Link from "next/link";
import PageHero from "@/components/PageHero";
import { heroForSlug } from "@/lib/heroImages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("buySellTrade");

export default function BuySellTradePage() {
  return (
    <>
      <PageHero
        header="Buy, Sell &amp; Trade at Ultimate Collectibles"
        intro="Whether you're looking to add to your collection, let go of something you no longer need, or swap for something new — we make it happen. Walk in anytime during store hours and our team will take a look at what you've got or point you towards the items you are looking for!"
        heroImage={heroForSlug("buy-sell-trade")}
      />
      <div className="page-content">
        <div className="content-block">
          <h2 className="content-block-title">Buying from us</h2>
          <p>
            Browse our constantly changing in-store inventory of Pokémon,
            sports cards, records, comics, posters, memorabilia, and more.
            New items come in every week.
          </p>
          <Link href="/" className="text-link">
            Select categories from main page →
          </Link>
        </div>

        <div className="content-block we-buy-block">
          <h2 className="content-block-title">Selling to us</h2>
          <p>
            We buy collections of all sizes. Bring your items in and we&rsquo;ll
            make you a fair offer on the spot. No appointment needed for
            smaller collections — for larger collections, we recommend
            booking an appointment first.
          </p>
          <Link href="/buying-collections" className="text-link">
            More selling info →
          </Link>
        </div>

        <div className="content-block">
          <h2 className="content-block-title">Trading</h2>
          <p>
            Have something you want to trade toward something in the store?
            We love trades. Bring it in and let&rsquo;s talk.
          </p>
          <Link href="/contact" className="text-link">
            More trading info →
          </Link>
        </div>

        <div className="content-block">
          <h2 className="content-block-title">Appraisal</h2>
          <p>
            Have a family legacy collection, an estate that needs attention
            or just a very large collection? We have the expertise to
            provide appraisals and systems that can get top dollar for large
            or prestigious items.
          </p>
          <Link href="/appraisal" className="text-link">
            Find out more →
          </Link>
        </div>

        <div className="content-block">
          <h2 className="content-block-title">Events</h2>
          <p>
            We have regular in-store events as well as local sales. On top
            of that, we are premier vendors at many local, regional and
            out-of-state events.
          </p>
          <Link href="/events" className="text-link">
            See what&rsquo;s coming up →
          </Link>
        </div>

        <div className="form-notice">
          You can also submit a collection inquiry online —{" "}
          <Link href="/buying-collections">visit the Buying Collections page</Link>.
        </div>
      </div>
    </>
  );
}
