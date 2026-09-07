import { business } from "@/lib/siteData";

export default function DirectionsMap() {
  const q = encodeURIComponent(business.fullAddress);
  const embedSrc = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <>
      <div className="directions-bar">
        <div className="directions-address">
          <span className="pin-icon">📍</span>
          <span>{business.fullAddress}</span>
        </div>
        <div className="map-buttons">
          <a
            className="map-btn"
            href={`https://maps.google.com/?q=${q}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">📍</span> Google
          </a>
          <a
            className="map-btn"
            href={`https://maps.apple.com/?q=${q}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">📍</span> Apple
          </a>
          <a
            className="map-btn"
            href={`https://waze.com/ul?q=${q}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">📍</span> Waze
          </a>
        </div>
      </div>

      <div className="map-section">
        <iframe
          src={embedSrc}
          width="100%"
          height="260"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map of Ultimate Collectibles, Hopkins MN"
        />
      </div>
    </>
  );
}
