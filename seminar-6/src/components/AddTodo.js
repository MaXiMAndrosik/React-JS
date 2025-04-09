// src/features/todos/AddTodo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const AddTodo = () => {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            dispatch(addTodo(description));
            setDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Добавить задачу..."
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddTodo;
