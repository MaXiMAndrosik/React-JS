import React from "react";

// -----------------------------------------------------------------------
// Seminar 4 Task 2
// Создайте компонент List, который принимает функцию через
// props, и эта функция возвращает элементы списка (<li>). List
// должен рендерить эти элементы внутри <ul>.
// 2. Используйте List для отображения списка пунктов, где каждый
// пункт может иметь свой уникальный стиль или содержимое,
// определенное функцией render props.

function List({ listItems, renderItem }) {
    return (
        <ul>
            {listItems.map((item, index) => (
                <li key={index}>{renderItem(item, index)}</li>
            ))}
        </ul>
    );
}

export default List;
