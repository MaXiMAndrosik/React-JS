import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addNewProduct} from "../redux/catalogSlice";

const AddNewProduct = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    function handleAddNewProduct() {
        const product = {
            id: Date.now(),
            name: name,
            description: description,
            price: price,
            isAvailable: true
        }
        dispatch(addNewProduct(product));
        setName('');
        setDescription('');
        setPrice('');
    }

    return (
        <div>
            <input type={'text'} placeholder={'Введите навзание продукта'} value={name}
                   onChange={(e) => setName(e.target.value)}/>
            <input type={'text'} placeholder={'Введите описание продукта'} value={description}
                   onChange={(e) => setDescription(e.target.value)}/>
            <input type={'text'} placeholder={'Введите стоимость продукта'} value={price}
                   onChange={(e) => setPrice(e.target.value)}/>
            <button onClick={() => handleAddNewProduct()}>Добавить</button>
        </div>
    );
};

export default AddNewProduct;
