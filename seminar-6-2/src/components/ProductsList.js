import React from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../store/favoritesSlice";

const products = [
    {
        id: 1,
        name: "Смартфон",
        description: "Новый флагман с отличной камерой",
        price: 79990,
    },
    {
        id: 2,
        name: "Ноутбук",
        description: "Мощный ноутбук для работы и игр",
        price: 129990,
    },
    {
        id: 3,
        name: "Наушники",
        description: "Беспроводные наушники с шумоподавлением",
        price: 19990,
    },
];

const ProductsList = () => {
    const dispatch = useDispatch();

    return (
        <div className="products-list">
            <h2>Все товары</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price} руб.</p>
                        <button
                            onClick={() => dispatch(addToFavorites(product))}
                            className="add-favorite-btn"
                        >
                            Добавить в избранное
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
