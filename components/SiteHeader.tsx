"use client";

import Link from "next/link";
import { useState } from "react";
import { navCategories, currentEvent } from "@/lib/siteData";
import NewsletterForm from "@/components/NewsletterForm";
import PageMenu from "@/components/PageMenu";

export default function SiteHeader() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
      <div className="email-bar">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'nowrap', textAlign: 'center', width: '100%' }}>
          <div className="email-arrow" aria-hidden>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ color: 'white', fontWeight: 700, lineHeight: 1.2, fontSize: 13 }}>Keep up-to-date with events, special offers &amp; discounts</span>
          <button type="button" className="newsletter-trigger" onClick={() => setIsNewsletterOpen(true)}>
            Join Now
          </button>
        </div>
      </div>

      <div id="newsletter-modal" className={`newsletter-modal ${isNewsletterOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="newsletter-modal-title">
        <div className="newsletter-modal-backdrop" onClick={() => setIsNewsletterOpen(false)} />
        <div className="newsletter-modal-panel">
          <button type="button" className="newsletter-modal-close" onClick={() => setIsNewsletterOpen(false)} aria-label="Close newsletter signup">
            ×
          </button>
          <h3 id="newsletter-modal-title">Join our email list</h3>
          {isNewsletterOpen && <NewsletterForm />}
        </div>
      </div>

      {/* EVENTS BAR — hand-edit `currentEvent` in lib/siteData.ts until
          Phase 3 makes this employee-editable from /admin/store-settings */}
      {currentEvent.active && (
        <Link href="/events" className="events-bar">
          📅 See you at <strong>{currentEvent.name}</strong> in {currentEvent.city} on{" "}
          {currentEvent.date}
          <span className="ev-tag">Details →</span>
        </Link>
      )}

      <nav className="nav">
        <Link href="/" className="logo-area">
          <img src="/images/logo/Ultimate%20Collectibles%20sm.png" alt="Ultimate Collectibles" className="site-logo" />
          <span className="logo-text">
            Ultimate Collectibles
            <span>Hopkins, MN</span>
          </span>
        </Link>

        <div className="nav-cats">
          {navCategories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="nav-cat">
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <PageMenu />
        </div>
      </nav>
    </>
  );
}
