"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap({ address, zipCode, city }) {
    const mapContainer = useRef(null);  // Ref auf das div
    const mapInstance = useRef(null);   // Ref auf die Leaflet-Instanz

    useEffect(() => {
        if (!mapContainer.current) return;

        // Karte nur initialisieren, wenn noch keine Instanz existiert
        if (!mapInstance.current) {
            mapInstance.current = L.map(mapContainer.current).setView(
                [51.1657, 10.4515],
                6
            );

            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconUrl: "/marker-icon.png",
                shadowUrl: "/marker-shadow.png",
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            }).addTo(mapInstance.current);
        }

        // Geocode Adresse
        fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                `${address}, ${zipCode} ${city}`
            )}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.[0]) {
                    const { lat, lon } = data[0];
                    mapInstance.current.setView([lat, lon], 15);

                    // Marker hinzufügen (nur einmal)
                    if (!mapInstance.current._markerAdded) {
                        L.marker([lat, lon]).addTo(mapInstance.current);
                        mapInstance.current._markerAdded = true;
                    }
                }
            });

        // Cleanup beim Unmount
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, [address, zipCode, city]);

    return (
        <div
            ref={mapContainer}
            style={{
                height: "300px",
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
            }}
            className="shadow"
        />
    );
}
