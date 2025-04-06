import React, { createContext, useContext } from 'react';

//--------------------------------------------------------------------
// Без createContext!!!!

// function GrandParent() {
//     return <Parent message='Hello from the top!' />
// }

// function Parent(props) {
//     return <Child message={props.message} />
// }

// function Child(props) {
//     return <GrandChild message={props.message} />
// }

// function GrandChild(props) {
//     return <GrandGrandChild message={props.message} />
// }

// function GrandGrandChild(props) {
//     return <span>{props.message}</span>
// }

// export default GrandParent;

//--------------------------------------------------------------------

// Создаем контекст
const MessageContext = createContext();

// Компонент GrandGrandChild использует контекст
function GrandGrandChild() {

    // Используем useContext для доступа к контексту
    const message = useContext(MessageContext);

    return <span>{message}</span>

}

// Компонент GrandParent устанавливает контекст
function GrandParent() {
    return (
        <MessageContext.Provider value='Hello from the top Context!'>
            <Parent />
        </MessageContext.Provider>
    );
}

// Компонент Parent передает контекст через пропсы
function Parent() {
    return <Child />;
}

// Компонент Child передает контекст дальше
function Child() {
    return <GrandChild />;
}

// Компонент GrandChild передает контекст на последний уровень
function GrandChild() {
    return <GrandGrandChild />;
}

export default GrandParent;