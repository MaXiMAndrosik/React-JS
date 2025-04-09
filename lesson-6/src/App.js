import React from "react";
import "./App.css";
import CounterComponent from "./components/CounterComponent";
import ButtonComponent from "./components/ButtonComponent";
import ButtonComponentDecrement from "./components/ButtonComponentDecrement";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { FilterProvider } from "./contexts/FilterContext";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <h2>Передача данных из компонента в стор</h2>
                <CounterComponent />
                <ButtonComponent />
                <ButtonComponentDecrement />
                <h2>combineReducers</h2>
                <h2>Список задач</h2>
                <FilterProvider>
                    <AddTodo />
                    <TodoList />
                    <TodoFilter />
                </FilterProvider>
            </Provider>
        </div>
    );
}

export default App;
