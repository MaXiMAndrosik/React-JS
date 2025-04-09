import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
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

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
