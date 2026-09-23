import PageHero from "@/components/PageHero";
import { heroForSlug } from "@/lib/heroImages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("ebay");

import { ebayStoreUrl } from "@/lib/siteData";

export default function EbayPage() {
  return (
    <>
      <PageHero
        header="Shop on eBay"
        intro="Can't make it to the store? Browse our active eBay listings — we ship anywhere in the US."
        heroImage={heroForSlug("ebay")}
      />
      <div className="page-content" style={{ textAlign: "center" }}>
        <a href={ebayStoreUrl} target="_blank" rel="noopener noreferrer" className="ebay-btn">
          Visit Our eBay Store →
        </a>
      </div>
    </>
  );
}
