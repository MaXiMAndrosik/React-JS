import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import RemoveButton from "./RemoveButton";
import EditProduct from "./EditProduct";
import {changeAvailable} from "../redux/catalogSlice";

const ShowCatalog = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.catalog.array);

    function handleEditProduct(product) {
        const changedProduct = {...product, isAvailable: !product.isAvailable};
        dispatch(changeAvailable(changedProduct));
    }

    return (
        <ul className="catalog">
            {state.map((product) => (
                <li key={product.id} className="catalog-item">
                    <h3 className={product.isAvailable ? 'catalog_isAvailable' : 'catalog_isAvailable_false'}>{product.name}</h3>
                    <p className={product.isAvailable ? 'catalog_isAvailable' : 'catalog_isAvailable_false'}>{product.description}</p>
                    <span
                        className={product.isAvailable ? 'catalog_isAvailable' : 'catalog_isAvailable_false'}>{product.price}</span>
                    {product.isAvailable ? <span className={'catalog_isAvailable'} onClick={() =>
                        handleEditProduct(product)}>В наличии</span> : <span className={'catalog_isAvailable_false'}
                                                                             onClick={() => handleEditProduct(product)}>Недоступен</span>}
                    <EditProduct product={product}/>
                    <RemoveButton product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default ShowCatalog;
