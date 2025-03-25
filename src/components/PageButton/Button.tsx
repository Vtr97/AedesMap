import React from "react";
import styles from "./Button.module.css";


interface ButtonProperties {
    variant?: "emphasized" | "normal";
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProperties> = ({
    variant = "emphasized",
    children,
    onClick,
}) => {
    return (
        <button
            className={`${styles.button} ${styles[`button-${variant}`]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
