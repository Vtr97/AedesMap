import "./Button.css";
import React from "react";

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
        <button className={`button button-${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
