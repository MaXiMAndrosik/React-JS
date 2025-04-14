import React from 'react';
import {useDispatch} from "react-redux";

const SagaButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: "LOAD_DATA" });
    };

    return <button onClick={handleClick}>SagaButton</button>;
};

export default SagaButton;