import React from "react";
import styles from "./UserReportMenu.module.css";
import { IoLocationOutline } from "react-icons/io5";


const userReports: [React.ReactNode] = [
    <div className={styles.report}>
        <p>
            {" "}
            <IoLocationOutline color="yellow" /> Rua teste 123 - bairro teste,
            santo andré sp ,123123
        </p>
    </div>,
];

const UserReportMenu: React.FC = () => {
    return (
        <div className={styles["user-reports"]}>
            <div className={styles.title}>
                <h2> Meus focos salvos</h2>
                {userReports}
            </div>
        </div>
    );
};

export default UserReportMenu;
