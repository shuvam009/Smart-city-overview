import { useEffect, useRef } from "react";

const reports = [
  { position: [22.567, 88.348], label: "Road damage - Esplanade", type: "urgent" },
  { position: [22.594, 88.343], label: "Civic work - Howrah approach", type: "progress" },
  { position: [22.547, 88.367], label: "Water leakage - Park Street", type: "urgent" },
  { position: [22.579, 88.43], label: "Streetlight repaired - Salt Lake", type: "resolved" },
];

export default function KolkataMap() {
  const containerRef = useRef(null);

  useEffect(() => {
    const L = window.L;
    if (!L || !containerRef.current) return undefined;

    const map = L.map(containerRef.current, { zoomControl: false }).setView([22.5726, 88.3639], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);

    reports.forEach((report) => {
      const icon = L.divIcon({
        className: "city-report-marker",
        html: `<span class="${report.type}">${report.type === "resolved" ? "✓" : "!"}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 30],
      });
      L.marker(report.position, { icon }).addTo(map).bindPopup(`<strong>${report.label}</strong><br />Citizen report`);
    });

    return () => map.remove();
  }, []);

  return <div className="leaflet-map" ref={containerRef} aria-label="Live interactive map of Kolkata" />;
}
