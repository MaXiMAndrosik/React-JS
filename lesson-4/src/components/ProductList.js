import React from 'react';
import {useParams} from "react-router-dom";
import Product from "./Product";
import Pagination from "./Pagination";

function ProductList({ products }) {
    const { pageNumber } = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const productsPerPage = 3;
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

    return (
        <div>
            {currentProducts.map((product, index) => (
                <Product key={index} product={product} />
            ))}
            <Pagination totalProducts={products.length} productsPerPage={productsPerPage} currentPage={currentPage} />
        </div>
    );
}

export default ProductList;