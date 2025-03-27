import React, { useState } from "react";
import styles from "./ReportMenu.module.css";
import Button from "../PageButton/Button";
import { IoLocationOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

const location = "rua teste 123 - Bairro Teste, Santo andre- SP";
const description = "água parada embaixo de um pneu";

const ReportMenu: React.FC = () => {
    const [active, setActive] = useState(false);

    const reportConfirm = () => {
        return active ? setActive(false):setActive(true);
    };

    const Menu = () => {
        if (active) {
            return (
                <div className={styles["report-menu"]}>
                    <div className={styles.title}>
                        <h2> Adicionar foco</h2>
                    </div>
                    <div className={styles.location}>
                        <h3>
                            {" "}
                            <IoLocationOutline /> localização do foco:
                        </h3>
                        <p>{location}</p>
                    </div>
                    <div className={styles.description}>
                        <h3>
                            {" "}
                            <FaPen /> Descrição do foco:
                        </h3>
                        <p>{description}</p>
                    </div>

                    <div className={styles.buttons}>
                        <Button variant="emphasized" onClick={reportConfirm}>
                            {" "}
                            Salvar foco
                        </Button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.confirmation}>
                    <div className={styles.message}>
                        <h2>
                            {" "}
                            <GiConfirmed size={"5rem"}/>
                            <br/>
                            Foco adicionado com sucesso!
                        </h2>
                    </div>
                    <div className={styles.buttons}>
                        <Button variant="emphasized" onClick={reportConfirm}>
                            {" "}
                            OK
                        </Button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className={styles.wrapper}>
            <Menu />
        </div>
    );
};

export default ReportMenu;
