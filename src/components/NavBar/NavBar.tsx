import styles from "./NavBar.module.css";
import { TbMapSearch } from "react-icons/tb";
import { RiMapPinAddFill, RiFileList2Fill } from "react-icons/ri";
import UserMenu from "../UserMenu/UserMenu";
import { useState } from "react";
import ReportMenu from "../ReportMenu/ReportMenu";
import UserReportMenu from "../UserReportMenu/UserReportMenu";


const NavBar: React.FC = () => {
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
        <div className={styles.navigation}>
            <UserMenu menuType={activeMenu} content={activeContent} />
            <nav className={styles["nav-bar"]}>
                <ul>
                    <li onClick={() => toggleMenu("focos")}>
                        <TbMapSearch />
                        <br />
                        Focos na região
                    </li>
                    <li onClick={() => toggleMenu("report")}>
                        <RiMapPinAddFill />
                        <br />
                        Reportar focos
                    </li>
                    <li onClick={() => toggleMenu("userReports")}>
                        <RiFileList2Fill />
                        <br />
                        Meus focos
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
