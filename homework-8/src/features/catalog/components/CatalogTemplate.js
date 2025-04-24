import React, { useMemo, useState, useCallback } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductsList from "../../../shared/components/ProductsList";
import { CatalogFilters } from "./CatalogFilters";

function CatalogTemplate() {
    const { products, loading, error, handleRetry } = useProducts();
    const [filters, setFilters] = useState({}); // Состояние фильтров

    const menProducts = products.filter(
        (product) => product.category === "MEN"
    );

    const filteredProducts = useMemo(() => {
        if (!Object.keys(filters).length) return menProducts;

        return menProducts.filter((product) => {
            // Фильтрация по размеру
            if (filters.sizes && filters.sizes.length > 0) {
                if (
                    !product.availableSizes?.some((size) =>
                        filters.sizes.includes(size)
                    )
                ) {
                    return false;
                }
            }
            return true;
        });
    }, [menProducts, filters]);

    // Обработчик изменений фильтров
    const handleFilterChange = useCallback((newFilters) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
    }, []);

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
            <CatalogFilters onFilterChange={handleFilterChange} />
            <section className="products conteiner">
                <h2 style={{ display: "none" }}>Catalog products</h2>
                <ProductsList
                    products={filteredProducts}
                    loading={loading}
                    limit={50}
                />
            </section>
        </>
    );
}

export default CatalogTemplate;
