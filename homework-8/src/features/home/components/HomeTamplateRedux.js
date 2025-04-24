import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeaturedProducts } from "../api/homeApiRedux";
import ProductCard from "../../../widgets/ProductCard/ProductCard";
import ProductCardSkeleton from "../../../widgets/ProductCard/ProductCardSkeleton";

const HomeTemplate = () => {
    const dispatch = useDispatch();
    const { featuredProducts, loading, error } = useSelector(
        (state) => state.home
    );

    useEffect(() => {
        const loadData = async () => {
            try {
                await dispatch(fetchFeaturedProducts());
            } catch (error) {
                console.error("Failed to load:", error);
            }
        };

        loadData();
    }, [dispatch]);

    const handleRetry = () => {
        dispatch(fetchFeaturedProducts());
    };

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
            {loading && (
                <div className="products__table">
                    {[...Array(6)].map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            )}
            {!loading && (
                <div className="products__table">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default HomeTemplate;
