import { useThemeContext } from "../../contexts/ThemeContext";

import styles from "./header.module.css";

export default function Header() {
    const { theme } = useThemeContext();

    return (
        <div className={`${styles.header} ${styles[`mode-${theme}`]}`}>
            <h1>Header - {theme}</h1>
        </div>
    );
}
