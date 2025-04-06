import "./App.css";
import Box from "./components/Box";
import pic from "./assets/CmBkCF.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List";
import ListPage from "./components/ProductList";
import DetailPage from "./components/ProductDetails";

// -----------------------------------------------------------------------
// Seminar 4 Task 1
// Создайте компонент Box, который оборачивает содержимое,
// переданное в children, в div с определенными стилями
// (например, с рамкой и отступами).

// function App() {
//     return (
//         <div>
//             <Box>
//                 <h2>Контент для children</h2>
//                 <p>Здесь находится текст children</p>
//             </Box>
//             <p>Этот текст находится за рамкой</p>
//             <Box>
//                 <img
//                     src={pic}
//                     alt="logo"
//                     style={{ width: "50%", height: "50%" }}
//                 />
//             </Box>
//         </div>
//     );
// }

// -----------------------------------------------------------------------
// Seminar 4 Task 2
// Создайте компонент List, который принимает функцию через
// props, и эта функция возвращает элементы списка (<li>). List
// должен рендерить эти элементы внутри <ul>.
// 2. Используйте List для отображения списка пунктов, где каждый
// пункт может иметь свой уникальный стиль или содержимое,
// определенное функцией render props.

// function App() {
//     const liElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const renderItem = (item, index) => {
//         const style = { color: index % 2 === 0 ? "blue" : "green" };
//         return <div style={style}>{item} - Уникальный элемент</div>;
//     };

//     return <List listItems={liElements} renderItem={renderItem} />;
// }

// -----------------------------------------------------------------------
// Seminar 4 Task 4
// Создайте маленькое приложение со страницей списка (ListPage) и страницей деталей (DetailPage).
// ● На ListPage отобразите список элементов (например, статей или продуктов), 
// где каждый элемент является ссылкой на
// DetailPage, содержащую детальную информацию об элементе.
// Используйте react-router-dom для настройки маршрутизации.
// ● На DetailPage используйте useParams для извлечения
// параметра из URL (например, ID элемента) и отобразите
// детальную информацию об элементе.

function App() {
    const productList = [
        {
            id: 1,
            title: "Название продукта 1",
            description: "Описание товара 1",
        },
        {
            id: 2,
            title: "Название продукта 2",
            description: "Описание товара 2",
        },
        {
            id: 3,
            title: "Название продукта 3",
            description: "Описание товара 3",
        },
        {
            id: 4,
            title: "Название продукта 4",
            description: "Описание товара 4",
        },
    ];

    return (
        <div className="App">
            <Router>
                <h2>Список товаров</h2>
                <div>
                    <Routes>
                        <Route path={"/page/:pageNumber"} element={<ListPage products={productList} />}/>
                        <Route path="/product/:productId" element={<DetailPage products={productList} />}/>
                        <Route path={"/"} element={<ListPage products={productList} />}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
