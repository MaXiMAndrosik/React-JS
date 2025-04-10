import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/favoritesSlice";

const FavoritesList = () => {
    const favorites = useSelector((state) => state.favorites.items);
    const dispatch = useDispatch();

    return (
        <div className="favorites-list">
            <h2>Избранные товары</h2>
            {favorites.length === 0 ? (
                <p>Список избранного пуст</p>
            ) : (
                <ul>
                    {favorites.map((item) => (
                        <li key={item.id} className="favorite-item">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Цена: {item.price} руб.</p>
                            <button
                                onClick={() =>
                                    dispatch(removeFromFavorites(item.id))
                                }
                                className="remove-favorite-btn"
                            >
                                Удалить из избранного
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesList;
