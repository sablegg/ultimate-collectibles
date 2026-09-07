import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("photos");

// Drop image files into /public/images/gallery/ and list their filenames
// here. Phase 3 makes this an employee-managed upload screen.
const placeholderCount = 6;

export default function PhotosPage() {
  return (
    <>
      <PageHero
        header="Photos"
        intro="Take a look inside the store — our inventory, our space, and some of the great finds that have come through. Follow us on Instagram and Facebook for more."
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
