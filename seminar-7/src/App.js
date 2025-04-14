import './App.css';
import ShowCatalog from "./components/ShowCatalog";
import AddNewProduct from "./components/AddNewProduct";
import UserList from "./components/UserList";

// -------------------------------------------------------------------------
// Seminar 7 Task 1
// Для выполнения этого задания, вам потребуется создать логгирующее
// middleware для Redux, которое будет выводить в консоль информацию о
// действиях (actions) и состоянии (state) до и после выполнения каждого
// действия. Это поможет в отладке и понимании потока данных в вашем
// приложении.
// ● Сначала установите необходимые зависимости для вашего
// проекта, используя npm install @reduxjs/toolkit react-redux. Затем
// создайте middleware, которое принимает три аргумента: store,
// next, и action. Ваше middleware должно выводить в консоль
// текущее действие и состояние до его выполнения, вызывать
// next(action) для передачи действия следующему middleware или
// редьюсеру, а затем выводить в консоль состояние после
// выполнения действия.
// ● После создания middleware, подключите его к вашему Redux
// store. Для этого используйте функцию configureStore из
// @reduxjs/toolkit. В результате, каждое действие, отправленное
// // через store.dispatch, будет логгироваться вашим middleware
// function App() {
//     return (
//         <div className="root">
//             <ShowCatalog />
//             {/* <AddNewProduct /> */}
//         </div>
//     );
// }

// -------------------------------------------------------------------------
// Seminar 7 Task 2
// В этом примере мы создадим базовое приложение, используя Redux Saga
// для выполнения асинхронного запроса данных.

// ● Создайте файл саги. Например, src/sagas/usersSaga.js
// function fetchUsersApi() {
// return fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json());
// }

// ● Рабочая сага: должна выполняться, когда сага перехватит
// действие `FETCH_USERS_REQUEST`

// ● Настройте Redux Saga middleware. В файле, где вы создаете ваш
// store

// ● Теперь, когда сага подключена к вашему приложению, вы
// можете инициировать загрузку пользователей, отправив
// действие FETCH_USERS_REQUEST

function App() {
    return (
        <div className="root">
            <UserList />
        </div>
    );
}

export default App;
