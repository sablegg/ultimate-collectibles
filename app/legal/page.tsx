import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("legal");

export default function LegalPage() {
  return (
    <>
      <div className="legal-nav">
        <a href="#terms">Terms of Use</a>
        <a href="#shipping">Shipping Policy</a>
        <a href="#refunds">Refund Policy</a>
        <a href="#privacy">Privacy Policy</a>
      </div>

      <div className="page-content">
        {/*
          NOTE: This is placeholder legal copy. Have an attorney review
          Terms of Use, Shipping Policy, Refund Policy, and Privacy Policy
          before this page is relied on in production.
        */}
        <div className="legal-section" id="terms">
          <h2>Terms of Use</h2>
          <p>
            By using this website, you agree to these terms. This site is
            operated by Ultimate Collectibles LLC, 908 Mainstreet, Hopkins
            MN 55343. Content is provided for informational purposes. We
            reserve the right to update these terms at any time.
          </p>
        </div>

        <div className="legal-section" id="shipping">
          <h2>Shipping Policy</h2>
          <p>
            To be completed in v2 when e-commerce and shipping are enabled.
            Placeholder: all orders ship via USPS or UPS. Processing time is
            1–2 business days. You will receive a tracking number once your
            order ships.
          </p>
        </div>

        <div className="legal-section" id="refunds">
          <h2>Refund Policy</h2>
          <p>
            To be completed in v2. Placeholder: all sales are final unless
            an item arrives damaged or not as described. Contact us within
            7 days of delivery if there is an issue with your order.
          </p>
        </div>

        <div className="legal-section" id="privacy">
          <h2>Privacy Policy</h2>
          <p>
            We collect your name and email when you sign up for our mailing
            list. We do not sell your information to third parties. Email
            communications are sent in accordance with CAN-SPAM regulations.
            You may unsubscribe at any time.
          </p>
        </div>

        <div className="legal-section">
          <h2>General</h2>
          <p>
            This website makes no promise to buy or sell at any price, nor
            does it offer a guarantee that we have any item in stock, and
            does not dictate final pricing of any kind.
          </p>
        </div>
      </div>
    </>
  );
}
