import Link from "next/link";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import DirectionsMap from "@/components/DirectionsMap";
import { buildMetadata } from "@/lib/seo";
import { business, formEndpoints } from "@/lib/siteData";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        header="Get in Touch"
        intro="Have a question? Want to know if we buy a specific item? Looking to schedule an appraisal? Drop us a line and we'll get back to you as soon as we can."
      />
      <div className="page-content">
        <div className="content-block">
          <h2 className="content-block-title">Contact details</h2>
          <p>
            Phone: <a href={business.phoneHref}>{business.phone}</a>
            <br />
            Email: <a href={`mailto:${business.email}`}>{business.email}</a>
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
            submitLabel="Send Message"
          />
        </div>
      </div>

      <DirectionsMap />
    </>
  );
}
