import "./style/bootstrap.css";
import CommentsList from "./components/CommentsList";

// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:

// const [comments, setComments] = useState([
// { id: 1, text: "Это первый комментарий" },
// { id: 2, text: "Это второй комментарий" },
// { id: 3, text: "Это третий комментарий" }
// ]);

function App() {
    return (
        <ul className="list-group">
            <CommentsList />
        </ul>
    );
}

export default App;
