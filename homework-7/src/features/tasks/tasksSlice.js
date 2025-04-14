import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialTasks } from "../../data/tasks";

// Имитация асинхронной загрузки задач
export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async (_, { rejectWithValue }) => {
        try {
            // Имитируем задержку сети
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return initialTasks;
        } catch (error) {
            return rejectWithValue("Не удалось загрузить задачи");
        }
    }
);

// Имитация асинхронного добавления задачи
export const addTaskAsync = createAsyncThunk(
    "tasks/addTaskAsync",
    async (title, { rejectWithValue }) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            const newTask = {
                id: Date.now(),
                title,
                completed: false,
            };
            return newTask;
        } catch (error) {
            return rejectWithValue("Не удалось добавить задачу");
        }
    }
);

// Имитация асинхронного переключения статуса
export const toggleTaskAsync = createAsyncThunk(
    "tasks/toggleTaskAsync",
    async (taskId, { rejectWithValue, getState }) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 300));
            const state = getState();
            const task = state.tasks.data.find((task) => task.id === taskId);
            return { id: taskId, completed: !task.completed };
        } catch (error) {
            return rejectWithValue("Не удалось обновить задачу");
        }
    }
);

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Загрузка задач
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Добавление задачи
            .addCase(addTaskAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTaskAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
            .addCase(addTaskAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Переключение статуса
            .addCase(toggleTaskAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(toggleTaskAsync.fulfilled, (state, action) => {
                state.loading = false;
                const task = state.data.find(
                    (task) => task.id === action.payload.id
                );
                if (task) {
                    task.completed = action.payload.completed;
                }
            })
            .addCase(toggleTaskAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default tasksSlice.reducer;
