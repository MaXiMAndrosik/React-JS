import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTaskAsync, toggleTaskAsync } from "./tasksSlice";

const TasksList = () => {
    const dispatch = useDispatch();
    const { data: tasks, loading, error } = useSelector((state) => state.tasks);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTaskTitle.trim()) {
            dispatch(addTaskAsync(newTaskTitle));
            setNewTaskTitle("");
        }
    };

    const handleToggleTask = (taskId) => {
        dispatch(toggleTaskAsync(taskId));
    };

    if (loading && tasks.length === 0) {
        return <div>Загрузка задач...</div>;
    }

    if (error) {
        return <div style={{ color: "red" }}>Ошибка: {error}</div>;
    }

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
            <h1>Список задач</h1>

            <form onSubmit={handleAddTask} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Новая задача"
                    style={{
                        padding: "8px",
                        marginRight: "10px",
                        width: "300px",
                    }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: "8px 16px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                    }}
                >
                    {loading ? "Добавление..." : "Добавить"}
                </button>
            </form>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            margin: "8px 0",
                            padding: "10px",
                            backgroundColor: "#f5f5f5",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleTask(task.id)}
                            disabled={loading}
                            style={{ marginRight: "10px" }}
                        />
                        <span
                            style={{
                                textDecoration: task.completed
                                    ? "line-through"
                                    : "none",
                                flexGrow: 1,
                            }}
                        >
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>

            {loading && tasks.length > 0 && <div>Обновление...</div>}
        </div>
    );
};

export default TasksList;
