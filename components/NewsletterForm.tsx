"use client";

import { useState, FormEvent } from "react";
import { formEndpoints } from "@/lib/siteData";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const endpoint = formEndpoints.newsletter || formEndpoints.contact;
    if (!endpoint) {
      setStatus("error");
      return;
    }
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
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
    return <div style={{ color: "white", fontSize: 13 }}>Thanks — check your email to confirm.</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input type="hidden" name="form_name" value="Newsletter" />
      <label style={{ display: "none" }} htmlFor="newsletter-email">Email</label>
      <input id="newsletter-email" name="email" type="email" placeholder="Your email" required style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'white' }} />
      <button type="submit" style={{ background: '#ED2227', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6 }}>Join</button>
    </form>
  );
}
