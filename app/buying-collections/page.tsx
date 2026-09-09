import PageHero from "@/components/PageHero";
import { heroForSlug } from "@/lib/heroImages";
import InquiryForm from "@/components/InquiryForm";
import { buildMetadata } from "@/lib/seo";
import { formEndpoints } from "@/lib/siteData";

export const metadata = buildMetadata("buyingCollections");

const whatWeBuy = [
  "Vintage sports cards - graded, raw, sealed & sets",
  "Modern sports cards - graded, raw, or sealed cards in any sport",
  "Non-sports cards - TV, Movie, and Pop culture cards of any type",
  "TCG cards - Pokémon, Magic, and many more",
  "Sports memorabilia - balls, bats, signage, tickets - just about anything sports",
  "Movie posters & memorabilia - cards, props, signs & autographed items",
  "Military & Science - cards, toys, figures & collectibles",
  "Music related signs, posters, toys & figures - anything music",
  "Toys - carded toys, lunch boxes, figures, vintage boxed sets",
  "Records - CDs, tapes, records, vintage music gear, home stereo, etc.",
];

export default function BuyingCollectionsPage() {
  return (
    <>
      <PageHero
        header="We Buy Collections"
        intro="Cleaning out a collection? Downsizing? Inherited something you're not sure about? We buy collections of all sizes — Pokémon, sports cards, records, comics, posters, memorabilia, and more. We make the process easy and give fair offers."
        heroImage={heroForSlug("buying-collections")}
      />
      <div className="page-content">
        <div className="content-block">
          <h2 className="content-block-title">How it works</h2>
          <ul className="bullet-list">
            <li>Drop it off in store — no appointment needed for smaller collections</li>
            <li>Book a free appraisal for larger or mixed collections</li>
            <li>Do an appraisal for a fee without intent to sell</li>
            <li>Mail it in — contact us first and we&rsquo;ll walk you through it</li>
            <li>Meet us at a card show</li>
            <li>We can travel to you in certain cases</li>
            <li>We&rsquo;ll make you an offer — cash or store credit (store credit gets you more!)</li>
          </ul>
        </div>

        <div className="content-block">
          <h2 className="content-block-title">What we buy</h2>
          <p>
            Pokémon cards · Sports cards · Non-sports cards · Vinyl records ·
            Comics · Movie posters · Sports memorabilia · Collectible toys ·
            Autographs · And more — just ask.
          </p>
          <ul className="bullet-list">
            {whatWeBuy.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="content-block we-buy-block">
          <h2 className="content-block-title">Get a Quote</h2>
          <p>
            Tell us about your collection below and we&rsquo;ll get back to you
            to talk next steps — no obligation.
          </p>
          <InquiryForm
            formName="Buying Collections"
            endpoint={formEndpoints.serviceInquiries}
            formVariant="service"
            showCollectionField
            showPathField
            showServiceFields
            submitLabel="Submit Form"
          />
        </div>
      </div>
    </>
  );
}
