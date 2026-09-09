import { Metadata } from "next";

const siteUrl = "https://www.ultimatecollectiblesllc.com";

type SeoEntry = { title: string; description: string; path: string };

// Pulled directly from the approved SEO metadata reference doc.
export const seoMap: Record<string, SeoEntry> = {
  home: {
    title: "Pokémon, Sports Cards & Vinyl Records | Hopkins, MN",
    description:
      "Buy, sell & trade Pokémon cards, sports cards, vinyl records, comics, memorabilia & more at Ultimate Collectibles in Hopkins, MN. Visit us or check upcoming shows.",
    path: "/",
  },
  buySellTrade: {
    title: "Buy, Sell & Trade Collectibles | Ultimate Collectibles",
    description:
      "Sell your card, record, or comic collection for cash or trade toward something new. Walk in or schedule an appraisal at our Hopkins, MN store.",
    path: "/buy-sell-trade",
  },
  buyingCollections: {
    title: "We Buy Collections — Cards, Records, Comics | Hopkins MN",
    description:
      "Cleaning out a collection? We buy Pokémon, sports cards, records, comics & memorabilia of any size. Fair offers, cash or store credit. Get a free quote.",
    path: "/buying-collections",
  },
  appraisal: {
    title: "Free Collection Appraisals | Ultimate Collectibles MN",
    description:
      "Not sure what your collection is worth? Get a free, no-pressure appraisal on cards, records, comics & memorabilia at our Hopkins, MN store. Book today.",
    path: "/appraisal",
  },
  events: {
    title: "Upcoming Shows & Events | Ultimate Collectibles",
    description:
      "Find Ultimate Collectibles at card shows and collector events across Minnesota. Check our schedule and stop by our booth for cards, records & more.",
    path: "/events",
  },
  about: {
    title: "About Us | Ultimate Collectibles, Hopkins MN",
    description:
      "A Twin Cities collectibles shop with deep roots — Pokémon, sports cards, records, comics, movie posters & memorabilia. Learn our story and what we carry.",
    path: "/about",
  },
  contact: {
    title: "Contact Us | Ultimate Collectibles, Hopkins MN",
    description:
      "Questions about buying, selling, or an appraisal? Reach Ultimate Collectibles by phone, email, or stop by our Hopkins, MN store. Map & hours inside.",
    path: "/contact",
  },
  pokemon: {
    title: "Pokémon Cards — New & Vintage | Hopkins, MN",
    description:
      "Shop sealed product, singles, and graded Pokémon cards — vintage to modern. We also buy and trade Pokémon collections. Visit our Hopkins, MN store.",
    path: "/pokemon",
  },
  sportsCards: {
    title: "Sports Cards — Vintage & Modern | Hopkins, MN",
    description:
      "Football, basketball, baseball, soccer & more — vintage and modern sports cards, raw and graded. Sell or trade your collection at our Hopkins, MN shop.",
    path: "/sports-cards",
  },
  nonSportsCards: {
    title: "Non-Sports & TCG Cards | Ultimate Collectibles MN",
    description:
      "Marvel, Star Wars, Magic, Yu-Gi-Oh, Disney Lorcana & more — a huge selection of non-sports and TCG cards in Hopkins, MN. New stock added daily.",
    path: "/non-sports-cards",
  },
  records: {
    title: "Vinyl Records — New & Used | Hopkins, MN",
    description:
      "Dig through rock, soul, jazz, hip-hop & more — new and used vinyl records at Ultimate Collectibles in Hopkins, MN. We also buy record collections.",
    path: "/records",
  },
  comics: {
    title: "Comic Books — Golden Age to Modern | Hopkins, MN",
    description:
      "Browse decades of comic books, from Golden Age to modern issues. We also buy comic collections of any size. Visit our Hopkins, MN store.",
    path: "/comics",
  },
  toys: {
    title: "Toys & Collectible Figures | Ultimate Collectibles",
    description:
      "Movie toys, sports figures, sci-fi collectibles, classic games, and pop culture treasures from our Hopkins, MN store.",
    path: "/toys",
  },
  posters: {
    title: "Movie & Concert Posters | Ultimate Collectibles MN",
    description:
      "Original and reproduction movie posters, concert posters, and collectible paper. A rotating selection at our Hopkins, MN shop. We buy posters too.",
    path: "/posters",
  },
  memorabilia: {
    title: "Sports Memorabilia & Autographs | Hopkins, MN",
    description:
      "Signed jerseys, photos, programs & authenticated sports memorabilia — inventory changes regularly. We also buy memorabilia at our Hopkins, MN store.",
    path: "/memorabilia",
  },
  supplies: {
    title: "Card Sleeves, Binders & Storage | Hopkins, MN",
    description:
      "Card sleeves, top loaders, binders, storage boxes & display cases in stock. Everything to protect your collection at our Hopkins, MN shop.",
    path: "/supplies",
  },
  faqs: {
    title: "FAQs | Ultimate Collectibles, Hopkins MN",
    description:
      "Answers to common questions about selling, trading, appraisals, graded cards & more at Ultimate Collectibles in Hopkins, MN.",
    path: "/faqs",
  },
  photos: {
    title: "Store Photos | Ultimate Collectibles, Hopkins MN",
    description:
      "Take a look inside Ultimate Collectibles — our inventory, our space, and some of the great finds that have come through our Hopkins, MN store.",
    path: "/photos",
  },
  ebay: {
    title: "Shop Our eBay Store | Ultimate Collectibles",
    description:
      "Browse featured picks and our full eBay inventory — cards, records, comics & memorabilia. We ship anywhere in the US.",
    path: "/ebay",
  },
  legal: {
    title: "Terms, Shipping & Privacy Policy | Ultimate Collectibles",
    description:
      "Terms of use, shipping policy, refund policy, and privacy policy for Ultimate Collectibles LLC.",
    path: "/legal",
  },
};

export function buildMetadata(key: keyof typeof seoMap): Metadata {
  const entry = seoMap[key];
  const url = `${siteUrl}${entry.path}`;
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      siteName: "Ultimate Collectibles LLC",
      images: ["/images/og-default.jpg"],
    },
  };
}
