import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import styles from "./MainAppPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import UserMenu from "../../components/UserMenu/UserMenu";
import { useState } from "react";
import ReportMenu from "../../components/ReportMenu/ReportMenu";
import UserReportMenu from "../../components/UserReportMenu/UserReportMenu";

const MainAppPage: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const toggleMenu = (menuType: string) => {
        setActiveMenu(activeMenu === menuType ? null : menuType);
    };
    const getMenuContent = (menuType: string) => {
        switch (menuType) {
            case "report":
                return <ReportMenu />;
                break;
            case "userReports":
                return <UserReportMenu />;
                break;
            default:
                break;
        }
    };
    const activeContent = activeMenu ? getMenuContent(activeMenu) : null;

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
                <div className={styles.nav}>
                    <NavBar toggleMenu={toggleMenu} />
                    <UserMenu menuType={activeMenu} content={activeContent} />
                </div>
            </main>
        </div>
    );
};
export default MainAppPage;
