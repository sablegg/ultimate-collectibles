import PageHero from "@/components/PageHero";
import { heroForSlug } from "@/lib/heroImages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("ebay");

// TODO: replace with your live eBay store URL once the account name
// discrepancy (ultimate-collectiblesllc vs. talyho-enterprise) is
// resolved. Full listing feed via the eBay API is Phase 3+ scope —
// this is a static link-out for v1.
const ebayStoreUrl = "https://www.ebay.com/str/ultimatecollectiblesllc";

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
