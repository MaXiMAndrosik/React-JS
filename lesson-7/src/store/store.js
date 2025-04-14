import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import dataReducer from "./dataReducer";
import asyncMiddleware from "../components/asyncMiddlewareEx3";
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//EX1
//Это промежуточное ПО для демонстации дополнительных эффектов
const middleWare = (store) => (next) => (action) => {
    console.log("Дополнительный эффект");

    setTimeout(() => {
        console.log("Тайм-ауты, вызовы api и т.д.");
    }, 1000);

    return next(action);
};

//EX2
//Это logger middleware, который выводит действия, отправленные в store
const loggerMiddleware = (store) => (next) => (action) => {
    console.log("dispatching", action);
    return next(action);
};

//EX Saga
//Создаем middleware для Redux-Saga
const sagaMiddleware = createSagaMiddleware();

// worker Saga: будет запущен при действиях USER_FETCH_REQUESTED
function* fetchData(action) {
    const fetchUsers = () => async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
            
        );
        return response.json();
    };

    try {
        const users = yield call(fetchUsers(), action.payload);
        // console.log(users);
        yield put({ type: "DATA_LOADED",  payload: users });
    } catch (e) {
        yield put({ type: "LOAD_DATA_FAILD", message: e.message });
    }
}
/*
Запускает fetchUser при каждом отправленном действии `USER_FETCH_REQUESTED`.
Позволяет выполнять одновременные выборки пользователя.
*/
function* mySaga() {
    yield takeEvery("LOAD_DATA", fetchData);
}
/*
В качестве альтернативы вы можете использовать takeLatest.

Не допускает одновременных выборок пользователя. Если "USER_FETCH_REQUESTED" отправляется
во время ожидания выборки, эта ожидающая выборка отменяется
и будет запущена только последняя.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
// }

//EX Persist
// Конфигурация для redux-persist
const persistConfig = {
    key: "root", // Ключ, по которому хранится состояние в storage
    storage, // объект storage для хранения
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // reducer: {
    //     ...rootReducer,
    //     data: dataReducer,
    //     persistedReducer: persistReducer(persistConfig, rootReducer),
    // },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }).concat(
            //Это промежуточное ПО для демонстации дополнительных эффектов
            middleWare,
            //Это logger middleware, который выводит действия, отправленные в store
            loggerMiddleware,
            // Делаем асинхронный запрос к API
            asyncMiddleware,
            thunk,
            sagaMiddleware
        ),
});

// export const store = configureStore({
//     reducer: {
//         ...rootReducer,
//         data: dataReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(
//             //Это промежуточное ПО для демонстации дополнительных эффектов
//             middleWare,
//             //Это logger middleware, который выводит действия, отправленные в store
//             loggerMiddleware,
//             // Делаем асинхронный запрос к API
//             asyncMiddleware,
//             thunk,
//             sagaMiddleware
//         ),
// });

//Запускаем нашу сагу
sagaMiddleware.run(mySaga);

// Инициализируем persistor для сохранения/восстановления состояния
let persistor = persistStore(store);

export default persistor;
