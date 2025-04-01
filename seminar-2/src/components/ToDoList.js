import { useRef, useState } from "react";
// -----------------------------------------------------------------------
// Seminar Task 3
// Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.

function ToDoList() {
    const [listItems, setListItems] = useState([
        { text: "Task1" },
        { text: "Task2" },
        { text: "Task3" },
    ]);

    const inputRef = useRef();

    const listItemsUpdate = (event) => {
        if (event.key === "Enter") {
            const newItemText = inputRef.current.value.trim();
            if (newItemText) {
                setListItems([...listItems, { text: newItemText }]);
                inputRef.current.value = "";
            }
        }
    };

    return (
        <>
            <input type="text" ref={inputRef} onKeyDown={listItemsUpdate} />
            <br />
            {listItems.map((item, index) => (
                <div key={index}>{item.text}</div>
            ))}
        </>
    );
}

export default ToDoList;
