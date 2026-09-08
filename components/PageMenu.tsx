"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navCategories } from "@/lib/siteData";

const staticPages = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Events", href: "/events" },
  { name: "Appraisal", href: "/appraisal" },
  { name: "Buying Collections", href: "/buying-collections" },
  { name: "FAQs", href: "/faqs" },
  { name: "Photos", href: "/photos" },
  { name: "eBay", href: "/ebay" },
  { name: "Legal", href: "/legal" },
];

export default function PageMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const pages = [...navCategories.map((c) => ({ name: c.name, href: c.href })), ...staticPages];

  return (
    <div className="page-menu" ref={ref}>
      <button
        className="page-menu-button"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        aria-label="Show site pages"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="#ccc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="page-menu-menu" role="menu">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className="page-menu-item" role="menuitem" onClick={() => setOpen(false)}>
              {p.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
