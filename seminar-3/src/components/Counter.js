import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useState } from "react";
// -----------------------------------------------------------------------
// Seminar Task 2
// Разработайте компонент Counter, который отображает число и
// две кнопки: одна для увеличения значения на 1, а другая для
// уменьшения на 1.
// 2. Используйте хук useState для управления состоянием счётчика.
// 3. Кнопки можно сделать с помощью material ui

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClickUp() {
        setCount(count + 1);
    }

    function handleClickDown() {
        setCount(count - 1);
    }

    return (
        <div className="counter-container">
            <span className="counter-number">{count}</span>
            <ButtonGroup disableElevation variant="contained" aria-label="Disabled button group">
                <Button onClick={() => {handleClickUp();}}>Count++</Button>
                <Button onClick={() => {handleClickDown();}}>Count--</Button>
            </ButtonGroup>
        </div>
    );
}
