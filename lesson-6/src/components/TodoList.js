import React, {useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import withFilter from "../hoc/withFilter";
import {deleteTodo, toggleTodo} from "../actions/todoActions";
import {FilterContext} from "../contexts/FilterContext";

const TodoList = () => {
    // Получаем список задач из Redux хранилища
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const {filter} = useContext(FilterContext);

    const filteredTodos = withFilter(todos, filter);

    const handleToggleTodo = (id) => {
        //Отправляем дейтсвие для изменения статуса задачи
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    if (!todos || todos.length === 0) {
        return <div>Ваш список задач пуст</div>;
    }

    return (
        <ol>
            {filteredTodos.map(todo => (
                <li
                key={todo.id}
                onClick={() => handleToggleTodo(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : "none" }}
                >
                    {todo.text}<button onClick={() => handleDeleteTodo(todo.id)}>Удалить</button>
                </li>
            ))}

        </ol>
    );
};

export default TodoList;
