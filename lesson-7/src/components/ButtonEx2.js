import React from 'react';
import {useDispatch} from "react-redux";

const MyButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: 'BUTTON_CLICKED', payload: 'Hello, World!'});
    };

    return (
        <button onClick={handleClick}>Clock me!</button>
    );
};

export default MyButton;
