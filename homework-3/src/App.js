import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";

// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// function App() {
//     return (
//         <div className="App">
//             <h1>Температурный конвертер с Material UI</h1>
//             <TemperatureConverter />
//         </div>
//     );
// }

// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

function App() {
    return (
        <div>
            <h1>Список дел с Material UI</h1>
            <TodoList />
        </div>
    );
}

export default App;
