import { useState, useEffect } from "react";
import { fetchFeaturedProducts } from "../api/featureApi";

export const useProducts = (limit = 100) => {
    const [featuredProducts, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);

    const loadProducts = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchFeaturedProducts(limit);
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, [retryCount]);

    const handleRetry = () => {
        setRetryCount((prev) => prev + 1);
    };

    return {
        featuredProducts,
        loading,
        error,
        handleRetry,
    };
};
