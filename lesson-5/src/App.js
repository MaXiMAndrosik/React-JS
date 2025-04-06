import "./App.css";
import React, { useState } from "react";
import GrandParent from "./components/Context";
import UseThemeContext from "./components/ContextEx2";
import ChangeThemeContext from "./components/ContextEx3";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./components/Store";

//---------------Компонент высшего порядка---------------
const withStyles = (WrapperComponent, styles) => {
    return (props) => {
        const newProps = { ...props, styles };
        return <WrapperComponent {...newProps} />;
    };
};

//Компонент, который обернут в стили
const Button = ({ styles }) => {
    return <button style={styles}>Click me</button>;
};

const Text = ({ styles }) => {
    return <p style={styles}>Text</p>;
};

//Используем HOC для добавления стилей к компоненту Button
const StyleButton = withStyles(Button, { background: "blue", color: "white" });
const StyleButton2 = withStyles(Button, {
    background: "green",
    color: "white",
});
const StyledText = withStyles(Text, { background: "grey", color: "black" });

//---------------HOC для добавления счетчика к копмоненту

const withCounter = (WrapperComponent) => {
    return (props) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount(count + 1);
        };

        const newProps = {
            count,
            incrementCount,
            ...props,
        };

        return <WrapperComponent {...newProps} />;
    };
};

//Компонент который будет обернут с счетчиком и другими пропсами
const ClickCounter = ({ count, incrementCount, message }) => {
    return (
        <div>
            <p>{message}</p>
            <button onClick={incrementCount}>Click me</button>
            <p>Clicked {count} times</p>
        </div>
    );
};

//Используем HOC для добавления счетчика к компоненту ClickCounter b передаем другие пропсы
const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

function App() {
    return (
        <div>
            {/* use Context */}
            {/* <GrandParent /> */}
            {/* use ContextEx2 */}
            {/* <UseThemeContext /> */}
            {/* use ContextEx3 */}
            {/* <ChangeThemeContext /> */}
            {/* "Компонент высшего порядка " */}
            {/* <h1>
                Пример Компоненты высшего порядка (НОС) с функциональными
                компонентами
            </h1>
            <StyleButton />
            <StyleButton2 />
            <StyledText /> */}
            {/* HOC для добавления счетчика к копмоненту */}
            {/* <h1>Приммер использования нОС с другими пропсами</h1>
            <ClickCounterWithCounterAndProps message="Счетчик кликов:" />
            <ClickCounterWithCounterAndProps message="Счетчик новых кликов:" /> */}
            {/* "Redux " */}
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    );
}

export default App;
