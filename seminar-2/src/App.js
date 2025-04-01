import "./App.css";
import Counter from "./components/Counter";
import TextInput from "./components/TextInput";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";


// -----------------------------------------------------------------------
// Seminar Task 1
//   Создать компонент Counter, который отображает кнопку и число.
//   Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку.

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// -----------------------------------------------------------------------
// Seminar Task 2
// Создать компонент TextInput, который содержит текстовое
// поле ввода и отображает введённый текст под ним в реальном
// времени.

// function App() {
//     return (
//         <div className="App">
//             <TextInput />
//         </div>
//     );
// }

// -----------------------------------------------------------------------
// Seminar Task 3
// Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.

// function App() {
//     return (
//         <div className="App">
//             <ToDoList />
//         </div>
//     );
// }

// -----------------------------------------------------------------------
// Seminar Task 4
// Создать компонент Timer, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала.

function App() {
    return (
        <div className="App">
            <Timer />
        </div>
    );
}

export default App;
