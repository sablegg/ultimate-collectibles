// Mapping of available hero images and slideshow order.
export type HeroItem = { src: string; href?: string; alt?: string };

// Slideshow images (homepage) — order matters.
export const slideshowImages: HeroItem[] = [
  { src: "/images/hero/collections_hero.jpg", href: "/buying-collections", alt: "Collections" },
  { src: "/images/hero/sports_hero.jpg", href: "/sports-cards", alt: "Sports Cards" },
  { src: "/images/hero/Pokemon_hero.jpg", href: "/pokemon", alt: "Pokémon" },
  { src: "/images/hero/toys_hero.jpg", href: "/toys", alt: "Toys" },
  { src: "/images/hero/Records_hero.jpg", href: "/records", alt: "Records" },
  { src: "/images/hero/hero.jpg", href: "/", alt: "Shop" },
];

// Returns a hero image path for a given category slug when available.
export function heroForSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  const map: Record<string, string> = {
    pokemon: "/images/hero/Pokemon_hero.jpg",
    "sports-cards": "/images/hero/sports_hero.jpg",
    records: "/images/hero/Records_hero.jpg",
    comics: "/images/hero/hero.jpg",
    posters: "/images/hero/hero.jpg",
    memorabilia: "/images/hero/toys_hero.jpg",
    toys: "/images/hero/toys_hero.jpg",
    "non-sports-cards": "/images/hero/hero.jpg",
    supplies: "/images/hero/hero.jpg",
    "buying-collections": "/images/hero/collections_hero.jpg",
    appraisal: "/images/hero/Appraisal_hero.jpg",
    "buy-sell-trade": "/images/hero/hero.jpg",
    about: "/images/hero/hero.jpg",
    contact: "/images/hero/hero.jpg",
    events: "/images/hero/hero.jpg",
    photos: "/images/hero/hero.jpg",
    faqs: "/images/hero/hero.jpg",
    ebay: "/images/hero/hero.jpg",
  };
  return map[slug];
}
