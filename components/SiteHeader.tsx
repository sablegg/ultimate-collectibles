import Link from "next/link";
import { navCategories, currentEvent } from "@/lib/siteData";

export default function SiteHeader() {
  return (
    <>
      {/* EMAIL LIST BAR — "here" opens the email signup flow.
          Phase 1: mailto/anchor to contact form. Phase 3: modal wired to Constant Contact. */}
      <div className="email-bar">
        ✉ Stay up to date! Join our email list{" "}
        <Link href="/contact#email-list">here</Link>
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
          <img src="/images/logo/ultimate_logo.png" alt="Ultimate Collectibles" className="site-logo" />
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
          <div className="search-box" aria-hidden="true">
            🔍 Search...
          </div>
          <button className="hamburger" aria-label="Menu">
            ☰
          </button>
        </div>
      </nav>
    </>
  );
}
