import React from 'react';
import Good from "./Good";
import {Link} from "react-router-dom";

function ListPage({ products }) {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id} style={{ listStyle: "none" }}>
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default ListPage;