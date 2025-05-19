import { useThemeContext } from "../../contexts/ThemeContext";

import styles from "./footer.module.css";

export default function Footer() {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <div className={`${styles.header} ${styles[`mode-${theme}`]}`}>
            <h1>Footer</h1>
            <div>Current theme - {theme}</div>
            <button className="button" onClick={toggleTheme}>
                Change theme
            </button>
        </div>
    );
}
