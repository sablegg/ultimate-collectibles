import Link from "next/link";
import { business, hours, footerLinks, getStoreStatus } from "@/lib/siteData";

export default function SiteFooter() {
  const status = getStoreStatus();

  return (
    <footer className="footer">
      <div>
        <div className="footer-store-name">{business.name}</div>
        <div className="footer-info">
          {business.fullAddress}
          <br />
          {business.phone}
          <br />
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </div>
      </div>

      <div className="footer-hours">
        <div className={status.open ? "status-open" : "status-closed"}>
          ● {status.label}
        </div>
        {hours.map((h) => (
          <div className="hours-row" key={h.label}>
            <span className="hours-day">{h.label}</span>
            <span className={h.closed ? "hours-closed" : "hours-time"}>
              {h.hours}
            </span>
          </div>
        ))}
      </div>

      <div className="footer-right">
        <div className="social-icons">
          <a
            className="social-icon"
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            f
          </a>
          <a
            className="social-icon"
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            ig
          </a>
        </div>
        <div className="footer-links">
          {footerLinks.map((l, i) => (
            <span key={l.href}>
              <Link href={l.href}>{l.name}</Link>
              {i < footerLinks.length - 1 ? " · " : ""}
            </span>
          ))}
          <br />
          <Link href="/legal">Terms · Shipping · Privacy</Link>
          <br />
          <Link href="/admin/login" className="staff-login">
            🔒 Staff Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
