# React JS

### Инициализировать проект

npm init react-app <project-name>

### Запустить проект

npm start

### react-router-dom

npm install react-router-dom

### Material UI

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

### Redux

npm install --save redux react-redux @reduxjs/toolkit
npm install @reduxjs/toolkit
npm install --save redux-thunk // Redux-thunk - один из самых простых миддлваров
npm install redux-saga //  распространенная библиотека для миддлвара
npm install redux-persist //  распространенная библиотека для миддлвара


В современном React-приложении (с использованием функциональных компонентов и хуков) принято использовать следующую структуру папок, ориентированную на features/modules, а не на типы файлов. Это улучшает масштабируемость и изолированность логики.

src/
│
├── app/ # Главная конфигурация приложения (React Router, Redux store, провайдеры)
│ ├── store/ # Redux store (или Zustand конфиг)
│ ├── providers/ # Провайдеры (Theme, Auth, API и т.д.)
│ └── router/ # Маршруты (React Router)
│
├── features/ # Фичи/модули приложения (основная организация кода)
│ ├── auth/ # Авторизация
│ │ ├── api/ # API-запросы (RTK Query / axios)
│ │ ├── components/ # Компоненты фичи
│ │ ├── hooks/ # Кастомные хуки фичи
│ │ ├── types/ # Типы (интерфейсы) для фичи
│ │ └── index.ts # Публичный API фичи (реэкспорт)
│ │
│ └── profile/ # Профиль пользователя (аналогичная структура)
│
├── entities/ # Сущности, не привязанные к фичам (User, Product, Order)
│ ├── user/ # Например, работа с пользователем
│ └── product/ # Логика продукта
│
├── widgets/ # Сложные составные компоненты (крос-фичевые)
│ ├── header/ # Шапка сайта
│ └── sidebar/ # Боковая панель
│
├── shared/ # Переиспользуемый код
│ ├── api/ # Общие API-настройки (axios, RTK Query)
│ ├── lib/ # Утилиты (форматирование дат, валидация)
│ ├── hooks/ # Глобальные хуки (useDebounce, useLocalStorage)
│ ├── ui/ # UI-кит (кнопки, инпуты, модалки)
│ │ ├── button/ # Отдельный компонент
│ │ └── input/ # Стили и пропсы
│ └── styles/ # Глобальные стили, темы
│
├── pages/ # Страницы (роуты)
│ ├── HomePage/ # Главная страница
│ └── NotFoundPage/ # 404
│
├── assets/ # Статика (шрифты, картинки, SVG)
│ ├── images/
│ └── fonts/
│
├── styles/ # Глобальные стили (reset.css, variables.scss)
└── index.tsx # Входная точка
