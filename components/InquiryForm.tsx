"use client";

import { useForm, ValidationError } from "@formspree/react";
import { getFormspreeId } from "@/lib/siteData";

type Props = {
  endpoint: string;
  submitLabel?: string;
  showCollectionField?: boolean;
  showPathField?: boolean;
  showServiceFields?: boolean;
  formVariant?: "default" | "contact" | "service" | "newsletter";
  formName: string;
};

const paths = [
  "Bring It In (in-store)",
  "We Come to You (local pickup)",
  "Mail It In (nationwide)",
  "We Travel to You (larger collections)",
  "Meet Us at a Card Show",
];

const serviceOptions = [
  "The collection is smaller so I can bring the items to the store",
  "I want to schedule so I can bring items to an upcoming event/trade show",
  "The collection is too big or too valuable to move",
  "I want to talk first",
  "This regards an appraisal of value that is local",
  "This regards an appraisal of value that is outside Minnesota.",
  "I just need to know what something is worth",
];

const locationOptions = [
  "Within 30 minutes of the shop",
  "Within 3 hours of the shop",
  "Close to an upcoming show/event",
  "Shipping required or distance is an issue, we will work on it",
];

const collectionSizeOptions = ["Small", "Medium", "Large"];

export default function InquiryForm({
  endpoint,
  submitLabel = "Send",
  showCollectionField = false,
  showPathField = false,
  showServiceFields = false,
  formVariant = "default",
  formName,
}: Props) {
  const formId = getFormspreeId(endpoint);

  if (!formId) {
    return (
      <div className="form-notice">
        This form isn&rsquo;t connected yet. Create a free endpoint at{" "}
        <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
          formspree.io
        </a>{" "}
        and add it to your environment variables — see the README. In the
        meantime, reach us directly by phone or email in the footer below.
      </div>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="form-notice form-notice-success">
        Thanks! We got your message and will get back to you soon.
      </div>
    );
  }

  const showNewsletterFields = formVariant === "newsletter";
  const showContactMessage = formVariant === "contact" || formVariant === "default";

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form_name" value={formName} />

      {showNewsletterFields ? (
        <div className="field-row">
          <label>
            Name
            <input type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
        </div>
      ) : (
        <div className="field-row">
          <label>
            Name
            <input type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
        </div>
      )}

      {!showNewsletterFields && (
        <div className="field-row">
          <label>
            Phone <span className="optional">(optional)</span>
            <input type="tel" name="phone" />
          </label>
          {showPathField && (
            <label>
              Preferred method
              <select name="preferred_method" defaultValue={paths[0]}>
                {paths.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      )}

      {showCollectionField && (
        <label className="full-width">
          Tell us about your collection
          <textarea
            name="collection_description"
            rows={4}
            placeholder="What do you have, roughly how much, and anything else that would help us prepare?"
          />
        </label>
      )}

      {showServiceFields && (
        <>
          <div className="full-width option-group">
            <label className="option-group-label">
              Let us know which of the following applies:
            </label>
            <div className="option-grid">
              {serviceOptions.map((option) => (
                <label key={option} className="option-pill">
                  <input type="checkbox" name="service_interest" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="full-width option-group">
            <label className="option-group-label">General item location</label>
            <div className="option-grid compact">
              {locationOptions.map((option) => (
                <label key={option} className="option-pill">
                  <input type="radio" name="item_location" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="full-width option-group">
            <label className="option-group-label">Collection size</label>
            <div className="option-grid inline">
              {collectionSizeOptions.map((option) => (
                <label key={option} className="option-pill small">
                  <input type="radio" name="collection_size" value={option} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="service-help-block">
            <p>
              Smaller collections can always be brought into the store with or without an appointment, but we would still like to get you scheduled below.
            </p>
            <p>
              Larger items, extremely valuable collections, collections that require specific expertise, or a location that is not close will require consultation. Please schedule below.
            </p>
          </div>
        </>
      )}

      {showContactMessage && (
        <label className="full-width">
          {showServiceFields ? "Please explain your situation below and we will get back with you." : "How can we help?"}
          <textarea
            name="message"
            rows={showServiceFields ? 6 : 5}
            required
            placeholder={showServiceFields ? "Tell us what you have, where it is, and what you would like help with..." : "How can we help you today?"}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </label>
      )}

      {!showNewsletterFields && (
        <label className="full-width consent-label">
          <input type="checkbox" name="consent" value="yes" required />{' '}
          By submitting this form, you agree that Ultimate Collectibles may use the information provided to contact you regarding your appointment or request. See our <a href="/legal#privacy">Privacy Policy</a>.
          <ValidationError prefix="Consent" field="consent" errors={state.errors} />
        </label>
      )}

      {showServiceFields && (
        <label className="full-width">
          Please pick a date and time below:
          <input type="datetime-local" name="preferred_time" />
        </label>
      )}

      {showNewsletterFields && (
        <label className="full-width consent-label">
          <input type="checkbox" name="newsletter_consent" value="yes" required />{' '}
          I agree that I can be contacted for upcoming special events, discounts, or offers from Ultimate Collectibles.
          <ValidationError prefix="Newsletter Consent" field="newsletter_consent" errors={state.errors} />
        </label>
      )}

      <button type="submit" className="form-submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : submitLabel}
      </button>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="form-notice form-notice-error">
          Something went wrong sending that — please check the highlighted fields and try again.
        </div>
      )}
    </form>
  );
}
