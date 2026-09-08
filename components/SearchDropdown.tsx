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
  { name: "Buy · Sell · Trade", href: "/buy-sell-trade" },
  { name: "FAQs", href: "/faqs" },
  { name: "Photos", href: "/photos" },
  { name: "eBay", href: "/ebay" },
  { name: "Legal", href: "/legal" },
];

export default function SearchDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const pages = [
    ...navCategories.map((c) => ({ name: c.name, href: c.href })),
    ...staticPages,
  ];

  return (
    <div className="search-dropdown" ref={ref}>
      <button
        className="search-dropdown-button"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        aria-label="Open site pages"
      >
        🔍 <span style={{ opacity: 0.9 }}>Search</span>
      </button>

      {open && (
        <div className="search-dropdown-menu" role="menu">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className="search-dropdown-item" role="menuitem" onClick={() => setOpen(false)}>
              {p.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
