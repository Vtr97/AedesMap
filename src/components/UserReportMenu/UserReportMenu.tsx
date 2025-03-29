import React from "react";
import styles from "./UserReportMenu.module.css";
import { IoLocationOutline } from "react-icons/io5";

interface userReport {
    location: string;
    description: string;
}

const userReports: userReport[] = [
    { location: "rua teste , 123 ", description: "embaixo do pneu" },
    { location: "rua teste , 123 ", description: "embaixo do pneu" },
    { location: "rua teste , 123 ", description: "embaixo do pneu" },
    { location: "rua teste , 123 ", description: "embaixo do pneu" },
    { location: "rua teste , 123 ", description: "embaixo do pneu" },
    { location: "rua teste , 123 ", description: "embaixo do pneu" },
];

const UserReportMenu: React.FC = () => {
    const renderReports = (reports: userReport[]) => {
        return reports.map((report) => (
            <div className={styles.report}>
                <p>
                    {" "}
                    <IoLocationOutline color="yellow" />
                    {report.location}
                </p>
            </div>
        ));
    };

    return (
        <div className={styles["user-reports"]}>
            <div className={styles.title}>
                <h2> Meus focos salvos</h2>
                <div className={styles["reports-container"]}>
                {renderReports(userReports)}
                </div>
            </div>
        </div>
    );
};

export default UserReportMenu;
