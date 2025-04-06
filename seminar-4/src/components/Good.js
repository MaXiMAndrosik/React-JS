import React from 'react';
import {Link} from "react-router-dom";

function Good({ product }) {
    return (
        <div>
            <h2><Link to={`/product/${product.id}`}>{product.title}</Link></h2>
            <p>{product.description}</p>
        </div>
    );
}

export default Good;