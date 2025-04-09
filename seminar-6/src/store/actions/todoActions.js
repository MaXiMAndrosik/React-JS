export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (description) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now(), // Генерация уникального ID
        description,
        isCompleted: false,
    },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});
