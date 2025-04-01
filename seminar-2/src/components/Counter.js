import { useState } from "react";

// -----------------------------------------------------------------------
// Seminar Task 1
//   Создать компонент Counter, который отображает кнопку и число.
//   Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку.

function Counter() {
    const [count, setCount] = useState(0);
    const countIncrement = () => {
        return setCount(count + 1);
    };
    return (
        <>
            <span>{count}</span>
            <br />
            <button onClick={countIncrement}>count +1</button>
        </>
    );
}

export default Counter;
