import { useEffect, useState } from "react";
// -----------------------------------------------------------------------
// Seminar Task 4
// Создать компонент Timer, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала.

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="timer">
            <p>Tекущее время: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;
