import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
    const { id, title, description, price, image } = product;

    const currentPrice = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return (
        <div className="product-card">
            <img src={image} alt="product" />
            <div className="product-card__cart">
                <AddToCartButton product={product} />
            </div>
            <div className="product-card__text">
                <Link
                    to={`/product/${id}`}
                    state={{ product }}
                    className="product-card__link"
                >
                    {title}
                </Link>

                <p>{description}</p>
                <h3>{currentPrice}</h3>
            </div>
        </div>
    );
};

export default ProductCard;
