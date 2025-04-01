import "./style/bootstrap.css";
import Message from "./components/Message";

// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).
// Дополнительное задание: Установить расширение React Devtools.

function App() {
    return (
        <div className="container-sm">
            <h2 className="text-center">Список сообщений</h2>
            <ul className="list-group">
                <Message text="Welcome to React" />
                <Message text="Новый проект развернут" />
                <Message text="Компонент Message, отображает переданные ему propsы" />
                <Message text="Стилизация компонентов с использованием Bootstrap" />
            </ul>
        </div>
    );
}

export default App;
