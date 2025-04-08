import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Context from "./components/Context";
import ComponentViewer from "./components/Higher-Order-Component";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./components/Store";
import userStore from "./store/store";
import ProfileForm from "./components/ProfileForm/ProfileForm";

// -----------------------------------------------------------------------
// Seminar 5 Task 1
// Создайте контексты UserContext и ThemeContext с начальными значениями (например, имя пользователя: "Гость", тема: "светлая").

// ● Реализуйте компонент App:
// ○ Оберните дочерние компоненты в UserContext.Provider и ThemeContext.Provider.
// ○ Добавьте возможность изменения имени пользователя и темы через интерфейс пользователя.

// ● Создайте компоненты, использующие эти контексты:
// ○ Header должен отображать приветствие с именем пользователя.
// ○ Profile может показывать более детальную информацию о пользователе или просто использовать тему для стилизации.
// ○ Footer должен использовать тему для стилизации и, возможно, отображать копирайт с текущим годом.

// ● Добавьте возможность изменения темы и имени пользователя в интерфейсе, используя состояние в компоненте App и передавая
// функции для изменения через контекст.

// function App() {
//     return (
//         <div className="App">
// 			<Context />
//         </div>
//     );
// }

// -----------------------------------------------------------------------
// Seminar 5 Task 2
// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для
// оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который
// определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого
// компонента должен отображаться загрузочный индикатор.
// 1. Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый
// компонент, который показывает либо индикатор загрузки, либо содержимое оригинального
// компонента в зависимости от пропса isLoading.
// 2. Можно использовать простой текстовый индикатор или любой спиннер из доступных
// библиотек.

// function App() {
//     return (
//         <div className="App">
//             <h1>Seminar 5 Task 2</h1>
//             <Box>
//                 <ComponentViewer isLoading={true}>
//                     <h1>Hello</h1>
//                 </ComponentViewer>
//             </Box>
//             <Box>
//                 <ComponentViewer isLoading={false}>
//                     <h1>Содержимое оригинального компонента</h1>
//                 </ComponentViewer>
//             </Box>
//         </div>
//     );
// }

// -----------------------------------------------------------------------
// Seminar 5 Task 3
// Создать простое приложение счетчика, которое увеличивает или уменьшает значение на 1.
// ● Action types: INCREMENT, DECREMENT.
// ● Actions: Создайте два действия: одно для увеличения счетчика и другое для его уменьшения.
// ● Reducer: Реализуйте редьюсер, который обрабатывает эти действия и изменяет состояние счетчика соответствующим
// образом.
// ● Component: Создайте компонент, который отображает счетчик и имеет кнопки для его увеличения и уменьшения.

// function App() {
//     return (
//         <div className="App">
//             <h1>Seminar 5 Task 3</h1>
//             <Provider store={store}>
//                 <Counter />
//             </Provider>
//         </div>
//     );
// }

// -----------------------------------------------------------------------
// Seminar 5 Task 4
//  Создать функциональность для обновления профиля пользователя, включая имя и email.
// ● Action types: UPDATE_NAME, UPDATE_EMAIL.
// ● Actions: Определите действия для обновления имени и email пользователя.
// ● Reducer: Напишите редьюсер, который обновляет профиль пользователя в соответствии с выполненными действиями.
// ● Component: Разработайте форму для ввода нового имени и email, а также кнопку для отправки обновлений.

function App() {
    return (
        <div className="App">
            <h1>Seminar 5 Task 4</h1>
            <Provider store={userStore}>
                <div className="App">
                    <h1>Обновление профиля пользователя</h1>
                    <ProfileForm />
                </div>
            </Provider>
        </div>
    );
}

export default App;
