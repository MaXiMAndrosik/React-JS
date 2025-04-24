import React from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsList = ({ products, loading, limit }) => {
    return (
        <>
            {loading && (
                <div className="products__table">
                    {[...Array(limit)].map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            )}
            {!loading && (
                <div className="products__table">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductsList;
