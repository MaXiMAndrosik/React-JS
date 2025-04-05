import React from 'react';
import {Link} from "react-router-dom";

function Product({ product}) {
    return (
        <div>
            <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default Product;