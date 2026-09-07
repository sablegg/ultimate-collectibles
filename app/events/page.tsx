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
        header="Shows &amp; Events"
        intro="We travel to collector shows and events throughout the year — come find us! We bring inventory with us and love connecting with the collector community outside the shop. Check back here for our updated schedule, and join the email list so you never miss an event."
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
