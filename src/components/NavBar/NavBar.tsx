import styles from "./NavBar.module.css";
import { TbMapSearch } from "react-icons/tb";
import { RiMapPinAddFill, RiFileList2Fill } from "react-icons/ri";

interface NavBarProps {
    toggleMenu: (menuType: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleMenu }) => {
    return (
        <div className={styles.navigation}>
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
