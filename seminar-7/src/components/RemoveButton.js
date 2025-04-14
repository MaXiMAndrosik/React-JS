import React from 'react';
import {useDispatch} from "react-redux";
import {removeProduct} from "../redux/catalogSlice";

const RemoveButton = ({product}) => {
    const dispatch = useDispatch();

    function handleRemoveProduct() {
        dispatch(removeProduct(product));
    }

    return (
        <button onClick={handleRemoveProduct}>Удалить</button>
    );
};

export default RemoveButton;
