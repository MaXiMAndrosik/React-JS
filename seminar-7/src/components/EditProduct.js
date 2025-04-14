import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {editProduct} from "../redux/catalogSlice";

const EditProduct = ({product}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    function handleEditProduct() {
        const newName = prompt('Введите новое имя продукта');
        const newDescription = prompt('Введите новое описание продукта');
        const newPrice = Number(prompt('Введите новую цену'));

        if (newName === null || newDescription === null || newPrice === null) {
            return;
        }

        setName(newName);
        setDescription(newDescription);
        setPrice(newPrice);

        const updatedProduct = {
            ...product,
            name: newName,
            description: newDescription,
            price: Number(newPrice),
        }

        dispatch(editProduct(updatedProduct));

    }

    return (
        <button onClick={handleEditProduct}>Редактировать</button>
    );
};

export default EditProduct;
