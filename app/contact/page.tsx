import Link from "next/link";
import PageHero from "@/components/PageHero";
import { heroForSlug } from "@/lib/heroImages";
import InquiryForm from "@/components/InquiryForm";
import DirectionsMap from "@/components/DirectionsMap";
import { buildMetadata } from "@/lib/seo";
import { business, formEndpoints } from "@/lib/siteData";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <>
         <PageHero
           header="Contact Us"
           intro="Have a question about an item, a collection, or store hours? Get in touch — we reply as quickly as we can."
           heroImage={heroForSlug("contact")}
         />
      <div className="page-content">
        <div className="content-block">
          <h2 className="content-block-title">Contact details</h2>
          <p>
            Phone: <a href={business.phoneHref}>{business.phone}</a>
            <br />
            <a href={business.emailHref} className="contact-email-button" aria-label="Email Ultimate Collectibles">
              Email Us
            </a>
            <br />
            Address: {business.fullAddress}
          </p>
          <p>
            You can also find us at a show or upcoming event —{" "}
            <Link href="/events" className="text-link">
              see the Events page →
            </Link>
          </p>
        </div>

        <div className="content-block we-buy-block" id="email-list">
          <h2 className="content-block-title">Send a Message</h2>
          <InquiryForm
            formName="Contact"
            endpoint={formEndpoints.contact}
            formVariant="contact"
            submitLabel="Send Message"
          />
        </div>
      </div>

      <DirectionsMap />
    </>
  );
}
