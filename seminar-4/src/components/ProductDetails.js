import React from 'react';
import {useParams} from "react-router-dom";

function DetailPage({ products }) {
    const { productId } = useParams();
    const product = products.find(
        (product) => product.id === parseInt(productId)
    );

    return (
        <div>
            <h3>Детали о товаре</h3>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
        </div>
    );
}

export default DetailPage;