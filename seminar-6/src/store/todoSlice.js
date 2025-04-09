import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [], // Объект с полем items
// };

const todoSlice = createSlice({
    name: "todos",
    initialState: { items: [] },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                // Работаем с state.items
                id: Date.now(),
                description: action.payload,
                isCompleted: false,
            });
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(
                (todo) => todo.id !== action.payload
            );
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        },
    },
});

// Экспортируем actions и reducer
export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
