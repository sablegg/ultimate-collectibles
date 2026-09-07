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

  return (
    <div className="page-hero" style={style}>
      {eyebrow && <div className="page-hero-eyebrow">{eyebrow}</div>}
      <h1 className="page-hero-header">{header}</h1>
      {intro && <p className="page-hero-intro">{intro}</p>}
    </div>
  );
}
