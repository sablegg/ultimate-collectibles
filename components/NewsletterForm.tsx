"use client";

import { useForm, ValidationError } from "@formspree/react";
import { formEndpoints, getFormspreeId } from "@/lib/siteData";

export default function NewsletterForm() {
  const formId = getFormspreeId(formEndpoints.newsletter || formEndpoints.contact);

  if (!formId) {
    return (
      <div style={{ color: "white", fontSize: 13 }}>
        Newsletter signup is not connected yet.
      </div>
    );
  }

  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <div style={{ color: "white", fontSize: 13 }}>Thanks — check your email to confirm.</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <input type="hidden" name="form_name" value="Newsletter" />
      <label style={{ display: "none" }} htmlFor="newsletter-name">Name</label>
      <input id="newsletter-name" name="name" type="text" placeholder="Your name" required style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'white', minWidth: 120 }} />
      <label style={{ display: "none" }} htmlFor="newsletter-email">Email</label>
      <input id="newsletter-email" name="email" type="email" placeholder="Your email" required style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'white', minWidth: 180 }} />
      <button type="submit" disabled={state.submitting} style={{ background: '#ED2227', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6 }}>
        {state.submitting ? "Joining..." : "Join"}
      </button>
      <label style={{ display: "flex", alignItems: "center", gap: 8, color: "white", fontSize: 12, width: "100%" }}>
        <input type="checkbox" name="newsletter_consent" value="yes" required />
        <span>I agree that I can be contacted for upcoming special events, discounts, or offers from Ultimate Collectibles.</span>
      </label>
      <ValidationError field="email" errors={state.errors} />
    </form>
  );
}
