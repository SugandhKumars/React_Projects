import React, { useEffect, useState } from "react";
import styles from "./RightSideMap.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CityItem from "./CityItem";
function RightSideMap() {
  const [mapPosition, setMapPosition] = useState([22.2442, 68.9685]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    async function getCity() {
      let res = await fetch(`http://localhost:3000/cities`);
      let data = await res.json();
      setCity(data);
    }
    getCity();
  }, []);
  console.log(city);
  return (
    <div className={styles.right}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {city.map((CityItem) => (
          <Marker
            key={CityItem?.id}
            position={[CityItem?.position?.lat, CityItem?.position?.lang]}
          >
            <Popup>
              {CityItem?.name} {CityItem?.emoji}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default RightSideMap;
