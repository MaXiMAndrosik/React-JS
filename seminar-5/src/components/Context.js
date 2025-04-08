import React, { createContext, useState, useContext } from "react";

// -----------------------------------------------------------------------
// Seminar 5 Task 1
// Создайте контексты UserContext и ThemeContext с начальными значениями (например, имя пользователя: "Гость", тема: "светлая").

// ● Реализуйте компонент App:
// ○ Оберните дочерние компоненты в UserContext.Provider и ThemeContext.Provider.
// ○ Добавьте возможность изменения имени пользователя и темы через интерфейс пользователя.

// ● Создайте компоненты, использующие эти контексты:
// ○ Header должен отображать приветствие с именем пользователя.
// ○ Profile может показывать более детальную информацию о пользователе или просто использовать тему для стилизации.
// ○ Footer должен использовать тему для стилизации и, возможно, отображать копирайт с текущим годом.

// ● Добавьте возможность изменения темы и имени пользователя в интерфейсе, используя состояние в компоненте App и передавая
// функции для изменения через контекст.

// Создаем контексты
const UserContext = createContext({
    username: "Гость",
    setUsername: () => {},
});

const ThemeContext = createContext({
    theme: "light",
    setTheme: () => {},
});

// Компонент App
function Context() {
    const [username, setUsername] = useState("Гость");
    const [theme, setTheme] = useState("light");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className={`app ${theme}`}>
                    <Header />
                    <main>
                        <Profile />
                        <SettingsPanel />
                    </main>
                    <Footer />
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

// Компонент Header
function Header() {
    const { username } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <header className={`header ${theme}`}>
            <h1>Добро пожаловать, {username}!</h1>
        </header>
    );
}

// Компонент Profile
function Profile() {
    const { username } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`profile ${theme}`}>
            <h2>Профиль пользователя</h2>
            <p>Имя: {username}</p>
            <p>Текущая тема: {theme === "light" ? "Светлая" : "Тёмная"}</p>
        </div>
    );
}

// Компонент Footer
function Footer() {
    const { theme } = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`footer ${theme}`}>
            <p>© {currentYear} Все права защищены</p>
        </footer>
    );
}

// Компонент для изменения настроек
function SettingsPanel() {
    const { username, setUsername } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const [newUsername, setNewUsername] = useState(username);

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handleUsernameSubmit = (e) => {
        e.preventDefault();
        setUsername(newUsername);
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`settings ${theme}`}>
            <h2>Настройки</h2>

            <form onSubmit={handleUsernameSubmit}>
                <label>
                    Изменить имя пользователя:
                    <input
                        type="text"
                        value={newUsername}
                        onChange={handleUsernameChange}
                    />
                </label>
                <button type="submit">Сохранить</button>
            </form>

            <button onClick={toggleTheme}>
                Переключить тему на {theme === "light" ? "тёмную" : "светлую"}
            </button>
        </div>
    );
}

export default Context;
