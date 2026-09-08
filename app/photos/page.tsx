import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";
import { heroForSlug } from "@/lib/heroImages";

export const metadata = buildMetadata("photos");

// Drop image files into /public/images/gallery/ and list their filenames
// here. Phase 3 makes this an employee-managed upload screen.
const placeholderCount = 6;

export default function PhotosPage() {
  return (
    <>
      <PageHero
        header="Photos"
        intro="Browse photos from our store, events, and community happenings."
        heroImage={heroForSlug("photos")}
      />
      <div className="page-content">
        <div className="gallery-grid">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <div className="gallery-item" key={i} />
          ))}
        </div>
        <p className="text-muted" style={{ marginTop: 16, textAlign: "center" }}>
          Photos coming soon — drop your images in /public/images/gallery/.
        </p>
      </div>
    </>
  );
}
