import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("faqs");

// Phase 3: employee-editable from the admin Content Manager.
// v1: hand-edit this array directly.
const faqs = [
  {
    q: "Do I need an appointment to sell my collection?",
    a: "Not for smaller collections — just walk in during store hours. For larger or mixed collections, we highly recommend booking a free appraisal so we can give it the time it deserves. You can also bring items to card shows and most events for us to look at.",
  },
  {
    q: "How do you determine what you pay for cards/records/etc.?",
    a: "We look at current market pricing, condition, and demand. We're always upfront about how we arrive at our offers.",
  },
  {
    q: "Do you buy graded cards?",
    a: "Yes — we buy PSA, BGS, CGC, and other graded cards. Bring them in or reach out.",
  },
  {
    q: "Can I trade instead of sell?",
    a: "Absolutely. We love trades. Bring in what you have and we'll work something out.",
  },
  {
    q: "Do you do mail-in buys?",
    a: "Yes, contact us first so we can walk you through the process. We do have deals happening all across the country.",
  },
  {
    q: "Will you appraise a large collection?",
    a: "Yes! We will appraise nationwide depending on specifics. We can purchase or provide appraisal only depending on the situation.",
  },
  {
    q: "Where are you located?",
    a: "908 Mainstreet, Hopkins MN 55343 — right in downtown Hopkins.",
  },
  {
    q: "What are your hours?",
    a: "Monday: Closed · Tuesday–Saturday: 10am–6pm · Sunday: 11am–5pm",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        header="Frequently Asked Questions"
        intro="Got questions? We've got answers. If you don't see what you're looking for here, give us a call, stop by the store, or see us at an event or card show."
      />
      <div className="page-content">
        {faqs.map((f) => (
          <div className="faq-item" key={f.q}>
            <div className="faq-question">{f.q}</div>
            <div className="faq-answer">{f.a}</div>
          </div>
        ))}
      </div>
    </>
  );
}
