// ─────────────────────────────────────────────────────────────
// Content for the 8 category pages that share one visual template
// (Pokémon, Sports Cards, Non-Sports, Records, Comics, Posters,
// Memorabilia, Supplies). Pulled from the approved copy doc.
//
// Phase 3 note: this whole file becomes a "Category Page" collection
// in Payload, with these exact fields (header, intro, bullets, weBuy,
// featuredEnabled) editable per-page by role. Keep the shape stable.
// ─────────────────────────────────────────────────────────────

export type CategoryPageData = {
  slug: string;
  seoKey: string;
  header: string;
  intro: string;
  bulletsTitle?: string;
  bullets: string[];
  weBuyTitle: string;
  weBuyText: string;
  featuredEnabled: boolean; // v1: always false, admin-toggleable in Phase 3
  featuredLabel?: string;
};

export const categoryPages: Record<string, CategoryPageData> = {
  pokemon: {
    slug: "pokemon",
    seoKey: "pokemon",
    header: "Pokémon Cards",
    intro:
      "We carry a wide selection of Pokémon cards in-store — singles, packs, sealed product, and vintage finds. Whether you're building a deck, completing a set, or hunting for that one card you've been chasing, come in and take a look.",
    bullets: [
      "Sealed New Releases",
      "Sealed Older Items",
      "Individual Packs",
      "Raw Pokémon cards - vintage and modern",
      "Graded Pokémon cards - vintage and modern",
      "We have various player and collectible supplies (playmats, sleeves, top loaders, etc.)",
    ],
    weBuyTitle: "We also buy and trade Pokémon",
    weBuyText:
      "Got cards you're ready to move? Bring the parts of your collection you would like to sell or trade and we'll take a look. If you have a larger collection, please schedule an appointment.",
    featuredEnabled: false,
    featuredLabel: "Featured Items",
  },
  "sports-cards": {
    slug: "sports-cards",
    seoKey: "sportsCards",
    header: "Sports Cards",
    intro:
      "From vintage baseball to modern rookies, we carry a constantly rotating selection of sports cards across all major sports. Come browse our singles, lots, and sets in-store and at events.",
    bullets: [
      "Football, basketball, baseball, WNBA, NWSL, FIFA, soccer, NASCAR, golf, MMA, MLW, collegiate and mixed entertainment cards",
      "Sealed New Releases - lots of Panini sports cards in blaster boxes, hobby boxes, and even by the sealed case!",
      "Sealed Older Items - we always have a variety of vintage sealed sports cards. Looking for vintage sealed wax? We have it!",
      "Raw sports cards - numerous vintage and modern football, baseball, basketball, soccer cards, etc.",
      "Graded sports cards - best vintage selection around and plenty of modern graded sports cards",
      "Autographed sports cards and memorabilia - balls, bats, cards, posters, etc.",
      "Boxed sets by year - many full and partial sets to complete your collection",
      "Various memorabilia - bobbleheads, jerseys, sports toys, event tickets, photos and promo items",
    ],
    weBuyTitle: "We also buy sports cards",
    weBuyText:
      "Selling a collection or looking to trade? We buy sports cards in bulk and individually. Bring them in or get in touch to discuss. If you have a larger collection, please schedule an appointment.",
    featuredEnabled: false,
  },
  "non-sports-cards": {
    slug: "non-sports-cards",
    seoKey: "nonSportsCards",
    header: "Non-Sports Cards",
    intro:
      "From classic movie and TV cards to entertainment trading cards and everything in between — if it's not a sports card, it lives here. We buy, sell, and trade non-sports cards of all kinds. Our stock varies and is updated daily!",
    bullets: [
      "Brand new non-sports releases",
      "Older movie cards - Jaws, Rambo, James Bond, and more classic favorites",
      "Sci-fi cards - Star Wars, Star Trek, etc.",
      "Marvel Cards including Allure, Annual, Universe, Masterpieces, Platinum, Beginnings, etc.",
      "DC Cards - Various Annual, Bombshells, Legacy, Epic — look for Batman and more",
      "Pop culture cards - if your favorite band has released cards, we probably have 'em",
      "Other TCG cards - Pokémon, Magic the Gathering, One Piece, Yu-Gi-Oh!, Disney Lorcana, Riftbound: League of Legends, Gundam, Cardfight Vanguard, Dragon Ball, Flesh and Blood, Union Arena, Star Wars Unlimited, Weiss Schwarz, Naruto",
      "Favorites - Scooby Doo, Garbage Pail Kids, Stranger Things, The Walking Dead, Harry Potter, Spongebob, Minecraft, Looney Tunes, and many more",
    ],
    weBuyTitle: "We also buy non-sports cards",
    weBuyText:
      "Have non-sports, TCG, or pop culture cards to sell or trade? Bring them in — we're always looking to add to our rotating selection.",
    featuredEnabled: false,
    featuredLabel: "Featured Items",
  },
  records: {
    slug: "records",
    seoKey: "records",
    header: "Vinyl Records",
    intro:
      "Dig through our always-changing selection of vinyl records — rock, soul, jazz, country, hip-hop, classical, and beyond. We carry used and new releases in-store, and we're always buying collections. We have a large selection that you have to see for yourself!",
    bullets: [],
    weBuyTitle: "We buy records",
    weBuyText:
      "Have a record collection you're looking to sell? We buy vinyl — bring it in or get in touch. If you have a large collection, schedule a meeting.",
    featuredEnabled: false,
    featuredLabel: "New Releases",
  },
  comics: {
    slug: "comics",
    seoKey: "comics",
    header: "Comics",
    intro:
      "We buy and sell vintage comics. Make sure to ask us about your favorites when you’re in store. We also bring comics to our twice yearly sale with amazing prices.\n\nOur comic books span decades of issues — superhero, indie, vintage, and more. Whether you're a longtime collector or picking up your first issue, we've got something for you.",
    bullets: [],
    weBuyTitle: "We buy comics",
    weBuyText:
      "We buy comic collections of all sizes. We do not shy away from rare items, or collections of any size. Please bring small collections to a show or to the store, but please schedule an appointment if you have a large collection so we have the resources available to help you at time of visit.",
    featuredEnabled: false,
    featuredLabel: "Featured Items",
  },
  toys: {
    slug: "toys",
    seoKey: "toys",
    header: "Toys & Collectible Figures",
    intro:
      "We are suckers for a good movie toy, science fiction ship, sports figure, or classic game! Pop in periodically to see what’s in stock, ask what else we have, or come to our twice yearly sale where we bring out thousands of collectible favorites! We have been known to buy toy collections of any size. Our interests include sports figures, movie and pop culture figures and much more!",
    bullets: [
      "Movie and TV toys & figures",
      "Science fiction ships and memorabilia",
      "Sports figures and collectibles",
      "Classic games and nostalgic favorites",
      "Pop culture and display pieces",
    ],
    weBuyTitle: "We buy toy collections",
    weBuyText:
      "If you’re ready to part with a toy collection or just want to know what it’s worth, bring it in or get in touch. We’re always interested in sports figures, movie toys, collectibles, and larger mixed collections.",
    featuredEnabled: false,
    featuredLabel: "Featured Items",
  },
  posters: {
    slug: "posters",
    seoKey: "posters",
    header: "Movie Posters & Collectibles",
    intro:
      "We carry original and reproduction movie posters, concert posters, and other collectible paper — a rotating selection of vintage and modern prints. A great find for fans and collectors alike.\n\nWe don’t always have as much space as we’d like to keep posters displayed for sale in store. If we don’t have them available when you visit, please inquire as we may just have what you’re looking for!",
    bullets: [],
    weBuyTitle: "We buy posters",
    weBuyText:
      "Have original movie or concert posters you're looking to sell? We're interested. Bring them in or reach out. Large collections or appraisals require an appointment.",
    featuredEnabled: false,
    featuredLabel: "Featured Items",
  },
  memorabilia: {
    slug: "memorabilia",
    seoKey: "memorabilia",
    header: "Sports Memorabilia & Autographs",
    intro:
      "Signed jerseys, photos, programs, and other authenticated sports memorabilia — in-store inventory changes regularly. A great source for fans and serious collectors.",
    bullets: [
      "Autographed sports jerseys",
      "Autographed balls",
      "Autographed cards",
      "Bobbleheads and Figures",
      "Merch and promotional items galore!",
    ],
    weBuyTitle: "We buy memorabilia",
    weBuyText:
      "Got signed items or sports collectibles you're ready to part with? We buy memorabilia — bring it in to the store, or feel free to ask us at a card show or event. Large collections do require an appointment.",
    featuredEnabled: false,
    featuredLabel: "Featured Items",
  },
  supplies: {
    slug: "supplies",
    seoKey: "supplies",
    header: "Collector Supplies",
    intro:
      "Keep your collection protected and organized. We carry a selection of card sleeves, top loaders, binders, pages, storage boxes, and other collector supplies in-store.",
    bulletsTitle: "What we carry",
    bullets: [
      "Card sleeves (penny sleeves, perfect fit, standard)",
      "Top loaders & card savers",
      "Binders & portfolio pages",
      "Storage boxes",
      "Display cases & stands",
    ],
    weBuyTitle: "",
    weBuyText: "",
    featuredEnabled: false,
  },
};

export const categoryOrder = [
  "pokemon",
  "sports-cards",
  "non-sports-cards",
  "records",
  "comics",
  "toys",
  "posters",
  "memorabilia",
  "supplies",
];
