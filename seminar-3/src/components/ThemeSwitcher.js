import { useState } from "react";
import * as React from "react";
import Switch from "@mui/material/Switch";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------
// Seminar Task 5
// Создайте компонент ThemeSwitcher. Этот компонент будет
// содержать кнопку, при нажатии на которую будет меняться
// тема интерфейса (светлая/темная).

const ThemeSwitcher = () => {
    Content.propTypes = {
        theme: PropTypes.string.isRequired,
    };

    const [theme, setTheme] = useState("light");

    function toggleLight() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const label = { inputProps: { "aria-label": "Switch demo" } };

    return (
        <div className="footer_content">
            <Content theme={theme} />
            <Switch {...label} defaultChecked onChange={toggleLight} />
        </div>
    );
};

function Content({ theme }) {
    return (
        <div
            className="footer_content"
            style={{
                backgroundColor: theme === "light" ? "#aeaeae" : "#454545",
            }}
        >
            <p>Здесть находится какой-то контент с фоном</p>
        </div>
    );
}

export default ThemeSwitcher;
