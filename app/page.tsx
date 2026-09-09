import { buildMetadata } from "@/lib/seo";
import HomePageClient from "@/components/HomePageClient";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return <HomePageClient />;
}
