import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../actions/todoActions";

const initialState = [];

// Редьюсер ждя обработки действий с задачами
const todosReducer = (state = initialState, action) => {
    console.log('Действие:', action); // Логирование действия

    switch (action.type) {
        case ADD_TODO:
            console.log('Добавлена задача:', action.payload.text); // Логирование новой задачи

            return [...state, { id: Date.now(), text: action.payload.text, completed: false }];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            );
        case DELETE_TODO:
            return state.filter(todo =>
            todo.id !== action.payload.id)
        default:
            return state;
    }
};

export default todosReducer;
