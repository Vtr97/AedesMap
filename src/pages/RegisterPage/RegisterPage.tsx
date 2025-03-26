import React from "react";
import Button from "../../components/PageButton/Button";
import styles from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.grid}>
            <div className={styles.col_center}>
                <div className={styles["register-page"]}>
                    <header className={styles.header}>
                        <h1 className={styles.logo} onClick={() => navigate("/")}>
                            AedesMap
                        </h1>
                    </header>
                    <main className={styles.main}>
                        <h2 className={styles.subtitle}>Registrar</h2>
                        <p className={styles.explanation}>
                            Cadastre-se com nome de usuário, e-mail e senha para
                            utilizar o aplicativo
                        </p>
                        <form className={styles["register-form"]}>
                            <input
                                type="text"
                                placeholder="Usuário"
                                className={styles.input}
                                required
                            />
                            <input
                                type="email"
                                placeholder="E-mail"
                                className={styles.input}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                className={styles.input}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Repetir senha"
                                className={styles.input}
                                required
                            />
                            <Button variant="emphasized">Registrar</Button>
                        </form>
                        <p className={styles["login-here"]}>
                            Já tem uma conta?
                            <span
                                className={styles.link}
                                onClick={() => navigate("/login")}
                            >
                                Faça login aqui
                            </span>
                        </p>
                    </main>
                </div>
            </div>
        </div>
    );
};
export default RegisterPage;
