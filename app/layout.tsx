import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { business } from "@/lib/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ultimatecollectiblesllc.com"),
  title: {
    default: "Ultimate Collectibles LLC | Hopkins, MN",
    template: "%s",
  },
  description:
    "Ultimate Collectibles is a Hopkins, Minnesota collectibles shop buying, selling, and trading Pokémon cards, sports cards, records, comics, memorabilia, and more.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: business.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
  telephone: business.phone,
  email: business.email,
  url: `https://www.${business.domain}`,
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.lat,
    longitude: business.lng,
  },
  sameAs: [business.facebook, business.instagram],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "17:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rockwell+Nova:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <div className="site-wrapper">
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
