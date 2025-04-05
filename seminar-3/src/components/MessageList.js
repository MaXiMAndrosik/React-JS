import React, { useState } from "react";

// -----------------------------------------------------------------------
// Seminar Task 3
// 	Создайте компонент MessagesList, который отображает список
// сообщений. Каждое сообщение должно иметь уникальный id и
// текст.
// 	Используйте проп key при рендеринге списка, чтобы
// обеспечить оптимальную производительность.

const MessageList = () => {
    const [messageList, setMessageList] = useState([
        { id: 1, text: "Message 1" },
        { id: 2, text: "Message 2" },
        { id: 3, text: "Message 3" },
    ]);

    return (
        <div>
            <ul className="MessageList">
                {messageList.map((item) => (
                    <li className="MessageList-text" key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageList;
