import React from 'react';
import {useParams} from "react-router-dom";

function ProductDetail({ products }) {
    const { productId } = useParams();
    const product = products.find((product) => product.id === parseInt(productId, 10));
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default ProductDetail;