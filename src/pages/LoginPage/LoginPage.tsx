import React from "react";
import Button from "../../components/PageButton/Button";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles["login-page"]}>
            <header className={styles.header}>
                <h1 className={styles.logo} onClick={() => navigate("/")}>
                    AedesMap
                </h1>
            </header>
            <main className={styles.main}>
                <h2 className={styles.subtitle}>Entrar</h2>
                <p className={styles.explanation}>
                    Continue com o e-mail e senha para entrar no aplicativo
                </p>
                <form className={styles["login-form"]}>
                    <input
                        type="text"
                        placeholder="E-mail"
                        required
                        className={styles.input} // Adicionei a classe input, assumindo que existe no CSS
                    />
                    <input
                        type="text"
                        placeholder="Senha"
                        required
                        className={styles.input} // Adicionei a classe input, assumindo que existe no CSS
                    />
                    <Button variant="emphasized">Entrar</Button>
                </form>
                <div className={styles.forgot}>
                    <Button variant="normal">Esqueci minha senha</Button>
                </div>
                <p className={styles["no-account"]}>
                    Não tem uma conta?
                    <span
                        className={styles.link}
                        onClick={() => navigate("/register")}
                    >
                        Cadastre-se aqui
                    </span>
                </p>
            </main>
        </div>
    );
};

export default LoginPage;
