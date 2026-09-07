import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { categoryPages } from "@/lib/categoryContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("nonSportsCards");

export default function Page() {
  return <CategoryPageTemplate data={categoryPages["non-sports-cards"]} />;
}
