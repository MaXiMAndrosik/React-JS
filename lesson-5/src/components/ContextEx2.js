import React, { createContext, useContext, useState } from "react";

// Шаг 1: Создаем контекст
const ThemeContext = createContext();

const ThemedButton = () => {

    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            Themed Button
        </button>
    );
};

//Компонент, который устанавливает контекст
const UseThemeContext = () => {
    const [theme, setTheme] = useState({
        background: 'lightgrey',
        foreground: 'black',
    });

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <h1>Использование React.Context</h1>
                <ThemedButton />
                <button
                    onClick={() =>
                        setTheme({
                            background: 'black',
                            foreground: 'white',
                        })
                    }
                >
                    Сменить тему
                </button>
            </div>
        </ThemeContext.Provider>
    );
}

export default UseThemeContext;