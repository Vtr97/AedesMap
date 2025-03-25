import React from "react";
import styles from "./ReportMenu.module.css";
import Button from "../PageButton/Button";
import { IoLocationOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

/* interface ReportMenuProps {
    location: string;
    description: string;
} */
const location = "rua teste 123 - Bairro Teste, Santo andre- SP";
const description = "água parada embaixo de um pneu";

const ReportMenu: React.FC = () => {
    return (
        <div className={styles["report-menu"]}>
            <div className={styles.title}>
                <h2> Adicionar foco</h2>
            </div>
            <div className={styles.location}>
                <h3> <IoLocationOutline /> localização do foco:</h3>
                <p>{location}</p>
            </div>
            <div className={styles.description}>
                <h3> <FaPen/> Descrição do foco:</h3>
                <p>{description}</p>
            </div>
            <div className={styles.buttons}>
                <Button variant="emphasized"> Salvar foco</Button>
            </div>
        </div>
    );
};

export default ReportMenu;
