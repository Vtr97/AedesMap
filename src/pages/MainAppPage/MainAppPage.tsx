import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import styles from "./MainAppPage.module.css";
const MainAppPage: React.FC = () => {
    return (
        <div className={styles["main-app-page"]}>
            <header className={styles.header}>
                <h1 className={styles.logo}>AedesMap</h1>
            </header>
            <main className={styles.main}>
                <MapContainer
                    className={styles.map}
                    center={[51.505, -0.09]}
                    zoom={10}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </main>
        </div>
    );
};

export default MainAppPage;
