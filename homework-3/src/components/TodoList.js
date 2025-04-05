import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid } from "@mui/material";

// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText) {
            setTasks([...tasks, { text: taskText }]);
            setTaskText("");
        }
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <Box component="section" sx={{ p: 2 }}>
            <TextField
                fullWidth
                value={taskText}
                label="Добавьте новую задачу"
                onChange={(e) => setTaskText(e.target.value)}
                placeholder=""
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                required
                autoFocus
                style={{ marginBottom: 16 }}
            />
            <Button
                variant="contained"
                onClick={handleAddTask}
                disabled={!taskText}
            >
                Добавить задачу
            </Button>

            <Box component="section" sx={{ p: 2 }}>
                {tasks.map((task, index) => (
                    <Box component="task" key={index} sx={{ p: 2 }}>
                        <Card variant="outlined">
                            <Grid
                                container
                                direction="row"
                                sx={{ alignItems: "center" }}
                            >
                                <Grid size={11}>
                                    <Typography variant="body1" sx={{ p: 1 }}>
                                        {task.text}
                                    </Typography>
                                </Grid>
                                <Grid size={1}>
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => handleDeleteTask(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default TodoList;
