import { configureStore } from "@reduxjs/toolkit";

//reducer
const reducer = (state = '', action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return state + 1;
        case "UPDATE_EMAIL":
            return state - 1;
        default:
            return state;
    }
};

//создание хранилища пользователя
const userStore = configureStore({
    reducer: reducer,
});

export default userStore;
