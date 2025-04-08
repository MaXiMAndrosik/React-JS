import { configureStore } from "@reduxjs/toolkit";

//reducer
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

//создание хранилища
const store = configureStore({
    reducer: reducer,
});

export default store;
