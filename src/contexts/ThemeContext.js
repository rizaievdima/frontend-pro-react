import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(null);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used with a ThemeProvider");
    }
    return context;
};

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    const contextValue = {
        theme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
