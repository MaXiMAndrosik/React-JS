import React from "react";
import "./ProductCardSkeleton.scss";

const ProductCardSkeleton = () => {
    return (
        <div className="product-card">
            <div className="skeleton-image shimmer"></div>
            <div className="product-card__text shimmer">
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
