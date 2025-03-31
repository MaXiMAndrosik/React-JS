import React from 'react';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
import './App.css';

// -----------------------------------------------------------------------
// Seminar Task 1
// ● Установить Node.js и NPM (если еще не установлены).
// ● Создать новый проект React, используя Create React App, выполнив
// команду npx create-react-app my-first-react-app в
// терминале.
// ● Запустить проект, используя команду npm start в директории
// проекта, и убедиться, что приложение отображается в браузере.
// ● Заменить шаблонный текст на произвольный

// const element = <h3 className='element'>Первое приложение на React!</h3>

// function App() {
//   return (
//     <div className="App">
//       {element}
//     </div>
//   );
// }

// -----------------------------------------------------------------------
// Seminar Task 2
// 1. Создать функциональный компонент Greeting, который выводит
// простое приветствие, например, <h1>Привет, React!</h1>.

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3 className='element'>Seminar Task 2</h3>
//         <Greeting />
//       </header>
//     </div>
//   );
// }

// -----------------------------------------------------------------------
// Seminar Task 3
// 1. Создать функциональный компонент CurrentTime, который будет
// отображать текущее время, форматированное в удобочитаемом виде
// (например, "Текущее время: 14:35").

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className='element'>Seminar Task 3</h1>
//         <CurrentTime />
//       </header>
//     </div>
//   );
// }

// -----------------------------------------------------------------------
// Seminar Task 4
// 1. Модифицировать компонент Greeting, чтобы он выводил различные
// приветствия в зависимости от времени суток, например, "Доброе утро" или
// "Добрый вечер", используя условный рендеринг.

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className='element'>Seminar Task 4</h1>
//         <Greeting />
//       </header>
//     </div>
//   );
// }

// -----------------------------------------------------------------------
// Seminar Task 5
// 1. Создать функциональный компонент EventCard, который будет отображать
// информацию о событии: название, дату и место проведения. Компонент должен
// принимать эти данные через пропсы.
// 2. В компоненте App, использовать компонент EventCard несколько раз с
// различными данными о событиях, переданными через пропсы, чтобы показать
// список предстоящих событий.
// 3. Добавить минимальную стилизацию для компонента EventCard, используя CSS
// классы, чтобы визуально выделить информацию о каждом событии.

function App() {
  return (
    <div className="App">
      <h1 className='element'>Seminar Task 5</h1>
      <div>
        <EventCard title='Посещение музея' date='12.12.2024 13:15' place='Музей ВОВ' choice/>
        <EventCard title='Посещение кинотеатра' date='10.10.2024 19:15' place='Кинотеатр "Октябрь"'/>
      </div>
    </div>
  );
}

export default App;
