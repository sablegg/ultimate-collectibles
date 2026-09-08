export default function PageHero({
  eyebrow,
  header,
  intro,
  heroImage,
}: {
  eyebrow?: string;
  header: string;
  intro?: string;
  heroImage?: string;
}) {
  const style = heroImage
    ? { backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : undefined;

  // If a hero image is provided, render the image as a standalone banner
  // and move the page header/intro below it to avoid overlaying text
  if (heroImage) {
    return (
      <>
        <div className="page-hero" style={style}>
          <img src={heroImage} alt="" className="page-hero-img" />
        </div>
        <div className="page-hero-meta">
          {eyebrow && <div className="page-hero-eyebrow">{eyebrow}</div>}
          <h1 className="page-hero-header support-page-title">{header}</h1>
          {intro && <p className="page-hero-intro">{intro}</p>}
        </div>
      </>
    );
  }

  return (
    <div className="page-hero" style={style}>
      {eyebrow && <div className="page-hero-eyebrow">{eyebrow}</div>}
      <h1 className="page-hero-header">{header}</h1>
      {intro && <p className="page-hero-intro">{intro}</p>}
    </div>
  );
}
