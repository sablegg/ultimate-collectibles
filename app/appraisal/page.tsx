import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { formEndpoints } from "@/lib/siteData";

export const metadata = buildMetadata("appraisal");

export default function AppraisalPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections Galore!"
        header="Free Collection Appraisals"
        intro="We have appraised thousands of collections throughout the years. If you are not sure what your collection is worth, bring it in and we'll walk you through it — no charge, no pressure."
      />
      <div className="page-content">
        <div className="content-block">
          <p>
            Our team has years of experience across vintage sports, modern
            sports, Pokémon &amp; non-sports, records, sports and movie
            memorabilia, autographed and exceedingly rare items, comics,
            posters &amp; print materials, toys and more!
          </p>
          <p>
            Appraising baseball card collections, football card collections
            or basketball card collections is a core strength that requires
            experts. Regardless, we look forward to seeing what you have and
            finding appropriate solutions for your goals.
          </p>
          <p>
            Small collections can be brought into store for immediate
            attention, but a lot of collections go far beyond what we can
            handle in a few minutes. Large collections do require a
            conversation or an appointment. We can do appraisals only for
            estate purposes, come see large collections to value them,
            ascertain the best outlet for sales of prestigious or valuable
            items. We can either buy them directly, or have them auctioned
            for you depending on the situation.
          </p>
        </div>

        <div className="content-block">
          <h2 className="content-block-title">What to expect</h2>
          <ul className="bullet-list">
            <li>Schedule a time that works for you</li>
            <li>Bring your collection in to the store</li>
            <li>If too big, we can make arrangements for us to come to you</li>
            <li>We go through it together and explain what we&rsquo;re seeing</li>
            <li>We can do a valuation only (fee may apply)</li>
            <li>We&rsquo;ll make an offer if you&rsquo;re interested in selling — zero obligation</li>
            <li>Make arrangements to send to auction (fee may apply)</li>
            <li>We make referral to third-parties if not in our wheelhouse</li>
          </ul>
        </div>

        <div className="content-block">
          <p>
            Regardless of how things pan out, you gain insight and knowledge
            and get put on the right path. Expect a fair offer or a referral
            to an expert that can get you an offer if it&rsquo;s not something
            we handle directly.
          </p>
        </div>

        <div className="content-block we-buy-block">
          <h2 className="content-block-title">Book an Appraisal</h2>
          <InquiryForm
            formName="Collection Appraisal"
            endpoint={formEndpoints.appraisal}
            showCollectionField
            showPathField
            submitLabel="Book an Appraisal →"
          />
        </div>
      </div>
    </>
  );
}
