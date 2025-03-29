import "../../../node_modules/leaflet/dist/leaflet.css";
import styles from "./MainAppPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import UserMenu from "../../components/UserMenu/UserMenu";
import { useState } from "react";
import ReportMenu from "../../components/ReportMenu/ReportMenu";
import UserReportMenu from "../../components/UserReportMenu/UserReportMenu";
import Map from "../../components/Map/Map";
import RegionMenu from "../../components/RegionMenu/RegionMenu";

const MainAppPage: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const toggleMenu = (menuType: string) => {
        setActiveMenu(activeMenu === menuType ? null : menuType);
    };
    const getMenuContent = (menuType: string) => {
        switch (menuType) {
            case "report":
                return <ReportMenu />;

            case "userReports":
                return <UserReportMenu />;

            case "focos":
                return <RegionMenu />;
        }
    };
    const activeContent = activeMenu ? getMenuContent(activeMenu) : null;

    return (
        <div className={styles["main-app-page"]}>
            <header className={styles.header}>
                <h1 className={styles.logo}>AedesMap</h1>
            </header>
            <main className={styles.main}>
                <div className={styles.map}>
                    <Map />
                </div>
                <div className={styles.nav}>
                    <UserMenu menuType={activeMenu} content={activeContent} />
                    <NavBar toggleMenu={toggleMenu} />
                </div>
            </main>
        </div>
    );
};
export default MainAppPage;
