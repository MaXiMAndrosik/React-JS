import {combineReducers} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
    counter: counterSlice,
    todos: todosReducer,
});

export default rootReducer;