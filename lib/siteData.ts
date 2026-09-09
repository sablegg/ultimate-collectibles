// ─────────────────────────────────────────────────────────────
// Central site data. In Phase 3 this file's exports become the
// shape of your Payload CMS collections (Business Info, Nav,
// Hours) — keep the shape stable so that migration is a data
// swap, not a rebuild.
// ─────────────────────────────────────────────────────────────

const earthlinkEmailParts = ["ultimatecoll", "earthlink.net"];
const publicEmail = "hello@ultimatecollectiblesllc.com";

export function getFormspreeId(value: string) {
  const trimmed = (value || "").trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    const match = trimmed.match(/\/f\/([^/?#]+)/i);
    return match ? match[1] : trimmed.split("/").filter(Boolean).pop() || "";
  }

  return trimmed.replace(/^\/?f\//i, "").replace(/\/?$/, "");
}

export const business = {
  name: "Ultimate Collectibles LLC",
  shortName: "Ultimate Collectibles",
  address: "908 Mainstreet",
  city: "Hopkins",
  state: "MN",
  zip: "55343",
  fullAddress: "908 Mainstreet, Hopkins MN 55343",
  phone: "(952) 452-9933",
  phoneHref: "tel:+19524529933",
  email: publicEmail,
  emailParts: earthlinkEmailParts,
  emailHref: `mailto:${earthlinkEmailParts[0]}@${earthlinkEmailParts[1]}`,
  domain: "ultimatecollectiblesllc.com",
  facebook: "https://www.facebook.com/ultimatecollectiblesmn/",
  instagram: "https://www.instagram.com/ultimate_collectibles/",
  mapsPlaceId: "ChIJ-0nry7Yh9ocRTh0avunRIGA",
  lat: 44.9242603,
  lng: -93.4119105,
};

export const hours = [
  { day: "Mon", label: "Mon", hours: "Closed", closed: true },
  { day: "Tue", label: "Tue–Sat", hours: "10am–6pm", closed: false, span: true },
  { day: "Sun", label: "Sun", hours: "11am–5pm", closed: false },
];

// Used by getStoreStatus() below — kept in one place so Phase 3
// can replace this with an admin-editable hours record.
const weeklyHours: Record<number, { open: number; close: number } | null> = {
  0: { open: 11, close: 17 }, // Sunday
  1: null, // Monday - closed
  2: { open: 10, close: 18 },
  3: { open: 10, close: 18 },
  4: { open: 10, close: 18 },
  5: { open: 10, close: 18 },
  6: { open: 10, close: 18 },
};

export function getStoreStatus(now: Date = new Date()) {
  const day = now.getDay();
  const todays = weeklyHours[day];
  if (!todays) return { open: false, label: "Closed today" };
  const hour = now.getHours() + now.getMinutes() / 60;
  const open = hour >= todays.open && hour < todays.close;
  return { open, label: open ? "Open Now" : "Closed" };
}

export const navCategories = [
  { name: "Sports Cards", href: "/sports-cards" },
  { name: "Pokémon", href: "/pokemon" },
  { name: "Non-Sports", href: "/non-sports-cards" },
  { name: "Records", href: "/records" },
  { name: "Comics", href: "/comics" },
  { name: "Toys", href: "/toys" },
  { name: "Posters", href: "/posters" },
  { name: "Memorabilia", href: "/memorabilia" },
  { name: "Supplies", href: "/supplies" },
];

export const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faqs" },
];

// Homepage top event bar. Employee-editable in Phase 3 — for now,
// hand edit this string when a show is booked.
export const currentEvent = {
  name: "Dallas Card Show",
  city: "Allen, TX",
  date: "Sept 10–13",
  active: true,
};

// Formspree (or similar) form endpoints. No backend/database needed —
// these are free-tier form relay services. Create free accounts at
// formspree.io, grab each form's endpoint ID, and paste below.
// Every form on the site degrades gracefully (shows a clear message)
// until these are filled in.
// "serviceInquiries" is the combined endpoint for both Buying Collections
// and Appraisal requests. Existing env names remain supported as fallbacks.
const sharedServiceInquiryEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_SERVICE_INQUIRIES ||
  process.env.NEXT_PUBLIC_FORMSPREE_COLLECTIONS ||
  process.env.NEXT_PUBLIC_FORMSPREE_APPRAISAL ||
  "";

export const formEndpoints = {
  contact: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT || "xqpkgneg",
  serviceInquiries:
    process.env.NEXT_PUBLIC_FORMSPREE_SERVICE_INQUIRIES || "xqpkgneg",
  buyingCollections:
    process.env.NEXT_PUBLIC_FORMSPREE_COLLECTIONS || "xqpkgneg",
  appraisal: process.env.NEXT_PUBLIC_FORMSPREE_APPRAISAL || "xqpkgneg",
  newsletter: process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER || "xgaepdog",
};
