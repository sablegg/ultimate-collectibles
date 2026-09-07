export default function PageHero({
  eyebrow,
  header,
  intro,
}: {
  eyebrow?: string;
  header: string;
  intro?: string;
}) {
  return (
    <div className="page-hero">
      {eyebrow && <div className="page-hero-eyebrow">{eyebrow}</div>
      }
      <h1 className="page-hero-header">{header}</h1>
      {intro && <p className="page-hero-intro">{intro}</p>}
    </div>
  );
}
