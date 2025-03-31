import React from 'react';
// Seminar Task 2
// 1. Создать функциональный компонент Greeting, который выводит
// простое приветствие, например, <h1>Привет, React!</h1>.
// 2. Импортировать компонент Greeting в App.js и использовать его
// внутри компонента App.
// 3. Запустить приложение и убедиться, что приветствие отображается на
// странице.

// function Greeting() {
//     return <h1>Привет, React!</h1>;
// }

// Seminar Task 4
// 1. Модифицировать компонент Greeting, чтобы он выводил различные
// приветствия в зависимости от времени суток, например, "Доброе утро" или
// "Добрый вечер", используя условный рендеринг.
// 2. Использовать new Date().getHours() для определения текущего времени и
// установить условие для отображения соответствующего приветствия.
// 3. Запустить приложение и проверить, что отображается соответствующее
// приветствие в зависимости от времени суток.

function Greeting() {

    const currentTime = new Date().getHours();
    let output = '123423463456';
    if (currentTime >= 6 && currentTime <= 11 ) {
        output = 'Доброе утро';
    }
    if (currentTime >= 11 && currentTime <= 17 ) {
        output = 'Добрый день';
    }
    if (currentTime >= 17 && currentTime <= 22 ) {
        output = 'Добрый вечер';
    }
    if (currentTime >= 22 && currentTime <= 24 ) {
        output = 'Доброй ночи';
    }
    if (currentTime >= 0 && currentTime <= 6 ) {
        output = 'Доброй ночи';
    }

    return (
        <div>
            <h1>Привет, React!</h1>
            <h1>{output}</h1>
        </div>
    );
}

export default Greeting;