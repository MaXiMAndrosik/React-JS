import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from '../actions/userActions';

// Функция для выполнения запроса к API
function fetchUsersApi() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}

// Рабочая сага
function* fetchUsers() {
    try {
        const users = yield call(fetchUsersApi); // Выполняем запрос
        console.log(users);
        yield put(fetchUsersSuccess(users)); // Отправляем успешный результат
    } catch (error) {
        yield put(fetchUsersFailure(error.message)); // Отправляем ошибку
    }
}

// Сага, которая слушает действие `FETCH_USERS_REQUEST`
function* usersSaga() {
    yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}

export default usersSaga;