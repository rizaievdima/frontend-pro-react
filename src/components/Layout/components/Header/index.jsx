import { NavLink } from "react-router";

import { useThemeContext } from "../../../../contexts/ThemeContext";

import styles from "./header.module.css";

export default function Header() {
    const { theme } = useThemeContext();

    return (
        <div className={`${styles.header} ${styles[`mode-${theme}`]}`}>
            <NavLink
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
                to="/contacts"
            >
                Contacts
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
                to="/counter-redux"
            >
                Counter
            </NavLink>

            <NavLink
                className={({ isActive }) =>
                    `${styles["header-link"]} ${isActive ? styles["active"] : ""}`
                }
                to="/todos"
            >
                Todos
            </NavLink>
        </div>
    );
}
