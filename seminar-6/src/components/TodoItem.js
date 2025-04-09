import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li
            style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
        >
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.description}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Удалить
            </button>
        </li>
    );
};

export default TodoItem;
