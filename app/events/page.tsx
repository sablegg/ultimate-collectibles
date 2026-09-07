import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";
import { currentEvent } from "@/lib/siteData";

export const metadata = buildMetadata("events");

// v1: hand-edit this list (and lib/siteData.ts's currentEvent for the top
// bar) when a show is booked. Phase 3 makes this employee-editable from
// /admin/store-settings, each card carrying Name, City, Date, and an
// optional description or table number.
const upcomingEvents = [
  {
    name: currentEvent.name,
    city: currentEvent.city,
    date: currentEvent.date,
    description: "Stop by our booth — bring items to sell or trade on the spot.",
  },
];

export default function EventsPage() {
  return (
    <>
         <PageHero
           header="Events & Shows"
           intro="Find us at local shows and vendor events throughout the year. We post our schedule and featured events here so you can come see us in-person."
           heroImage={heroForSlug("events")}
         />
      <div className="page-content">
        {upcomingEvents.map((ev) => (
          <div className="event-card" key={ev.name + ev.date}>
            <div className="event-card-name">{ev.name}</div>
            <div className="event-card-meta">
              {ev.city} · {ev.date}
            </div>
            {ev.description && (
              <p style={{ marginTop: 8, fontSize: 13, color: "#555" }}>
                {ev.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
