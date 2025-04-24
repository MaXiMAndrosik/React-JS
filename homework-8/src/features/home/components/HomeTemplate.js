import React from "react";
import { useProducts } from "../../../shared/hooks/useProducts";
import ProductsList from "../../../shared/components/ProductsList";
import "../style/HomeTemplate.scss";

const HomeTemplate = () => {
    const limit = 6;
    const { featuredProducts, loading, error, handleRetry } =
        useProducts();

    // Функция выбирает из массива featuredProducts count 'рандомных' продуктов
    function getRandomElements(arr, count) {
        return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
    }

    const randomfeaturedProducts = getRandomElements(featuredProducts, limit);

    if (error) {
        return (
            <div className="error-state">
                <p>Не удалось загрузить товары: {error}</p>
                <button onClick={handleRetry} className="retry-button">
                    Повторить попытку
                </button>
            </div>
        );
    }

    return (
        <section className="products conteiner">
            <h2 style={{ display: "none" }}>Products</h2>
            <div className="products__title">
                <h3>Featured Items</h3>
                <p>Shop for items based on what we featured in this week</p>
            </div>
            <ProductsList
                products={randomfeaturedProducts}
                loading={loading}
                limit={limit}
            />
        </section>
    );
};

export default HomeTemplate;
