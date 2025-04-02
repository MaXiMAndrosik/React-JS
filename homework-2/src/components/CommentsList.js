import React, { useState } from "react";

// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

function CommentsList() {
    
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
    ]);

    const handleDeleteComment = (commentId) => {
        setComments(comments.filter((comment) => comment.id !== commentId));
    };

    return comments.map((comment) => (
        <li className="list-group-item" key={comment.id}>
            <div className="d-flex justify-content-between ">
                <p className="">{comment.text}</p>
                <button className="btn btn-outline-secondary" onClick={() => handleDeleteComment(comment.id)}>
                    Удалить
                </button>
            </div>
        </li>
    ));
}

export default CommentsList;
