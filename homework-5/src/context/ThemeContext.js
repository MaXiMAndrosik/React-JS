import React, { createContext, useReducer, useContext } from "react";
import { themeReducer, initialState } from "./ThemeReducer";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const toggleTheme = () => {
        dispatch({ type: "TOGGLE_THEME" });
    };

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
