"use client";

import { useForm, ValidationError } from "@formspree/react";
import { formEndpoints, getFormspreeId } from "@/lib/siteData";

export default function NewsletterForm() {
  const formId = getFormspreeId(formEndpoints.newsletter || formEndpoints.contact);

  if (!formId) {
    return (
      <div style={{ color: "#333", fontSize: 13 }}>
        Newsletter signup is not connected yet.
      </div>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <div style={{ color: "#333", fontSize: 13 }}>Thanks — check your email to confirm.</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch", justifyContent: "center", width: "100%" }}>
      <input type="hidden" name="form_name" value="Newsletter" />

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <label style={{ display: "none" }} htmlFor="newsletter-name">Name</label>
        <input id="newsletter-name" name="name" type="text" placeholder="Your name" required style={{ flex: 1, padding: '8px 10px', borderRadius: 6, border: '1px solid #d9d9d9', background: '#fff', color: '#222', fontSize: 14 }} />
        <label style={{ display: "none" }} htmlFor="newsletter-email">Email</label>
        <input id="newsletter-email" name="email" type="email" placeholder="Your email" required style={{ flex: 1.3, padding: '8px 10px', borderRadius: 6, border: '1px solid #d9d9d9', background: '#fff', color: '#222', fontSize: 14 }} />
      </div>

      <button type="submit" disabled={state.submitting} style={{ background: '#ED2227', color: 'white', border: 'none', padding: '10px 14px', borderRadius: 6, fontWeight: 700, fontSize: 14 }}>
        {state.submitting ? "Joining..." : "Join Now"}
      </button>

      <label style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#333", fontSize: 12, lineHeight: 1.5, fontWeight: 400, textAlign: "left" }}>
        <input type="checkbox" name="newsletter_consent" value="yes" required style={{ width: 14, height: 14, marginTop: 2, flexShrink: 0 }} />
        <span style={{ fontWeight: 400 }}>I agree that I can be contacted for upcoming special events, discounts, or offers from Ultimate Collectibles.</span>
      </label>

      <ValidationError field="email" errors={state.errors} />
    </form>
  );
}
