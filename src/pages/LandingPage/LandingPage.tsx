import React from "react";
import styles from "./LandingPage.module.css";
import Button from "../../components/PageButton/Button";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles["landing-page"]}>
            <header className={styles.header}>
                <h1 className={styles.logo} onClick={() => navigate("/")}>
                    AedesMap
                </h1>
            </header>
            <main className={styles.main}>
                <h2 className={styles.subtitle}>
                    Utilize <span className={styles.highlight}>Aedes Map</span>{" "}
                    para registrar os focos de dengue na sua região
                </h2>
                <p className={styles.description}>
                    Ao encontrar um foco de dengue na sua região basta
                    compartilhar sua localização junto com uma breve descrição
                    do foco que ele já fica registrado para os usuários.
                </p>
                <div className={styles.buttons}>
                    <Button
                        variant="emphasized"
                        onClick={() => navigate("/login")}
                    >
                        Entrar
                    </Button>
                    <Button
                        variant="normal"
                        onClick={() => navigate("/register")}
                    >
                        Registrar
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
