import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet library

function MapComponent() {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (mapContainer && !mapContainer.hasChildNodes()) {
      // Initialize the map if the container exists and is empty
      const map = L.map(mapContainer).setView([54.0741489, -2.8642577], 11);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([54.0741489, -2.8642577]).addTo(map);
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div 
        id="map"
        style={{ width: "99%", maxWidth: "1259px", height: "300px", border: "2px solid black", position: "absolute", left: "0" }} 
      ></div>
    </div>
  );
};

export default MapComponent;



