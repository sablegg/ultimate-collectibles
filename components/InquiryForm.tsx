"use client";

import { useState, FormEvent } from "react";

type Props = {
  endpoint: string;
  submitLabel?: string;
  showCollectionField?: boolean;
  showPathField?: boolean;
  formName: string;
};

const paths = [
  "Bring It In (in-store)",
  "We Come to You (local pickup)",
  "Mail It In (nationwide)",
  "We Travel to You (larger collections)",
  "Meet Us at a Card Show",
];

export default function InquiryForm({
  endpoint,
  submitLabel = "Send",
  showCollectionField = false,
  showPathField = false,
  formName,
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  if (!endpoint) {
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-notice form-notice-success">
        Thanks! We got your message and will get back to you soon.
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <input type="hidden" name="form_name" value={formName} />

      <div className="field-row">
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
      </div>

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
                <option key={p}>{p}</option>
              ))}
            </select>
          </label>
        )}
      </div>

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

      <label className="full-width">
        Message
        <textarea name="message" rows={4} required />
      </label>

      <label className="full-width consent-label">
        <input type="checkbox" name="consent" value="yes" required />{' '}
        By submitting this form, you agree that Ultimate Collectibles may use the information provided to contact you regarding your appointment or request. See our <a href="/legal/privacy">Privacy Policy</a>.
      </label>

      <button type="submit" className="form-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : submitLabel}
      </button>

      {status === "error" && (
        <div className="form-notice form-notice-error">
          Something went wrong sending that — please try again, or reach us
          directly by phone or email.
        </div>
      )}
    </form>
  );
}
