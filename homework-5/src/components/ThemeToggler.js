import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggler = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: isDarkTheme ? "#333" : "#f5f5f5",
                color: isDarkTheme ? "#fff" : "#333",
                minHeight: "100vh",
                transition: "all 0.3s ease",
            }}
        >
            <h1>{isDarkTheme ? "Тёмная тема" : "Светлая тема"}</h1>
            <button
                onClick={toggleTheme}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: isDarkTheme ? "#555" : "#ddd",
                    color: isDarkTheme ? "#fff" : "#333",
                    border: "none",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                }}
            >
                Переключить тему
            </button>
        </div>
    );
};

export default ThemeToggler;
