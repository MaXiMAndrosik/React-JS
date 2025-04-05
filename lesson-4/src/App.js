import "./App.css";
import React, { useState } from "react";
import MouseTracker from "./components/RenderProps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

const articles = [
    { id: 1, title: "Статья 1", content: "Содержание статьи 1" },
    { id: 2, title: "Статья 2", content: "Содержание статьи 2" },
    { id: 3, title: "Статья 3", content: "Содержание статьи 3" },
    { id: 4, title: "Статья 4", content: "Содержание статьи 4" },
];

const products = [
    {
        id: 1,
        name: "Товар 1",
        description: "Описание товара 1",
        price: "100 руб.",
    },
    {
        id: 2,
        name: "Товар 2",
        description: "Описание товара 2",
        price: "200 руб.",
    },
    {
        id: 3,
        name: "Товар 3",
        description: "Описание товара 3",
        price: "300 руб.",
    },
    {
        id: 4,
        name: "Товар 4",
        description: "Описание товара 4",
        price: "400 руб.",
    },
    {
        id: 5,
        name: "Товар 5",
        description: "Описание товара 5",
        price: "500 руб.",
    },
    {
        id: 6,
        name: "Товар 6",
        description: "Описание товара 6",
        price: "600 руб.",
    },
    {
        id: 7,
        name: "Товар 7",
        description: "Описание товара 7",
        price: "700 руб.",
    },
    {
        id: 8,
        name: "Товар 8",
        description: "Описание товара 8",
        price: "800 руб.",
    },
    {
        id: 9,
        name: "Товар 9",
        description: "Описание товара 9",
        price: "900 руб.",
    },
    {
        id: 6,
        name: "Товар 6",
        description: "Описание товара 6",
        price: "600 руб.",
    },
    {
        id: 7,
        name: "Товар 7",
        description: "Описание товара 7",
        price: "700 руб.",
    },
    {
        id: 8,
        name: "Товар 8",
        description: "Описание товара 8",
        price: "800 руб.",
    },
    {
        id: 9,
        name: "Товар 9",
        description: "Описание товара 9",
        price: "900 руб.",
    },
];

// const App = () => (
// 	<>
// 		<div className="App">

// 			{/* --------------------------example 1------------------------------------- */}
// 			{/* <DivWithChild>
// 				<p>Новый текст</p>
// 				<div> Новый элемент div </div>
// 			</DivWithChild>
// 			{console.log(
// 				<DivWithChild>
// 					<p>Новый текст</p>
// 					<div> Новый элемент div </div>
// 				</DivWithChild>
// 			)} */}

// 			{/* --------------------------example 2------------------------------------- */}
// 			{/* <div>
// 				<h2>Пример 2 использования "children"</h2>
// 				<BorderComp>
// 					<p>Этот абзац находится внутри рамки.</p>
// 					<button>Конпка внутри рамки</button>
// 				</BorderComp>
// 				<BorderComp>
// 					<h3>Новый заголовок</h3>
// 				</BorderComp>
// 				<p>Этот абзац находится снаружи рамки</p>
// 			</div> */}

// 			{/* ----------------------------exmple 3------------------------------------ */}
// 			{/* <div>
// 				<h2>Пример 3 использования props.children</h2>
// 				<Card title="Карточка 1">
// 					<p>Это содержимое первой карточки</p>
// 					<button>Действие</button>
// 				</Card>
// 				<Card title="Карточка 2">
// 					<p>Это содержимое второй карточки</p>
// 					<a href="#">Ссылска</a>
// 				</Card>
// 			</div> */}

// 			{/* ---------------------------Render----------------------------------------- */}
// 			<div>
// 				<h1>Пример Render props с функциональными компонентами</h1>
// 				<MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
// 			</div>

// 		</div>
// 	</>
// )

// function App() {
//     return (
//         <Router>
//             <div>
//                 <h1>Приложение для просмотра статей</h1>
//                 <Routes>
//                     {/*<Route path="/" element={<ArticleList articles={articles} />} */}
//                     <Route path="/articles/:id" element={<ArticleDetail articles={articles} />}/>
//                     <Route path="*" element={<ArticleList articles={articles} />}/>
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

function App() {
    return (
        <Router>
            <div>
                <h2>Список товаров</h2>
                <Routes>
                    <Route path="/page/:pageNumber" element={<ProductList products={products} />}/>
                    <Route path="/product/:productId" element={<ProductDetail products={products} />}/>
                    <Route path="/" element={<ProductList products={products} />}/>
                </Routes>
            </div>
        </Router>
    );
}

function DivWithChild({ children }) {
    return <div>{children}</div>;
}

function BorderComp({ children }) {
    return (
        <div style={{ border: "1px solid black", padding: "16px" }}>
            {children}
        </div>
    );
}

function Card({ children, title }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "16px",
                marginBottom: "16px",
            }}
        >
            <h2>{title}</h2>
            <p>Любой рекламный текст</p>
            {children}
        </div>
    );
}

const MouseInfo = ({ x, y }) => {
    return (
        <div>
            <h2>Положение курсора мыши</h2>
            <p>
                X: {x}, Y: {y}
            </p>
        </div>
    );
};

export default App;
