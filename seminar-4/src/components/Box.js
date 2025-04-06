import React from 'react';

// -----------------------------------------------------------------------
// Seminar 4 Task 1
// Создайте компонент Box, который оборачивает содержимое,
// переданное в children, в div с определенными стилями
// (например, с рамкой и отступами).
// ● Используйте Box для оборачивания различных элементов
// (текста, картинок, других компонентов), чтобы
// продемонстрировать его переиспользуемость.

function Box({children}) {
    return (
        <div style={{border: "1px solid lightgray", padding: "10px", maxWidth: "70vw", margin: "20px auto 0 auto"}}>
            {children}
        </div>
    );
}

export default Box;