import React from "react";
import styles from "./UserMenu.module.css";

interface UserMenuProps {
    menuType: string | null;
    content: React.ReactNode;
}

const UserMenu: React.FC<UserMenuProps> = ({ menuType, content }) => {
    if (!menuType) return null;

    return (
        <div className={styles["user-menu"]}>
            <div
                className="styles.content"
                onClick={(ev) => ev.stopPropagation()}
            >
                {content}
            </div>
        </div>
    );
};

export default UserMenu;
