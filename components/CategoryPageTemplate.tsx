import Link from "next/link";
import PageHero from "./PageHero";
import { CategoryPageData } from "@/lib/categoryContent";

export default function CategoryPageTemplate({ data }: { data: CategoryPageData }) {
  return (
    <div className="category-page">
      <PageHero header={data.header} intro={data.intro} />

      <div className="page-content">
        {data.bullets.length > 0 && (
          <div className="content-block">
            {data.bulletsTitle && (
              <h2 className="content-block-title">{data.bulletsTitle}</h2>
            )}
            <ul className="bullet-list">
              {data.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Featured Items — admin-curated list, Phase 3.
            Renders nothing in v1 unless featuredEnabled is flipped on. */}
        {data.featuredEnabled && (
          <div className="content-block featured-block">
            <h2 className="content-block-title">
              {data.featuredLabel || "Featured Items"}
            </h2>
            <p className="text-muted">Featured items coming soon.</p>
          </div>
        )}

        {data.weBuyTitle && (
          <div className="content-block we-buy-block">
            <h2 className="content-block-title">{data.weBuyTitle}</h2>
            <p>{data.weBuyText}</p>
            <Link href="/buying-collections" className="text-link">
              Schedule an appointment →
            </Link>
          </div>
        )}

        <div className="ebay-callout">
          <span>Check out our eBay store in case we have items you&rsquo;re after posted.</span>
          <Link href="/ebay" className="ebay-btn">
            Visit Our eBay Store →
          </Link>
        </div>
      </div>
    </div>
  );
}
