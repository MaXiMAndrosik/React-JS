import React from "react";
// -----------------------------------------------------------------------
// Seminar Task 1
// 	Создайте функциональный компонент Greeting, который принимает проп name и отображает сообщение Привет, {name}!.
// 	Используйте компонент Greeting в вашем основном компоненте App, передавая разные имена в качестве пропсов.

const Greeting = ({ name }) => {
    return (
        <div>
            <h1>Привет, {name}!</h1>
        </div>
    );
};

export default Greeting;
