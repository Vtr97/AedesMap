import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import { LatLng } from "leaflet";
import { useState } from "react";
import { MdMyLocation } from "react-icons/md";

const Map: React.FC = () => {
    const [position, setPosition] = useState<null | LatLng>(null);

    const LocationController = () => {
        const handleLocate = () => {
            map.locate();
            map.once("locationfound", (e) => {
                setPosition(e.latlng);
                map.flyTo(e.latlng, 13);
            });
            map.once("locationerror", () => {
                alert(
                    "Não foi possível acessar sua localização. Permitir o acesso a localização"
                );
            });
        };
        const map = useMap();

        return (
            <button
                onClick={handleLocate}
                className={styles["locate-button"]}
                title="achar minha localização"
            >
                <MdMyLocation color="white" />
            </button>
        );
    };

    return (
        <MapContainer
            className={styles.map}
            zoom={13}
            center={{ lat: 51.505, lng: -0.09 }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && (
                <Marker position={position}>
                    <Popup>Você está aqui</Popup>
                </Marker>
            )}
            <LocationController />
        </MapContainer>
    );
};

export default Map;
