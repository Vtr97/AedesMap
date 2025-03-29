import React from "react";
import styles from "./RegionMenu.module.css";
import { IoLocationOutline } from "react-icons/io5";

interface userReport {
    location: string;
    description: string;
    distance: string
}

const userReports: userReport[] = [
    { location: "rua teste , 123 ", description: "embaixo do pneu" ,distance: "200m"},
    { location: "rua teste , 123 ", description: "embaixo do pneu" ,distance: "200m"},
    { location: "rua teste , 123 ", description: "embaixo do pneu" ,distance: "200m"},
    { location: "rua teste , 123 ", description: "embaixo do pneu" ,distance: "200m"},
    { location: "rua teste , 123 ", description: "embaixo do pneu" ,distance: "200m"},
    { location: "rua teste , 123 ", description: "embaixo do pneu" ,distance: "200m"},
    { location: "rua teste , 123 ", description: "embaixo do pneu" ,distance: "200m"},
];

const RegionMenu: React.FC = () => {
    const renderReports = (reports: userReport[]) => {
        return reports.map((report) => (
            <div className={styles.report}>
                <p>
                    {" "}
                    <IoLocationOutline color="yellow" />
                    localização: {report.location}
                    <br />
                    descrição: {report.description}
                    <br />
                    {report.distance}
                </p>
            </div>
        ));
    };

    return (
        <div className={styles["user-reports"]}>
            <div className={styles.title}>
                <h2> Focos na região</h2>
                <div className={styles["reports-container"]}>
                {renderReports(userReports)}
                </div>
            </div>
        </div>
    );
};

export default RegionMenu;
