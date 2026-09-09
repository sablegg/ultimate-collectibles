import { buildMetadata } from "@/lib/seo";
import { business } from "@/lib/siteData";

export const metadata = buildMetadata("legal");

const effectiveDate = "2026-09-07";

export default function LegalPage() {
  return (
    <>
      <div className="legal-nav">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Use</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="page-content">
        <div className="legal-section" id="privacy">
          <h2>Privacy Policy</h2>
          <p>
            <strong>Effective Date:</strong> {effectiveDate}
          </p>

          <p>
            {business.name} doing business as {business.shortName} (&quot;{business.shortName}&quot;, "we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, contact us, subscribe to our email list, schedule appointments, register for events, or otherwise interact with us.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect information you provide voluntarily, including your name, email address, phone number, mailing address, appointment details, event registration information, and information contained in messages or form submissions. If you provide details about a collection (for example, photographs or descriptions), we may retain that information to respond to your inquiry or provide requested services.
          </p>
          <p>
            We also collect certain technical information automatically when you use our website, such as IP address, browser and device information, pages viewed, referring site, and usage patterns. We may use cookies and similar technologies for functionality, security, analytics, and, where applicable, marketing. You can manage cookie preferences through your browser; blocking some cookies may affect site functionality.
          </p>

          <h3>2. How We Use Information</h3>
          <p>
            We use collected information to operate and improve our website and services, respond to inquiries, schedule and manage appointments, communicate about services and events, send newsletters and promotional offers (if you opt in), maintain security and prevent fraud, comply with legal obligations, and protect our rights and property. We will not use your personal information for materially different purposes without notice or consent when required by law.
          </p>

          <h3>3. Email and Marketing Communications</h3>
          <p>
            If you subscribe to our email list, we may send newsletters, updates, event invitations, and promotional offers. You may unsubscribe at any time using the unsubscribe link included in emails or by contacting us directly. Unsubscribing from marketing messages does not prevent us from sending transactional or service-related messages about appointments or requests you make.
          </p>

          <h3>4. Events and Third Parties</h3>
          <p>
            For events we host or help coordinate, we may share contact or registration information with event organizers, venues, or service providers as necessary to facilitate the event. We may also use third-party service providers to host the website, send email, schedule appointments, or analyze site usage. Those providers have access to personal data only to perform services for us and are contractually required to keep it confidential.
          </p>

          <h3>5. How We Share Information</h3>
          <p>
            We may disclose information to service providers and contractors who perform functions on our behalf, to comply with legal obligations, or to protect the safety, rights, or property of our customers, employees, or the public. We do not sell your personal information for money. If applicable law treats certain transfers as a sale or sharing, we will provide notices and choices as required by that law.
          </p>

          <h3>6. Appointments, Appraisals, and Collections</h3>
          <p>
            Information you provide when requesting an appraisal or scheduling an appointment is used to arrange the service and communicate with you. Descriptions or photographs of collections you submit will be used to evaluate and respond to your inquiry. An appraisal is an opinion based on information available at the time and is not a guarantee of future selling price or market value.
          </p>

          <h3>7. Data Security and Retention</h3>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect personal information. However, no internet transmission or storage system is completely secure. We retain personal data only as long as necessary to fulfill the purposes outlined in this Policy, to comply with legal obligations, or to protect our legal rights.
          </p>

          <h3>8. Your Rights</h3>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal information, and to opt out of certain data sales or sharing. Residents of certain states (for example, California) have additional rights. To exercise rights or make a request, contact us using the details below. We may take reasonable steps to verify your identity before honoring requests.
          </p>

          <h3>9. Children</h3>
          <p>
            Our website is not intended for children under 13, and we do not knowingly collect personal information from children under 13. If you believe we have collected such information, contact us and we will take steps to delete it.
          </p>

          <h3>10. Third-Party Links</h3>
          <p>
            Our website may link to third-party websites or services that are not controlled by us. We are not responsible for the privacy practices or content of those sites.
          </p>
        </div>

        <div className="legal-section" id="terms">
          <h2>Terms of Use</h2>
          <p>
            <strong>Effective Date:</strong> {effectiveDate}
          </p>

          <p>
            These Terms of Use ("Terms") govern your access to and use of the website and services provided by {business.name} doing business as {business.shortName} ("{business.shortName}", "we", "us", or "our"). By accessing or using the website, submitting information, subscribing to communications, scheduling appointments, or otherwise interacting with the site, you agree to these Terms.
          </p>

          <h3>1. Website Purpose</h3>
          <p>
            The website provides information about {business.shortName}, our services, events, and ways to contact or schedule appointments. The website is not a general marketplace; submitting information does not by itself create a purchase, sale, appraisal engagement, consignment, or other transaction unless we expressly agree in writing.
          </p>

          <h3>2. Appointments and Appraisals</h3>
          <p>
            Appointment scheduling through the website is a request and does not guarantee that an appraisal will be completed. Appraisals are opinions based on available information and market conditions at the time; they are not guarantees of value or future sale price and do not constitute legal, tax, or investment advice.
          </p>

          <h3>3. User-Submitted Content</h3>
          <p>
            If you submit photographs, descriptions, comments, or other materials, you represent that you have the right to submit them. You grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, display, and distribute submitted content as reasonably necessary to provide and promote our services, subject to our Privacy Policy and applicable law.
          </p>

          <h3>4. Prohibited Conduct</h3>
          <p>
            You agree not to use the website to violate laws, impersonate others, interfere with our systems, introduce malicious code, infringe intellectual-property rights, collect information about other users without consent, or engage in fraudulent or abusive behavior.
          </p>

          <h3>5. Intellectual Property</h3>
          <p>
            All content on the website, including trademarks, logos, text, images, and code, is owned by {business.shortName} or licensed to us. You may not reproduce or use our content without permission.
          </p>

          <h3>6. Disclaimers and Limitation of Liability</h3>
          <p>
            THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, {business.shortName} DISCLAIMS WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY WILL NOT EXCEED THE AMOUNT, IF ANY, YOU PAID FOR A SPECIFIC SERVICE GIVING RISE TO A CLAIM.
          </p>

          <h3>7. Indemnification</h3>
          <p>
            You agree to indemnify and hold harmless {business.shortName} and its affiliates from claims, losses, and expenses arising from your violation of these Terms or your submission of content you did not have the right to provide.
          </p>

          <h3>8. Governing Law</h3>
          <p>
            These Terms are governed by the laws of {business.state} without regard to conflict-of-law principles. For certain disputes, additional venue or arbitration clauses may be added after legal review.
          </p>

          <h3>9. Changes to These Terms</h3>
          <p>
            We may update these Terms and the Privacy Policy as our business and website evolve. We will post updated terms with a revised "Last Updated" date. Continued use of the site after changes indicates acceptance of the updated terms.
          </p>
        </div>

        <div className="legal-section" id="contact">
          <h2>Contact</h2>
          <p>
            {business.name} / {business.shortName}
            <br />{business.fullAddress}
            <br />
            <a href={business.emailHref} className="contact-email-button" aria-label="Email Ultimate Collectibles">
              Email Us
            </a>
            <br />Phone: <a href={business.phoneHref}>{business.phone}</a>
          </p>
          <p>
            For privacy requests (access, correction, deletion, or other lawful rights), please contact us at the email or mailing address above. We may require verification of identity before responding to certain requests.
          </p>
        </div>
      </div>
    </>
  );
}
