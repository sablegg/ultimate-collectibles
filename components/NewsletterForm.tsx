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
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", justifyContent: "center", maxWidth: 900, margin: "0 auto" }}>
      <input type="hidden" name="form_name" value="Newsletter" />
      <label style={{ display: "none" }} htmlFor="newsletter-name">Name</label>
      <input id="newsletter-name" name="name" type="text" placeholder="Your name" required style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'white', minWidth: 110, width: 120, fontSize: 12 }} />
      <label style={{ display: "none" }} htmlFor="newsletter-email">Email</label>
      <input id="newsletter-email" name="email" type="email" placeholder="Your email" required style={{ padding: '4px 8px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'white', minWidth: 160, width: 170, fontSize: 12 }} />
      <button type="submit" disabled={state.submitting} style={{ background: '#ED2227', color: 'white', border: '1px solid rgba(255,255,255,0.25)', padding: '5px 12px', borderRadius: 6, fontSize: 12, lineHeight: 1.2 }}>
        {state.submitting ? "Joining..." : "Join"}
      </button>
      <label style={{ display: "flex", alignItems: "center", gap: 8, color: "white", fontSize: 11, width: "100%", fontWeight: 400, justifyContent: "center", marginTop: 2, lineHeight: 1.3 }}>
        <input type="checkbox" name="newsletter_consent" value="yes" required style={{ width: 12, height: 12, margin: 0 }} />
        <span style={{ fontWeight: 400 }}>I agree that I can be contacted for upcoming special events, discounts, or offers from Ultimate Collectibles.</span>
      </label>
      <ValidationError field="email" errors={state.errors} />
    </form>
  );
}
