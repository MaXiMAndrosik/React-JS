import { useProducts } from "../../../shared/hooks/useProducts";
import ProductsList from "../../../shared/components/ProductsList";

export default function FeatureProducts() {
    const limit = 3;
    const { featuredProducts, loading, error, handleRetry } = useProducts();

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
        <>
            <section className="products conteiner">
                <h2 style={{ display: "none" }}>Catalog</h2>
                <div data-variant="product">
                    <ProductsList
                        products={randomfeaturedProducts}
                        loading={loading}
                        limit={limit}
                    />
                </div>
            </section>
        </>
    );
}
