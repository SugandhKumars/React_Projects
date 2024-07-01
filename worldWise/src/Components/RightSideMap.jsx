import React, { useEffect, useState } from "react";
import styles from "./RightSideMap.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import CityItem from "./CityItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import useSearchUrl from "../hooks/useSearchUrl";
function RightSideMap() {
  const [mapPosition, setMapPosition] = useState([22.2442, 68.9685]);
  const [city, setCity] = useState([]);
  const [lat, lang] = useSearchUrl();
  useEffect(() => {
    async function getCity() {
      let res = await fetch(`http://localhost:3000/cities`);
      let data = await res.json();
      setCity(data);
    }
    getCity();
  }, []);

  useEffect(() => {
    if (lat || lang) setMapPosition([lat, lang]);
  }, [lat, lang]);

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
        <Change position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function Change({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lang=${e.latlng.lng}`);
    },
  });
}

export default RightSideMap;
