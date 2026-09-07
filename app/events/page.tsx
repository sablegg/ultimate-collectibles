import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/lib/seo";
import { currentEvent } from "@/lib/siteData";
import { heroForSlug } from "@/lib/heroImages";

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
  {
    name: "Dallas Card Show",
    city: "Allen, TX",
    date: "September 10–13, 2026",
    url: "https://www.dallascardshow.com",
    description: (
      <>
        Official show — <a href="https://www.dallascardshow.com" target="_blank" rel="noopener noreferrer">dallascardshow.com</a>
      </>
    ),
  },
  {
    name: "Dallas Card Show",
    city: "Allen, TX",
    date: "November 5–8, 2026",
    url: "https://www.dallascardshow.com",
    description: "Official show — visit the Dallas Card Show website for details.",
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
