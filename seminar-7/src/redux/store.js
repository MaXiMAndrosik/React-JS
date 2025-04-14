import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "../reducers/userReducer";
import usersSaga from "../sagas/usersSaga";
import { middleware } from "../middlewares/middleWare";

// Создаем middleware для Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Создаем store с применением middleware
const store = createStore(
    userReducer,
    applyMiddleware(sagaMiddleware, middleware)
);

// Запускаем сагу
sagaMiddleware.run(usersSaga);

export default store;
