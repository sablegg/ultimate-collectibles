import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { categoryPages } from "@/lib/categoryContent";

export const metadata = buildMetadata("toys");

export default function ToysPage() {
  return <CategoryPageTemplate data={categoryPages.toys} />;
}
